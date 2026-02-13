import FloatingHearts from "@/components/FloatingHearts";
import ValentineCard from "@/components/ValentineCard";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Layer 0: Ambient floating hearts background */}
      <FloatingHearts />

      {/* Layer 1: Main interactive Valentine card */}
      <ValentineCard />
    </main>
  );
}
