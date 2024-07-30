import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { StrictMode, lazy, Suspense } from "react";

const AboutUs = lazy(() => import("@/pages/client/pages/AboutUs"));
const Programs = lazy(() => import("@/pages/client/pages/Programs"));
const Navbar = lazy(() => import("@/pages/client/components/Navbar"));
const Fotter = lazy(() => import("@/pages/client/components/Fotter"));

const App = () => {
  return (
    <>
      <StrictMode>
        <div className="bg-[#EAE9E5]">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar color="bg-l_color_r-600"/>          
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AboutUs/>} />
              {/* <Route path="/programas" element={<Programs/>} /> */}
            </Routes>
          </BrowserRouter>
          <Fotter />
        </Suspense>
        </div>
      </StrictMode>
    </>
  );
};

export default App;
