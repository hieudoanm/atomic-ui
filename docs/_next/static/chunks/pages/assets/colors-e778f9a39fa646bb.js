(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7926],
  {
    3905: (e, f, a) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/assets/colors',
        function () {
          return a(9989);
        },
      ]);
    },
    6921: (e, f, a) => {
      'use strict';
      a.d(f, { C: () => c });
      let c = (e) => {
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
    9989: (e, f, a) => {
      'use strict';
      a.r(f), a.d(f, { default: () => t });
      var c = a(5640);
      let d = {
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
      var s = a(5695),
        l = a(6921);
      let t = () =>
        (0, c.jsx)(s.U, {
          query: '',
          setState: () => {},
          id: 'assets-colors',
          emoji: '',
          title: 'atomic/colors',
          subtitle: 'Colors is the most important thing to web',
          description:
            'is an easy-to-access, curated collection of diverse emojis to enhance user experience and add personality to your interfaces.',
          features: ['Copy / Paste', 'Pure HEX', 'Shade of Colors'],
          children: (0, c.jsx)('section', {
            className: 'py-4 md:py-8',
            children: (0, c.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, c.jsxs)('div', {
                className: 'mx-auto flex w-full max-w-2xl flex-col gap-y-4 md:gap-y-8',
                children: [
                  (0, c.jsx)('h2', { className: 'text-center text-3xl font-bold capitalize', children: 'Colors' }),
                  (0, c.jsx)('div', {
                    className: 'w-full overflow-y-auto',
                    children: (0, c.jsxs)('table', {
                      className: 'w-full',
                      children: [
                        (0, c.jsx)('thead', {
                          children: (0, c.jsxs)('tr', {
                            children: [
                              (0, c.jsx)('th', {}),
                              (0, c.jsx)('th', { className: 'w-12 px-2', children: '50' }),
                              (0, c.jsx)('th', { className: 'w-12 px-2', children: '100' }),
                              (0, c.jsx)('th', { className: 'w-12 px-2', children: '200' }),
                              (0, c.jsx)('th', { className: 'w-12 px-2', children: '300' }),
                              (0, c.jsx)('th', { className: 'w-12 px-2', children: '400' }),
                              (0, c.jsx)('th', { className: 'w-12 px-2', children: '500' }),
                              (0, c.jsx)('th', { className: 'w-12 px-2', children: '600' }),
                              (0, c.jsx)('th', { className: 'w-12 px-2', children: '700' }),
                              (0, c.jsx)('th', { className: 'w-12 px-2', children: '800' }),
                              (0, c.jsx)('th', { className: 'w-12 px-2', children: '900' }),
                              (0, c.jsx)('th', { className: 'w-12 px-2', children: '950' }),
                            ],
                          }),
                        }),
                        (0, c.jsx)('tbody', {
                          children: Object.entries(d).map((e) => {
                            let [f, a] = e;
                            return (0, c.jsxs)(
                              'tr',
                              {
                                children: [
                                  (0, c.jsx)('td', { className: 'capitalize', children: f }),
                                  Object.entries(a).map((e) => {
                                    let [f, a] = e;
                                    return (0, c.jsx)(
                                      'td',
                                      {
                                        align: 'center',
                                        className: 'p-1',
                                        children: (0, c.jsx)('button', {
                                          title: a,
                                          className: 'aspect-square w-8 cursor-pointer rounded',
                                          style: { backgroundColor: a },
                                          onClick: () => {
                                            (0, l.C)(a);
                                          },
                                        }),
                                      },
                                      ''.concat(f, '-').concat(a)
                                    );
                                  }),
                                ],
                              },
                              f
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
    var f = (f) => e((e.s = f));
    e.O(0, [6826, 5695, 636, 6593, 8792], () => f(3905)), (_N_E = e.O());
  },
]);
