(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8947],
  {
    767: (e, t, l) => {
      'use strict';
      l.d(t, { F: () => h });
      var a = l(5640),
        r = l(148);
      let s = () => {
        let [e, t] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            'dark' === localStorage.getItem('theme') && (document.documentElement.classList.add('dark'), t(!0));
          }, []),
          {
            darkMode: e,
            toggleDarkMode: () => {
              t((e) => {
                let t = !e;
                return (
                  document.documentElement.classList.toggle('dark', t),
                  localStorage.setItem('theme', t ? 'dark' : 'light'),
                  t
                );
              });
            },
          }
        );
      };
      var n = l(1668),
        i = l.n(n),
        o = l(6826),
        d = l.n(o);
      let h = (e) => {
        let { title: t = '', links: l = [], query: r = '', setState: n, disabledSearch: o = !1 } = e,
          { darkMode: h = !1, toggleDarkMode: c } = s();
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(i(), { children: (0, a.jsx)('title', { children: t }) }),
            (0, a.jsx)('nav', {
              className: 'border-b border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: (0, a.jsxs)('div', {
                className: 'container mx-auto flex flex-col gap-y-2 px-8 py-4',
                children: [
                  (0, a.jsxs)('div', {
                    className: 'flex items-center justify-between gap-x-4',
                    children: [
                      (0, a.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          (0, a.jsxs)(d(), {
                            href: '/',
                            className: 'text-lg font-bold md:text-xl',
                            children: ['⚛️ ', t],
                          }),
                          (0, a.jsx)('div', {
                            className: 'hidden items-center gap-x-2 md:flex',
                            children: l.map((e) => {
                              let { id: t = '', href: l = '', text: r = '' } = e;
                              return (0, a.jsx)(d(), { href: l, className: 'text-sm md:text-base', children: r }, t);
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsxs)('div', {
                        className: 'flex items-center gap-x-4',
                        children: [
                          !o &&
                            (0, a.jsx)('div', {
                              className: 'hidden grow md:block',
                              children: (0, a.jsx)('input', {
                                type: 'text',
                                placeholder: 'Search',
                                value: r,
                                className:
                                  'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                                onChange: (e) => {
                                  n((t) => ({ ...t, query: e.target.value }));
                                },
                              }),
                            }),
                          (0, a.jsx)(d(), {
                            href: 'https://github.com/hieudoanm/atomic',
                            target: '_blank',
                            className: 'font-semibold',
                            children: 'GitHub',
                          }),
                          (0, a.jsxs)('label', {
                            className:
                              'relative block h-8 w-14 rounded-full bg-neutral-200 transition-colors [-webkit-tap-highlight-color:_transparent] has-checked:bg-purple-500 dark:bg-neutral-800 dark:has-checked:bg-purple-700',
                            'aria-label': 'Toggle dark mode',
                            children: [
                              (0, a.jsx)('input', {
                                type: 'checkbox',
                                checked: h,
                                className: 'peer sr-only',
                                onChange: () => {
                                  c();
                                },
                              }),
                              (0, a.jsx)('span', {
                                className:
                                  'absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-6 dark:bg-neutral-900',
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  !o &&
                    (0, a.jsx)('div', {
                      className: 'block md:hidden',
                      children: (0, a.jsx)('input', {
                        type: 'text',
                        placeholder: 'Search Components',
                        value: r,
                        className:
                          'w-full rounded-lg border border-neutral-200 px-4 py-2 shadow focus:outline-none dark:border-neutral-800 dark:shadow-neutral-100/10',
                        onChange: (e) => {
                          n((t) => ({ ...t, query: e.target.value }));
                        },
                      }),
                    }),
                ],
              }),
            }),
          ],
        });
      };
    },
    1461: (e, t, l) => {
      'use strict';
      l.d(t, { l: () => a });
      let a = [
        { id: 'charts', href: '/charts', text: 'charts' },
        { id: 'hooks', href: '/hooks', text: 'hooks' },
        { id: 'icons', href: '/icons', text: 'icons' },
        { id: 'templates', href: '/templates', text: 'templates' },
        { id: 'ui', href: '/ui', text: 'ui' },
      ];
    },
    3719: (e, t, l) => {
      'use strict';
      l.d(t, { C: () => n });
      var a = l(5640),
        r = l(148),
        s = l(5031);
      let n = (e) => {
        let { code: t, lang: l } = e,
          [n, i] = (0, r.useState)('');
        return (
          (0, r.useEffect)(() => {
            (async () => {
              i(await (0, s.Yz)(t, { lang: l, theme: 'github-dark' }));
            })();
          }),
          (0, a.jsx)('div', {
            dangerouslySetInnerHTML: { __html: n },
            className: 'w-full overflow-x-auto bg-neutral-900 p-4',
          })
        );
      };
    },
    3845: (e, t, l) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/charts',
        function () {
          return l(5957);
        },
      ]);
    },
    5957: (e, t, l) => {
      'use strict';
      l.r(t), l.d(t, { __N_SSG: () => b, default: () => p });
      var a = l(5640),
        r = l(148),
        s = l(3719);
      let n = (e) => {
        let { id: t = '', emoji: l = '', name: n = '', code: i = '', chart: o = (0, a.jsx)(a.Fragment, {}) } = e,
          [d, h] = (0, r.useState)(!0);
        return (0, a.jsxs)('div', {
          id: t,
          className: 'flex flex-col gap-y-4 md:gap-y-8',
          children: [
            (0, a.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2',
              children: [
                (0, a.jsxs)('div', {
                  className: 'flex items-center gap-x-2',
                  children: [
                    (0, a.jsx)('span', { className: 'text-4xl', children: l }),
                    (0, a.jsxs)('div', {
                      children: [
                        (0, a.jsx)('p', { className: 'text-xs capitalize', children: 'Chart' }),
                        (0, a.jsx)('h3', { className: 'text-xl font-bold capitalize md:text-2xl', children: n }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)('button', {
                  type: 'button',
                  className:
                    'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                  onClick: () => h((e) => !e),
                  children: d ? 'Chart' : 'Code',
                }),
              ],
            }),
            (0, a.jsx)('div', {
              className:
                'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: d
                ? (0, a.jsx)('div', { className: 'flex w-full items-center justify-center p-4 md:p-8', children: o })
                : (0, a.jsx)(s.C, { code: i, lang: 'html' }),
            }),
          ],
        });
      };
      var i = l(6453),
        o = l(8604),
        d = l(767),
        h = l(1461),
        c = l(6826),
        f = l.n(c);
      let x = {
          line: '\uD83D\uDCC8',
          bar: '\uD83D\uDCCA',
          pie: '\uD83E\uDD67',
          area: '\uD83C\uDF0A',
          scatter: '\uD83C\uDFAF',
          radar: '\uD83D\uDD78️',
          bubble: '\uD83E\uDEE7',
          doughnut: '\uD83C\uDF69',
          histogram: '\uD83C\uDFD7️',
          heatmap: '\uD83D\uDD25',
          treemap: '\uD83C\uDF33',
          polar: '\uD83D\uDC3B‍❄️',
          candlestick: '\uD83D\uDD6F️',
          waterfall: '\uD83D\uDCA7',
          gauge: '⏱️',
          funnel: '⏬',
        },
        u = [120, 180, 150, 200, 250, 300, 220],
        m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        g = {
          area: (0, a.jsx)(
            (e) => {
              let { data: t = [], labels: l = [] } = e,
                s = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = s.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    n = e.height;
                  a.clearRect(0, 0, r, n);
                  let i = r - 60 - 40,
                    o = n - 60 - 40,
                    d = Math.max(...t),
                    h = (e) => 60 + (i / (t.length - 1)) * e,
                    c = (e) => 40 + ((d - e) / (d - 0)) * o;
                  (a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1);
                  for (let e = 0; e <= 5; e++) {
                    let t = 40 + (o / 5) * e;
                    a.beginPath(), a.moveTo(60, t), a.lineTo(r - 40, t), a.stroke();
                  }
                  for (let e = 0; e < l.length; e++) {
                    let t = h(e);
                    a.beginPath(), a.moveTo(t, 40), a.lineTo(t, n - 60), a.stroke();
                  }
                  (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'right'),
                    (a.textBaseline = 'middle');
                  for (let e = 0; e <= 5; e++) {
                    let t = 40 + (o / 5) * e,
                      l = d - ((d - 0) / 5) * e;
                    a.fillText(l.toFixed(0), 52, t);
                  }
                  (a.textAlign = 'center'), (a.textBaseline = 'top');
                  for (let e = 0; e < l.length; e++) a.fillText(l[e], h(e), n - 60 + 6);
                  (a.strokeStyle = '#9ca3af'),
                    (a.lineWidth = 2),
                    a.beginPath(),
                    a.moveTo(60, 40),
                    a.lineTo(60, n - 60),
                    a.stroke(),
                    a.beginPath(),
                    a.moveTo(60, n - 60),
                    a.lineTo(r - 40, n - 60),
                    a.stroke(),
                    a.beginPath(),
                    a.moveTo(h(0), n - 60);
                  for (let e = 0; e < t.length; e++) a.lineTo(h(e), c(t[e]));
                  a.lineTo(h(t.length - 1), n - 60),
                    a.closePath(),
                    (a.fillStyle = 'rgba(59, 130, 246, 0.3)'),
                    a.fill(),
                    a.beginPath(),
                    a.moveTo(h(0), c(t[0]));
                  for (let e = 0; e < t.length - 1; e++) {
                    let l = (h(e) + h(e + 1)) / 2,
                      r = (c(t[e]) + c(t[e + 1])) / 2;
                    a.quadraticCurveTo(h(e), c(t[e]), l, r);
                  }
                  a.quadraticCurveTo(h(t.length - 1), c(t[t.length - 1]), h(t.length - 1), c(t[t.length - 1])),
                    (a.strokeStyle = '#3b82f6'),
                    (a.lineWidth = 2),
                    a.stroke(),
                    (a.fillStyle = '#374151'),
                    (a.font = '14px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText('Month', r / 2, n - 10),
                    a.save(),
                    a.translate(16, n / 2),
                    a.rotate(-Math.PI / 2),
                    a.fillText('Revenue ($)', 0, 0),
                    a.restore(),
                    (a.fillStyle = '#3b82f6'),
                    a.fillRect(r / 2 - 30, 0, 12, 12),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    a.fillText('Revenue', r / 2 - 12, 6);
                }, [t, l]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', { ref: s, width: 400, height: 200, className: 'h-auto w-full' }),
                })
              );
            },
            { data: u, labels: m }
          ),
          bar: (0, a.jsx)(
            (e) => {
              let { data: t = [], labels: l = [] } = e,
                s = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = s.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    n = e.height;
                  a.clearRect(0, 0, r, n);
                  let i = r - 60 - 40,
                    o = n - 60 - 40,
                    d = Math.max(...t);
                  (a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1);
                  for (let e = 0; e <= 5; e++) {
                    let t = 40 + (o / 5) * e;
                    a.beginPath(), a.moveTo(60, t), a.lineTo(r - 40, t), a.stroke();
                  }
                  let h = l.length;
                  for (let e = 0; e < h; e++) {
                    let t = 60 + (i / h) * e + i / h / 2;
                    a.beginPath(), a.moveTo(t, 40), a.lineTo(t, n - 60), a.stroke();
                  }
                  (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'right'),
                    (a.textBaseline = 'middle');
                  for (let e = 0; e <= 5; e++) {
                    let t = 40 + (o / 5) * e,
                      l = d - ((d - 0) / 5) * e;
                    a.fillText(l.toFixed(0), 52, t);
                  }
                  (a.textAlign = 'center'), (a.textBaseline = 'top');
                  for (let e = 0; e < l.length; e++) {
                    let t = 60 + (i / h) * e + i / h / 2;
                    a.fillText(l[e], t, n - 60 + 6);
                  }
                  (a.strokeStyle = '#9ca3af'),
                    (a.lineWidth = 2),
                    a.beginPath(),
                    a.moveTo(60, 40),
                    a.lineTo(60, n - 60),
                    a.stroke(),
                    a.beginPath(),
                    a.moveTo(60, n - 60),
                    a.lineTo(r - 40, n - 60),
                    a.stroke();
                  let c = i / h / 2;
                  a.fillStyle = '#3b82f6';
                  for (let e = 0; e < t.length; e++) {
                    let l = 60 + (i / h) * e + i / h / 2 - c / 2,
                      r = 40 + ((d - t[e]) / (d - 0)) * o,
                      s = n - 60 - r;
                    a.fillRect(l, r, c, s);
                  }
                  (a.fillStyle = '#374151'),
                    (a.font = '14px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText('Month', r / 2, n - 10),
                    a.save(),
                    a.translate(16, n / 2),
                    a.rotate(-Math.PI / 2),
                    a.fillText('Revenue ($)', 0, 0),
                    a.restore();
                  let f = r / 2 - 16;
                  (a.fillStyle = '#3b82f6'),
                    a.fillRect(f, 0, 12, 12),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'),
                    a.fillText('Revenue', f + 16, 6);
                }, [t, l]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', { ref: s, width: 400, height: 200, className: 'h-auto w-full' }),
                })
              );
            },
            { data: u, labels: m }
          ),
          bubble: (0, a.jsx)(
            (e) => {
              let { data: t = [], xLabels: l = [], yLabels: s = [], xName: n = 'X Axis', yName: i = 'Y Axis' } = e,
                o = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = o.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    d = e.height;
                  a.clearRect(0, 0, r, d);
                  let h = r - 60 - 40,
                    c = d - 60 - 40,
                    f = t.map((e) => e.x),
                    x = t.map((e) => e.y),
                    u = Math.min(...f),
                    m = Math.max(...f),
                    g = Math.min(...x),
                    b = Math.max(...x);
                  (a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1);
                  let p = s.length - 1 || 5;
                  for (let e = 0; e <= p; e++) {
                    let t = 40 + (c / p) * e;
                    a.beginPath(),
                      a.moveTo(60, t),
                      a.lineTo(r - 40, t),
                      a.stroke(),
                      (a.fillStyle = '#374151'),
                      (a.font = '12px sans-serif'),
                      (a.textAlign = 'right'),
                      (a.textBaseline = 'middle');
                    let l = s[p - e] || (g + ((b - g) / p) * (p - e)).toFixed(0);
                    a.fillText(l.toString(), 52, t);
                  }
                  let y = l.length - 1 || 5;
                  for (let e = 0; e <= y; e++) {
                    let t = 60 + (h / y) * e;
                    a.beginPath(),
                      a.moveTo(t, 40),
                      a.lineTo(t, d - 60),
                      a.stroke(),
                      (a.fillStyle = '#374151'),
                      (a.font = '12px sans-serif'),
                      (a.textAlign = 'center'),
                      (a.textBaseline = 'top');
                    let r = l[e] || (u + ((m - u) / y) * e).toFixed(0);
                    a.fillText(r.toString(), t, d - 60 + 6);
                  }
                  (a.strokeStyle = '#9ca3af'),
                    (a.lineWidth = 2),
                    a.beginPath(),
                    a.moveTo(60, 40),
                    a.lineTo(60, d - 60),
                    a.stroke(),
                    a.beginPath(),
                    a.moveTo(60, d - 60),
                    a.lineTo(r - 40, d - 60),
                    a.stroke(),
                    t.forEach((e) => {
                      let { x: t, y: l, r } = e;
                      a.beginPath(),
                        (a.fillStyle = 'rgba(59, 130, 246, 0.6)'),
                        (a.strokeStyle = '#3b82f6'),
                        (a.lineWidth = 1),
                        a.arc(60 + ((t - u) / (m - u)) * h, 40 + ((b - l) / (b - g)) * c, r, 0, 2 * Math.PI),
                        a.fill(),
                        a.stroke();
                    }),
                    (a.fillStyle = '#374151'),
                    (a.font = '14px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText(n, r / 2, d - 10),
                    a.save(),
                    a.translate(16, d / 2),
                    a.rotate(-Math.PI / 2),
                    a.fillText(i, 0, 0),
                    a.restore();
                  let k = r / 2 - 16;
                  a.beginPath(),
                    (a.fillStyle = 'rgba(59, 130, 246, 0.6)'),
                    (a.strokeStyle = '#3b82f6'),
                    (a.lineWidth = 1),
                    a.arc(k + 8, 8, 8, 0, 2 * Math.PI),
                    a.fill(),
                    a.stroke(),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'),
                    a.fillText('Bubble Size = Radius', k + 16 + 8, 8);
                }, [t, l, s, n, i]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', { ref: o, width: 400, height: 300, className: 'h-auto w-full' }),
                })
              );
            },
            {
              data: [
                { x: 1, y: 5, r: 10 },
                { x: 2, y: 8, r: 15 },
                { x: 3, y: 4, r: 8 },
                { x: 4, y: 7, r: 12 },
                { x: 5, y: 2, r: 5 },
              ],
              xLabels: ['1', '2', '3', '4', '5'],
              yLabels: ['0', '2', '4', '6', '8', '10'],
              xName: 'X Value',
              yName: 'Y Value',
            }
          ),
          doughnut: (0, a.jsx)(
            (e) => {
              let { data: t = [], labels: l = [], colors: s, title: n = 'Doughnut Chart' } = e,
                i = (0, r.useRef)(null),
                o = s || ['#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899', '#14b8a6'];
              return (
                (0, r.useEffect)(() => {
                  let e = i.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    s = e.height,
                    d = r / 2,
                    h = s / 2,
                    c = Math.min(r, s) / 2 - 40;
                  a.clearRect(0, 0, r, s);
                  let f = t.reduce((e, t) => e + t, 0),
                    x = -Math.PI / 2;
                  t.forEach((e, t) => {
                    let l = x + (e / f) * 2 * Math.PI;
                    a.beginPath(),
                      a.moveTo(d, h),
                      a.arc(d, h, c, x, l),
                      a.closePath(),
                      (a.fillStyle = o[t % o.length]),
                      a.fill(),
                      (x = l);
                  }),
                    a.beginPath(),
                    (a.fillStyle = '#fff'),
                    a.moveTo(d, h),
                    a.arc(d, h, 0.6 * c, 0, 2 * Math.PI),
                    a.fill();
                  let u = r - 75,
                    m = 20;
                  (a.font = '14px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'),
                    l.forEach((e, t) => {
                      (a.fillStyle = o[t % o.length]),
                        a.fillRect(u, m, 16, 16),
                        (a.fillStyle = '#374151'),
                        a.fillText(e, u + 16 + 8, m + 8),
                        (m += 24);
                    }),
                    (a.fillStyle = '#374151'),
                    (a.font = '16px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText(n, d, 20);
                }, [t, l, o, n]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', { ref: i, width: 400, height: 300, className: 'h-auto w-full' }),
                })
              );
            },
            {
              data: [25, 15, 30, 10, 20],
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
              title: 'Sales Distribution',
            }
          ),
          polar: (0, a.jsx)(
            (e) => {
              let { data: t, labels: l, maxValue: s, title: n } = e,
                i = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = i.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    o = e.height;
                  a.clearRect(0, 0, r, o);
                  let d = r / 2,
                    h = o / 2,
                    c = Math.min(r, o) / 2 - 60,
                    f = l.length,
                    x = (2 * Math.PI) / f,
                    u = null != s ? s : Math.max(...t, 1);
                  (a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1);
                  for (let e = 1; e <= 5; e++) {
                    let t = (c / 5) * e;
                    a.beginPath(), a.arc(d, h, t, 0, 2 * Math.PI), a.stroke();
                  }
                  (a.strokeStyle = '#9ca3af'),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'center'),
                    (a.textBaseline = 'middle');
                  for (let e = 0; e < f; e++) {
                    let t = e * x - Math.PI / 2,
                      r = d + c * Math.cos(t),
                      s = h + c * Math.sin(t);
                    a.beginPath(), a.moveTo(d, h), a.lineTo(r, s), a.stroke();
                    let n = d + (c + 20) * Math.cos(t),
                      i = h + (c + 20) * Math.sin(t);
                    a.fillText(l[e], n, i);
                  }
                  let m = ['#3b82f6', '#ef4444', '#f59e0b', '#10b981', '#8b5cf6', '#ec4899', '#22d3ee'];
                  for (let e = 0; e < f; e++) {
                    let l = c * ((t[e] - 0) / (u - 0)),
                      r = e * x - Math.PI / 2,
                      s = r + x;
                    a.beginPath(),
                      a.moveTo(d, h),
                      a.arc(d, h, l, r, s),
                      a.closePath(),
                      (a.fillStyle = m[e % m.length] + 'cc'),
                      a.fill(),
                      (a.strokeStyle = m[e % m.length]),
                      (a.lineWidth = 2),
                      a.stroke();
                  }
                  n &&
                    ((a.fillStyle = '#374151'),
                    (a.font = '16px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText(n, d, 30));
                  let g = r - 140,
                    b = 40;
                  (a.font = '12px sans-serif'), (a.textAlign = 'left'), (a.textBaseline = 'middle');
                  for (let e = 0; e < f; e++)
                    (a.fillStyle = m[e % m.length]),
                      a.beginPath(),
                      a.arc(g + 8, b + 8, 8, 0, 2 * Math.PI),
                      a.fill(),
                      (a.fillStyle = '#374151'),
                      a.fillText(l[e], g + 16 + 8, b + 8),
                      (b += 28);
                }, [t, l, s, n]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', { ref: i, width: 400, height: 400, className: 'h-auto w-full' }),
                })
              );
            },
            {
              data: [30, 50, 80, 60, 40, 90, 70],
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Teal'],
              title: 'Polar Area Chart Example',
            }
          ),
          line: (0, a.jsx)(
            (e) => {
              let { data: t = [], labels: l = [] } = e,
                s = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = s.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    n = e.height;
                  a.clearRect(0, 0, r, n);
                  let i = Math.max(...t),
                    o = n - 60 - 40,
                    d = r - 60 - 40;
                  (a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1);
                  for (let e = 0; e <= 5; e++) {
                    let t = 40 + (o / 5) * e;
                    a.beginPath(), a.moveTo(60, t), a.lineTo(r - 40, t), a.stroke();
                  }
                  let h = l.length;
                  for (let e = 0; e < h; e++) {
                    let t = 60 + (d / (h - 1)) * e;
                    a.beginPath(), a.moveTo(t, 40), a.lineTo(t, n - 60), a.stroke();
                  }
                  (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'right'),
                    (a.textBaseline = 'middle');
                  for (let e = 0; e <= 5; e++) {
                    let t = 40 + (o / 5) * e,
                      l = i - ((i - 0) / 5) * e;
                    a.fillText(l.toFixed(0), 52, t);
                  }
                  (a.textAlign = 'center'), (a.textBaseline = 'top');
                  for (let e = 0; e < l.length; e++) {
                    let t = 60 + (d / (l.length - 1)) * e;
                    a.fillText(l[e], t, n - 60 + 6);
                  }
                  (a.strokeStyle = '#9ca3af'),
                    (a.lineWidth = 2),
                    a.beginPath(),
                    a.moveTo(60, 40),
                    a.lineTo(60, n - 60),
                    a.stroke(),
                    a.beginPath(),
                    a.moveTo(60, n - 60),
                    a.lineTo(r - 40, n - 60),
                    a.stroke(),
                    (a.strokeStyle = '#3b82f6'),
                    (a.lineWidth = 2),
                    a.beginPath(),
                    t.forEach((e, l) => {
                      let r = 60 + (d / (t.length - 1)) * l,
                        s = 40 + ((i - e) / (i - 0)) * o;
                      0 === l ? a.moveTo(r, s) : a.lineTo(r, s);
                    }),
                    a.stroke(),
                    (a.fillStyle = '#374151'),
                    (a.font = '14px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText('Month', r / 2, n - 10),
                    a.save(),
                    a.translate(16, n / 2),
                    a.rotate(-Math.PI / 2),
                    a.fillText('Revenue ($)', 0, 0),
                    a.restore();
                  let c = r / 2 - 16;
                  (a.fillStyle = '#3b82f6'),
                    a.fillRect(c, 0, 12, 12),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'),
                    a.fillText('Revenue', c + 16, 6);
                }, [t, l]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', { ref: s, width: 400, height: 200, className: 'h-auto w-full' }),
                })
              );
            },
            { data: u, labels: m }
          ),
          radar: (0, a.jsx)(
            (e) => {
              let { data: t, labels: l, maxValue: s, title: n } = e,
                i = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = i.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    o = e.height;
                  a.clearRect(0, 0, r, o);
                  let d = r / 2,
                    h = o / 2,
                    c = Math.min(r, o) / 2 - 60,
                    f = l.length,
                    x = (2 * Math.PI) / f,
                    u = null != s ? s : Math.max(...t, 1);
                  (a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1);
                  for (let e = 1; e <= 5; e++) {
                    let t = (c / 5) * e;
                    a.beginPath();
                    for (let e = 0; e < f; e++) {
                      let l = e * x - Math.PI / 2,
                        r = d + t * Math.cos(l),
                        s = h + t * Math.sin(l);
                      0 === e ? a.moveTo(r, s) : a.lineTo(r, s);
                    }
                    a.closePath(), a.stroke();
                  }
                  (a.strokeStyle = '#9ca3af'),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'center'),
                    (a.textBaseline = 'middle');
                  for (let e = 0; e < f; e++) {
                    let t = e * x - Math.PI / 2,
                      r = d + c * Math.cos(t),
                      s = h + c * Math.sin(t);
                    a.beginPath(), a.moveTo(d, h), a.lineTo(r, s), a.stroke();
                    let n = d + (c + 20) * Math.cos(t),
                      i = h + (c + 20) * Math.sin(t);
                    a.fillText(l[e], n, i);
                  }
                  (a.strokeStyle = '#3b82f6'),
                    (a.fillStyle = 'rgba(59, 130, 246, 0.4)'),
                    (a.lineWidth = 2),
                    a.beginPath();
                  for (let e = 0; e < f; e++) {
                    let l = c * ((t[e] - 0) / (u - 0)),
                      r = e * x - Math.PI / 2,
                      s = d + l * Math.cos(r),
                      n = h + l * Math.sin(r);
                    0 === e ? a.moveTo(s, n) : a.lineTo(s, n);
                  }
                  a.closePath(), a.fill(), a.stroke(), (a.fillStyle = '#1e40af');
                  for (let e = 0; e < f; e++) {
                    let l = c * ((t[e] - 0) / (u - 0)),
                      r = e * x - Math.PI / 2,
                      s = d + l * Math.cos(r),
                      n = h + l * Math.sin(r);
                    a.beginPath(), a.arc(s, n, 4, 0, 2 * Math.PI), a.fill();
                  }
                  n &&
                    ((a.fillStyle = '#374151'),
                    (a.font = '16px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText(n, d, 30));
                  let m = r - 140;
                  (a.fillStyle = '#3b82f6'),
                    a.beginPath(),
                    a.arc(m + 8, 48, 8, 0, 2 * Math.PI),
                    a.fill(),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'),
                    a.fillText('Dataset 1', m + 16 + 8, 48);
                }, [t, l, s, n]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow md:p-8 dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', { ref: i, width: 400, height: 400, className: 'h-auto w-full' }),
                })
              );
            },
            {
              data: [80, 60, 70, 90, 50],
              labels: ['Speed', 'Strength', 'Agility', 'Endurance', 'Flexibility'],
              title: 'Athlete Performance',
            }
          ),
          scatter: (0, a.jsx)(
            (e) => {
              let {
                  data: t = [],
                  xLabel: l = 'X Axis',
                  yLabel: s = 'Y Axis',
                  title: n = 'Scatter Chart',
                  pointColor: i = '#3b82f6',
                } = e,
                o = (0, r.useRef)(null);
              return (
                (0, r.useEffect)(() => {
                  let e = o.current;
                  if (!e) return;
                  let a = e.getContext('2d');
                  if (!a) return;
                  let r = e.width,
                    d = e.height;
                  a.clearRect(0, 0, r, d);
                  let h = t.map((e) => e.x),
                    c = t.map((e) => e.y),
                    f = Math.min(...h),
                    x = Math.max(...h),
                    u = Math.min(...c),
                    m = Math.max(...c),
                    g = r - 70 - 50,
                    b = d - 70 - 50;
                  (a.strokeStyle = '#e5e7eb'), (a.lineWidth = 1);
                  for (let e = 0; e <= 5; e++) {
                    let t = 50 + (b / 5) * e;
                    a.beginPath(), a.moveTo(70, t), a.lineTo(r - 50, t), a.stroke();
                  }
                  for (let e = 0; e <= 5; e++) {
                    let t = 70 + (g / 5) * e;
                    a.beginPath(), a.moveTo(t, 50), a.lineTo(t, d - 70), a.stroke();
                  }
                  (a.strokeStyle = '#9ca3af'),
                    (a.lineWidth = 2),
                    a.beginPath(),
                    a.moveTo(70, 50),
                    a.lineTo(70, d - 70),
                    a.stroke(),
                    a.beginPath(),
                    a.moveTo(70, d - 70),
                    a.lineTo(r - 50, d - 70),
                    a.stroke(),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'right'),
                    (a.textBaseline = 'middle');
                  for (let e = 0; e <= 5; e++) {
                    let t = 50 + (b / 5) * e,
                      l = m - ((m - u) / 5) * e;
                    a.fillText(l.toFixed(2), 62, t);
                  }
                  (a.textAlign = 'center'), (a.textBaseline = 'top');
                  for (let e = 0; e <= 5; e++) {
                    let t = 70 + (g / 5) * e,
                      l = f + ((x - f) / 5) * e;
                    a.fillText(l.toFixed(2), t, d - 70 + 6);
                  }
                  (a.fillStyle = i),
                    t.forEach((e) => {
                      let { x: t, y: l } = e;
                      a.beginPath(),
                        a.arc(70 + ((t - f) / (x - f)) * g, 50 + ((m - l) / (m - u)) * b, 5, 0, 2 * Math.PI),
                        a.fill();
                    }),
                    (a.fillStyle = '#374151'),
                    (a.font = '14px sans-serif'),
                    (a.textAlign = 'center'),
                    a.fillText(l, r / 2, d - 20),
                    a.save(),
                    a.translate(20, d / 2),
                    a.rotate(-Math.PI / 2),
                    a.fillText(s, 0, 0),
                    a.restore(),
                    a.fillText(n, r / 2, 30);
                  let p = r - 150;
                  (a.fillStyle = i),
                    a.beginPath(),
                    a.arc(p + 8, 48, 8, 0, 2 * Math.PI),
                    a.fill(),
                    (a.fillStyle = '#374151'),
                    (a.font = '12px sans-serif'),
                    (a.textAlign = 'left'),
                    (a.textBaseline = 'middle'),
                    a.fillText('Data Points', p + 16 + 8, 48);
                }, [t, l, s, n, i]),
                (0, a.jsx)('div', {
                  className:
                    'w-full max-w-md rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                  children: (0, a.jsx)('canvas', { ref: o, width: 400, height: 300, className: 'h-auto w-full' }),
                })
              );
            },
            {
              data: [
                { x: 1, y: 2 },
                { x: 2, y: 3.5 },
                { x: 3, y: 1.2 },
                { x: 4, y: 4 },
                { x: 5, y: 2.5 },
              ],
              xLabel: 'Time (s)',
              yLabel: 'Value',
              title: 'Sample Scatter Plot',
            }
          ),
        };
      var b = !0;
      let p = (e) => {
        let { charts: t = [] } = e,
          [{ query: l = '' }, s] = (0, r.useState)({ query: '' }),
          c = t.filter((e) => {
            let { id: t, name: a } = e;
            return t.toLowerCase().includes(l.toLowerCase()) || a.toLowerCase().includes(l.toLowerCase());
          });
        return (0, a.jsxs)('div', {
          className: 'flex h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100',
          children: [
            (0, a.jsx)(d.F, {
              links: h.l.filter((e) => {
                let { id: t } = e;
                return 'charts' !== t;
              }),
              title: 'atomic/charts',
              query: l,
              setState: s,
            }),
            (0, a.jsxs)('div', {
              className: 'grow overflow-auto',
              children: [
                (0, a.jsxs)('main', {
                  className: 'divide-y divide-neutral-200 dark:divide-neutral-800',
                  children: [
                    (0, a.jsx)(o.l, {
                      title: 'atomic/charts',
                      subtitle: 'Free and Open Source Charts',
                      description:
                        'is a curated collection of responsive web and app charts designed specifically for SaaS products and marketing sites. Built for speed, scalability, and conversion, each template helps you launch polished, professional interfaces with ease — so you can focus on growing your business.',
                      features: ['Copy / Paste', 'Pure Canvas', 'Pure JavaScript'],
                    }),
                    (0, a.jsx)('section', {
                      className: 'py-4 md:py-8',
                      children: (0, a.jsx)('div', {
                        className: 'container mx-auto px-8',
                        children: (0, a.jsxs)('div', {
                          className: 'flex flex-col gap-y-4 md:gap-y-8',
                          children: [
                            (0, a.jsxs)('h2', {
                              className: 'text-2xl font-bold',
                              children: [
                                (0, a.jsx)('span', { className: 'capitalize', children: 'Charts' }),
                                ' (',
                                c.length,
                                ')',
                              ],
                            }),
                            c.length > 0 &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)('div', {
                                    className: 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4',
                                    children: c.map((e) => {
                                      var t;
                                      let { id: l = '', name: r = '' } = e;
                                      return (0, a.jsx)(
                                        f(),
                                        {
                                          href: '#'.concat(l),
                                          children: (0, a.jsx)('div', {
                                            className: 'col-span-1',
                                            children: (0, a.jsx)('div', {
                                              className:
                                                'flex items-center gap-x-2 rounded-lg border border-neutral-200 p-4 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
                                              children: (0, a.jsxs)('p', {
                                                className: 'font-semibold capitalize',
                                                children: [null != (t = x[l]) ? t : '', ' ', r],
                                              }),
                                            }),
                                          }),
                                        },
                                        l
                                      );
                                    }),
                                  }),
                                  (0, a.jsx)('div', {
                                    className: 'flex flex-col gap-y-4 md:gap-y-8',
                                    children: c.map((e) => {
                                      var t, l;
                                      let { id: r = '', name: s = '', code: i = '' } = e;
                                      return (0, a.jsxs)(
                                        'div',
                                        {
                                          className: 'flex flex-col gap-y-4',
                                          children: [
                                            (0, a.jsxs)('h2', {
                                              className: 'text-2xl font-bold capitalize',
                                              children: [null != (t = x[r]) ? t : '', ' ', s],
                                            }),
                                            (0, a.jsx)(n, {
                                              id: r,
                                              emoji: null != (l = x[r]) ? l : '',
                                              name: s,
                                              code: i,
                                              chart: g[s],
                                            }),
                                          ],
                                        },
                                        r
                                      );
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(i.w, { title: 'atomic/charts' }),
              ],
            }),
          ],
        });
      };
    },
    6453: (e, t, l) => {
      'use strict';
      l.d(t, { w: () => r });
      var a = l(5640);
      let r = (e) => {
        let { title: t = '' } = e;
        return (0, a.jsx)('footer', {
          className: 'border-t border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
          children: (0, a.jsxs)('div', {
            className: 'container mx-auto px-8 py-4',
            children: ['\xa9 ', new Date().getFullYear(), ' ⚛️ ', (0, a.jsx)('strong', { children: t })],
          }),
        });
      };
    },
    8604: (e, t, l) => {
      'use strict';
      l.d(t, { l: () => r });
      var a = l(5640);
      let r = (e) => {
        let { title: t = '', subtitle: l = '', description: r = '', features: s = [] } = e;
        return (0, a.jsx)('section', {
          className: 'py-8 md:py-16',
          children: (0, a.jsx)('div', {
            className: 'container mx-auto flex flex-col items-center justify-center gap-y-4 px-8',
            children: (0, a.jsxs)('div', {
              className: 'flex w-full max-w-lg flex-col gap-y-4 text-center md:gap-y-8',
              children: [
                (0, a.jsxs)('header', {
                  className: 'flex flex-col gap-y-1',
                  children: [
                    (0, a.jsxs)('h1', { className: 'text-4xl font-black whitespace-nowrap', children: ['⚛️ ', t] }),
                    (0, a.jsx)('h5', {
                      className: 'text-base font-medium text-neutral-700 md:text-lg dark:text-neutral-300',
                      children: l,
                    }),
                  ],
                }),
                (0, a.jsxs)('p', {
                  className: 'text-neutral-900 dark:text-neutral-100',
                  children: [
                    (0, a.jsx)('code', {
                      className:
                        'mr-1 rounded bg-neutral-900 px-1 py-0.5 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900',
                      children: t,
                    }),
                    (0, a.jsx)('span', { children: r }),
                  ],
                }),
                s.length > 0 &&
                  (0, a.jsx)('div', {
                    className:
                      'flex flex-col justify-center gap-x-6 text-sm font-black text-neutral-900 md:flex-row dark:text-neutral-100',
                    children: s.map((e) =>
                      (0, a.jsxs)('p', { className: 'whitespace-nowrap', children: ['\uD83D\uDD2E ', e] }, e)
                    ),
                  }),
              ],
            }),
          }),
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 5031, 636, 6593, 8792], () => t(3845)), (_N_E = e.O());
  },
]);
