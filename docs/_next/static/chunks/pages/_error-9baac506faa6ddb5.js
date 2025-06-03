(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2731],
  {
    2351: (e, r, t) => {
      'use strict';
      t.d(r, { L: () => a });
      var s = t(5640),
        n = t(6826),
        l = t.n(n);
      let a = (e) => {
        let { code: r = '', title: t = '', message: n = '', action: a = '' } = e;
        return (0, s.jsx)('div', {
          className:
            'flex min-h-screen items-center justify-center bg-white px-4 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: (0, s.jsxs)('div', {
            className: 'text-center',
            children: [
              (0, s.jsx)('h1', { className: 'text-9xl font-extrabold', children: r }),
              (0, s.jsx)('p', { className: 'mt-4 text-2xl font-semibold', children: t }),
              (0, s.jsx)('p', { className: 'mt-2', children: n }),
              (0, s.jsx)(l(), {
                href: '/',
                className:
                  'mt-6 inline-block cursor-pointer rounded-md border border-purple-600 bg-purple-600 px-4 py-2 text-white shadow transition duration-200 hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-purple-700 dark:shadow-neutral-100/10 dark:hover:bg-purple-600',
                children: a,
              }),
            ],
          }),
        });
      };
    },
    6334: (e, r, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_error',
        function () {
          return t(6950);
        },
      ]);
    },
    6950: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { default: () => l });
      var s = t(5640),
        n = t(2351);
      let l = () =>
        (0, s.jsx)(n.L, {
          code: '500',
          title: 'Internal Server Error',
          message: 'Something went wrong on our end. Please try again later.',
          action: 'Go Home',
        });
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [6826, 636, 6593, 8792], () => r(6334)), (_N_E = e.O());
  },
]);
