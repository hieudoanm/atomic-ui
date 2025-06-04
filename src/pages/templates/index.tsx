import { HTMLPreview } from '@atomic/components/HTML';
import { PageTemplate } from '@atomic/templates/PageTemplate';
import { NextPage } from 'next';
import Link from 'next/link';
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { useState } from 'react';

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const devPath = NODE_ENV === 'development' ? '../../../..' : '../../..';
const __dirname = join(dirname(__filename), devPath);

type TemplateType = { id: string; name: string; code: string };

const emojis: Record<string, string> = {
  chat: '💬',
  dashboard: '📊',
  error: '❌',
  landing: '🏠',
};

const TemplatesPage: NextPage<{ templates: TemplateType[] }> = ({ templates = [] }) => {
  const [{ query = '' }, setState] = useState<{ query: string }>({ query: '' });

  const filteredTemplates = templates.filter(({ id, name }) => {
    return id.toLowerCase().includes(query.toLowerCase()) || name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <PageTemplate
      query={query}
      setState={setState}
      id="templates"
      emoji="📝"
      title="atomic/templates"
      subtitle="Free and Open Source Web/App Templates"
      description="are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages."
      features={['Copy / Paste', 'Pure TailwindCSS', 'UI Components']}>
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-8">
          <div className="flex flex-col gap-y-4 md:gap-y-8">
            <h2 className="text-2xl font-bold">
              <span className="capitalize">Templates</span> ({filteredTemplates.length})
            </h2>
            {filteredTemplates.length > 0 && (
              <>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                  {filteredTemplates.map(({ id = '', name = '' }) => {
                    return (
                      <Link href={`#${id}`} key={id}>
                        <div className="col-span-1">
                          <div className="flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
                            <p className="text-2xl">{emojis[id] ?? ''}</p>
                            <div className="flex flex-col gap-y-0.25">
                              <p className="text-xs capitalize">Templates</p>
                              <p className="font-semibold capitalize">{name}</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-y-4 md:gap-y-8">
                  {filteredTemplates.map(({ id = '', name = '', code }) => {
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
              </>
            )}
          </div>
        </div>
      </section>
    </PageTemplate>
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
