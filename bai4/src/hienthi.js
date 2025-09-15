import React from 'react';
import { useState } from 'react';

function Post({ tieuDe, noiDung, luotThichBanDau, luotKhongThichBanDau }) {
  const [luotThich, setLuotThich] = useState(luotThichBanDau);
  const [luotKhongThich, setLuotKhongThich] = useState(luotKhongThichBanDau);

  const xuLyThich = () => {
    setLuotThich(luotThich + 1);
  };

  const xuLyKhongThich = () => {
    setLuotKhongThich(luotKhongThich + 1);
  };

  return (
    <div className="bai-viet">
      <div className="noi-dung">
        <h2 className="tieu-de-bai-viet">{tieuDe}</h2>
        <p>{noiDung}</p>
      </div>
      <div className="nut-bam">
        <button onClick={xuLyThich} className="nut-thich">
          👍 {luotThich}
        </button>
        <button onClick={xuLyKhongThich} className="nut-khong-thich">
          👎 {luotKhongThich}
        </button>
      </div>
    </div>
  );
}

export default Post;