import React from "react";

const RoomPage = ({ setRoom, setIsAuth }) => {
  // form gonderilince tetiklenecek fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    // inputtaki degeri al
    const room = e.target[0].value;

    // kullanıcını  sectigi odayı state a aktar

    setRoom(room.toLowerCase());
  };
  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Gireceksiniz?</p>
      <input type="text" placeholder="ör:haftaiçi" required />

      <button type="submit">Odaya Gir</button>
      <button
        onClick={() => {
          // yetki statweini false a cekeren oda logine yonlendir
          setIsAuth(false);
          // localdeki kaydı kaldır
          localStorage.removeItem("token");
        }}
        type="button"
      >
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
