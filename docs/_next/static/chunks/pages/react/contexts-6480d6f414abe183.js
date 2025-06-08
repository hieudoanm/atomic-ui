(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8048],
  {
    403: (e, s, l) => {
      'use strict';
      l.r(s), l.d(s, { __N_SSG: () => c, default: () => o });
      var r = l(5640),
        a = l(6260),
        t = l(5695),
        d = l(6826),
        i = l.n(d),
        n = l(148),
        c = !0;
      let o = (e) => {
        let { contexts: s = [] } = e,
          [{ query: l = '' }, d] = (0, n.useState)({ query: '' }),
          c = s.filter((e) => {
            let { id: s, name: r } = e;
            return s.toLowerCase().includes(l.toLowerCase()) || r.toLowerCase().includes(l.toLowerCase());
          });
        return (0, r.jsx)(t.U, {
          query: l,
          setState: d,
          id: 'react-contexts',
          emoji: '\uD83D\uDD17',
          title: 'atomic/contexts',
          description:
            'are essential React context providers focused on simplicity, reusability, and scalability for better state management.',
          children: (0, r.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, r.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, r.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, r.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [
                      (0, r.jsx)('span', { className: 'capitalize', children: 'Contexts' }),
                      ' (',
                      c.length,
                      ')',
                    ],
                  }),
                  c.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)('div', {
                          className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3',
                          children: c.map((e) => {
                            let { id: s = '', emoji: l = '', group: a, name: t = '' } = e;
                            return (0, r.jsx)(
                              i(),
                              {
                                href: '#'.concat(s),
                                children: (0, r.jsx)('div', {
                                  className: 'col-span-1',
                                  children: (0, r.jsxs)('div', {
                                    className:
                                      'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                    children: [
                                      (0, r.jsx)('p', { className: 'text-2xl', children: l }),
                                      (0, r.jsxs)('div', {
                                        className: 'flex flex-col gap-y-0.25',
                                        children: [
                                          (0, r.jsx)('p', { className: 'text-xs capitalize', children: a }),
                                          (0, r.jsx)('p', { className: 'font-semibold capitalize', children: t }),
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
                        (0, r.jsx)('div', {
                          className: 'flex flex-col gap-y-8',
                          children: c.map((e) => {
                            let { id: s = '', emoji: l = '', group: t = '', name: d = '', code: i = '' } = e;
                            return (0, r.jsx)(
                              'div',
                              {
                                className: 'flex flex-col gap-y-4',
                                children: (0, r.jsx)(a.C, {
                                  id: s,
                                  emoji: l,
                                  group: t,
                                  name: d,
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
    6260: (e, s, l) => {
      'use strict';
      l.d(s, { C: () => n });
      var r = l(5640),
        a = l(6921),
        t = l(8809),
        d = l(148),
        i = l(8899);
      let n = (e) => {
        let { id: s = '', emoji: l = '', group: n = '', name: c = '', code: o = '', codeOnly: x = !1 } = e,
          [p, u] = (0, d.useState)(''),
          [h, m] = (0, d.useState)(!0);
        return (
          (0, d.useEffect)(() => {
            u((0, t.A)(window).sanitize(o));
          }, [o]),
          (0, r.jsxs)('div', {
            id: s,
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, r.jsxs)('div', {
                className: 'flex items-center justify-between gap-x-2',
                children: [
                  (0, r.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      (0, r.jsx)('span', { className: 'text-4xl', children: l }),
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
                      x &&
                        (0, r.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => (0, a.C)(o),
                          children: 'Copy',
                        }),
                      !x &&
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
                children: x
                  ? (0, r.jsx)(i.V, { code: o, lang: 'tsx' })
                  : (0, r.jsx)(r.Fragment, {
                      children: h
                        ? (0, r.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: p } })
                        : (0, r.jsx)(i.V, { code: o, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    6627: (e, s, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/react/contexts',
        function () {
          return l(403);
        },
      ]);
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [6826, 2182, 1190, 3685, 636, 6593, 8792], () => s(6627)), (_N_E = e.O());
  },
]);
