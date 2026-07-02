import Image from "next/image";

export default function Dish({ dish }) {
  return (
    <div
      id={`dish-${dish.id}`}
      className="absolute"
      style={{
        left: `${dish.position.x}%`,
        top: `${dish.position.y}%`,
        transform: "translate(-50%, -50%)",
        zIndex: dish.zIndex,

        opacity: 0,
      }}
    >
      <Image
        src={dish.image}
        alt={dish.name}
        width={dish.size.width}
        height={dish.size.height}
      />
    </div>
  );
}