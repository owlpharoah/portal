import Image from "next/image";
import leaf from "@/assets/images/banana-leaf.png";

import dishes from "@/data/sadhya";
import Dish from "./Dish";

export default function BananaLeaf() {
  return (
    <div className="relative mx-auto w-full max-w-6xl">

      <Image
        src={leaf}
        alt="Banana Leaf"
        className="w-full h-auto"
        priority
      />

      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          dish={dish}
        />
      ))}

    </div>
  );
}