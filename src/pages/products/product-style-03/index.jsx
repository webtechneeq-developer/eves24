import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar2 from "@/components/headers/Topbar2";
import Features2 from "@/components/products/Features2";
import Products1 from "@/components/products/Products1";
import Subcollections from "@/components/products/Subcollections";
import { Link } from "react-router-dom";
import React from "react";

import MetaComponent from "@/components/common/MetaComponent";
const metadata = {
  title: "Shop Style 03 || Vineta - Multipurpose Reactjs eCommerce Template",
  description: "Vineta - Multipurpose Reactjs eCommerce Template",
};
export default function ProductPageStyle3() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <Topbar2 parentClass="tf-topbar bg-dark-5 topbar-bg" />
      <Header1 />
      <Subcollections parentClass="flat-spacing" />

      <Products1
        cardStyleClass="grid style-3"
        parentClass="flat-spacing-2 pt-0"
        tooltipDirection={"top"}
      />
      <Features2 />
      <Footer1 />
    </>
  );
}
