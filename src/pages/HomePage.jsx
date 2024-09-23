import { info } from "../info";
import { useState } from "react";
import { Card } from "../components/Card";

export const HomePage = ({ setQuantity, addToCart, isClick, setIsClick }) => {
  const [products, setProducts] = useState(
    info.map((product) => ({ ...product, isAdded: false }))
  );

  const handleAddToCart = (productIndex) => {
    setQuantity((e) => e + 1);

    addToCart(products[productIndex]);
    console.log("Товар добавлен в корзину:", products[productIndex].name);

    setProducts((prevProducts) =>
      prevProducts.map((product, index) =>
        index === productIndex ? { ...product, isAdded: true } : product
      )
    );

    setIsClick(true);
  };

  return (
    <>
      {products.map((product, index) => (
        <Card
          key={index}
          img={product.img}
          name={product.name}
          prace={product.prace}
          buttonCard={() => handleAddToCart(index)}
          nameButton={product.isAdded ? "Добавлено" : "Добавить в корзину"}
          isClick={isClick}
        />
      ))}
    </>
  );
};
