// app/chapter9/page.js
import Navbar from "../components/Navbar";
import Chapter9 from "../components/Chapter9";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <Chapter9 />
    </main>
  );
}