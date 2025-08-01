import Link from "next/link";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-gradient-custom">
        <header>
          <Navbar />
        </header>
        <main className="flex flex-grow items-center justify-center flex-col">
          <Image
            src="/AJAY AVATAR.svg"
            alt="Ajay's Avatar"
            className="h-auto w-32 md:w-64 md:h-64 mb-2"
            width={70}
            height={70}
          />
          <h1 className="text-2xl font-bold text-gray-900 font-georgia md:text-5xl">
            Ajay Bharanidhar
          </h1>
          <p className="text-xl text-gray-700 font-georgia md:3xl">
            - An Aspiring Software Engineer -
          </p>
        </main>
      </div>
      <div className="bg-gradient-custom">
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}



