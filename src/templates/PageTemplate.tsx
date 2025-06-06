import { Footer } from '@atomic/components/common/Footer';
import { Hero } from '@atomic/components/common/Hero';
import { Group, Navbar } from '@atomic/components/common/Navbar';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

const NAVBAR_LINKS: { group: Group; id: string; emoji: string; href: string; text: string }[] = [
  { group: 'assets', id: 'assets-emojis', emoji: '😄', href: '/assets/emojis', text: 'Emojis' },
  { group: 'assets', id: 'assets-icons', emoji: '🖼️', href: '/assets/icons', text: 'SVG Icons' },
  { group: 'react', id: 'react-contexts', emoji: '🔗', href: '/react/contexts', text: 'React Contexts' },
  { group: 'react', id: 'react-hooks', emoji: '🪝', href: '/react/hooks', text: 'React Hooks' },
  { group: 'react', id: 'react-virtual-table', emoji: '📋', href: '/react/virtual-table', text: 'React Virtual Table' },
  { group: 'ui', id: 'ui-charts', emoji: '📊', href: '/ui/charts', text: 'Charts' },
  { group: 'ui', id: 'ui-kit', emoji: '🎨', href: '/ui/kit', text: 'UIKit' },
  { group: 'ui', id: 'ui-blocks', emoji: '🧱', href: '/ui/block', text: 'UIBlock' },
  { group: 'ui', id: 'ui-templates', emoji: '📝', href: '/ui/templates', text: 'Templates' },
  { group: 'utils', id: 'utils', emoji: '🧰', href: '/utils', text: 'Utils' },
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
