(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1359],
  {
    2351: (e, r, t) => {
      'use strict';
      t.d(r, { L: () => n });
      var s = t(5640),
        l = t(6826),
        i = t.n(l);
      let n = (e) => {
        let { code: r = '', title: t = '', message: l = '', action: n = '' } = e;
        return (0, s.jsx)('div', {
          className:
            'flex min-h-screen items-center justify-center bg-white px-4 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: (0, s.jsxs)('div', {
            className: 'text-center',
            children: [
              (0, s.jsx)('h1', { className: 'text-9xl font-extrabold', children: r }),
              (0, s.jsx)('p', { className: 'mt-4 text-2xl font-semibold', children: t }),
              (0, s.jsx)('p', { className: 'mt-2', children: l }),
              (0, s.jsx)(i(), {
                href: '/',
                className:
                  'mt-6 inline-block cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                children: n,
              }),
            ],
          }),
        });
      };
    },
    2608: (e, r, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/403',
        function () {
          return t(6317);
        },
      ]);
    },
    6317: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { default: () => i });
      var s = t(5640),
        l = t(2351);
      let i = () =>
        (0, s.jsx)(l.L, {
          code: '403',
          title: 'Access Denied',
          message: 'You do not have permission to view this page.',
          action: 'Go Home',
        });
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [6826, 636, 6593, 8792], () => r(2608)), (_N_E = e.O());
  },
]);
