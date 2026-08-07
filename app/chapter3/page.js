// app/chapter3/page.js
import Navbar from "../components/Navbar";
import Chapter3 from "../components/Chapter3";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Chapter3 />
    </main>
  );
}