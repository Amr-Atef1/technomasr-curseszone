import React from "react";
import logo from '.././assets/logo.png'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer
      className="text-white py-4 mt-5"
      style={{ backgroundColor: "#321a66" }}
    >
      <div className="container-fluid">
        <div className="row " >
          {/* القسم الأول: قوائم الروابط */}

              <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-3">
                <img  className="" style={{width:"30%"}} src={logo} alt="logo-img" />
                <ul className="list-unstyled fs-5  d-sm-flex gap-3 ">
                  <li className="mb-2 ">
                    <Link to="/" className=" hova">
                    الرئيسيه
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link to="/coach" className=" hova">
                      عن المدرب
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link to="/courses/trainingCourses" className=" hova">
                      الدورات التدريبيه
                    </Link>
                  </li>
                  <li className="mb-2 " >
                    <Link to="/blog" className=" hova">
                      المدونه
                    </Link>
                  </li>

                  <li className="mb-2 ">
                    <Link to="/consulting"className=" hova" >
                      الإستشارات
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link to="/podcast" className=" hova">
                      بودكاست
                    </Link>
                  </li>
                  <li className="mb-2 ">
                    <Link to="/contact" className=" hova">
                      تواصل معنا
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-center gap-4 my-2">
                <a href="#" >
                    <i class="bi bi-behance" style={{color:'gold',fontSize:"50px"}}></i>
                </a>
                <a href="#" >
                    <i class="bi bi-linkedin" style={{color:'gold',fontSize:"50px"}}></i>
                </a>
                <a href="#" >
                    <i className="bi bi-facebook" style={{color:'gold',fontSize:"50px"}}></i>
                </a>
              </div>
            </div>
       

        {/* حقوق النشر */}
        <div className="row pt-3 border-top border-secondary">
          <div className="col-12 text-center">
            <p className="mb-0 text-white-50">2025 © جميع الحقوق محفوظة</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
