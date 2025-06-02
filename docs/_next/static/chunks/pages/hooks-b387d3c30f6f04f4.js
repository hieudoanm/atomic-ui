(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9804],
  {
    767: (e, t, a) => {
      'use strict';
      a.d(t, { F: () => o });
      var l = a(5640),
        s = a(148);
      let r = () => {
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
      var d = a(1668),
        n = a.n(d),
        c = a(6826),
        i = a.n(c);
      let o = (e) => {
        let { title: t = '', links: a = [], query: s = '', setState: d, disabledSearch: c = !1 } = e,
          { darkMode: o = !1, toggleDarkMode: x } = r();
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(n(), { children: (0, l.jsx)('title', { children: t }) }),
            (0, l.jsx)('nav', {
              className: 'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: (0, l.jsxs)('div', {
                className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
                children: [
                  (0, l.jsxs)('div', {
                    className: 'flex items-center justify-between gap-x-4',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          (0, l.jsxs)(i(), {
                            href: '/',
                            className: 'text-lg font-bold md:text-xl',
                            children: ['⚛️ ', t],
                          }),
                          (0, l.jsx)('div', {
                            className: 'hidden items-center gap-x-2 md:flex',
                            children: a.map((e) => {
                              let { id: t = '', href: a = '', text: s = '' } = e;
                              return (0, l.jsx)(i(), { href: a, className: 'text-sm md:text-base', children: s }, t);
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          !c &&
                            (0, l.jsx)('div', {
                              className: 'hidden grow md:block',
                              children: (0, l.jsx)('input', {
                                type: 'text',
                                placeholder: 'Search',
                                value: s,
                                className:
                                  'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                                onChange: (e) => {
                                  d((t) => ({ ...t, query: e.target.value }));
                                },
                              }),
                            }),
                          (0, l.jsx)(i(), {
                            href: 'https://github.com/hieudoanm/atomic',
                            target: '_blank',
                            className: 'font-semibold',
                            children: 'GitHub',
                          }),
                          (0, l.jsxs)('label', {
                            className:
                              'relative block h-8 w-14 rounded-full bg-neutral-200 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-purple-500 dark:bg-neutral-800 dark:has-checked:bg-purple-700',
                            'aria-label': 'Toggle dark mode',
                            children: [
                              (0, l.jsx)('input', {
                                type: 'checkbox',
                                checked: o,
                                className: 'peer sr-only',
                                onChange: () => {
                                  x();
                                },
                              }),
                              (0, l.jsx)('span', {
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
                    (0, l.jsx)('div', {
                      className: 'block md:hidden',
                      children: (0, l.jsx)('input', {
                        type: 'text',
                        placeholder: 'Search Components',
                        value: s,
                        className:
                          'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                        onChange: (e) => {
                          d((t) => ({ ...t, query: e.target.value }));
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
      a.d(t, { l: () => l });
      let l = [
        { id: 'hooks', href: '/hooks', text: 'hooks' },
        { id: 'icons', href: '/icons', text: 'icons' },
        { id: 'templates', href: '/templates', text: 'templates' },
        { id: 'ui', href: '/ui', text: 'ui' },
      ];
    },
    1501: (e, t, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/hooks',
        function () {
          return a(8079);
        },
      ]);
    },
    5196: (e, t, a) => {
      'use strict';
      a.d(t, { l: () => c });
      var l = a(5640),
        s = a(8809),
        r = a(148),
        d = a(5031);
      let n = (e) => {
          let { code: t, lang: a } = e,
            [s, n] = (0, r.useState)('');
          return (
            (0, r.useEffect)(() => {
              (async () => {
                n(await (0, d.Yz)(t, { lang: a, theme: 'github-dark' }));
              })();
            }),
            (0, l.jsx)('div', {
              dangerouslySetInnerHTML: { __html: s },
              className: 'w-full overflow-x-auto bg-neutral-900 p-4',
            })
          );
        },
        c = (e) => {
          let { id: t = '', emoji: a = '', group: d = '', name: c = '', code: i = '', codeOnly: o = !1 } = e,
            [x, u] = (0, r.useState)(''),
            [h, m] = (0, r.useState)(!0);
          return (
            (0, r.useEffect)(() => {
              u((0, s.A)(window).sanitize(i));
            }, [i]),
            (0, l.jsxs)('div', {
              id: t,
              className: 'flex flex-col gap-y-4 md:gap-y-8',
              children: [
                (0, l.jsxs)('div', {
                  className: 'flex items-center justify-between gap-x-2',
                  children: [
                    (0, l.jsxs)('div', {
                      className: 'flex items-center gap-x-2',
                      children: [
                        (0, l.jsx)('span', { className: 'text-4xl', children: a }),
                        (0, l.jsxs)('div', {
                          children: [
                            (0, l.jsx)('p', { className: 'text-xs capitalize', children: d }),
                            (0, l.jsx)('h3', { className: 'text-xl font-bold md:text-2xl', children: c }),
                          ],
                        }),
                      ],
                    }),
                    !o &&
                      (0, l.jsx)('button', {
                        type: 'button',
                        className:
                          'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                        onClick: () => m((e) => !e),
                        children: h ? 'Preview' : 'Code',
                      }),
                  ],
                }),
                (0, l.jsx)('div', {
                  className:
                    'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: o
                    ? (0, l.jsx)(n, { code: i, lang: 'tsx' })
                    : (0, l.jsx)(l.Fragment, {
                        children: h
                          ? (0, l.jsx)('div', {
                              className: 'w-full p-4 md:p-8',
                              dangerouslySetInnerHTML: { __html: x },
                            })
                          : (0, l.jsx)(n, { code: i, lang: 'html' }),
                      }),
                }),
              ],
            })
          );
        };
    },
    6453: (e, t, a) => {
      'use strict';
      a.d(t, { w: () => s });
      var l = a(5640);
      let s = (e) => {
        let { title: t = '' } = e;
        return (0, l.jsx)('footer', {
          className: 'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
          children: (0, l.jsxs)('div', {
            className: 'container mx-auto px-8 py-4',
            children: ['\xa9 ', new Date().getFullYear(), ' ⚛️ ', (0, l.jsx)('strong', { children: t })],
          }),
        });
      };
    },
    8079: (e, t, a) => {
      'use strict';
      a.r(t), a.d(t, { __N_SSG: () => u, default: () => h });
      var l = a(5640),
        s = a(6453),
        r = a(8604),
        d = a(767),
        n = a(5196),
        c = a(1461),
        i = a(6826),
        o = a.n(i),
        x = a(148),
        u = !0;
      let h = (e) => {
        let { hooks: t = [] } = e,
          [{ query: a = '' }, i] = (0, x.useState)({ query: '' }),
          u = t.filter((e) => {
            let { id: t, name: l } = e;
            return t.toLowerCase().includes(a.toLowerCase()) || l.toLowerCase().includes(a.toLowerCase());
          });
        return (0, l.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, l.jsx)(d.F, {
              links: c.l.filter((e) => {
                let { id: t } = e;
                return 'hooks' !== t;
              }),
              title: 'atomic/hooks',
              query: a,
              setState: i,
            }),
            (0, l.jsx)('div', {
              className: 'grow overflow-auto',
              children: (0, l.jsxs)('main', {
                className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                children: [
                  (0, l.jsx)(r.l, {
                    title: 'atomic/hooks',
                    subtitle: 'Free and Open Source React v19 Hooks',
                    description:
                      'is a free collection of React hooks built with simplicity and reusability in mind. It offers a flexible set of essential utilities to help you manage state, side effects, and async logic more effectively — all with a focus on clean, scalable React code.',
                    features: ['Copy / Paste', 'Pure React Hooks', 'Cross Browser Compatible'],
                  }),
                  (0, l.jsx)('section', {
                    className: 'py-4 md:py-8',
                    children: (0, l.jsx)('div', {
                      className: 'container mx-auto px-8',
                      children: (0, l.jsxs)('div', {
                        className: 'flex flex-col gap-y-4 md:gap-y-8',
                        children: [
                          (0, l.jsxs)('h2', {
                            className: 'text-2xl font-bold',
                            children: [
                              (0, l.jsx)('span', { className: 'capitalize', children: 'Hooks' }),
                              ' (',
                              u.length,
                              ')',
                            ],
                          }),
                          u.length > 0 &&
                            (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)('div', {
                                  className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                                  children: u.map((e) => {
                                    let { id: t = '', emoji: a = '', group: s, name: r = '' } = e;
                                    return (0, l.jsx)(
                                      o(),
                                      {
                                        href: '#'.concat(t),
                                        children: (0, l.jsx)('div', {
                                          className: 'col-span-1',
                                          children: (0, l.jsxs)('div', {
                                            className:
                                              'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                            children: [
                                              (0, l.jsx)('p', { className: 'text-2xl', children: a }),
                                              (0, l.jsxs)('div', {
                                                className: 'flex flex-col gap-y-0.25',
                                                children: [
                                                  (0, l.jsx)('p', { className: 'text-xs capitalize', children: s }),
                                                  (0, l.jsx)('p', {
                                                    className: 'font-semibold capitalize',
                                                    children: r,
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
                                (0, l.jsx)('div', {
                                  className: 'flex flex-col gap-y-8',
                                  children: u.map((e) => {
                                    let { id: t = '', emoji: a = '', group: s = '', name: r = '', code: d = '' } = e;
                                    return (0, l.jsx)(
                                      'div',
                                      {
                                        className: 'flex flex-col gap-y-4',
                                        children: (0, l.jsx)(n.l, {
                                          id: t,
                                          emoji: a,
                                          group: s,
                                          name: r,
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
            (0, l.jsx)(s.w, { title: 'atomic/hooks' }),
          ],
        });
      };
    },
    8604: (e, t, a) => {
      'use strict';
      a.d(t, { l: () => s });
      var l = a(5640);
      let s = (e) => {
        let { title: t = '', subtitle: a = '', description: s = '', features: r = [] } = e;
        return (0, l.jsx)('section', {
          className: 'py-8 md:py-16',
          children: (0, l.jsx)('div', {
            className: 'container mx-auto flex flex-col items-center justify-center gap-y-4 px-8',
            children: (0, l.jsxs)('div', {
              className: 'flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8',
              children: [
                (0, l.jsxs)('header', {
                  className: 'flex flex-col gap-y-1',
                  children: [
                    (0, l.jsxs)('h1', { className: 'text-4xl font-black whitespace-nowrap', children: ['⚛️ ', t] }),
                    (0, l.jsx)('h5', {
                      className: 'text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300',
                      children: a,
                    }),
                  ],
                }),
                (0, l.jsxs)('p', {
                  className: 'text-neutral-900 dark:text-neutral-100',
                  children: [
                    (0, l.jsx)('code', {
                      className:
                        'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                      children: t,
                    }),
                    (0, l.jsx)('span', { children: s }),
                  ],
                }),
                r.length > 0 &&
                  (0, l.jsx)('div', {
                    className:
                      'flex flex-col justify-center gap-x-6 text-sm font-black text-neutral-900 md:flex-row dark:text-neutral-100',
                    children: r.map((e) =>
                      (0, l.jsxs)('p', { className: 'whitespace-nowrap', children: ['\uD83D\uDD2E ', e] }, e)
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
    e.O(0, [6826, 8809, 5031, 636, 6593, 8792], () => t(1501)), (_N_E = e.O());
  },
]);
