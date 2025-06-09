(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8690],
  {
    1099: (e, t, r) => {
      'use strict';
      r.r(t), r.d(t, { __N_SSG: () => d, default: () => c });
      var l = r(5640),
        a = r(9419),
        s = r(148);
      let n = (e) => {
          let { columns: t, data: r, rowHeight: a, height: n, renderCell: i } = e,
            o = (0, s.useRef)(null),
            [d, c] = (0, s.useState)(0),
            [u, h] = (0, s.useState)(new Set()),
            [p, x] = (0, s.useState)(null),
            m = r.length * a,
            b = Math.ceil(n / a),
            f = Math.floor(d / a),
            w = Math.min(f + b + 1, r.length),
            g = r.slice(f, w),
            y = (0, s.useCallback)(() => {
              o.current && c(o.current.scrollTop);
            }, []),
            v = (e) => {
              if (!o.current) return;
              let t = o.current,
                r = t.scrollTop,
                l = e * a,
                s = l + a;
              l < r ? (t.scrollTop = l) : s > r + n && (t.scrollTop = s - n);
            },
            j = (e, t) => {
              let r = Math.min(e, t),
                l = Math.max(e, t),
                a = new Set(u);
              for (let e = r; e <= l; e++) a.add(e);
              return a;
            },
            k = (e, t) => {
              let r = t.ctrlKey || t.metaKey;
              t.shiftKey && null !== p
                ? h(j(p, e))
                : (r
                    ? h((t) => {
                        let r = new Set(t);
                        return r.has(e) ? r.delete(e) : r.add(e), r;
                      })
                    : h(new Set([e])),
                  x(e)),
                v(e);
            };
          return (
            (0, s.useEffect)(() => {
              let e = o.current;
              if (e) return e.addEventListener('scroll', y), () => e.removeEventListener('scroll', y);
            }, [y]),
            (0, l.jsxs)('div', {
              className: 'overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800',
              tabIndex: 0,
              onKeyDown: (e) => {
                if (0 === r.length) return;
                let t = null !== p ? p : u.size > 0 ? Math.min(...u) : 0;
                if ('ArrowDown' === e.key) {
                  e.preventDefault();
                  let l = Math.min(t + 1, r.length - 1);
                  e.shiftKey ? h(j(null != p ? p : l, l)) : (h(new Set([l])), x(l)), v(l), x(l);
                }
                if ('ArrowUp' === e.key) {
                  e.preventDefault();
                  let r = Math.max(t - 1, 0);
                  e.shiftKey ? h(j(null != p ? p : r, r)) : (h(new Set([r])), x(r)), v(r), x(r);
                }
              },
              role: 'grid',
              'aria-rowcount': r.length,
              'aria-colcount': t.length,
              children: [
                (0, l.jsx)('table', {
                  className: 'w-full border-collapse',
                  role: 'rowgroup',
                  children: (0, l.jsx)('thead', {
                    children: (0, l.jsx)('tr', {
                      children: t.map((e) => {
                        var t;
                        return (0, l.jsx)(
                          'th',
                          {
                            className:
                              'border-b border-neutral-200 bg-neutral-100 p-2 text-left dark:border-neutral-800 dark:bg-neutral-900',
                            style: { width: null != (t = e.width) ? t : 'auto' },
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
                  ref: o,
                  className: 'relative overflow-y-auto focus:outline-none',
                  style: { height: n },
                  role: 'rowgroup',
                  children: (0, l.jsx)('div', {
                    className: 'relative',
                    style: { height: m },
                    children: g.map((e, r) => {
                      let s = f + r,
                        n = u.has(s);
                      return (0, l.jsx)(
                        'div',
                        {
                          style: {
                            position: 'absolute',
                            top: s * a,
                            height: a,
                            left: 0,
                            right: 0,
                            display: 'table',
                            width: '100%',
                            tableLayout: 'fixed',
                            background: n ? '#e2e8f0' : void 0,
                            cursor: 'pointer',
                          },
                          onClick: (e) => k(s, e),
                          role: 'row',
                          'aria-selected': n,
                          tabIndex: -1,
                          children: (0, l.jsx)('table', {
                            className: 'w-full border-collapse',
                            role: 'presentation',
                            children: (0, l.jsx)('tbody', {
                              children: (0, l.jsx)('tr', {
                                children: t.map((t) => {
                                  var r;
                                  return (0, l.jsx)(
                                    'td',
                                    {
                                      className: 'border-b border-neutral-200 p-2 text-left dark:border-neutral-800',
                                      style: { width: null != (r = t.width) ? r : 'auto' },
                                      role: 'gridcell',
                                      children: i ? i(e, t, s, n) : String(e[t.key]),
                                    },
                                    String(t.key)
                                  );
                                }),
                              }),
                            }),
                          }),
                        },
                        s
                      );
                    }),
                  }),
                }),
              ],
            })
          );
        },
        i = () => {
          let e = Array.from({ length: 1e4 }, (e, t) => ({
            id: t + 1,
            name: 'Person '.concat(t + 1),
            age: 20 + (t % 50),
            email: 'user'.concat(t + 1, '@example.com'),
          }));
          return (0, l.jsx)('div', {
            className: 'w-full',
            children: (0, l.jsx)(n, {
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
      var o = r(8880),
        d = !0;
      let c = (e) => {
        let { code: t = '' } = e;
        return (0, l.jsx)(o.U, {
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
                  code: t,
                  chart: (0, l.jsx)(i, {}),
                }),
              }),
            }),
          }),
        });
      };
    },
    4933: (e, t, r) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/react/virtual-table',
        function () {
          return r(1099);
        },
      ]);
    },
    6921: (e, t, r) => {
      'use strict';
      r.d(t, { C: () => l });
      let l = (e) => {
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
    8899: (e, t, r) => {
      'use strict';
      r.d(t, { V: () => i });
      var l = r(5640),
        a = r(6921),
        s = r(148),
        n = r(7382);
      let i = (e) => {
        let { code: t, lang: r } = e,
          [i, o] = (0, s.useState)('');
        return (
          (0, s.useEffect)(() => {
            (async () => {
              o(await (0, n.Yz)(t, { lang: r, theme: 'github-dark' }));
            })();
          }),
          (0, l.jsx)('button', {
            className: 'w-full cursor-pointer overflow-x-auto bg-neutral-900 p-4 text-left',
            dangerouslySetInnerHTML: { __html: i },
            onClick: () => (0, a.C)(t),
          })
        );
      };
    },
    9419: (e, t, r) => {
      'use strict';
      r.d(t, { O: () => n });
      var l = r(5640),
        a = r(148),
        s = r(8899);
      let n = (e) => {
        let {
            id: t = '',
            emoji: r = '',
            group: n = '',
            name: i = '',
            code: o = '',
            chart: d = (0, l.jsx)(l.Fragment, {}),
          } = e,
          [c, u] = (0, a.useState)(!0);
        return (0, l.jsxs)('div', {
          id: t,
          className: 'flex flex-col gap-y-4 md:gap-y-8',
          children: [
            (0, l.jsxs)('div', {
              className: 'flex items-center justify-between gap-x-2',
              children: [
                (0, l.jsxs)('div', {
                  className: 'flex items-center gap-x-2',
                  children: [
                    (0, l.jsx)('span', { className: 'text-4xl', children: r }),
                    (0, l.jsxs)('div', {
                      children: [
                        (0, l.jsx)('p', { className: 'text-xs capitalize', children: n }),
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
                ? (0, l.jsx)('div', { className: 'flex w-full items-center justify-center p-4 md:p-8', children: d })
                : (0, l.jsx)(s.V, { code: o, lang: 'html' }),
            }),
          ],
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [6826, 7382, 8880, 636, 6593, 8792], () => t(4933)), (_N_E = e.O());
  },
]);
