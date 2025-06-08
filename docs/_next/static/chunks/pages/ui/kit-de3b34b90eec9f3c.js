(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9179],
  {
    4744: (e, a, s) => {
      'use strict';
      s.r(a), s.d(a, { __N_SSG: () => c, default: () => o });
      var r = s(5640),
        l = s(6260),
        t = s(5695),
        d = s(6826),
        i = s.n(d),
        n = s(148),
        c = !0;
      let o = (e) => {
        let { components: a = [] } = e,
          [{ query: s = '' }, d] = (0, n.useState)({ query: '' }),
          c = a.filter((e) => {
            let { id: a, name: r } = e;
            return a.toLowerCase().includes(s.toLowerCase()) || r.toLowerCase().includes(s.toLowerCase());
          });
        return (0, r.jsxs)(t.U, {
          query: s,
          setState: d,
          id: 'ui-kit',
          emoji: '\uD83C\uDFA8',
          title: 'atomic/ui',
          description:
            'is a free set of Tailwind CSS components built following atomic design principles for consistent UI development.',
          children: [
            (0, r.jsx)('section', {
              className: 'py-8 md:py-16',
              children: (0, r.jsx)('div', {
                className: 'container mx-auto px-8',
                children: (0, r.jsxs)('div', {
                  className: 'flex flex-col gap-y-4 md:gap-y-8',
                  children: [
                    (0, r.jsxs)('h2', {
                      className: 'text-2xl font-bold',
                      children: [
                        (0, r.jsx)('span', { className: 'capitalize', children: 'Components' }),
                        ' (',
                        c.length,
                        ')',
                      ],
                    }),
                    c.length > 0 &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)('div', {
                            className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                            children: c.map((e) => {
                              let { id: a = '', emoji: s = '', group: l, name: t = '' } = e;
                              return (0, r.jsx)(
                                i(),
                                {
                                  href: '#'.concat(a),
                                  children: (0, r.jsx)('div', {
                                    className: 'col-span-1',
                                    children: (0, r.jsxs)('div', {
                                      className:
                                        'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                      children: [
                                        (0, r.jsx)('p', { className: 'text-2xl', children: s }),
                                        (0, r.jsxs)('div', {
                                          className: 'flex flex-col gap-y-0.25',
                                          children: [
                                            (0, r.jsx)('p', { className: 'text-xs capitalize', children: l }),
                                            (0, r.jsx)('p', {
                                              className: 'text-sm font-semibold capitalize',
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
                          (0, r.jsx)('div', {
                            className: 'flex flex-col gap-y-4 md:gap-y-8',
                            children: c.map((e) => {
                              let { id: a = '', emoji: s = '', group: t = '', name: d = '', code: i = '' } = e;
                              return (0, r.jsx)(
                                'div',
                                {
                                  className: 'flex flex-col gap-y-4',
                                  children: (0, r.jsx)(l.C, { id: a, emoji: s, group: t, name: d, code: i }),
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
            (0, r.jsx)('section', {
              className: 'py-4 md:py-8',
              children: (0, r.jsxs)('div', {
                className: 'container mx-auto flex flex-col gap-y-8 px-8',
                children: [
                  (0, r.jsx)('h2', {
                    className: 'text-2xl font-bold',
                    children: (0, r.jsx)('span', { className: 'capitalize', children: 'Classes' }),
                  }),
                  (0, r.jsx)('div', {
                    className:
                      'overflow-x-auto rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                    children: (0, r.jsxs)('table', {
                      className: 'min-w-full divide-y-2 divide-neutral-200 dark:divide-neutral-800',
                      children: [
                        (0, r.jsx)('thead', {
                          children: (0, r.jsxs)('tr', {
                            children: [
                              (0, r.jsx)('th', { className: 'px-3 py-2 whitespace-nowrap', children: '#' }),
                              (0, r.jsx)('th', {
                                align: 'left',
                                className: 'px-3 py-2 whitespace-nowrap',
                                children: 'Class',
                              }),
                              (0, r.jsx)('th', {
                                align: 'left',
                                className: 'px-3 py-2 whitespace-nowrap',
                                children: 'Light',
                              }),
                              (0, r.jsx)('th', {
                                align: 'left',
                                className: 'px-3 py-2 whitespace-nowrap',
                                children: 'Dark',
                              }),
                            ],
                          }),
                        }),
                        (0, r.jsx)('tbody', {
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
                            let { id: s = '', name: l = '', lightClass: t = '', darkClass: d = '' } = e;
                            return (0, r.jsxs)(
                              'tr',
                              {
                                children: [
                                  (0, r.jsx)('td', {
                                    align: 'center',
                                    className: 'px-3 py-2 whitespace-nowrap',
                                    children: a + 1,
                                  }),
                                  (0, r.jsx)('td', { className: 'px-3 py-2 whitespace-nowrap', children: l }),
                                  (0, r.jsx)('td', {
                                    className: 'px-3 py-2 whitespace-nowrap',
                                    children: (0, r.jsx)('code', {
                                      className:
                                        'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                                      children: t,
                                    }),
                                  }),
                                  (0, r.jsx)('td', {
                                    className: 'px-3 py-2 whitespace-nowrap',
                                    children: (0, r.jsx)('code', {
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
        });
      };
    },
    6260: (e, a, s) => {
      'use strict';
      s.d(a, { C: () => n });
      var r = s(5640),
        l = s(6921),
        t = s(8809),
        d = s(148),
        i = s(8899);
      let n = (e) => {
        let { id: a = '', emoji: s = '', group: n = '', name: c = '', code: o = '', codeOnly: p = !1 } = e,
          [x, u] = (0, d.useState)(''),
          [h, m] = (0, d.useState)(!0);
        return (
          (0, d.useEffect)(() => {
            u((0, t.A)(window).sanitize(o));
          }, [o]),
          (0, r.jsxs)('div', {
            id: a,
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, r.jsxs)('div', {
                className: 'flex items-center justify-between gap-x-2',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      (0, r.jsx)('span', { className: 'text-4xl', children: s }),
                      (0, r.jsxs)('div', {
                        children: [
                          (0, r.jsx)('p', { className: 'text-xs capitalize', children: n }),
                          (0, r.jsx)('h3', { className: 'text-xl font-bold md:text-2xl', children: c }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      p &&
                        (0, r.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => (0, l.C)(o),
                          children: 'Copy',
                        }),
                      !p &&
                        (0, r.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => m((e) => !e),
                          children: h ? 'Preview' : 'Code',
                        }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: p
                  ? (0, r.jsx)(i.V, { code: o, lang: 'tsx' })
                  : (0, r.jsx)(r.Fragment, {
                      children: h
                        ? (0, r.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: x } })
                        : (0, r.jsx)(i.V, { code: o, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    7981: (e, a, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/ui/kit',
        function () {
          return s(4744);
        },
      ]);
    },
    8899: (e, a, s) => {
      'use strict';
      s.d(a, { V: () => i });
      var r = s(5640),
        l = s(6921),
        t = s(148),
        d = s(2182);
      let i = (e) => {
        let { code: a, lang: s } = e,
          [i, n] = (0, t.useState)('');
        return (
          (0, t.useEffect)(() => {
            (async () => {
              n(await (0, d.Yz)(a, { lang: s, theme: 'github-dark' }));
            })();
          }),
          (0, r.jsx)('button', {
            className: 'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: i },
            onClick: () => (0, l.C)(a),
          })
        );
      };
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [6826, 2182, 1190, 431, 636, 6593, 8792], () => a(7981)), (_N_E = e.O());
  },
]);
