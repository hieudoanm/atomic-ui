(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2836],
  {
    6260: (e, r, t) => {
      'use strict';
      t.d(r, { C: () => n });
      var s = t(5640),
        l = t(6921),
        a = t(8809),
        i = t(148),
        d = t(8899);
      let n = (e) => {
        let { id: r = '', emoji: t = '', group: n = '', name: o = '', code: c = '', codeOnly: u = !1 } = e,
          [p, x] = (0, i.useState)(''),
          [m, b] = (0, i.useState)(!0);
        return (
          (0, i.useEffect)(() => {
            x((0, a.A)(window).sanitize(c));
          }, [c]),
          (0, s.jsxs)('div', {
            id: r,
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, s.jsxs)('div', {
                className: 'flex items-center justify-between gap-x-2',
                children: [
                  (0, s.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      (0, s.jsx)('span', { className: 'text-4xl', children: t }),
                      (0, s.jsxs)('div', {
                        children: [
                          (0, s.jsx)('p', { className: 'text-xs capitalize', children: n }),
                          (0, s.jsx)('h3', { className: 'text-xl font-bold md:text-2xl', children: o }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      u &&
                        (0, s.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => (0, l.C)(c),
                          children: 'Copy',
                        }),
                      !u &&
                        (0, s.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => b((e) => !e),
                          children: m ? 'Preview' : 'Code',
                        }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: u
                  ? (0, s.jsx)(d.V, { code: c, lang: 'tsx' })
                  : (0, s.jsx)(s.Fragment, {
                      children: m
                        ? (0, s.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: p } })
                        : (0, s.jsx)(d.V, { code: c, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    6921: (e, r, t) => {
      'use strict';
      t.d(r, { C: () => s });
      let s = (e) => {
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
    7017: (e, r, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/ui/templates/[id]',
        function () {
          return t(7084);
        },
      ]);
    },
    7084: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { __N_SSG: () => c, default: () => u });
      var s = t(5640),
        l = t(6260),
        a = t(8809),
        i = t(148);
      let d = (e) => {
          let { name: r = '', code: t = '', onClose: l = () => {} } = e,
            [d, n] = (0, i.useState)('');
          return (
            (0, i.useEffect)(() => {
              n((0, a.A)(window).sanitize(t));
            }, [t]),
            (0, s.jsxs)('div', {
              className:
                'fixed top-0 right-0 bottom-0 left-0 z-50 flex h-screen w-screen flex-col bg-white dark:bg-neutral-900',
              children: [
                (0, s.jsx)('div', {
                  className: 'border-b border-neutral-200 dark:border-neutral-800',
                  children: (0, s.jsx)('div', {
                    className: 'container mx-auto px-4 py-2 md:px-8 md:py-4',
                    children: (0, s.jsxs)('div', {
                      className: 'flex w-full items-center justify-between',
                      children: [
                        (0, s.jsx)('p', { className: 'capitalize', children: r }),
                        (0, s.jsx)('button', {
                          type: 'button',
                          className: 'cursor-pointer',
                          onClick: l,
                          children: 'Close',
                        }),
                      ],
                    }),
                  }),
                }),
                (0, s.jsx)('div', {
                  className: 'grow overflow-y-auto p-4 md:p-8',
                  children: (0, s.jsx)('div', { className: 'w-full', dangerouslySetInnerHTML: { __html: d } }),
                }),
              ],
            })
          );
        },
        n = (e) => {
          let [r, t] = (0, i.useState)(!!e);
          return {
            value: r,
            toggle: (0, i.useCallback)(() => {
              t((e) => !e);
            }, []),
            setValue: t,
          };
        };
      var o = t(8880),
        c = !0;
      let u = (e) => {
        let { template: r = { id: '', name: '', code: '' } } = e,
          { value: t, toggle: a } = n(!1),
          { id: i = '', name: c = '', code: u = '' } = r;
        return (0, s.jsxs)(o.U, {
          disabledSearch: !0,
          query: '',
          setState: () => {},
          id: 'templates',
          emoji: '\uD83D\uDCDD',
          title: 'atomic/templates',
          description:
            'are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages.',
          children: [
            (0, s.jsx)('section', {
              className: 'py-8 md:py-16',
              children: (0, s.jsx)('div', {
                className: 'container mx-auto px-8',
                children: (0, s.jsxs)('div', {
                  className: 'flex flex-col gap-y-4 md:gap-y-8',
                  children: [
                    (0, s.jsx)('button', {
                      type: 'button',
                      className:
                        'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                      onClick: () => a(),
                      children: 'Full Screen',
                    }),
                    (0, s.jsx)(l.C, { id: i, emoji: '\uD83D\uDCDD', group: 'Template', name: c, code: u }),
                  ],
                }),
              }),
            }),
            t && (0, s.jsx)(d, { name: c, code: u, onClose: () => a() }),
          ],
        });
      };
    },
    8899: (e, r, t) => {
      'use strict';
      t.d(r, { V: () => d });
      var s = t(5640),
        l = t(6921),
        a = t(148),
        i = t(7382);
      let d = (e) => {
        let { code: r, lang: t } = e,
          [d, n] = (0, a.useState)('');
        return (
          (0, a.useEffect)(() => {
            (async () => {
              n(await (0, i.Yz)(r, { lang: t, theme: 'github-dark' }));
            })();
          }),
          (0, s.jsx)('button', {
            className: 'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: d },
            onClick: () => (0, l.C)(r),
          })
        );
      };
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [6826, 7382, 8809, 8880, 636, 6593, 8792], () => r(7017)), (_N_E = e.O());
  },
]);
