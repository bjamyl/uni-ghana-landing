import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Universities from "@/components/Universities";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main>
        <Hero/>
        <Universities/>

      </main>
    </Layout>
  );
}
