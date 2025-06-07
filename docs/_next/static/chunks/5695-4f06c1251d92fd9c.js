'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5695],
  {
    5695: (e, t, r) => {
      r.d(t, { l: () => x, U: () => g });
      var a = r(5640);
      let s = (e) => {
          let { title: t = '' } = e;
          return (0, a.jsx)('footer', {
            className: 'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
            children: (0, a.jsxs)('div', {
              className: 'container mx-auto px-8 py-4',
              children: ['\xa9 ', new Date().getFullYear(), ' ⚛️ ', (0, a.jsx)('strong', { children: t })],
            }),
          });
        },
        l = (e) => {
          let { title: t = '', subtitle: r = '', description: s = '', features: l = [] } = e;
          return (0, a.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, a.jsx)('div', {
              className: 'container mx-auto flex flex-col items-center justify-center gap-y-4 px-8',
              children: (0, a.jsxs)('div', {
                className: 'flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8',
                children: [
                  (0, a.jsxs)('header', {
                    className: 'flex flex-col gap-y-1',
                    children: [
                      (0, a.jsxs)('h1', { className: 'text-4xl font-black whitespace-nowrap', children: ['⚛️ ', t] }),
                      (0, a.jsx)('h5', {
                        className: 'text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300',
                        children: r,
                      }),
                    ],
                  }),
                  (0, a.jsxs)('p', {
                    className: 'text-neutral-900 dark:text-neutral-100',
                    children: [
                      (0, a.jsx)('code', {
                        className:
                          'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                        children: t,
                      }),
                      (0, a.jsx)('span', { children: s }),
                    ],
                  }),
                  l.length > 0 &&
                    (0, a.jsx)('div', {
                      className:
                        'flex flex-col justify-center gap-x-6 text-sm font-black text-neutral-900 md:flex-row dark:text-neutral-100',
                      children: l.map((e) =>
                        (0, a.jsxs)('p', { className: 'whitespace-nowrap', children: ['\uD83D\uDD2E ', e] }, e)
                      ),
                    }),
                ],
              }),
            }),
          });
        };
      var i = r(148);
      let n = () => {
          let [e, t] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              'dark' === localStorage.getItem('theme') && (document.documentElement.classList.add('dark'), t(!0));
            }, []),
            {
              darkMode: e,
              toggleDarkMode: () => {
                t((e) => {
                  let t = !e;
                  return (
                    document.documentElement.classList.toggle('dark', t),
                    localStorage.setItem('theme', t ? 'dark' : 'light'),
                    t
                  );
                });
              },
            }
          );
        },
        o = (e) => Array.from(new Set(e));
      var d = r(1668),
        c = r.n(d),
        u = r(6826),
        h = r.n(u);
      let m = { assets: '\uD83D\uDDBC️', react: '⚛️', ui: '\uD83C\uDFA8', utils: '\uD83E\uDDF0' },
        p = (e) => {
          let { title: t = '', links: r = [], query: s = '', setState: l, disabledSearch: i = !1 } = e,
            { darkMode: d = !1, toggleDarkMode: u } = n(),
            p = o(
              r.map((e) => {
                let { group: t } = e;
                return t;
              })
            ).map((e) => ({
              group: e,
              links: r.filter((t) => {
                let { group: r } = t;
                return e === r;
              }),
            }));
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(c(), { children: (0, a.jsx)('title', { children: t }) }),
              (0, a.jsx)('nav', {
                className: 'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, a.jsxs)('div', {
                  className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'flex items-center justify-between gap-x-4',
                      children: [
                        (0, a.jsx)('div', {
                          className: 'inline-block md:hidden',
                          children: (0, a.jsxs)('div', {
                            className: 'group relative inline-block text-left',
                            children: [
                              (0, a.jsx)('button', {
                                type: 'button',
                                className:
                                  'inline-flex items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800',
                                children: (0, a.jsx)('svg', {
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  viewBox: '0 0 448 512',
                                  className: 'w-4',
                                  fill: 'currentColor',
                                  children: (0, a.jsx)('path', {
                                    d: 'M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z',
                                  }),
                                }),
                              }),
                              (0, a.jsxs)('div', {
                                className:
                                  'invisible absolute left-0 z-50 mt-2 w-48 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                                children: [
                                  r.map((e) => {
                                    let { id: t = '', href: r = '', emoji: s = '', text: l = '' } = e;
                                    return (0, a.jsxs)(
                                      h(),
                                      {
                                        href: r,
                                        className:
                                          'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                        children: [s, ' ', l],
                                      },
                                      t
                                    );
                                  }),
                                  (0, a.jsx)(h(), {
                                    href: 'https://github.com/hieudoanm/atomic',
                                    target: '_blank',
                                    className: 'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                    children: '\uD83D\uDC19 github',
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)('div', {
                          className: 'flex items-center gap-x-4',
                          children: (0, a.jsx)(h(), {
                            href: '/',
                            className: 'truncate text-lg font-bold md:text-xl',
                            children: t,
                          }),
                        }),
                        (0, a.jsxs)('div', {
                          className: 'flex items-center gap-x-2 md:gap-x-4',
                          children: [
                            (0, a.jsxs)('div', {
                              className: 'hidden items-center gap-x-2 md:flex md:gap-x-4',
                              children: [
                                p.map((e) => {
                                  var t;
                                  let { group: r, links: s = [] } = e;
                                  return (0, a.jsxs)(
                                    'div',
                                    {
                                      className: 'group relative inline-block text-left',
                                      children: [
                                        (0, a.jsxs)('button', {
                                          type: 'button',
                                          children: [null != (t = m[r]) ? t : '', ' ', r, ' (', s.length, ')'],
                                        }),
                                        (0, a.jsx)('div', {
                                          className:
                                            'invisible absolute right-0 z-50 mt-2 w-48 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                                          children: s.map((e) => {
                                            let { id: t = '', href: r = '', emoji: s = '', text: l = '' } = e;
                                            return (0, a.jsxs)(
                                              h(),
                                              {
                                                href: r,
                                                className:
                                                  'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                                children: [s, ' ', l],
                                              },
                                              t
                                            );
                                          }),
                                        }),
                                      ],
                                    },
                                    r
                                  );
                                }),
                                (0, a.jsx)(h(), {
                                  href: 'https://github.com/hieudoanm/atomic',
                                  target: '_blank',
                                  className: 'text-sm md:text-base',
                                  children: '\uD83D\uDC19 github',
                                }),
                              ],
                            }),
                            (0, a.jsxs)('label', {
                              className:
                                'relative block h-8 w-14 rounded-full bg-neutral-200 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-purple-500 dark:bg-neutral-800 dark:has-checked:bg-purple-700',
                              'aria-label': 'Toggle dark mode',
                              children: [
                                (0, a.jsx)('input', {
                                  type: 'checkbox',
                                  checked: d,
                                  className: 'peer sr-only',
                                  onChange: () => {
                                    u();
                                  },
                                }),
                                (0, a.jsx)('span', {
                                  className:
                                    'absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6 dark:bg-neutral-900',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    !i &&
                      (0, a.jsx)('input', {
                        type: 'text',
                        placeholder: 'Search',
                        value: s,
                        className:
                          'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                        onChange: (e) => {
                          l((t) => ({ ...t, query: e.target.value }));
                        },
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        x = [
          {
            group: 'assets',
            id: 'assets-emojis',
            emoji: '\uD83D\uDE04',
            href: '/assets/emojis',
            text: 'Emojis',
            description:
              'A large collection of emojis to enhance user interfaces, chats, and messaging applications with expressive icons.',
          },
          {
            group: 'assets',
            id: 'assets-icons',
            emoji: '\uD83D\uDDBC️',
            href: '/assets/icons',
            text: 'SVG Icons',
            description:
              'High-quality scalable vector icons suitable for web and mobile interfaces, ensuring sharp visuals on any screen size.',
          },
          {
            group: 'react',
            id: 'react-contexts',
            emoji: '\uD83D\uDD17',
            href: '/react/contexts',
            text: 'Contexts',
            description:
              'React contexts to efficiently manage and share state or data across deeply nested components without prop drilling.',
          },
          {
            group: 'react',
            id: 'react-hooks',
            emoji: '\uD83E\uDE9D',
            href: '/react/hooks',
            text: 'Hooks',
            description:
              'Reusable React hooks that provide custom functionality to functional components, improving code modularity and reuse.',
          },
          {
            group: 'react',
            id: 'react-virtual-table',
            emoji: '\uD83D\uDCCB',
            href: '/react/virtual-table',
            text: 'Virtual Table',
            description:
              'Highly performant virtualized table component that renders only visible rows, ideal for large datasets.',
          },
          {
            group: 'ui',
            id: 'ui-charts',
            emoji: '\uD83D\uDCCA',
            href: '/ui/charts',
            text: 'Charts',
            description:
              'Versatile chart components for visualizing data in various formats including bar, line, pie, and more.',
          },
          {
            group: 'ui',
            id: 'ui-kit',
            emoji: '\uD83C\uDFA8',
            href: '/ui/kit',
            text: 'UIKit',
            description:
              'Comprehensive collection of reusable UI components and design elements for building consistent user interfaces.',
          },
          {
            group: 'ui',
            id: 'ui-blocks',
            emoji: '\uD83E\uDDF1',
            href: '/ui/block',
            text: 'UIBlock',
            description:
              'Modular UI blocks designed for rapid assembly of complex interfaces using pre-built building components.',
          },
          {
            group: 'ui',
            id: 'ui-templates',
            emoji: '\uD83D\uDCDD',
            href: '/ui/templates',
            text: 'Templates',
            description:
              'Pre-designed UI templates that speed up development by providing ready-made layouts and styles.',
          },
          {
            group: 'utils',
            id: 'utils',
            emoji: '\uD83E\uDDF0',
            href: '/utils',
            text: 'Utils',
            description:
              'A collection of general utility functions and helpers to simplify common programming tasks across projects.',
          },
        ],
        g = (e) => {
          let {
            disabledSearch: t = !1,
            query: r = '',
            setState: i = () => {},
            id: n = '',
            emoji: o = '',
            title: d = '',
            subtitle: c = '',
            description: u = '',
            features: h = [],
            children: m = (0, a.jsx)(a.Fragment, {}),
          } = e;
          return (0, a.jsxs)('div', {
            className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
            children: [
              (0, a.jsx)(p, {
                disabledSearch: t,
                links: x.filter((e) => {
                  let { id: t = '' } = e;
                  return n !== t;
                }),
                title: ''.concat(o, ' ').concat(d),
                query: r,
                setState: i,
              }),
              (0, a.jsxs)('div', {
                className: 'grow overflow-auto',
                children: [
                  (0, a.jsxs)('main', {
                    className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                    children: [(0, a.jsx)(l, { title: d, subtitle: c, description: u, features: h }), m],
                  }),
                  (0, a.jsx)(s, { title: d }),
                ],
              }),
            ],
          });
        };
    },
  },
]);
