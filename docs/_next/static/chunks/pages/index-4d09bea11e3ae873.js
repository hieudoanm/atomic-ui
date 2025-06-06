(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    3396: (e, s, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return a(6310);
        },
      ]);
    },
    6310: (e, s, a) => {
      'use strict';
      a.r(s), a.d(s, { default: () => l });
      var t = a(5640),
        i = a(5695),
        r = a(6826),
        o = a.n(r);
      let l = () =>
        (0, t.jsx)(i.U, {
          disabledSearch: !0,
          query: '',
          setState: () => {},
          id: 'atomic',
          emoji: '⚛️',
          title: 'atomic',
          subtitle: 'Free and Open Source Web Development Code',
          description:
            'is a modern, free collection of Tailwind UI, React Hooks, Contexts, Utilities, Icons, Charts, and Templates—built for fast, accessible, and maintainable interfaces.',
          features: ['Copy / Paste', 'Pure TailwindCSS', 'Pure React Code'],
          children: (0, t.jsx)('section', {
            className: 'py-4 md:py-8',
            children: (0, t.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, t.jsx)('div', {
                className: 'grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-5',
                children: [
                  { id: 'assets-emojis', href: '/assets/emojis', name: 'Emojis', shortName: 'Emojis' },
                  { id: 'assets-icons', href: '/assets/icons', name: 'Icons', shortName: 'Icons' },
                  {
                    id: 'react-contexts',
                    href: '/react/contexts',
                    name: 'React Contexts',
                    shortName: 'React Contexts',
                  },
                  { id: 'react-hooks', href: '/react/hooks', name: 'React Hooks', shortName: 'React Hooks' },
                  {
                    id: 'react-virtual-table',
                    href: '/react/hooks',
                    name: 'React Virtual Table',
                    shortName: 'React Virtual Table',
                  },
                  { id: 'ui-charts', href: '/ui/charts', name: 'UI Charts', shortName: 'Charts' },
                  { id: 'ui-kit', href: '/ui/ui', name: 'UI Kit', shortName: 'UIKit' },
                  { id: 'ui-blocks', href: '/ui/block', name: 'UI Block', shortName: 'UI Block' },
                  { id: 'ui-templates', href: '/ui/templates', name: 'UI Templates', shortName: 'Templates' },
                  { id: 'utils', href: '/utils', name: 'Utilities', shortName: 'Utils' },
                ].map((e) => {
                  let { href: s = '', name: a = '', shortName: i = '' } = e;
                  return (0, t.jsx)(
                    'div',
                    {
                      className: 'col-span-1',
                      children: (0, t.jsx)(o(), {
                        href: s,
                        children: (0, t.jsxs)('button', {
                          className:
                            'w-full cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          children: [
                            (0, t.jsx)('span', { className: 'hidden md:inline', children: a }),
                            (0, t.jsx)('span', { className: 'inline md:hidden', children: i }),
                          ],
                        }),
                      }),
                    },
                    s
                  );
                }),
              }),
            }),
          }),
        });
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [6826, 5695, 636, 6593, 8792], () => s(3396)), (_N_E = e.O());
  },
]);
