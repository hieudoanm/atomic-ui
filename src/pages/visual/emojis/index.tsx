import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
import { Navbar } from '@atomic/components/Navbar';
import { NAVBAR_LINKS } from '@atomic/constants';
import { emojis } from '@atomic/database/emojis';
import { NextPage } from 'next';
import { useState } from 'react';

const emojisList: { name: string; emoji: string }[] = Object.entries(emojis).map(([key, value]) => {
  return { name: key, emoji: value };
});

const EmojisPage: NextPage = () => {
  const [{ query = '' }, setState] = useState<{ query: string }>({ query: '' });

  const filteredEmojis = emojisList.filter(({ name }) => {
    return name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Navbar
        links={NAVBAR_LINKS.filter(({ id }) => id !== 'emojis')}
        title="atomic/emojis"
        query={query}
        setState={setState}
      />
      <div className="grow overflow-auto">
        <main className="divide-y divide-neutral-200 dark:divide-neutral-800">
          <Hero
            title="atomic/emojis"
            subtitle="Emojis is the backbone of software development"
            description="is an easy-to-access emojis collection 🎉😊, featuring a wide variety of expressive symbols 🎭✨ that bring fun and clarity to your projects 💻🎨."
            features={['Copy / Paste', 'Pure SVG', 'Custom Colors']}
          />
          <section className="py-4 md:py-8">
            <div className="container mx-auto px-8">
              <div className="flex flex-col gap-y-4 md:gap-y-8">
                <h2 className="text-2xl font-bold">
                  <span className="capitalize">Emojis</span> ({filteredEmojis.length})
                </h2>
                {filteredEmojis.length > 0 && (
                  <div className="flex flex-wrap">
                    {filteredEmojis.map(({ name, emoji }) => (
                      <button
                        key={emoji}
                        title={name}
                        className="cursor-pointer rounded-lg p-2 text-4xl hover:bg-neutral-200 dark:hover:bg-neutral-800">
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
        <Footer title="atomic/icons" />
      </div>
    </div>
  );
};

export default EmojisPage;
