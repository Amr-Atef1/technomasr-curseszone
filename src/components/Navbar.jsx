import logo from "../assets/logo.png";
import arabic from "../assets/arabic.jpg";
import english from "../assets/english.jpeg";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../context/cartContext";

const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.length;

  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // دالة تغلق القائمة عند الضغط على رابط (تستخدم Bootstrap JS)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 shadow-sm">
      <div className="container">
        <img width={100} src={logo} alt="logo" />
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto fw-bold ">
            <li className="nav-item ">
              <Link onClick={closeMenu} className="nav-link " to="/">
                الرئيسيه
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link" to="/coach">
                عن المدرب
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                الدورات التدريبيه
              </a>
              <ul className="dropdown-menu shadow-sm">
                <li>
                  <Link
                    onClick={closeMenu}
                    className="dropdown-item"
                    to="/courses/trainingCourses"
                  >
                    الدورات التدريبيه
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={closeMenu}
                    className="dropdown-item"
                    to="/courses/workshops"
                  >
                    فعاليات وورش العمل
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link" to="/blog">
                المدونه
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link" to="/consulting">
                الاستشارات
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link" to="/podcast">
                بودكاست
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeMenu} className="nav-link" to="/contact">
                تواصل معنا
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={closeMenu}
                className="nav-link position-relative"
                to="/cart"
              >
                <i className="bi bi-cart3"></i>
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.6rem" }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                العربيه
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link onClick={closeMenu} className="dropdown-item" to="#">
                    <img width={20} src={arabic} alt="arabic-img" />
                    <span className="fw-bold p-1">العربيه</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={closeMenu} className="dropdown-item" to="#">
                    <img width={20} src={english} alt="english-img" />
                    <span className="fw-bold p-1">English</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-outline-primary mx-1"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                onClick={closeMenu}
              >
                تسجيل الدخول
              </button>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-primary mx-1 "
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
                onClick={closeMenu}
              >
                إنشاء حساب
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* نموذج تسجيل الدخول */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <img className="w-50" src={logo} alt="logo-img" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="loginEmail"
                  />
                </div>
                <div className="mb-3 position-relative">
                  <label htmlFor="loginPassword" className="form-label">
                    كلمة المرور
                  </label>
                  <input
                    type={showLoginPassword ? "text" : "password"}
                    className="form-control"
                    id="loginPassword"
                  />
                  <i
                    className={`bi ${
                      showLoginPassword ? "bi-eye" : "bi-eye-slash"
                    } position-absolute position-mid me-3`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowLoginPassword(!showLoginPassword)}
                  ></i>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                  />
                  <label className="form-check-label" htmlFor="rememberMe">
                    تذكرني
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  تسجيل الدخول
                </button>
              </form>
            </div>
            <div className="modal-footer justify-content-center">
              <span>
                ليس لديك حساب؟{" "}
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#registerModal"
                  data-bs-dismiss="modal"
                >
                  إنشاء حساب
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* نموذج إنشاء حساب */}
      <div
        className="modal fade"
        id="registerModal"
        tabIndex="-1"
        aria-labelledby="registerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <img className="w-50" src={logo} alt="logo-img" />
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="registerName" className="form-label">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="registerName"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="registerEmail" className="form-label">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="registerEmail"
                  />
                </div>
                <div className="mb-3 position-relative">
                  <label htmlFor="registerPassword" className="form-label">
                    كلمة المرور
                  </label>
                  <input
                    type={showRegisterPassword ? "text" : "password"}
                    className="form-control"
                    id="registerPassword"
                  />
                  <i
                    className={`bi ${
                      showRegisterPassword ? "bi-eye" : "bi-eye-slash"
                    } position-absolute position-mid me-3`}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setShowRegisterPassword(!showRegisterPassword)
                    }
                  ></i>
                </div>
                <div className="mb-3 position-relative">
                  <label htmlFor="confirmPassword" className="form-label">
                    تأكيد كلمة المرور
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control"
                    id="confirmPassword"
                  />
                  <i
                    className={`bi ${
                      showConfirmPassword ? "bi-eye" : "bi-eye-slash"
                    } position-absolute position-mid me-3`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  ></i>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  إنشاء حساب
                </button>
              </form>
            </div>
            <div className="modal-footer justify-content-center">
              <span>
                لديك حساب بالفعل؟{" "}
                <a
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                  data-bs-dismiss="modal"
                >
                  تسجيل الدخول
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
