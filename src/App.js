import WorkoutPlan from "./pages/WorkoutPlan";
import Blog from "./pages/Blog";
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DietPlan from "./pages/DietPlan";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <DietPlan />
        <WorkoutPlan />
        <Blog />
        <FAQs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;