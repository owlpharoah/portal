import Image from "next/image";

export default function Dish({ dish }) {
  return (
    <div
      className="absolute transition-all duration-300"
      style={{
        left: `${dish.position.x}%`,
        top: `${dish.position.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <Image
        src={dish.image}
        alt={dish.name}
        width={dish.size.width}
        height={dish.size.height}
        priority
      />
    </div>
  );
}