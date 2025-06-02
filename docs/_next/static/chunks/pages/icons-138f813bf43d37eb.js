(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7938],
  {
    767: (e, t, a) => {
      'use strict';
      a.d(t, { F: () => o });
      var s = a(5640),
        l = a(148);
      let r = () => {
        let [e, t] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
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
        d = a.n(n),
        c = a(6826),
        i = a.n(c);
      let o = (e) => {
        let { title: t = '', links: a = [], query: l = '', setState: n, disabledSearch: c = !1 } = e,
          { darkMode: o = !1, toggleDarkMode: u } = r();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(d(), { children: (0, s.jsx)('title', { children: t }) }),
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
                          (0, s.jsxs)(i(), {
                            href: '/',
                            className: 'text-lg font-bold md:text-xl',
                            children: ['⚛️ ', t],
                          }),
                          (0, s.jsx)('div', {
                            className: 'hidden items-center gap-x-2 md:flex',
                            children: a.map((e) => {
                              let { id: t = '', href: a = '', text: l = '' } = e;
                              return (0, s.jsx)(i(), { href: a, className: 'text-sm md:text-base', children: l }, t);
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          !c &&
                            (0, s.jsx)('div', {
                              className: 'hidden grow md:block',
                              children: (0, s.jsx)('input', {
                                type: 'text',
                                placeholder: 'Search',
                                value: l,
                                className:
                                  'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                                onChange: (e) => {
                                  n((t) => ({ ...t, query: e.target.value }));
                                },
                              }),
                            }),
                          (0, s.jsx)(i(), {
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
                                  u();
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
                  c &&
                    (0, s.jsx)('div', {
                      className: 'block md:hidden',
                      children: (0, s.jsx)('input', {
                        type: 'text',
                        placeholder: 'Search Components',
                        value: l,
                        className:
                          'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                        onChange: (e) => {
                          n((t) => ({ ...t, query: e.target.value }));
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
    1461: (e, t, a) => {
      'use strict';
      a.d(t, { l: () => s });
      let s = [
        { id: 'hooks', href: '/hooks', text: 'hooks' },
        { id: 'icons', href: '/icons', text: 'icons' },
        { id: 'templates', href: '/templates', text: 'templates' },
        { id: 'ui', href: '/ui', text: 'ui' },
      ];
    },
    4598: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { __N_SSG: () => x, default: () => h });
      var s = a(5640),
        l = a(6453),
        r = a(8604),
        n = a(148),
        d = a(8809);
      let c = (e) => {
          navigator.clipboard
            .writeText(e)
            .then(() => {
              alert('Copied to clipboard!');
            })
            .catch((e) => {
              console.error('Failed to copy: ', e);
            });
        },
        i = (e) => {
          let { name: t = '', code: a = '' } = e,
            [l, r] = (0, n.useState)('');
          return (
            (0, n.useEffect)(() => {
              r((0, d.A)(window).sanitize(a));
            }, [a]),
            (0, s.jsx)('button', {
              type: 'button',
              title: t,
              className: 'cursor-pointer',
              onClick: () => {
                c(a);
              },
              children: (0, s.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 p-2 shadow md:p-4 lg:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: (0, s.jsx)('div', {
                  className:
                    'h-fit w-fit [&>svg]:h-8 [&>svg]:fill-current [&>svg]:text-neutral-900 dark:[&>svg]:text-neutral-100',
                  dangerouslySetInnerHTML: { __html: l },
                }),
              }),
            })
          );
        };
      var o = a(767),
        u = a(1461),
        x = !0;
      let h = (e) => {
        let { icons: t = [] } = e,
          [{ query: a = '' }, d] = (0, n.useState)({ query: '' }),
          c = t.filter((e) => {
            let { id: t, name: s } = e;
            return t.toLowerCase().includes(a.toLowerCase()) || s.toLowerCase().includes(a.toLowerCase());
          });
        return (0, s.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, s.jsx)(o.F, {
              links: u.l.filter((e) => {
                let { id: t } = e;
                return 'icons' !== t;
              }),
              title: 'atomic/icons',
              query: a,
              setState: d,
            }),
            (0, s.jsxs)('div', {
              className: 'grow overflow-auto',
              children: [
                (0, s.jsxs)('main', {
                  className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                  children: [
                    (0, s.jsx)(r.l, {
                      title: 'atomic/icons',
                      subtitle: 'Free and Open Source SVG Icons',
                      description:
                        'is a free collection of carefully designed SVG icons crafted for modern interfaces. It provides a flexible and scalable set of visual assets that integrate seamlessly into any project — making it easy to build clean, consistent, and visually engaging UIs.',
                      features: ['Copy / Paste', 'Pure SVG', 'Custom Colors'],
                    }),
                    (0, s.jsx)('section', {
                      className: 'py-4 md:py-8',
                      children: (0, s.jsx)('div', {
                        className: 'container mx-auto px-8',
                        children: (0, s.jsxs)('div', {
                          className: 'flex flex-col gap-y-4 md:gap-y-8',
                          children: [
                            (0, s.jsxs)('h2', {
                              className: 'text-2xl font-bold',
                              children: [
                                (0, s.jsx)('span', { className: 'capitalize', children: 'Icons' }),
                                ' (',
                                c.length,
                                ')',
                              ],
                            }),
                            c.length > 0 &&
                              (0, s.jsx)('div', {
                                className:
                                  'grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 md:gap-8 lg:grid-cols-8 xl:grid-cols-10',
                                children: c.map((e) => {
                                  let { id: t = '', name: a = '', code: l } = e;
                                  return (0, s.jsxs)(
                                    'div',
                                    {
                                      className: 'col-span-1 flex flex-col gap-y-2',
                                      children: [
                                        (0, s.jsx)(i, { name: a, code: l }),
                                        (0, s.jsx)('p', {
                                          title: 'name',
                                          className: 'w-full truncate text-center text-xs',
                                          children: a,
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
                (0, s.jsx)(l.w, { title: 'atomic/icons' }),
              ],
            }),
          ],
        });
      };
    },
    6453: (e, t, a) => {
      'use strict';
      a.d(t, { w: () => l });
      var s = a(5640);
      let l = (e) => {
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
    6881: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/icons',
        function () {
          return a(4598);
        },
      ]);
    },
    8604: (e, t, a) => {
      'use strict';
      a.d(t, { l: () => l });
      var s = a(5640);
      let l = (e) => {
        let { title: t = '', subtitle: a = '', description: l = '', features: r = [] } = e;
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
                    (0, s.jsx)('span', { children: l }),
                  ],
                }),
                r.length > 0 &&
                  (0, s.jsx)('div', {
                    className:
                      'flex flex-col justify-center gap-x-6 text-sm font-black text-neutral-900 md:flex-row dark:text-neutral-100',
                    children: r.map((e) =>
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
    e.O(0, [6826, 8809, 636, 6593, 8792], () => t(6881)), (_N_E = e.O());
  },
]);
