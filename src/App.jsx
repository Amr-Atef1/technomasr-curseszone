
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Coach from './pages/Coach'
import TrainingCourses from './pages/Courses/TrainingCourses'
import Workshops from './pages/Courses/Workshops'
import Blog from './pages/Blog'
import Podcast from './pages/Podcast'
import Contact from './pages/Contact'
import Consulting from './pages/Consulting'
import Cart from './pages/Cart'
import CourseInfo from './pages/Courses/CourseInfo'
import CheckoutSuccess from './pages/CheckoutSuccess'
import ScrollToTop from './components/ScrollToTop'

function App() {


  return (
    <>
    <Navbar/>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/courses/trainingCourses" element={<TrainingCourses />} />
        <Route path="/courses/trainingCourses/:id" element={<CourseInfo />} />
        <Route path="/courses/Workshops" element={<Workshops />} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/consulting' element={<Consulting/>}/>
        <Route path='/podcast' element={<Podcast/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkoutSuccess" element={<CheckoutSuccess />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
