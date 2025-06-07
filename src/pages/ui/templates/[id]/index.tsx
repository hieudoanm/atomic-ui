import { Code } from '@atomic/components/preview/Code';
import { FullScreen } from '@atomic/components/preview/FullScreen';
import { useToggle } from '@atomic/hooks/boolean/use-toggle';
import { PageTemplate } from '@atomic/templates/PageTemplate';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const DEV_PATH = process.env.NODE_ENV === 'development' ? '../../../..' : '../../../../..';
const __dirname = join(dirname(__filename), DEV_PATH);

type TemplateType = { id: string; name: string; code: string };

const TemplatePage: NextPage<{ template: TemplateType }> = ({ template = { id: '', name: '', code: '' } }) => {
  const { value: fullScreen, toggle } = useToggle(false);

  const { id = '', name = '', code = '' } = template;

  return (
    <PageTemplate
      disabledSearch
      query={''}
      setState={() => {}}
      id="templates"
      emoji="📝"
      title="atomic/templates"
      subtitle="Free and Open Source Web/App Templates"
      description="are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages."
      features={['Copy / Paste', 'Pure TailwindCSS', 'UI Components']}>
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-8">
          <div className="flex flex-col gap-y-4 md:gap-y-8">
            <button
              type="button"
              className="cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600"
              onClick={() => toggle()}>
              Full Screen
            </button>
            <Code id={id} emoji="📝" group="Template" name={name} code={code} />
          </div>
        </div>
      </section>
      {fullScreen && <FullScreen name={name} code={code} onClose={() => toggle()} />}
    </PageTemplate>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: 'blog' } },
      { params: { id: 'blogs' } },
      { params: { id: 'chat' } },
      { params: { id: 'dashboard' } },
      { params: { id: 'error' } },
      { params: { id: 'landing' } },
    ],
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
