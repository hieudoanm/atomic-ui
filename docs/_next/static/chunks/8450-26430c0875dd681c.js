'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8450],
  {
    767: (e, t, r) => {
      r.d(t, { F: () => o });
      var a = r(5640),
        l = r(148);
      let s = () => {
        let [e, t] = (0, l.useState)(!0);
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
      var n = r(1668),
        d = r.n(n),
        i = r(6826),
        c = r.n(i);
      let o = (e) => {
        let { title: t = '', links: r = [], query: l = '', setState: n, disabledSearch: i = !1 } = e,
          { darkMode: o = !1, toggleDarkMode: x } = s();
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
                                  let { id: t = '', href: r = '', emoji: l = '', text: s = '' } = e;
                                  return (0, a.jsxs)(
                                    c(),
                                    {
                                      href: r,
                                      className:
                                        'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                      children: [l, ' ', s],
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
                        children: (0, a.jsx)(c(), {
                          href: '/',
                          className: 'truncate text-lg font-bold md:text-xl',
                          children: t,
                        }),
                      }),
                      (0, a.jsxs)('div', {
                        className: 'flex items-center gap-x-2 md:gap-x-4',
                        children: [
                          (0, a.jsxs)('div', {
                            className: 'hidden items-center gap-x-2 md:flex md:gap-x-4',
                            children: [
                              r.map((e) => {
                                let { id: t = '', href: r = '', emoji: l = '', text: s = '' } = e;
                                return (0, a.jsxs)(
                                  c(),
                                  { href: r, className: 'text-sm md:text-base', children: [l, ' ', s] },
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
                                  x();
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
                      value: l,
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
      r.d(t, { l: () => a });
      let a = [
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
    3719: (e, t, r) => {
      r.d(t, { C: () => n });
      var a = r(5640),
        l = r(148),
        s = r(5031);
      let n = (e) => {
        let { code: t, lang: r } = e,
          [n, d] = (0, l.useState)('');
        return (
          (0, l.useEffect)(() => {
            (async () => {
              d(await (0, s.Yz)(t, { lang: r, theme: 'github-dark' }));
            })();
          }),
          (0, a.jsx)('div', {
            dangerouslySetInnerHTML: { __html: n },
            className: 'w-full overflow-x-auto bg-neutral-900 p-4',
          })
        );
      };
    },
    6453: (e, t, r) => {
      r.d(t, { w: () => l });
      var a = r(5640);
      let l = (e) => {
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
    7921: (e, t, r) => {
      r.d(t, { O: () => d });
      var a = r(5640),
        l = r(8809),
        s = r(148),
        n = r(3719);
      let d = (e) => {
        let { id: t = '', emoji: r = '', group: d = '', name: i = '', code: c = '', codeOnly: o = !1 } = e,
          [x, u] = (0, s.useState)(''),
          [h, m] = (0, s.useState)(!0);
        return (
          (0, s.useEffect)(() => {
            u((0, l.A)(window).sanitize(c));
          }, [c]),
          (0, a.jsxs)('div', {
            id: t,
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, a.jsxs)('div', {
                className: 'flex items-center justify-between gap-x-2',
                children: [
                  (0, a.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      (0, a.jsx)('span', { className: 'text-4xl', children: r }),
                      (0, a.jsxs)('div', {
                        children: [
                          (0, a.jsx)('p', { className: 'text-xs capitalize', children: d }),
                          (0, a.jsx)('h3', { className: 'text-xl font-bold capitalize md:text-2xl', children: i }),
                        ],
                      }),
                    ],
                  }),
                  !o &&
                    (0, a.jsx)('button', {
                      type: 'button',
                      className:
                        'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                      onClick: () => m((e) => !e),
                      children: h ? 'Preview' : 'Code',
                    }),
                ],
              }),
              (0, a.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: o
                  ? (0, a.jsx)(n.C, { code: c, lang: 'tsx' })
                  : (0, a.jsx)(a.Fragment, {
                      children: h
                        ? (0, a.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: x } })
                        : (0, a.jsx)(n.C, { code: c, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    8546: (e, t, r) => {
      r.d(t, { U: () => i });
      var a = r(5640),
        l = r(6453),
        s = r(8604),
        n = r(767),
        d = r(1461);
      let i = (e) => {
        let {
          query: t = '',
          setState: r = () => {},
          id: i = '',
          emoji: c = '',
          title: o = '',
          subtitle: x = '',
          description: u = '',
          features: h = [],
          children: m = (0, a.jsx)(a.Fragment, {}),
        } = e;
        return (0, a.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, a.jsx)(n.F, {
              links: d.l.filter((e) => {
                let { id: t = '' } = e;
                return i !== t;
              }),
              title: ''.concat(c, ' ').concat(o),
              query: t,
              setState: r,
            }),
            (0, a.jsxs)('div', {
              className: 'grow overflow-auto',
              children: [
                (0, a.jsxs)('main', {
                  className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                  children: [(0, a.jsx)(s.l, { title: o, subtitle: x, description: u, features: h }), m],
                }),
                (0, a.jsx)(l.w, { title: o }),
              ],
            }),
          ],
        });
      };
    },
    8604: (e, t, r) => {
      r.d(t, { l: () => l });
      var a = r(5640);
      let l = (e) => {
        let { title: t = '', subtitle: r = '', description: l = '', features: s = [] } = e;
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
                    (0, a.jsx)('span', { children: l }),
                  ],
                }),
                s.length > 0 &&
                  (0, a.jsx)('div', {
                    className:
                      'flex flex-col justify-center gap-x-6 text-sm font-black text-neutral-900 md:flex-row dark:text-neutral-100',
                    children: s.map((e) =>
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
]);
