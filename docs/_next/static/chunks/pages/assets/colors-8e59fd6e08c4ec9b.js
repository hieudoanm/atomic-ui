(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7926],
  {
    3905: (e, a, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/assets/colors',
        function () {
          return t(9989);
        },
      ]);
    },
    5695: (e, a, t) => {
      'use strict';
      t.d(a, { l: () => x, U: () => g });
      var r = t(5640);
      let s = (e) => {
        let { title: a = '' } = e;
        return (0, r.jsx)('footer', {
          className: 'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
          children: (0, r.jsxs)('div', {
            className: 'container mx-auto px-8 py-4',
            children: ['\xa9 ', new Date().getFullYear(), ' ⚛️ ', (0, r.jsx)('strong', { children: a })],
          }),
        });
      };
      var l = t(6826),
        i = t.n(l);
      let d = (e) => {
        let { emoji: a = '', title: t = '', description: s = '' } = e;
        return (0, r.jsx)('section', {
          className: 'py-8 md:py-16',
          children: (0, r.jsxs)('div', {
            className: 'container mx-auto flex flex-col items-center justify-center gap-y-4 px-8',
            children: [
              (0, r.jsxs)('h1', {
                className: 'text-4xl font-black whitespace-nowrap md:text-5xl',
                children: [
                  a,
                  ' ',
                  (0, r.jsx)('span', {
                    className:
                      'bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent dark:from-red-700 dark:via-purple-700 dark:to-blue-700',
                    children: t,
                  }),
                ],
              }),
              (0, r.jsx)('div', {
                className: 'flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8',
                children: (0, r.jsx)('p', { className: 'text-neutral-900 dark:text-neutral-100', children: s }),
              }),
              (0, r.jsx)(i(), {
                href: 'https://github.com/hieudoanm/atomic',
                target: '_blank',
                children: (0, r.jsx)('button', {
                  className:
                    'cursor-pointer rounded-lg border border-neutral-200 bg-transparent px-6 py-3 font-semibold text-neutral-900 dark:border-neutral-800 dark:text-white',
                  children: '\uD83D\uDC19 GitHub',
                }),
              }),
            ],
          }),
        });
      };
      var n = t(148);
      let c = () => {
          let [e, a] = (0, n.useState)(!1);
          return (
            (0, n.useEffect)(() => {
              'dark' === localStorage.getItem('theme') && (document.documentElement.classList.add('dark'), a(!0));
            }, []),
            {
              darkMode: e,
              toggleDarkMode: () => {
                a((e) => {
                  let a = !e;
                  return (
                    document.documentElement.classList.toggle('dark', a),
                    localStorage.setItem('theme', a ? 'dark' : 'light'),
                    a
                  );
                });
              },
            }
          );
        },
        o = (e) => Array.from(new Set(e)),
        f = { assets: '\uD83D\uDDBC️', react: '⚛️', ui: '\uD83C\uDFA8', utils: '\uD83E\uDDF0' },
        u = (e) => {
          let { links: a } = e;
          return (0, r.jsx)('div', {
            className: 'inline-block md:hidden',
            children: (0, r.jsxs)('div', {
              className: 'group relative inline-block text-left',
              children: [
                (0, r.jsx)('button', {
                  type: 'button',
                  className:
                    'inline-flex items-center justify-center gap-1 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800',
                  children: (0, r.jsx)('svg', {
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 448 512',
                    className: 'w-4',
                    fill: 'currentColor',
                    children: (0, r.jsx)('path', {
                      d: 'M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z',
                    }),
                  }),
                }),
                (0, r.jsx)('div', {
                  className:
                    'invisible absolute left-0 z-50 mt-2 w-48 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                  children: a.map((e) => {
                    let { id: a = '', href: t = '', emoji: s = '', text: l = '' } = e;
                    return (0, r.jsxs)(
                      i(),
                      {
                        href: t,
                        className: 'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                        children: [s, ' ', l],
                      },
                      a
                    );
                  }),
                }),
              ],
            }),
          });
        },
        p = (e) => {
          let { links: a = [] } = e,
            t = o(
              a.map((e) => {
                let { group: a } = e;
                return a;
              })
            ).map((e) => ({
              group: e,
              links: a.filter((a) => {
                let { group: t } = a;
                return e === t;
              }),
            }));
          return (0, r.jsx)('div', {
            className: 'hidden items-center gap-x-2 md:flex md:gap-x-4',
            children: t.map((e) => {
              var a;
              let { group: t, links: s = [] } = e;
              return (0, r.jsxs)(
                'div',
                {
                  className: 'group relative inline-block text-left',
                  children: [
                    (0, r.jsxs)('button', {
                      type: 'button',
                      className: 'truncate text-sm md:text-base',
                      children: [
                        null != (a = f[t]) ? a : '',
                        ' ',
                        (0, r.jsxs)('span', { className: 'hidden lg:inline', children: [t, ' (', s.length, ')'] }),
                      ],
                    }),
                    (0, r.jsx)('div', {
                      className:
                        'invisible absolute right-0 z-50 mt-2 w-48 origin-top-right scale-95 transform rounded-md border border-neutral-200 bg-white p-1 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:scale-100 group-hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100',
                      children: s.map((e) => {
                        let { id: a = '', href: t = '', emoji: s = '', text: l = '' } = e;
                        return (0, r.jsxs)(
                          i(),
                          {
                            href: t,
                            className: 'block rounded px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800',
                            children: [s, ' ', l],
                          },
                          a
                        );
                      }),
                    }),
                  ],
                },
                t
              );
            }),
          });
        },
        b = (e) => {
          let { emoji: a = '', title: t = '', links: s = [], query: l = '', setState: d, disabledSearch: n = !1 } = e,
            { darkMode: o = !1, toggleDarkMode: f } = c();
          return (0, r.jsx)('nav', {
            className: 'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
            children: (0, r.jsxs)('div', {
              className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
              children: [
                (0, r.jsxs)('div', {
                  className: 'flex items-center justify-between gap-x-4',
                  children: [
                    (0, r.jsx)(u, { links: s }),
                    (0, r.jsx)('div', {
                      className: 'flex items-center gap-x-4',
                      children: (0, r.jsxs)(i(), {
                        href: '/',
                        className: 'truncate text-lg font-bold md:text-xl',
                        children: [
                          a,
                          ' ',
                          (0, r.jsx)('span', {
                            className:
                              'bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent dark:from-red-700 dark:via-purple-700 dark:to-blue-700',
                            children: t,
                          }),
                        ],
                      }),
                    }),
                    (0, r.jsxs)('div', {
                      className: 'flex items-center gap-x-2 md:gap-x-4',
                      children: [
                        (0, r.jsx)(p, { links: s }),
                        (0, r.jsxs)('label', {
                          className:
                            'relative block h-8 w-14 rounded-full bg-neutral-200 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-purple-500 dark:bg-neutral-800 dark:has-checked:bg-purple-700',
                          'aria-label': 'Toggle dark mode',
                          children: [
                            (0, r.jsx)('input', {
                              type: 'checkbox',
                              checked: o,
                              className: 'peer sr-only',
                              onChange: () => {
                                f();
                              },
                            }),
                            (0, r.jsx)('span', {
                              className:
                                'absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6 dark:bg-neutral-900',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                !n &&
                  (0, r.jsx)('input', {
                    type: 'text',
                    placeholder: 'Search',
                    value: l,
                    className:
                      'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                    onChange: (e) => {
                      d((a) => ({ ...a, query: e.target.value }));
                    },
                  }),
              ],
            }),
          });
        };
      var h = t(1668),
        m = t.n(h);
      let x = [
          {
            group: 'assets',
            id: 'assets-colors',
            emoji: '\uD83C\uDFA8',
            href: '/assets/colors',
            text: 'Colors',
            full: 'Colors',
            description:
              'A vast, beautiful color palette out of the box, carefully crafted by expert designers and suitable for a wide range of different design styles.',
          },
          {
            group: 'assets',
            id: 'assets-emojis',
            emoji: '\uD83D\uDE04',
            href: '/assets/emojis',
            text: 'Emojis',
            full: 'Emojis',
            description:
              'A large collection of emojis to enhance user interfaces, chats, and messaging applications with expressive icons.',
          },
          {
            group: 'assets',
            id: 'assets-fonts',
            emoji: '\uD83D\uDD24',
            href: '/assets/fonts',
            text: 'Fonts',
            full: 'Fonts',
            description:
              'A curated collection of fonts for web and UI projects, supporting various styles, weights, and languages.',
          },
          {
            group: 'assets',
            id: 'assets-icons',
            emoji: '\uD83D\uDDBC️',
            href: '/assets/icons',
            text: 'Icons',
            full: 'SVG Icons',
            description:
              'High-quality scalable vector icons suitable for web and mobile interfaces, ensuring sharp visuals on any screen size.',
          },
          {
            group: 'react',
            id: 'react-contexts',
            emoji: '\uD83D\uDD17',
            href: '/react/contexts',
            text: 'Contexts',
            full: 'React Contexts',
            description:
              'React contexts to efficiently manage and share state or data across deeply nested components without prop drilling.',
          },
          {
            group: 'react',
            id: 'react-hooks',
            emoji: '\uD83E\uDE9D',
            href: '/react/hooks',
            text: 'Hooks',
            full: 'React Hooks',
            description:
              'Reusable React hooks that provide custom functionality to functional components, improving code modularity and reuse.',
          },
          {
            group: 'react',
            id: 'react-virtual-table',
            emoji: '\uD83D\uDCCB',
            href: '/react/virtual-table',
            text: 'Virtual Table',
            full: 'React Virtual Table',
            description:
              'Highly performant virtualized table component that renders only visible rows, ideal for large datasets.',
          },
          {
            group: 'ui',
            id: 'ui-charts',
            emoji: '\uD83D\uDCCA',
            href: '/ui/charts',
            text: 'Charts',
            full: 'UI Charts',
            description:
              'Versatile chart components for visualizing data in various formats including bar, line, pie, and more.',
          },
          {
            group: 'ui',
            id: 'ui-kit',
            emoji: '\uD83C\uDFA8',
            href: '/ui/kit',
            text: 'UI',
            full: 'UIKit',
            description:
              'Comprehensive collection of reusable UI components and design elements for building consistent user interfaces.',
          },
          {
            group: 'ui',
            id: 'ui-blocks',
            emoji: '\uD83E\uDDF1',
            href: '/ui/block',
            text: 'Blocks',
            full: 'UI Blocks',
            description:
              'Modular UI blocks designed for rapid assembly of complex interfaces using pre-built building components.',
          },
          {
            group: 'ui',
            id: 'ui-templates',
            emoji: '\uD83D\uDCDD',
            href: '/ui/templates',
            text: 'Templates',
            full: 'UI Templates',
            description:
              'Pre-designed UI templates that speed up development by providing ready-made layouts and styles.',
          },
          {
            group: 'utils',
            id: 'utils',
            emoji: '\uD83E\uDDF0',
            href: '/utils',
            text: 'Utils',
            full: 'Utilities',
            description:
              'A collection of general utility functions and helpers to simplify common programming tasks across projects.',
          },
        ],
        g = (e) => {
          var a;
          let {
              disabledSearch: t = !1,
              query: l = '',
              setState: i = () => {},
              id: n = '',
              emoji: c = '',
              title: o = '',
              description: f = '',
              children: u = (0, r.jsx)(r.Fragment, {}),
            } = e,
            { emoji: p = c, description: h = f } =
              null !=
              (a = x.find((e) => {
                let { id: a = '' } = e;
                return n === a;
              }))
                ? a
                : { emoji: c, description: f };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)(m(), {
                children: [
                  (0, r.jsxs)('title', { children: [p, ' ', o] }),
                  (0, r.jsx)('meta', { name: 'description', content: h || f }),
                ],
              }),
              (0, r.jsxs)('div', {
                className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
                children: [
                  (0, r.jsx)(b, {
                    emoji: ''.concat(p || c),
                    title: o,
                    links: x.filter((e) => {
                      let { id: a = '' } = e;
                      return n !== a;
                    }),
                    disabledSearch: t,
                    query: l,
                    setState: i,
                  }),
                  (0, r.jsxs)('div', {
                    className: 'grow overflow-auto',
                    children: [
                      (0, r.jsxs)('main', {
                        className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                        children: [(0, r.jsx)(d, { emoji: p || c, title: o, description: h || f }), u],
                      }),
                      (0, r.jsx)(s, { title: o }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    6921: (e, a, t) => {
      'use strict';
      t.d(a, { C: () => r });
      let r = (e) => {
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
    9989: (e, a, t) => {
      'use strict';
      t.r(a), t.d(a, { default: () => d });
      var r = t(5640);
      let s = {
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        lime: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
          950: '#1a2e05',
        },
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#0a2f26',
        },
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        sky: {
          50: '#e0f2fe',
          100: '#bae6fd',
          200: '#7dd3fc',
          300: '#38bdf8',
          400: '#0ea5e9',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#0a3b5c',
          950: '#042f44',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        violet: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#321465',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        fuchsia: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
          950: '#4a044e',
        },
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        rose: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#030712',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
          950: '#09090b',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        stone: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
      };
      var l = t(5695),
        i = t(6921);
      let d = () =>
        (0, r.jsx)(l.U, {
          query: '',
          setState: () => {},
          id: 'assets-colors',
          emoji: '',
          title: 'atomic/colors',
          description:
            'is an easy-to-access, curated collection of diverse emojis to enhance user experience and add personality to your interfaces.',
          children: (0, r.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, r.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, r.jsxs)('div', {
                className: 'mx-auto flex w-full max-w-2xl flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, r.jsx)('h2', { className: 'text-center text-3xl font-bold capitalize', children: 'Colors' }),
                  (0, r.jsx)('div', {
                    className: 'w-full overflow-y-auto',
                    children: (0, r.jsxs)('table', {
                      className: 'w-full',
                      children: [
                        (0, r.jsx)('thead', {
                          children: (0, r.jsxs)('tr', {
                            children: [
                              (0, r.jsx)('th', {}),
                              (0, r.jsx)('th', { className: 'w-12 px-2', children: '50' }),
                              (0, r.jsx)('th', { className: 'w-12 px-2', children: '100' }),
                              (0, r.jsx)('th', { className: 'w-12 px-2', children: '200' }),
                              (0, r.jsx)('th', { className: 'w-12 px-2', children: '300' }),
                              (0, r.jsx)('th', { className: 'w-12 px-2', children: '400' }),
                              (0, r.jsx)('th', { className: 'w-12 px-2', children: '500' }),
                              (0, r.jsx)('th', { className: 'w-12 px-2', children: '600' }),
                              (0, r.jsx)('th', { className: 'w-12 px-2', children: '700' }),
                              (0, r.jsx)('th', { className: 'w-12 px-2', children: '800' }),
                              (0, r.jsx)('th', { className: 'w-12 px-2', children: '900' }),
                              (0, r.jsx)('th', { className: 'w-12 px-2', children: '950' }),
                            ],
                          }),
                        }),
                        (0, r.jsx)('tbody', {
                          children: Object.entries(s).map((e) => {
                            let [a, t] = e;
                            return (0, r.jsxs)(
                              'tr',
                              {
                                children: [
                                  (0, r.jsx)('td', { className: 'capitalize', children: a }),
                                  Object.entries(t).map((e) => {
                                    let [a, t] = e;
                                    return (0, r.jsx)(
                                      'td',
                                      {
                                        align: 'center',
                                        className: 'p-1',
                                        children: (0, r.jsx)('button', {
                                          title: t,
                                          className:
                                            'aspect-square w-8 cursor-pointer rounded border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                          style: { backgroundColor: t },
                                          onClick: () => {
                                            (0, i.C)(t);
                                          },
                                        }),
                                      },
                                      ''.concat(a, '-').concat(t)
                                    );
                                  }),
                                ],
                              },
                              a
                            );
                          }),
                        }),
                      ],
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
    var a = (a) => e((e.s = a));
    e.O(0, [6826, 636, 6593, 8792], () => a(3905)), (_N_E = e.O());
  },
]);
