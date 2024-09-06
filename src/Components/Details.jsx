import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import axios from "../utils/axios";
import Loading from "./Loading";

const Details = () => {
  const [single, setSingle] = useState(null);
  //   const [product] = useContext(ProductContext);

  const { id } = useParams();

  //   const single = product[id - 1];
  //   console.log(single);

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setSingle(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

  return single ? (
    <div className="container mx-auto flex flex-col items-center p-[5%]">
      <h1 className="text-5xl w-[80%] text-center font-semibold  font-mono ">
        Product Details
      </h1>

      <div className="flex w-[90%] h-[95%]  items-center gap-10 justify-center mt-10 rounded">
        <div className="img w-[25%]  object-contain">
          <img src={`${single.image}`} alt="" className=" h-full" />
        </div>

        <div className="w-[50%] h-[80%] flex flex-col p-5 gap-2  ">
          <h1 className="text-[2.2vw] font-bold">{single.title}</h1>
          <h3 className="text-zinc-400 font-semibold">{single.category}</h3>
          <h2 className="text-2xl mt-2 font-semibold">${single.price}</h2>
          <p className="text-lg mt-4 font-light">{single.description}</p>

          <div className="btn-cont flex gap-6 mt-4">
            <button className="bg-red-200 text-center w-[30%] border shadow rounded p-3">
              Edit
            </button>
            <button className="bg-red-200 text-center w-[30%] border shadow rounded p-3">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
