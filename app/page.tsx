import Image from "next/image";
import RandomBox from "./components/RandomBox";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Interactive Webpage</h1>
      <p className="text-xl mb-8">Click the blue box to make it disappear and reappear!</p>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <div className="mt-8">
        <a
          href="https://nextjs.org/docs"
          className="text-blue-500 hover:text-blue-700 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Next.js
        </a>
      </div>
      <RandomBox />
    </main>
  );
}