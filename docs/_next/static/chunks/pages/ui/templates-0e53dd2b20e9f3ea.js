(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [118],
  {
    3075: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/ui/templates',
        function () {
          return a(4936);
        },
      ]);
    },
    3286: (e, t, a) => {
      'use strict';
      a.d(t, { U: () => m });
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
        },
        l = (e) => {
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
      var n = a(148);
      let d = () => {
        let [e, t] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
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
      var i = a(1668),
        c = a.n(i),
        o = a(6826),
        x = a.n(o);
      let u = (e) => {
          let { title: t = '', links: a = [], query: s = '', setState: l, disabledSearch: n = !1 } = e,
            { darkMode: i = !1, toggleDarkMode: o } = d();
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(c(), { children: (0, r.jsx)('title', { children: t }) }),
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
                                      x(),
                                      {
                                        href: a,
                                        className:
                                          'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                        children: [s, ' ', l],
                                      },
                                      t
                                    );
                                  }),
                                  (0, r.jsx)(x(), {
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
                          children: (0, r.jsx)(x(), {
                            href: '/',
                            className: 'truncate text-lg font-bold md:text-xl',
                            children: t,
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
                                    x(),
                                    { href: a, className: 'text-sm md:text-base', children: [s, ' ', l] },
                                    t
                                  );
                                }),
                                (0, r.jsx)(x(), {
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
                                  checked: i,
                                  className: 'peer sr-only',
                                  onChange: () => {
                                    o();
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
                    !n &&
                      (0, r.jsx)('input', {
                        type: 'text',
                        placeholder: 'Search',
                        value: s,
                        className:
                          'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                        onChange: (e) => {
                          l((t) => ({ ...t, query: e.target.value }));
                        },
                      }),
                  ],
                }),
              }),
            ],
          });
        },
        h = [
          { id: 'assets-emojis', emoji: '\uD83D\uDE04', href: '/assets/emojis', text: 'emojis' },
          { id: 'assets-icons', emoji: '\uD83D\uDDBC️', href: '/assets/icons', text: 'icons' },
          { id: 'react-contexts', emoji: '\uD83D\uDD17', href: '/react/contexts', text: 'contexts' },
          { id: 'react-hooks', emoji: '\uD83E\uDE9D', href: '/react/hooks', text: 'hooks' },
          { id: 'ui-charts', emoji: '\uD83D\uDCCA', href: '/ui/charts', text: 'charts' },
          { id: 'ui-kit', emoji: '\uD83C\uDFA8', href: '/ui/kit', text: 'kit' },
          { id: 'ui-blocks', emoji: '\uD83E\uDDF1', href: '/ui/block', text: 'block' },
          { id: 'ui-templates', emoji: '\uD83D\uDCDD', href: '/ui/templates', text: 'templates' },
          { id: 'utils', emoji: '\uD83E\uDDF0', href: '/utils', text: 'utils' },
        ],
        m = (e) => {
          let {
            disabledSearch: t = !1,
            query: a = '',
            setState: n = () => {},
            id: d = '',
            emoji: i = '',
            title: c = '',
            subtitle: o = '',
            description: x = '',
            features: m = [],
            children: p = (0, r.jsx)(r.Fragment, {}),
          } = e;
          return (0, r.jsxs)('div', {
            className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
            children: [
              (0, r.jsx)(u, {
                disabledSearch: t,
                links: h.filter((e) => {
                  let { id: t = '' } = e;
                  return d !== t;
                }),
                title: ''.concat(i, ' ').concat(c),
                query: a,
                setState: n,
              }),
              (0, r.jsxs)('div', {
                className: 'grow overflow-auto',
                children: [
                  (0, r.jsxs)('main', {
                    className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                    children: [(0, r.jsx)(l, { title: c, subtitle: o, description: x, features: m }), p],
                  }),
                  (0, r.jsx)(s, { title: c }),
                ],
              }),
            ],
          });
        };
    },
    4936: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { __N_SSG: () => x, default: () => u });
      var r = a(5640),
        s = a(148),
        l = a(8809);
      let n = (e) => {
        let { code: t = '' } = e,
          [a, n] = (0, s.useState)('');
        return (
          (0, s.useEffect)(() => {
            n((0, l.A)(window).sanitize(t));
          }, [t]),
          (0, r.jsx)('div', { dangerouslySetInnerHTML: { __html: a } })
        );
      };
      var d = a(3286),
        i = a(6826),
        c = a.n(i);
      let o = {
        blog: '\uD83D\uDCDD',
        blogs: '\uD83D\uDCDA',
        chat: '\uD83D\uDCAC',
        dashboard: '\uD83D\uDCCA',
        error: '❌',
        landing: '\uD83C\uDFE0',
      };
      var x = !0;
      let u = (e) => {
        let { templates: t = [] } = e,
          [{ query: a = '' }, l] = (0, s.useState)({ query: '' }),
          i = t.filter((e) => {
            let { id: t, name: r } = e;
            return t.toLowerCase().includes(a.toLowerCase()) || r.toLowerCase().includes(a.toLowerCase());
          });
        return (0, r.jsx)(d.U, {
          query: a,
          setState: l,
          id: 'ui-templates',
          emoji: '\uD83D\uDCDD',
          title: 'atomic/templates',
          subtitle: 'Free and Open Source Web/App Templates',
          description:
            'are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages.',
          features: ['Copy / Paste', 'Pure TailwindCSS', 'UI Components'],
          children: (0, r.jsx)('section', {
            className: 'py-4 md:py-8',
            children: (0, r.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, r.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, r.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [
                      (0, r.jsx)('span', { className: 'capitalize', children: 'Templates' }),
                      ' (',
                      i.length,
                      ')',
                    ],
                  }),
                  i.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)('div', {
                          className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-6',
                          children: i.map((e) => {
                            var t;
                            let { id: a = '', name: s = '' } = e;
                            return (0, r.jsx)(
                              c(),
                              {
                                href: '#'.concat(a),
                                children: (0, r.jsx)('div', {
                                  className: 'col-span-1',
                                  children: (0, r.jsxs)('div', {
                                    className:
                                      'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                    children: [
                                      (0, r.jsx)('p', { className: 'text-2xl', children: null != (t = o[a]) ? t : '' }),
                                      (0, r.jsxs)('div', {
                                        className: 'flex flex-col gap-y-0.25',
                                        children: [
                                          (0, r.jsx)('p', { className: 'text-xs capitalize', children: 'Templates' }),
                                          (0, r.jsx)('p', { className: 'font-semibold capitalize', children: s }),
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
                          children: i.map((e) => {
                            let { id: t = '', name: a = '', code: s } = e;
                            return (0, r.jsx)(
                              c(),
                              {
                                href: '/templates/'.concat(t),
                                children: (0, r.jsxs)('div', {
                                  id: t,
                                  className: 'flex flex-col gap-y-4 md:gap-y-8',
                                  children: [
                                    (0, r.jsxs)('h2', {
                                      className: 'text-2xl font-bold capitalize',
                                      children: ['\uD83D\uDCDD ', a],
                                    }),
                                    (0, r.jsx)('div', {
                                      className:
                                        'h-128 overflow-hidden rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                                      children: (0, r.jsx)(n, { code: s }),
                                    }),
                                  ],
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
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 1190, 636, 6593, 8792], () => t(3075)), (_N_E = e.O());
  },
]);
