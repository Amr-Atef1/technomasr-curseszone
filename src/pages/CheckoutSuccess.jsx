// src/pages/CheckoutSuccess.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/"); // يرجع المستخدم للصفحة الرئيسية بعد 5 ثوانٍ
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="container text-center py-5">
      <div className="alert alert-success fs-4 fw-bold" role="alert">
        ✅ تم الدفع بنجاح!
      </div>
      <p>سيتم تحويلك تلقائيًا إلى الصفحة الرئيسية خلال ثوانٍ...</p>
      <button className="btn btn-outline-primary mt-3" onClick={() => navigate("/")}>
        العودة للصفحة الرئيسية الآن
      </button>
    </div>
  );
};

export default CheckoutSuccess;