import type { NextPage } from "next";
import Cta from "../components/moleculs/cta";
import Footer from "../components/moleculs/footer";
import Navbar from "../components/moleculs/navbar";
import {
  Blog,
  Content,
  Hero,
  Partners,
  Plan,
} from "../components/partials/homePage";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Content />
      <Plan />
      <Blog />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
