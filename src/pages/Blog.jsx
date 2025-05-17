
import Branch from '../components/Branch'
import blogImg from '../assets/modernBlogImg.jpg';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.js";
import { blogsData } from '../constant/index.js'
import { useState } from 'react';

const Blog = () => {
  // بيانات المدونات
    
  
    // حالة البحث
    const [searchTerm, setSearchTerm] = useState('');
  
    // حالات الترقيم
    const [currentPage, setCurrentPage] = useState(1);
    const blogPerPage = 9;
  
    // فلترة الورش حسب كلمة البحث
    const filteredBlogs = blogsData.filter(blog => {
      const matchesSearch = 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearch;
      
    });
    // حساب عدد الصفحات
  const totalPages = Math.ceil(filteredBlogs.length / blogPerPage);

  // الحصول على الورش للصفحة الحالية
  const indexOfLastWorkshop = currentPage * blogPerPage;
  const indexOfFirstWorkshop = indexOfLastWorkshop - blogPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstWorkshop, indexOfLastWorkshop);

  // تغيير الصفحة
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
    <Branch title={'المدونه'}/>
    <section className="overflow-hidden py-5 d-flex align-items-center">
        <div className="container">
          {/* العنوان والفقرة */}
          <h1 className="text-center mt-5 mb-2 fw-bold">
            أحدث التدوينات
              </h1>
          <p
            className="text-center text-muted mb-5 mt-3 lead mx-auto"
            style={{ maxWidth: "700px" }}
          >
            اطلع على احدث التدوينات الملهمه التي تقدم نصائح<br /> وأفكار مبتكرة لتطوير حياتك ومهاراتك
          </p>

          {/* حقل البحث فقط */}
          <div className="row mb-4 justify-content-center">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ابحث عن ورشة أو كاتب..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // العودة للصفحة الأولى عند كل بحث
                  }}
                />
                <button className="btn btn-primary" type="button">
                  <i className="bi bi-search"></i> بحث
                </button>
              </div>
            </div>
          </div>

          {/* الكروت */}
          <div className="row g-4">
            {currentBlogs.map((workshop, index) => (
              <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 1.25)}
                initial="hidden"
                viewport={{ once: true }}
                whileInView="show" 
                key={workshop.id} 
                className="col-sm-6 col-md-4"
              >
                <div className="card h-100 custom-card overflow-hidden p-4 shadow-lg rounded-3">
                  <img src={blogImg} className="card-img-top" alt="blog-img" />
                  <div className="card-body text-center">
                    <div className="d-flex align-items-center justify-content-between my-3">
                      <div>
                        <i className="bi bi-calendar2-week-fill"></i>
                        <span className="m-1 fw-bold">{workshop.date}</span>
                      </div>
                      <div>
                        <i className="bi bi-person-fill"></i>
                        <span className="m-1 fw-bold">{workshop.author}</span>
                      </div>
                    </div>
                    <p className="card-text my-3 text-start fw-bold text-black" style={{fontSize:18}}>
                      {workshop.title}
                    </p>
                    <p className="text-muted text-start mb-4">
                      {workshop.description}
                    </p>
                  </div>
                  <div className="card-body d-flex justify-content-start align-items-center">
                    <a href="#" className="btn course-info rounded-pill text-white">
                      <i className="bi bi-arrow-right-circle-fill fs-5"></i>
                      <span className="p-2 fs-5 fw-bold text-black">تفاصيل التدوينة</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* الترقيم (Pagination) */}
          {totalPages > 1 && (
            <nav className="d-flex justify-content-center mt-5">
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    السابق
                  </button>
                </li>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                  <li 
                    key={number} 
                    className={`page-item ${currentPage === number ? 'active' : ''}`}
                  >
                    <button 
                      className="page-link" 
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </button>
                  </li>
                ))}
                
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    التالي
                  </button>
                </li>
              </ul>
            </nav>
          )}

          {/* رسالة عندما لا توجد نتائج */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-5">
              <h4>لا توجد نتائج تطابق بحثك</h4>
              <button 
                className="btn btn-link"
                onClick={() => {
                  setSearchTerm('');
                  setCurrentPage(1);
                }}
              >
                عرض جميع المدونات
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Blog