import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import Banner from "@/components/homes/home-1/Banner";
import Brands from "@/components/common/Brands2";
import Categories from "@/components/homes/home-1/Categories";
import Collections from "@/components/homes/home-1/Collections";
import Features from "@/components/homes/home-1/Features";
import Hero from "@/components/homes/home-1/Hero";
import Products from "@/components/homes/home-1/Products";
import Products2 from "@/components/homes/home-1/Products2";
import Shopgram from "@/components/homes/home-1/Shopgram";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Newsletter from "@/components/modals/Newsletter";
import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Home || Vineta - Multipurpose Reactjs eCommerce Template",
  description: "Vineta - Multipurpose Reactjs eCommerce Template",
};

export default function HomePage() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar1 />
      <Header1 />
      <Hero />
      <Collections />
      <Products />
      <Banner />
      <Categories />
      <Products2 />
      <Testimonials />
      <Brands />
      <Shopgram />
      <Features />
      <Footer1 />
      <Newsletter />
    </>
  );
}
