(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8690],
  {
    1099: (e, r, t) => {
      'use strict';
      t.r(r), t.d(r, { __N_SSG: () => o, default: () => c });
      var l = t(5640),
        a = t(9419),
        n = t(148);
      let s = (e) => {
          let { columns: r, data: t, rowHeight: a, height: s, renderCell: i } = e,
            d = (0, n.useRef)(null),
            [o, c] = (0, n.useState)(0),
            [u, h] = (0, n.useState)(new Set()),
            [x, p] = (0, n.useState)(null),
            m = t.length * a,
            b = Math.ceil(s / a),
            w = Math.floor(o / a),
            f = Math.min(w + b + 1, t.length),
            g = t.slice(w, f),
            y = (0, n.useCallback)(() => {
              d.current && c(d.current.scrollTop);
            }, []),
            v = (e) => {
              if (!d.current) return;
              let r = d.current,
                t = r.scrollTop,
                l = e * a,
                n = l + a;
              l < t ? (r.scrollTop = l) : n > t + s && (r.scrollTop = n - s);
            },
            j = (e, r) => {
              let t = Math.min(e, r),
                l = Math.max(e, r),
                a = new Set(u);
              for (let e = t; e <= l; e++) a.add(e);
              return a;
            },
            k = (e, r) => {
              let t = r.ctrlKey || r.metaKey;
              r.shiftKey && null !== x
                ? h(j(x, e))
                : (t
                    ? h((r) => {
                        let t = new Set(r);
                        return t.has(e) ? t.delete(e) : t.add(e), t;
                      })
                    : h(new Set([e])),
                  p(e)),
                v(e);
            };
          return (
            (0, n.useEffect)(() => {
              let e = d.current;
              if (e) return e.addEventListener('scroll', y), () => e.removeEventListener('scroll', y);
            }, [y]),
            (0, l.jsxs)('div', {
              className: 'overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800',
              tabIndex: 0,
              onKeyDown: (e) => {
                if (0 === t.length) return;
                let r = null !== x ? x : u.size > 0 ? Math.min(...u) : 0;
                if ('ArrowDown' === e.key) {
                  e.preventDefault();
                  let l = Math.min(r + 1, t.length - 1);
                  e.shiftKey ? h(j(null != x ? x : l, l)) : (h(new Set([l])), p(l)), v(l), p(l);
                }
                if ('ArrowUp' === e.key) {
                  e.preventDefault();
                  let t = Math.max(r - 1, 0);
                  e.shiftKey ? h(j(null != x ? x : t, t)) : (h(new Set([t])), p(t)), v(t), p(t);
                }
              },
              role: 'grid',
              'aria-rowcount': t.length,
              'aria-colcount': r.length,
              children: [
                (0, l.jsx)('table', {
                  className: 'w-full border-collapse',
                  role: 'rowgroup',
                  children: (0, l.jsx)('thead', {
                    children: (0, l.jsx)('tr', {
                      children: r.map((e) => {
                        var r;
                        return (0, l.jsx)(
                          'th',
                          {
                            className:
                              'border-b border-neutral-200 bg-neutral-100 p-2 text-left dark:border-neutral-800 dark:bg-neutral-900',
                            style: { width: null != (r = e.width) ? r : 'auto' },
                            role: 'columnheader',
                            children: e.label,
                          },
                          String(e.key)
                        );
                      }),
                    }),
                  }),
                }),
                (0, l.jsx)('div', {
                  ref: d,
                  className: 'relative overflow-y-auto focus:outline-none',
                  style: { height: s },
                  role: 'rowgroup',
                  children: (0, l.jsx)('div', {
                    className: 'relative',
                    style: { height: m },
                    children: g.map((e, t) => {
                      let n = w + t,
                        s = u.has(n);
                      return (0, l.jsx)(
                        'div',
                        {
                          style: {
                            position: 'absolute',
                            top: n * a,
                            height: a,
                            left: 0,
                            right: 0,
                            display: 'table',
                            width: '100%',
                            tableLayout: 'fixed',
                            background: s ? '#e2e8f0' : void 0,
                            cursor: 'pointer',
                          },
                          onClick: (e) => k(n, e),
                          role: 'row',
                          'aria-selected': s,
                          tabIndex: -1,
                          children: (0, l.jsx)('table', {
                            className: 'w-full border-collapse',
                            role: 'presentation',
                            children: (0, l.jsx)('tbody', {
                              children: (0, l.jsx)('tr', {
                                children: r.map((r) => {
                                  var t;
                                  return (0, l.jsx)(
                                    'td',
                                    {
                                      className: 'border-b border-neutral-200 p-2 text-left dark:border-neutral-800',
                                      style: { width: null != (t = r.width) ? t : 'auto' },
                                      role: 'gridcell',
                                      children: i ? i(e, r, n, s) : String(e[r.key]),
                                    },
                                    String(r.key)
                                  );
                                }),
                              }),
                            }),
                          }),
                        },
                        n
                      );
                    }),
                  }),
                }),
              ],
            })
          );
        },
        i = () => {
          let e = Array.from({ length: 1e4 }, (e, r) => ({
            id: r + 1,
            name: 'Person '.concat(r + 1),
            age: 20 + (r % 50),
            email: 'user'.concat(r + 1, '@example.com'),
          }));
          return (0, l.jsx)('div', {
            className: 'w-full',
            children: (0, l.jsx)(s, {
              columns: [
                { key: 'id', label: 'ID', width: '80px' },
                { key: 'name', label: 'Name', width: '160px' },
                { key: 'age', label: 'Age', width: '80px' },
                { key: 'email', label: 'Email' },
              ],
              data: e,
              rowHeight: 40,
              height: 400,
            }),
          });
        };
      var d = t(5695),
        o = !0;
      let c = (e) => {
        let { code: r = '' } = e;
        return (0, l.jsx)(d.U, {
          disabledSearch: !0,
          query: 'query',
          setState: () => {},
          id: 'react-virtual-table',
          emoji: '\uD83D\uDCCB',
          title: 'atomic/virtual-table',
          description:
            'is a high-performance virtualized table component for React that supports large datasets by rendering only visible rows. Includes keyboard navigation for row selection (arrow keys) and mouse click to select rows with automatic scrolling to keep the selected row in view.',
          children: (0, l.jsx)('section', {
            className: 'py-8 md:py-16',
            children: (0, l.jsx)('div', {
              className: 'container mx-auto px-8',
              children: (0, l.jsx)('div', {
                className: 'flex flex-col gap-y-4 md:gap-y-8',
                children: (0, l.jsx)(a.O, {
                  id: 'virtual-table',
                  emoji: '\uD83D\uDCCB',
                  group: 'React',
                  name: 'Virtual Table',
                  code: r,
                  chart: (0, l.jsx)(i, {}),
                }),
              }),
            }),
          }),
        });
      };
    },
    4933: (e, r, t) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/react/virtual-table',
        function () {
          return t(1099);
        },
      ]);
    },
    9419: (e, r, t) => {
      'use strict';
      t.d(r, { O: () => s });
      var l = t(5640),
        a = t(148),
        n = t(8899);
      let s = (e) => {
        let {
            id: r = '',
            emoji: t = '',
            group: s = '',
            name: i = '',
            code: d = '',
            chart: o = (0, l.jsx)(l.Fragment, {}),
          } = e,
          [c, u] = (0, a.useState)(!0);
        return (0, l.jsxs)('div', {
          id: r,
          className: 'flex flex-col gap-y-4 md:gap-y-8',
          children: [
            (0, l.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2',
              children: [
                (0, l.jsxs)('div', {
                  className: 'flex items-center gap-x-2',
                  children: [
                    (0, l.jsx)('span', { className: 'text-4xl', children: t }),
                    (0, l.jsxs)('div', {
                      children: [
                        (0, l.jsx)('p', { className: 'text-xs capitalize', children: s }),
                        (0, l.jsx)('h3', { className: 'text-xl font-bold capitalize md:text-2xl', children: i }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)('button', {
                  type: 'button',
                  className:
                    'cursor-pointer rounded-lg border border-purple-800 bg-purple-600 px-4 py-2 text-white shadow dark:border-purple-900 dark:bg-purple-700 dark:shadow-neutral-100/10',
                  onClick: () => u((e) => !e),
                  children: c ? 'Preview' : 'Code',
                }),
              ],
            }),
            (0, l.jsx)('div', {
              className:
                'flex items-center justify-center overflow-hidden rounded-lg border border-neutral-200 shadow dark:border-neutral-800 dark:shadow-neutral-100/10',
              children: c
                ? (0, l.jsx)('div', { className: 'flex w-full items-center justify-center p-4 md:p-8', children: o })
                : (0, l.jsx)(n.V, { code: d, lang: 'html' }),
            }),
          ],
        });
      };
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [6826, 2182, 3685, 636, 6593, 8792], () => r(4933)), (_N_E = e.O());
  },
]);
