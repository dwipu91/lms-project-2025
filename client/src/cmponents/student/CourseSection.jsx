import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  const { allCourse } = useContext(AppContext);
  return (
    <>
      <div className="py-16 md:px-40 px-8 text-center">
        <h2 className="text-3xl font-medium text-gray-800">
          Learn form the best
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-3">
          Discover our top-rated courses across various catagories. From coding
          and design <br /> to business and wellness, our courses are craafited
          to deliver results.
        </p>

        <div className="grid grid-cols-auto md:px-0 my-10 gap-4">
          {" "}
          {allCourse.slice(0, 4).map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}{" "}
        </div>

        <Link
          to={"/course-list"}
          onClick={() => scrollTo(0, 0)}
          className="text-gray-500 border border-gray-500/30 px-4 py-3 rounded"
        >
          Show all courses
        </Link>
      </div>
    </>
  );
};

export default CourseSection;
