(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3332],
  {
    3396: (e, s, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return t(6310);
        },
      ]);
    },
    6310: (e, s, t) => {
      'use strict';
      t.r(s), t.d(s, { default: () => c });
      var a = t(5640),
        l = t(5695),
        i = t(6826),
        r = t.n(i);
      let c = () =>
        (0, a.jsx)(l.U, {
          disabledSearch: !0,
          query: '',
          setState: () => {},
          id: 'atomic',
          emoji: '⚛️',
          title: 'atomic',
          subtitle: 'Free and Open Source Web Development Code',
          description:
            'is a modern, free collection of Tailwind UI, React Hooks, Contexts, Utilities, Icons, Charts, and Templates—built for fast, accessible, and maintainable interfaces.',
          features: ['Copy / Paste', 'Pure TailwindCSS', 'Pure React Code'],
          children: (0, a.jsx)('section', {
            className: 'py-4 md:py-8',
            children: (0, a.jsx)('div', {
              className: 'container mx-auto px-4 md:px-8',
              children: (0, a.jsx)('div', {
                className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4',
                children: l.l.map((e) => {
                  let { href: s = '', emoji: t = '', text: l = '', description: i = '' } = e;
                  return (0, a.jsxs)(
                    'div',
                    {
                      className: 'col-span-1 flex flex-col gap-y-2',
                      children: [
                        (0, a.jsx)(r(), {
                          href: s,
                          children: (0, a.jsxs)('h2', {
                            className: 'text-center text-xl font-semibold',
                            children: [
                              t,
                              ' ',
                              (0, a.jsx)('span', { className: 'border-b border-dotted', children: l }),
                            ],
                          }),
                        }),
                        (0, a.jsx)('p', {
                          className:
                            'mx-auto w-full max-w-sm text-center text-sm text-neutral-600 dark:text-neutral-400',
                          children: i,
                        }),
                      ],
                    },
                    s
                  );
                }),
              }),
            }),
          }),
        });
    },
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [6826, 5695, 636, 6593, 8792], () => s(3396)), (_N_E = e.O());
  },
]);
