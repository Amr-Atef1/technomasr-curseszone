import bioSectionImage from "../assets/bioSectionImage.webp";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.js";
const BioSection = () => {
  return (
    <section className="overflow-hidden purble text-white py-5 lg-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            variants={fadeIn("left","spring",0.5,1.25)}
            initial="hidden"
            viewport={{ once: true}}
            whileInView="show"
            className="col-md-6"
          >
            <h2 className="display-4 fw-bold my-4 text-warning">مرحبا</h2>
            <h1 className="display-4 fw-bold my-4">أنا أحمد عطيه</h1>
            <p className="lead fs-4">
              مصمم متخصص في UI/UX Designer وخبرة أكثر من 15 سنة في مجال التصميم.
              تجارب مكتملة وتطبيقات ناجحة مع تركيز قوي على أدوات التصميم مثل
              Adobe XD و Figma من خلال تحقيق أهداف المستخدمين وتحسين تجربتهم.
            </p>
            <ul className="mt-10">
              <li>
                <i
                  color="yellow"
                  class=" bi bi-check-circle-fill"
                  style={{ color: "yellow", fontSize: 30 }}
                ></i>
                <span className="fw-bold fs-1 p-2">+6 سنين من الخبره</span>
              </li>
              <li>
                <i
                  class="bi bi-check-circle-fill"
                  style={{ color: "yellow", fontSize: 30 }}
                ></i>
                <span className="fw-bold fs-1 p-2">+150 مشروع مكتمل</span>
              </li>
              <li>
                <i
                  class="bi bi-check-circle-fill"
                  style={{ color: "yellow", fontSize: 30 }}
                ></i>
                <span className="fw-bold fs-1 p-2">+130 عملاء سعداء</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeIn("right","spring",0.5,1.25)}
            initial="hidden"
            viewport={{ once: true}}
            whileInView="show"
            className="col-md-6 text-center">
            <img
              src={bioSectionImage}
              className="img-fluid align-to-first-line"
              alt="bio image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
