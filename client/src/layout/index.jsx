import Footer from "components/Footer";
import Header from "components/Header";
import ScrollToTop from "components/ScrollToTop";
import React from "react";
import { Outlet } from "react-router-dom";
import PreLoader from "Loader/Loader";
import { useDispatch } from "react-redux";
import { fetchProjects } from "state";
import { useEffect } from "react";
const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className="layout">
      <PreLoader />
      <Header />
      <div className="layout_body">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
