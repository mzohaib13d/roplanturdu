// app/chapter5/page.js
import Navbar from "../components/Navbar";
import Chapter5 from "../components/Chapter5";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Chapter5 />
    </main>
  );
}