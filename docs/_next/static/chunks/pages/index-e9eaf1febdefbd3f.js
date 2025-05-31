(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    767: (e, a, r) => {
      'use strict';
      r.d(a, { F: () => o });
      var t = r(5640),
        l = r(148);
      let s = () => {
        let [e, a] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
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
      var n = r(1668),
        d = r.n(n),
        i = r(6826),
        c = r.n(i);
      let o = (e) => {
        let { title: a = '', links: r = [], query: l = '', setState: n, disabledSearch: i = !1 } = e,
          { darkMode: o = !1, toggleDarkMode: u } = s();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(d(), { children: (0, t.jsx)('title', { children: a }) }),
            (0, t.jsx)('nav', {
              className: 'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: (0, t.jsxs)('div', {
                className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
                children: [
                  (0, t.jsxs)('div', {
                    className: 'flex items-center justify-between gap-x-4',
                    children: [
                      (0, t.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          (0, t.jsx)(c(), {
                            href: '/',
                            children: (0, t.jsxs)('h3', { className: 'text-2xl font-bold', children: ['⚛️ ', a] }),
                          }),
                          r.map((e) => {
                            let { id: a = '', href: r = '', text: l = '' } = e;
                            return (0, t.jsx)(c(), { href: r, className: 'text-2xl', children: l }, a);
                          }),
                        ],
                      }),
                      (0, t.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          i &&
                            (0, t.jsx)('div', {
                              className: 'hidden grow md:block',
                              children: (0, t.jsx)('input', {
                                type: 'text',
                                placeholder: 'Search',
                                value: l,
                                className:
                                  'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                                onChange: (e) => {
                                  n((a) => ({ ...a, query: e.target.value }));
                                },
                              }),
                            }),
                          (0, t.jsx)(c(), {
                            href: 'https://github.com/hieudoanm/atomic',
                            target: '_blank',
                            className: 'font-semibold',
                            children: 'GitHub',
                          }),
                          (0, t.jsxs)('label', {
                            className:
                              'relative block h-8 w-14 rounded-full bg-neutral-200 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-purple-500 dark:bg-neutral-800 dark:has-checked:bg-purple-700',
                            'aria-label': 'Toggle dark mode',
                            children: [
                              (0, t.jsx)('input', {
                                type: 'checkbox',
                                checked: o,
                                className: 'peer sr-only',
                                onChange: () => {
                                  u();
                                },
                              }),
                              (0, t.jsx)('span', {
                                className:
                                  'absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6 dark:bg-neutral-900',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  i &&
                    (0, t.jsx)('div', {
                      className: 'block md:hidden',
                      children: (0, t.jsx)('input', {
                        type: 'text',
                        placeholder: 'Search Components',
                        value: l,
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
    3396: (e, a, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return r(6310);
        },
      ]);
    },
    6310: (e, a, r) => {
      'use strict';
      r.r(a), r.d(a, { default: () => c });
      var t = r(5640),
        l = r(6453),
        s = r(8604),
        n = r(767),
        d = r(6826),
        i = r.n(d);
      let c = () =>
        (0, t.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, t.jsx)(n.F, {
              links: [
                { id: 'hooks', href: '/hooks', text: 'hooks' },
                { id: 'ui', href: '/ui', text: 'ui' },
              ],
              title: 'atomic',
              query: '',
              setState: () => {},
              disabledSearch: !0,
            }),
            (0, t.jsx)('div', {
              className: 'grow overflow-auto',
              children: (0, t.jsxs)('main', {
                className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                children: [
                  (0, t.jsx)(s.l, {
                    title: 'atomic',
                    subtitle: 'Free and Open Source Front-end Code',
                    description:
                      'is a free, modern collection of Tailwind CSS UI components and reusable React Hooks, built with atomic design principles. It includes 44+ customizable components and practical hooks with built-in dark mode and responsive behavior—helping you build fast, accessible, and maintainable interfaces with ease.',
                    features: ['Copy / Paste', 'Pure TailwindCSS', 'Pure React Hooks'],
                  }),
                  (0, t.jsx)('section', {
                    className: 'py-4 md:py-8',
                    children: (0, t.jsx)('div', {
                      className: 'container mx-auto px-8',
                      children: (0, t.jsxs)('div', {
                        className: 'grid grid-cols-2 gap-4 md:gap-8',
                        children: [
                          (0, t.jsx)('div', {
                            className: 'col-span-1',
                            children: (0, t.jsx)(i(), {
                              href: '/hooks',
                              children: (0, t.jsx)('button', {
                                className:
                                  'w-full cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow dark:bg-purple-700 dark:shadow-neutral-100/10',
                                children: 'hooks',
                              }),
                            }),
                          }),
                          (0, t.jsx)('div', {
                            className: 'col-span-1',
                            children: (0, t.jsx)(i(), {
                              href: '/ui',
                              children: (0, t.jsx)('button', {
                                className:
                                  'w-full cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow dark:bg-purple-700 dark:shadow-neutral-100/10',
                                children: 'ui',
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, t.jsx)(l.w, { title: 'atomic' }),
          ],
        });
    },
    6453: (e, a, r) => {
      'use strict';
      r.d(a, { w: () => l });
      var t = r(5640);
      let l = (e) => {
        let { title: a = '' } = e;
        return (0, t.jsx)('footer', {
          className: 'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
          children: (0, t.jsxs)('div', {
            className: 'container mx-auto px-8 py-4',
            children: ['\xa9 ', new Date().getFullYear(), ' ⚛️ ', (0, t.jsx)('strong', { children: a })],
          }),
        });
      };
    },
    8604: (e, a, r) => {
      'use strict';
      r.d(a, { l: () => l });
      var t = r(5640);
      let l = (e) => {
        let { title: a = '', subtitle: r = '', description: l = '', features: s = [] } = e;
        return (0, t.jsx)('section', {
          className: 'py-8 md:py-16',
          children: (0, t.jsx)('div', {
            className: 'container mx-auto flex flex-col items-center justify-center gap-y-4 px-8',
            children: (0, t.jsxs)('div', {
              className: 'flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8',
              children: [
                (0, t.jsxs)('header', {
                  className: 'flex flex-col gap-y-1',
                  children: [
                    (0, t.jsxs)('h1', { className: 'text-4xl font-black whitespace-nowrap', children: ['⚛️ ', a] }),
                    (0, t.jsx)('h5', {
                      className: 'text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300',
                      children: r,
                    }),
                  ],
                }),
                (0, t.jsxs)('p', {
                  className: 'text-neutral-900 dark:text-neutral-100',
                  children: [
                    (0, t.jsx)('code', {
                      className:
                        'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                      children: a,
                    }),
                    (0, t.jsx)('span', { children: l }),
                  ],
                }),
                s.length > 0 &&
                  (0, t.jsx)('div', {
                    className:
                      'flex flex-col justify-center gap-x-6 text-sm font-black text-neutral-900 md:flex-row dark:text-neutral-100',
                    children: s.map((e) =>
                      (0, t.jsxs)('p', { className: 'whitespace-nowrap', children: ['\uD83D\uDD2E ', e] }, e)
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
