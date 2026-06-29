import BananaLeaf from "./BananaLeaf";

export default function SadhyaSection() {
  return (
    <section className="bg-[#081C15] py-24">
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold text-yellow-400">
          Onam 2026
        </h2>

        <p className="mt-4 text-lg text-gray-300">
          Scroll to experience the traditional Kerala Sadhya.
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <BananaLeaf />
      </div>
    </section>
  );
}