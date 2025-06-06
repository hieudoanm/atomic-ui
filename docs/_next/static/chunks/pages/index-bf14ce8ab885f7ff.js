(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    3286: (e, t, a) => {
      'use strict';
      a.d(t, { U: () => x });
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
        },
        l = (e) => {
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
      var i = a(148);
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
      };
      var d = a(1668),
        o = a.n(d),
        c = a(6826),
        u = a.n(c);
      let h = (e) => {
          let { title: t = '', links: a = [], query: r = '', setState: l, disabledSearch: i = !1 } = e,
            { darkMode: d = !1, toggleDarkMode: c } = n();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(o(), { children: (0, s.jsx)('title', { children: t }) }),
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
                                      u(),
                                      {
                                        href: a,
                                        className:
                                          'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                        children: [r, ' ', l],
                                      },
                                      t
                                    );
                                  }),
                                  (0, s.jsx)(u(), {
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
                          children: (0, s.jsx)(u(), {
                            href: '/',
                            className: 'truncate text-lg font-bold md:text-xl',
                            children: t,
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
                                    u(),
                                    { href: a, className: 'text-sm md:text-base', children: [r, ' ', l] },
                                    t
                                  );
                                }),
                                (0, s.jsx)(u(), {
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
                                  checked: d,
                                  className: 'peer sr-only',
                                  onChange: () => {
                                    c();
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
                    !i &&
                      (0, s.jsx)('input', {
                        type: 'text',
                        placeholder: 'Search',
                        value: r,
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
        m = [
          { id: 'assets-emojis', emoji: '\uD83D\uDE04', href: '/assets/emojis', text: 'emojis' },
          { id: 'assets-icons', emoji: '\uD83D\uDDBC️', href: '/assets/icons', text: 'icons' },
          { id: 'react-contexts', emoji: '\uD83D\uDD17', href: '/react/contexts', text: 'contexts' },
          { id: 'react-hooks', emoji: '\uD83E\uDE9D', href: '/react/hooks', text: 'hooks' },
          { id: 'ui-charts', emoji: '\uD83D\uDCCA', href: '/ui/charts', text: 'charts' },
          { id: 'ui-kit', emoji: '\uD83C\uDFA8', href: '/ui/kit', text: 'kit' },
          { id: 'ui-blocks', emoji: '\uD83E\uDDF1', href: '/ui/block', text: 'block' },
          { id: 'ui-templates', emoji: '\uD83D\uDCDD', href: '/ui/templates', text: 'templates' },
          { id: 'utils', emoji: '\uD83E\uDDF0', href: '/utils', text: 'utils' },
        ],
        x = (e) => {
          let {
            disabledSearch: t = !1,
            query: a = '',
            setState: i = () => {},
            id: n = '',
            emoji: d = '',
            title: o = '',
            subtitle: c = '',
            description: u = '',
            features: x = [],
            children: p = (0, s.jsx)(s.Fragment, {}),
          } = e;
          return (0, s.jsxs)('div', {
            className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
            children: [
              (0, s.jsx)(h, {
                disabledSearch: t,
                links: m.filter((e) => {
                  let { id: t = '' } = e;
                  return n !== t;
                }),
                title: ''.concat(d, ' ').concat(o),
                query: a,
                setState: i,
              }),
              (0, s.jsxs)('div', {
                className: 'grow overflow-auto',
                children: [
                  (0, s.jsxs)('main', {
                    className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                    children: [(0, s.jsx)(l, { title: o, subtitle: c, description: u, features: x }), p],
                  }),
                  (0, s.jsx)(r, { title: o }),
                ],
              }),
            ],
          });
        };
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
      a.r(t), a.d(t, { default: () => n });
      var s = a(5640),
        r = a(3286),
        l = a(6826),
        i = a.n(l);
      let n = () =>
        (0, s.jsx)(r.U, {
          disabledSearch: !0,
          query: '',
          setState: () => {},
          id: '',
          emoji: '⚛️',
          title: 'atomic',
          subtitle: 'Free and Open Source Web Development Code',
          description:
            'is a modern, free collection of Tailwind UI, React Hooks, Contexts, Utilities, Icons, Charts, and Templates—built for fast, accessible, and maintainable interfaces.',
          features: ['Copy / Paste', 'Pure TailwindCSS', 'Pure React Code'],
          children: (0, s.jsx)('section', {
            className: 'py-4 md:py-8',
            children: (0, s.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, s.jsx)('div', {
                className: 'grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4',
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
                  { id: 'ui-charts', href: '/ui/charts', name: 'UI Charts', shortName: 'Charts' },
                  { id: 'ui-kit', href: '/ui/ui', name: 'UI Kit', shortName: 'UIKit' },
                  { id: 'ui-blocks', href: '/ui/block', name: 'UI Block', shortName: 'UI Block' },
                  { id: 'ui-templates', href: '/ui/templates', name: 'UI Templates', shortName: 'Templates' },
                  { id: 'utils', href: '/utils', name: 'Utilities', shortName: 'Utils' },
                ].map((e) => {
                  let { href: t = '', name: a = '', shortName: r = '' } = e;
                  return (0, s.jsx)(
                    'div',
                    {
                      className: 'col-span-1',
                      children: (0, s.jsx)(i(), {
                        href: t,
                        children: (0, s.jsxs)('button', {
                          className:
                            'w-full cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
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
        });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 636, 6593, 8792], () => t(3396)), (_N_E = e.O());
  },
]);
