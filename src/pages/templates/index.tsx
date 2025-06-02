import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
import { HTMLPreview } from '@atomic/components/HTML';
import { Navbar } from '@atomic/components/Navbar';
import { NAVBAR_LINKS } from '@atomic/constants';
import { NextPage } from 'next';
import Link from 'next/link';
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { useState } from 'react';

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const devPath = NODE_ENV === 'development' ? '../../../..' : '../../..';
const __dirname = join(dirname(__filename), devPath);

type TemplateType = { id: string; name: string; code: string };

const TemplatesPage: NextPage<{ templates: TemplateType[] }> = ({ templates = [] }) => {
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
          <section className="py-4 md:py-8">
            <div className="container mx-auto px-8">
              <div className="flex flex-col gap-y-4 md:gap-y-8">
                {templates.map(({ id = '', name = '', code }) => {
                  return (
                    <Link key={id} href={`/templates/${id}`}>
                      <div className="flex flex-col gap-y-4 md:gap-y-8">
                        <h2 className="text-2xl font-bold capitalize">📝 {name}</h2>
                        <div className="h-128 overflow-hidden rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10">
                          <HTMLPreview code={code} />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
        <Footer title="atomic/templates" />
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  const files = readdirSync(join(__dirname, 'src/html/templates'));
  const templates = files.map((file: string) => {
    const id: string = file?.replaceAll('.html', '');
    const filePath: string = join(__dirname, `src/html/templates/${file}`);
    const code: string = readFileSync(filePath, 'utf-8');
    return { id, name: id, code };
  });
  return { props: { templates } };
};

export default TemplatesPage;
