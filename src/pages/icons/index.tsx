import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
import { Navbar } from '@atomic/components/Navbar';
import { NAVBAR_LINKS } from '@atomic/constants';
import { NextPage } from 'next';
import { useState } from 'react';

const IconsPage: NextPage = () => {
  const [{ query = '' }, setState] = useState<{ query: string }>({ query: '' });

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
          <Hero title="atomic/icons" subtitle="" description="" features={[]} />
        </main>
        <Footer title="atomic/icons" />
      </div>
    </div>
  );
};

export default IconsPage;
