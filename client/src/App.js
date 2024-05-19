import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Products from "components/Projects";
import Contact from "components/Contact";
import Layout from "layout";
import Home from "components/Home";
import News from "components/News";
import { useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PreLoader from "Loader/Loader";
import Tuan from "components/Tuan";


function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PreLoader />
      <ToastContainer position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="App" >
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Products />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
            <Route path="/ngohuutuan" element={<Tuan />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
