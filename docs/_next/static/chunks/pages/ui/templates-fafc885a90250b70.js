(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [118],
  {
    780: (e, a, l) => {
      'use strict';
      l.r(a), l.d(a, { __N_SSG: () => p, default: () => x });
      var s = l(5640),
        r = l(148),
        d = l(8809);
      let t = (e) => {
        let { code: a = '' } = e,
          [l, t] = (0, r.useState)('');
        return (
          (0, r.useEffect)(() => {
            t((0, d.A)(window).sanitize(a));
          }, [a]),
          (0, s.jsx)('div', { dangerouslySetInnerHTML: { __html: l } })
        );
      };
      var n = l(8880),
        i = l(6826),
        c = l.n(i);
      let o = {
        blog: '\uD83D\uDCDD',
        blogs: '\uD83D\uDCDA',
        chat: '\uD83D\uDCAC',
        dashboard: '\uD83D\uDCCA',
        error: '❌',
        landing: '\uD83C\uDFE0',
        wallet: '\uD83D\uDCB0',
      };
      var p = !0;
      let x = (e) => {
        let { templates: a = [] } = e,
          [{ query: l = '' }, d] = (0, r.useState)({ query: '' }),
          i = a.filter((e) => {
            let { id: a, name: s } = e;
            return a.toLowerCase().includes(l.toLowerCase()) || s.toLowerCase().includes(l.toLowerCase());
          });
        return (0, s.jsx)(n.U, {
          query: l,
          setState: d,
          id: 'ui-templates',
          emoji: '\uD83D\uDCDD',
          title: 'atomic/templates',
          description:
            'are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages.',
          children: (0, s.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, s.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, s.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, s.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [
                      (0, s.jsx)('span', { className: 'capitalize', children: 'Templates' }),
                      ' (',
                      i.length,
                      ')',
                    ],
                  }),
                  i.length > 0 &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)('div', {
                          className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                          children: i.map((e) => {
                            var a;
                            let { id: l = '', group: r = '', name: d = '' } = e;
                            return (0, s.jsx)(
                              c(),
                              {
                                href: '#'.concat(l),
                                children: (0, s.jsx)('div', {
                                  className: 'col-span-1',
                                  children: (0, s.jsxs)('div', {
                                    className:
                                      'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                    children: [
                                      (0, s.jsx)('p', { className: 'text-2xl', children: null != (a = o[l]) ? a : '' }),
                                      (0, s.jsxs)('div', {
                                        className: 'flex flex-col gap-y-0.25',
                                        children: [
                                          (0, s.jsx)('p', { className: 'text-xs capitalize', children: r }),
                                          (0, s.jsx)('p', { className: 'font-semibold capitalize', children: d }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              },
                              l
                            );
                          }),
                        }),
                        (0, s.jsx)('div', {
                          className: 'flex flex-col gap-y-4 md:gap-y-8',
                          children: i.map((e) => {
                            let { id: a = '', name: l = '', code: r } = e;
                            return (0, s.jsx)(
                              c(),
                              {
                                href: '/ui/templates/'.concat(a),
                                children: (0, s.jsxs)('div', {
                                  id: a,
                                  className: 'flex flex-col gap-y-4 md:gap-y-8',
                                  children: [
                                    (0, s.jsxs)('h2', {
                                      className: 'text-2xl font-bold capitalize',
                                      children: ['\uD83D\uDCDD ', l],
                                    }),
                                    (0, s.jsx)('div', {
                                      className:
                                        'h-128 overflow-hidden rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                                      children: (0, s.jsx)(t, { code: r }),
                                    }),
                                  ],
                                }),
                              },
                              a
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
    3075: (e, a, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/ui/templates',
        function () {
          return l(780);
        },
      ]);
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [6826, 8809, 8880, 636, 6593, 8792], () => a(3075)), (_N_E = e.O());
  },
]);
