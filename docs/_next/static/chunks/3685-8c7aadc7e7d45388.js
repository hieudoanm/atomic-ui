'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3685],
  {
    5695: (e, t, r) => {
      r.d(t, { l: () => b, U: () => f });
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
      var l = r(6826),
        i = r.n(l);
      let n = (e) => {
        let { emoji: t = '', title: r = '', description: s = '' } = e;
        return (0, a.jsx)('section', {
          className: 'py-8 md:py-16',
          children: (0, a.jsxs)('div', {
            className: 'container mx-auto flex flex-col items-center justify-center gap-y-4 px-8',
            children: [
              (0, a.jsxs)('h1', {
                className: 'text-4xl font-black whitespace-nowrap md:text-5xl',
                children: [
                  t,
                  ' ',
                  (0, a.jsx)('span', {
                    className:
                      'bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent dark:from-red-700 dark:via-purple-700 dark:to-blue-700',
                    children: r,
                  }),
                ],
              }),
              (0, a.jsx)('div', {
                className: 'flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8',
                children: (0, a.jsx)('p', { className: 'text-neutral-900 dark:text-neutral-100', children: s }),
              }),
              (0, a.jsx)(i(), {
                href: 'https://github.com/hieudoanm/atomic',
                target: '_blank',
                children: (0, a.jsx)('button', {
                  className:
                    'cursor-pointer rounded-lg border border-neutral-200 bg-transparent px-6 py-3 font-semibold text-neutral-900 dark:border-neutral-800 dark:text-white',
                  children: '\uD83D\uDC19 GitHub',
                }),
              }),
            ],
          }),
        });
      };
      var o = r(148);
      let d = () => {
          let [e, t] = (0, o.useState)(!1);
          return (
            (0, o.useEffect)(() => {
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
        c = (e) => Array.from(new Set(e)),
        u = { assets: '\uD83D\uDDBC️', react: '⚛️', ui: '\uD83C\uDFA8', utils: '\uD83E\uDDF0' },
        p = (e) => {
          let { links: t } = e;
          return (0, a.jsx)('div', {
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
                (0, a.jsx)('div', {
                  className:
                    'invisible absolute left-0 z-50 mt-2 w-48 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                  children: t.map((e) => {
                    let { id: t = '', href: r = '', emoji: s = '', text: l = '' } = e;
                    return (0, a.jsxs)(
                      i(),
                      {
                        href: r,
                        className: 'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                        children: [s, ' ', l],
                      },
                      t
                    );
                  }),
                }),
              ],
            }),
          });
        },
        m = (e) => {
          let { links: t = [] } = e,
            r = c(
              t.map((e) => {
                let { group: t } = e;
                return t;
              })
            ).map((e) => ({
              group: e,
              links: t.filter((t) => {
                let { group: r } = t;
                return e === r;
              }),
            }));
          return (0, a.jsx)('div', {
            className: 'hidden items-center gap-x-2 md:flex md:gap-x-4',
            children: r.map((e) => {
              var t;
              let { group: r, links: s = [] } = e;
              return (0, a.jsxs)(
                'div',
                {
                  className: 'group relative inline-block text-left',
                  children: [
                    (0, a.jsxs)('button', {
                      type: 'button',
                      className: 'truncate text-sm md:text-base',
                      children: [
                        null != (t = u[r]) ? t : '',
                        ' ',
                        (0, a.jsxs)('span', { className: 'hidden lg:inline', children: [r, ' (', s.length, ')'] }),
                      ],
                    }),
                    (0, a.jsx)('div', {
                      className:
                        'invisible absolute right-0 z-50 mt-2 w-48 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                      children: s.map((e) => {
                        let { id: t = '', href: r = '', emoji: s = '', text: l = '' } = e;
                        return (0, a.jsxs)(
                          i(),
                          {
                            href: r,
                            className: 'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
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
          });
        },
        h = (e) => {
          let { emoji: t = '', title: r = '', links: s = [], query: l = '', setState: n, disabledSearch: o = !1 } = e,
            { darkMode: c = !1, toggleDarkMode: u } = d();
          return (0, a.jsx)('nav', {
            className: 'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
            children: (0, a.jsxs)('div', {
              className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
              children: [
                (0, a.jsxs)('div', {
                  className: 'flex items-center justify-between gap-x-4',
                  children: [
                    (0, a.jsx)(p, { links: s }),
                    (0, a.jsx)('div', {
                      className: 'flex items-center gap-x-4',
                      children: (0, a.jsxs)(i(), {
                        href: '/',
                        className: 'truncate text-lg font-bold md:text-xl',
                        children: [
                          t,
                          ' ',
                          (0, a.jsx)('span', {
                            className:
                              'bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent dark:from-red-700 dark:via-purple-700 dark:to-blue-700',
                            children: r,
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsxs)('div', {
                      className: 'flex items-center gap-x-2 md:gap-x-4',
                      children: [
                        (0, a.jsx)(m, { links: s }),
                        (0, a.jsxs)('label', {
                          className:
                            'relative block h-8 w-14 rounded-full bg-neutral-200 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-purple-500 dark:bg-neutral-800 dark:has-checked:bg-purple-700',
                          'aria-label': 'Toggle dark mode',
                          children: [
                            (0, a.jsx)('input', {
                              type: 'checkbox',
                              checked: c,
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
                !o &&
                  (0, a.jsx)('input', {
                    type: 'text',
                    placeholder: 'Search',
                    value: l,
                    className:
                      'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                    onChange: (e) => {
                      n((t) => ({ ...t, query: e.target.value }));
                    },
                  }),
              ],
            }),
          });
        };
      var x = r(1668),
        g = r.n(x);
      let b = [
          {
            group: 'assets',
            id: 'assets-colors',
            emoji: '\uD83C\uDFA8',
            href: '/assets/colors',
            text: 'Colors',
            full: 'Colors',
            description:
              'A vast, beautiful color palette out of the box, carefully crafted by expert designers and suitable for a wide range of different design styles.',
          },
          {
            group: 'assets',
            id: 'assets-emojis',
            emoji: '\uD83D\uDE04',
            href: '/assets/emojis',
            text: 'Emojis',
            full: 'Emojis',
            description:
              'A large collection of emojis to enhance user interfaces, chats, and messaging applications with expressive icons.',
          },
          {
            group: 'assets',
            id: 'assets-fonts',
            emoji: '\uD83D\uDD24',
            href: '/assets/fonts',
            text: 'Fonts',
            full: 'Fonts',
            description:
              'A curated collection of fonts for web and UI projects, supporting various styles, weights, and languages.',
          },
          {
            group: 'assets',
            id: 'assets-icons',
            emoji: '\uD83D\uDDBC️',
            href: '/assets/icons',
            text: 'Icons',
            full: 'SVG Icons',
            description:
              'High-quality scalable vector icons suitable for web and mobile interfaces, ensuring sharp visuals on any screen size.',
          },
          {
            group: 'react',
            id: 'react-contexts',
            emoji: '\uD83D\uDD17',
            href: '/react/contexts',
            text: 'Contexts',
            full: 'React Contexts',
            description:
              'React contexts to efficiently manage and share state or data across deeply nested components without prop drilling.',
          },
          {
            group: 'react',
            id: 'react-hooks',
            emoji: '\uD83E\uDE9D',
            href: '/react/hooks',
            text: 'Hooks',
            full: 'React Hooks',
            description:
              'Reusable React hooks that provide custom functionality to functional components, improving code modularity and reuse.',
          },
          {
            group: 'react',
            id: 'react-virtual-table',
            emoji: '\uD83D\uDCCB',
            href: '/react/virtual-table',
            text: 'Virtual Table',
            full: 'React Virtual Table',
            description:
              'Highly performant virtualized table component that renders only visible rows, ideal for large datasets.',
          },
          {
            group: 'ui',
            id: 'ui-charts',
            emoji: '\uD83D\uDCCA',
            href: '/ui/charts',
            text: 'Charts',
            full: 'UI Charts',
            description:
              'Versatile chart components for visualizing data in various formats including bar, line, pie, and more.',
          },
          {
            group: 'ui',
            id: 'ui-kit',
            emoji: '\uD83C\uDFA8',
            href: '/ui/kit',
            text: 'UI',
            full: 'UIKit',
            description:
              'Comprehensive collection of reusable UI components and design elements for building consistent user interfaces.',
          },
          {
            group: 'ui',
            id: 'ui-blocks',
            emoji: '\uD83E\uDDF1',
            href: '/ui/block',
            text: 'Blocks',
            full: 'UI Blocks',
            description:
              'Modular UI blocks designed for rapid assembly of complex interfaces using pre-built building components.',
          },
          {
            group: 'ui',
            id: 'ui-templates',
            emoji: '\uD83D\uDCDD',
            href: '/ui/templates',
            text: 'Templates',
            full: 'UI Templates',
            description:
              'Pre-designed UI templates that speed up development by providing ready-made layouts and styles.',
          },
          {
            group: 'utils',
            id: 'utils',
            emoji: '\uD83E\uDDF0',
            href: '/utils',
            text: 'Utils',
            full: 'Utilities',
            description:
              'A collection of general utility functions and helpers to simplify common programming tasks across projects.',
          },
        ],
        f = (e) => {
          var t;
          let {
              disabledSearch: r = !1,
              query: l = '',
              setState: i = () => {},
              id: o = '',
              emoji: d = '',
              title: c = '',
              description: u = '',
              children: p = (0, a.jsx)(a.Fragment, {}),
            } = e,
            { emoji: m = d, description: x = u } =
              null !=
              (t = b.find((e) => {
                let { id: t = '' } = e;
                return o === t;
              }))
                ? t
                : { emoji: d, description: u };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(g(), {
                children: [
                  (0, a.jsxs)('title', { children: [m, ' ', c] }),
                  (0, a.jsx)('meta', { name: 'description', content: x || u }),
                ],
              }),
              (0, a.jsxs)('div', {
                className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
                children: [
                  (0, a.jsx)(h, {
                    emoji: ''.concat(m || d),
                    title: c,
                    links: b.filter((e) => {
                      let { id: t = '' } = e;
                      return o !== t;
                    }),
                    disabledSearch: r,
                    query: l,
                    setState: i,
                  }),
                  (0, a.jsxs)('div', {
                    className: 'grow overflow-auto',
                    children: [
                      (0, a.jsxs)('main', {
                        className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                        children: [(0, a.jsx)(n, { emoji: m || d, title: c, description: x || u }), p],
                      }),
                      (0, a.jsx)(s, { title: c }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    6921: (e, t, r) => {
      r.d(t, { C: () => a });
      let a = (e) => {
        navigator.clipboard
          .writeText(e)
          .then(() => {
            alert('Copied to clipboard!');
          })
          .catch((e) => {
            console.error('Failed to copy: ', e);
          });
      };
    },
    8899: (e, t, r) => {
      r.d(t, { V: () => n });
      var a = r(5640),
        s = r(6921),
        l = r(148),
        i = r(2182);
      let n = (e) => {
        let { code: t, lang: r } = e,
          [n, o] = (0, l.useState)('');
        return (
          (0, l.useEffect)(() => {
            (async () => {
              o(await (0, i.Yz)(t, { lang: r, theme: 'github-dark' }));
            })();
          }),
          (0, a.jsx)('button', {
            className: 'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: n },
            onClick: () => (0, s.C)(t),
          })
        );
      };
    },
  },
]);
