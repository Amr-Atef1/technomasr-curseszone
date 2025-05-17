import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.js";
import Branch from "../components/Branch";
import consultantA from "../assets/consultingA.jpeg";
import consultantB from "../assets/ConsultantB.jpg";
import consultantC from "../assets/consultC.jpeg";
import consultantD from "../assets/consultantD.png";

const Consulting = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال البيانات
    console.log("Form submitted:", formData);
    setShowModal(false);
    setShowSuccess(true);

    // إعادة تعيين النموذج
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    // إخفاء رسالة النجاح تلقائياً بعد 5 ثواني
    setTimeout(() => {
      setShowSuccess(false);
    }, 4000);
  };

  return (
    <>
      <Branch title={"الاستشارات"} />
      <section className=" overflow-hidden py-5">
        <div className="container">
          {/* رسالة النجاح */}
          {showSuccess && (
            <div
              className="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              <strong>تم إرسال طلبك بنجاح!</strong> سنقوم بالتواصل معك في أقرب
              وقت ممكن.
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowSuccess(false)}
              ></button>
            </div>
          )}
          <div className="d-flex flex-column gap-5">
            {/* استشارات تعاقدية */}
            <div className="row g-4 mt-3 align-items-stretch">
              <div className="col-12 col-md-6 col-lg-4">
                <motion.div
                  variants={fadeIn("left", "spring", 0.5, 1)}
                  initial="hidden"
                  viewport={{ once: true }}
                  whileInView="show"
                  className="position-relative rounded-4 overflow-hidden"
                  style={{
                    backgroundImage: `url(${consultantA})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "300px",
                  }}
                >
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      backgroundColor: "rgba(46,30,102,0.6)",
                      zIndex: 2,
                    }}
                  ></div>
                </motion.div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <motion.div
                  variants={fadeIn("left", "spring", 0.7, 1)}
                  initial="hidden"
                  viewport={{ once: true }}
                  whileInView="show"
                  className="position-relative rounded-4 overflow-hidden"
                  style={{
                    backgroundImage: `url(${consultantB})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "300px",
                  }}
                >
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      backgroundColor: "rgba(46,30,102,0.6)",
                      zIndex: 2,
                    }}
                  ></div>
                </motion.div>
              </div>

              <motion.div
                variants={fadeIn("left", "spring", 0.9, 1)}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="show"
                className="col-12 col-lg-4 d-flex flex-column align-items-start justify-content-center"
              >
                <h2 className="fw-bold mb-4">استشارات تعاقدية</h2>
                <p className="text-muted fw-bold">
                  هي نوع من الخدمات التي يتم الاتفاق عليها ضمن عقد محدد الشروط
                  والتفاصيل، حيث يلتزم المستشار بتقديم دعم واستشارات متخصصة تغطي
                  احتياجات العميل طوال مده العقد يتميز هذا النوع من الاستشارات
                  بالاستمرارية والمعرفة العميقة باحتياجات العميل، مما يضمن تحقيق
                  أهداف طويلة الأجل وفق استراتيجية محددة.
                </p>
                <button
                  className="btn btn-primary mt-3 px-4 py-2"
                  onClick={() => setShowModal(true)}
                >
                  طلب استشارة
                </button>
              </motion.div>
            </div>
            {/* فاصل في التلفونات الصغيره */}
            <div className="d-md-none">
              <hr />
            </div>
            {/* استشارات بالساعة */}
            <div className="row g-4 align-items-stretch">
              <motion.div
                variants={fadeIn('right','spring',1.1,1)}
                 initial="hidden"
                viewport={{ once: true }}
                whileInView="show" className="col-12 col-lg-4 d-flex flex-column align-items-start justify-content-center">
                <h2 className="fw-bold mb-4">استشارات بالساعة</h2>
                <p className="text-muted fw-bold">
                  هي خدمة مرنة تعتمد على تقديم الاستشارات للعملاء بناءً على عدد
                  الساعات المطلوبة، يتميز هذا النوع من الاستشارات بتركيزه على
                  حلول محددة دون الحاجة إلى التزام طويل الأجل.
                </p>
                <button
                  className="btn btn-primary mt-3 px-4 py-2"
                  onClick={() => setShowModal(true)}
                >
                  طلب استشارة
                </button>
              </motion.div>
              <div className="col-12 col-md-6 col-lg-4">
                <motion.div
                variants={fadeIn('right','spring',1.3,1)}
                 initial="hidden"
                viewport={{ once: true }}
                whileInView="show"
                  className="position-relative rounded-4 overflow-hidden"
                  style={{
                    backgroundImage: `url(${consultantC})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "300px",
                  }}
                >
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      backgroundColor: "rgba(144, 140, 31, 0.6)",
                      zIndex: 2,
                    }}
                  ></div>
                </motion.div>
              </div>

              <div className="col-12 col-md-6 col-lg-4">
                <motion.div
                variants={fadeIn('right','spring',1.5,1)}
                 initial="hidden"
                viewport={{ once: true }}
                whileInView="show"
                  className="position-relative rounded-4 overflow-hidden"
                  style={{
                    backgroundImage: `url(${consultantD})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "300px",
                  }}
                >
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      backgroundColor: "rgba(144, 140, 31,0.6)",
                      zIndex: 2,
                    }}
                  ></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal طلب الاستشارة */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">طلب استشارة</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      الاسم الأول
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="الرجاء إدخال الاسم الأول"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      الاسم الأخير
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="الرجاء إدخال الاسم الأخير"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="الرجاء إدخال البريد الإلكتروني"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      الجوال
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="الرجاء إدخال رقم الجوال"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      الرسالة
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="الرجاء إدخال الرسالة"
                      required
                    ></textarea>
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      إرسال
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Consulting;
