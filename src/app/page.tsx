
import Footer from "@/components/global/footer";
import Header from "@/components/global/nav";
import OffCanvas from "@/components/global/offCanvas";
import Preloader from "@/components/global/preloader";
import Testimonials from "@/components/global/testimonials";
import Achivement from "@/components/page-sections/home/achivement";
import Blog from "@/components/page-sections/home/blog";
import Cta from "@/components/page-sections/home/cta";
import Feature from "@/components/page-sections/home/feature";
import Hero from "@/components/page-sections/home/hero";
import ServiceArea from "@/components/page-sections/home/service";
import TeamArea from "@/components/page-sections/home/teamArea";
import WorksSection from "@/components/page-sections/home/works";
import RootLayout from "./layout";
import Rootprovider from "@/components/ui/lenis";

export default function Home() {
  return (
    <>
      {/* <Preloader /> */}
      <div suppressHydrationWarning className="cursor1"></div>
      <div suppressHydrationWarning className="cursor2"></div>
      <OffCanvas />
      <Header />
      <div className="has-smooth" id="has_smooth"></div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="body-wrapper body-startup-agency">
            <div className="overlay-switcher-close"></div>
            <main>
          
              <Hero />
              <Feature />
              <WorksSection />
              {/* <ServiceArea /> */}

              {/* <Testimonials /> */}
              <TeamArea />
              <Blog />
              <Achivement />
              <Cta />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
