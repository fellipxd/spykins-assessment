import Articles from "@components/Articles/Articles";
import Container from "@components/Container/Container";
import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import Services from "@components/Services/Services";
import Hero from "../components/Hero/Hero";


export default function Home() {
  return (
    <Container>
      <Navbar/>
      <Hero />
      <Services />
      <Articles />
      <Footer/>
    </Container>
  )
}
