


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import ButtonGradient from "./assets/svg/ButtonGradient";
// import Benefits from "./components/Benefits";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Roadmap from "./components/Roadmap";
// import Navbar from './components/Navbar';
// import Profile from "./components/Profile";
// import MyProjects from './components/MyProjects';
// import ProfileForm from './components/ProfileForm';

// const AppContent = () => {
//   const location = useLocation();

//   // Show the Navbar only on certain routes
//   const showNavbar = ["/profile", "/myprojects"].includes(location.pathname);

//   return (
//     <>
//       {/* {showNavbar && <Navbar />} */}
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
//                 <Header />
//                 <Hero />
//                 <Benefits />
//                 <Roadmap />
//                 <Footer />
//               </div>
//               <ButtonGradient />
//             </>
//           }
//         />
//         <Route
//           path="/profile"
//           element={<ProfileForm />}
//         />
//         <Route
//           path="/myprojects"
//           element={<MyProjects />}
//         />
//       </Routes>
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// };

// export default App;




import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;

