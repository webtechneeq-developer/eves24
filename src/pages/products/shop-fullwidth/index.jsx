import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";

import Breadcumb from "@/components/products/Breadcumb";
import Features2 from "@/components/products/Features2";

import Products1 from "@/components/products/Products1";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Shop Fullwidth || Vineta - Multipurpose Reactjs eCommerce Template",
  description: "Vineta - Multipurpose Reactjs eCommerce Template",
};
export default function ProductPageFullWidth() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar2 fullWidth parentClass="tf-topbar bg-dark-5 topbar-bg" />
      <Header1 fullWidth />
      <Breadcumb fullWidth />

      <Products1 fullWidth />
      <Features2 fullWidth />
      <Footer1 fullWidth />
    </>
  );
}
