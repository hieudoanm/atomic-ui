(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5146],
  {
    6921: (e, t, r) => {
      'use strict';
      r.d(t, { C: () => l });
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
    6961: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/tools/log',
        function () {
          return r(8793);
        },
      ]);
    },
    8793: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { __N_SSG: () => d, default: () => i });
      var l = r(5640),
        s = r(8899),
        a = r(8880),
        o = r(6921),
        d = !0;
      let i = (e) => {
        let { code: t = '' } = e;
        return (0, l.jsx)(a.U, {
          disabledSearch: !0,
          query: '',
          setState: () => {},
          id: 'tools-logger',
          emoji: '\uD83D\uDCDD',
          title: 'atomic/logger',
          description: '',
          children: (0, l.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, l.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, l.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, l.jsxs)('div', {
                    className: 'flex items-center justify-between gap-x-2',
                    children: [
                      (0, l.jsxs)('div', {
                        className: 'flex items-center gap-x-2',
                        children: [
                          (0, l.jsx)('span', { className: 'text-4xl', children: '\uD83D\uDCDD' }),
                          (0, l.jsxs)('div', {
                            children: [
                              (0, l.jsx)('p', { className: 'text-xs capitalize', children: 'Tools' }),
                              (0, l.jsx)('h3', {
                                className: 'text-xl font-bold capitalize md:text-2xl',
                                children: 'Logger',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)('button', {
                        type: 'button',
                        className:
                          'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                        onClick: () => (0, o.C)(t),
                        children: 'Copy',
                      }),
                    ],
                  }),
                  (0, l.jsx)('div', {
                    className:
                      'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                    children: (0, l.jsx)(s.V, { code: t, lang: 'ts' }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    8899: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => d });
      var l = r(5640),
        s = r(6921),
        a = r(148),
        o = r(7382);
      let d = (e) => {
        let { code: t, lang: r } = e,
          [d, i] = (0, a.useState)('');
        return (
          (0, a.useEffect)(() => {
            (async () => {
              i(await (0, o.Yz)(t, { lang: r, theme: 'github-dark' }));
            })();
          }),
          (0, l.jsx)('button', {
            className: 'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: d },
            onClick: () => (0, s.C)(t),
          })
        );
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 7382, 8880, 636, 6593, 8792], () => t(6961)), (_N_E = e.O());
  },
]);
