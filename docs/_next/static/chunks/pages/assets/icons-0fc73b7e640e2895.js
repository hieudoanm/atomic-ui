(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2636],
  {
    5835: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/assets/icons',
        function () {
          return r(6601);
        },
      ]);
    },
    6601: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { __N_SSG: () => c, default: () => o });
      var s = r(5640),
        a = r(6921),
        l = r(8809),
        n = r(148);
      let i = (e) => {
        let { name: t = '', code: r = '' } = e,
          [i, d] = (0, n.useState)('');
        return (
          (0, n.useEffect)(() => {
            d((0, l.A)(window).sanitize(r));
          }, [r]),
          (0, s.jsx)('button', {
            type: 'button',
            title: t,
            className: 'cursor-pointer',
            onClick: () => {
              (0, a.C)(r);
            },
            children: (0, s.jsx)('div', {
              className:
                'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 p-2 shadow md:p-4 lg:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: (0, s.jsx)('div', {
                className:
                  'h-fit w-fit [&>svg]:h-8 [&>svg]:fill-current [&>svg]:text-neutral-900 dark:[&>svg]:text-neutral-100',
                dangerouslySetInnerHTML: { __html: i },
              }),
            }),
          })
        );
      };
      var d = r(9597),
        c = !0;
      let o = (e) => {
        let { icons: t = [] } = e,
          [{ query: r = '' }, a] = (0, n.useState)({ query: '' }),
          l = t.filter((e) => {
            let { id: t, name: s } = e;
            return t.toLowerCase().includes(r.toLowerCase()) || s.toLowerCase().includes(r.toLowerCase());
          });
        return (0, s.jsx)(d.U, {
          query: r,
          setState: a,
          id: 'assets-icons',
          emoji: '\uD83D\uDDBC️',
          title: 'atomic/icons',
          subtitle: 'Free and Open Source SVG Icons',
          description:
            'is a free collection of carefully crafted SVG icons, designed to enhance modern user interfaces with scalable visuals.',
          features: ['Copy / Paste', 'Pure SVG', 'Custom Colors'],
          children: (0, s.jsx)('section', {
            className: 'py-4 md:py-8',
            children: (0, s.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, s.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, s.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [(0, s.jsx)('span', { className: 'capitalize', children: 'Icons' }), ' (', l.length, ')'],
                  }),
                  l.length > 0 &&
                    (0, s.jsx)('div', {
                      className:
                        'grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 md:gap-8 lg:grid-cols-8 xl:grid-cols-10',
                      children: l.map((e) => {
                        let { id: t = '', name: r = '', code: a } = e;
                        return (0, s.jsxs)(
                          'div',
                          {
                            className: 'col-span-1 flex flex-col gap-y-2',
                            children: [
                              (0, s.jsx)(i, { name: r, code: a }),
                              (0, s.jsx)('p', {
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
        });
      };
    },
    6921: (e, t, r) => {
      'use strict';
      r.d(t, { C: () => s });
      let s = (e) => {
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
    9597: (e, t, r) => {
      'use strict';
      r.d(t, { U: () => m });
      var s = r(5640);
      let a = (e) => {
          let { title: t = '' } = e;
          return (0, s.jsx)('footer', {
            className: 'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
            children: (0, s.jsxs)('div', {
              className: 'container mx-auto px-8 py-4',
              children: ['\xa9 ', new Date().getFullYear(), ' ⚛️ ', (0, s.jsx)('strong', { children: t })],
            }),
          });
        },
        l = (e) => {
          let { title: t = '', subtitle: r = '', description: a = '', features: l = [] } = e;
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
                        children: r,
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
                      (0, s.jsx)('span', { children: a }),
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
      var n = r(148);
      let i = () => {
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
      var d = r(1668),
        c = r.n(d),
        o = r(6826),
        u = r.n(o);
      let x = (e) => {
          let { title: t = '', links: r = [], query: a = '', setState: l, disabledSearch: n = !1 } = e,
            { darkMode: d = !1, toggleDarkMode: o } = i();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(c(), { children: (0, s.jsx)('title', { children: t }) }),
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
                                  r.map((e) => {
                                    let { id: t = '', href: r = '', emoji: a = '', text: l = '' } = e;
                                    return (0, s.jsxs)(
                                      u(),
                                      {
                                        href: r,
                                        className:
                                          'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                                        children: [a, ' ', l],
                                      },
                                      t
                                    );
                                  }),
                                  (0, s.jsx)(u(), {
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
                          children: (0, s.jsx)(u(), {
                            href: '/',
                            className: 'truncate text-lg font-bold md:text-xl',
                            children: t,
                          }),
                        }),
                        (0, s.jsxs)('div', {
                          className: 'flex items-center gap-x-2 md:gap-x-4',
                          children: [
                            (0, s.jsxs)('div', {
                              className: 'hidden items-center gap-x-2 md:flex md:gap-x-4',
                              children: [
                                r.map((e) => {
                                  let { id: t = '', href: r = '', emoji: a = '', text: l = '' } = e;
                                  return (0, s.jsxs)(
                                    u(),
                                    { href: r, className: 'text-sm md:text-base', children: [a, ' ', l] },
                                    t
                                  );
                                }),
                                (0, s.jsx)(u(), {
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
                                  checked: d,
                                  className: 'peer sr-only',
                                  onChange: () => {
                                    o();
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
                    !n &&
                      (0, s.jsx)('input', {
                        type: 'text',
                        placeholder: 'Search',
                        value: a,
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
            query: r = '',
            setState: n = () => {},
            id: i = '',
            emoji: d = '',
            title: c = '',
            subtitle: o = '',
            description: u = '',
            features: m = [],
            children: p = (0, s.jsx)(s.Fragment, {}),
          } = e;
          return (0, s.jsxs)('div', {
            className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
            children: [
              (0, s.jsx)(x, {
                disabledSearch: t,
                links: h.filter((e) => {
                  let { id: t = '' } = e;
                  return i !== t;
                }),
                title: ''.concat(d, ' ').concat(c),
                query: r,
                setState: n,
              }),
              (0, s.jsxs)('div', {
                className: 'grow overflow-auto',
                children: [
                  (0, s.jsxs)('main', {
                    className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                    children: [(0, s.jsx)(l, { title: c, subtitle: o, description: u, features: m }), p],
                  }),
                  (0, s.jsx)(a, { title: c }),
                ],
              }),
            ],
          });
        };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 1190, 636, 6593, 8792], () => t(5835)), (_N_E = e.O());
  },
]);
