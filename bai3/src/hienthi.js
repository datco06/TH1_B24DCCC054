import React, { useState } from "react";

function HienThi() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Sách", price: 10000 },
    { id: 2, name: "Bút", price: 5000 },
    { id: 3, name: "Vở", price: 7000 },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>Sản phẩm</h3>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - {p.price}đ{" "}
          <button onClick={() => addToCart(p)}>Thêm vào giỏ</button>
        </div>
      ))}

      <h3>Giỏ hàng</h3>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}đ
          </li>
        ))}
      </ul>
      <p><b>Tổng tiền: {total}đ</b></p>
    </div>
  );
}

export default HienThi;
