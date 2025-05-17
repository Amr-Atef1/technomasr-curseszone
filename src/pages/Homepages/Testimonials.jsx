import React from "react";
import ahmed from '../../assets/ahmed.jpg';
import sara from '../../assets/sara.webp';
import khaled from '../../assets/khaled.jpg';

const Testimonials = () => {
  return (
    <section className="overflow-hidden py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5  fw-bold">شهادات عملائنا</h2>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
          data-bs-pause="false"
        >
          <div className="carousel-indicators custom-indicators">
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            {/* <!-- الشهادة الأولى --> */}
            <div className="carousel-item active">
              <div className="testimonial-card p-4">
                <div className="card-body text-center py-4">
                  <div className="mb-2 text-warning fs-1">★★★★★</div>
                  <p className="testimonial-text fs-2 fw-bold mb-4">
                    "أحمد عطية يتمتع بمهارات استثنائية في تصميم واجهة وتجربة
                    المستخدم. يجمع بين الإبداع والدقة في عمله مما يضمن نتائج
                    متميزة تلبي توقعات العملاء."
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="mx-3">
                      <img
                        src={ahmed}
                        alt="أحمد عمليه"
                        className="rounded-circle mb-2"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="mb-1 fs-3 fw-bold">أحمد عمليه</h5>
                      <p className="text-muted fs-4 fw-bold mb-0">
                        مدير منتجات - شركة تقنية
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- الشهادة الثانية --> */}
            <div className="carousel-item">
              <div className="testimonial-card p-4">
                <div className="card-body text-center py-4">
                  <div className="mb-2 text-warning fs-1">★★★★★</div>
                  <p className="testimonial-text fs-2 fw-bold mb-4">
                    "تعاملت مع أحمد في عدة مشاريع وكان دائمًا ما يقدم حلولاً
                    إبداعية مع التركيز على تفاصيل تجربة المستخدم التي تضيف قيمة
                    حقيقية للمنتج."
                  </p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="mx-3">
                           <img
                        src={sara}
                        alt="ساره محمد"
                        className="rounded-circle mb-2"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="mb-1 fs-3 fw-bold">سارة محمد</h5>
                      <p className="text-muted fs-4 fw-bold mb-0">
                        مديرة تصميم - شركة إبداع
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- الشهادة الثالثة --> */}
            <div className="carousel-item">
              <div className="testimonial-card p-4">
                <div className="card-body text-center py-4">
                  <div className="mb-2 text-warning fs-1">★★★★★</div>
                  <p className="testimonial-text fs-2 fw-bold mb-4">
                    "الالتزام بالمواعيد النهائية وجودة العمل المقدمة من أحمد
                    جعلت التعامل معه تجربة ممتازة. أنصح به لكل من يبحث عن محترف
                    في مجال UI/UX."
                  </p>

                  <div className="d-flex justify-content-center align-items-center">
                    <div className="mx-3">
                           <img
                        src={khaled}
                        alt="خالد عبدالله"
                        className="rounded-circle mb-2"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="mb-1 fs-3 fw-bold">خالد عبدالله</h5>
                      <p className="text-muted fs-4 fw-bold mb-0">مؤسس شركة نجوم التقنية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev switch"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">السابق</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">التالي</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
