import Footer from "../components/footer";
import Header from "../components/header";
import HeroHeader from "../components/homepage-landing";
import Courses from "../components/courses";
import Jobs from "../components/jobs";
import Events from "../components/events";
import Finder from "../components/internship-finder";
import Socials from "../components/socials";
import { Box } from "@chakra-ui/react";
import Mission from "../components/mission";
import TestimonialCard from "../components/testimonials-card";
//redepoylkafmkfm
export default function Home() {
  return (
    <>
      <Header />
      <meta name="og:title" content="Tech Optimum "></meta>
      <meta name="og:description" content="A student-led organization dedicated to helping and inspiring the next generation of tech leaders."></meta>
      <meta name="og:image" content=" /meta.png"></meta>
      <Box my={["20px", "65px"]} _hover={{}}>
        <HeroHeader />
        <Mission />
        <Courses />
        <Events />
        <Jobs />
        <Finder />
        <TestimonialCard />
      </Box>
      <Socials />
      <Footer />
    </>
  );
}
