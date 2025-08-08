

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
        <h1 className="text-5xl font-bold text-pink-500 animate-pulse italic">
          Ayokunle
        </h1>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all duration-500"
          >
            {/* Image */}
            <Image
              src={`/img/${img}`}
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={500}
              className="object-cover w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
              <p className="text-white text-lg font-semibold">
                Image {index + 1}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
