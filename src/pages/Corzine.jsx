import { Card } from "../components/Card";
import { ButtonCoints } from "../components/ButtonCoints";
import { useState, useEffect } from "react";

export const Corzine = ({
  cartItems,
  clickRemuve,
  clickPlus,
  clickMinus,
  productCounts,
  totalPrice,
}) => {
  console.log("Корзина ", cartItems);

  return (
    <>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {cartItems.map((product, index) => (
            <Card
              key={index}
              img={product.img}
              name={product.name}
              prace={product.prace}
              buttonCard={() => clickRemuve(index)}
              nameButton={"Удалить из коорзины"}
              ButtonCoints={
                <ButtonCoints
                  productQuantities={productCounts[index]}
                  clickPlus={() => clickPlus(index)}
                  clickMinus={() => clickMinus(index)}
                />
              }
            />
          ))}
        </>
      )}
      <h1>Итог: {totalPrice}</h1>
    </>
  );
};
