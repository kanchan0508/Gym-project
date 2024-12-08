import React from "react";

const DietPlan = () => (
  <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-10 mt-40 ">
    <h1 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in">
      Explore Our Diet Plans
    </h1>
    <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl animate-fade-in-delayed">
      Discover tailored diet plans to match your fitness goals. Whether you're
      aiming to lose weight, build muscle, or maintain a healthy lifestyle, we
      have a plan for you.
    </p>

    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-zoom-in hover:scale-105 hover:shadow-xl">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD3quHhY-e08NzUY5iCCV75Bu48l_IYngstQ&s"
          alt="Healthy Breakfast"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Weight Loss Plan</h2>
          <p className="text-gray-600 mt-2">
            A low-calorie meal plan designed to help you shed pounds while staying
            energized.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-zoom-in delay-100 hover:scale-105 hover:shadow-xl">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyD0pHLODr6_vMQjRmSv3405DRsxmuk6M6gA&s"
          alt="Healthy Lunch"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Muscle Gain Plan</h2>
          <p className="text-gray-600 mt-2">
            High-protein meals to fuel your workouts and promote muscle growth.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-zoom-in delay-200 hover:scale-105 hover:shadow-xl">
        <img
          src="https://media.istockphoto.com/id/1299421209/photo/diet-and-exercise-for-weight-loss.jpg?s=612x612&w=0&k=20&c=eaXOUJmICKlcSo7idrgCOBH6ZkPP3LX8IPHpeas50Rc="
          alt="Healthy Dinner"
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Balanced Nutrition</h2>
          <p className="text-gray-600 mt-2">
            A well-rounded meal plan to maintain your health and energy levels.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default DietPlan;
