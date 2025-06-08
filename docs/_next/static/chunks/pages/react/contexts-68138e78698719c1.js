(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8048],
  {
    403: (e, s, t) => {
      'use strict';
      t.r(s), t.d(s, { __N_SSG: () => c, default: () => o });
      var r = t(5640),
        l = t(6260),
        a = t(6916),
        i = t(6826),
        d = t.n(i),
        n = t(148),
        c = !0;
      let o = (e) => {
        let { contexts: s = [] } = e,
          [{ query: t = '' }, i] = (0, n.useState)({ query: '' }),
          c = s.filter((e) => {
            let { id: s, name: r } = e;
            return s.toLowerCase().includes(t.toLowerCase()) || r.toLowerCase().includes(t.toLowerCase());
          });
        return (0, r.jsx)(a.U, {
          query: t,
          setState: i,
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
                            let { id: s = '', emoji: t = '', group: l, name: a = '' } = e;
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
                                      (0, r.jsx)('p', { className: 'text-2xl', children: t }),
                                      (0, r.jsxs)('div', {
                                        className: 'flex flex-col gap-y-0.25',
                                        children: [
                                          (0, r.jsx)('p', { className: 'text-xs capitalize', children: l }),
                                          (0, r.jsx)('p', { className: 'font-semibold capitalize', children: a }),
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
                            let { id: s = '', emoji: t = '', group: a = '', name: i = '', code: d = '' } = e;
                            return (0, r.jsx)(
                              'div',
                              {
                                className: 'flex flex-col gap-y-4',
                                children: (0, r.jsx)(l.C, {
                                  id: s,
                                  emoji: t,
                                  group: a,
                                  name: i,
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
    6260: (e, s, t) => {
      'use strict';
      t.d(s, { C: () => n });
      var r = t(5640),
        l = t(6921),
        a = t(8809),
        i = t(148),
        d = t(8899);
      let n = (e) => {
        let { id: s = '', emoji: t = '', group: n = '', name: c = '', code: o = '', codeOnly: u = !1 } = e,
          [x, p] = (0, i.useState)(''),
          [h, m] = (0, i.useState)(!0);
        return (
          (0, i.useEffect)(() => {
            p((0, a.A)(window).sanitize(o));
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
                      (0, r.jsx)('span', { className: 'text-4xl', children: t }),
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
                          onClick: () => (0, l.C)(o),
                          children: 'Copy',
                        }),
                      !u &&
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
                children: u
                  ? (0, r.jsx)(d.V, { code: o, lang: 'tsx' })
                  : (0, r.jsx)(r.Fragment, {
                      children: h
                        ? (0, r.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: x } })
                        : (0, r.jsx)(d.V, { code: o, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    6627: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/react/contexts',
        function () {
          return t(403);
        },
      ]);
    },
    6921: (e, s, t) => {
      'use strict';
      t.d(s, { C: () => r });
      let r = (e) => {
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
    8899: (e, s, t) => {
      'use strict';
      t.d(s, { V: () => d });
      var r = t(5640),
        l = t(6921),
        a = t(148),
        i = t(7382);
      let d = (e) => {
        let { code: s, lang: t } = e,
          [d, n] = (0, a.useState)('');
        return (
          (0, a.useEffect)(() => {
            (async () => {
              n(await (0, i.Yz)(s, { lang: t, theme: 'github-dark' }));
            })();
          }),
          (0, r.jsx)('button', {
            className: 'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: d },
            onClick: () => (0, l.C)(s),
          })
        );
      };
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [6826, 7382, 8809, 6916, 636, 6593, 8792], () => s(6627)), (_N_E = e.O());
  },
]);
