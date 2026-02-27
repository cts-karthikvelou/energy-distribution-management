import { Routes,Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
// import Services from './pages/Services'
// import Projects from './pages/Projects'
import DataScience from './pages/DataScience'
import Contact from './pages/Contact'
import Renewable from "./pages/Renewable"
import NonRenewable from "./pages/NonRenewable"
import ScrollToTop from "./ScrollToTop";
import DetailsPage from "./pages/DetailsPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Logout from './pages/logout'
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
const App = () => {
  return (
      <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <ScrollToTop />
      <main className="flex-fill">
      <Routes>
        <Route path='/' element={<Navigate to='/home' />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path='/datascience' element={<DataScience/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path="/renewable" element={<Renewable />} />
        <Route path="/nonrenewable" element={<NonRenewable />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path='/login' element={<Login/>}></Route>
         <Route path="/signup" element={<Signup />} />
         <Route path="/logout" element={<Logout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        

      </Routes>
      </main>
      <Footer />
         </div>
  )
}

export default App
