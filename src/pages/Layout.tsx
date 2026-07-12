import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
    </>
  );
}
