
import heroSectionImage from "../../assets/herosection_Image.webp";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion.js";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <section className="bg-light py-5 my-custom-height overflow-hidden">
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            variants={fadeIn("left","spring",0.5,1.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true}}
            className="col-md-6 text-center">
            <img src={heroSectionImage} className="img-fluid hero-align-to-first-line" alt="hero image" />
          </motion.div>
          <motion.div
            variants={fadeIn("righy","spring",0.5,1.25)}
            initial="hidden"
            viewport={{ once: true}}
            whileInView="show" className="col-md-6 mt-5">
            <h1 className="display-4 fw-bold">مرحبًا بك في موقعنا!</h1>
            <p className="lead">
              نحن نقدم أفضل الدورات والخدمات لمساعدتك على التطور.
            </p>
            <Link
              to="/courses/trainingCourses"
              className="btn btn-primary btn-lg mt-3"
            >
              ابدأ الآن
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection