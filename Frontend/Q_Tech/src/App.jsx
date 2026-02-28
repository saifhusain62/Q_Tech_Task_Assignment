import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Page/Home.jsx";
import FindJobs from "./Page/FindJobs.jsx";
import Companies from "./Page/Companies.jsx";
import Signup from "./Page/SignUp.jsx";
import Login from "./Page/Login.jsx";
import Form from "./Components/Form.jsx"

function App() {
  return (
    <Router>
      <Navbar />
      
        <Routes>
          {/* Home is the main/default page */}
          <Route path="/" element={<Home />} />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
           <Route path="/form" element={<Form />} />

          {/* 404 - Page Not Found */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
    
    </Router>
  );
}

export default App;