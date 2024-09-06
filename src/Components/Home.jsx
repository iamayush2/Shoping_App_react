import Nav from "./Nav";
import CardContainer from "./CardContainer";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const { search, path } = useLocation();
  console.log(search);
  // console.log(path);

  return (
    <>
      {search == "" ? null : (
        <Link to="/" className="absolute text-red-200 top-[2%] left-[17%]">
          Home
        </Link>
      )}

      <Nav />
      <CardContainer />
    </>
  );
};

export default Home;
