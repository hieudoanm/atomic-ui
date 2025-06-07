import { NAVBAR_LINKS, PageTemplate } from '@atomic/templates/PageTemplate';
import { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <PageTemplate
      disabledSearch
      query={''}
      setState={() => {}}
      id="atomic"
      emoji="⚛️"
      title="atomic"
      subtitle="Free and Open Source Web Development Code"
      description="A modern, free collection of Tailwind UI, React Hooks, Contexts, Utilities, Icons, Charts, and Templates—built for fast, accessible, and maintainable interfaces."
      features={['Copy / Paste', 'Pure TailwindCSS', 'Pure React Code']}>
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
            {NAVBAR_LINKS.map(({ href = '', emoji = '', text = '', description = '' }) => {
              return (
                <div key={href} className="col-span-1 flex flex-col gap-y-2">
                  <Link href={href}>
                    <h2 className="text-center text-xl font-semibold">
                      {emoji} <span className="border-b border-dotted">{text}</span>
                    </h2>
                  </Link>
                  <p className="mx-auto w-full max-w-sm text-center text-sm text-neutral-600 dark:text-neutral-400">
                    {description}
                  </p>
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
