import { emojis } from '@atomic/database/emojis';
import { PageTemplate } from '@atomic/templates/PageTemplate';
import { copy } from '@atomic/utils/clipboard/copy';
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
    <PageTemplate
      query={query}
      setState={setState}
      id="assets-emojis"
      emoji="😄"
      title="atomic/emojis"
      subtitle="Emojis is the backbone of software development"
      description="is an easy-to-access, curated collection of diverse emojis to enhance user experience and add personality to your interfaces."
      features={['Copy / Paste', 'Pure SVG', 'Custom Colors']}>
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
                    className="cursor-pointer rounded-lg p-2 text-4xl hover:bg-neutral-200 dark:hover:bg-neutral-800"
                    onClick={() => copy(emoji)}>
                    {emoji}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default EmojisPage;
