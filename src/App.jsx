import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { info } from "./info";
import { useState, useEffect } from "react";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage";
import { Corzine } from "./pages/Corzine";
import { useNavigate } from "react-router-dom";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [stateAdded, setStateAdded] = useState();
  const [productCounts, setProductCounts] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/corzine`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

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
    setStateAdded(false);
    console.log(stateAdded);
  };

  const clickRemuve = (index) => {
    setQuantity((e) => Math.max(e - 1, 0));

    const removedItem = cartItems[index];
    const newItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newItems);

    // Обновляем состояние products, устанавливая isAdded в false для удаленного товара
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.name === removedItem.name
          ? { ...product, isAdded: false }
          : product
      )
    );
  };

  useEffect(() => {
    // Инициализируем количество для каждого товара в корзине
    setProductCounts(cartItems.map(() => 1));
  }, [cartItems]);

  const clickPlus = (index) => {
    setProductCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] < cartItems[index].stock) {
        newCounts[index] += 1;
      }
      return newCounts;
    });
  };

  const clickMinus = (index) => {
    setProductCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 1) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };

  const totalPrice = cartItems.reduce((total, product, index) => {
    return total + product.prace * productCounts[index];
  }, 0);

  return (
    <>
      <Header
        titleButton={() => handleBack()}
        buttonCoint={() => handleClick()}
        quantity={quantity}
      ></Header>
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isClick={isClick}
                setIsClick={setIsClick}
                handleAddToCart={handleAddToCart}
                products={products}
              />
            }
          />
          <Route
            path="/corzine"
            element={
              <Corzine
                cartItems={cartItems}
                clickRemuve={clickRemuve}
                clickPlus={clickPlus}
                clickMinus={clickMinus}
                productCounts={productCounts}
                totalPrice={totalPrice}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
