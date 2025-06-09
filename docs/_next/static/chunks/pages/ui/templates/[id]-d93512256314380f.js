(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2836],
  {
    6260: (e, t, r) => {
      'use strict';
      r.d(t, { C: () => o });
      var s = r(5640),
        l = r(6921),
        a = r(8809),
        i = r(148),
        n = r(8899);
      let o = (e) => {
        let { id: t = '', emoji: r = '', group: o = '', name: d = '', code: c = '', codeOnly: u = !1 } = e,
          [p, x] = (0, i.useState)(''),
          [h, m] = (0, i.useState)(!0);
        return (
          (0, i.useEffect)(() => {
            x((0, a.A)(window).sanitize(c));
          }, [c]),
          (0, s.jsxs)('div', {
            id: t,
            className: 'flex flex-col gap-y-4 md:gap-y-8',
            children: [
              (0, s.jsxs)('div', {
                className: 'flex items-center justify-between gap-x-2',
                children: [
                  (0, s.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      (0, s.jsx)('span', { className: 'text-4xl', children: r }),
                      (0, s.jsxs)('div', {
                        children: [
                          (0, s.jsx)('p', { className: 'text-xs capitalize', children: o }),
                          (0, s.jsx)('h3', { className: 'text-xl font-bold md:text-2xl', children: d }),
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
                          onClick: () => m((e) => !e),
                          children: h ? 'Preview' : 'Code',
                        }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: u
                  ? (0, s.jsx)(n.V, { code: c, lang: 'tsx' })
                  : (0, s.jsx)(s.Fragment, {
                      children: h
                        ? (0, s.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: p } })
                        : (0, s.jsx)(n.V, { code: c, lang: 'html' }),
                    }),
              }),
            ],
          })
        );
      };
    },
    6921: (e, t, r) => {
      'use strict';
      r.d(t, { C: () => s });
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
    7017: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/ui/templates/[id]',
        function () {
          return r(7084);
        },
      ]);
    },
    7084: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { __N_SSG: () => c, default: () => u });
      var s = r(5640),
        l = r(6260),
        a = r(8809),
        i = r(148);
      let n = (e) => {
          let { name: t = '', code: r = '', onClose: l = () => {} } = e,
            [n, o] = (0, i.useState)('');
          return (
            (0, i.useEffect)(() => {
              o((0, a.A)(window).sanitize(r));
            }, [r]),
            (0, s.jsxs)('div', {
              className:
                'fixed top-0 right-0 bottom-0 left-0 z-50 flex h-screen w-screen flex-col bg-white dark:bg-neutral-900',
              children: [
                (0, s.jsx)('div', {
                  className: 'container mx-auto px-8 py-4',
                  children: (0, s.jsxs)('div', {
                    className: 'flex w-full items-center justify-between',
                    children: [
                      (0, s.jsx)('p', { className: 'capitalize', children: t }),
                      (0, s.jsx)('button', {
                        type: 'button',
                        className: 'cursor-pointer',
                        onClick: l,
                        children: 'Close',
                      }),
                    ],
                  }),
                }),
                (0, s.jsx)('div', {
                  className: 'grow overflow-y-auto',
                  children: (0, s.jsx)('div', { className: 'h-full w-full', dangerouslySetInnerHTML: { __html: n } }),
                }),
              ],
            })
          );
        },
        o = (e) => {
          let [t, r] = (0, i.useState)(!!e);
          return {
            value: t,
            toggle: (0, i.useCallback)(() => {
              r((e) => !e);
            }, []),
            setValue: r,
          };
        };
      var d = r(8880),
        c = !0;
      let u = (e) => {
        let { template: t = { id: '', name: '', code: '' } } = e,
          { value: r, toggle: a } = o(!1),
          { id: i = '', name: c = '', code: u = '' } = t;
        return (0, s.jsxs)(d.U, {
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
            r && (0, s.jsx)(n, { name: c, code: u, onClose: () => a() }),
          ],
        });
      };
    },
    8899: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => n });
      var s = r(5640),
        l = r(6921),
        a = r(148),
        i = r(7382);
      let n = (e) => {
        let { code: t, lang: r } = e,
          [n, o] = (0, a.useState)('');
        return (
          (0, a.useEffect)(() => {
            (async () => {
              o(await (0, i.Yz)(t, { lang: r, theme: 'github-dark' }));
            })();
          }),
          (0, s.jsx)('button', {
            className: 'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: n },
            onClick: () => (0, l.C)(t),
          })
        );
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 7382, 8809, 8880, 636, 6593, 8792], () => t(7017)), (_N_E = e.O());
  },
]);
