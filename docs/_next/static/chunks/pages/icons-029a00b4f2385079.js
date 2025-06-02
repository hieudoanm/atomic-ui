(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7938],
  {
    767: (e, t, r) => {
      'use strict';
      r.d(t, { F: () => o });
      var a = r(5640),
        s = r(148);
      let l = () => {
        let [e, t] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
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
      var n = r(1668),
        d = r.n(n),
        i = r(6826),
        c = r.n(i);
      let o = (e) => {
        let { title: t = '', links: r = [], query: s = '', setState: n, disabledSearch: i = !1 } = e,
          { darkMode: o = !1, toggleDarkMode: u } = l();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(d(), { children: (0, a.jsx)('title', { children: t }) }),
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
                                'invisible absolute left-0 z-50 mt-2 w-40 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                              children: [
                                r.map((e) => {
                                  let { id: t = '', href: r = '', emoji: s = '', text: l = '' } = e;
                                  return (0, a.jsxs)(
                                    c(),
                                    {
                                      href: r,
                                      className:
                                        'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                      children: [s, ' ', l],
                                    },
                                    t
                                  );
                                }),
                                (0, a.jsx)(c(), {
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
                        children: (0, a.jsxs)(c(), {
                          href: '/',
                          className: 'text-lg font-bold md:text-xl',
                          children: ['⚛️ ', t],
                        }),
                      }),
                      (0, a.jsxs)('div', {
                        className: 'flex items-center gap-x-2 md:gap-x-4',
                        children: [
                          (0, a.jsxs)('div', {
                            className: 'hidden items-center gap-x-2 md:flex md:gap-x-4',
                            children: [
                              r.map((e) => {
                                let { id: t = '', href: r = '', emoji: s = '', text: l = '' } = e;
                                return (0, a.jsxs)(
                                  c(),
                                  { href: r, className: 'text-sm md:text-base', children: [s, ' ', l] },
                                  t
                                );
                              }),
                              (0, a.jsx)(c(), {
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
                                checked: o,
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
    1461: (e, t, r) => {
      'use strict';
      r.d(t, { l: () => a });
      let a = [
        { id: 'charts', emoji: '\uD83D\uDCCA', href: '/charts', text: 'charts' },
        { id: 'react-contexts', emoji: '\uD83D\uDD17', href: '/react/contexts', text: 'contexts' },
        { id: 'react-hooks', emoji: '\uD83E\uDE9D', href: '/react/hooks', text: 'hooks' },
        { id: 'icons', emoji: '\uD83D\uDDBC️', href: '/icons', text: 'icons' },
        { id: 'templates', emoji: '\uD83D\uDCDD', href: '/templates', text: 'templates' },
        { id: 'ui', emoji: '\uD83C\uDFA8', href: '/ui', text: 'ui' },
      ];
    },
    4598: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { __N_SSG: () => x, default: () => h });
      var a = r(5640),
        s = r(6453),
        l = r(8604),
        n = r(148),
        d = r(8809);
      let i = (e) => {
          navigator.clipboard
            .writeText(e)
            .then(() => {
              alert('Copied to clipboard!');
            })
            .catch((e) => {
              console.error('Failed to copy: ', e);
            });
        },
        c = (e) => {
          let { name: t = '', code: r = '' } = e,
            [s, l] = (0, n.useState)('');
          return (
            (0, n.useEffect)(() => {
              l((0, d.A)(window).sanitize(r));
            }, [r]),
            (0, a.jsx)('button', {
              type: 'button',
              title: t,
              className: 'cursor-pointer',
              onClick: () => {
                i(r);
              },
              children: (0, a.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 p-2 shadow md:p-4 lg:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, a.jsx)('div', {
                  className:
                    'h-fit w-fit [&>svg]:h-8 [&>svg]:fill-current [&>svg]:text-neutral-900 dark:[&>svg]:text-neutral-100',
                  dangerouslySetInnerHTML: { __html: s },
                }),
              }),
            })
          );
        };
      var o = r(767),
        u = r(1461),
        x = !0;
      let h = (e) => {
        let { icons: t = [] } = e,
          [{ query: r = '' }, d] = (0, n.useState)({ query: '' }),
          i = t.filter((e) => {
            let { id: t, name: a } = e;
            return t.toLowerCase().includes(r.toLowerCase()) || a.toLowerCase().includes(r.toLowerCase());
          });
        return (0, a.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, a.jsx)(o.F, {
              links: u.l.filter((e) => {
                let { id: t } = e;
                return 'icons' !== t;
              }),
              title: 'atomic/icons',
              query: r,
              setState: d,
            }),
            (0, a.jsxs)('div', {
              className: 'grow overflow-auto',
              children: [
                (0, a.jsxs)('main', {
                  className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                  children: [
                    (0, a.jsx)(l.l, {
                      title: 'atomic/icons',
                      subtitle: 'Free and Open Source SVG Icons',
                      description:
                        'is a free collection of carefully designed SVG icons crafted for modern interfaces. It provides a flexible and scalable set of visual assets that integrate seamlessly into any project — making it easy to build clean, consistent, and visually engaging UIs.',
                      features: ['Copy / Paste', 'Pure SVG', 'Custom Colors'],
                    }),
                    (0, a.jsx)('section', {
                      className: 'py-4 md:py-8',
                      children: (0, a.jsx)('div', {
                        className: 'container mx-auto px-8',
                        children: (0, a.jsxs)('div', {
                          className: 'flex flex-col gap-y-4 md:gap-y-8',
                          children: [
                            (0, a.jsxs)('h2', {
                              className: 'text-2xl font-bold',
                              children: [
                                (0, a.jsx)('span', { className: 'capitalize', children: 'Icons' }),
                                ' (',
                                i.length,
                                ')',
                              ],
                            }),
                            i.length > 0 &&
                              (0, a.jsx)('div', {
                                className:
                                  'grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 md:gap-8 lg:grid-cols-8 xl:grid-cols-10',
                                children: i.map((e) => {
                                  let { id: t = '', name: r = '', code: s } = e;
                                  return (0, a.jsxs)(
                                    'div',
                                    {
                                      className: 'col-span-1 flex flex-col gap-y-2',
                                      children: [
                                        (0, a.jsx)(c, { name: r, code: s }),
                                        (0, a.jsx)('p', {
                                          title: 'name',
                                          className: 'w-full truncate text-center text-xs',
                                          children: r,
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
                    }),
                  ],
                }),
                (0, a.jsx)(s.w, { title: 'atomic/icons' }),
              ],
            }),
          ],
        });
      };
    },
    6453: (e, t, r) => {
      'use strict';
      r.d(t, { w: () => s });
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
      };
    },
    6881: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/icons',
        function () {
          return r(4598);
        },
      ]);
    },
    8604: (e, t, r) => {
      'use strict';
      r.d(t, { l: () => s });
      var a = r(5640);
      let s = (e) => {
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
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 8809, 636, 6593, 8792], () => t(6881)), (_N_E = e.O());
  },
]);
