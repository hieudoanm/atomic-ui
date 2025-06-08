(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [118],
  {
    780: (e, a, s) => {
      'use strict';
      s.r(a), s.d(a, { __N_SSG: () => p, default: () => x });
      var l = s(5640),
        r = s(148),
        d = s(8809);
      let t = (e) => {
        let { code: a = '' } = e,
          [s, t] = (0, r.useState)('');
        return (
          (0, r.useEffect)(() => {
            t((0, d.A)(window).sanitize(a));
          }, [a]),
          (0, l.jsx)('div', { dangerouslySetInnerHTML: { __html: s } })
        );
      };
      var n = s(6916),
        i = s(6826),
        c = s.n(i);
      let o = {
        blog: '\uD83D\uDCDD',
        blogs: '\uD83D\uDCDA',
        chat: '\uD83D\uDCAC',
        dashboard: '\uD83D\uDCCA',
        error: '❌',
        landing: '\uD83C\uDFE0',
      };
      var p = !0;
      let x = (e) => {
        let { templates: a = [] } = e,
          [{ query: s = '' }, d] = (0, r.useState)({ query: '' }),
          i = a.filter((e) => {
            let { id: a, name: l } = e;
            return a.toLowerCase().includes(s.toLowerCase()) || l.toLowerCase().includes(s.toLowerCase());
          });
        return (0, l.jsx)(n.U, {
          query: s,
          setState: d,
          id: 'ui-templates',
          emoji: '\uD83D\uDCDD',
          title: 'atomic/templates',
          description:
            'are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages.',
          children: (0, l.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, l.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, l.jsxs)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, l.jsxs)('h2', {
                    className: 'text-2xl font-bold',
                    children: [
                      (0, l.jsx)('span', { className: 'capitalize', children: 'Templates' }),
                      ' (',
                      i.length,
                      ')',
                    ],
                  }),
                  i.length > 0 &&
                    (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)('div', {
                          className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-6',
                          children: i.map((e) => {
                            var a;
                            let { id: s = '', name: r = '' } = e;
                            return (0, l.jsx)(
                              c(),
                              {
                                href: '#'.concat(s),
                                children: (0, l.jsx)('div', {
                                  className: 'col-span-1',
                                  children: (0, l.jsxs)('div', {
                                    className:
                                      'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                    children: [
                                      (0, l.jsx)('p', { className: 'text-2xl', children: null != (a = o[s]) ? a : '' }),
                                      (0, l.jsxs)('div', {
                                        className: 'flex flex-col gap-y-0.25',
                                        children: [
                                          (0, l.jsx)('p', { className: 'text-xs capitalize', children: 'Templates' }),
                                          (0, l.jsx)('p', { className: 'font-semibold capitalize', children: r }),
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
                          className: 'flex flex-col gap-y-4 md:gap-y-8',
                          children: i.map((e) => {
                            let { id: a = '', name: s = '', code: r } = e;
                            return (0, l.jsx)(
                              c(),
                              {
                                href: '/ui/templates/'.concat(a),
                                children: (0, l.jsxs)('div', {
                                  id: a,
                                  className: 'flex flex-col gap-y-4 md:gap-y-8',
                                  children: [
                                    (0, l.jsxs)('h2', {
                                      className: 'text-2xl font-bold capitalize',
                                      children: ['\uD83D\uDCDD ', s],
                                    }),
                                    (0, l.jsx)('div', {
                                      className:
                                        'h-128 overflow-hidden rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                                      children: (0, l.jsx)(t, { code: r }),
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
    3075: (e, a, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/ui/templates',
        function () {
          return s(780);
        },
      ]);
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [6826, 8809, 6916, 636, 6593, 8792], () => a(3075)), (_N_E = e.O());
  },
]);
