(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    767: (e, a, t) => {
      'use strict';
      t.d(a, { F: () => o });
      var s = t(5640),
        r = t(148);
      let l = () => {
        let [e, a] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            'dark' === localStorage.getItem('theme') && (document.documentElement.classList.add('dark'), a(!0));
          }, []),
          {
            darkMode: e,
            toggleDarkMode: () => {
              a((e) => {
                let a = !e;
                return (
                  document.documentElement.classList.toggle('dark', a),
                  localStorage.setItem('theme', a ? 'dark' : 'light'),
                  a
                );
              });
            },
          }
        );
      };
      var n = t(1668),
        d = t.n(n),
        i = t(6826),
        c = t.n(i);
      let o = (e) => {
        let { title: a = '', links: t = [], query: r = '', setState: n, disabledSearch: i = !1 } = e,
          { darkMode: o = !1, toggleDarkMode: h } = l();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(d(), { children: (0, s.jsx)('title', { children: a }) }),
            (0, s.jsx)('nav', {
              className: 'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: (0, s.jsxs)('div', {
                className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
                children: [
                  (0, s.jsxs)('div', {
                    className: 'flex items-center justify-between gap-x-4',
                    children: [
                      (0, s.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          (0, s.jsxs)(c(), {
                            href: '/',
                            className: 'text-lg font-bold md:text-xl',
                            children: ['⚛️ ', a],
                          }),
                          (0, s.jsx)('div', {
                            className: 'hidden items-center gap-x-2 md:flex',
                            children: t.map((e) => {
                              let { id: a = '', href: t = '', text: r = '' } = e;
                              return (0, s.jsx)(c(), { href: t, className: 'text-sm md:text-base', children: r }, a);
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          !i &&
                            (0, s.jsx)('div', {
                              className: 'hidden grow md:block',
                              children: (0, s.jsx)('input', {
                                type: 'text',
                                placeholder: 'Search',
                                value: r,
                                className:
                                  'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                                onChange: (e) => {
                                  n((a) => ({ ...a, query: e.target.value }));
                                },
                              }),
                            }),
                          (0, s.jsx)(c(), {
                            href: 'https://github.com/hieudoanm/atomic',
                            target: '_blank',
                            className: 'font-semibold',
                            children: 'GitHub',
                          }),
                          (0, s.jsxs)('label', {
                            className:
                              'relative block h-8 w-14 rounded-full bg-neutral-200 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-purple-500 dark:bg-neutral-800 dark:has-checked:bg-purple-700',
                            'aria-label': 'Toggle dark mode',
                            children: [
                              (0, s.jsx)('input', {
                                type: 'checkbox',
                                checked: o,
                                className: 'peer sr-only',
                                onChange: () => {
                                  h();
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
                    (0, s.jsx)('div', {
                      className: 'block md:hidden',
                      children: (0, s.jsx)('input', {
                        type: 'text',
                        placeholder: 'Search Components',
                        value: r,
                        className:
                          'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                        onChange: (e) => {
                          n((a) => ({ ...a, query: e.target.value }));
                        },
                      }),
                    }),
                ],
              }),
            }),
          ],
        });
      };
    },
    1461: (e, a, t) => {
      'use strict';
      t.d(a, { l: () => s });
      let s = [
        { id: 'charts', href: '/charts', text: 'charts' },
        { id: 'hooks', href: '/hooks', text: 'hooks' },
        { id: 'icons', href: '/icons', text: 'icons' },
        { id: 'templates', href: '/templates', text: 'templates' },
        { id: 'ui', href: '/ui', text: 'ui' },
      ];
    },
    3396: (e, a, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(6310);
        },
      ]);
    },
    6310: (e, a, t) => {
      'use strict';
      t.r(a), t.d(a, { default: () => o });
      var s = t(5640),
        r = t(6453),
        l = t(8604),
        n = t(767),
        d = t(1461),
        i = t(6826),
        c = t.n(i);
      let o = () =>
        (0, s.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, s.jsx)(n.F, { links: d.l, title: 'atomic', query: '', setState: () => {}, disabledSearch: !0 }),
            (0, s.jsx)('div', {
              className: 'grow overflow-auto',
              children: (0, s.jsxs)('main', {
                className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                children: [
                  (0, s.jsx)(l.l, {
                    title: 'atomic',
                    subtitle: 'Free and Open Source Front-end Code',
                    description:
                      'is a free, modern collection of Tailwind CSS UI components and reusable React Hooks, built with atomic design principles. It includes 44+ customizable components and practical hooks with built-in dark mode and responsive behavior—helping you build fast, accessible, and maintainable interfaces with ease.',
                    features: ['Copy / Paste', 'Pure TailwindCSS', 'Pure React Hooks'],
                  }),
                  (0, s.jsx)('section', {
                    className: 'py-4 md:py-8',
                    children: (0, s.jsx)('div', {
                      className: 'container mx-auto px-8',
                      children: (0, s.jsx)('div', {
                        className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3',
                        children: [
                          { id: 'charts', href: '/charts', name: 'Charts', shortName: 'Charts' },
                          { id: 'hooks', href: '/hooks', name: 'React Hooks', shortName: 'Hooks' },
                          { id: 'icons', href: '/icons', name: 'SVG Icons', shortName: 'Icons' },
                          { id: 'templates', href: '/templates', name: 'Page Templates', shortName: 'Templates' },
                          { id: 'ui', href: '/ui', name: 'UI Components', shortName: 'UI' },
                        ].map((e) => {
                          let { href: a = '', name: t = '', shortName: r = '' } = e;
                          return (0, s.jsx)(
                            'div',
                            {
                              className: 'col-span-1',
                              children: (0, s.jsx)(c(), {
                                href: a,
                                children: (0, s.jsxs)('button', {
                                  className:
                                    'w-full cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow dark:bg-purple-700 dark:shadow-neutral-100/10',
                                  children: [
                                    (0, s.jsx)('span', { className: 'hidden md:inline', children: t }),
                                    (0, s.jsx)('span', { className: 'inline md:hidden', children: r }),
                                  ],
                                }),
                              }),
                            },
                            a
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
    6453: (e, a, t) => {
      'use strict';
      t.d(a, { w: () => r });
      var s = t(5640);
      let r = (e) => {
        let { title: a = '' } = e;
        return (0, s.jsx)('footer', {
          className: 'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
          children: (0, s.jsxs)('div', {
            className: 'container mx-auto px-8 py-4',
            children: ['\xa9 ', new Date().getFullYear(), ' ⚛️ ', (0, s.jsx)('strong', { children: a })],
          }),
        });
      };
    },
    8604: (e, a, t) => {
      'use strict';
      t.d(a, { l: () => r });
      var s = t(5640);
      let r = (e) => {
        let { title: a = '', subtitle: t = '', description: r = '', features: l = [] } = e;
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
                    (0, s.jsxs)('h1', { className: 'text-4xl font-black whitespace-nowrap', children: ['⚛️ ', a] }),
                    (0, s.jsx)('h5', {
                      className: 'text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300',
                      children: t,
                    }),
                  ],
                }),
                (0, s.jsxs)('p', {
                  className: 'text-neutral-900 dark:text-neutral-100',
                  children: [
                    (0, s.jsx)('code', {
                      className:
                        'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                      children: a,
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
    var a = (a) => e((e.s = a));
    e.O(0, [6826, 636, 6593, 8792], () => a(3396)), (_N_E = e.O());
  },
]);
