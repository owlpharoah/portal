import SadhyaSection from "../components/Sadhya/SadhyaSection";

export default function Home() {
  return (
    <main className="flex-1">

      {/* Temporary Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <h1 className="text-5xl font-bold">
          Welcome to KAVALA
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          A platform to connect alumni, celebrate memories,
          and strengthen our community.
        </p>

      </section>

      {/* New Sadhya Section */}
      <SadhyaSection />

    </main>
  );
}