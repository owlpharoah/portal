import Image from "next/image";
import leaf from "@/assets/images/banana-leaf.png";

export default function BananaLeaf() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <Image
        src={leaf}
        alt="Banana Leaf"
        width={1400}
        height={700}
        priority
        className="w-full h-auto"
      />
    </div>
  );
}
