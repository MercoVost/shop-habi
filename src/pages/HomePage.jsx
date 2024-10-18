import { Card } from "../components/Card";

export const HomePage = ({ handleAddToCart, products, corzineCards }) => {
  return (
    <>
      {products.map((product, index) => {
        const isProductInCart = corzineCards.some(
          (cart) => cart.name === product.name
        );

        return (
          <Card
            key={index}
            img={product.img}
            name={product.name}
            prace={product.prace}
            buttonCard={() => handleAddToCart(index)}
            nameButton={isProductInCart ? "В корзине" : "Добавить в корзину"}
            isAdded={isProductInCart}
            disabled={isProductInCart}
          />
        );
      })}
    </>
  );
};
