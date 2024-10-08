import { Card } from "../components/Card";
import { ButtonCoints } from "../components/ButtonCoints";
import { useState, useEffect } from "react";

export const Corzine = ({
  cartItems,
  clickRemuve,
  // clickPlus,
  // clickMinus,
  // praceQuantities,
  //setProductCoint,
  // productCoint,
  productCounts,
  setProductCounts,
  totalPrice,
}) => {
  // const [productCounts, setProductCounts] = useState([]);

  useEffect(() => {
    // Инициализируем количество для каждого товара в корзине
    setProductCounts(cartItems.map(() => 1));
  }, [cartItems]);

  const clickPlus = (index) => {
    setProductCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] < cartItems[index].stock) {
        newCounts[index] += 1; // Увеличиваем количество на 1
      }
      return newCounts;
    });
  };

  const clickMinus = (index) => {
    setProductCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 1) {
        newCounts[index] -= 1; // Уменьшаем количество на 1
      }
      return newCounts;
    });
  };

  // const totalPrice = cartItems.reduce((total, product, index) => {
  //   return total + product.prace * productCounts[index];
  // }, 0);

  //let arr = () => setProductCoint(cartItems.map(() => 1));
  //console.log("Корзина списка", arr);
  console.log("Корзина ", cartItems);
  // const [productCoint, setProductCoint] = useState(
  //   cartItems.map(() => 1)
  //   //1
  //   // Array(cartItems.length).fill(1) // Начальное количество для каждого товара
  // );

  // useEffect(() => {
  //   setProductCoint(cartItems.map(() => 1));
  // }, [cartItems]);

  //console.log("Количества", productCoint);

  // const clickPlus = (index) => {
  //   setProductCoint((prevQuantities) => {
  //     console.log("Previous Quantities:", prevQuantities);
  //     const newQuantities = [...prevQuantities];
  //     newQuantities[index] += 1;
  //     console.log("New Quantities:", newQuantities);
  //     return newQuantities;
  //   });
  // };

  // const clickMinus = (index) => {
  //   setProductCoint((prevQuantities) => {
  //     const newQuantities = [...prevQuantities];
  //     if (newQuantities[index] > 1) {
  //       newQuantities[index] -= 1; // Уменьшаем количество на 1, если больше 1
  //     }
  //     return newQuantities;
  //   });
  // };

  // const praceQuantities = cartItems.reduce((total, product, index) => {
  //   return total + product.price * productCoint[index];
  // }, 0);

  // const clickPlus = () => {
  //   return cartItems.map((e) => e.stock + 1);
  // };

  // const clickMinus = () => {};

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
