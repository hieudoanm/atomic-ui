import { useDarkMode } from '@atomic-ui/hooks/use-dark-mode';
import Head from 'next/head';
import Link from 'next/link';
import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

type NavbarLink = { id: string; href: string; text: string };

export const Navbar: FC<{
  title: string;
  links: NavbarLink[];
  disabledSearch?: boolean;
  query: string;
  setState: Dispatch<SetStateAction<{ query: string }>>;
}> = ({ title = '', links = [], query = '', setState, disabledSearch = false }) => {
  const { darkMode = false, toggleDarkMode } = useDarkMode();

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10">
        <div className="container mx-auto flex flex-col gap-y-2 px-8 py-4">
          <div className="flex items-center justify-between gap-x-4">
            <div className="flex items-center gap-x-4">
              <Link href="/">
                <h3 className="text-2xl font-bold">⚛️ {title}</h3>
              </Link>
              {links.map(({ id = '', href = '', text = '' }) => {
                return (
                  <Link key={id} href={href} className="text-2xl">
                    {text}
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-x-4">
              {disabledSearch && (
                <div className="hidden grow md:block">
                  <input
                    type="text"
                    placeholder="Search"
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
              )}
              <Link href="https://github.com/hieudoanm/atomic-ui" target="_blank" className="font-semibold">
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
          {disabledSearch && (
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
          )}
        </div>
      </nav>
    </>
  );
};
