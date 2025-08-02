'use strict'
;(self.webpackChunklyrixi_design_mobile = self.webpackChunklyrixi_design_mobile || []).push([
  [1923],
  {
    26520: function (L, o, e) {
      e.r(o),
        e.d(o, {
          default: function () {
            return S
          }
        })
      var h = e(27424),
        y = e.n(h),
        n = e(67294),
        i = e(9202),
        x = e(56790),
        C = e(64236),
        l = null,
        r = e(90482),
        k = e(85893),
        s = {},
        a = {
          name: 'lyrixi-design-mobile',
          description: 'A react library developed with dumi',
          version: '0.0.1',
          license: 'MIT',
          authors: ['Lyrixi']
        },
        u = 'browser',
        d = void 0,
        m = {
          logo: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
          footer:
            '<div class="homepage-copyright">Copyright \xA9 2023 | Powered <span style="color: #ff8800;">\u2764</span> by <a href="https://github.com/colaboy/lyrixi-design-mobile" target="_blank" rel="noreferrer">Lyrixi</a></div>',
          prefersColor: { default: 'light', switch: !0 },
          nprogress: !0,
          lastUpdated: !0,
          name: 'Lyrixi',
          nav: {
            'zh-CN': [
              { title: '\u8BBE\u8BA1', link: '/design/introduce' },
              { title: '\u7EC4\u4EF6', link: '/components' },
              { title: '\u5DE5\u5177', link: '/utils' },
              { title: '\u6A21\u677F', link: '/pages' }
            ],
            'en-US': [
              { title: 'Design', link: '/en-US/design/introduce' },
              { title: 'Components', link: '/en-US/components' },
              { title: 'Utils', link: '/en-US/utils' },
              { title: 'Template', link: '/en-US/pages' }
            ]
          },
          deviceWidth: 375,
          hd: { rules: [] },
          compact: !1
        },
        c = !0
      function S() {
        var T = (0, i.pC)(),
          U = (0, n.useState)(!1),
          v = y()(U, 2),
          p = v[0],
          g = v[1],
          f = (0, n.useRef)(i.m8.location.pathname)
        ;(0, n.useEffect)(function () {
          return i.m8.listen(function (t) {
            t.location.pathname !== f.current &&
              ((f.current = t.location.pathname), document.documentElement.scrollTo(0, 0))
          })
        }, [])
        var b = n.useMemo(
          function () {
            var t = {
              pkg: a,
              historyType: u,
              entryExports: s,
              demos: null,
              components: l,
              locales: r.k,
              loading: p,
              setLoading: g,
              hostname: d,
              themeConfig: m,
              _2_level_nav_available: c
            }
            return (
              Object.defineProperty(t, 'demos', {
                get: function () {
                  return (
                    (0, x.Kp)(
                      !1,
                      '`demos` return empty in latest version, please use `useDemo` instead.'
                    ),
                    {}
                  )
                }
              }),
              t
            )
          },
          [a, u, s, l, r.k, p, g, d, m, c]
        )
        return (0, k.jsx)(C.D.Provider, { value: b, children: T })
      }
    }
  }
])
