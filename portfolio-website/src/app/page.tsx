import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-sky-300 to-yellow-100">
      <header>
        <Navbar />
      </header>
    </div>
  );
}


