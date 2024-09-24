import { Card } from "../components/Card";

export const Corzine = ({ cartItems, clickRemuve }) => {
  console.log("Корзина ", ...cartItems);

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
            />
          ))}
        </>
      )}
    </>
  );
};
