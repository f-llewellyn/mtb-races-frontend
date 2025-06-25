import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="grid min-h-dvh place-content-center bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 grid w-full place-content-center">
              <Image
                src={'/switchback-text.svg'}
                alt="switchback logo"
                width={500}
                height={40}
              />
            </div>
            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-gray-700 md:text-xl">
              Signing onto MTB races is a pain in the arse. Switchback brings
              together all UK mountain bike races in one place.
            </p>
            <a
              href="/races"
              className="inline-block transform rounded-lg bg-green-500 px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-xl">
              View Races
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
