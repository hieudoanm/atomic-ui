(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2836],
  {
    31: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { __N_SSG: () => d, default: () => i });
      var s = r(5640),
        a = r(6260),
        l = r(5695),
        d = !0;
      let i = (e) => {
        let { template: t = { id: '', name: '', code: '' } } = e,
          { id: r = '', name: d = '', code: i = '' } = t;
        return (0, s.jsx)(l.U, {
          disabledSearch: !0,
          query: '',
          setState: () => {},
          id: 'templates',
          emoji: '\uD83D\uDCDD',
          title: 'atomic/templates',
          subtitle: 'Free and Open Source Web/App Templates',
          description:
            'are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages.',
          features: ['Copy / Paste', 'Pure TailwindCSS', 'UI Components'],
          children: (0, s.jsx)('section', {
            className: 'py-4 md:py-8',
            children: (0, s.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, s.jsx)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: (0, s.jsx)(a.C, { id: r, emoji: '\uD83D\uDCDD', group: 'Template', name: d, code: i }),
              }),
            }),
          }),
        });
      };
    },
    6260: (e, t, r) => {
      'use strict';
      r.d(t, { C: () => n });
      var s = r(5640),
        a = r(6921),
        l = r(8809),
        d = r(148),
        i = r(8899);
      let n = (e) => {
        let { id: t = '', emoji: r = '', group: n = '', name: o = '', code: c = '', codeOnly: p = !1 } = e,
          [u, x] = (0, d.useState)(''),
          [m, h] = (0, d.useState)(!0);
        return (
          (0, d.useEffect)(() => {
            x((0, l.A)(window).sanitize(c));
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
                          (0, s.jsx)('p', { className: 'text-xs capitalize', children: n }),
                          (0, s.jsx)('h3', { className: 'text-xl font-bold md:text-2xl', children: o }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)('div', {
                    className: 'flex items-center gap-x-2',
                    children: [
                      p &&
                        (0, s.jsx)('button', {
                          type: 'button',
                          className:
                            'cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                          onClick: () => (0, a.C)(c),
                          children: 'Copy',
                        }),
                      !p &&
                        (0, s.jsx)('button', {
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
              (0, s.jsx)('div', {
                className:
                  'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                children: p
                  ? (0, s.jsx)(i.V, { code: c, lang: 'tsx' })
                  : (0, s.jsx)(s.Fragment, {
                      children: m
                        ? (0, s.jsx)('div', { className: 'w-full p-4 md:p-8', dangerouslySetInnerHTML: { __html: u } })
                        : (0, s.jsx)(i.V, { code: c, lang: 'html' }),
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
          return r(31);
        },
      ]);
    },
    8899: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => d });
      var s = r(5640),
        a = r(148),
        l = r(2182);
      let d = (e) => {
        let { code: t, lang: r } = e,
          [d, i] = (0, a.useState)('');
        return (
          (0, a.useEffect)(() => {
            (async () => {
              i(await (0, l.Yz)(t, { lang: r, theme: 'github-dark' }));
            })();
          }),
          (0, s.jsx)('div', {
            className: 'w-full overflow-x-auto bg-neutral-900 p-4',
            dangerouslySetInnerHTML: { __html: d },
          })
        );
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 2182, 1190, 5695, 636, 6593, 8792], () => t(7017)), (_N_E = e.O());
  },
]);
