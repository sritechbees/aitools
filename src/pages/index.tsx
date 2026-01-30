import AiSoftwareUse from "@/component/home/aisiftwareuse";
import HowItWorks from "@/component/home/howitworks";
import Mastermind from "@/component/home/mastermind";
import Testimonial from "@/component/home/testimonial";
import Footer from "@/component/layout/footer";
import Header from "@/component/layout/header";
import HeroSection from "@/component/layout/herosection";


export default function Home() {
  return (
    <div>
      <Header/>   
      <HeroSection/>
      <AiSoftwareUse/>
      <HowItWorks/>
      <Mastermind/>
      <Testimonial/>
      
      <Footer/>

    </div>
  );
}
