import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

//
export const AppContext = createContext();

export const AppContextProvider = (propes) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const negigate = useNavigate();

  const [allCourse, setAllCourse] = useState([]);
  const [isEducator, setIsEducator] = useState(true);

  //  fetch all courses
  const fetchAllcourse = async () => {
    setAllCourse(dummyCourses);
  };

  //  function to calculate avarage tha course
  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  //  function to calculate course chapter time
  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.calculateChapterTime.map(
      (lectue) => (time += lectue.lectureDuration)
    );
    return humanizeDuration(time * 60 * 100, { units: ["h", "m"] });
  };

  // Function to claculate course duration
  const calculatecourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };

  useEffect(() => {
    fetchAllcourse();
  }, []);

  const value = {
    currency,
    allCourse,
    negigate,
    calculateRating,
    isEducator,
    setIsEducator,
  };
  return (
    <AppContext.Provider value={value}>{propes.children}</AppContext.Provider>
  );
};
