import Companies from "../../cmponents/student/Companies";
import CourseSection from "../../cmponents/student/CourseSection";
import Hero from "../../cmponents/student/Hero";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-7 ">
        <Hero />
        <Companies />
        <CourseSection />
      </div>
    </>
  );
};

export default Home;
