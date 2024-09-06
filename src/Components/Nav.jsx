import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Utils/Context";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let distinct_categories =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  distinct_categories = [...new Set(distinct_categories)];

  return (
    <nav className="flex flex-col w-[15%] h-full items-center pt-10 bg-zinc-100">
      <Link to="/" className="bg-red-200 text-center w-[80%] p-3">
        Add new product
      </Link>
      <hr className="w-[90%] mt-2 h-[1.5px] bg-black  " />

      <h1 className="text-xl w-[80%] mt-3 mb-1">Select Categoeries</h1>

      <div className="   w-[80%]">
        {distinct_categories.map((e, i) => {
          return (
            <Link
              key={i}
              to={`/?category=${e}`}
              className="w-full mt-2 flex items-center justify-start hover:text-blue-400 hover:scale-110"
            >
              {" "}
              <span className="w-[10px] h-[10px] mt-1 mr-2 bg-red-500  rounded-full "></span>{" "}
              {e}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
