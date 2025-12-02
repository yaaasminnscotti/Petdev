import { About } from "../_components/ui/about";
import { Footer } from "../_components/ui/footer";
import { Hero } from "../_components/ui/Hero";
import { Services } from "../_components/ui/services";
import { Testimonials } from "../_components/ui/testimonials";

export default function Home(){
  return(
    <main>
      <Hero/>
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  )
}

