import { CodePreview } from '@atomic/components/CodePreview';
import { PageTemplate } from '@atomic/templates/PageTemplate';
import { NextPage } from 'next';
import Link from 'next/link';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { useState } from 'react';

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const devPath = NODE_ENV === 'development' ? '../../../..' : '../../..';
const __dirname = join(dirname(__filename), devPath);

type Util = { id: string; name: string; group: string; emoji: string; code: string };

const UtilsPage: NextPage<{ utils: Util[] }> = ({ utils = [] }) => {
  const [{ query = '' }, setState] = useState<{ query: string }>({ query: '' });

  const filteredUtils = utils.filter(({ id, name }) => {
    return id.toLowerCase().includes(query.toLowerCase()) || name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <PageTemplate
      query={query}
      setState={setState}
      id="utils"
      emoji="🧰"
      title="atomic/utils"
      subtitle="Free and Open Source Utilities"
      description="is a free set of reusable utility functions designed to simplify common tasks and improve code efficiency and maintainability."
      features={['Copy / Paste', 'Pure JS', 'Functional']}>
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-8">
          <div className="flex flex-col gap-y-4 md:gap-y-8">
            <h2 className="text-2xl font-bold">
              <span className="capitalize">Utils</span> ({filteredUtils.length})
            </h2>
            {filteredUtils.length > 0 && (
              <>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                  {filteredUtils.map(({ id = '', emoji = '', group, name = '' }) => {
                    return (
                      <Link href={`#${id}`} key={id}>
                        <div className="col-span-1">
                          <div className="flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
                            <p className="text-2xl">{emoji}</p>
                            <div className="flex flex-col gap-y-0.25">
                              <p className="text-xs capitalize">{group}</p>
                              <p className="font-semibold capitalize">{name}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-y-8">
                  {filteredUtils.map(({ id = '', emoji = '', group = '', name = '', code = '' }) => {
                    return (
                      <div key={id} className="flex flex-col gap-y-4">
                        <CodePreview id={id} emoji={emoji} group={group} name={name} code={code} codeOnly />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export const getStaticProps = () => {
  const utils = [
    { path: 'array/chunk', emoji: '📦', name: 'Chunk' },
    { path: 'array/shuffle', emoji: '🔀', name: 'Shuffle' },
    { path: 'array/union', emoji: '⚡', name: 'Union' },
    { path: 'array/unique', emoji: '🔑', name: 'Unique' },
    { path: 'clipboard/copy', emoji: '📋', name: 'Copy' },
    { path: 'clipboard/paste', emoji: '📥', name: 'Paste' },
    { path: 'functional/memoize', emoji: '🧠', name: 'Memoize' },
    { path: 'functional/once', emoji: '☝️', name: 'Once' },
    { path: 'number/clamp', emoji: '🧮', name: 'Clamp' },
    { path: 'number/commas', emoji: '🔢', name: 'Commas' },
    { path: 'number/currency', emoji: '💰', name: 'Currency' },
    { path: 'number/random', emoji: '🎲', name: 'Random' },
    { path: 'performance/debounce', emoji: '🕒', name: 'Debounce' },
    { path: 'performance/throttle', emoji: '🚦', name: 'Throttle' },
    { path: 'storage/cookies', emoji: '🍪', name: 'Cookies' },
    { path: 'storage/indexed.db', emoji: '💾', name: 'Indexed DB' },
  ].map(({ path = '', emoji = '', name = '' }) => {
    const group = path.split('/').at(0);
    const id = path.replaceAll('/', '-');
    const utilPath = `${__dirname}/src/utils/${path}.ts`;
    const code = readFileSync(utilPath, 'utf-8');
    return { id, group, name, emoji, code };
  });

  return { props: { utils } };
};

export default UtilsPage;
