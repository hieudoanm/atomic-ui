import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
import { Navbar } from '@atomic/components/Navbar';
import { Preview } from '@atomic/components/Preview';
import { NAVBAR_LINKS } from '@atomic/constants';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const DEV_PATH = '../../../..';
const __dirname = join(dirname(__filename), DEV_PATH);

type TemplateType = { id: string; name: string; code: string };

const TemplatePage: NextPage<{ template: TemplateType }> = ({ template = { id: '', name: '', code: '' } }) => {
  const { id = '', name = '', code = '' } = template;

  return (
    <div className="flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Navbar
        links={NAVBAR_LINKS.filter(({ id }) => id !== 'templates')}
        title="atomic/templates"
        disabledSearch
        query={''}
        setState={() => {}}
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
        <section className="py-4 md:py-8">
          <div className="container mx-auto px-8">
            <div className="flex flex-col gap-y-4 md:gap-y-8">
              <Preview id={id} emoji={'📝'} group="Template" name={name} code={code} />
            </div>
          </div>
        </section>
        <Footer title="atomic/templates" />
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'landing' } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ template: TemplateType }, { id: string }> = (context) => {
  const id = context?.params?.id ?? '';
  const filePath: string = join(__dirname, `src/html/templates/${id}.html`);
  const code: string = readFileSync(filePath, 'utf-8');
  const template = { id, name: id, code };

  return { props: { template } };
};

export default TemplatePage;
