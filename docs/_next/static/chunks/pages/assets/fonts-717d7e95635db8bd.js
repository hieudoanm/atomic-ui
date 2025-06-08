(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2912],
  {
    1471: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/assets/fonts',
        function () {
          return a(4168);
        },
      ]);
    },
    1802: (e) => {
      e.exports = {
        style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: 'normal' },
        className: '__className_6aded3',
      };
    },
    4128: (e) => {
      e.exports = {
        style: { fontFamily: "'Merriweather', 'Merriweather Fallback'", fontWeight: 400, fontStyle: 'normal' },
        className: '__className_c3821c',
      };
    },
    4168: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { default: () => S });
      var s = a(5640),
        r = a(5695),
        l = a(7225),
        o = a.n(l),
        n = a(1802),
        i = a.n(n),
        c = a(5141),
        d = a.n(c),
        u = a(4614),
        m = a.n(u),
        p = a(4128),
        x = a.n(p),
        h = a(4613),
        f = a.n(h),
        b = a(7834),
        g = a.n(b),
        N = a(7547),
        y = a.n(N),
        j = a(6416),
        k = a.n(j),
        v = a(7181),
        w = a.n(v),
        _ = a(148);
      let F = [
          { id: 'fira-code', name: 'Fira Code', className: o().className },
          { id: 'inter', name: 'Inter', className: i().className },
          { id: 'jetbrains-mono', name: 'JetBrains Mono', className: d().className },
          { id: 'lato', name: 'Lato', className: m().className },
          { id: 'merriweather', name: 'Merriweather', className: x().className },
          { id: 'open-sans', name: 'Open Sans', className: f().className },
          { id: 'roboto', name: 'Roboto', className: g().className },
          { id: 'roboto-mono', name: 'Roboto Mono', className: y().className },
          { id: 'source-code-pro', name: 'SourceCode Pro', className: k().className },
          { id: 'ubunto-mono', name: 'Ubuntu Mono', className: w().className },
        ],
        S = () => {
          let [{ query: e = '' }, t] = (0, _.useState)({ query: '' }),
            a = F.filter((t) => {
              let { id: a, name: s } = t;
              return a.toLowerCase().includes(e.toLowerCase()) || s.toLowerCase().includes(e.toLowerCase());
            });
          return (0, s.jsx)(r.U, {
            query: e,
            setState: t,
            id: 'assets-fonts',
            emoji: '\uD83D\uDD24',
            title: 'atomic/fonts',
            description: '',
            children: (0, s.jsx)('section', {
              className: 'py-8 md:py-16',
              children: (0, s.jsx)('div', {
                className: 'container mx-auto px-8',
                children: (0, s.jsxs)('div', {
                  className: 'flex flex-col gap-y-4 md:gap-y-8',
                  children: [
                    (0, s.jsxs)('h3', {
                      className: 'text-2xl font-bold md:text-3xl',
                      children: [
                        (0, s.jsx)('span', { className: 'capitalize', children: 'Fonts' }),
                        ' (',
                        a.length,
                        ')',
                      ],
                    }),
                    F.map((e) => {
                      let { id: t, name: a, className: r } = e;
                      return (0, s.jsxs)(
                        'div',
                        {
                          className: 'flex flex-col gap-y-4 md:gap-y-8',
                          children: [
                            (0, s.jsx)('h3', { className: 'text-xl font-semibold md:text-2xl', children: a }),
                            (0, s.jsx)('div', {
                              className:
                                'overflow-hidden rounded-lg border border-neutral-200 p-4 text-xl shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                              children: (0, s.jsx)('div', {
                                className: 'overflow-y-auto whitespace-nowrap',
                                children: (0, s.jsx)('p', {
                                  className: r,
                                  children: 'The quick brown fox jumps over the lazy dog.',
                                }),
                              }),
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  ],
                }),
              }),
            }),
          });
        };
    },
    4613: (e) => {
      e.exports = {
        style: { fontFamily: "'Open Sans', 'Open Sans Fallback'", fontStyle: 'normal' },
        className: '__className_cac879',
      };
    },
    4614: (e) => {
      e.exports = {
        style: { fontFamily: "'Lato', 'Lato Fallback'", fontWeight: 400, fontStyle: 'normal' },
        className: '__className_f0d48c',
      };
    },
    5141: (e) => {
      e.exports = {
        style: { fontFamily: "'JetBrains Mono', 'JetBrains Mono Fallback'", fontStyle: 'normal' },
        className: '__className_761fe2',
      };
    },
    5695: (e, t, a) => {
      'use strict';
      a.d(t, { l: () => b, U: () => g });
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
      var l = a(6826),
        o = a.n(l);
      let n = (e) => {
        let { emoji: t = '', title: a = '', description: r = '' } = e;
        return (0, s.jsx)('section', {
          className: 'py-8 md:py-16',
          children: (0, s.jsxs)('div', {
            className: 'container mx-auto flex flex-col items-center justify-center gap-y-4 px-8',
            children: [
              (0, s.jsxs)('h1', {
                className: 'text-4xl font-black whitespace-nowrap md:text-5xl',
                children: [
                  t,
                  ' ',
                  (0, s.jsx)('span', {
                    className:
                      'bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent dark:from-red-700 dark:via-purple-700 dark:to-blue-700',
                    children: a,
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className: 'flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8',
                children: (0, s.jsx)('p', { className: 'text-neutral-900 dark:text-neutral-100', children: r }),
              }),
              (0, s.jsx)(o(), {
                href: 'https://github.com/hieudoanm/atomic',
                target: '_blank',
                children: (0, s.jsx)('button', {
                  className:
                    'cursor-pointer rounded-lg border border-neutral-200 bg-transparent px-6 py-3 font-semibold text-neutral-900 dark:border-neutral-800 dark:text-white',
                  children: '\uD83D\uDC19 GitHub',
                }),
              }),
            ],
          }),
        });
      };
      var i = a(148);
      let c = () => {
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
        d = (e) => Array.from(new Set(e)),
        u = { assets: '\uD83D\uDDBC️', react: '⚛️', ui: '\uD83C\uDFA8', utils: '\uD83E\uDDF0' },
        m = (e) => {
          let { links: t } = e;
          return (0, s.jsx)('div', {
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
                (0, s.jsx)('div', {
                  className:
                    'invisible absolute left-0 z-50 mt-2 w-48 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                  children: t.map((e) => {
                    let { id: t = '', href: a = '', emoji: r = '', text: l = '' } = e;
                    return (0, s.jsxs)(
                      o(),
                      {
                        href: a,
                        className: 'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                        children: [r, ' ', l],
                      },
                      t
                    );
                  }),
                }),
              ],
            }),
          });
        },
        p = (e) => {
          let { links: t = [] } = e,
            a = d(
              t.map((e) => {
                let { group: t } = e;
                return t;
              })
            ).map((e) => ({
              group: e,
              links: t.filter((t) => {
                let { group: a } = t;
                return e === a;
              }),
            }));
          return (0, s.jsx)('div', {
            className: 'hidden items-center gap-x-2 md:flex md:gap-x-4',
            children: a.map((e) => {
              var t;
              let { group: a, links: r = [] } = e;
              return (0, s.jsxs)(
                'div',
                {
                  className: 'group relative inline-block text-left',
                  children: [
                    (0, s.jsxs)('button', {
                      type: 'button',
                      className: 'truncate text-sm md:text-base',
                      children: [
                        null != (t = u[a]) ? t : '',
                        ' ',
                        (0, s.jsxs)('span', { className: 'hidden lg:inline', children: [a, ' (', r.length, ')'] }),
                      ],
                    }),
                    (0, s.jsx)('div', {
                      className:
                        'invisible absolute right-0 z-50 mt-2 w-48 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                      children: r.map((e) => {
                        let { id: t = '', href: a = '', emoji: r = '', text: l = '' } = e;
                        return (0, s.jsxs)(
                          o(),
                          {
                            href: a,
                            className: 'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                            children: [r, ' ', l],
                          },
                          t
                        );
                      }),
                    }),
                  ],
                },
                a
              );
            }),
          });
        },
        x = (e) => {
          let { emoji: t = '', title: a = '', links: r = [], query: l = '', setState: n, disabledSearch: i = !1 } = e,
            { darkMode: d = !1, toggleDarkMode: u } = c();
          return (0, s.jsx)('nav', {
            className: 'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
            children: (0, s.jsxs)('div', {
              className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
              children: [
                (0, s.jsxs)('div', {
                  className: 'flex items-center justify-between gap-x-4',
                  children: [
                    (0, s.jsx)(m, { links: r }),
                    (0, s.jsx)('div', {
                      className: 'flex items-center gap-x-4',
                      children: (0, s.jsxs)(o(), {
                        href: '/',
                        className: 'truncate text-lg font-bold md:text-xl',
                        children: [
                          t,
                          ' ',
                          (0, s.jsx)('span', {
                            className:
                              'bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent dark:from-red-700 dark:via-purple-700 dark:to-blue-700',
                            children: a,
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsxs)('div', {
                      className: 'flex items-center gap-x-2 md:gap-x-4',
                      children: [
                        (0, s.jsx)(p, { links: r }),
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
                !i &&
                  (0, s.jsx)('input', {
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
      var h = a(1668),
        f = a.n(h);
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
        g = (e) => {
          var t;
          let {
              disabledSearch: a = !1,
              query: l = '',
              setState: o = () => {},
              id: i = '',
              emoji: c = '',
              title: d = '',
              description: u = '',
              children: m = (0, s.jsx)(s.Fragment, {}),
            } = e,
            { emoji: p = c, description: h = u } =
              null !=
              (t = b.find((e) => {
                let { id: t = '' } = e;
                return i === t;
              }))
                ? t
                : { emoji: c, description: u };
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)(f(), {
                children: [
                  (0, s.jsxs)('title', { children: [p, ' ', d] }),
                  (0, s.jsx)('meta', { name: 'description', content: h || u }),
                ],
              }),
              (0, s.jsxs)('div', {
                className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
                children: [
                  (0, s.jsx)(x, {
                    emoji: ''.concat(p || c),
                    title: d,
                    links: b.filter((e) => {
                      let { id: t = '' } = e;
                      return i !== t;
                    }),
                    disabledSearch: a,
                    query: l,
                    setState: o,
                  }),
                  (0, s.jsxs)('div', {
                    className: 'grow overflow-auto',
                    children: [
                      (0, s.jsxs)('main', {
                        className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                        children: [(0, s.jsx)(n, { emoji: p || c, title: d, description: h || u }), m],
                      }),
                      (0, s.jsx)(r, { title: d }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    6416: (e) => {
      e.exports = {
        style: { fontFamily: "'Source Code Pro', 'Source Code Pro Fallback'", fontStyle: 'normal' },
        className: '__className_3aa5df',
      };
    },
    7181: (e) => {
      e.exports = {
        style: { fontFamily: "'Ubuntu Mono', 'Ubuntu Mono Fallback'", fontWeight: 400, fontStyle: 'normal' },
        className: '__className_bfcc43',
      };
    },
    7225: (e) => {
      e.exports = {
        style: { fontFamily: "'Fira Code', 'Fira Code Fallback'", fontStyle: 'normal' },
        className: '__className_a16fab',
      };
    },
    7547: (e) => {
      e.exports = {
        style: { fontFamily: "'Roboto Mono', 'Roboto Mono Fallback'", fontStyle: 'normal' },
        className: '__className_d81485',
      };
    },
    7834: (e) => {
      e.exports = {
        style: { fontFamily: "'Roboto', 'Roboto Fallback'", fontStyle: 'normal' },
        className: '__className_a747f6',
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 7244, 636, 6593, 8792], () => t(1471)), (_N_E = e.O());
  },
]);
