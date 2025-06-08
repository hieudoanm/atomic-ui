(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2836],
  {
    6260: (e, s, r) => {
      'use strict';
      r.d(s, { C: () => n });
      var l = r(5640),
        a = r(6921),
        t = r(8809),
        i = r(148),
        d = r(8899);
      let n = (e) => {
        let { id: s = '', emoji: r = '', group: n = '', name: o = '', code: c = '', codeOnly: u = !1 } = e,
          [p, x] = (0, i.useState)(''),
          [m, h] = (0, i.useState)(!0);
        return (
          (0, i.useEffect)(() => {
            x((0, t.A)(window).sanitize(c));
          }, [c]),
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
                          (0, l.jsx)('p', { className: 'text-xs capitalize', children: n }),
                          (0, l.jsx)('h3', { className: 'text-xl font-bold md:text-2xl', children: o }),
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
                          onClick: () => (0, a.C)(c),
                          children: 'Copy',
                        }),
                      !u &&
                        (0, l.jsx)('button', {
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
              (0, l.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: u
                  ? (0, l.jsx)(d.V, { code: c, lang: 'tsx' })
                  : (0, l.jsx)(l.Fragment, {
                      children: m
                        ? (0, l.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: p } })
                        : (0, l.jsx)(d.V, { code: c, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    7017: (e, s, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/ui/templates/[id]',
        function () {
          return r(7084);
        },
      ]);
    },
    7084: (e, s, r) => {
      'use strict';
      r.r(s), r.d(s, { __N_SSG: () => c, default: () => u });
      var l = r(5640),
        a = r(6260),
        t = r(8809),
        i = r(148);
      let d = (e) => {
          let { name: s = '', code: r = '', onClose: a = () => {} } = e,
            [d, n] = (0, i.useState)('');
          return (
            (0, i.useEffect)(() => {
              n((0, t.A)(window).sanitize(r));
            }, [r]),
            (0, l.jsxs)('div', {
              className:
                'fixed top-0 right-0 bottom-0 left-0 z-50 flex h-screen w-screen flex-col bg-white dark:bg-neutral-900',
              children: [
                (0, l.jsx)('div', {
                  className: 'container mx-auto px-8 py-4',
                  children: (0, l.jsxs)('div', {
                    className: 'flex w-full items-center justify-between',
                    children: [
                      (0, l.jsx)('p', { className: 'capitalize', children: s }),
                      (0, l.jsx)('button', {
                        type: 'button',
                        className: 'cursor-pointer',
                        onClick: a,
                        children: 'Close',
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)('div', {
                  className: 'grow overflow-y-auto',
                  children: (0, l.jsx)('div', { className: 'h-full w-full', dangerouslySetInnerHTML: { __html: d } }),
                }),
              ],
            })
          );
        },
        n = (e) => {
          let [s, r] = (0, i.useState)(!!e);
          return {
            value: s,
            toggle: (0, i.useCallback)(() => {
              r((e) => !e);
            }, []),
            setValue: r,
          };
        };
      var o = r(5695),
        c = !0;
      let u = (e) => {
        let { template: s = { id: '', name: '', code: '' } } = e,
          { value: r, toggle: t } = n(!1),
          { id: i = '', name: c = '', code: u = '' } = s;
        return (0, l.jsxs)(o.U, {
          disabledSearch: !0,
          query: '',
          setState: () => {},
          id: 'templates',
          emoji: '\uD83D\uDCDD',
          title: 'atomic/templates',
          description:
            'are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages.',
          children: [
            (0, l.jsx)('section', {
              className: 'py-8 md:py-16',
              children: (0, l.jsx)('div', {
                className: 'container mx-auto px-8',
                children: (0, l.jsxs)('div', {
                  className: 'flex flex-col gap-y-4 md:gap-y-8',
                  children: [
                    (0, l.jsx)('button', {
                      type: 'button',
                      className:
                        'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                      onClick: () => t(),
                      children: 'Full Screen',
                    }),
                    (0, l.jsx)(a.C, { id: i, emoji: '\uD83D\uDCDD', group: 'Template', name: c, code: u }),
                  ],
                }),
              }),
            }),
            r && (0, l.jsx)(d, { name: c, code: u, onClose: () => t() }),
          ],
        });
      };
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [6826, 2182, 1190, 3685, 636, 6593, 8792], () => s(7017)), (_N_E = e.O());
  },
]);
