import Navbar from "@/components/header/Navbar";
import Topbar from "@/components/header/Topbar";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 hidden w-full md:block">
      <Topbar />
      <Navbar />
    </header>
  );
}
