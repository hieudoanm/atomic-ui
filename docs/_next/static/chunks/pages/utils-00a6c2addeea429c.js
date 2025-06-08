(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2807],
  {
    1236: (e, s, l) => {
      'use strict';
      l.r(s), l.d(s, { __N_SSG: () => c, default: () => o });
      var r = l(5640),
        a = l(6260),
        i = l(5695),
        t = l(6826),
        d = l.n(t),
        n = l(148),
        c = !0;
      let o = (e) => {
        let { utils: s = [] } = e,
          [{ query: l = '' }, t] = (0, n.useState)({ query: '' }),
          c = s.filter((e) => {
            let { id: s, name: r } = e;
            return s.toLowerCase().includes(l.toLowerCase()) || r.toLowerCase().includes(l.toLowerCase());
          });
        return (0, r.jsx)(i.U, {
          query: l,
          setState: t,
          id: 'utils',
          emoji: '\uD83E\uDDF0',
          title: 'atomic/utils',
          description:
            'is a free set of reusable utility functions designed to simplify common tasks and improve code efficiency and maintainability.',
          children: (0, r.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, r.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, r.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, r.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [(0, r.jsx)('span', { className: 'capitalize', children: 'Utils' }), ' (', c.length, ')'],
                  }),
                  c.length > 0 &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsx)('div', {
                          className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                          children: c.map((e) => {
                            let { id: s = '', emoji: l = '', group: a, name: i = '' } = e;
                            return (0, r.jsx)(
                              d(),
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
                                          (0, r.jsx)('p', { className: 'font-semibold capitalize', children: i }),
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
                            let { id: s = '', emoji: l = '', group: i = '', name: t = '', code: d = '' } = e;
                            return (0, r.jsx)(
                              'div',
                              {
                                className: 'flex flex-col gap-y-4',
                                children: (0, r.jsx)(a.C, {
                                  id: s,
                                  emoji: l,
                                  group: i,
                                  name: t,
                                  code: d,
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
        i = l(8809),
        t = l(148),
        d = l(8899);
      let n = (e) => {
        let { id: s = '', emoji: l = '', group: n = '', name: c = '', code: o = '', codeOnly: u = !1 } = e,
          [p, x] = (0, t.useState)(''),
          [m, h] = (0, t.useState)(!0);
        return (
          (0, t.useEffect)(() => {
            x((0, i.A)(window).sanitize(o));
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
                      u &&
                        (0, r.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => (0, a.C)(o),
                          children: 'Copy',
                        }),
                      !u &&
                        (0, r.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => h((e) => !e),
                          children: m ? 'Preview' : 'Code',
                        }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: u
                  ? (0, r.jsx)(d.V, { code: o, lang: 'tsx' })
                  : (0, r.jsx)(r.Fragment, {
                      children: m
                        ? (0, r.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: p } })
                        : (0, r.jsx)(d.V, { code: o, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
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
    e.O(0, [6826, 2182, 1190, 3685, 636, 6593, 8792], () => s(6917)), (_N_E = e.O());
  },
]);
