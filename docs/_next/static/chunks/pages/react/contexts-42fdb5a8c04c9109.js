(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8048],
  {
    403: (e, s, a) => {
      'use strict';
      a.r(s), a.d(s, { __N_SSG: () => d, default: () => o });
      var t = a(5640),
        l = a(7921),
        r = a(8546),
        c = a(6826),
        i = a.n(c),
        n = a(148),
        d = !0;
      let o = (e) => {
        let { contexts: s = [] } = e,
          [{ query: a = '' }, c] = (0, n.useState)({ query: '' }),
          d = s.filter((e) => {
            let { id: s, name: t } = e;
            return s.toLowerCase().includes(a.toLowerCase()) || t.toLowerCase().includes(a.toLowerCase());
          });
        return (0, t.jsx)(r.U, {
          query: a,
          setState: c,
          id: 'react-contexts',
          emoji: '\uD83D\uDD17',
          title: 'atomic/contexts',
          subtitle: 'Free and Open Source React v19 Contexts',
          description:
            'are essential React context providers focused on simplicity, reusability, and scalability for better state management.',
          features: ['Copy / Paste', 'Pure React Contexts', 'Cross Browser Compatible'],
          children: (0, t.jsx)('section', {
            className: 'py-4 md:py-8',
            children: (0, t.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, t.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, t.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [
                      (0, t.jsx)('span', { className: 'capitalize', children: 'Contexts' }),
                      ' (',
                      d.length,
                      ')',
                    ],
                  }),
                  d.length > 0 &&
                    (0, t.jsxs)(t.Fragment, {
                      children: [
                        (0, t.jsx)('div', {
                          className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3',
                          children: d.map((e) => {
                            let { id: s = '', emoji: a = '', group: l, name: r = '' } = e;
                            return (0, t.jsx)(
                              i(),
                              {
                                href: '#'.concat(s),
                                children: (0, t.jsx)('div', {
                                  className: 'col-span-1',
                                  children: (0, t.jsxs)('div', {
                                    className:
                                      'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                    children: [
                                      (0, t.jsx)('p', { className: 'text-2xl', children: a }),
                                      (0, t.jsxs)('div', {
                                        className: 'flex flex-col gap-y-0.25',
                                        children: [
                                          (0, t.jsx)('p', { className: 'text-xs capitalize', children: l }),
                                          (0, t.jsx)('p', { className: 'font-semibold capitalize', children: r }),
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
                        (0, t.jsx)('div', {
                          className: 'flex flex-col gap-y-8',
                          children: d.map((e) => {
                            let { id: s = '', emoji: a = '', group: r = '', name: c = '', code: i = '' } = e;
                            return (0, t.jsx)(
                              'div',
                              {
                                className: 'flex flex-col gap-y-4',
                                children: (0, t.jsx)(l.O, {
                                  id: s,
                                  emoji: a,
                                  group: r,
                                  name: c,
                                  code: i,
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
    6627: (e, s, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/react/contexts',
        function () {
          return a(403);
        },
      ]);
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [6826, 8809, 5031, 8450, 636, 6593, 8792], () => s(6627)), (_N_E = e.O());
  },
]);
