(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6748],
  {
    2791: (e, s, a) => {
      'use strict';
      a.r(s), a.d(s, { __N_SSG: () => d, default: () => n });
      var l = a(5640),
        r = a(6260),
        c = a(9597),
        i = a(6826),
        t = a.n(i),
        o = a(148),
        d = !0;
      let n = (e) => {
        let { hooks: s = [] } = e,
          [{ query: a = '' }, i] = (0, o.useState)({ query: '' }),
          d = s.filter((e) => {
            let { id: s, name: l } = e;
            return s.toLowerCase().includes(a.toLowerCase()) || l.toLowerCase().includes(a.toLowerCase());
          });
        return (0, l.jsx)(c.U, {
          query: a,
          setState: i,
          id: 'react-hooks',
          emoji: '\uD83E\uDE9D',
          title: 'atomic/hooks',
          subtitle: 'Free and Open Source React v19 Hooks',
          description:
            'is a collection of reusable React hooks built for simplicity, efficiency, and ease of integration.',
          features: ['Copy / Paste', 'Pure React Hooks', 'Cross Browser Compatible'],
          children: (0, l.jsx)('section', {
            className: 'py-4 md:py-8',
            children: (0, l.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, l.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, l.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [(0, l.jsx)('span', { className: 'capitalize', children: 'Hooks' }), ' (', d.length, ')'],
                  }),
                  d.length > 0 &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)('div', {
                          className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                          children: d.map((e) => {
                            let { id: s = '', emoji: a = '', group: r, name: c = '' } = e;
                            return (0, l.jsx)(
                              t(),
                              {
                                href: '#'.concat(s),
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
                                          (0, l.jsx)('p', { className: 'text-xs capitalize', children: r }),
                                          (0, l.jsx)('p', { className: 'font-semibold capitalize', children: c }),
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
                        (0, l.jsx)('div', {
                          className: 'flex flex-col gap-y-8',
                          children: d.map((e) => {
                            let { id: s = '', emoji: a = '', group: c = '', name: i = '', code: t = '' } = e;
                            return (0, l.jsx)(
                              'div',
                              {
                                className: 'flex flex-col gap-y-4',
                                children: (0, l.jsx)(r.C, {
                                  id: s,
                                  emoji: a,
                                  group: c,
                                  name: i,
                                  code: t,
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
    7297: (e, s, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/react/hooks',
        function () {
          return a(2791);
        },
      ]);
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [6826, 1190, 2182, 3988, 636, 6593, 8792], () => s(7297)), (_N_E = e.O());
  },
]);
