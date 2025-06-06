import { ReactPreview } from '@atomic/components/preview/React';
import { VirtualTablePreview } from '@atomic/components/preview/VirtualTable';
import { PageTemplate } from '@atomic/templates/PageTemplate';
import { NextPage } from 'next';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const DEV_PATH = '../../../..';
const __dirname = join(dirname(__filename), DEV_PATH);

const VirtualTablePage: NextPage<{ code: string }> = ({ code = '' }) => {
  return (
    <PageTemplate
      disabledSearch
      query={'query'}
      setState={() => {}}
      id="react-virtual-table"
      emoji="📋"
      title="atomic/virtual-table"
      subtitle="Free and Open Source React Virtual Table"
      description="is a high-performance virtualized table component for React that supports large datasets by rendering only visible rows. Includes keyboard navigation for row selection (arrow keys) and mouse click to select rows with automatic scrolling to keep the selected row in view."
      features={['Virtualized large datasets', 'Keyboard row navigation', 'Mouse click select']}>
      <section className="py-4 md:py-8">
        <div className="container mx-auto px-8">
          <div className="flex flex-col gap-y-4 md:gap-y-8">
            <ReactPreview
              id="virtual-table"
              emoji="📋"
              group="React"
              name="Virtual Table"
              code={code}
              chart={<VirtualTablePreview />}
            />
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export const getStaticProps = () => {
  const virtualTableFilePath = `${__dirname}/src/components/common/VirtualTable.tsx`;
  const code = readFileSync(virtualTableFilePath, 'utf-8');
  return { props: { code } };
};

export default VirtualTablePage;
