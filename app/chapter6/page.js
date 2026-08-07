// app/chapter6/page.js
import Navbar from "../components/Navbar";
import Chapter6 from "../components/Chapter6";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Chapter6 />
    </main>
  );
}