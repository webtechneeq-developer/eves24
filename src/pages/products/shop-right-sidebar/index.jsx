import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import Breadcumb from "@/components/products/Breadcumb";
import Features from "@/components/products/Features";
import Products3 from "@/components/products/Products3";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title:
    "Shop Right Sidebar || Vineta - Multipurpose Reactjs eCommerce Template",
  description: "Vineta - Multipurpose Reactjs eCommerce Template",
};
export default function ProductPageRightSidebar() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar2 parentClass="tf-topbar bg-dark-5 topbar-bg" />
      <Header1 />
      <Breadcumb />

      <Products3 />
      <Features />
      <Footer1 />
    </>
  );
}
