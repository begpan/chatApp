import { useState } from "react";
import AuthPage from "./pages/AuthPage";
import RoomPage from "./pages/RoomPage";
import ChatPage from "./pages/ChatPage";

const App = () => {
  // kullanıcıının sectigi oda
  const [room, setRoom] = useState(null);
  // kullanıcının yetkisi var mı
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));

  // yetkisi yoksa giriş sayfası
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }
  // yetkisi varsa => oda secme sayfası
  return (
    <div className="container">
      {!room ? (
        // oda sec ilmediyse oda secme sayfasına yonlendir
        <RoomPage setRoom={setRoom} setIsAuth={setIsAuth} />
      ) : (
        // oda secildiyse sohbet sayfasına yonlendir
        <ChatPage room={room} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
