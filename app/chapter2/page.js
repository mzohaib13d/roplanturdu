// app/chapter2/page.js
import Navbar from "../components/Navbar";
import Chapter2 from "../components/Chapter2";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Chapter2 />
    </main>
  );
}