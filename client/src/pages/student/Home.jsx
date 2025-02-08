import Companies from "../../cmponents/student/Companies";
import CourseSection from "../../cmponents/student/CourseSection";
import Hero from "../../cmponents/student/Hero";
import TestimonialsSection from "../../cmponents/student/TestimonialsSection";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-7 ">
        <Hero />
        <Companies />
        <CourseSection />
        <TestimonialsSection />
      </div>
    </>
  );
};

export default Home;
