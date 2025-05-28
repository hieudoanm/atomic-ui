(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [636],
  {
    602: (a) => {
      a.exports = {
        style: {
          fontFamily: "'Geist Mono', 'Geist Mono Fallback'",
          fontStyle: 'normal',
        },
        className: '__className_00560a',
        variable: '__variable_00560a',
      };
    },
    2758: () => {},
    3949: (a, e, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return s(6223);
        },
      ]);
    },
    6223: (a, e, s) => {
      'use strict';
      s.r(e), s.d(e, { default: () => m });
      var l = s(5640);
      s(2758);
      var n = s(7174),
        t = s.n(n),
        i = s(602),
        c = s.n(i),
        o = s(6909),
        r = s.n(o);
      let _ = '/atomic-ui';
      function m(a) {
        let { Component: e, pageProps: s } = a;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsxs)(r(), {
              children: [
                (0, l.jsx)('title', { children: 'atomic/ui' }),
                (0, l.jsx)('link', {
                  rel: 'icon',
                  href: ''.concat(_, '/favicon.ico'),
                  type: 'image/x-icon',
                }),
              ],
            }),
            (0, l.jsx)('div', {
              className: ''.concat(t().className, ' ').concat(c().className),
              children: (0, l.jsx)(e, { ...s }),
            }),
          ],
        });
      }
    },
    6909: (a, e, s) => {
      a.exports = s(6654);
    },
    7174: (a) => {
      a.exports = {
        style: { fontFamily: "'Geist', 'Geist Fallback'", fontStyle: 'normal' },
        className: '__className_65fa45',
        variable: '__variable_65fa45',
      };
    },
  },
  (a) => {
    var e = (e) => a((a.s = e));
    a.O(0, [6593, 8792], () => (e(3949), e(4427))), (_N_E = a.O());
  },
]);
