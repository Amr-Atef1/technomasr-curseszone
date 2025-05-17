import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Branch from "../../components/Branch";
import { courses } from "../../constant";

const CourseInfo = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("description"); // تبويب افتراضي

  useEffect(() => {
    const foundCourse = courses.find((course) => course.id === parseInt(id));
    setCourse(foundCourse);
  }, [id]);

  if (!course) {
    return <div className="text-center py-5">جارٍ تحميل تفاصيل الدورة...</div>;
  }

  return (
    <>
      <Branch title={"الدورات التدريبيه"} moreTitle={"تفاصيل الدوره"} />
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* المحتوى الرئيسي */}
            <div className="col-lg-6">
              <div className="">
                <video
                  className="card-img-top rounded-3"
                  controls
                  width="100%"
                  poster={course.thumbnail || "/thumbnail.jpg"}
                >
                  <source src={course.videoInfo} type="video/mp4" />
                  المتصفح لا يدعم تشغيل الفيديو.
                </video>
              </div>
            </div>
            <div className="col-lg-6 border border-1 rounded-3 p-3">
              <h1 className="fs-3 fw-bold mb-3">{course.title}</h1>
              <div>
                <div className="d-flex justify-content-between align-items-center my-5">
                  <span className="fs-5 d-flex align-items-center">
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    {course.rating}
                    <span className="text-muted ms-1">(236)</span>
                  </span>
                  <span className="fs-5 d-flex align-items-center">
                    <i
                      className="bi bi-clock me-1"
                      style={{ color: "red" }}
                    ></i>
                     {course.duration}
                  </span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="fs-5 d-flex align-items-center">
                    <i
                      className="bi bi-award-fill me-1"
                      style={{ color: "blue" }}
                    ></i>
                    {course.level}
                  </span>
                  <span className="fs-5 d-flex align-items-center">
                    <i
                      className="bi bi-table me-1"
                      style={{ color: "green" }}
                    ></i>
                    {course.sessions}
                  </span>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-5">
                <Link to="/cart">
                  <button className="btn btn-primary px-5 py-3 fs-5">
                    اشترك الآن
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* تبويبات تفاصيل الدورة */}
          <div className="row mt-4">
            <div className="col-12">
              <ul className="nav nav-tabs" id="courseTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "description" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("description")}
                  >
                    تفاصيل الدورة
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "sessions" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("sessions")}
                  >
                    سكاشن الدورة
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "reviews" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("reviews")}
                  >
                    تقييم الدورة
                  </button>
                </li>
              </ul>

              <div className="tab-content p-4 border border-top-0 rounded-bottom">
                {/* محتوى تفاصيل الدورة */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "description" ? "show active" : ""
                  }`}
                >
                  <h4 className="mb-3">عن الدورة</h4>
                  <p>{course.description}</p>

                  <h4 className="mt-4 mb-3">ماذا ستتعلم خلال الدورة؟</h4>
                  <ul className="list-group list-group-flush">
                    {course.learnings?.map((item, index) => (
                      <li key={index} className="list-group-item border-0 ps-0">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <h4 className="mt-4 mb-3">متطلبات الدورة</h4>
                  <ul className="list-group list-group-flush">
                    {course.requirements?.map((item, index) => (
                      <li key={index} className="list-group-item border-0 ps-0">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* محتوى سكاشن الدورة */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "sessions" ? "show active" : ""
                  }`}
                >
                  <h4 className="mb-4">سكاشن الدورة</h4>
                  <div className="accordion" id="sessionsAccordion">
                    {course.sessionsList?.map((session, index) => (
                      <div key={index} className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#session${index}`}
                          >
                            <span className="badge bg-primary me-2">
                              الجلسة {index + 1}
                            </span>
                            {session.title}
                          </button>
                        </h2>
                        <div
                          id={`session${index}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#sessionsAccordion"
                        >
                          <div className="accordion-body">
                            <p>{session.description}</p>
                            <div className="d-flex align-items-center">
                              <i className="bi bi-clock me-2"></i>
                              <span>المدة: {session.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* محتوى تقييمات الدورة */}
                <div
                  className={`tab-pane fade ${
                    activeTab === "reviews" ? "show active" : ""
                  }`}
                >
                  <h4 className="mb-4">تقييمات الدورة</h4>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="card p-3">
                        <div className="d-flex justify-content-between mb-3">
                          <h5>التقييم العام</h5>
                          <div className="bg-warning px-2 py-1 rounded">
                            <span className="fw-bold">{course.rating}</span>/5
                          </div>
                        </div>
                        <div className="progress mb-2">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: `${(course.rating / 5) * 100}%` }}
                          ></div>
                        </div>
                        <small>
                          بناءً على {course.reviews?.length || 0} تقييمات
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    {course.reviews?.map((review, index) => (
                      <div key={index} className="card mb-3">
                        <div className="card-body p-3">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center gap-3">
                              <div
                                className="rounded-circle overflow-hidden"
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  minWidth: "50px", // لمنع التغيير في الحجم
                                  position: "relative", // للتحكم في الصورة الداخلية
                                }}
                              >
                                <img
                                  src={review.userImg || "/default-user.jpg"}
                                  alt={review.user}
                                  className="img-fluid h-100 w-100"
                                  style={{
                                    objectFit: "cover",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                  }}
                                />
                              </div>
                              <h5 className="mb-0  fw-bold">{review.user}</h5>
                            </div>
                            <div className="bg-light px-2 py-1 rounded">
                              <i className="bi bi-star-fill text-warning me-1"></i>
                              {review.rating}
                            </div>
                          </div>
                          <p className="my-3" style={{ maxWidth: "600px" }}>
                            {review.comment}
                          </p>
                          <small className="text-muted">{review.date}</small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseInfo;
