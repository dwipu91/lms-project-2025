import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialsSection = () => {
  return (
    <>
      <div className="pb-14 px-8 md:px-0">
        <h2 className="text-3xl font-medium text-gray-800">Testimonials </h2>
        <p className="md:text-base text-gray-500 mt-3">
          Hear from our learners as the shar their their journeys of
          trasnformation, success, and how our <br /> platform has mande a
          difference in thieir lives.
        </p>
        <div className="grid grid-cols-auto mt-14 gap-8">
          {dummyTestimonial.map((testmunial, index) => (
            <div
              key={index}
              className="text-sm text-left border border-gray-500/30 pb-6 rounded-lg  bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden"
            >
              <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testmunial.image}
                  alt={testmunial.name}
                />
                {console.log(testmunial.name)}
                <div>
                  <h1 className="text-lg font-medium text-gray-800">
                    {testmunial.name}
                  </h1>
                  <p className="text-gray-800/80">{testmunial.role}</p>
                </div>
              </div>
              <div className="p-5 pb-7">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <img
                      className="h-5"
                      key={i}
                      src={
                        i < Math.floor(testmunial.rating)
                          ? assets.star
                          : assets.star_blank
                      }
                      alt="star"
                    />
                  ))}
                </div>
                <p className="text-gray-500 mt-5">{testmunial.feedback}</p>
              </div>
              <a href="#" className="text-blue-500 px-5 underline">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;
