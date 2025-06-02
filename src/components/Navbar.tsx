import { useDarkMode } from '@atomic/hooks/use-dark-mode';
import Head from 'next/head';
import Link from 'next/link';
import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

type NavbarLink = { id: string; emoji: string; href: string; text: string };

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
            <div className="inline-block md:hidden">
              <div className="group relative inline-block text-left">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4" fill="currentColor">
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                </button>
                <div className="invisible absolute left-0 z-50 mt-2 w-40 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100">
                  {links.map(({ id = '', href = '', emoji = '', text = '' }) => {
                    return (
                      <Link
                        key={id}
                        href={href}
                        className="block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                        {emoji} {text}
                      </Link>
                    );
                  })}
                  <Link
                    href="https://github.com/hieudoanm/atomic"
                    target="_blank"
                    className="block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                    🐙 github
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <Link href="/" className="text-lg font-bold md:text-xl">
                ⚛️ {title}
              </Link>
            </div>
            <div className="flex items-center gap-x-2 md:gap-x-4">
              <div className="hidden items-center gap-x-2 md:flex md:gap-x-4">
                {links.map(({ id = '', href = '', emoji = '', text = '' }) => {
                  return (
                    <Link key={id} href={href} className="text-sm md:text-base">
                      {emoji} {text}
                    </Link>
                  );
                })}
                <Link href="https://github.com/hieudoanm/atomic" target="_blank" className="text-sm md:text-base">
                  🐙 github
                </Link>
              </div>
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
          {!disabledSearch && (
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
          )}
        </div>
      </nav>
    </>
  );
};
