import { Outlet } from "react-router-dom"
// import Home from "./pages/Home/Home"
// import Job from "./pages/Job/Job"
import Footer from "./shared/Footer"
import Navbar from "./shared/Navbar"

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Home></Home> */}
      <Outlet></Outlet>
      {/* <Job></Job> */}
      <Footer></Footer>
    </>
  )
}

export default App
