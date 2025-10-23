import React from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.js";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constant";
const ExperienceCard = ({ experience, index }) => {
   const isMobile = useMediaQuery({ maxWidth: 768 });
  const isLeft = !isMobile && index % 2 === 0;
  return (
    <VerticalTimelineElement
      contentArrowStyle={{
        borderLeft: isLeft ? "7px solid #232631" : "none",
        borderRight: !isLeft ? "7px solid #232631" : "none",
      }}
      contentStyle={{ background: "rgb(50 26 102)", borderRadius: "30px",direction: isLeft ? "ltr" : "rtl" }}
      position={isLeft ? "left" : "right"}
      iconStyle={{ background: experience.iconBg }}

      icon={
        <div className="d-flex align-items-center justify-content-center w-100 h-100">
          <i className="bi bi-plus fs-4 text-white"></i>
        </div>
      }
    >
      <div style={{ direction: isLeft ? "ltr" : "rtl" }}>
        <p style={{ color: "gold", fontSize: "20px", marginBottom: "5px" }}>
          {experience.date}
        </p>
        <h2 className="text-white fs-3">{experience.job_position}</h2>
        <p style={{ color: "gold", fontSize: "20px" }}>
          {experience.university}
        </p>
        <p className="text-white  fs-5">{experience.certificate}</p>
      </div>
    </VerticalTimelineElement>
  );
};
const Experience = () => {
  return (
    <div
      id="experience"
      className=" overflow-hidden pt-5 mt-5 pt-sm-4 pb-sm-4 "
    >
      <motion.div
        variants={fadeIn("left", "spring", 0.7, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center"
      >
        <motion.h1
          variants={fadeIn("left", "spring", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="fw-bold mb-3"
        >
          مؤهلاتي وخبراتي
        </motion.h1>
        <motion.p
          variants={fadeIn("left", "spring", 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="fs-5 text-muted"
        >
          خبراتي ومؤهلاتي تمثل مزيجا متكاملا من المعرفه العمليه
          <br /> والمهارات التخصصيه
        </motion.p>
      </motion.div>
      <div className="">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} index={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
