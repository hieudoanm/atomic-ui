import { PageTemplate } from '@atomic/templates/PageTemplate';
import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  const buttons: { id: string; href: string; name: string; shortName: string }[] = [
    { id: 'assets-emojis', href: '/assets/emojis', name: 'Emojis', shortName: 'Emojis' },
    { id: 'assets-icons', href: '/assets/icons', name: 'Icons', shortName: 'Icons' },
    {
      id: 'react-contexts',
      href: '/react/contexts',
      name: 'React Contexts',
      shortName: 'React Contexts',
    },
    { id: 'react-hooks', href: '/react/hooks', name: 'React Hooks', shortName: 'React Hooks' },
    {
      id: 'ui-charts',
      href: '/ui/charts',
      name: 'UI Charts',
      shortName: 'Charts',
    },
    { id: 'ui-kit', href: '/ui/ui', name: 'UI Kit', shortName: 'UIKit' },
    { id: 'ui-blocks', href: '/ui/block', name: 'UI Block', shortName: 'UI Block' },
    { id: 'ui-templates', href: '/ui/templates', name: 'UI Templates', shortName: 'Templates' },

    { id: 'utils', href: '/utils', name: 'Utilities', shortName: 'Utils' },
  ];

  return (
    <PageTemplate
      disabledSearch
      query={''}
      setState={() => {}}
      id=""
      emoji="⚛️"
      title="atomic"
      subtitle="Free and Open Source Web Development Code"
      description="is a modern, free collection of Tailwind UI, React Hooks, Contexts, Utilities, Icons, Charts, and Templates—built for fast, accessible, and maintainable interfaces."
      features={['Copy / Paste', 'Pure TailwindCSS', 'Pure React Code']}>
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
            {buttons.map(({ href = '', name = '', shortName = '' }) => {
              return (
                <div key={href} className="col-span-1">
                  <Link href={href}>
                    <button className="w-full cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600">
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
    </PageTemplate>
  );
};

export default HomePage;
