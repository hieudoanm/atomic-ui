import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
import { Navbar } from '@atomic/components/Navbar';
import { NAVBAR_LINKS } from '@atomic/constants';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

export const PageTemplate: FC<{
  query: string;
  setState: Dispatch<SetStateAction<{ query: string }>>;
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  children: ReactNode;
}> = ({
  query = '',
  setState = () => {},
  id = '',
  emoji = '',
  title = '',
  subtitle = '',
  description = '',
  features = [],
  children = <></>,
}) => {
  return (
    <div className="flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
      <Navbar
        links={NAVBAR_LINKS.filter(({ id: linkId = '' }) => id !== linkId)}
        title={`${emoji} ${title}`}
        query={query}
        setState={setState}
      />
      <div className="grow overflow-auto">
        <main className="divide-y divide-neutral-200 dark:divide-neutral-800">
          <Hero title={title} subtitle={subtitle} description={description} features={features} />
          {children}
        </main>
        <Footer title={title} />
      </div>
    </div>
  );
};
