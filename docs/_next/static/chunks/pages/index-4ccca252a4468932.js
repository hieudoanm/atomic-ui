(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    7935: (e, a, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return l(9450);
        },
      ]);
    },
    9450: (e, a, l) => {
      'use strict';
      l.r(a), l.d(a, { __N_SSG: () => u, default: () => h });
      var s = l(5640),
        r = l(8809),
        t = l(148),
        d = l(5031);
      let n = (e) => {
          let { code: a, lang: l } = e,
            [r, n] = (0, t.useState)('');
          return (
            (0, t.useEffect)(() => {
              (async () => {
                n(await (0, d.Yz)(a, { lang: l, theme: 'github-dark' }));
              })();
            }),
            (0, s.jsx)('div', {
              dangerouslySetInnerHTML: { __html: r },
              className: 'w-full overflow-x-auto bg-neutral-900 p-4',
            })
          );
        },
        i = (e) => {
          let {
              id: a = '',
              emoji: l = '',
              group: d = '',
              name: i = '',
              code: c = '',
            } = e,
            [o, x] = (0, t.useState)(''),
            [u, h] = (0, t.useState)(!0);
          return (
            (0, t.useEffect)(() => {
              x((0, r.A)(window).sanitize(c));
            }, [c]),
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
                        (0, s.jsx)('span', {
                          className: 'text-4xl',
                          children: l,
                        }),
                        (0, s.jsxs)('div', {
                          children: [
                            (0, s.jsx)('p', {
                              className: 'text-xs capitalize',
                              children: d,
                            }),
                            (0, s.jsx)('h3', {
                              className: 'text-xl font-bold md:text-2xl',
                              children: i,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)('button', {
                      type: 'button',
                      className:
                        'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                      onClick: () => h((e) => !e),
                      children: u ? 'Preview' : 'Code',
                    }),
                  ],
                }),
                (0, s.jsx)('div', {
                  className:
                    'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: u
                    ? (0, s.jsx)('div', {
                        className: 'w-full p-4 md:p-8',
                        dangerouslySetInnerHTML: { __html: o },
                      })
                    : (0, s.jsx)(n, { code: c, lang: 'html' }),
                }),
              ],
            })
          );
        },
        c = () => {
          let [e, a] = (0, t.useState)(!1);
          return (
            (0, t.useEffect)(() => {
              'dark' === localStorage.getItem('theme') &&
                (document.documentElement.classList.add('dark'), a(!0));
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
      var o = l(6211),
        x = l.n(o),
        u = !0;
      let h = (e) => {
        let { components: a = [] } = e,
          { darkMode: l = !1, toggleDarkMode: r } = c(),
          [{ query: d = '' }, n] = (0, t.useState)({ query: '' }),
          o = a.filter((e) => {
            let { id: a, name: l } = e;
            return (
              a.toLowerCase().includes(d.toLowerCase()) ||
              l.toLowerCase().includes(d.toLowerCase())
            );
          });
        return (0, s.jsxs)('div', {
          className:
            'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, s.jsx)('nav', {
              className:
                'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: (0, s.jsxs)('div', {
                className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
                children: [
                  (0, s.jsxs)('div', {
                    className: 'flex items-center justify-between gap-x-4',
                    children: [
                      (0, s.jsx)('h3', {
                        className: 'text-2xl font-bold',
                        children: '⚛️ atomic/ui',
                      }),
                      (0, s.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          (0, s.jsx)('div', {
                            className: 'hidden grow md:block',
                            children: (0, s.jsx)('input', {
                              type: 'text',
                              placeholder: 'Search Components',
                              value: d,
                              className:
                                'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                              onChange: (e) => {
                                n((a) => ({ ...a, query: e.target.value }));
                              },
                            }),
                          }),
                          (0, s.jsx)(x(), {
                            href: 'https://github.com/hieudoanm/atomic-ui',
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
                                checked: l,
                                className: 'peer sr-only',
                                onChange: () => {
                                  r();
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
                  (0, s.jsx)('div', {
                    className: 'block md:hidden',
                    children: (0, s.jsx)('input', {
                      type: 'text',
                      placeholder: 'Search Components',
                      value: d,
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
            (0, s.jsxs)('div', {
              className: 'grow overflow-auto',
              children: [
                (0, s.jsxs)('main', {
                  className:
                    'divide-y divide-neutral-200 dark:divide-neutral-800',
                  children: [
                    (0, s.jsx)('section', {
                      className: 'py-8 md:py-16',
                      children: (0, s.jsx)('div', {
                        className:
                          'container mx-auto flex flex-col items-center justify-center gap-y-4 px-8',
                        children: (0, s.jsxs)('div', {
                          className:
                            'flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8',
                          children: [
                            (0, s.jsxs)('header', {
                              className: 'flex flex-col gap-y-1',
                              children: [
                                (0, s.jsx)('h1', {
                                  className:
                                    'text-4xl font-black whitespace-nowrap',
                                  children: '⚛️ atomic/ui',
                                }),
                                (0, s.jsx)('h5', {
                                  className:
                                    'text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300',
                                  children:
                                    'Free and Open Source TailwindCSS v4 Components',
                                }),
                              ],
                            }),
                            (0, s.jsxs)('p', {
                              className:
                                'text-neutral-900 dark:text-neutral-100',
                              children: [
                                (0, s.jsx)('code', {
                                  className:
                                    'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                                  children: 'atomic/ui',
                                }),
                                (0, s.jsx)('span', {
                                  children:
                                    'is a free collection of Tailwind CSS components designed with atomic design principles in mind. It offers a flexible set of building blocks to help you quickly build modern, responsive UIs for your next project.',
                                }),
                              ],
                            }),
                            (0, s.jsxs)('div', {
                              className:
                                'flex flex-col justify-center gap-x-6 text-sm font-black text-neutral-900 md:flex-row dark:text-neutral-100',
                              children: [
                                (0, s.jsx)('p', {
                                  className: 'whitespace-nowrap',
                                  children: '\uD83D\uDD2E Copy / Paste',
                                }),
                                (0, s.jsx)('p', {
                                  className: 'whitespace-nowrap',
                                  children: '\uD83D\uDD2E Pure TailwindCSS',
                                }),
                                (0, s.jsx)('p', {
                                  className: 'whitespace-nowrap',
                                  children:
                                    '\uD83D\uDD2E Atoms / Molecules / Organisms',
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
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
                                (0, s.jsx)('span', {
                                  className: 'capitalize',
                                  children: 'Components',
                                }),
                                ' (',
                                o.length,
                                ')',
                              ],
                            }),
                            o.length > 0 &&
                              (0, s.jsxs)(s.Fragment, {
                                children: [
                                  (0, s.jsx)('div', {
                                    className:
                                      'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                                    children: o.map((e) => {
                                      let {
                                        id: a = '',
                                        emoji: l = '',
                                        group: r,
                                        name: t = '',
                                      } = e;
                                      return (0, s.jsx)(
                                        x(),
                                        {
                                          href: '#'.concat(a),
                                          children: (0, s.jsx)('div', {
                                            className: 'col-span-1',
                                            children: (0, s.jsxs)('div', {
                                              className:
                                                'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                              children: [
                                                (0, s.jsx)('p', {
                                                  className: 'text-2xl',
                                                  children: l,
                                                }),
                                                (0, s.jsxs)('div', {
                                                  className:
                                                    'flex flex-col gap-y-0.25',
                                                  children: [
                                                    (0, s.jsx)('p', {
                                                      className:
                                                        'text-xs capitalize',
                                                      children: r,
                                                    }),
                                                    (0, s.jsx)('p', {
                                                      className:
                                                        'font-semibold capitalize',
                                                      children: t,
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
                                    children: o.map((e) => {
                                      let {
                                        id: a = '',
                                        emoji: l = '',
                                        group: r = '',
                                        name: t = '',
                                        code: d = '',
                                      } = e;
                                      return (0, s.jsx)(
                                        'div',
                                        {
                                          className: 'flex flex-col gap-y-4',
                                          children: (0, s.jsx)(i, {
                                            id: a,
                                            emoji: l,
                                            group: r,
                                            name: t,
                                            code: d,
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
                    (0, s.jsx)('section', {
                      className: 'py-4 md:py-8',
                      children: (0, s.jsxs)('div', {
                        className:
                          'container mx-auto flex flex-col gap-y-8 px-8',
                        children: [
                          (0, s.jsx)('h2', {
                            className: 'text-2xl font-bold',
                            children: (0, s.jsx)('span', {
                              className: 'capitalize',
                              children: 'Classes',
                            }),
                          }),
                          (0, s.jsx)('div', {
                            className:
                              'overflow-x-auto rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                            children: (0, s.jsxs)('table', {
                              className:
                                'min-w-full divide-y-2 divide-neutral-200 dark:divide-neutral-800',
                              children: [
                                (0, s.jsx)('thead', {
                                  children: (0, s.jsxs)('tr', {
                                    children: [
                                      (0, s.jsx)('th', {
                                        className:
                                          'px-3 py-2 whitespace-nowrap',
                                        children: '#',
                                      }),
                                      (0, s.jsx)('th', {
                                        align: 'left',
                                        className:
                                          'px-3 py-2 whitespace-nowrap',
                                        children: 'Class',
                                      }),
                                      (0, s.jsx)('th', {
                                        align: 'left',
                                        className:
                                          'px-3 py-2 whitespace-nowrap',
                                        children: 'Light',
                                      }),
                                      (0, s.jsx)('th', {
                                        align: 'left',
                                        className:
                                          'px-3 py-2 whitespace-nowrap',
                                        children: 'Dark',
                                      }),
                                    ],
                                  }),
                                }),
                                (0, s.jsx)('tbody', {
                                  className:
                                    'divide-y divide-neutral-200 dark:divide-neutral-800',
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
                                    let {
                                      id: l = '',
                                      name: r = '',
                                      lightClass: t = '',
                                      darkClass: d = '',
                                    } = e;
                                    return (0, s.jsxs)(
                                      'tr',
                                      {
                                        children: [
                                          (0, s.jsx)('td', {
                                            align: 'center',
                                            className:
                                              'px-3 py-2 whitespace-nowrap',
                                            children: a + 1,
                                          }),
                                          (0, s.jsx)('td', {
                                            className:
                                              'px-3 py-2 whitespace-nowrap',
                                            children: r,
                                          }),
                                          (0, s.jsx)('td', {
                                            className:
                                              'px-3 py-2 whitespace-nowrap',
                                            children: (0, s.jsx)('code', {
                                              className:
                                                'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                                              children: t,
                                            }),
                                          }),
                                          (0, s.jsx)('td', {
                                            className:
                                              'px-3 py-2 whitespace-nowrap',
                                            children: (0, s.jsx)('code', {
                                              className:
                                                'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                                              children: d,
                                            }),
                                          }),
                                        ],
                                      },
                                      l
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
                (0, s.jsx)('footer', {
                  className:
                    'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, s.jsxs)('div', {
                    className: 'container mx-auto px-8 py-4',
                    children: [
                      '\xa9 ',
                      new Date().getFullYear(),
                      ' ⚛️ ',
                      (0, s.jsx)('strong', { children: 'atomic/ui' }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [5001, 636, 6593, 8792], () => a(7935)), (_N_E = e.O());
  },
]);
