import CallToAction from "../../cmponents/student/CallToAction";
import Companies from "../../cmponents/student/Companies";
import CourseSection from "../../cmponents/student/CourseSection";
import Footer from "../../cmponents/student/Footer";
import Hero from "../../cmponents/student/Hero";
import TestimonialsSection from "../../cmponents/student/TestimonialsSection";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center jus space-y-7 ">
        <Hero />
        <Companies />
        <CourseSection />
        <TestimonialsSection />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default Home;
