import { About } from "@/components/About";
import { CartSheet } from "@/components/CartSheet";
import { Categories } from "@/components/Categories";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { PopularDishes } from "@/components/PopularDishes";
import { PromoBanner } from "@/components/PromoBanner";
import { SearchDialog } from "@/components/SearchDialog";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <PopularDishes />
        <PromoBanner />
        <HowItWorks />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <CartSheet />
      <SearchDialog />
    </>
  );
}
