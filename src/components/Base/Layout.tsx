import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: Children) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
