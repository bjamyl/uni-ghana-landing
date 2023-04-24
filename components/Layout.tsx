import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div>
      <Head>
        <title>Home | UniGhana - Your Univesity Application Companion</title>
        <meta
          name="description"
          content="Website helping students find schools, scholarships and general higher education application guidance."
        />
        <meta
          name="keywords"
          content="education, application, tertiary, postgraduate"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
