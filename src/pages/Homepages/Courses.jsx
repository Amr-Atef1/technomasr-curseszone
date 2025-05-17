
import coursesImage from "../../assets/courses_image.webp";
import coursesCard from "../../assets/courses.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";
const Courses = () => {
  return (
    <section
      className=" overflow-hidden py-5 d-flex align-items-center "
      style={{
        backgroundImage: `url(${coursesImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        {/* العنوان والفقرة */}
        <h1 className="text-center mt-5 mb-2 fw-bold ">
          أحدث الدورات التدريبيه
        </h1>
        <p
          className="text-center text-muted mb-5 mt-3 lead mx-auto"
          style={{ maxWidth: "700px" }}
        >
          أكتشف أحدث الدورات التدريبيه المتنوعه لتطوير <br /> مهاراتك وتحقيف
          اهدافك المهنيه والشخصيه
        </p>

        {/* الكروت */}
        <div className="row g-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 1.25)}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="show" key={item} className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card h-100 custom-card overflow-hidden p-4 shadow-lg rounded-3 "
              >
                <img
                  src={coursesCard}
                  class="card-img-top"
                  alt="courses-img"
                ></img>
                <div className="card-body text-center">
                  <p className="card-text my-3 fs-4 fw-bold text-black">
                    دوره تعلم اساسيات الUI/Ux للمستوي المبتدئ.
                  </p>
                </div>
                <div className="card-body d-flex justify-content-between align-items-center ">
                  <a
                    href="#"
                    className="btn course-info rounded-pill text-white"
                  >
                    <i className="bi bi-arrow-right-circle-fill fs-5"></i>
                    <span className="p-2 fs-5 fw-bold text-black">
                      تفاصيل الدوره
                    </span>
                  </a>
                  <p className="fs-5 fw-bold price">250 ر.س</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
