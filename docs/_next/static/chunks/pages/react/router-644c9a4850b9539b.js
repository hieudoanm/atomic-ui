(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2919],
  {
    129: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/react/router',
        function () {
          return r(1680);
        },
      ]);
    },
    301: (e, t, r) => {
      'use strict';
      r.d(t, { C: () => a });
      let a = (e) => {
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
    1680: (e, t, r) => {
      'use strict';
      (r.r(t), r.d(t, { __N_SSG: () => c, default: () => i }));
      var a = r(5640),
        s = r(7327),
        l = r(5730),
        d = r(301),
        c = !0;
      let i = (e) => {
        let { code: t = '' } = e;
        return (0, a.jsx)(l.U, {
          disabledSearch: !0,
          query: '',
          setState: () => {},
          id: 'react-router',
          emoji: '\uD83E\uDDED',
          title: 'atomic/router',
          description: '',
          children: (0, a.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, a.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, a.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, a.jsxs)('div', {
                    className: 'flex items-center justify-between gap-x-2',
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'flex items-center gap-x-2',
                        children: [
                          (0, a.jsx)('span', { className: 'text-4xl', children: '\uD83E\uDDED' }),
                          (0, a.jsxs)('div', {
                            children: [
                              (0, a.jsx)('p', { className: 'text-xs capitalize', children: 'React' }),
                              (0, a.jsx)('h3', {
                                className: 'text-xl font-bold capitalize md:text-2xl',
                                children: 'Router',
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)('button', {
                        type: 'button',
                        className:
                          'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                        onClick: () => (0, d.C)(t),
                        children: 'Copy',
                      }),
                    ],
                  }),
                  (0, a.jsx)('div', {
                    className:
                      'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                    children: (0, a.jsx)(s.V, { code: t, lang: 'tsx' }),
                  }),
                ],
              }),
            }),
          }),
        });
      };
    },
    7327: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => d });
      var a = r(5640),
        s = r(148),
        l = r(6500);
      let d = (e) => {
        let { code: t, lang: r } = e,
          [d, c] = (0, s.useState)('');
        return (
          (0, s.useEffect)(() => {
            (async () => {
              c(await (0, l.Yz)(t, { lang: r, theme: 'github-dark' }));
            })();
          }),
          (0, a.jsx)('div', {
            className: 'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: d },
          })
        );
      };
    },
  },
  (e) => {
    (e.O(0, [7566, 4119, 5730, 636, 6593, 8792], () => e((e.s = 129))), (_N_E = e.O()));
  },
]);
