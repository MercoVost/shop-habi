import { Card } from "../components/Card";

export const HomePage = ({
  isClick,
  handleAddToCart,
  products,
  setProducts,
}) => {
  console.log("Главный магазин", ...products);

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
          isAdded={product.isAdded}
        />
      ))}
    </>
  );
};
