import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
import { Navbar } from '@atomic/components/Navbar';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

const NAVBAR_LINKS: { id: string; emoji: string; href: string; text: string }[] = [
  { id: 'assets-emojis', emoji: '😄', href: '/assets/emojis', text: 'emojis' },
  { id: 'assets-icons', emoji: '🖼️', href: '/assets/icons', text: 'icons' },
  { id: 'react-contexts', emoji: '🔗', href: '/react/contexts', text: 'contexts' },
  { id: 'react-hooks', emoji: '🪝', href: '/react/hooks', text: 'hooks' },
  { id: 'ui-charts', emoji: '📊', href: '/ui/charts', text: 'charts' },
  { id: 'ui-kit', emoji: '🎨', href: '/ui/kit', text: 'kit' },
  { id: 'ui-blocks', emoji: '🧱', href: '/ui/block', text: 'block' },
  { id: 'ui-templates', emoji: '📝', href: '/ui/templates', text: 'templates' },
  { id: 'utils', emoji: '🧰', href: '/utils', text: 'utils' },
];

export const PageTemplate: FC<{
  disabledSearch?: boolean;
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
  disabledSearch = false,
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
        disabledSearch={disabledSearch}
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
