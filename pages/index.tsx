import type { NextPage } from "next";
import Cta from "../components/molecules/cta";
import Footer from "../components/molecules/footer";
import Navbar from "../components/molecules/navbar";
import {
  Blog,
  Content,
  Hero,
  Partners,
  Plan,
} from "../components/organisms/homePage";

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
