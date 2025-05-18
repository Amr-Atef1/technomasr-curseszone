import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ahmed from '../../assets/ahmed.jpg';
import sara from '../../assets/sara.webp';
import khaled from '../../assets/khaled.jpg';

const testimonials = [
  {
    name: "أحمد عمليه",
    title: "مدير منتجات - شركة تقنية",
    img: ahmed,
    text: `أحمد عطية يتمتع بمهارات استثنائية في تصميم واجهة وتجربة
    المستخدم. يجمع بين الإبداع والدقة في عمله مما يضمن نتائج
    متميزة تلبي توقعات العملاء.`,
  },
  {
    name: "سارة محمد",
    title: "مديرة تصميم - شركة إبداع",
    img: sara,
    text: `تعاملت مع أحمد في عدة مشاريع وكان دائمًا ما يقدم حلولاً
    إبداعية مع التركيز على تفاصيل تجربة المستخدم التي تضيف قيمة
    حقيقية للمنتج.`,
  },
  {
    name: "خالد عبدالله",
    title: "مؤسس شركة نجوم التقنية",
    img: khaled,
    text: `الالتزام بالمواعيد النهائية وجودة العمل المقدمة من أحمد
    جعلت التعامل معه تجربة ممتازة. أنصح به لكل من يبحث عن محترف
    في مجال UI/UX.`,
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light" dir="rtl">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">شهادات عملائنا</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          dir="rtl"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card p-4">
                <div className="card-body text-center py-4">
                  <div className="mb-2 text-warning fs-1">★★★★★</div>
                  <p className="testimonial-text fs-2 fw-bold mb-4">"{item.text}"</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="mx-3">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="rounded-circle mb-2"
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                      />
                      <h5 className="mb-1 fs-3 fw-bold">{item.name}</h5>
                      <p className="text-muted fs-4 fw-bold mb-0">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
