import { Card } from "../components/Card";

export const Corzine = ({
  cartItems,
  setCartItems,
  setIsClick,
  isClick,
  setQuantity,
}) => {
  const clickRemuve = (index) => {
    setQuantity((e) => e - 1);
    const newItems = cartItems.filter((_, i) => i !== index);
    console.log(...newItems);
    setCartItems(newItems);
    setIsClick(false);
  };

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
