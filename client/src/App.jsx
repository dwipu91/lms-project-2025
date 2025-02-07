import { Route, Routes, useMatch } from "react-router-dom";

import Home from "./pages/student/Home";
import CourseList from "./pages/student/CourseList";
import Player from "./pages/student/player";
import CourseDetails from "./pages/student/CourseDetails";
import MyEnrollments from "./pages/student/MyEnrollments";
import Loading from "./cmponents/student/Loading";
import Educatro from "./pages/educator/Educatro";
import Deshborard from "./pages/educator/Deshborard";
import AddCourse from "./pages/educator/AddCourse";
import MyCourse from "./pages/educator/MyCourse";
import StudentsEnrolled from "./pages/educator/StudentsEnrolled";
import Navbar from "./cmponents/student/Navbar";

const App = () => {
  const isEducatorRouter = useMatch("/educator/*");
  return (
    <>
      <div className="text-default min-h-screen bg-white">
        {!isEducatorRouter && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course-list" element={<CourseList />} />
          <Route path="/course-list/:input" element={<CourseList />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/my-enrollments" element={<MyEnrollments />} />
          <Route path="/player/:courseId" element={<Player />} />
          <Route path="/loading/:path" element={<Loading />} />

          <Route path="/educator" element={<Educatro />}>
            <Route path="educaror" element={<Deshborard />} />
            <Route path="add-course" element={<AddCourse />} />
            <Route path="my-course" element={<MyCourse />} />
            <Route path="student-enrolled" element={<StudentsEnrolled />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
