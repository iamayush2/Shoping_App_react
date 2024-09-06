import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { ProductContext } from "../Utils/Context";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import axios from "../utils/axios";
const CardContainer = () => {
  const [product] = useContext(ProductContext);

  const { search } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);

  const [cat, setCat] = useState(null);

  const getCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setCat(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!cat || category == "undefined") setCat(product);
    if (category != "undefined") getCategory();
  }, [category, product]);

  return cat ? (
    <>
      <div className="card-Container w-[85%] h-full overflow-y-auto overflow-x-hidden p-10 pt-12 flex flex-wrap gap-5">
        {cat.map((e, i) => (
          <Card key={i} e={e} />
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CardContainer;
