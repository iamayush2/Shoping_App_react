import { Link, useParams } from "react-router-dom";

const Card = ({ e }) => {
  const id = useParams();
  // console.log(id);
  return (
    <Link
      to={`/details/${e.id}`}
      className="card w-[18%] h-[38%] bg-zinc-100 flex flex-col items-center pt-5 pb-3 border-2 shadow-md rounded hover:scale-110"
    >
      <div
        className="img w-[90%] h-[80%] bg-contain bg-no-repeat bg-center mb-2"
        style={{
          backgroundImage: `url(${e.image})`,
        }}
      ></div>
      <h1 className="text-sm text-center font-semibold">{e.title}</h1>
    </Link>
  );
};

export default Card;
