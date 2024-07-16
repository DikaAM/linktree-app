import HeroForm from "@/components/forms/HeroForm";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <section className="p-6 pt-28 max-w-4xl mx-auto">
        <div className="max-w-md mb-8">
          <h1 className="text-4xl font-bold">
            Your one
            <br /> link for everything
          </h1>
          <h2 className="text-gray-400-400 text-xl mt-2">
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>
        <HeroForm />
      </section>
    </main>
  );
}
