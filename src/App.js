// import Navbar from "./Component/Navbar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import BlogPost from "./Component/BlogPost/BlogPost";
import AboutUS from "./Pages/AboutUS";
import AnnualReports from "./Pages/AnnualReports";
import Blogs from "./Pages/Blogs";
import Events from "./Pages/Events";
import FAQs from "./Pages/FAQs";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUS/>} />
          <Route path='/events' element={<Events/>} />
          {/* <Route path='/blogs' element={<Blogs/>} /> */}
          <Route path='/blogs/all' element={<Blogs/>} />
          <Route path='/blogs/:id' element={<BlogPost/>} />
          <Route path='/faqs' element={<FAQs/>} />
          <Route path='/annualReport' element={<AnnualReports/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
