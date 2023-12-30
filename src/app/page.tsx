import CharacterCard from '@/components/CharacterCard';
import InputSearch from '@/components/InputSearch';

export default async function Home() {
  const characters = await fetch(
    'https://harry-potter-api-8vcv.onrender.com/api/characters'
  );

  const result = await characters.json();
  // console.log(result);

  return (
    <main className="w-full h-full flex flex-col items-center p-20 justify-center gap-10">
      <h1 className="lg:text-9xl text-6xl font-harry mb-4 text-center text-yellow-700">
        Harry Potter Characters
      </h1>

      <InputSearch />

      <CharacterCard characters={result} />

      <footer className="mt-10">
        <a
          href="https://birobirobiro.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          developed by <span className="h-4 underline">birobirobiro.dev</span>
        </a>
      </footer>
    </main>
  );
}
