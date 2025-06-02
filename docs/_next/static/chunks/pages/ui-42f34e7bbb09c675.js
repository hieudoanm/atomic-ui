(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6038],
  {
    767: (e, a, t) => {
      'use strict';
      t.d(a, { F: () => o });
      var r = t(5640),
        s = t(148);
      let l = () => {
        let [e, a] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
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
      var d = t(1668),
        n = t.n(d),
        i = t(6826),
        c = t.n(i);
      let o = (e) => {
        let { title: a = '', links: t = [], query: s = '', setState: d, disabledSearch: i = !1 } = e,
          { darkMode: o = !1, toggleDarkMode: x } = l();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n(), { children: (0, r.jsx)('title', { children: a }) }),
            (0, r.jsx)('nav', {
              className: 'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: (0, r.jsxs)('div', {
                className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'flex items-center justify-between gap-x-4',
                    children: [
                      (0, r.jsx)('div', {
                        className: 'inline-block md:hidden',
                        children: (0, r.jsxs)('div', {
                          className: 'group relative inline-block text-left',
                          children: [
                            (0, r.jsx)('button', {
                              type: 'button',
                              className:
                                'inline-flex items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800',
                              children: (0, r.jsx)('svg', {
                                xmlns: 'http://www.w3.org/2000/svg',
                                viewBox: '0 0 448 512',
                                className: 'w-4',
                                fill: 'currentColor',
                                children: (0, r.jsx)('path', {
                                  d: 'M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z',
                                }),
                              }),
                            }),
                            (0, r.jsxs)('div', {
                              className:
                                'invisible absolute left-0 z-50 mt-2 w-40 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                              children: [
                                t.map((e) => {
                                  let { id: a = '', href: t = '', emoji: s = '', text: l = '' } = e;
                                  return (0, r.jsxs)(
                                    c(),
                                    {
                                      href: t,
                                      className:
                                        'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                      children: [s, ' ', l],
                                    },
                                    a
                                  );
                                }),
                                (0, r.jsx)(c(), {
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
                      (0, r.jsx)('div', {
                        className: 'flex items-center gap-x-4',
                        children: (0, r.jsxs)(c(), {
                          href: '/',
                          className: 'text-lg font-bold md:text-xl',
                          children: ['⚛️ ', a],
                        }),
                      }),
                      (0, r.jsxs)('div', {
                        className: 'flex items-center gap-x-2 md:gap-x-4',
                        children: [
                          (0, r.jsxs)('div', {
                            className: 'hidden items-center gap-x-2 md:flex md:gap-x-4',
                            children: [
                              t.map((e) => {
                                let { id: a = '', href: t = '', emoji: s = '', text: l = '' } = e;
                                return (0, r.jsxs)(
                                  c(),
                                  { href: t, className: 'text-sm md:text-base', children: [s, ' ', l] },
                                  a
                                );
                              }),
                              (0, r.jsx)(c(), {
                                href: 'https://github.com/hieudoanm/atomic',
                                target: '_blank',
                                className: 'text-sm md:text-base',
                                children: '\uD83D\uDC19 github',
                              }),
                            ],
                          }),
                          (0, r.jsxs)('label', {
                            className:
                              'relative block h-8 w-14 rounded-full bg-neutral-200 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-purple-500 dark:bg-neutral-800 dark:has-checked:bg-purple-700',
                            'aria-label': 'Toggle dark mode',
                            children: [
                              (0, r.jsx)('input', {
                                type: 'checkbox',
                                checked: o,
                                className: 'peer sr-only',
                                onChange: () => {
                                  x();
                                },
                              }),
                              (0, r.jsx)('span', {
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
                    (0, r.jsx)('input', {
                      type: 'text',
                      placeholder: 'Search',
                      value: s,
                      className:
                        'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                      onChange: (e) => {
                        d((a) => ({ ...a, query: e.target.value }));
                      },
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
      t.d(a, { l: () => r });
      let r = [
        { id: 'charts', emoji: '\uD83D\uDCCA', href: '/charts', text: 'charts' },
        { id: 'react-contexts', emoji: '\uD83D\uDD17', href: '/react/contexts', text: 'contexts' },
        { id: 'react-hooks', emoji: '\uD83E\uDE9D', href: '/react/hooks', text: 'hooks' },
        { id: 'icons', emoji: '\uD83D\uDDBC️', href: '/icons', text: 'icons' },
        { id: 'templates', emoji: '\uD83D\uDCDD', href: '/templates', text: 'templates' },
        { id: 'ui', emoji: '\uD83C\uDFA8', href: '/ui', text: 'ui' },
      ];
    },
    3719: (e, a, t) => {
      'use strict';
      t.d(a, { C: () => d });
      var r = t(5640),
        s = t(148),
        l = t(5031);
      let d = (e) => {
        let { code: a, lang: t } = e,
          [d, n] = (0, s.useState)('');
        return (
          (0, s.useEffect)(() => {
            (async () => {
              n(await (0, l.Yz)(a, { lang: t, theme: 'github-dark' }));
            })();
          }),
          (0, r.jsx)('div', {
            dangerouslySetInnerHTML: { __html: d },
            className: 'w-full overflow-x-auto bg-neutral-900 p-4',
          })
        );
      };
    },
    6453: (e, a, t) => {
      'use strict';
      t.d(a, { w: () => s });
      var r = t(5640);
      let s = (e) => {
        let { title: a = '' } = e;
        return (0, r.jsx)('footer', {
          className: 'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
          children: (0, r.jsxs)('div', {
            className: 'container mx-auto px-8 py-4',
            children: ['\xa9 ', new Date().getFullYear(), ' ⚛️ ', (0, r.jsx)('strong', { children: a })],
          }),
        });
      };
    },
    6971: (e, a, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/ui',
        function () {
          return t(8797);
        },
      ]);
    },
    7921: (e, a, t) => {
      'use strict';
      t.d(a, { O: () => n });
      var r = t(5640),
        s = t(8809),
        l = t(148),
        d = t(3719);
      let n = (e) => {
        let { id: a = '', emoji: t = '', group: n = '', name: i = '', code: c = '', codeOnly: o = !1 } = e,
          [x, u] = (0, l.useState)(''),
          [h, m] = (0, l.useState)(!0);
        return (
          (0, l.useEffect)(() => {
            u((0, s.A)(window).sanitize(c));
          }, [c]),
          (0, r.jsxs)('div', {
            id: a,
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, r.jsxs)('div', {
                className: 'flex items-center justify-between gap-x-2',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      (0, r.jsx)('span', { className: 'text-4xl', children: t }),
                      (0, r.jsxs)('div', {
                        children: [
                          (0, r.jsx)('p', { className: 'text-xs capitalize', children: n }),
                          (0, r.jsx)('h3', { className: 'text-xl font-bold capitalize md:text-2xl', children: i }),
                        ],
                      }),
                    ],
                  }),
                  !o &&
                    (0, r.jsx)('button', {
                      type: 'button',
                      className:
                        'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                      onClick: () => m((e) => !e),
                      children: h ? 'Preview' : 'Code',
                    }),
                ],
              }),
              (0, r.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: o
                  ? (0, r.jsx)(d.C, { code: c, lang: 'tsx' })
                  : (0, r.jsx)(r.Fragment, {
                      children: h
                        ? (0, r.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: x } })
                        : (0, r.jsx)(d.C, { code: c, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    8604: (e, a, t) => {
      'use strict';
      t.d(a, { l: () => s });
      var r = t(5640);
      let s = (e) => {
        let { title: a = '', subtitle: t = '', description: s = '', features: l = [] } = e;
        return (0, r.jsx)('section', {
          className: 'py-8 md:py-16',
          children: (0, r.jsx)('div', {
            className: 'container mx-auto flex flex-col items-center justify-center gap-y-4 px-8',
            children: (0, r.jsxs)('div', {
              className: 'flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8',
              children: [
                (0, r.jsxs)('header', {
                  className: 'flex flex-col gap-y-1',
                  children: [
                    (0, r.jsxs)('h1', { className: 'text-4xl font-black whitespace-nowrap', children: ['⚛️ ', a] }),
                    (0, r.jsx)('h5', {
                      className: 'text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300',
                      children: t,
                    }),
                  ],
                }),
                (0, r.jsxs)('p', {
                  className: 'text-neutral-900 dark:text-neutral-100',
                  children: [
                    (0, r.jsx)('code', {
                      className:
                        'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                      children: a,
                    }),
                    (0, r.jsx)('span', { children: s }),
                  ],
                }),
                l.length > 0 &&
                  (0, r.jsx)('div', {
                    className:
                      'flex flex-col justify-center gap-x-6 text-sm font-black text-neutral-900 md:flex-row dark:text-neutral-100',
                    children: l.map((e) =>
                      (0, r.jsxs)('p', { className: 'whitespace-nowrap', children: ['\uD83D\uDD2E ', e] }, e)
                    ),
                  }),
              ],
            }),
          }),
        });
      };
    },
    8797: (e, a, t) => {
      'use strict';
      t.r(a), t.d(a, { __N_SSG: () => u, default: () => h });
      var r = t(5640),
        s = t(7921),
        l = t(6453),
        d = t(8604),
        n = t(767),
        i = t(1461),
        c = t(6826),
        o = t.n(c),
        x = t(148),
        u = !0;
      let h = (e) => {
        let { components: a = [] } = e,
          [{ query: t = '' }, c] = (0, x.useState)({ query: '' }),
          u = a.filter((e) => {
            let { id: a, name: r } = e;
            return a.toLowerCase().includes(t.toLowerCase()) || r.toLowerCase().includes(t.toLowerCase());
          });
        return (0, r.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, r.jsx)(n.F, {
              links: i.l.filter((e) => {
                let { id: a } = e;
                return 'ui' !== a;
              }),
              title: 'atomic/ui',
              query: t,
              setState: c,
            }),
            (0, r.jsxs)('div', {
              className: 'grow overflow-auto',
              children: [
                (0, r.jsxs)('main', {
                  className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                  children: [
                    (0, r.jsx)(d.l, {
                      title: 'atomic/ui',
                      subtitle: 'Free and Open Source TailwindCSS v4 Components',
                      description:
                        'is a free collection of Tailwind CSS components designed with atomic design principles in mind. It offers a flexible set of customizable components with built-in dark mode support to help you quickly build modern, responsive UIs.',
                      features: ['Copy / Paste', 'Pure TailwindCSS', 'Atoms / Molecules / Organisms'],
                    }),
                    (0, r.jsx)('section', {
                      className: 'py-4 md:py-8',
                      children: (0, r.jsx)('div', {
                        className: 'container mx-auto px-8',
                        children: (0, r.jsxs)('div', {
                          className: 'flex flex-col gap-y-4 md:gap-y-8',
                          children: [
                            (0, r.jsxs)('h2', {
                              className: 'text-2xl font-bold',
                              children: [
                                (0, r.jsx)('span', { className: 'capitalize', children: 'Components' }),
                                ' (',
                                u.length,
                                ')',
                              ],
                            }),
                            u.length > 0 &&
                              (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)('div', {
                                    className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                                    children: u.map((e) => {
                                      let { id: a = '', emoji: t = '', group: s, name: l = '' } = e;
                                      return (0, r.jsx)(
                                        o(),
                                        {
                                          href: '#'.concat(a),
                                          children: (0, r.jsx)('div', {
                                            className: 'col-span-1',
                                            children: (0, r.jsxs)('div', {
                                              className:
                                                'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                              children: [
                                                (0, r.jsx)('p', { className: 'text-2xl', children: t }),
                                                (0, r.jsxs)('div', {
                                                  className: 'flex flex-col gap-y-0.25',
                                                  children: [
                                                    (0, r.jsx)('p', { className: 'text-xs capitalize', children: s }),
                                                    (0, r.jsx)('p', {
                                                      className: 'font-semibold capitalize',
                                                      children: l,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        },
                                        a
                                      );
                                    }),
                                  }),
                                  (0, r.jsx)('div', {
                                    className: 'flex flex-col gap-y-4 md:gap-y-8',
                                    children: u.map((e) => {
                                      let { id: a = '', emoji: t = '', group: l = '', name: d = '', code: n = '' } = e;
                                      return (0, r.jsx)(
                                        'div',
                                        {
                                          className: 'flex flex-col gap-y-4',
                                          children: (0, r.jsx)(s.O, { id: a, emoji: t, group: l, name: d, code: n }),
                                        },
                                        a
                                      );
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                    }),
                    (0, r.jsx)('section', {
                      className: 'py-4 md:py-8',
                      children: (0, r.jsxs)('div', {
                        className: 'container mx-auto flex flex-col gap-y-8 px-8',
                        children: [
                          (0, r.jsx)('h2', {
                            className: 'text-2xl font-bold',
                            children: (0, r.jsx)('span', { className: 'capitalize', children: 'Classes' }),
                          }),
                          (0, r.jsx)('div', {
                            className:
                              'overflow-x-auto rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                            children: (0, r.jsxs)('table', {
                              className: 'min-w-full divide-y-2 divide-neutral-200 dark:divide-neutral-800',
                              children: [
                                (0, r.jsx)('thead', {
                                  children: (0, r.jsxs)('tr', {
                                    children: [
                                      (0, r.jsx)('th', { className: 'px-3 py-2 whitespace-nowrap', children: '#' }),
                                      (0, r.jsx)('th', {
                                        align: 'left',
                                        className: 'px-3 py-2 whitespace-nowrap',
                                        children: 'Class',
                                      }),
                                      (0, r.jsx)('th', {
                                        align: 'left',
                                        className: 'px-3 py-2 whitespace-nowrap',
                                        children: 'Light',
                                      }),
                                      (0, r.jsx)('th', {
                                        align: 'left',
                                        className: 'px-3 py-2 whitespace-nowrap',
                                        children: 'Dark',
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)('tbody', {
                                  className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                                  children: [
                                    {
                                      id: 'bg-primary',
                                      name: 'bg-primary',
                                      lightClass: 'bg-white',
                                      darkClass: 'dark:bg-neutral-900',
                                    },
                                    {
                                      id: 'text-primary',
                                      name: 'text-primary',
                                      lightClass: 'text-neutral-900',
                                      darkClass: 'dark:text-neutral-100',
                                    },
                                    {
                                      id: 'text-secondary',
                                      name: 'text-secondary',
                                      lightClass: 'text-neutral-700',
                                      darkClass: 'dark:text-neutral-300',
                                    },
                                    {
                                      id: 'border',
                                      name: 'border',
                                      lightClass: 'border-neutral-200',
                                      darkClass: 'dark:border-neutral-800',
                                    },
                                    {
                                      id: 'divide',
                                      name: 'divide',
                                      lightClass: 'divide-neutral-200',
                                      darkClass: 'dark:divide-neutral-800',
                                    },
                                    {
                                      id: 'shadow',
                                      name: 'shadow',
                                      lightClass: 'shadow',
                                      darkClass: 'dark:shadow-neutral-100/10',
                                    },
                                  ].map((e, a) => {
                                    let { id: t = '', name: s = '', lightClass: l = '', darkClass: d = '' } = e;
                                    return (0, r.jsxs)(
                                      'tr',
                                      {
                                        children: [
                                          (0, r.jsx)('td', {
                                            align: 'center',
                                            className: 'px-3 py-2 whitespace-nowrap',
                                            children: a + 1,
                                          }),
                                          (0, r.jsx)('td', { className: 'px-3 py-2 whitespace-nowrap', children: s }),
                                          (0, r.jsx)('td', {
                                            className: 'px-3 py-2 whitespace-nowrap',
                                            children: (0, r.jsx)('code', {
                                              className:
                                                'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                                              children: l,
                                            }),
                                          }),
                                          (0, r.jsx)('td', {
                                            className: 'px-3 py-2 whitespace-nowrap',
                                            children: (0, r.jsx)('code', {
                                              className:
                                                'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                                              children: d,
                                            }),
                                          }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, r.jsx)(l.w, { title: 'atomic/ui' }),
              ],
            }),
          ],
        });
      };
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [6826, 8809, 5031, 636, 6593, 8792], () => a(6971)), (_N_E = e.O());
  },
]);
