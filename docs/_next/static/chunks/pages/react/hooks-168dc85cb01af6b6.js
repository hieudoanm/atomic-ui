(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6748],
  {
    767: (e, t, a) => {
      'use strict';
      a.d(t, { F: () => o });
      var s = a(5640),
        r = a(148);
      let l = () => {
        let [e, t] = (0, r.useState)(!1);
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
        d = a.n(n),
        c = a(6826),
        i = a.n(c);
      let o = (e) => {
        let { title: t = '', links: a = [], query: r = '', setState: n, disabledSearch: c = !1 } = e,
          { darkMode: o = !1, toggleDarkMode: x } = l();
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
                                    i(),
                                    {
                                      href: a,
                                      className:
                                        'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                      children: [r, ' ', l],
                                    },
                                    t
                                  );
                                }),
                                (0, s.jsx)(i(), {
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
                        children: (0, s.jsxs)(i(), {
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
                                  i(),
                                  { href: a, className: 'text-sm md:text-base', children: [r, ' ', l] },
                                  t
                                );
                              }),
                              (0, s.jsx)(i(), {
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
                                checked: o,
                                className: 'peer sr-only',
                                onChange: () => {
                                  x();
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
                  !c &&
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
        { id: 'charts', emoji: '\uD83D\uDCCA', href: '/charts', text: 'charts' },
        { id: 'react-contexts', emoji: '\uD83D\uDD17', href: '/react/contexts', text: 'contexts' },
        { id: 'react-hooks', emoji: '\uD83E\uDE9D', href: '/react/hooks', text: 'hooks' },
        { id: 'icons', emoji: '\uD83D\uDDBC️', href: '/icons', text: 'icons' },
        { id: 'templates', emoji: '\uD83D\uDCDD', href: '/templates', text: 'templates' },
        { id: 'ui', emoji: '\uD83C\uDFA8', href: '/ui', text: 'ui' },
      ];
    },
    2791: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { __N_SSG: () => u, default: () => h });
      var s = a(5640),
        r = a(7921),
        l = a(6453),
        n = a(8604),
        d = a(767),
        c = a(1461),
        i = a(6826),
        o = a.n(i),
        x = a(148),
        u = !0;
      let h = (e) => {
        let { hooks: t = [] } = e,
          [{ query: a = '' }, i] = (0, x.useState)({ query: '' }),
          u = t.filter((e) => {
            let { id: t, name: s } = e;
            return t.toLowerCase().includes(a.toLowerCase()) || s.toLowerCase().includes(a.toLowerCase());
          });
        return (0, s.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, s.jsx)(d.F, {
              links: c.l.filter((e) => {
                let { id: t } = e;
                return 'react-hooks' !== t;
              }),
              title: 'atomic/hooks',
              query: a,
              setState: i,
            }),
            (0, s.jsx)('div', {
              className: 'grow overflow-auto',
              children: (0, s.jsxs)('main', {
                className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                children: [
                  (0, s.jsx)(n.l, {
                    title: 'atomic/hooks',
                    subtitle: 'Free and Open Source React v19 Hooks',
                    description:
                      'is a free collection of React hooks built with simplicity and reusability in mind. It offers a flexible set of essential utilities to help you manage state, side effects, and async logic more effectively — all with a focus on clean, scalable React code.',
                    features: ['Copy / Paste', 'Pure React Hooks', 'Cross Browser Compatible'],
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
                              (0, s.jsx)('span', { className: 'capitalize', children: 'Hooks' }),
                              ' (',
                              u.length,
                              ')',
                            ],
                          }),
                          u.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)('div', {
                                  className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                                  children: u.map((e) => {
                                    let { id: t = '', emoji: a = '', group: r, name: l = '' } = e;
                                    return (0, s.jsx)(
                                      o(),
                                      {
                                        href: '#'.concat(t),
                                        children: (0, s.jsx)('div', {
                                          className: 'col-span-1',
                                          children: (0, s.jsxs)('div', {
                                            className:
                                              'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                            children: [
                                              (0, s.jsx)('p', { className: 'text-2xl', children: a }),
                                              (0, s.jsxs)('div', {
                                                className: 'flex flex-col gap-y-0.25',
                                                children: [
                                                  (0, s.jsx)('p', { className: 'text-xs capitalize', children: r }),
                                                  (0, s.jsx)('p', {
                                                    className: 'font-semibold capitalize',
                                                    children: l,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      },
                                      t
                                    );
                                  }),
                                }),
                                (0, s.jsx)('div', {
                                  className: 'flex flex-col gap-y-8',
                                  children: u.map((e) => {
                                    let { id: t = '', emoji: a = '', group: l = '', name: n = '', code: d = '' } = e;
                                    return (0, s.jsx)(
                                      'div',
                                      {
                                        className: 'flex flex-col gap-y-4',
                                        children: (0, s.jsx)(r.O, {
                                          id: t,
                                          emoji: a,
                                          group: l,
                                          name: n,
                                          code: d,
                                          codeOnly: !0,
                                        }),
                                      },
                                      t
                                    );
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, s.jsx)(l.w, { title: 'atomic/hooks' }),
          ],
        });
      };
    },
    3719: (e, t, a) => {
      'use strict';
      a.d(t, { C: () => n });
      var s = a(5640),
        r = a(148),
        l = a(5031);
      let n = (e) => {
        let { code: t, lang: a } = e,
          [n, d] = (0, r.useState)('');
        return (
          (0, r.useEffect)(() => {
            (async () => {
              d(await (0, l.Yz)(t, { lang: a, theme: 'github-dark' }));
            })();
          }),
          (0, s.jsx)('div', {
            dangerouslySetInnerHTML: { __html: n },
            className: 'w-full overflow-x-auto bg-neutral-900 p-4',
          })
        );
      };
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
    7297: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/react/hooks',
        function () {
          return a(2791);
        },
      ]);
    },
    7921: (e, t, a) => {
      'use strict';
      a.d(t, { O: () => d });
      var s = a(5640),
        r = a(8809),
        l = a(148),
        n = a(3719);
      let d = (e) => {
        let { id: t = '', emoji: a = '', group: d = '', name: c = '', code: i = '', codeOnly: o = !1 } = e,
          [x, u] = (0, l.useState)(''),
          [h, m] = (0, l.useState)(!0);
        return (
          (0, l.useEffect)(() => {
            u((0, r.A)(window).sanitize(i));
          }, [i]),
          (0, s.jsxs)('div', {
            id: t,
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, s.jsxs)('div', {
                className: 'flex items-center justify-between gap-x-2',
                children: [
                  (0, s.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      (0, s.jsx)('span', { className: 'text-4xl', children: a }),
                      (0, s.jsxs)('div', {
                        children: [
                          (0, s.jsx)('p', { className: 'text-xs capitalize', children: d }),
                          (0, s.jsx)('h3', { className: 'text-xl font-bold capitalize md:text-2xl', children: c }),
                        ],
                      }),
                    ],
                  }),
                  !o &&
                    (0, s.jsx)('button', {
                      type: 'button',
                      className:
                        'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                      onClick: () => m((e) => !e),
                      children: h ? 'Preview' : 'Code',
                    }),
                ],
              }),
              (0, s.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: o
                  ? (0, s.jsx)(n.C, { code: i, lang: 'tsx' })
                  : (0, s.jsx)(s.Fragment, {
                      children: h
                        ? (0, s.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: x } })
                        : (0, s.jsx)(n.C, { code: i, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
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
    e.O(0, [6826, 8809, 5031, 636, 6593, 8792], () => t(7297)), (_N_E = e.O());
  },
]);
