(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    3396: (e, t, s) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return s(6310);
        },
      ]);
    },
    6310: (e, t, s) => {
      'use strict';
      s.r(t), s.d(t, { default: () => i });
      var a = s(5640),
        l = s(6916),
        c = s(6826),
        d = s.n(c);
      let i = () =>
        (0, a.jsx)(l.U, {
          disabledSearch: !0,
          query: '',
          setState: () => {},
          id: 'atomic/code',
          emoji: '⚛️',
          title: 'atomic/code',
          description:
            'A modern, free collection of Tailwind UI, React Hooks, Contexts, Utilities, Icons, Charts, and Templates—built for fast, accessible, and maintainable interfaces.',
          children: (0, a.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, a.jsx)('div', {
              className: 'container mx-auto px-4 md:px-8',
              children: (0, a.jsxs)('div', {
                className: 'flex flex-col gap-y-8 md:gap-y-16',
                children: [
                  (0, a.jsx)('h2', {
                    className: 'text-center text-2xl font-extrabold md:text-3xl md:font-black',
                    children: 'Supercharge your Web App with Atomic Code',
                  }),
                  (0, a.jsx)('div', {
                    className: 'grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16',
                    children: l.l.map((e) => {
                      let { href: t = '', emoji: s = '', full: l = '', description: c = '' } = e;
                      return (0, a.jsxs)(
                        'div',
                        {
                          className: 'col-span-1 flex flex-col gap-y-2',
                          children: [
                            (0, a.jsx)(d(), {
                              href: t,
                              children: (0, a.jsxs)('h2', {
                                className: 'text-center text-xl font-semibold',
                                children: [
                                  s,
                                  ' ',
                                  (0, a.jsx)('span', { className: 'border-b border-dotted', children: l }),
                                ],
                              }),
                            }),
                            (0, a.jsx)('p', {
                              className:
                                'mx-auto w-full max-w-sm text-center text-sm text-neutral-600 dark:text-neutral-400',
                              children: c,
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
            }),
          }),
        });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 6916, 636, 6593, 8792], () => t(3396)), (_N_E = e.O());
  },
]);
