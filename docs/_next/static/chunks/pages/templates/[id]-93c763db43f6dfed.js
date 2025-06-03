(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3413],
  {
    1366: (e, a, s) => {
      'use strict';
      s.r(a), s.d(a, { __N_SSG: () => l, default: () => p });
      var t = s(5640),
        n = s(7921),
        i = s(8546),
        l = !0;
      let p = (e) => {
        let { template: a = { id: '', name: '', code: '' } } = e,
          { id: s = '', name: l = '', code: p = '' } = a;
        return (0, t.jsx)(i.U, {
          query: '',
          setState: () => {},
          id: 'templates',
          emoji: '\uD83D\uDCDD',
          title: 'atomic/templates',
          subtitle: 'Free and Open Source Web/App Templates',
          description:
            'are responsive, professionally designed web and app templates created for SaaS platforms and marketing landing pages.',
          features: ['Copy / Paste', 'Pure TailwindCSS', 'UI Components'],
          children: (0, t.jsx)('section', {
            className: 'py-4 md:py-8',
            children: (0, t.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, t.jsx)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: (0, t.jsx)(n.O, { id: s, emoji: '\uD83D\uDCDD', group: 'Template', name: l, code: p }),
              }),
            }),
          }),
        });
      };
    },
    3105: (e, a, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/templates/[id]',
        function () {
          return s(1366);
        },
      ]);
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [6826, 8809, 5031, 8450, 636, 6593, 8792], () => a(3105)), (_N_E = e.O());
  },
]);
