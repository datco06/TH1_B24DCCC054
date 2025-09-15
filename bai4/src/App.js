import React from 'react';
import Post from './hienthi';

function App() {
  return (
    <div className="ung-dung">
      <Post
        tieuDe="Học ReactJS có khó không?"

        luotThichBanDau={0}
        luotKhongThichBanDau={0}
      />
      <Post
        tieuDe="Props và State là gì?"
        luotThichBanDau={0}
        luotKhongThichBanDau={0}
      />
    </div>
  );
}

export default App;