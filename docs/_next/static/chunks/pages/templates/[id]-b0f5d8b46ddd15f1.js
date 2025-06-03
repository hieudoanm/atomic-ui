(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3413],
  {
    767: (e, t, a) => {
      'use strict';
      a.d(t, { F: () => o });
      var r = a(5640),
        s = a(148);
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
      var n = a(1668),
        d = a.n(n),
        i = a(6826),
        c = a.n(i);
      let o = (e) => {
        let { title: t = '', links: a = [], query: s = '', setState: n, disabledSearch: i = !1 } = e,
          { darkMode: o = !1, toggleDarkMode: u } = l();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(d(), { children: (0, r.jsx)('title', { children: t }) }),
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
                                a.map((e) => {
                                  let { id: t = '', href: a = '', emoji: s = '', text: l = '' } = e;
                                  return (0, r.jsxs)(
                                    c(),
                                    {
                                      href: a,
                                      className:
                                        'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                      children: [s, ' ', l],
                                    },
                                    t
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
                          children: ['⚛️ ', t],
                        }),
                      }),
                      (0, r.jsxs)('div', {
                        className: 'flex items-center gap-x-2 md:gap-x-4',
                        children: [
                          (0, r.jsxs)('div', {
                            className: 'hidden items-center gap-x-2 md:flex md:gap-x-4',
                            children: [
                              a.map((e) => {
                                let { id: t = '', href: a = '', emoji: s = '', text: l = '' } = e;
                                return (0, r.jsxs)(
                                  c(),
                                  { href: a, className: 'text-sm md:text-base', children: [s, ' ', l] },
                                  t
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
                                  u();
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
    1366: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { __N_SSG: () => c, default: () => o });
      var r = a(5640),
        s = a(7921),
        l = a(6453),
        n = a(8604),
        d = a(767),
        i = a(1461),
        c = !0;
      let o = (e) => {
        let { template: t = { id: '', name: '', code: '' } } = e,
          { id: a = '', name: c = '', code: o = '' } = t;
        return (0, r.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, r.jsx)(d.F, {
              links: i.l.filter((e) => {
                let { id: t } = e;
                return 'templates' !== t;
              }),
              title: 'atomic/templates',
              disabledSearch: !0,
              query: '',
              setState: () => {},
            }),
            (0, r.jsxs)('div', {
              className: 'grow overflow-auto',
              children: [
                (0, r.jsx)('main', {
                  className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                  children: (0, r.jsx)(n.l, {
                    title: 'atomic/templates',
                    subtitle: 'Free and Open Source Web/App Templates',
                    description:
                      'are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages.',
                    features: ['Copy / Paste', 'Pure TailwindCSS', 'UI Components'],
                  }),
                }),
                (0, r.jsx)('section', {
                  className: 'py-4 md:py-8',
                  children: (0, r.jsx)('div', {
                    className: 'container mx-auto px-8',
                    children: (0, r.jsx)('div', {
                      className: 'flex flex-col gap-y-4 md:gap-y-8',
                      children: (0, r.jsx)(s.O, { id: a, emoji: '\uD83D\uDCDD', group: 'Template', name: c, code: o }),
                    }),
                  }),
                }),
                (0, r.jsx)(l.w, { title: 'atomic/templates' }),
              ],
            }),
          ],
        });
      };
    },
    1461: (e, t, a) => {
      'use strict';
      a.d(t, { l: () => r });
      let r = [
        { id: 'components-charts', emoji: '\uD83D\uDCCA', href: '/components/charts', text: 'charts' },
        { id: 'components-ui', emoji: '\uD83C\uDFA8', href: '/components/ui', text: 'ui' },
        { id: 'react-contexts', emoji: '\uD83D\uDD17', href: '/react/contexts', text: 'contexts' },
        { id: 'react-hooks', emoji: '\uD83E\uDE9D', href: '/react/hooks', text: 'hooks' },
        { id: 'visual-emojis', emoji: '\uD83D\uDE04', href: '/visual/emojis', text: 'emojis' },
        { id: 'visual-icons', emoji: '\uD83D\uDDBC️', href: '/visual/icons', text: 'icons' },
        { id: 'templates', emoji: '\uD83D\uDCDD', href: '/templates', text: 'templates' },
      ];
    },
    3105: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/templates/[id]',
        function () {
          return a(1366);
        },
      ]);
    },
    3719: (e, t, a) => {
      'use strict';
      a.d(t, { C: () => n });
      var r = a(5640),
        s = a(148),
        l = a(5031);
      let n = (e) => {
        let { code: t, lang: a } = e,
          [n, d] = (0, s.useState)('');
        return (
          (0, s.useEffect)(() => {
            (async () => {
              d(await (0, l.Yz)(t, { lang: a, theme: 'github-dark' }));
            })();
          }),
          (0, r.jsx)('div', {
            dangerouslySetInnerHTML: { __html: n },
            className: 'w-full overflow-x-auto bg-neutral-900 p-4',
          })
        );
      };
    },
    6453: (e, t, a) => {
      'use strict';
      a.d(t, { w: () => s });
      var r = a(5640);
      let s = (e) => {
        let { title: t = '' } = e;
        return (0, r.jsx)('footer', {
          className: 'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
          children: (0, r.jsxs)('div', {
            className: 'container mx-auto px-8 py-4',
            children: ['\xa9 ', new Date().getFullYear(), ' ⚛️ ', (0, r.jsx)('strong', { children: t })],
          }),
        });
      };
    },
    7921: (e, t, a) => {
      'use strict';
      a.d(t, { O: () => d });
      var r = a(5640),
        s = a(8809),
        l = a(148),
        n = a(3719);
      let d = (e) => {
        let { id: t = '', emoji: a = '', group: d = '', name: i = '', code: c = '', codeOnly: o = !1 } = e,
          [u, x] = (0, l.useState)(''),
          [m, h] = (0, l.useState)(!0);
        return (
          (0, l.useEffect)(() => {
            x((0, s.A)(window).sanitize(c));
          }, [c]),
          (0, r.jsxs)('div', {
            id: t,
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, r.jsxs)('div', {
                className: 'flex items-center justify-between gap-x-2',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      (0, r.jsx)('span', { className: 'text-4xl', children: a }),
                      (0, r.jsxs)('div', {
                        children: [
                          (0, r.jsx)('p', { className: 'text-xs capitalize', children: d }),
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
                      onClick: () => h((e) => !e),
                      children: m ? 'Preview' : 'Code',
                    }),
                ],
              }),
              (0, r.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: o
                  ? (0, r.jsx)(n.C, { code: c, lang: 'tsx' })
                  : (0, r.jsx)(r.Fragment, {
                      children: m
                        ? (0, r.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: u } })
                        : (0, r.jsx)(n.C, { code: c, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    8604: (e, t, a) => {
      'use strict';
      a.d(t, { l: () => s });
      var r = a(5640);
      let s = (e) => {
        let { title: t = '', subtitle: a = '', description: s = '', features: l = [] } = e;
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
                    (0, r.jsxs)('h1', { className: 'text-4xl font-black whitespace-nowrap', children: ['⚛️ ', t] }),
                    (0, r.jsx)('h5', {
                      className: 'text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300',
                      children: a,
                    }),
                  ],
                }),
                (0, r.jsxs)('p', {
                  className: 'text-neutral-900 dark:text-neutral-100',
                  children: [
                    (0, r.jsx)('code', {
                      className:
                        'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                      children: t,
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
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 8809, 5031, 636, 6593, 8792], () => t(3105)), (_N_E = e.O());
  },
]);
