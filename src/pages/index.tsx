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
            description="is a free, modern collection of Tailwind CSS UI components and reusable React Hooks, built with atomic design principles. It includes 44+ customizable components and practical hooks with built-in dark mode and responsive behavior—helping you build fast, accessible, and maintainable interfaces with ease."
            features={['Copy / Paste', 'Pure TailwindCSS', 'Pure React Hooks']}
          />
          <section className="py-4 md:py-8">
            <div className="container mx-auto px-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
                {[
                  { id: 'charts', href: '/charts', name: 'Charts', shortName: 'Charts' },
                  { id: 'hooks', href: '/hooks', name: 'React Hooks', shortName: 'Hooks' },
                  { id: 'icons', href: '/icons', name: 'SVG Icons', shortName: 'Icons' },
                  { id: 'templates', href: '/templates', name: 'Page Templates', shortName: 'Templates' },
                  { id: 'ui', href: '/ui', name: 'UI Components', shortName: 'UI' },
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
