import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Products from "components/Projects";
import Contact from "components/Contact";
import Layout from "layout";
import Home from "components/Home";
import News from "components/News";
import { useEffect } from "react";
import PreLoader from "Loader/Loader";


function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <PreLoader />
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
          </Routes>
        </BrowserRouter>


      </div>
    </>
  );
}

export default App;
