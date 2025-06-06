(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2836],
  {
    31: (e, a, s) => {
      'use strict';
      s.r(a), s.d(a, { __N_SSG: () => d, default: () => l });
      var t = s(5640),
        i = s(6260),
        n = s(9597),
        d = !0;
      let l = (e) => {
        let { template: a = { id: '', name: '', code: '' } } = e,
          { id: s = '', name: d = '', code: l = '' } = a;
        return (0, t.jsx)(n.U, {
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
          children: (0, t.jsx)('section', {
            className: 'py-4 md:py-8',
            children: (0, t.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, t.jsx)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: (0, t.jsx)(i.C, { id: s, emoji: '\uD83D\uDCDD', group: 'Template', name: d, code: l }),
              }),
            }),
          }),
        });
      };
    },
    7017: (e, a, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/ui/templates/[id]',
        function () {
          return s(31);
        },
      ]);
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [6826, 1190, 2182, 3988, 636, 6593, 8792], () => a(7017)), (_N_E = e.O());
  },
]);
