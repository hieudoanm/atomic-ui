import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
import { Navbar } from '@atomic/components/Navbar';
import { NAVBAR_LINKS } from '@atomic/constants';
import { NextPage } from 'next';
import { useState } from 'react';

const TemplatesPage: NextPage = () => {
  const [{ query = '' }, setState] = useState<{ query: string }>({ query: '' });

  return (
    <div className="flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Navbar
        links={NAVBAR_LINKS.filter(({ id }) => id !== 'templates')}
        title="atomic/templates"
        query={query}
        setState={setState}
      />
      <div className="grow overflow-auto">
        <main className="divide-y divide-neutral-200 dark:divide-neutral-800">
          <Hero
            title="atomic/templates"
            subtitle="Free and Open Source Web/App Templates"
            description="is a curated collection of responsive web and app templates designed specifically for SaaS products and marketing sites. Built for speed, scalability, and conversion, each template helps you launch polished, professional interfaces with ease — so you can focus on growing your business."
            features={['Copy / Paste', 'Pure TailwindCSS', 'UI Components']}
          />
        </main>
        <Footer title="atomic/templates" />
      </div>
    </div>
  );
};

export default TemplatesPage;
