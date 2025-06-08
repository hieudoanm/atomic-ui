import { Footer } from '@atomic/components/common/Footer';
import { Hero } from '@atomic/components/common/Hero';
import { Group, Navbar } from '@atomic/components/common/Navbar';
import { RadialGradientBackground } from '@atomic/components/common/RadialGradientBackground';
import Head from 'next/head';
import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

export const NAVBAR_LINKS: {
  group: Group;
  id: string;
  emoji: string;
  href: string;
  text: string;
  full: string;
  description: string;
}[] = [
  {
    group: 'assets',
    id: 'assets-colors',
    emoji: '🎨',
    href: '/assets/colors',
    text: 'Colors',
    full: 'Colors',
    description:
      'A vast, beautiful color palette out of the box, carefully crafted by expert designers and suitable for a wide range of different design styles.',
  },
  {
    group: 'assets',
    id: 'assets-emojis',
    emoji: '😄',
    href: '/assets/emojis',
    text: 'Emojis',
    full: 'Emojis',
    description:
      'A large collection of emojis to enhance user interfaces, chats, and messaging applications with expressive icons.',
  },
  {
    group: 'assets',
    id: 'assets-fonts',
    emoji: '🔤',
    href: '/assets/fonts',
    text: 'Fonts',
    full: 'Fonts',
    description:
      'A curated collection of fonts for web and UI projects, supporting various styles, weights, and languages.',
  },
  {
    group: 'assets',
    id: 'assets-icons',
    emoji: '🖼️',
    href: '/assets/icons',
    text: 'Icons',
    full: 'SVG Icons',
    description:
      'High-quality scalable vector icons suitable for web and mobile interfaces, ensuring sharp visuals on any screen size.',
  },
  {
    group: 'react',
    id: 'react-contexts',
    emoji: '🔗',
    href: '/react/contexts',
    text: 'Contexts',
    full: 'React Contexts',
    description:
      'React contexts to efficiently manage and share state or data across deeply nested components without prop drilling.',
  },
  {
    group: 'react',
    id: 'react-hooks',
    emoji: '🪝',
    href: '/react/hooks',
    text: 'Hooks',
    full: 'React Hooks',
    description:
      'Reusable React hooks that provide custom functionality to functional components, improving code modularity and reuse.',
  },
  {
    group: 'react',
    id: 'react-virtual-table',
    emoji: '📋',
    href: '/react/virtual-table',
    text: 'Virtual Table',
    full: 'React Virtual Table',
    description:
      'Highly performant virtualized table component that renders only visible rows, ideal for large datasets.',
  },
  {
    group: 'ui',
    id: 'ui-charts',
    emoji: '📊',
    href: '/ui/charts',
    text: 'Charts',
    full: 'UI Charts',
    description:
      'Versatile chart components for visualizing data in various formats including bar, line, pie, and more.',
  },
  {
    group: 'ui',
    id: 'ui-kit',
    emoji: '🎨',
    href: '/ui/kit',
    text: 'UI',
    full: 'UIKit',
    description:
      'Comprehensive collection of reusable UI components and design elements for building consistent user interfaces.',
  },
  {
    group: 'ui',
    id: 'ui-blocks',
    emoji: '🧱',
    href: '/ui/block',
    text: 'Blocks',
    full: 'UI Blocks',
    description:
      'Modular UI blocks designed for rapid assembly of complex interfaces using pre-built building components.',
  },
  {
    group: 'ui',
    id: 'ui-templates',
    emoji: '📝',
    href: '/ui/templates',
    text: 'Templates',
    full: 'UI Templates',
    description: 'Pre-designed UI templates that speed up development by providing ready-made layouts and styles.',
  },
  {
    group: 'utils',
    id: 'utils',
    emoji: '🧰',
    href: '/utils',
    text: 'Utils',
    full: 'Utilities',
    description:
      'A collection of general utility functions and helpers to simplify common programming tasks across projects.',
  },
];

type PageTemplateProps = {
  disabledSearch?: boolean;
  query: string;
  setState: Dispatch<SetStateAction<{ query: string }>>;
  id: string;
  emoji: string;
  title: string;
  description: string;
  children: ReactNode;
};

export const PageTemplate: FC<PageTemplateProps> = ({
  disabledSearch = false,
  query = '',
  setState = () => {},
  id = '',
  emoji: defaultEmoji = '',
  title = '',
  description: defaultDescription = '',
  children = <></>,
}) => {
  const { emoji = defaultEmoji, description = defaultDescription } = NAVBAR_LINKS.find(
    ({ id: linkId = '' }) => id === linkId
  ) ?? {
    emoji: defaultEmoji,
    description: defaultDescription,
  };

  return (
    <>
      <Head>
        <title>
          {emoji} {title}
        </title>
        <meta name="description" content={description || defaultDescription} />
      </Head>
      <RadialGradientBackground />
      <div className="flex h-screen flex-col text-neutral-900 dark:text-neutral-100">
        <Navbar
          emoji={`${emoji || defaultEmoji}`}
          title={title}
          links={NAVBAR_LINKS.filter(({ id: linkId = '' }) => id !== linkId)}
          disabledSearch={disabledSearch}
          query={query}
          setState={setState}
        />
        <div className="scrollbar-none grow overflow-auto">
          <main className="divide-y divide-neutral-200 dark:divide-neutral-800">
            <Hero emoji={emoji || defaultEmoji} title={title} description={description || defaultDescription} />
            {children}
          </main>
          <Footer title={title} />
        </div>
      </div>
    </>
  );
};
