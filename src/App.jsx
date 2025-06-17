import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import BlogPage from "./pages/blog-page";
import BlogDetailsPage from "./pages/blog-details-page";
import ContactPage from "./pages/contact-page";
import PageNotFound from "./components/page-not-found";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
         <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
