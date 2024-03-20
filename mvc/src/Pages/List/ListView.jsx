import React from "react";

const ListView = ({ handleClick }) => {
  return (
    <div>
      <button onClick={handleClick}>Bana tıkla</button>

      <h1>Gönderi Sayısı</h1>
      <div>
        <div>post</div>
        <div>post</div>
        <div>post</div>
      </div>
    </div>
  );
};

export default ListView;
