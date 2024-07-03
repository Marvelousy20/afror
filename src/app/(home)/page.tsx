import Image from "next/image";
import Stories from "@/components/Stories";
import ModelCard from "@/components/ModelCard";

export default function Home() {
  return (
    <main>
      <Stories />
      <ModelCard />
    </main>
  );
}
