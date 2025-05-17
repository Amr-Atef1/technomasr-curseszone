import React from "react";
import blogImg from '../../assets/modernBlogImg.jpg';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion.js";
const ModernBlog = () => {


  return (
    <section className="overflow-hidden py-5 d-flex align-items-center "
    >
      <div className="container">
        {/* العنوان والفقرة */}
        <h1 className="text-center mt-5 mb-2 fw-bold ">
            أحدث التدوينات
        </h1>
        <p
          className="text-center text-muted mb-5 mt-3 lead mx-auto"
          style={{ maxWidth: "700px" }}
        >
          اطلع علي احدث التدوينات الملهمه التي تقدم نصائح<br /> وافكار مبتكره لتطوير حياتك ومهاراتك
        </p>

        {/* الكروت */}
        <div className="row g-4">
          {[1, 2, 3].map((item,index) => (
            <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 1.25)}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="show" key={item} className="col-sm-6 col-md-4 ">
              <div className="card h-100 custom-card overflow-hidden p-4 shadow-lg rounded-3 "  >
                <img src={blogImg} class="card-img-top" alt="courses-img"></img>
                <div className="card-body text-center">
                    <div className="d-flex align-items-center justify-content-between  my-3">
                        <div >
                            <i class="bi bi-calendar2-week-fill"></i>
                            <span className="m-1 fw-bold">23 ديسمبر 2025</span>
                        </div>
                        <div>
                            <i class="bi bi-person-fill"></i>
                            <span className="m-1 fw-bold">احمد عطيه</span>
                        </div>
                    </div>
                  <p className="card-text my-3 text-start fw-bold text-black" style={{fontSize:18}}>
                    10 نصائح لتحسين تجربة المستخدم وزياده التفاعل
                  </p>
                  <p className="text-muted text-start mb-4">
                    اكتشف افضل الممارسات لتحسين تجربة المستخدم في تصميماتك, من تحسين تدفق التفاعل....
                  </p>
                </div>
                <div className="card-body d-flex justify-content-start align-items-center ">
                <a href="#" className="btn course-info rounded-pill text-white" >
                    <i className="bi bi-arrow-right-circle-fill fs-5"></i>
                    <span className="p-2 fs-5 fw-bold text-black">تفاصيل التدوينه</span>
                </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernBlog;
