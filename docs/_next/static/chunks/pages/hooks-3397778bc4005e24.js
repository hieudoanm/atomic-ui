(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9804],
  {
    767: (e, a, l) => {
      'use strict';
      l.d(a, { F: () => o });
      var s = l(5640),
        t = l(148);
      let r = () => {
        let [e, a] = (0, t.useState)(!1);
        return (
          (0, t.useEffect)(() => {
            'dark' === localStorage.getItem('theme') && (document.documentElement.classList.add('dark'), a(!0));
          }, []),
          {
            darkMode: e,
            toggleDarkMode: () => {
              a((e) => {
                let a = !e;
                return (
                  document.documentElement.classList.toggle('dark', a),
                  localStorage.setItem('theme', a ? 'dark' : 'light'),
                  a
                );
              });
            },
          }
        );
      };
      var n = l(1668),
        d = l.n(n),
        c = l(6826),
        i = l.n(c);
      let o = (e) => {
        let { title: a = '', links: l = [], query: t = '', setState: n, disabledSearch: c = !1 } = e,
          { darkMode: o = !1, toggleDarkMode: x } = r();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(d(), { children: (0, s.jsx)('title', { children: a }) }),
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
                          (0, s.jsx)(i(), {
                            href: '/',
                            children: (0, s.jsxs)('h3', { className: 'text-2xl font-bold', children: ['⚛️ ', a] }),
                          }),
                          l.map((e) => {
                            let { id: a = '', href: l = '', text: t = '' } = e;
                            return (0, s.jsx)(i(), { href: l, className: 'text-2xl', children: t }, a);
                          }),
                        ],
                      }),
                      (0, s.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          c &&
                            (0, s.jsx)('div', {
                              className: 'hidden grow md:block',
                              children: (0, s.jsx)('input', {
                                type: 'text',
                                placeholder: 'Search',
                                value: t,
                                className:
                                  'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                                onChange: (e) => {
                                  n((a) => ({ ...a, query: e.target.value }));
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
                  c &&
                    (0, s.jsx)('div', {
                      className: 'block md:hidden',
                      children: (0, s.jsx)('input', {
                        type: 'text',
                        placeholder: 'Search Components',
                        value: t,
                        className:
                          'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                        onChange: (e) => {
                          n((a) => ({ ...a, query: e.target.value }));
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
    1501: (e, a, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/hooks',
        function () {
          return l(8079);
        },
      ]);
    },
    5196: (e, a, l) => {
      'use strict';
      l.d(a, { l: () => c });
      var s = l(5640),
        t = l(8809),
        r = l(148),
        n = l(5031);
      let d = (e) => {
          let { code: a, lang: l } = e,
            [t, d] = (0, r.useState)('');
          return (
            (0, r.useEffect)(() => {
              (async () => {
                d(await (0, n.Yz)(a, { lang: l, theme: 'github-dark' }));
              })();
            }),
            (0, s.jsx)('div', {
              dangerouslySetInnerHTML: { __html: t },
              className: 'w-full overflow-x-auto bg-neutral-900 p-4',
            })
          );
        },
        c = (e) => {
          let { id: a = '', emoji: l = '', group: n = '', name: c = '', code: i = '', codeOnly: o = !1 } = e,
            [x, u] = (0, r.useState)(''),
            [h, m] = (0, r.useState)(!0);
          return (
            (0, r.useEffect)(() => {
              u((0, t.A)(window).sanitize(i));
            }, [i]),
            (0, s.jsxs)('div', {
              id: a,
              className: 'flex flex-col gap-y-4 md:gap-y-8',
              children: [
                (0, s.jsxs)('div', {
                  className: 'flex items-center justify-between gap-x-2',
                  children: [
                    (0, s.jsxs)('div', {
                      className: 'flex items-center gap-x-2',
                      children: [
                        (0, s.jsx)('span', { className: 'text-4xl', children: l }),
                        (0, s.jsxs)('div', {
                          children: [
                            (0, s.jsx)('p', { className: 'text-xs capitalize', children: n }),
                            (0, s.jsx)('h3', { className: 'text-xl font-bold md:text-2xl', children: c }),
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
                    ? (0, s.jsx)(d, { code: i, lang: 'tsx' })
                    : (0, s.jsx)(s.Fragment, {
                        children: h
                          ? (0, s.jsx)('div', {
                              className: 'w-full p-4 md:p-8',
                              dangerouslySetInnerHTML: { __html: x },
                            })
                          : (0, s.jsx)(d, { code: i, lang: 'html' }),
                      }),
                }),
              ],
            })
          );
        };
    },
    6453: (e, a, l) => {
      'use strict';
      l.d(a, { w: () => t });
      var s = l(5640);
      let t = (e) => {
        let { title: a = '' } = e;
        return (0, s.jsx)('footer', {
          className: 'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
          children: (0, s.jsxs)('div', {
            className: 'container mx-auto px-8 py-4',
            children: ['\xa9 ', new Date().getFullYear(), ' ⚛️ ', (0, s.jsx)('strong', { children: a })],
          }),
        });
      };
    },
    8079: (e, a, l) => {
      'use strict';
      l.r(a), l.d(a, { __N_SSG: () => x, default: () => u });
      var s = l(5640),
        t = l(6453),
        r = l(8604),
        n = l(767),
        d = l(5196),
        c = l(6826),
        i = l.n(c),
        o = l(148),
        x = !0;
      let u = (e) => {
        let { hooks: a = [] } = e,
          [{ query: l = '' }, c] = (0, o.useState)({ query: '' }),
          x = a.filter((e) => {
            let { id: a, name: s } = e;
            return a.toLowerCase().includes(l.toLowerCase()) || s.toLowerCase().includes(l.toLowerCase());
          });
        return (0, s.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, s.jsx)(n.F, {
              links: [{ id: 'ui', href: '/ui', text: 'ui' }],
              title: 'atomic/hooks',
              query: l,
              setState: c,
            }),
            (0, s.jsx)('div', {
              className: 'grow overflow-auto',
              children: (0, s.jsxs)('main', {
                className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                children: [
                  (0, s.jsx)(r.l, {
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
                              x.length,
                              ')',
                            ],
                          }),
                          x.length > 0 &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)('div', {
                                  className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                                  children: x.map((e) => {
                                    let { id: a = '', emoji: l = '', group: t, name: r = '' } = e;
                                    return (0, s.jsx)(
                                      i(),
                                      {
                                        href: '#'.concat(a),
                                        children: (0, s.jsx)('div', {
                                          className: 'col-span-1',
                                          children: (0, s.jsxs)('div', {
                                            className:
                                              'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                            children: [
                                              (0, s.jsx)('p', { className: 'text-2xl', children: l }),
                                              (0, s.jsxs)('div', {
                                                className: 'flex flex-col gap-y-0.25',
                                                children: [
                                                  (0, s.jsx)('p', { className: 'text-xs capitalize', children: t }),
                                                  (0, s.jsx)('p', {
                                                    className: 'font-semibold capitalize',
                                                    children: r,
                                                  }),
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
                                (0, s.jsx)('div', {
                                  className: 'flex flex-col gap-y-8',
                                  children: x.map((e) => {
                                    let { id: a = '', emoji: l = '', group: t = '', name: r = '', code: n = '' } = e;
                                    return (0, s.jsx)(
                                      'div',
                                      {
                                        className: 'flex flex-col gap-y-4',
                                        children: (0, s.jsx)(d.l, {
                                          id: a,
                                          emoji: l,
                                          group: t,
                                          name: r,
                                          code: n,
                                          codeOnly: !0,
                                        }),
                                      },
                                      a
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
            (0, s.jsx)(t.w, { title: 'atomic/hooks' }),
          ],
        });
      };
    },
    8604: (e, a, l) => {
      'use strict';
      l.d(a, { l: () => t });
      var s = l(5640);
      let t = (e) => {
        let { title: a = '', subtitle: l = '', description: t = '', features: r = [] } = e;
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
                    (0, s.jsxs)('h1', { className: 'text-4xl font-black whitespace-nowrap', children: ['⚛️ ', a] }),
                    (0, s.jsx)('h5', {
                      className: 'text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300',
                      children: l,
                    }),
                  ],
                }),
                (0, s.jsxs)('p', {
                  className: 'text-neutral-900 dark:text-neutral-100',
                  children: [
                    (0, s.jsx)('code', {
                      className:
                        'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                      children: a,
                    }),
                    (0, s.jsx)('span', { children: t }),
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
    var a = (a) => e((e.s = a));
    e.O(0, [6826, 2959, 636, 6593, 8792], () => a(1501)), (_N_E = e.O());
  },
]);
