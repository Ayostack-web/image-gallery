/* 
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
*/

  import Image from 'next/image'

export default function Home() {
  const images = [
    'toffee-8798.JPG',
    'toffee-8792.JPG',
    'toffee-8789.JPG',
    'toffee-8787.JPG',
    'IMG_5519~2_070910.jpeg',
    'IMG_5208~2_031040_122030.jpeg',
    'IMG_0036-5~2_070934.jpeg',
    'IMG-20240805-WA0053.jpg',
    'IMG-20240805-WA0052_071722.jpg',
    'IMG_20230629_140612_652~5_030842_122108.jpg',
    'IMG_20230128_115711_286~2_030848_122110.jpg',
    'IMG_16688703756468603_030859_121953.jpg',
    '84384065_2656207274607920_2619338075217592320_n_2656207271274587_071336.jpg',
    '109931641_2792607520967894_2031756049165850742_n_2792607514301228_032214_121944~4.jpg',
    '52453393_2369799563248694_7832893765097357312_n_2369799549915362_071343.jpg',
    '50957382_2351546958407288_853798039125491712_n_2351546951740622_032221_121937.jpg',
    'big~3.jpg',
    'PXL_20250612_144027082~2_070850.jpg',
    'PXL_20250612_143950677~2_070857.jpg',
    'PXL_20250612_144101163_122617~3.jpg',
    'PXL_20250612_144046601_122630~2.jpg',
    'PXL_20250612_144125331~2_070831.jpg',
  ]

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-bold text-pink-500 animate-pulse italic">Ayokunle</h1>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <Image
              src={`/img/${img}`}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={500}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </section>
    </div>
  )
}
