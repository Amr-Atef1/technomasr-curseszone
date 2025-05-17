
import Branch from '../components/Branch'
import blogImg from '../assets/modernBlogImg.jpg';
import podcastImg from '../assets/podcastImage.webp'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion.js";
import { PodcastsData } from '../constant/index.js';
import { useState } from 'react';

const Podcast = () => {
  // بيانات المدونات
    
  
    // حالة البحث
    const [searchTerm, setSearchTerm] = useState('');
  
    // حالات الترقيم
    const [currentPage, setCurrentPage] = useState(1);
    const podcastPerPage = 8;
  
    // فلترة الورش حسب كلمة البحث
    const filteredPodcasts = PodcastsData.filter(podcast => {
      const matchesSearch = 
        podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        podcast.author.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearch;
      
    });
    // حساب عدد الصفحات
  const totalPages = Math.ceil(filteredPodcasts.length / podcastPerPage);

  // الحصول على الورش للصفحة الحالية
  const indexOfLastWorkshop = currentPage * podcastPerPage;
  const indexOfFirstWorkshop = indexOfLastWorkshop - podcastPerPage;
  const currentPodcasts = filteredPodcasts.slice(indexOfFirstWorkshop, indexOfLastWorkshop);

  // تغيير الصفحة
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
    <Branch title={'بوكاست'}/>
    <section className="overflow-hidden py-5 d-flex align-items-center">
        <div className="container">
          {/* العنوان والفقرة */}
          <h1 className="text-center mt-5 mb-2 fw-bold">
      بودكاست عالم التصميم
              </h1>
          <p
            className="text-center text-muted mb-5 mt-3 lead mx-auto"
            
          >
           بودكاست بركز علي كل ما يتعلق بعالم تصميم واجهات وتجارب <br /> المستخدم, من أساسيات التصميم الي استراتيجيات تحسين التفاعل
          </p>

          {/* حقل البحث فقط */}
          <div className="row mb-4 justify-content-center">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ابحث عن بودكاست أو مؤلف..."
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
  {currentPodcasts.map((podcast, index) => (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1.25)}
      initial="hidden"
      viewport={{ once: true }}
      whileInView="show" 
      key={podcast.id} 
      className="col-sm-12 col-md-6"
    >
      <div className="card h-100 custom-card overflow-hidden shadow-lg rounded-3">
        <div className="row g-2 h-100">
          {/* الجزء الأيمن - الصورة */}
          <div className=" col-md-4 ">
            <img 
              src={podcast.imageUrl} 
              className="img-fluid rounded-3 h-100 w-100 object-fit-cover" 
              alt="podcast-img" 
            />
          </div>
          
          {/* الجزء الأيسر - المحتوى */}
          <div className="col-md-8 p-4 d-flex flex-column">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-person-fill me-2"></i>
                <span className="fw-bold" style={{color:'gold'}}>{podcast.author}</span>
              </div>
              
              <h5 className="card-title fw-bold mb-3">{podcast.title}</h5>
              
              {/* مشغل الصوت */}
              <div className="d-flex align-items-center gap-3 mt-4">
                <audio controls className="w-100">
                  <source src={podcast.audioUrl} type="audio/mpeg" />
                  متصفحك لا يدعم تشغيل الصوتيات
                </audio>
              </div>
            </div>
            
            {/* التوقيت وتاريخ النشر */}
            <div className="card-footer bg-transparent border-0 d-flex justify-content-between">
              <small className="text-muted fw-bold">
                <i className="bi bi-clock me-1" style={{color:'gold'}}></i> {podcast.duration}
              </small>
              <small className="text-muted fw-bold">
                <i className="bi bi-calendar me-1" style={{color:'gold'}}></i> {podcast.publishDate}
              </small>
            </div>
          </div>
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
          {filteredPodcasts.length === 0 && (
            <div className="text-center py-5">
              <h4>لا توجد نتائج تطابق بحثك</h4>
              <button 
                className="btn btn-link"
                onClick={() => {
                  setSearchTerm('');
                  setCurrentPage(1);
                }}
              >
                عرض جميع البودكاست
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Podcast