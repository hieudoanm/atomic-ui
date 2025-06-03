import { CodePreview } from '@atomic/components/CodePreview';
import { PageTemplate } from '@atomic/templates/PageTemplate';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const DEV_PATH = '../../../..';
const __dirname = join(dirname(__filename), DEV_PATH);

type TemplateType = { id: string; name: string; code: string };

const TemplatePage: NextPage<{ template: TemplateType }> = ({ template = { id: '', name: '', code: '' } }) => {
  const { id = '', name = '', code = '' } = template;

  return (
    <PageTemplate
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
            <CodePreview id={id} emoji={'📝'} group="Template" name={name} code={code} />
          </div>
        </div>
      </section>
    </PageTemplate>
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
