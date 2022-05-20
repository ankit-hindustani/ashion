import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import BannerSection from "./components/BannerSection";
import ProductSection from "./components/ProductSection";
import { useRef, useState } from "react";

function App() {
  const [activeCategory, setactiveCategory] = useState("All");
  const [filterQuery, setfilterQuery] = useState("/");
  const productRef = useRef(null);
  const [allcategory, setallcategory] = useState([]);
  return (
    <div className="App">
      <Header allcategory={allcategory} />
      <BannerSection
        allcategory={allcategory}
        productRef={productRef}
        setfilterQuery={setfilterQuery}
        setactiveCategory={setactiveCategory}
      />
      <ProductSection
        allcategory={allcategory}
        productRef={productRef}
        setallcategory={setallcategory}
        filterQuery={filterQuery}
        setfilterQuery={setfilterQuery}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
      />
    </div>
  );
}

export default App;
