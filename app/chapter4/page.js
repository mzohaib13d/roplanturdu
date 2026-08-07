// app/chapter4/page.js
import Navbar from "../components/Navbar";
import Chapter4 from "../components/Chapter4";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Chapter4 />
    </main>
  );
}