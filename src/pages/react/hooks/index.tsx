import { CodePreview } from '@atomic/components/CodePreview';
import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
import { Navbar } from '@atomic/components/Navbar';
import { NAVBAR_LINKS } from '@atomic/constants';
import { NextPage } from 'next';
import Link from 'next/link';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { useState } from 'react';

const DEV_PATH = '../../../..';
const __dirname = join(dirname(__filename), DEV_PATH);

type Hook = {
  id: string;
  group: string;
  emoji: string;
  name: string;
  code: string;
};

const HooksPage: NextPage<{ hooks: Hook[] }> = ({ hooks = [] }) => {
  const [{ query = '' }, setState] = useState<{ query: string }>({ query: '' });

  const filteredHooks = hooks.filter(({ id, name }) => {
    return id.toLowerCase().includes(query.toLowerCase()) || name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Navbar
        links={NAVBAR_LINKS.filter(({ id }) => id !== 'react-hooks')}
        title="atomic/hooks"
        query={query}
        setState={setState}
      />
      <div className="grow overflow-auto">
        <main className="divide-y divide-neutral-200 dark:divide-neutral-800">
          <Hero
            title="atomic/hooks"
            subtitle="Free and Open Source React v19 Hooks"
            description="is a collection of reusable React hooks built for simplicity, efficiency, and ease of integration."
            features={['Copy / Paste', 'Pure React Hooks', 'Cross Browser Compatible']}
          />
          <section className="py-4 md:py-8">
            <div className="container mx-auto px-8">
              <div className="flex flex-col gap-y-4 md:gap-y-8">
                <h2 className="text-2xl font-bold">
                  <span className="capitalize">Hooks</span> ({filteredHooks.length})
                </h2>
                {filteredHooks.length > 0 && (
                  <>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                      {filteredHooks.map(({ id = '', emoji = '', group, name = '' }) => {
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
                      {filteredHooks.map(({ id = '', emoji = '', group = '', name = '', code = '' }) => {
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
        </main>
      </div>
      <Footer title="atomic/hooks" />
    </div>
  );
};

export const getStaticProps = () => {
  const hooks = [
    { path: 'boolean/use-boolean', emoji: '🔘', name: 'useBoolean' },
    { path: 'boolean/use-toggle', emoji: '🔀', name: 'useToggle' },
    { path: 'events/use-keyboard', emoji: '⌨️', name: 'useKeyboard' },
    { path: 'events/use-online', emoji: '📶', name: 'useOnline' },
    { path: 'events/use-resize', emoji: '📏', name: 'useResize' },
    { path: 'events/use-scroll', emoji: '🖱️', name: 'useScroll' },
    { path: 'info/use-battery', emoji: '🔋', name: 'useBattery' },
    { path: 'info/use-browser', emoji: '🌐', name: 'useBrowser' },
    { path: 'info/use-language', emoji: '🈯', name: 'useLanguage' },
    { path: 'info/use-screen', emoji: '🖥️', name: 'useScreen' },
    { path: 'navigator/use-clipboard', emoji: '📋', name: 'useClipboard' },
    { path: 'navigator/use-geolocation', emoji: '📍', name: 'useGeolocation' },
    { path: 'storage/use-local-storage', emoji: '💾', name: 'useLocalStorage' },
    { path: 'storage/use-session-storage', emoji: '🗂️', name: 'useSessionStorage' },
    { path: 'time/use-interval', emoji: '⏱️', name: 'useInterval' },
    { path: 'time/use-timeout', emoji: '⏳', name: 'useTimeout' },
  ].map(({ path = '', emoji = '', name = '' }) => {
    const group = path.split('/').at(0);
    const id = path.replaceAll('/', '-');
    const hookPath = `${__dirname}/src/hooks/${path}.tsx`;
    const code = readFileSync(hookPath, 'utf-8');
    return { id, group, name, emoji, code };
  });
  return { props: { hooks } };
};

export default HooksPage;
