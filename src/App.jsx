import { Route, Routes } from "react-router-dom";
//import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
// import { info } from "./info";
import { useState } from "react";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage";
import { Corzine } from "./pages/Corzine";
import { useNavigate } from "react-router-dom";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isClick, setIsClick] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/corzine`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]); // добавляем товар в корзину
  };

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
                setQuantity={setQuantity}
                addToCart={addToCart}
                isClick={isClick}
                setIsClick={setIsClick}
              />
            }
          />
          <Route
            path="/corzine"
            element={
              <Corzine
                cartItems={cartItems}
                setCartItems={setCartItems}
                isClick={isClick}
                setIsClick={setIsClick}
                setQuantity={setQuantity}
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
