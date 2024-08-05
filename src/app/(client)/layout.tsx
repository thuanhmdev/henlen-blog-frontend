import React from "react";
import PropTypes from "prop-types";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollTop from "@/components/scroll-top";

const ClientLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default ClientLayout;
