import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
import { Navbar } from '@atomic/components/Navbar';
import { NAVBAR_LINKS } from '@atomic/constants';
import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div className="flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Navbar links={NAVBAR_LINKS} title="atomic" query="" setState={() => {}} disabledSearch />
      <div className="grow overflow-auto">
        <main className="divide-y divide-neutral-200 dark:divide-neutral-800">
          <Hero
            title="atomic"
            subtitle="Free and Open Source Front-end Code"
            description="is a modern, free collection of Tailwind UI, React Hooks, Icons, Charts, and Templates—built for fast, accessible, maintainable interfaces."
            features={['Copy / Paste', 'Pure TailwindCSS', 'Pure React Hooks']}
          />
          <section className="py-4 md:py-8">
            <div className="container mx-auto px-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                {[
                  { id: 'charts', href: '/components/charts', name: 'Charts Components', shortName: 'Charts' },
                  { id: 'ui', href: '/components/ui', name: 'UI Components', shortName: 'UI' },
                  { id: 'react-context', href: '/react/contexts', name: 'React Contexts', shortName: 'React Contexts' },
                  { id: 'react-hooks', href: '/react/hooks', name: 'React Hooks', shortName: 'React Hooks' },
                  { id: 'visual-emojis', href: '/visual/emojis', name: 'Emojis', shortName: 'Emojis' },
                  { id: 'visual-icons', href: '/visual/icons', name: 'Icons', shortName: 'Icons' },
                  { id: 'templates', href: '/templates', name: 'Page Templates', shortName: 'Templates' },
                ].map(({ href = '', name = '', shortName = '' }) => {
                  return (
                    <div key={href} className="col-span-1">
                      <Link href={href}>
                        <button className="w-full cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow dark:bg-purple-700 dark:shadow-neutral-100/10">
                          <span className="hidden md:inline">{name}</span>
                          <span className="inline md:hidden">{shortName}</span>
                        </button>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer title="atomic" />
    </div>
  );
};

export default HomePage;
