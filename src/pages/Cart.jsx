import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Branch from "../components/Branch";
import { useCart } from "../context/cartContext";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [discountCode, setDiscountCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("الدفع بالبطاقة");
  const navigate = useNavigate();

  // حساب الإجمالي
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    console.log("تم الشراء:", cart);
    clearCart();
    navigate("/checkoutSuccess");
  };

  return (
    <>
      <Branch title={"سلة التسوق"} />

      <section className="py-5">
        <div className="container">
          {cart.length === 0 ? (
            <div className="text-center py-5">
              <h4>سلة التسوق فارغة</h4>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/courses/trainingCourses")}
              >
                تصفح الدورات التدريبية
              </button>
            </div>
          ) : (
            <div className="row">
              {/* الجزء الأيمن - قائمة الكورسات */}
              <div className="col-md-8">
                <div className="card shadow-sm mb-4">
                  <div className="card-header text-center bg-white border-bottom-0">
                    <h5 className="mt-3">
                      <i className="bi bi-cart3 me-2"></i>
                      <span className="fs-5 fw-bold">عدد الكورسات</span> 
                      <span style={{color:'green'}}>({cart.length})</span> 
                    </h5>
                  </div>
                  
                  <div className=" gap-3 d-flex flex-column p-3">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className=" shadow-lg rounded-lg p-3 d-flex align-items-center"
                        style={{borderRadius:'20px'}}
                      >
                        <div className="flex-shrink-0    me-3">
                          <img
                            src={item.courseImg || "/default-course.jpg"}
                            alt={item.title}
                            width="100"
                            height="100"
                            className="rounded-3 "
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 fs-5 fw-bold">{item.title}</h6>
                        </div>
                        <div className="text-center">
                          <button
                            className="btn p-1 bg-danger rounded-pill border-none text-white"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <i className="bi bi-x"></i>
                          </button>
                          <p className="my-3 fs-5 fw-bold" style={{color:'#2e1e66'}}>{item.price} ر.س</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* الجزء الأيسر - تفاصيل الدفع */}
              <div className="col-md-4">
                <div className="card shadow-sm">
                  <div className="card-body p-3">
                    {/* قسم كود الخصم */}
                    <div className="mb-4">
                      <h6 className="fw-bold mb-3">كود الخصم</h6>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="أدخل كود الخصم"
                          value={discountCode}
                          onChange={(e) => setDiscountCode(e.target.value)}
                        />
                        <button className="btn btn-outline-primary" style={{backgroundColor:"gold",color:"black",borderColor:'black'}}>
                          تطبيق
                        </button>
                      </div>
                    </div>

                    {/* قسم طريقة الدفع */}
                    <div className="mb-4 p-1 border border-1">
                      <h6 className=" p-2 border-bottom fw-bold mb-3">طريقة الدفع</h6>
                      <select
                        className="form-select mb-3"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                      >
                        <option>الدفع بالبطاقة</option>
                        <option>المحفظة الإلكترونية</option>
                        <option>الدفع عند الاستلام</option>
                      </select>
                    </div>

                    {/* قسم تفاصيل الدفع */}
                    <div className="mb-4 p-1 border border-1">
                      <h6 className="p-2 border-bottom fw-bold mb-3">تفاصيل الدفع</h6>
                      <div className="p-1 border-bottom">
                      <div className="d-flex  justify-content-between mb-2">
                        <span>سعر الدورات </span>
                        <span>{total} ر.س</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>كوبون الخصم</span>
                        <span>0 ر.س</span>
                      </div>
                      </div>
                      <div className="d-flex p-1 justify-content-between fw-bold">
                        <span>الإجمالي:</span>
                        <span>{total} ر.س</span>
                      </div>
                    </div>

                    {/* زر اتمام الشراء */}
                    <button
                      className="btn btn-primary w-100 py-2"
                      onClick={handleCheckout}
                    >
                      <i className="bi bi-credit-card me-2"></i>
                      اتمام الشراء
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
