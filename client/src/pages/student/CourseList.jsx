import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import SearceBar from "../../cmponents/student/SearceBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../cmponents/student/CourseCard";
import { assets } from "../../assets/assets";
import Footer from "../../cmponents/student/Footer";

const CourseList = () => {
  const { negigate, allCourse } = useContext(AppContext);

  const { input } = useParams();

  const [filteredCourse, setfilterdCourse] = useState([]);

  useEffect(() => {
    if (allCourse && allCourse.length > 0) {
      const tempCourses = allCourse.slice();

      input
        ? setfilterdCourse(
            tempCourses.filter((itme) =>
              itme.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setfilterdCourse(tempCourses);
    }
  }, [allCourse, input]);

  return (
    <>
      <div className="relative md:px-36 px-20 pt-8 text-left">
        <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full mb-16">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800">
              Course List
            </h1>
            <p className="text-gray-500">
              <span
                className="text-blue-600 cursor-pointer"
                onClick={() => negigate("/")}
              >
                Home
              </span>{" "}
              / <span className="`">Course List</span>
            </p>
          </div>

          <SearceBar data={input} />
        </div>

        <div>
          {input && (
            <div className="inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600">
              <p>{input}</p>
              <img
                src={assets.cross_icon}
                className="cursor-pointer"
                onClick={() => {
                  negigate("/course-list");
                }}
                alt="cross icon"
              />
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-2 md:p-0">
          {filteredCourse.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default CourseList;
