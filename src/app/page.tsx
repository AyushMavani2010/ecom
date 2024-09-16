import Header from "../componets/Header";
import Footer from "../componets/Footer";
import Index from "../../src/pages/home/Page";
import Shop from "../pages/shop/Page";
export default function Home() {
  return (
    <>
      <Header />
      <Index />
      <Footer />
      <Shop></Shop>
    </>
  );
}
