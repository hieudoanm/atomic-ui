import { emojis } from '@atomic/database/emojis';
import { PageTemplate } from '@atomic/templates/PageTemplate';
import { groupBy } from '@atomic/utils/array/group-by';
import { copy } from '@atomic/utils/clipboard/copy';
import { NextPage } from 'next';
import { useState } from 'react';

type Emoji = { category: string; name: string; emoji: string };

const emojisList: Emoji[] = Object.entries(emojis).reduce((previous, [category, record]) => {
  const list = Object.entries(record).map(([name, emoji]) => ({ category, name, emoji }));
  return previous.concat(list);
}, [] as Emoji[]);

const EmojisPage: NextPage = () => {
  const [{ query = '' }, setState] = useState<{ query: string }>({ query: '' });

  const filteredEmojis = emojisList.filter(({ name }) => {
    return name.toLowerCase().includes(query.toLowerCase());
  });
  const emojisByCategories = groupBy(filteredEmojis, 'category');

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
              <>
                {Object.entries(emojisByCategories).map(([category, emojis]) => {
                  return (
                    <div key={category} className="flex flex-col gap-y-4 md:gap-y-8">
                      <h2 className="text-3xl font-extrabold capitalize">
                        {category} ({emojis.length})
                      </h2>
                      <div className="flex flex-wrap">
                        {emojis.map(({ name, emoji }) => (
                          <button
                            key={emoji}
                            title={name}
                            className="aspect-square w-12 cursor-pointer rounded-lg text-4xl hover:bg-neutral-200 dark:hover:bg-neutral-800"
                            onClick={() => copy(emoji)}>
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default EmojisPage;
