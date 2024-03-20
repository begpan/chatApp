import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import Message from "../components/Message";

const ChatPage = ({ room, setRoom }) => {
  const [messages, setMessages] = useState([]);
  // mesaj gonderme fonksyinu
  const sendMessage = async (e) => {
    e.preventDefault();

    // kolleksiyonun ref alma
    const messageCol = collection(db, "messages");
    // kolleksiyona dokuman ekle
    addDoc(messageCol, {
      text: e.target[0].value,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    // formu sıfırla
    e.target.reset();
  };

  //   mevcut odada gonderilen mesajları anlık olarak alır

  useEffect(() => {
    // koleksiyonun ref al
    const messageCol = collection(db, "messages");

    // sorgu ayarlarını olustur
    const q = query(
      messageCol,
      where("room", "==", room),
      orderBy("createdAt", "asc")
    );

    // mesajlar koleksiyonundaki verileri al
    // anlık olarak bir koleksiyondaki degısımleri izler
    // koleksiyon her  degitiğinde verdiğimiz  fonksiyon ile
    // koleksiyondaki dokumanlara erişiyoruz

    onSnapshot(q, (snapshot) => {
      // verileri geçici olaraak tutulacagı bos dizi olustur
      const tempMsg = [];
      // dokumanları dön , verilere eriş
      snapshot.docs.forEach((doc) => {
        tempMsg.push(doc.data());
      });

      // mesajları statae aktar
      setMessages(tempMsg);
    });
  }, []);

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>
      <main>
        {messages.map((data, i) => (
          <Message data={data} key={i} />
        ))}
      </main>
      <form onSubmit={sendMessage}>
        <input type="text" required placeholder="Mesajınızı yazın" />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default ChatPage;
