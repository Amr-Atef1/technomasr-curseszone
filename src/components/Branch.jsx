import React from 'react'
import modernBlogImg from '../assets/modernBlogImg.jpg'
import { div } from 'framer-motion/client'

const Branch = ({ title,moreTitle }) => {
  return (
    <div
      className='position-relative container-fluid px-5 text-white py-4'
      style={{
        backgroundImage: `url(${modernBlogImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay layer */}
      <div
        className='position-absolute top-0 start-0 w-100 h-100'
        style={{ backgroundColor: 'rgba(46,30,102,0.6)', zIndex: 1 }}
      ></div>

      {/* Content above overlay */}
      <div className='row position-relative' style={{ zIndex: 2 }}>
        <div className='d-flex justify-content-start align-items-center gap-2'>
          <p className='m-0 fs-4 text-white'>الرئيسية</p>
          <i className="bi bi-chevron-left"></i>
          <p className='m-0 fs-4' style={{color:'gold'}}>{title}</p>
          {
            moreTitle&&(
              <>
              <i className="bi bi-chevron-left"></i>
              <p className='m-0 fs-4' style={{color:'gold'}}>{moreTitle}</p>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Branch