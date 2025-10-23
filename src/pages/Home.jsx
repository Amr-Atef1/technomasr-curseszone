import HeroSection from "./Homepages/HeroSection";
import BioSection from "../components/BioSection";
import Courses from "./Homepages/Courses";
import Testimonials from "./Homepages/Testimonials";
import ModernBlog from "./Homepages/ModernBlog";
import NewsletterSubscription from "./Homepages/NewsletterSubscription";

const Home = () => {
  return (
    <>
    <HeroSection/>
    <BioSection/>
    <Courses/>
    <Testimonials/>
    <ModernBlog/>
    <NewsletterSubscription/>
    </>
  );
};

export default Home;
