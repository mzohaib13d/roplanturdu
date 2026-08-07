// app/chapter8/page.js
import Navbar from "../components/Navbar";
import Chapter8 from "../components/Chapter8";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Chapter8 />
    </main>
  );
}