
import coursesImage from "../../assets/courses_image.webp";
import coursesCard from "../../assets/courses.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";
import { mainCourses } from "../../constant/index.js";
import { Link } from "react-router-dom";
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
            {mainCourses.map((course, index) => {
              return (
                <motion.div
                  variants={fadeIn("right", "spring", index * 0.5, 1.25)}
                  initial="hidden"
                  viewport={{ once: true }}
                  whileInView="show"
                  key={course.id}
                  className="col-sm-6 col-md-4 col-lg-3"
                >
                  <div className="card h-100 custom-card overflow-hidden p-4 shadow-lg rounded-3 bg-white">
                    <div className="position-relative">
                      <img
                        src={course.courseImg}
                        className="card-img-top"
                        alt="courses-img"
                        style={{
                          display: "block",
                          width: "100%",
                          height: "auto",
                        }}
                      />
                      <div
                        className="position-absolute top-0 end-0 bg-warning text-dark px-2 py-1 rounded m-2"
                        style={{
                          maxWidth: "fit-content",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <i className="bi bi-star-fill"></i> {course.rating}
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <p className="card-text my-3 fs-4 fw-bold text-black">
                        {course.title}
                      </p>
                    </div>
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <Link
                        to={`/courses/trainingCourses/${course.id}`}
                        className="btn course-info rounded-pill text-white"
                      >
                        <i className="bi bi-arrow-right-circle-fill fs-5"></i>
                        <span className="p-2 fs-5 fw-bold text-black">
                          تفاصيل الدوره
                        </span>
                      </Link>
                      <p className="fs-5 fw-bold price">{course.price} ر.س</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
      </div>
    </section>
  );
};

export default Courses;
