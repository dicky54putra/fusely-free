import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Cta from "../components/molecules/Cta";
import Footer from "../components/molecules/Footer";
import Navbar from "../components/molecules/Navbar";
import {
  Blog,
  Content,
  Hero,
  Partners,
  Plan,
} from "../components/organisms/HomePage";
import axios from "axios";

type DataApi = {
  hero?: object;
  clients?: Array<object>;
  examination?: object;
  creativeSolution?: object;
  professionalTeam?: object;
  chooseYourPlan?: object;
  blog?: object;
  cta?: object;
};
const Home: NextPage = () => {
  const [data, setData] = useState<DataApi | undefined>({});
  useEffect(() => {
    let isMounted = true;

    axios.get("/api/home").then((res) => {
      if (isMounted) {
        setData(res.data);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero data={data?.hero} />
      <Partners />
      <Content
        examination={data?.examination}
        creativeSolution={data?.creativeSolution}
        professionalTeam={data?.professionalTeam}
      />
      <Plan />
      <Blog />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
