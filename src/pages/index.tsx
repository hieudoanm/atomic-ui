import { Preview } from '@atomic-ui/components/Preview';
import { useDarkMode } from '@atomic-ui/hooks/use-dark-mode';
import { NextPage } from 'next';
import Link from 'next/link';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { ChangeEvent, useState } from 'react';

const NODE_ENV = process.env.NODE_ENV ?? 'development';
const devPath = NODE_ENV === 'development' ? '../../../..' : '../../..';

const __dirname = join(dirname(__filename), devPath);

const HomePage: NextPage<{
  components: {
    id: string;
    group: string;
    emoji: string;
    name: string;
    code: string;
  }[];
}> = ({ components = [] }) => {
  const { darkMode = false, toggleDarkMode } = useDarkMode();
  const [{ query = '' }, setState] = useState<{ query: string }>({ query: '' });

  const filteredComponents = components.filter(({ id, name }) => {
    return (
      id.toLowerCase().includes(query.toLowerCase()) ||
      name.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div className="flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <nav className="border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
        <div className="container mx-auto flex flex-col gap-y-2 px-8 py-4">
          <div className="flex items-center justify-between gap-x-4">
            <h3 className="text-2xl font-bold">⚛️ atomic/ui</h3>
            <div className="flex items-center gap-x-4">
              <div className="hidden grow md:block">
                <input
                  type="text"
                  placeholder="Search Components"
                  value={query}
                  className="w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10"
                  onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                    setState((previous) => ({
                      ...previous,
                      query: event.target.value,
                    }));
                  }}
                />
              </div>
              <Link
                href="https://github.com/hieudoanm/atomic-ui"
                target="_blank"
                className="font-semibold">
                GitHub
              </Link>
              <label
                className="relative block h-8 w-14 rounded-full bg-neutral-200 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-purple-500 dark:bg-neutral-800 dark:has-checked:bg-purple-700"
                aria-label="Toggle dark mode">
                <input
                  type="checkbox"
                  checked={darkMode}
                  className="peer sr-only"
                  onChange={() => {
                    toggleDarkMode();
                  }}
                />
                <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6 dark:bg-neutral-900"></span>
              </label>
            </div>
          </div>
          <div className="block md:hidden">
            <input
              type="text"
              placeholder="Search Components"
              value={query}
              className="w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10"
              onChange={(event: ChangeEvent<HTMLInputElement>): void => {
                setState((previous) => ({
                  ...previous,
                  query: event.target.value,
                }));
              }}
            />
          </div>
        </div>
      </nav>
      <div className="grow overflow-auto">
        <main className="divide-y divide-neutral-200 dark:divide-neutral-800">
          <section className="py-8 md:py-16">
            <div className="container mx-auto flex flex-col items-center justify-center gap-y-4 px-8">
              <div className="flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8">
                <header className="flex flex-col gap-y-1">
                  <h1 className="text-4xl font-black whitespace-nowrap">
                    ⚛️ atomic/ui
                  </h1>
                  <h5 className="text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300">
                    Free and Open Source TailwindCSS v4 Components
                  </h5>
                </header>
                <p className="text-neutral-900 dark:text-neutral-100">
                  <code className="mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900">
                    atomic/ui
                  </code>
                  <span>
                    is a free collection of Tailwind CSS components designed
                    with atomic design principles in mind. It offers a flexible
                    set of building blocks to help you quickly build modern,
                    responsive UIs for your next project.
                  </span>
                </p>
                <div className="flex flex-col justify-center gap-x-6 text-sm font-black text-neutral-900 md:flex-row dark:text-neutral-100">
                  <p className="whitespace-nowrap">🔮 Copy / Paste</p>
                  <p className="whitespace-nowrap">🔮 Pure TailwindCSS</p>
                  <p className="whitespace-nowrap">
                    🔮 Atoms / Molecules / Organisms
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-4 md:py-8">
            <div className="container mx-auto px-8">
              <div className="flex flex-col gap-y-4 md:gap-y-8">
                <h2 className="text-2xl font-bold">
                  <span className="capitalize">Components</span> (
                  {filteredComponents.length})
                </h2>
                {filteredComponents.length > 0 && (
                  <>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                      {filteredComponents.map(
                        ({ id = '', emoji = '', group, name = '' }) => {
                          return (
                            <Link href={`#${id}`} key={id}>
                              <div className="col-span-1">
                                <div className="flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
                                  <p className="text-2xl">{emoji}</p>
                                  <div className="flex flex-col gap-y-0.25">
                                    <p className="text-xs capitalize">
                                      {group}
                                    </p>
                                    <p className="font-semibold capitalize">
                                      {name}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          );
                        }
                      )}
                    </div>
                    <div className="flex flex-col gap-y-8">
                      {filteredComponents.map(
                        ({
                          id = '',
                          emoji = '',
                          group = '',
                          name = '',
                          code = '',
                        }) => {
                          return (
                            <div key={id} className="flex flex-col gap-y-4">
                              <Preview
                                id={id}
                                emoji={emoji}
                                group={group}
                                name={name}
                                code={code}
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
          <section className="py-4 md:py-8">
            <div className="container mx-auto flex flex-col gap-y-8 px-8">
              <h2 className="text-2xl font-bold">
                <span className="capitalize">Classes</span>
              </h2>
              <div className="overflow-x-auto rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
                <table className="min-w-full divide-y-2 divide-neutral-200 dark:divide-neutral-800">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 whitespace-nowrap">#</th>
                      <th align="left" className="px-3 py-2 whitespace-nowrap">
                        Class
                      </th>
                      <th align="left" className="px-3 py-2 whitespace-nowrap">
                        Light
                      </th>
                      <th align="left" className="px-3 py-2 whitespace-nowrap">
                        Dark
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {[
                      {
                        id: 'bg-primary',
                        name: 'bg-primary',
                        lightClass: 'bg-white',
                        darkClass: 'dark:bg-neutral-900',
                      },
                      {
                        id: 'text-primary',
                        name: 'text-primary',
                        lightClass: 'text-neutral-900',
                        darkClass: 'dark:text-neutral-100',
                      },
                      {
                        id: 'text-secondary',
                        name: 'text-secondary',
                        lightClass: 'text-neutral-700',
                        darkClass: 'dark:text-neutral-300',
                      },
                      {
                        id: 'border',
                        name: 'border',
                        lightClass: 'border-neutral-200',
                        darkClass: 'dark:border-neutral-800',
                      },
                      {
                        id: 'divide',
                        name: 'divide',
                        lightClass: 'divide-neutral-200',
                        darkClass: 'dark:divide-neutral-800',
                      },
                      {
                        id: 'shadow',
                        name: 'shadow',
                        lightClass: 'shadow',
                        darkClass: 'dark:shadow-neutral-100/10',
                      },
                    ].map(
                      (
                        { id = '', name = '', lightClass = '', darkClass = '' },
                        index: number
                      ) => {
                        return (
                          <tr key={id}>
                            <td
                              align="center"
                              className="px-3 py-2 whitespace-nowrap">
                              {index + 1}
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap">
                              {name}
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap">
                              <code className="mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900">
                                {lightClass}
                              </code>
                            </td>
                            <td className="px-3 py-2 whitespace-nowrap">
                              <code className="mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900">
                                {darkClass}
                              </code>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
        <footer className="border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
          <div className="container mx-auto px-8 py-4">
            &copy; {new Date().getFullYear()} ⚛️ <strong>atomic/ui</strong>
          </div>
        </footer>
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  const components = [
    { path: 'button/button', emoji: '🔘', name: 'Button' },
    { path: 'button/button-group', emoji: '👆', name: 'Button Group' },
    { path: 'data/list', emoji: '📋', name: 'List' },
    { path: 'data/stats', emoji: '📊', name: 'Stats' },
    { path: 'data/table', emoji: '📈', name: 'Table' },
    { path: 'data/tooltip', emoji: '💬', name: 'Tooltip' },
    { path: 'feedback/alert', emoji: '🚨', name: 'Alert' },
    { path: 'feedback/badge', emoji: '🏷️', name: 'Badge' },
    { path: 'feedback/loading', emoji: '⏳', name: 'Loading' },
    { path: 'feedback/progress', emoji: '🏁', name: 'Progress' },
    { path: 'feedback/skeleton', emoji: '🩻', name: 'Skeleton' },
    { path: 'feedback/toast', emoji: '🥑', name: 'Toast' },
    { path: 'form/checkbox', emoji: '☑️', name: 'Checkbox' },
    { path: 'form/input', emoji: '⌨️', name: 'Input' },
    { path: 'form/radio', emoji: '🔘', name: 'Radio' },
    { path: 'form/select', emoji: '📑', name: 'Select' },
    { path: 'form/textarea', emoji: '📝', name: 'Textarea' },
    { path: 'form/toggle', emoji: '🔄', name: 'Toggle' },
    { path: 'layout/accordian', emoji: '📑', name: 'Accordian' },
    { path: 'layout/card', emoji: '💳', name: 'Card' },
    { path: 'layout/divider', emoji: '➖', name: 'Divider' },
    { path: 'layout/modal', emoji: '📦', name: 'Modal' },
    { path: 'media/avatar', emoji: '🖼️', name: 'Avatar' },
    { path: 'media/file', emoji: '📂', name: 'File' },
    { path: 'navigation/breadcrumbs', emoji: '🍞', name: 'Breadcrumbs' },
    { path: 'navigation/menu', emoji: '📁', name: 'Menu' },
    { path: 'navigation/pagination', emoji: '📄', name: 'Pagination' },
    { path: 'navigation/steps', emoji: '🪜', name: 'Steps' },
    { path: 'typography/code', emoji: '🧑‍💻', name: 'Code' },
    { path: 'typography/kbd', emoji: '⌨️', name: 'KBD' },
    { path: 'typography/heading', emoji: '🔠', name: 'Heading' },
    { path: 'typography/paragraph', emoji: '🔤', name: 'Paragraph' },
  ].map(({ path = '', emoji = '', name = '' }) => {
    const group = path.split('/').at(0);
    const id = path.replaceAll('/', '-');
    const componentPath = `${__dirname}/src/html/${path}.html`;
    const code = readFileSync(componentPath, 'utf-8');
    return { id, group, name, emoji, code };
  });

  return { props: { components } };
};

export default HomePage;
