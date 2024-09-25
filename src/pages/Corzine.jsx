import { Card } from "../components/Card";
import { ButtonCoints } from "../components/ButtonCoints";

export const Corzine = ({
  cartItems,
  clickRemuve,
  productQuantities,
  clickPlus,
  clickMinus,
}) => {
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
              ButtonCoints={
                <ButtonCoints
                  productQuantities={productQuantities}
                  clickPlus={() => clickPlus(index)}
                  clickMinus={() => clickMinus(index)}
                />
              }
            />
          ))}
        </>
      )}
    </>
  );
};
