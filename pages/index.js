import Footer from "./components/footer/footer";
import CollectionSection from "./components/home/collectionSection";
import HeroSection from "./components/home/heroSection";
import Navigation from "./components/nav/navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <CollectionSection />
      <Footer />
    </>
  );
}
