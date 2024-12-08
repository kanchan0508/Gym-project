import React from "react";

const WorkoutPlans = () => {
  const plans = [
    {
      title: "Strength Training",
      description:
        "Build muscle and improve endurance with structured strength workouts designed to help you meet your goals.",
      image: "https://www.bodybuilding.com/images/2019/july/best-beginner-weight-training-guide-with-easy-to-follow-workout-1b-700xh.jpg",
    },
    {
      title: "Cardio Fitness",
      description:
        "Burn calories and boost heart health with effective cardio routines tailored to all fitness levels.",
      image: "https://www.shutterstock.com/image-photo/motivated-black-man-making-cardio-600nw-2185610537.jpg",
    },
    {
      title: "Flexibility Training",
      description:
        "Enhance mobility and prevent injuries with guided flexibility and stretching sessions.",
      image: "https://blog.nasm.org/hubfs/importance-of-flexibility.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 -mt-36">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Workout Plans</h1>
        <p className="text-lg text-gray-600 mt-4">
          Explore personalized workout plans to achieve your fitness goals.
        </p>
      </div>

      {/* Plans Section */}
      <div className="space-y-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            } items-center gap-8 px-6 py-6 lg:px-20`}
          >
            {/* Image */}
            <div
              className="flex-1 relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
              data-aos="zoom-in"
            >
              <img
                src={plan.image}
                alt={plan.title}
                className="w-full h-72 object-cover"
              />
            </div>

            {/* Content */}
            <div
              className="flex-1 text-center lg:text-left"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                {plan.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{plan.description}</p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlans;
