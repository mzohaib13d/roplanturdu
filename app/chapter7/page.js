// app/chapter7/page.js
import Navbar from "../components/Navbar";
import Chapter7 from "../components/Chapter7";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Chapter7 />
    </main>
  );
}