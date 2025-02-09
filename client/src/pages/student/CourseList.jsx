import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const CourseList = () => {
  const { negigate } = useContext(AppContext);
  return (
    <>
      <div>
        <div>
          <h1>Cours List</h1>
          <p className="text-gray-500">
            {" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => negigate("/")}
            >
              Home
            </span>{" "}
            / <span>Coururs List</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CourseList;
