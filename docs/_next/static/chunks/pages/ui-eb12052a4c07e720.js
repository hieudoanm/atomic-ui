(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6038],
  {
    767: (e, a, s) => {
      'use strict';
      s.d(a, { F: () => o });
      var t = s(5640),
        l = s(148);
      let r = () => {
        let [e, a] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
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
      var d = s(1668),
        n = s.n(d),
        i = s(6826),
        c = s.n(i);
      let o = (e) => {
        let { title: a = '', links: s = [], query: l = '', setState: d, disabledSearch: i = !1 } = e,
          { darkMode: o = !1, toggleDarkMode: x } = r();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n(), { children: (0, t.jsx)('title', { children: a }) }),
            (0, t.jsx)('nav', {
              className: 'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: (0, t.jsxs)('div', {
                className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
                children: [
                  (0, t.jsxs)('div', {
                    className: 'flex items-center justify-between gap-x-4',
                    children: [
                      (0, t.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          (0, t.jsxs)(c(), {
                            href: '/',
                            className: 'text-lg font-bold md:text-xl',
                            children: ['⚛️ ', a],
                          }),
                          (0, t.jsx)('div', {
                            className: 'hidden items-center gap-x-2 md:flex',
                            children: s.map((e) => {
                              let { id: a = '', href: s = '', text: l = '' } = e;
                              return (0, t.jsx)(c(), { href: s, className: 'text-sm md:text-base', children: l }, a);
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          !i &&
                            (0, t.jsx)('div', {
                              className: 'hidden grow md:block',
                              children: (0, t.jsx)('input', {
                                type: 'text',
                                placeholder: 'Search',
                                value: l,
                                className:
                                  'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                                onChange: (e) => {
                                  d((a) => ({ ...a, query: e.target.value }));
                                },
                              }),
                            }),
                          (0, t.jsx)(c(), {
                            href: 'https://github.com/hieudoanm/atomic',
                            target: '_blank',
                            className: 'font-semibold',
                            children: 'GitHub',
                          }),
                          (0, t.jsxs)('label', {
                            className:
                              'relative block h-8 w-14 rounded-full bg-neutral-200 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-purple-500 dark:bg-neutral-800 dark:has-checked:bg-purple-700',
                            'aria-label': 'Toggle dark mode',
                            children: [
                              (0, t.jsx)('input', {
                                type: 'checkbox',
                                checked: o,
                                className: 'peer sr-only',
                                onChange: () => {
                                  x();
                                },
                              }),
                              (0, t.jsx)('span', {
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
                    (0, t.jsx)('div', {
                      className: 'block md:hidden',
                      children: (0, t.jsx)('input', {
                        type: 'text',
                        placeholder: 'Search Components',
                        value: l,
                        className:
                          'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                        onChange: (e) => {
                          d((a) => ({ ...a, query: e.target.value }));
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
    1461: (e, a, s) => {
      'use strict';
      s.d(a, { l: () => t });
      let t = [
        { id: 'charts', href: '/charts', text: 'charts' },
        { id: 'hooks', href: '/hooks', text: 'hooks' },
        { id: 'icons', href: '/icons', text: 'icons' },
        { id: 'templates', href: '/templates', text: 'templates' },
        { id: 'ui', href: '/ui', text: 'ui' },
      ];
    },
    3719: (e, a, s) => {
      'use strict';
      s.d(a, { C: () => d });
      var t = s(5640),
        l = s(148),
        r = s(5031);
      let d = (e) => {
        let { code: a, lang: s } = e,
          [d, n] = (0, l.useState)('');
        return (
          (0, l.useEffect)(() => {
            (async () => {
              n(await (0, r.Yz)(a, { lang: s, theme: 'github-dark' }));
            })();
          }),
          (0, t.jsx)('div', {
            dangerouslySetInnerHTML: { __html: d },
            className: 'w-full overflow-x-auto bg-neutral-900 p-4',
          })
        );
      };
    },
    6453: (e, a, s) => {
      'use strict';
      s.d(a, { w: () => l });
      var t = s(5640);
      let l = (e) => {
        let { title: a = '' } = e;
        return (0, t.jsx)('footer', {
          className: 'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
          children: (0, t.jsxs)('div', {
            className: 'container mx-auto px-8 py-4',
            children: ['\xa9 ', new Date().getFullYear(), ' ⚛️ ', (0, t.jsx)('strong', { children: a })],
          }),
        });
      };
    },
    6971: (e, a, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/ui',
        function () {
          return s(8797);
        },
      ]);
    },
    7921: (e, a, s) => {
      'use strict';
      s.d(a, { O: () => n });
      var t = s(5640),
        l = s(8809),
        r = s(148),
        d = s(3719);
      let n = (e) => {
        let { id: a = '', emoji: s = '', group: n = '', name: i = '', code: c = '', codeOnly: o = !1 } = e,
          [x, u] = (0, r.useState)(''),
          [h, m] = (0, r.useState)(!0);
        return (
          (0, r.useEffect)(() => {
            u((0, l.A)(window).sanitize(c));
          }, [c]),
          (0, t.jsxs)('div', {
            id: a,
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, t.jsxs)('div', {
                className: 'flex items-center justify-between gap-x-2',
                children: [
                  (0, t.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      (0, t.jsx)('span', { className: 'text-4xl', children: s }),
                      (0, t.jsxs)('div', {
                        children: [
                          (0, t.jsx)('p', { className: 'text-xs capitalize', children: n }),
                          (0, t.jsx)('h3', { className: 'text-xl font-bold capitalize md:text-2xl', children: i }),
                        ],
                      }),
                    ],
                  }),
                  !o &&
                    (0, t.jsx)('button', {
                      type: 'button',
                      className:
                        'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                      onClick: () => m((e) => !e),
                      children: h ? 'Preview' : 'Code',
                    }),
                ],
              }),
              (0, t.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: o
                  ? (0, t.jsx)(d.C, { code: c, lang: 'tsx' })
                  : (0, t.jsx)(t.Fragment, {
                      children: h
                        ? (0, t.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: x } })
                        : (0, t.jsx)(d.C, { code: c, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    8604: (e, a, s) => {
      'use strict';
      s.d(a, { l: () => l });
      var t = s(5640);
      let l = (e) => {
        let { title: a = '', subtitle: s = '', description: l = '', features: r = [] } = e;
        return (0, t.jsx)('section', {
          className: 'py-8 md:py-16',
          children: (0, t.jsx)('div', {
            className: 'container mx-auto flex flex-col items-center justify-center gap-y-4 px-8',
            children: (0, t.jsxs)('div', {
              className: 'flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8',
              children: [
                (0, t.jsxs)('header', {
                  className: 'flex flex-col gap-y-1',
                  children: [
                    (0, t.jsxs)('h1', { className: 'text-4xl font-black whitespace-nowrap', children: ['⚛️ ', a] }),
                    (0, t.jsx)('h5', {
                      className: 'text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300',
                      children: s,
                    }),
                  ],
                }),
                (0, t.jsxs)('p', {
                  className: 'text-neutral-900 dark:text-neutral-100',
                  children: [
                    (0, t.jsx)('code', {
                      className:
                        'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                      children: a,
                    }),
                    (0, t.jsx)('span', { children: l }),
                  ],
                }),
                r.length > 0 &&
                  (0, t.jsx)('div', {
                    className:
                      'flex flex-col justify-center gap-x-6 text-sm font-black text-neutral-900 md:flex-row dark:text-neutral-100',
                    children: r.map((e) =>
                      (0, t.jsxs)('p', { className: 'whitespace-nowrap', children: ['\uD83D\uDD2E ', e] }, e)
                    ),
                  }),
              ],
            }),
          }),
        });
      };
    },
    8797: (e, a, s) => {
      'use strict';
      s.r(a), s.d(a, { __N_SSG: () => u, default: () => h });
      var t = s(5640),
        l = s(7921),
        r = s(6453),
        d = s(8604),
        n = s(767),
        i = s(1461),
        c = s(6826),
        o = s.n(c),
        x = s(148),
        u = !0;
      let h = (e) => {
        let { components: a = [] } = e,
          [{ query: s = '' }, c] = (0, x.useState)({ query: '' }),
          u = a.filter((e) => {
            let { id: a, name: t } = e;
            return a.toLowerCase().includes(s.toLowerCase()) || t.toLowerCase().includes(s.toLowerCase());
          });
        return (0, t.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, t.jsx)(n.F, {
              links: i.l.filter((e) => {
                let { id: a } = e;
                return 'ui' !== a;
              }),
              title: 'atomic/ui',
              query: s,
              setState: c,
            }),
            (0, t.jsxs)('div', {
              className: 'grow overflow-auto',
              children: [
                (0, t.jsxs)('main', {
                  className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                  children: [
                    (0, t.jsx)(d.l, {
                      title: 'atomic/ui',
                      subtitle: 'Free and Open Source TailwindCSS v4 Components',
                      description:
                        'is a free collection of Tailwind CSS components designed with atomic design principles in mind. It offers a flexible set of 44 free, customizable components with built-in dark mode support to help you quickly build modern, responsive UI.',
                      features: ['Copy / Paste', 'Pure TailwindCSS', 'Atoms / Molecules / Organisms'],
                    }),
                    (0, t.jsx)('section', {
                      className: 'py-4 md:py-8',
                      children: (0, t.jsx)('div', {
                        className: 'container mx-auto px-8',
                        children: (0, t.jsxs)('div', {
                          className: 'flex flex-col gap-y-4 md:gap-y-8',
                          children: [
                            (0, t.jsxs)('h2', {
                              className: 'text-2xl font-bold',
                              children: [
                                (0, t.jsx)('span', { className: 'capitalize', children: 'Components' }),
                                ' (',
                                u.length,
                                ')',
                              ],
                            }),
                            u.length > 0 &&
                              (0, t.jsxs)(t.Fragment, {
                                children: [
                                  (0, t.jsx)('div', {
                                    className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                                    children: u.map((e) => {
                                      let { id: a = '', emoji: s = '', group: l, name: r = '' } = e;
                                      return (0, t.jsx)(
                                        o(),
                                        {
                                          href: '#'.concat(a),
                                          children: (0, t.jsx)('div', {
                                            className: 'col-span-1',
                                            children: (0, t.jsxs)('div', {
                                              className:
                                                'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                              children: [
                                                (0, t.jsx)('p', { className: 'text-2xl', children: s }),
                                                (0, t.jsxs)('div', {
                                                  className: 'flex flex-col gap-y-0.25',
                                                  children: [
                                                    (0, t.jsx)('p', { className: 'text-xs capitalize', children: l }),
                                                    (0, t.jsx)('p', {
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
                                  (0, t.jsx)('div', {
                                    className: 'flex flex-col gap-y-4 md:gap-y-8',
                                    children: u.map((e) => {
                                      let { id: a = '', emoji: s = '', group: r = '', name: d = '', code: n = '' } = e;
                                      return (0, t.jsx)(
                                        'div',
                                        {
                                          className: 'flex flex-col gap-y-4',
                                          children: (0, t.jsx)(l.O, { id: a, emoji: s, group: r, name: d, code: n }),
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
                    (0, t.jsx)('section', {
                      className: 'py-4 md:py-8',
                      children: (0, t.jsxs)('div', {
                        className: 'container mx-auto flex flex-col gap-y-8 px-8',
                        children: [
                          (0, t.jsx)('h2', {
                            className: 'text-2xl font-bold',
                            children: (0, t.jsx)('span', { className: 'capitalize', children: 'Classes' }),
                          }),
                          (0, t.jsx)('div', {
                            className:
                              'overflow-x-auto rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                            children: (0, t.jsxs)('table', {
                              className: 'min-w-full divide-y-2 divide-neutral-200 dark:divide-neutral-800',
                              children: [
                                (0, t.jsx)('thead', {
                                  children: (0, t.jsxs)('tr', {
                                    children: [
                                      (0, t.jsx)('th', { className: 'px-3 py-2 whitespace-nowrap', children: '#' }),
                                      (0, t.jsx)('th', {
                                        align: 'left',
                                        className: 'px-3 py-2 whitespace-nowrap',
                                        children: 'Class',
                                      }),
                                      (0, t.jsx)('th', {
                                        align: 'left',
                                        className: 'px-3 py-2 whitespace-nowrap',
                                        children: 'Light',
                                      }),
                                      (0, t.jsx)('th', {
                                        align: 'left',
                                        className: 'px-3 py-2 whitespace-nowrap',
                                        children: 'Dark',
                                      }),
                                    ],
                                  }),
                                }),
                                (0, t.jsx)('tbody', {
                                  className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                                  children: [
                                    {
                                      id: 'bg-primary',
                                      name: 'bg-primary',
                                      lightClass: 'bg-white',
                                      darkClass: 'dark:bg-neutral-900',
                                    },
                                    {
                                      id: 'text-primary',
                                      name: 'text-primary',
                                      lightClass: 'text-neutral-900',
                                      darkClass: 'dark:text-neutral-100',
                                    },
                                    {
                                      id: 'text-secondary',
                                      name: 'text-secondary',
                                      lightClass: 'text-neutral-700',
                                      darkClass: 'dark:text-neutral-300',
                                    },
                                    {
                                      id: 'border',
                                      name: 'border',
                                      lightClass: 'border-neutral-200',
                                      darkClass: 'dark:border-neutral-800',
                                    },
                                    {
                                      id: 'divide',
                                      name: 'divide',
                                      lightClass: 'divide-neutral-200',
                                      darkClass: 'dark:divide-neutral-800',
                                    },
                                    {
                                      id: 'shadow',
                                      name: 'shadow',
                                      lightClass: 'shadow',
                                      darkClass: 'dark:shadow-neutral-100/10',
                                    },
                                  ].map((e, a) => {
                                    let { id: s = '', name: l = '', lightClass: r = '', darkClass: d = '' } = e;
                                    return (0, t.jsxs)(
                                      'tr',
                                      {
                                        children: [
                                          (0, t.jsx)('td', {
                                            align: 'center',
                                            className: 'px-3 py-2 whitespace-nowrap',
                                            children: a + 1,
                                          }),
                                          (0, t.jsx)('td', { className: 'px-3 py-2 whitespace-nowrap', children: l }),
                                          (0, t.jsx)('td', {
                                            className: 'px-3 py-2 whitespace-nowrap',
                                            children: (0, t.jsx)('code', {
                                              className:
                                                'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                                              children: r,
                                            }),
                                          }),
                                          (0, t.jsx)('td', {
                                            className: 'px-3 py-2 whitespace-nowrap',
                                            children: (0, t.jsx)('code', {
                                              className:
                                                'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                                              children: d,
                                            }),
                                          }),
                                        ],
                                      },
                                      s
                                    );
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, t.jsx)(r.w, { title: 'atomic/ui' }),
              ],
            }),
          ],
        });
      };
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [6826, 8809, 5031, 636, 6593, 8792], () => a(6971)), (_N_E = e.O());
  },
]);
