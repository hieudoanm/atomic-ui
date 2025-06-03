import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
import { Icon } from '@atomic/components/Icon';
import { Navbar } from '@atomic/components/Navbar';
import { NAVBAR_LINKS } from '@atomic/constants';
import { NextPage } from 'next';
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { useState } from 'react';

const DEV_PATH = '../../../..';
const __dirname = join(dirname(__filename), DEV_PATH);

type IconType = { id: string; name: string; code: string };

const IconsPage: NextPage<{ icons: IconType[] }> = ({ icons = [] }) => {
  const [{ query = '' }, setState] = useState<{ query: string }>({ query: '' });

  const filteredIcons = icons.filter(({ id, name }) => {
    return id.toLowerCase().includes(query.toLowerCase()) || name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Navbar
        links={NAVBAR_LINKS.filter(({ id }) => id !== 'icons')}
        title="atomic/icons"
        query={query}
        setState={setState}
      />
      <div className="grow overflow-auto">
        <main className="divide-y divide-neutral-200 dark:divide-neutral-800">
          <Hero
            title="atomic/icons"
            subtitle="Free and Open Source SVG Icons"
            description="is a free collection of carefully crafted SVG icons, designed to enhance modern user interfaces with scalable visuals."
            features={['Copy / Paste', 'Pure SVG', 'Custom Colors']}
          />
          <section className="py-4 md:py-8">
            <div className="container mx-auto px-8">
              <div className="flex flex-col gap-y-4 md:gap-y-8">
                <h2 className="text-2xl font-bold">
                  <span className="capitalize">Icons</span> ({filteredIcons.length})
                </h2>
                {filteredIcons.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 md:gap-8 lg:grid-cols-8 xl:grid-cols-10">
                    {filteredIcons.map(({ id = '', name = '', code }) => {
                      return (
                        <div key={id} className="col-span-1 flex flex-col gap-y-2">
                          <Icon name={name} code={code} />
                          <p title="name" className="w-full truncate text-center text-xs">
                            {name}
                          </p>
                        </div>
                      );
                    })}
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

export const getStaticProps = () => {
  const folders = readdirSync(join(__dirname, 'src/html/icons'));
  let icons: IconType[] = [];
  for (const folder of folders) {
    const path = join(__dirname, `src/html/icons/${folder}`);
    const svgs = readdirSync(path);

    const folderIcons = svgs.map((svg: string) => {
      const name: string = svg.split('/').at(-1) ?? '';
      const id: string = name?.replaceAll('.svg', '');
      const file = join(__dirname, `src/html/icons/${folder}/${svg}`);
      const code = readFileSync(file, 'utf-8');
      return { id, name, code };
    });
    icons = icons.concat(folderIcons);
  }

  return { props: { icons } };
};

export default IconsPage;
