import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1A0B2E]">
      <Header />
      <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      </div>
    </main>
  );
}
