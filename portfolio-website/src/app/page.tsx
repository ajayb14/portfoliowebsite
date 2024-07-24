import Link from "next/link";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-custom">
      <header>
        <Navbar />
      </header>
      <main className="flex flex-grow items-center justify-center flex-col">
        <h1 className="text-5xl font-bold text-gray-900 font-georgia">
          Ajay Bharanidhar
        </h1>
        <p className="text-2xl text-gray-700 font-georgia">
          - an aspiring Front-End Developer
        </p>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}



