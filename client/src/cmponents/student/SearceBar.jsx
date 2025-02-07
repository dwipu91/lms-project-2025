import { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearceBar = ({ data }) => {
  const nevigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");
  const onSearchHandler = (e) => {
    e.preventDefault();
    nevigate("/course-list/" + input);
  };

  return (
    <>
      <form
        onSubmit={onSearchHandler}
        className="max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray500/60 rounded "
      >
        <img
          src={assets.search_icon}
          alt="serarch icon"
          className="md:w-auto w-10 px-3"
        />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Serch for courses"
          className="w-full h-full outline-none text-gray-500/80 "
        />
        <button
          type="submit"
          className="bg-blue-600 rounded text-white px:10 px-7 py-2 mx-1"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default SearceBar;
