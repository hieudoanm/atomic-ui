import { CodePreview } from '@atomic/components/CodePreview';
import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
import { Navbar } from '@atomic/components/Navbar';
import { NAVBAR_LINKS } from '@atomic/constants';
import { NextPage } from 'next';
import Link from 'next/link';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { useState } from 'react';

const DEV_PATH = '../../../..';
const __dirname = join(dirname(__filename), DEV_PATH);

type Component = {
  id: string;
  group: string;
  emoji: string;
  name: string;
  code: string;
};

const UIPage: NextPage<{ components: Component[] }> = ({ components = [] }) => {
  const [{ query = '' }, setState] = useState<{ query: string }>({ query: '' });

  const filteredComponents = components.filter(({ id, name }) => {
    return id.toLowerCase().includes(query.toLowerCase()) || name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Navbar
        links={NAVBAR_LINKS.filter(({ id }) => id !== 'ui')}
        title="atomic/ui"
        query={query}
        setState={setState}
      />
      <div className="grow overflow-auto">
        <main className="divide-y divide-neutral-200 dark:divide-neutral-800">
          <Hero
            title="atomic/ui"
            subtitle="Free and Open Source TailwindCSS v4 Components"
            description="is a free collection of Tailwind CSS components designed with atomic design principles in mind. It offers a flexible set of customizable components with built-in dark mode support to help you quickly build modern, responsive UIs."
            features={['Copy / Paste', 'Pure TailwindCSS', 'Atoms / Molecules / Organisms']}
          />
          <section className="py-4 md:py-8">
            <div className="container mx-auto px-8">
              <div className="flex flex-col gap-y-4 md:gap-y-8">
                <h2 className="text-2xl font-bold">
                  <span className="capitalize">Components</span> ({filteredComponents.length})
                </h2>
                {filteredComponents.length > 0 && (
                  <>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                      {filteredComponents.map(({ id = '', emoji = '', group, name = '' }) => {
                        return (
                          <Link href={`#${id}`} key={id}>
                            <div className="col-span-1">
                              <div className="flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
                                <p className="text-2xl">{emoji}</p>
                                <div className="flex flex-col gap-y-0.25">
                                  <p className="text-xs capitalize">{group}</p>
                                  <p className="font-semibold capitalize">{name}</p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div className="flex flex-col gap-y-4 md:gap-y-8">
                      {filteredComponents.map(({ id = '', emoji = '', group = '', name = '', code = '' }) => {
                        return (
                          <div key={id} className="flex flex-col gap-y-4">
                            <CodePreview id={id} emoji={emoji} group={group} name={name} code={code} />
                          </div>
                        );
                      })}
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
                    ].map(({ id = '', name = '', lightClass = '', darkClass = '' }, index: number) => {
                      return (
                        <tr key={id}>
                          <td align="center" className="px-3 py-2 whitespace-nowrap">
                            {index + 1}
                          </td>
                          <td className="px-3 py-2 whitespace-nowrap">{name}</td>
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
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
        <Footer title="atomic/ui" />
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  const components = [
    { path: 'auth/password-forget', emoji: '🧠', name: 'Forget Password' },
    { path: 'auth/password-reset', emoji: '🔁', name: 'Reset Password' },
    { path: 'auth/sign-in', emoji: '🔓', name: 'Sign In' },
    { path: 'auth/sign-up', emoji: '📝', name: 'Sign Up' },
    { path: 'button/button', emoji: '🔘', name: 'Button' },
    { path: 'button/button-icon', emoji: '🖱️', name: 'Button Icon' },
    { path: 'button/button-dropdown', emoji: '🔽', name: 'Button Dropdown' },
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
    { path: 'feedback/toast', emoji: '🥑', name: 'Toast' }, // humorous choice, you can change to 🔔 or 🍞
    { path: 'form/calendar', emoji: '📅', name: 'Calendar' },
    { path: 'form/checkbox', emoji: '☑️', name: 'Checkbox' },
    { path: 'form/input', emoji: '⌨️', name: 'Input' },
    { path: 'form/radio', emoji: '🔘', name: 'Radio' },
    { path: 'form/range', emoji: '🎚️', name: 'Range' },
    { path: 'form/select', emoji: '📑', name: 'Select' },
    { path: 'form/textarea', emoji: '📝', name: 'Textarea' },
    { path: 'form/toggle', emoji: '🔄', name: 'Toggle' },
    { path: 'layout/accordian', emoji: '📑', name: 'Accordian' },
    { path: 'layout/card', emoji: '💳', name: 'Card' },
    { path: 'layout/collapse', emoji: '📂', name: 'Collapse' },
    { path: 'layout/divider', emoji: '➖', name: 'Divider' },
    { path: 'layout/drawer', emoji: '🗄️', name: 'Drawer' },
    { path: 'layout/modal', emoji: '📦', name: 'Modal' },
    { path: 'marketing/cta', emoji: '🚀', name: 'CTA' },
    { path: 'marketing/features', emoji: '✨', name: 'Features' },
    { path: 'marketing/footer', emoji: '🦶', name: 'Footer' },
    { path: 'marketing/hero', emoji: '🦸', name: 'Hero' },
    { path: 'marketing/pricing', emoji: '💰', name: 'Pricing' },
    { path: 'marketing/testimonials', emoji: '💬', name: 'Testimonials' },
    { path: 'media/avatar', emoji: '🖼️', name: 'Avatar' },
    { path: 'media/carousel', emoji: '🎠', name: 'Carousel' },
    { path: 'media/diff', emoji: '🧬', name: 'Diff' },
    { path: 'media/file', emoji: '📂', name: 'File' },
    { path: 'mockup/browser', emoji: '🌐', name: 'Browser' },
    { path: 'mockup/phone', emoji: '📱', name: 'Phone' },
    { path: 'mockup/terminal', emoji: '🖥️', name: 'Terminal' },
    { path: 'mockup/window', emoji: '🪟', name: 'Window' },
    { path: 'navigation/breadcrumbs', emoji: '🍞', name: 'Breadcrumbs' },
    { path: 'navigation/menu', emoji: '📁', name: 'Menu' },
    { path: 'navigation/navbar', emoji: '🧭', name: 'Navbar' },
    { path: 'navigation/pagination', emoji: '📄', name: 'Pagination' },
    { path: 'navigation/steps', emoji: '🪜', name: 'Steps' },
    { path: 'navigation/tabs', emoji: '📑', name: 'Tabs' },
    { path: 'typography/code', emoji: '🧑‍💻', name: 'Code' },
    { path: 'typography/kbd', emoji: '⌨️', name: 'KBD' },
    { path: 'typography/heading', emoji: '🔠', name: 'Heading' },
    { path: 'typography/paragraph', emoji: '🔤', name: 'Paragraph' },
  ].map(({ path = '', emoji = '', name = '' }) => {
    const group = path.split('/').at(0);
    const id = path.replaceAll('/', '-');
    const componentPath = `${__dirname}/src/html/components/${path}.html`;
    const code = readFileSync(componentPath, 'utf-8');
    return { id, group, name, emoji, code };
  });

  return { props: { components } };
};

export default UIPage;
