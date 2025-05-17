import { useState } from "react";
import Branch from "../components/Branch";
import contactImg from "../assets/contactImg.jpg";
import logo from "../assets/logo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    // Clear error when user types
    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'الاسم الأول مطلوب';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'الاسم الأخير مطلوب';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'بريد إلكتروني غير صالح';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الموبايل مطلوب';
    } else if (!/^[0-9]{9,}$/.test(formData.phone)) {
      newErrors.phone = 'رقم موبايل غير صالح';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'الرسالة مطلوبة';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <>
      <Branch title={"تواصل معنا"} />
      <section>
        <div className="container">
          {/* معلومات التواصل أسفل الصورة والنموذج */}
          <div className="row my-4">
            <div className="col-md-6">
              <div className="d-flex align-items-center p-3 bg-light rounded">
                <i className="bi bi-whatsapp fs-4 me-3 text-success"></i>
                <div>
                  <p className="mb-0 fw-bold">الواتساب</p>
                  <p className="mb-0">456 123 05 966+</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center p-3 bg-light rounded">
                <i className="bi bi-envelope fs-4 me-3 text-primary"></i>
                <div>
                  <p className="mb-0 fw-bold">البريد الإلكتروني</p>
                  <p className="mb-0">info@mail.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* قسم الصورة مع النص */}
            <div className="col-md-4 mb-4 mb-md-0">
              <div
                className="position-relative rounded overflow-hidden h-100"
                style={{
                  minHeight: "300px",
                  backgroundImage: `url(${contactImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    backgroundColor: "rgba(46,30,102,0.6)",
                    zIndex: 2,
                  }}
                ></div>
                <div
                  className="row position-relative"
                  style={{ zIndex: 2, height: '100%' }}
                >
                  <div className="d-flex flex-column justify-content-between align-items-center h-100 p-4 gap-5">
                    {/* معلومات التواصل - أعلى اليمين */}
                    <div className="align-self-start text-white p-3 text-start">
                      <p className="m-0 fs-3">معلومات التواصل</p>
                      <p className="m-0 fs-5">
                        يمكنك التواصل معنا علي مدار الساعه.
                      </p>
                    </div>

                    {/* صورة الـ logo - المنتصف */}
                    <div className="my-auto">
                      <img
                        width={300}
                        src={logo}
                        alt="logo_img"
                        className="mx-auto d-block"
                      />
                    </div>

                    {/* أيقونات التواصل - أسفل اليسار */}
                    <div className="align-self-end">
                      <div className="d-flex gap-4 my-2">
                        <a href="#">
                          <i
                            className="bi bi-behance"
                            style={{ color: "gold", fontSize: "50px" }}
                          ></i>
                        </a>
                        <a href="#">
                          <i
                            className="bi bi-linkedin"
                            style={{ color: "gold", fontSize: "50px" }}
                          ></i>
                        </a>
                        <a href="#">
                          <i
                            className="bi bi-facebook"
                            style={{ color: "gold", fontSize: "50px" }}
                          ></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* قسم النموذج */}
            <div className="col-md-8">
              <div className="contact-form p-4 rounded shadow-sm bg-white h-100">
                <h4 className="mb-4 text-center">نموذج الاتصال</h4>

                {submitStatus === 'success' && (
                  <div className="alert alert-success text-center">
                    تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName" className="form-label fw-bold">
                        الاسم الأول *
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        id="firstName"
                        placeholder="الرجاء إدخال الاسم الأول"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback">{errors.firstName}</div>
                      )}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName" className="form-label fw-bold">
                        الاسم الأخير *
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        id="lastName"
                        placeholder="الرجاء إدخال الاسم الأخير"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback">{errors.lastName}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">
                      البريد الإلكتروني *
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      placeholder="الرجاء إدخال البريد الإلكتروني"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-bold">
                      الموبايل *
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">+966</span>
                      <input
                        type="tel"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        placeholder="الرجاء إدخال رقم الموبايل"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && (
                        <div className="invalid-feedback">{errors.phone}</div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label fw-bold">
                      الرسالة *
                    </label>
                    <textarea
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="message"
                      rows="4"
                      placeholder="الرجاء إدخال الرسالة"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}
                  </div>

                  <div className="text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary px-4 py-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          جاري الإرسال...
                        </>
                      ) : (
                        'إرسال'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;