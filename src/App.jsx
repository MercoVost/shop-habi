import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { info } from "./info";
import { useState } from "react";
import { NotFound } from "./pages/NotFound";
import { HomePage } from "./pages/HomePage";
import { Corzine } from "./pages/Corzine";
import { useNavigate } from "react-router-dom";

function App() {
  const [products, setProducts] = useState(info);
  const [corzineCards, setCorzineCards] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/corzine`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleAddToCart = (index) => {
    const selecterProduct = products[index];
    const isProductCart = corzineCards.some(
      (cart) => cart.name === selecterProduct.name
    );
    console.log("isprodurct", isProductCart);
    if (!isProductCart) {
      setCorzineCards((prevCart) => [...prevCart, selecterProduct]);
    } else {
      console.log("Карточка уже добавлена ");
    }
  };

  const clickRemuve = (index) => {
    setCorzineCards(corzineCards.filter((item, i) => i !== index));
  };

  const clickPlus = (index) => {
    setCorzineCards((prevCards) =>
      prevCards.map((item, i) =>
        i === index ? { ...item, stock: item.stock + 1 } : item
      )
    );
  };

  const clickMinus = (index) => {
    setCorzineCards((prevCards) =>
      prevCards.map((item, i) =>
        i === index && item.stock > 1
          ? { ...item, stock: item.stock - 1 }
          : item
      )
    );
  };

  return (
    <>
      <Header
        titleButton={() => handleBack()}
        buttonCoint={() => handleClick()}
        quantity={corzineCards.length}
      ></Header>
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                handleAddToCart={handleAddToCart}
                products={products}
                corzineCards={corzineCards}
              />
            }
          />
          <Route
            path="/corzine"
            element={
              <Corzine
                clickRemuve={clickRemuve}
                clickPlus={clickPlus}
                clickMinus={clickMinus}
                corzineCards={corzineCards}
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
