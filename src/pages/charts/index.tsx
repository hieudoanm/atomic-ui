import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
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

type ChartType = { id: string; name: string; code: string };

const emojis: Record<string, string> = {
  line: '📈',
  bar: '📊',
  pie: '🥧',
  area: '🌊',
  scatter: '🎯',
  radar: '🕸️',
  bubble: '🫧',
  doughnut: '🍩',
  histogram: '🏗️',
  heatmap: '🔥',
  treemap: '🌳',
  candlestick: '🕯️',
  waterfall: '💧',
  gauge: '⏱️',
  funnel: '⏬',
};

const ChartsPage: NextPage<{ charts: ChartType[] }> = ({ charts = [] }) => {
  const [{ query = '' }, setState] = useState<{ query: string }>({ query: '' });

  const filteredCharts = charts.filter(({ id, name }) => {
    return id.toLowerCase().includes(query.toLowerCase()) || name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Navbar
        links={NAVBAR_LINKS.filter(({ id }) => id !== 'charts')}
        title="atomic/charts"
        query={query}
        setState={setState}
      />
      <div className="grow overflow-auto">
        <main className="divide-y divide-neutral-200 dark:divide-neutral-800">
          <Hero
            title="atomic/charts"
            subtitle="Free and Open Source Charts"
            description="is a curated collection of responsive web and app charts designed specifically for SaaS products and marketing sites. Built for speed, scalability, and conversion, each template helps you launch polished, professional interfaces with ease — so you can focus on growing your business."
            features={['Copy / Paste', 'Pure Canvas', 'Pure JavaScript']}
          />
          <section className="py-4 md:py-8">
            <div className="container mx-auto px-8">
              <div className="flex flex-col gap-y-4 md:gap-y-8">
                <h2 className="text-2xl font-bold">
                  <span className="capitalize">Charts</span> ({filteredCharts.length})
                </h2>
                {filteredCharts.length > 0 && (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    {filteredCharts.map(({ id = '', name = '' }) => {
                      return (
                        <Link href={`#${id}`} key={id}>
                          <div className="col-span-1">
                            <div className="flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
                              <p className="font-semibold capitalize">
                                {emojis[id] ?? ''} {name}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
        <Footer title="atomic/charts" />
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  const files = readdirSync(join(__dirname, 'src/html/charts'));
  const charts = files.map((file: string) => {
    const id: string = file?.replaceAll('.html', '');
    const filePath: string = join(__dirname, `src/html/charts/${file}`);
    const code: string = readFileSync(filePath, 'utf-8');
    return { id, name: id, code };
  });
  return { props: { charts } };
};

export default ChartsPage;
