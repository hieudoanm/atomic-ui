(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2807],
  {
    1236: (e, s, l) => {
      'use strict';
      l.r(s), l.d(s, { __N_SSG: () => d, default: () => o });
      var a = l(5640),
        i = l(7921),
        t = l(8546),
        r = l(6826),
        c = l.n(r),
        n = l(148),
        d = !0;
      let o = (e) => {
        let { utils: s = [] } = e,
          [{ query: l = '' }, r] = (0, n.useState)({ query: '' }),
          d = s.filter((e) => {
            let { id: s, name: a } = e;
            return s.toLowerCase().includes(l.toLowerCase()) || a.toLowerCase().includes(l.toLowerCase());
          });
        return (0, a.jsx)(t.U, {
          query: l,
          setState: r,
          id: 'utils',
          emoji: '\uD83E\uDDF0',
          title: 'atomic/utils',
          subtitle: 'Free and Open Source Utilities',
          description:
            'is a free set of reusable utility functions designed to simplify common tasks and improve code efficiency and maintainability.',
          features: ['Copy / Paste', 'Pure JS', 'Functional'],
          children: (0, a.jsx)('section', {
            className: 'py-4 md:py-8',
            children: (0, a.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, a.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, a.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [(0, a.jsx)('span', { className: 'capitalize', children: 'Utils' }), ' (', d.length, ')'],
                  }),
                  d.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)('div', {
                          className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                          children: d.map((e) => {
                            let { id: s = '', emoji: l = '', group: i, name: t = '' } = e;
                            return (0, a.jsx)(
                              c(),
                              {
                                href: '#'.concat(s),
                                children: (0, a.jsx)('div', {
                                  className: 'col-span-1',
                                  children: (0, a.jsxs)('div', {
                                    className:
                                      'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                    children: [
                                      (0, a.jsx)('p', { className: 'text-2xl', children: l }),
                                      (0, a.jsxs)('div', {
                                        className: 'flex flex-col gap-y-0.25',
                                        children: [
                                          (0, a.jsx)('p', { className: 'text-xs capitalize', children: i }),
                                          (0, a.jsx)('p', { className: 'font-semibold capitalize', children: t }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              s
                            );
                          }),
                        }),
                        (0, a.jsx)('div', {
                          className: 'flex flex-col gap-y-8',
                          children: d.map((e) => {
                            let { id: s = '', emoji: l = '', group: t = '', name: r = '', code: c = '' } = e;
                            return (0, a.jsx)(
                              'div',
                              {
                                className: 'flex flex-col gap-y-4',
                                children: (0, a.jsx)(i.O, {
                                  id: s,
                                  emoji: l,
                                  group: t,
                                  name: r,
                                  code: c,
                                  codeOnly: !0,
                                }),
                              },
                              s
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
    6917: (e, s, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/utils',
        function () {
          return l(1236);
        },
      ]);
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [6826, 8809, 5031, 8450, 636, 6593, 8792], () => s(6917)), (_N_E = e.O());
  },
]);
