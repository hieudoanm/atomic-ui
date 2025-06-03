import { Footer } from '@atomic/components/Footer';
import { Hero } from '@atomic/components/Hero';
import { Navbar } from '@atomic/components/Navbar';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

const NAVBAR_LINKS: { id: string; emoji: string; href: string; text: string }[] = [
  { id: 'components-charts', emoji: '📊', href: '/components/charts', text: 'charts' },
  { id: 'components-ui', emoji: '🎨', href: '/components/ui', text: 'ui' },
  { id: 'react-contexts', emoji: '🔗', href: '/react/contexts', text: 'contexts' },
  { id: 'react-hooks', emoji: '🪝', href: '/react/hooks', text: 'hooks' },
  { id: 'visual-emojis', emoji: '😄', href: '/visual/emojis', text: 'emojis' },
  { id: 'visual-icons', emoji: '🖼️', href: '/visual/icons', text: 'icons' },
  { id: 'templates', emoji: '📝', href: '/templates', text: 'templates' },
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
