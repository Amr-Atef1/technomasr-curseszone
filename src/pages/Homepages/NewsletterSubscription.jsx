import React, { useState } from 'react';

function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق إرسال البيانات إلى الخادم
    console.log('تم الاشتراك بالبريد:', email);
    setIsSubscribed(true);
  };

  return (
   <div
      className="card rounded-4 p-5"
      style={{
        maxWidth: '700px',
        margin: '100px auto',
        backgroundColor: '#321a66',
        color: 'white',
        boxShadow: '20px 20px 60px -10px gold'
      }}
    >
      <div className="card-body">
        <h3 className="text-center mb-4" style={{ color: 'gold' }}>
          الاشتراك في النشرة الإخبارية لدينا
        </h3>
        <p className="text-center mb-4">
          يمكن أن تساعدك النشرة الإخبارية على البقاء على اطلاع بأحدث الأخبار والأحداث في مجالك.
        </p>

        {isSubscribed ? (
          <div className="alert alert-success text-center">
            شكراً لك على الاشتراك!
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row align-items-end">
              <div className="col-md-9 mb-3">
                <label htmlFor="emailInput" className="form-label">
                  البريد الإلكتروني
                </label>
                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <i class="bi bi-envelope-fill"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="الرجاء إدخال بريدك الإلكتروني"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <button type="submit" className="btn btn-warning w-100 fw-bold">
                  الاشتراك
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default NewsletterSubscription;