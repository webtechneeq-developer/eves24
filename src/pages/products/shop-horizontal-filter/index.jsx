import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import Features2 from "@/components/products/Features2";

import Products4 from "@/components/products/Products4";
import Subcollections from "@/components/products/Subcollections";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
import Breadcumb from "@/components/products/Breadcumb";
const metadata = {
  title:
    "Shop Horaizontal Filter || Vineta - Multipurpose Reactjs eCommerce Template",
  description: "Vineta - Multipurpose Reactjs eCommerce Template",
};
export default function ProductPageHoraizontalFilter() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar2 parentClass="tf-topbar bg-dark-5 topbar-bg" />
      <Header1 />
      <Breadcumb />
      <Products4 />
      <Features2 />
      <Footer1 />
    </>
  );
}
