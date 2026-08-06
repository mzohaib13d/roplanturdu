// app/chapter1/page.js
import Navbar from "../components/Navbar";
import Chapter1 from "../components/Chapter1";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Chapter1 />
    </main>
  );
}