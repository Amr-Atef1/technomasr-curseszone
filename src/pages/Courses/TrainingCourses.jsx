

import { useEffect, useState } from "react";
import Branch from "../../components/Branch";
import coursesImage from "../../assets/courses_image.webp";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion.js";
import { courses } from "../../constant/index.js";
import { useCart } from "../../context/cartContext";
import { Link } from "react-router-dom";

const TrainingCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart, removeFromCart, isInCart } = useCart();
  const [filters, setFilters] = useState({
    price: "",
    rating: "",
    location: "",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const coursesPerPage = 16;

  // إضافة/إزالة دورة من السلة
  const toggleCartItem = (course) => {
    if (isInCart(course.id)) {
      removeFromCart(course.id);
    } else {
      addToCart(course);
    }
  };

  // فلترة الدورات بناءً على البحث والفلاتر
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPrice =
      !filters.price || course.price <= parseInt(filters.price);
    const matchesRating =
      !filters.rating || course.rating >= parseFloat(filters.rating);
    const matchesLocation =
      !filters.location || course.location === filters.location;
    return matchesSearch && matchesPrice && matchesRating && matchesLocation;
  });

  // حساب الصفحات
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  // تغيير الصفحة
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // إنشاء أرقام الصفحات
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // تحديد الصفحات المرئية
  const visiblePages = () => {
    const maxVisible = 5;
    if (totalPages <= maxVisible) return pageNumbers;

    const half = Math.floor(maxVisible / 2);
    let start = Math.max(currentPage - half, 1);
    let end = Math.min(start + maxVisible - 1, totalPages);

    if (end - start + 1 < maxVisible) {
      start = Math.max(end - maxVisible + 1, 1);
    }
    
    const pages = [];
    if (start > 1) pages.push("...");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages) pages.push("...");

    return pages;
  };

  return (
    <>
      <Branch title={"الدورات التدريبيه"} />

      <section
        className="overflow-hidden py-5 d-flex align-items-center"
        style={{
          backgroundImage: `url(${coursesImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <div className="container">
          {/* العنوان والفقرة */}
          <h1 className="text-center mt-5 mb-2 fw-bold text-black">
            أحدث الدورات التدريبيه
          </h1>
          <p
            className="text-center text-black mb-5 mt-3 lead mx-auto"
            style={{ maxWidth: "700px" }}
          >
            أكتشف أحدث الدورات التدريبيه المتنوعه لتطوير <br /> مهاراتك وتحقيق
            اهدافك المهنيه والشخصيه
          </p>

          {/* قسم البحث والفلتر */}
          <div className="row mb-5 g-3">
            {/* حقل البحث */}
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="ابحث عن دورة..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-primary" type="button">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>

            {/* فلاتر */}
            <div className="col-md-6">
              <div className="row g-2">
                <div className="col-4">
                  <select
                    className="form-select form-select-lg"
                    value={filters.price}
                    onChange={(e) =>
                      setFilters({ ...filters, price: e.target.value })
                    }
                  >
                    <option value="">السعر</option>
                    <option value="100">أقل من 100 ر.س</option>
                    <option value="200">أقل من 200 ر.س</option>
                    <option value="300">أقل من 300 ر.س</option>
                    <option value="400">أقل من 400 ر.س</option>
                    <option value="500">أقل من 500 ر.س</option>
                  </select>
                </div>
                <div className="col-4">
                  <select
                    className="form-select form-select-lg"
                    value={filters.rating}
                    onChange={(e) =>
                      setFilters({ ...filters, rating: e.target.value })
                    }
                  >
                    <option value="">التقييم</option>
                    <option value="4">4 نجوم فأكثر</option>
                    <option value="4.5">4.5 نجوم فأكثر</option>
                    <option value="5">5 نجوم</option>
                  </select>
                </div>
                <div className="col-4">
                  <select
                    className="form-select form-select-lg"
                    value={filters.location}
                    onChange={(e) =>
                      setFilters({ ...filters, location: e.target.value })
                    }
                  >
                    <option value="">الموقع</option>
                    <option value="محلية">محلية</option>
                    <option value="سعودية">سعودية</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* الكروت */}
          <div className="row g-4">
            {currentCourses.map((course, index) => {
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
                    <div className="text-center mt-2">
                      <button
                        className={`btn ${
                          isInCart(course.id) ? "btn-danger" : "btn-primary"
                        }`}
                        onClick={() => toggleCartItem(course)}
                      >
                        <i
                          className={`bi ${
                            isInCart(course.id)
                              ? "bi-cart-dash"
                              : "bi-cart-plus"
                          }`}
                        ></i>
                        {isInCart(course.id)
                          ? "إزالة من السلة"
                          : "أضف إلى السلة"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pagination باستخدام Bootstrap العادي */}
          {totalPages > 1 && (
            <nav aria-label="Page navigation" className="mt-5">
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(1)}
                    aria-label="First"
                  >
                    <span aria-hidden="true">&laquo;&laquo;</span>
                  </button>
                </li>
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(currentPage - 1)}
                    aria-label="Previous"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>

                {visiblePages().map((number, index) => (
                  <li
                    key={index}
                    className={`page-item ${
                      number === currentPage ? "active" : ""
                    } ${number === "..." ? "disabled" : ""}`}
                  >
                    {number === "..." ? (
                      <span className="page-link">...</span>
                    ) : (
                      <button
                        className="page-link"
                        onClick={() => paginate(number)}
                      >
                        {number}
                      </button>
                    )}
                  </li>
                ))}

                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(currentPage + 1)}
                    aria-label="Next"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </button>
                </li>
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(totalPages)}
                    aria-label="Last"
                  >
                    <span aria-hidden="true">&raquo;&raquo;</span>
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </section>
    </>
  );
};

export default TrainingCourses;
