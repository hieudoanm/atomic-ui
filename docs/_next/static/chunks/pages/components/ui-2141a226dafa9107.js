(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [845],
  {
    4693: (e, a, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/components/ui',
        function () {
          return s(9334);
        },
      ]);
    },
    9334: (e, a, s) => {
      'use strict';
      s.r(a), s.d(a, { __N_SSG: () => c, default: () => o });
      var l = s(5640),
        r = s(7921),
        t = s(3286),
        d = s(6826),
        i = s.n(d),
        n = s(148),
        c = !0;
      let o = (e) => {
        let { components: a = [] } = e,
          [{ query: s = '' }, d] = (0, n.useState)({ query: '' }),
          c = a.filter((e) => {
            let { id: a, name: l } = e;
            return a.toLowerCase().includes(s.toLowerCase()) || l.toLowerCase().includes(s.toLowerCase());
          });
        return (0, l.jsxs)(t.U, {
          query: s,
          setState: d,
          id: 'components-ui',
          emoji: '\uD83C\uDFA8',
          title: 'atomic/ui',
          subtitle: 'Free and Open Source TailwindCSS v4 Components',
          description:
            'is a free set of Tailwind CSS components built following atomic design principles for consistent UI development.',
          features: ['Copy / Paste', 'Pure TailwindCSS', 'Atoms / Molecules / Organisms'],
          children: [
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
                        (0, l.jsx)('span', { className: 'capitalize', children: 'Components' }),
                        ' (',
                        c.length,
                        ')',
                      ],
                    }),
                    c.length > 0 &&
                      (0, l.jsxs)(l.Fragment, {
                        children: [
                          (0, l.jsx)('div', {
                            className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                            children: c.map((e) => {
                              let { id: a = '', emoji: s = '', group: r, name: t = '' } = e;
                              return (0, l.jsx)(
                                i(),
                                {
                                  href: '#'.concat(a),
                                  children: (0, l.jsx)('div', {
                                    className: 'col-span-1',
                                    children: (0, l.jsxs)('div', {
                                      className:
                                        'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                      children: [
                                        (0, l.jsx)('p', { className: 'text-2xl', children: s }),
                                        (0, l.jsxs)('div', {
                                          className: 'flex flex-col gap-y-0.25',
                                          children: [
                                            (0, l.jsx)('p', { className: 'text-xs capitalize', children: r }),
                                            (0, l.jsx)('p', {
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
                          (0, l.jsx)('div', {
                            className: 'flex flex-col gap-y-4 md:gap-y-8',
                            children: c.map((e) => {
                              let { id: a = '', emoji: s = '', group: t = '', name: d = '', code: i = '' } = e;
                              return (0, l.jsx)(
                                'div',
                                {
                                  className: 'flex flex-col gap-y-4',
                                  children: (0, l.jsx)(r.O, { id: a, emoji: s, group: t, name: d, code: i }),
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
            (0, l.jsx)('section', {
              className: 'py-4 md:py-8',
              children: (0, l.jsxs)('div', {
                className: 'container mx-auto flex flex-col gap-y-8 px-8',
                children: [
                  (0, l.jsx)('h2', {
                    className: 'text-2xl font-bold',
                    children: (0, l.jsx)('span', { className: 'capitalize', children: 'Classes' }),
                  }),
                  (0, l.jsx)('div', {
                    className:
                      'overflow-x-auto rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                    children: (0, l.jsxs)('table', {
                      className: 'min-w-full divide-y-2 divide-neutral-200 dark:divide-neutral-800',
                      children: [
                        (0, l.jsx)('thead', {
                          children: (0, l.jsxs)('tr', {
                            children: [
                              (0, l.jsx)('th', { className: 'px-3 py-2 whitespace-nowrap', children: '#' }),
                              (0, l.jsx)('th', {
                                align: 'left',
                                className: 'px-3 py-2 whitespace-nowrap',
                                children: 'Class',
                              }),
                              (0, l.jsx)('th', {
                                align: 'left',
                                className: 'px-3 py-2 whitespace-nowrap',
                                children: 'Light',
                              }),
                              (0, l.jsx)('th', {
                                align: 'left',
                                className: 'px-3 py-2 whitespace-nowrap',
                                children: 'Dark',
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)('tbody', {
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
                            let { id: s = '', name: r = '', lightClass: t = '', darkClass: d = '' } = e;
                            return (0, l.jsxs)(
                              'tr',
                              {
                                children: [
                                  (0, l.jsx)('td', {
                                    align: 'center',
                                    className: 'px-3 py-2 whitespace-nowrap',
                                    children: a + 1,
                                  }),
                                  (0, l.jsx)('td', { className: 'px-3 py-2 whitespace-nowrap', children: r }),
                                  (0, l.jsx)('td', {
                                    className: 'px-3 py-2 whitespace-nowrap',
                                    children: (0, l.jsx)('code', {
                                      className:
                                        'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                                      children: t,
                                    }),
                                  }),
                                  (0, l.jsx)('td', {
                                    className: 'px-3 py-2 whitespace-nowrap',
                                    children: (0, l.jsx)('code', {
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
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [6826, 1190, 2182, 2630, 636, 6593, 8792], () => a(4693)), (_N_E = e.O());
  },
]);
