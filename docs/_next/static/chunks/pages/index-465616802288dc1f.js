(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    767: (e, t, a) => {
      'use strict';
      a.d(t, { F: () => c });
      var s = a(5640),
        r = a(148);
      let l = () => {
        let [e, t] = (0, r.useState)(!0);
        return (
          (0, r.useEffect)(() => {
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
      };
      var n = a(1668),
        i = a.n(n),
        d = a(6826),
        o = a.n(d);
      let c = (e) => {
        let { title: t = '', links: a = [], query: r = '', setState: n, disabledSearch: d = !1 } = e,
          { darkMode: c = !1, toggleDarkMode: m } = l();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(i(), { children: (0, s.jsx)('title', { children: t }) }),
            (0, s.jsx)('nav', {
              className: 'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: (0, s.jsxs)('div', {
                className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
                children: [
                  (0, s.jsxs)('div', {
                    className: 'flex items-center justify-between gap-x-4',
                    children: [
                      (0, s.jsx)('div', {
                        className: 'inline-block md:hidden',
                        children: (0, s.jsxs)('div', {
                          className: 'group relative inline-block text-left',
                          children: [
                            (0, s.jsx)('button', {
                              type: 'button',
                              className:
                                'inline-flex items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800',
                              children: (0, s.jsx)('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 448 512',
                                className: 'w-4',
                                fill: 'currentColor',
                                children: (0, s.jsx)('path', {
                                  d: 'M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z',
                                }),
                              }),
                            }),
                            (0, s.jsxs)('div', {
                              className:
                                'invisible absolute left-0 z-50 mt-2 w-40 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                              children: [
                                a.map((e) => {
                                  let { id: t = '', href: a = '', emoji: r = '', text: l = '' } = e;
                                  return (0, s.jsxs)(
                                    o(),
                                    {
                                      href: a,
                                      className:
                                        'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                      children: [r, ' ', l],
                                    },
                                    t
                                  );
                                }),
                                (0, s.jsx)(o(), {
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
                      (0, s.jsx)('div', {
                        className: 'flex items-center gap-x-4',
                        children: (0, s.jsxs)(o(), {
                          href: '/',
                          className: 'text-lg font-bold md:text-xl',
                          children: ['⚛️ ', t],
                        }),
                      }),
                      (0, s.jsxs)('div', {
                        className: 'flex items-center gap-x-2 md:gap-x-4',
                        children: [
                          (0, s.jsxs)('div', {
                            className: 'hidden items-center gap-x-2 md:flex md:gap-x-4',
                            children: [
                              a.map((e) => {
                                let { id: t = '', href: a = '', emoji: r = '', text: l = '' } = e;
                                return (0, s.jsxs)(
                                  o(),
                                  { href: a, className: 'text-sm md:text-base', children: [r, ' ', l] },
                                  t
                                );
                              }),
                              (0, s.jsx)(o(), {
                                href: 'https://github.com/hieudoanm/atomic',
                                target: '_blank',
                                className: 'text-sm md:text-base',
                                children: '\uD83D\uDC19 github',
                              }),
                            ],
                          }),
                          (0, s.jsxs)('label', {
                            className:
                              'relative block h-8 w-14 rounded-full bg-neutral-200 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-purple-500 dark:bg-neutral-800 dark:has-checked:bg-purple-700',
                            'aria-label': 'Toggle dark mode',
                            children: [
                              (0, s.jsx)('input', {
                                type: 'checkbox',
                                checked: c,
                                className: 'peer sr-only',
                                onChange: () => {
                                  m();
                                },
                              }),
                              (0, s.jsx)('span', {
                                className:
                                  'absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6 dark:bg-neutral-900',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  !d &&
                    (0, s.jsx)('input', {
                      type: 'text',
                      placeholder: 'Search',
                      value: r,
                      className:
                        'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                      onChange: (e) => {
                        n((t) => ({ ...t, query: e.target.value }));
                      },
                    }),
                ],
              }),
            }),
          ],
        });
      };
    },
    1461: (e, t, a) => {
      'use strict';
      a.d(t, { l: () => s });
      let s = [
        { id: 'components-charts', emoji: '\uD83D\uDCCA', href: '/components/charts', text: 'charts' },
        { id: 'components-ui', emoji: '\uD83C\uDFA8', href: '/components/ui', text: 'ui' },
        { id: 'react-contexts', emoji: '\uD83D\uDD17', href: '/react/contexts', text: 'contexts' },
        { id: 'react-hooks', emoji: '\uD83E\uDE9D', href: '/react/hooks', text: 'hooks' },
        { id: 'visual-emojis', emoji: '\uD83D\uDE04', href: '/visual/emojis', text: 'emojis' },
        { id: 'visual-icons', emoji: '\uD83D\uDDBC️', href: '/visual/icons', text: 'icons' },
        { id: 'templates', emoji: '\uD83D\uDCDD', href: '/templates', text: 'templates' },
        { id: 'utils', emoji: '\uD83E\uDDF0', href: '/utils', text: 'utils' },
      ];
    },
    3396: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return a(6310);
        },
      ]);
    },
    6310: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => c });
      var s = a(5640),
        r = a(6453),
        l = a(8604),
        n = a(767),
        i = a(1461),
        d = a(6826),
        o = a.n(d);
      let c = () =>
        (0, s.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, s.jsx)(n.F, { links: i.l, title: 'atomic', query: '', setState: () => {}, disabledSearch: !0 }),
            (0, s.jsx)('div', {
              className: 'grow overflow-auto',
              children: (0, s.jsxs)('main', {
                className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                children: [
                  (0, s.jsx)(l.l, {
                    title: 'atomic',
                    subtitle: 'Free and Open Source Front-end Code',
                    description:
                      'is a modern, free collection of Tailwind UI, React Hooks, Icons, Charts, and Templates—built for fast, accessible, maintainable interfaces.',
                    features: ['Copy / Paste', 'Pure TailwindCSS', 'Pure React Hooks'],
                  }),
                  (0, s.jsx)('section', {
                    className: 'py-4 md:py-8',
                    children: (0, s.jsx)('div', {
                      className: 'container mx-auto px-8',
                      children: (0, s.jsx)('div', {
                        className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                        children: [
                          { id: 'charts', href: '/components/charts', name: 'Charts Components', shortName: 'Charts' },
                          { id: 'ui', href: '/components/ui', name: 'UI Components', shortName: 'UI' },
                          {
                            id: 'react-context',
                            href: '/react/contexts',
                            name: 'React Contexts',
                            shortName: 'React Contexts',
                          },
                          { id: 'react-hooks', href: '/react/hooks', name: 'React Hooks', shortName: 'React Hooks' },
                          { id: 'visual-emojis', href: '/visual/emojis', name: 'Emojis', shortName: 'Emojis' },
                          { id: 'visual-icons', href: '/visual/icons', name: 'Icons', shortName: 'Icons' },
                          { id: 'templates', href: '/templates', name: 'Page Templates', shortName: 'Templates' },
                          { id: 'utils', href: '/utils', name: 'Utilities', shortName: 'Utils' },
                        ].map((e) => {
                          let { href: t = '', name: a = '', shortName: r = '' } = e;
                          return (0, s.jsx)(
                            'div',
                            {
                              className: 'col-span-1',
                              children: (0, s.jsx)(o(), {
                                href: t,
                                children: (0, s.jsxs)('button', {
                                  className:
                                    'w-full cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow dark:bg-purple-700 dark:shadow-neutral-100/10',
                                  children: [
                                    (0, s.jsx)('span', { className: 'hidden md:inline', children: a }),
                                    (0, s.jsx)('span', { className: 'inline md:hidden', children: r }),
                                  ],
                                }),
                              }),
                            },
                            t
                          );
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, s.jsx)(r.w, { title: 'atomic' }),
          ],
        });
    },
    6453: (e, t, a) => {
      'use strict';
      a.d(t, { w: () => r });
      var s = a(5640);
      let r = (e) => {
        let { title: t = '' } = e;
        return (0, s.jsx)('footer', {
          className: 'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
          children: (0, s.jsxs)('div', {
            className: 'container mx-auto px-8 py-4',
            children: ['\xa9 ', new Date().getFullYear(), ' ⚛️ ', (0, s.jsx)('strong', { children: t })],
          }),
        });
      };
    },
    8604: (e, t, a) => {
      'use strict';
      a.d(t, { l: () => r });
      var s = a(5640);
      let r = (e) => {
        let { title: t = '', subtitle: a = '', description: r = '', features: l = [] } = e;
        return (0, s.jsx)('section', {
          className: 'py-8 md:py-16',
          children: (0, s.jsx)('div', {
            className: 'container mx-auto flex flex-col items-center justify-center gap-y-4 px-8',
            children: (0, s.jsxs)('div', {
              className: 'flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8',
              children: [
                (0, s.jsxs)('header', {
                  className: 'flex flex-col gap-y-1',
                  children: [
                    (0, s.jsxs)('h1', { className: 'text-4xl font-black whitespace-nowrap', children: ['⚛️ ', t] }),
                    (0, s.jsx)('h5', {
                      className: 'text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300',
                      children: a,
                    }),
                  ],
                }),
                (0, s.jsxs)('p', {
                  className: 'text-neutral-900 dark:text-neutral-100',
                  children: [
                    (0, s.jsx)('code', {
                      className:
                        'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                      children: t,
                    }),
                    (0, s.jsx)('span', { children: r }),
                  ],
                }),
                l.length > 0 &&
                  (0, s.jsx)('div', {
                    className:
                      'flex flex-col justify-center gap-x-6 text-sm font-black text-neutral-900 md:flex-row dark:text-neutral-100',
                    children: l.map((e) =>
                      (0, s.jsxs)('p', { className: 'whitespace-nowrap', children: ['\uD83D\uDD2E ', e] }, e)
                    ),
                  }),
              ],
            }),
          }),
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 636, 6593, 8792], () => t(3396)), (_N_E = e.O());
  },
]);
