import { Card } from "../components/Card";
import { ButtonCoints } from "../components/ButtonCoints";

export const Corzine = ({
  corzineCards,
  clickRemuve,
  clickPlus,
  clickMinus,
}) => {
  console.log(corzineCards);
  return (
    <>
      {corzineCards.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {corzineCards.map((product, index) => (
            <Card
              key={index}
              img={product.img}
              name={product.name}
              prace={product.prace * product.stock}
              buttonCard={() => clickRemuve(index)}
              nameButton={"Удалить из коорзины"}
              ButtonCoints={
                <ButtonCoints
                  productQuantities={product.stock}
                  clickPlus={() => clickPlus(index)}
                  clickMinus={() => clickMinus(index)}
                />
              }
            />
          ))}
        </>
      )}
      <h1>
        Итог:
        {corzineCards.reduce(
          (total, product) => total + product.prace * product.stock,
          0
        )}
      </h1>
    </>
  );
};
