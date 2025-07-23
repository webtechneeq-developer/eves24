import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import Topbar4 from "@/components/headers/Topbar4";
import Banner from "@/components/homes/home-plant/Banner";
import Banner2 from "@/components/homes/home-plant/Banner2";
import Brands from "@/components/common/Brands2";
import Blogs from "@/components/homes/home-handcraft/Blogs";
import Categories from "@/components/homes/home-1/Categories";
import Collections from "@/components/homes/home-handcraft/Collections";
import Features from "@/components/homes/home-plant/Features";
import Hero from "@/components/homes/home-handcraft/Hero";
import Products from "@/components/homes/home-plant/Products";
import Products1 from "@/components/homes/home-handcraft/Products1";
import Products2 from "@/components/homes/home-1/Products2";
import Shopgram from "@/components/homes/home-1/Shopgram";
import Testimonials from "@/components/homes/home-plant/Testimonials";
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
      <Topbar4 parentClass="tf-topbar bg-brown-1 topbar-bg marquee-topbar" />
      <Header1 />
      <Hero />
      <Features />
      <Banner2 />
      <Products1 />
      <Collections />
      <Testimonials />
      <Blogs />
      <Footer3 />
      <Newsletter />
    </>
  );
}
