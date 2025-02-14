import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../cmponents/student/Loading";
import { assets } from "../../assets/assets";

const CourseDetails = () => {
  const { id } = useParams();

  const [courseData, setCourseData] = useState(null);

  const { allCourse, calculateRating } = useContext(AppContext);

  const fetchCourseData = async () => {
    const findCourse = allCourse.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-8 md:pt-30 text-left">
        <div className="absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b"></div>
        {/* left column */}
        <div className="max-w-xl z-10 text-gray-500">
          <h1 className="text-course-deatils-heading-small md:text-course-deatils-heading-large font-semibold text-gray-800 ">
            {courseData.courseTitle}
          </h1>
          <p
            className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>

          {/*  retviw adn ratings  ----------*/}

          <div className="flex items-center space-x-2 pt-3 pb-1 text-sm">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt=""
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className="text-blue-600">
              ( {courseData.courseRatings.length}
              {courseData.courseRatings.length > 1 ? " ratings" : " rating"})
            </p>

            <p>
              ({courseData.enrolledStudents.length}
              {courseData.enrolledStudents.length > 1 ? "students" : "student"})
            </p>
          </div>

          <p className="text-sm ">
            Course by{" "}
            <a
              href="https://www.google.com/search?q=dwipu91&oq=dwipu91&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgcIARAAGO8FMgcIAhAAGO8FMgcIAxAAGO8FMgoIBBAAGIAEGKIEMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINzI0NWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
              target="_blank"
              className="text-blue-600 underline"
            >
              dwipu91
            </a>
          </p>
        </div>
        {/*   right COLUME       */}
        <div>test</div>{" "}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
