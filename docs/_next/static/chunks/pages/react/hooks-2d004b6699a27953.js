(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6748],
  {
    2791: (e, s, r) => {
      'use strict';
      r.r(s), r.d(s, { __N_SSG: () => c, default: () => n });
      var l = r(5640),
        a = r(6260),
        t = r(5695),
        i = r(6826),
        o = r.n(i),
        d = r(148),
        c = !0;
      let n = (e) => {
        let { hooks: s = [] } = e,
          [{ query: r = '' }, i] = (0, d.useState)({ query: '' }),
          c = s.filter((e) => {
            let { id: s, name: l } = e;
            return s.toLowerCase().includes(r.toLowerCase()) || l.toLowerCase().includes(r.toLowerCase());
          });
        return (0, l.jsx)(t.U, {
          query: r,
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
                    children: [(0, l.jsx)('span', { className: 'capitalize', children: 'Hooks' }), ' (', c.length, ')'],
                  }),
                  c.length > 0 &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)('div', {
                          className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                          children: c.map((e) => {
                            let { id: s = '', emoji: r = '', group: a, name: t = '' } = e;
                            return (0, l.jsx)(
                              o(),
                              {
                                href: '#'.concat(s),
                                children: (0, l.jsx)('div', {
                                  className: 'col-span-1',
                                  children: (0, l.jsxs)('div', {
                                    className:
                                      'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                    children: [
                                      (0, l.jsx)('p', { className: 'text-2xl', children: r }),
                                      (0, l.jsxs)('div', {
                                        className: 'flex flex-col gap-y-0.25',
                                        children: [
                                          (0, l.jsx)('p', { className: 'text-xs capitalize', children: a }),
                                          (0, l.jsx)('p', { className: 'font-semibold capitalize', children: t }),
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
                          children: c.map((e) => {
                            let { id: s = '', emoji: r = '', group: t = '', name: i = '', code: o = '' } = e;
                            return (0, l.jsx)(
                              'div',
                              {
                                className: 'flex flex-col gap-y-4',
                                children: (0, l.jsx)(a.C, {
                                  id: s,
                                  emoji: r,
                                  group: t,
                                  name: i,
                                  code: o,
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
    6260: (e, s, r) => {
      'use strict';
      r.d(s, { C: () => d });
      var l = r(5640),
        a = r(6921),
        t = r(8809),
        i = r(148),
        o = r(8899);
      let d = (e) => {
        let { id: s = '', emoji: r = '', group: d = '', name: c = '', code: n = '', codeOnly: u = !1 } = e,
          [p, x] = (0, i.useState)(''),
          [h, m] = (0, i.useState)(!0);
        return (
          (0, i.useEffect)(() => {
            x((0, t.A)(window).sanitize(n));
          }, [n]),
          (0, l.jsxs)('div', {
            id: s,
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, l.jsxs)('div', {
                className: 'flex items-center justify-between gap-x-2',
                children: [
                  (0, l.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      (0, l.jsx)('span', { className: 'text-4xl', children: r }),
                      (0, l.jsxs)('div', {
                        children: [
                          (0, l.jsx)('p', { className: 'text-xs capitalize', children: d }),
                          (0, l.jsx)('h3', { className: 'text-xl font-bold md:text-2xl', children: c }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      u &&
                        (0, l.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => (0, a.C)(n),
                          children: 'Copy',
                        }),
                      !u &&
                        (0, l.jsx)('button', {
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
              (0, l.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: u
                  ? (0, l.jsx)(o.V, { code: n, lang: 'tsx' })
                  : (0, l.jsx)(l.Fragment, {
                      children: h
                        ? (0, l.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: p } })
                        : (0, l.jsx)(o.V, { code: n, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    6921: (e, s, r) => {
      'use strict';
      r.d(s, { C: () => l });
      let l = (e) => {
        navigator.clipboard
          .writeText(e)
          .then(() => {
            alert('Copied to clipboard!');
          })
          .catch((e) => {
            console.error('Failed to copy: ', e);
          });
      };
    },
    7297: (e, s, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/react/hooks',
        function () {
          return r(2791);
        },
      ]);
    },
    8899: (e, s, r) => {
      'use strict';
      r.d(s, { V: () => i });
      var l = r(5640),
        a = r(148),
        t = r(2182);
      let i = (e) => {
        let { code: s, lang: r } = e,
          [i, o] = (0, a.useState)('');
        return (
          (0, a.useEffect)(() => {
            (async () => {
              o(await (0, t.Yz)(s, { lang: r, theme: 'github-dark' }));
            })();
          }),
          (0, l.jsx)('div', {
            className: 'w-full overflow-x-auto bg-neutral-900 p-4',
            dangerouslySetInnerHTML: { __html: i },
          })
        );
      };
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [6826, 2182, 1190, 5695, 636, 6593, 8792], () => s(7297)), (_N_E = e.O());
  },
]);
