'use strict'
;(self.webpackChunklyrixi_design_mobile = self.webpackChunklyrixi_design_mobile || []).push([
  [2433],
  {
    69829: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = [
            { id: '1', name: '\u6D4B\u8BD5Node' },
            { id: '2', name: '\u6D4B\u8BD51' },
            { id: '3', name: '\u6D4B\u8BD52' },
            { id: '4', name: '\u6D4B\u8BD53' },
            { id: '5', name: '\u6D4B\u8BD54' },
            { id: '6', name: '\u6D4B\u8BD54' },
            { id: '7', name: '\u6D4B\u8BD55' },
            { id: '8', name: '\u6D4B\u8BD56' },
            { id: '9', name: '\u6D4B\u8BD57' },
            { id: '10', name: '\u6D4B\u8BD58' },
            { id: '11', name: '\u6D4B\u8BD59' },
            { id: '12', name: '\u6D4B\u8BD510' },
            { id: '13', name: '\u6D4B\u8BD511' },
            { id: '14', name: '\u6D4B\u8BD512' },
            { id: '15', name: '\u6D4B\u8BD513' },
            { id: '16', name: '\u6D4B\u8BD514' }
          ],
          r = (0, n.useState)(null),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        return (
          (0, n.useEffect)(function () {
            l.Device.os === 'ios' &&
              l.Device.compareVersion(l.Device.osVersion, '17') < 1 &&
              alert('bad ios' + l.Device.osVersion),
              l.Device.os === 'android' &&
                l.Device.compareVersion(l.Device.osVersion, '9') < 1 &&
                alert('bad android' + l.Device.osVersion),
              l.Device.os === 'harmony' &&
                l.Device.compareVersion(l.Device.osVersion, '19') < 1 &&
                alert('bad harmony' + l.Device.osVersion),
              l.SafeArea.autoSafeArea({ debug: !0 })
          }, []),
          (0, t.jsx)(l.Layout, {
            className: 'full',
            children: (0, t.jsx)(l.Layout.Main, {
              children: (0, t.jsx)(l.ActionSheet.Combo, {
                placeholder: 'Please select',
                value: _,
                title: 'Please select',
                list: s,
                onChange: function (m) {
                  console.log('onChange:', m), u(m)
                },
                onVisibleChange: function (m) {
                  console.log('visible:', m)
                },
                modalProps: {}
              })
            })
          })
        )
      }
    },
    98167: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = [
            { id: '1', name: '\u6D4B\u8BD5Node' },
            { id: '2', name: '\u6D4B\u8BD51' },
            { id: '3', name: '\u6D4B\u8BD52' },
            { id: '4', name: '\u6D4B\u8BD53' },
            { id: '5', name: '\u6D4B\u8BD54' },
            { id: '6', name: '\u6D4B\u8BD54' },
            { id: '7', name: '\u6D4B\u8BD55' },
            { id: '8', name: '\u6D4B\u8BD56' },
            { id: '9', name: '\u6D4B\u8BD57' },
            { id: '10', name: '\u6D4B\u8BD58' },
            { id: '11', name: '\u6D4B\u8BD59' },
            { id: '12', name: '\u6D4B\u8BD510' },
            { id: '13', name: '\u6D4B\u8BD511' },
            { id: '14', name: '\u6D4B\u8BD512' },
            { id: '15', name: '\u6D4B\u8BD513' },
            { id: '16', name: '\u6D4B\u8BD514' }
          ],
          r = (0, n.useState)(null),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        return (
          (0, n.useEffect)(function () {
            l.SafeArea.autoSafeArea()
          }, []),
          (0, t.jsx)(l.Layout, {
            className: 'full',
            children: (0, t.jsxs)(l.Layout.Main, {
              children: [
                JSON.stringify(_),
                (0, t.jsx)(l.ActionSheet.Modal, {
                  visible: !0,
                  value: _,
                  list: s,
                  onChange: function (m) {
                    console.log('onChange:', m), u(m)
                  },
                  onVisibleChange: function (m) {
                    console.log('visible:', m)
                  }
                })
              ]
            })
          })
        )
      }
    },
    55311: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsx)(a.Layout.Main, {
            children: (0, n.jsx)(a.Badge, { maxLength: 2, ellipsis: '+', children: '1000' })
          })
        })
      }
    },
    96035: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893),
        l = { margin: 'var(--space-m)' }
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            className: 'bg-white',
            children: [
              (0, n.jsx)(a.Divider, { children: 'Color & Variant' }),
              (0, n.jsxs)('div', {
                className: 'flex',
                children: [
                  (0, n.jsx)(a.Button, { className: 'radius-m', style: l, children: 'default' }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m radius-m outline',
                    style: l,
                    children: 'outline'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m radius-m text fill outline',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m text fill',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, { className: 'radius-m text', style: l, children: 'text' })
                ]
              }),
              (0, n.jsxs)('div', {
                className: 'flex',
                children: [
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m primary',
                    style: l,
                    children: 'primary'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m primary radius-m outline',
                    style: l,
                    children: 'outline'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m primary radius-m text fill outline',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m primary text fill',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m primary text',
                    style: l,
                    children: 'text'
                  })
                ]
              }),
              (0, n.jsxs)('div', {
                className: 'flex',
                children: [
                  (0, n.jsx)(a.Button, { className: 'radius-m link', style: l, children: 'link' }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m link radius-m outline',
                    style: l,
                    children: 'outline'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m link radius-m text fill outline',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m link text fill',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m link text',
                    style: l,
                    children: 'text'
                  })
                ]
              }),
              (0, n.jsxs)('div', {
                className: 'flex',
                children: [
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m warning',
                    style: l,
                    children: 'link'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m warning radius-m outline',
                    style: l,
                    children: 'outline'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m warning radius-m text fill outline',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m warning text fill',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m warning text',
                    style: l,
                    children: 'text'
                  })
                ]
              }),
              (0, n.jsxs)('div', {
                className: 'flex',
                children: [
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m danger',
                    style: l,
                    children: 'danger'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m danger radius-m outline',
                    style: l,
                    children: 'outline'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m danger radius-m text fill outline',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m danger text fill',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m danger text',
                    style: l,
                    children: 'text'
                  })
                ]
              }),
              (0, n.jsxs)('div', {
                className: 'flex',
                children: [
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m success',
                    style: l,
                    children: 'success'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m success radius-m outline',
                    style: l,
                    children: 'outline'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m success radius-m text fill outline',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m success text fill',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'radius-m success text',
                    style: l,
                    children: 'text'
                  })
                ]
              }),
              (0, n.jsx)('br', {}),
              (0, n.jsx)(a.Divider, { children: 'Disabled' }),
              (0, n.jsxs)('div', {
                className: 'flex',
                children: [
                  (0, n.jsx)(a.Button, {
                    className: 'disabled radius-m',
                    style: l,
                    children: 'default'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'disabled radius-m radius-m outline',
                    style: l,
                    children: 'outline'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'disabled radius-m radius-m text fill outline',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'disabled radius-m text fill',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'disabled radius-m text',
                    style: l,
                    children: 'text'
                  })
                ]
              }),
              (0, n.jsxs)('div', {
                className: 'flex',
                children: [
                  (0, n.jsx)(a.Button, {
                    className: 'disabled radius-m primary',
                    style: l,
                    children: 'primary'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'disabled radius-m primary radius-m outline',
                    style: l,
                    children: 'outline'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'disabled radius-m primary radius-m text fill outline',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'disabled radius-m primary text fill',
                    style: l,
                    children: 'fill'
                  }),
                  (0, n.jsx)(a.Button, {
                    className: 'disabled radius-m primary text',
                    style: l,
                    children: 'text'
                  })
                ]
              }),
              (0, n.jsx)('br', {}),
              (0, n.jsx)(a.Divider, { children: 'Shape' }),
              (0, n.jsxs)('div', {
                className: 'bg-body',
                children: [
                  (0, n.jsx)(a.Button, {
                    shape: 'round',
                    className: 'primary',
                    style: l,
                    children: 'Round'
                  }),
                  (0, n.jsx)(a.Button, {
                    shape: 'circle',
                    className: 's primary',
                    style: l,
                    children: (0, n.jsx)(a.Icon, { className: 'seeds-icons seeds-icon-barcode' })
                  }),
                  (0, n.jsx)(a.Button, {
                    shape: 'square',
                    className: 's radius-m',
                    style: l,
                    children: (0, n.jsx)(a.Icon, { className: 'seeds-icons seeds-icon-barcode' })
                  }),
                  (0, n.jsx)('br', {}),
                  (0, n.jsx)(a.Divider, { children: 'Flex' }),
                  (0, n.jsx)(a.Button, {
                    className: 'primary flex radius-m',
                    style: l,
                    children: 'primary flex'
                  })
                ]
              }),
              (0, n.jsx)('br', {}),
              (0, n.jsx)(a.Divider, { children: 'Size & radius' }),
              (0, n.jsx)(a.Button, {
                className: 'primary xxs radius-xxs outline fill',
                style: l,
                children: 'primary xxs'
              }),
              (0, n.jsx)(a.Button, {
                className: 'primary xs radius-xs',
                style: l,
                children: 'primary xs'
              }),
              (0, n.jsx)(a.Button, {
                className: 'primary s radius-s',
                style: l,
                children: 'primary s'
              }),
              (0, n.jsx)(a.Button, {
                className: 'primary m radius-m',
                style: l,
                children: 'primary m'
              }),
              (0, n.jsx)(a.Button, {
                className: 'primary l radius-l',
                style: l,
                children: 'primary l'
              }),
              (0, n.jsx)(a.Button, {
                className: 'primary xl radius-xl',
                style: l,
                children: 'primary xl'
              })
            ]
          })
        })
      }
    },
    67462: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(89817),
        s = e(85893),
        r = 'range',
        o = 'Monday'
      i.default = function () {
        var _ = (0, n.useRef)(null),
          u = (0, n.useState)([]),
          d = a()(u, 2),
          m = d[0],
          c = d[1],
          g = (0, n.useState)(),
          v = a()(g, 2),
          C = v[0],
          O = v[1]
        function p(M) {
          console.log('\u4FEE\u6539', M), O(M)
        }
        return (0, s.jsx)(l.Layout, {
          className: 'full',
          children: (0, s.jsxs)(l.Layout.Main, {
            onTopRefresh: function () {
              return new Promise(function (P) {
                setTimeout(function () {
                  P(!0)
                }, 2e3)
              })
            },
            children: [
              (0, s.jsx)(l.Calendar, {
                type: 'week',
                ref: _,
                weekStart: o,
                value: C,
                titleFormatter: function (P, U) {
                  return U.type === 'month'
                    ? t.default.format(P, 'YYYY\u5E74MM\u6708')
                    : t.default.format(P, 'YYYY\u5E74MM\u6708DD\u65E5 d \u7B2CW\u5468')
                },
                dateRender: function (P, U) {
                  var L = U.isSelected,
                    B = U.isDisabled,
                    b = U.isCurrent
                  return (
                    console.log({ date: P, isSelected: L, isDisabled: B, isCurrent: b }),
                    (0, s.jsxs)('div', {
                      className: 'calendar-date-num',
                      children: [
                        P.getDate(),
                        b && (0, s.jsx)('span', { className: 'calendar-date-dot' }),
                        m[t.default.format(P, 'YYYY-MM-DD')] ? 'M' : ''
                      ]
                    })
                  )
                },
                onChange: p,
                onSlideChange: function (P, U) {
                  var L = U.action,
                    B = U.type,
                    b = U.monthDates
                  console.log('\u89C6\u56FE\u53D8\u5316:', {
                    data: P,
                    action: L,
                    type: B,
                    monthDates: b
                  }),
                    c({ '2024-04-10': '1' })
                },
                onLoad: function (P, U) {
                  var L = U.action,
                    B = U.type,
                    b = U.monthDates
                  console.log('\u65E5\u5386\u521D\u59CB\u5316', {
                    data: P,
                    action: L,
                    type: B,
                    monthDates: b
                  })
                }
              }),
              (0, s.jsx)('div', {
                onClick: function () {
                  _.current.slidePrevious()
                },
                children: '\u4E0A\u4E00\u9875'
              }),
              (0, s.jsx)('div', {
                onClick: function () {
                  _.current.slideNext()
                },
                children: '\u4E0B\u4E00\u9875'
              }),
              (0, s.jsx)('div', {
                onClick: function () {
                  _.current.slideExpand()
                },
                children: '\u5C55\u5F00'
              }),
              (0, s.jsx)('div', {
                onClick: function () {
                  _.current.slideCollapse()
                },
                children: '\u6536\u7F29'
              })
            ]
          })
        })
      }
    },
    14412: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsx)(a.Layout.Main, {
            children: (0, n.jsx)(a.Card, { children: '1000' })
          })
        })
      }
    },
    24972: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(null),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        function u(d) {
          return new Promise(function (m) {
            if (!Array.isArray(d) || !d.length) {
              m(null)
              return
            }
            var c = d[d.length - 1]
            if (c.id !== '1-1') {
              m(null)
              return
            }
            l.Loading.show()
            var g = [{ name: '\u5B59\u5B50\u8282\u70B9', id: '1-1-1' }]
            setTimeout(function () {
              l.Loading.hide()
            }, 100),
              typeof g == 'string' && Toast.show({ content: g }),
              m(g)
          })
        }
        return (0, t.jsx)(l.Layout, {
          className: 'full',
          children: (0, t.jsx)(l.Layout.Main, {
            children: (0, t.jsx)(l.Cascader.Combo, {
              allowClear: !0,
              list: [
                {
                  id: '1',
                  name: '\u6839\u8282\u70B9',
                  children: [{ id: '1-1', name: '\u5B50\u8282\u70B9' }]
                }
              ],
              loadData: u,
              value: o,
              placeholder: 'Select',
              onChange: function (m) {
                console.log('\u4FEE\u6539:', m), _(m)
              },
              modalProps: { safeArea: !0, title: '\u7EA7\u8054\u9009\u62E9' },
              onVisibleChange: function (m) {
                console.log('visible:', m)
              },
              clear: function (m) {
                var c = m.clearable,
                  g = m.triggerClear
                return c
                  ? (0, t.jsx)(l.Input.IconClear, { onClick: g })
                  : (0, t.jsx)(l.Input.IconRightArrow, {})
              }
            })
          })
        })
      }
    },
    66070: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(96486),
        t = e.n(l),
        s = e(49886),
        r = e(94324),
        o = e(54530),
        _ = e(20060),
        u = e(66999),
        d = e(98151),
        m = e(33719),
        c = e(2827),
        g = e(85893)
      ;(window.countryIds = r.default),
        (window.provinceIds = o.default),
        (window.municipalityIds = _.default),
        (window.cityIds = u.default),
        (window.prefectureIds = d.default),
        (window.districtIds = m.default),
        (window.streetIds = c.default),
        (i.default = function () {
          var v = (0, n.useState)([]),
            C = a()(v, 2),
            O = C[0],
            p = C[1]
          return (
            (0, n.useEffect)(function () {
              setTimeout(function () {
                p([
                  { name: '\u4E2D\u56FD', id: '86' },
                  { name: '\u5317\u4EAC\u5E02', id: '110000' },
                  { name: '\u4E1C\u57CE\u533A', id: '110101' }
                ])
              }, 2e3)
            }, []),
            (0, g.jsx)(s.Layout, {
              className: 'full',
              children: (0, g.jsx)(s.Layout.Main, {
                children: (0, g.jsx)(s.Cascader.DistrictCombo, {
                  startType: 'country',
                  type: 'district',
                  min: 'province',
                  editableOptions: {},
                  value: O,
                  onChange: function (P) {
                    console.log('\u4FEE\u6539: ', P), p(P)
                  },
                  placeholder: '\u70B9\u51FB\u9009\u62E9',
                  allowClear: !0,
                  clear: function (P) {
                    var U = P.clearable,
                      L = P.triggerClear
                    return U
                      ? (0, g.jsx)(s.Input.IconClear, { onClick: L })
                      : (0, g.jsx)(s.Input.IconRightArrow, {})
                  },
                  modalProps: { maskProps: { style: { zIndex: '9' } } }
                })
              })
            })
          )
        })
    },
    95202: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsx)(a.Layout.Main, {
            children: (0, n.jsx)(a.Chat.Item, {
              avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
              id: '1',
              name: '1',
              content: 'content',
              position: 'left',
              time: new Date()
            })
          })
        })
      }
    },
    26914: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsx)(a.Layout.Main, {
            children: (0, n.jsx)(a.Chat.List, {
              list: [
                {
                  avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
                  id: '1',
                  name: '1',
                  content: 'content',
                  position: 'left',
                  time: new Date()
                },
                {
                  avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
                  id: '2',
                  name: '\u5F20\u4E09',
                  content: 'content',
                  position: 'right',
                  time: new Date()
                },
                {
                  avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
                  id: '3',
                  name: '\u5F20\u4E09',
                  content: 'content',
                  position: 'right',
                  time: new Date('2025-08-08')
                }
              ]
            })
          })
        })
      }
    },
    93357: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(!1),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(l.Checkbox, { checked: o, onChange: _, children: 'Common' }),
            (0, t.jsx)('br', {}),
            (0, t.jsx)(l.Checkbox, { checked: o, onChange: _, icon: 'tick', children: 'Custom' }),
            (0, t.jsx)('br', {}),
            (0, t.jsx)(l.Checkbox, {
              checked: o,
              onChange: _,
              iconPosition: 'right',
              children: 'Common iconPosition=right'
            }),
            (0, t.jsx)('br', {}),
            (0, t.jsx)(l.Checkbox, { checked: !0, children: 'Checked' }),
            (0, t.jsx)('br', {}),
            (0, t.jsx)(l.Checkbox, { checked: !1, disabled: !0, children: 'Common Disabled' }),
            (0, t.jsx)('br', {}),
            (0, t.jsx)(l.Checkbox, { checked: !0, disabled: !0, children: 'Checked Disabled' })
          ]
        })
      }
    },
    97737: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useRef)(null),
          r = (0, n.useState)([
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3' },
            { id: '4', name: '4' },
            { id: '5', name: '5' },
            { id: '6', name: '6' },
            { id: '7', name: '7' },
            { id: '8', name: '8' },
            { id: '9', name: '9' },
            { id: '10', name: '10' }
          ]),
          o = a()(r, 2),
          _ = o[0],
          u = o[1],
          d = (0, n.useState)(null),
          m = a()(d, 2),
          c = m[0],
          g = m[1]
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.Checkbox.Group, {
            ref: s,
            multiple: !1,
            value: c,
            list: _,
            onChange: function (C) {
              console.log('onChange:', C), g(C)
            }
          })
        })
      }
    },
    32730: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(null),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsx)(l.Layout, {
          className: 'full',
          children: (0, t.jsxs)(l.Layout.Main, {
            children: [
              (0, t.jsxs)(l.Card, {
                children: [
                  (0, t.jsx)(l.Divider, { children: 'Group(Controlled component)' }),
                  (0, t.jsx)(l.Button, {
                    className: 'primary flex',
                    style: { margin: '12px' },
                    onClick: function () {
                      return _(2)
                    },
                    children: 'Open Third'
                  }),
                  (0, t.jsxs)(l.Collapse.Group, {
                    value: o,
                    style: { margin: '0 12px' },
                    onChange: _,
                    children: [
                      (0, t.jsx)(l.Collapse.Item, {
                        title: 'One',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'First Text'
                        })
                      }),
                      (0, t.jsx)(l.Collapse.Item, {
                        title: 'Two',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'Second Text'
                        })
                      }),
                      (0, t.jsx)(l.Collapse.Item, {
                        title: 'Three',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'Third Text'
                        })
                      }),
                      (0, t.jsx)(l.Collapse.Item, {
                        title: 'Four',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'Fourth Text'
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, t.jsxs)(l.Card, {
                children: [
                  (0, t.jsx)(l.Divider, { children: 'Group' }),
                  (0, t.jsxs)(l.Collapse.Group, {
                    style: { margin: '0 12px' },
                    children: [
                      (0, t.jsx)(l.Collapse.Item, {
                        title: 'One',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'First Text'
                        })
                      }),
                      (0, t.jsx)(l.Collapse.Item, {
                        title: 'Two',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'Second Text'
                        })
                      }),
                      (0, t.jsx)(l.Collapse.Item, {
                        title: 'Three',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'Third Text'
                        })
                      }),
                      (0, t.jsx)(l.Collapse.Item, {
                        title: 'Four',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'Fourth Text'
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, t.jsxs)(l.Card, {
                children: [
                  (0, t.jsx)(l.Divider, { children: 'Item(Controlled component)' }),
                  (0, t.jsx)('div', {
                    style: { margin: '0 12px' },
                    children: (0, t.jsx)(l.Collapse.Item, {
                      title: 'One',
                      visible: o === 0,
                      onVisibleChange: function (d) {
                        return _(d ? 0 : null)
                      },
                      children: (0, t.jsx)('div', {
                        className: 'flex flex-center flex-middle border-b',
                        style: { height: 100 },
                        children: 'First Text'
                      })
                    })
                  })
                ]
              }),
              (0, t.jsxs)(l.Card, {
                children: [
                  (0, t.jsx)(l.Divider, { children: 'Left Arrow' }),
                  (0, t.jsxs)('div', {
                    style: { margin: '0 12px' },
                    children: [
                      (0, t.jsx)(l.Collapse.Item, {
                        title: 'One',
                        arrowPosition: 'left',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'First Text'
                        })
                      }),
                      (0, t.jsx)(l.Collapse.Item, {
                        visible: !1,
                        title: 'Two',
                        arrowPosition: 'left',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'Second Text'
                        })
                      }),
                      (0, t.jsx)(l.Collapse.Item, {
                        visible: !1,
                        title: 'Three',
                        arrowPosition: 'left',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'Third Text'
                        })
                      }),
                      (0, t.jsx)(l.Collapse.Item, {
                        visible: !1,
                        title: 'Four',
                        arrowPosition: 'left',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'Fourth Text'
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, t.jsxs)(l.Card, {
                children: [
                  (0, t.jsx)(l.Divider, { children: 'Custom Arrow' }),
                  (0, t.jsxs)('div', {
                    style: { margin: '0 12px' },
                    children: [
                      (0, t.jsx)(l.Collapse.Item, {
                        arrow: 'seeds-icon-star-fill',
                        title: 'Arrow ClassName',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'Arrow ClassName'
                        })
                      }),
                      (0, t.jsx)(l.Collapse.Item, {
                        visible: !1,
                        arrow: function () {
                          return (0, t.jsx)('i', {
                            className: 'seeds-icon-star-fill',
                            style: { fontSize: '14px', color: '#f90' }
                          })
                        },
                        title: 'Arrow Node',
                        children: (0, t.jsx)('div', {
                          className: 'flex flex-center flex-middle border-b',
                          style: { height: 100 },
                          children: 'Arrow Node'
                        })
                      })
                    ]
                  })
                ]
              }),
              (0, t.jsxs)(l.Card, {
                children: [
                  (0, t.jsx)(l.Divider, { children: 'Custom Header' }),
                  (0, t.jsx)('div', {
                    style: { margin: '0 12px' },
                    children: (0, t.jsx)(l.Collapse.Item, {
                      visible: !1,
                      header: function (d) {
                        var m = d.visible,
                          c = d.arrow
                        return (0, t.jsxs)('div', {
                          className: 'flex flex-middle',
                          style: { height: 40, borderBottom: m ? '1px solid #e8e8e8' : 'none' },
                          children: [
                            (0, t.jsx)('div', { className: 'flex-1', children: 'Custom Header' }),
                            c
                          ]
                        })
                      },
                      children: (0, t.jsx)('div', {
                        className: 'flex flex-center flex-middle border-b',
                        style: { height: 100 },
                        children: 'First Text'
                      })
                    })
                  })
                ]
              })
            ]
          })
        })
      }
    },
    53159: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          children: (0, n.jsx)(a.Layout.Main, {
            children: (0, n.jsx)(a.Confirm.Combo, {
              icon: 'seeds-icon-config color-primary',
              title: 'Title',
              content: (0, n.jsx)('div', { children: 'Content' }),
              buttonsLayout: 'vertical',
              buttons: [
                {
                  id: 'button1',
                  name: 'Button1',
                  onClick: function () {
                    return !0
                  }
                },
                {
                  id: 'button2',
                  name: 'Button2',
                  className: 'primary',
                  onClick: function () {
                    return !0
                  }
                }
              ],
              children: (0, n.jsx)(a.Button, {
                className: 'flex primary',
                children: 'Click to show confirm'
              })
            })
          })
        })
      }
    },
    42602: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(!1),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(l.Layout, {
              children: (0, t.jsx)(l.Layout.Main, {
                children: (0, t.jsx)(l.Button, {
                  className: 'flex primary',
                  onClick: function () {
                    return _(!0)
                  },
                  children: 'Click to show confirm'
                })
              })
            }),
            (0, t.jsxs)(l.Confirm.Modal, {
              visible: o,
              onVisibleChange: _,
              children: [
                (0, t.jsxs)(l.Confirm.Header, {
                  children: [
                    (0, t.jsx)(l.Confirm.Icon, { className: 'seeds-icon-config color-primary' }),
                    (0, t.jsx)(l.Confirm.Title, { children: 'Title' })
                  ]
                }),
                (0, t.jsx)(l.Confirm.Main, { children: 'Content' }),
                (0, t.jsxs)(l.Confirm.Footer, {
                  children: [
                    (0, t.jsx)(l.Confirm.Button, {
                      onClick: function () {
                        return _(!1)
                      },
                      children: 'Button1'
                    }),
                    (0, t.jsx)(l.Confirm.Button, {
                      className: 'primary',
                      onClick: function () {
                        return _(!1)
                      },
                      children: 'Button2'
                    })
                  ]
                })
              ]
            })
          ]
        })
      }
    },
    62631: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(96486),
        t = e.n(l),
        s = e(49886),
        r = e(85893)
      i.default = function () {
        var o = (0, n.useState)(null),
          _ = a()(o, 2),
          u = _[0],
          d = _[1]
        return (0, r.jsx)(s.Layout, {
          className: 'full',
          children: (0, r.jsxs)(s.Layout.Main, {
            children: [
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Year' }),
                  (0, r.jsx)(s.DatePicker.Combo, {
                    style: { margin: '0 12px' },
                    type: 'year',
                    placeholder: 'Year',
                    value: u,
                    onChange: d
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Month' }),
                  (0, r.jsx)(s.DatePicker.Combo, {
                    style: { margin: '0 12px' },
                    type: 'month',
                    placeholder: 'Month',
                    value: u,
                    onChange: d,
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Date' }),
                  (0, r.jsx)(s.DatePicker.Combo, {
                    style: { margin: '0 12px' },
                    type: 'date',
                    placeholder: 'Date',
                    value: u,
                    onChange: d,
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Time' }),
                  (0, r.jsx)(s.DatePicker.Combo, {
                    style: { margin: '0 12px' },
                    type: 'time',
                    placeholder: 'Time',
                    value: u,
                    onChange: d,
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Datetime' }),
                  (0, r.jsx)(s.DatePicker.Combo, {
                    style: { margin: '0 12px' },
                    type: 'datetime',
                    placeholder: 'Datetime',
                    value: u,
                    onChange: d,
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Week' }),
                  (0, r.jsx)(s.DatePicker.Combo, {
                    style: { margin: '0 12px' },
                    type: 'week',
                    placeholder: 'Week',
                    value: u,
                    onChange: d,
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Limit' }),
                  (0, r.jsx)(s.DatePicker.Combo, {
                    style: { margin: '0 12px' },
                    min: new Date(),
                    max: s.DateUtil.add(new Date(), 30, 'day'),
                    placeholder: 'Limit',
                    value: u,
                    onChange: d,
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'onError' }),
                  (0, r.jsx)(s.DatePicker.Combo, {
                    style: { margin: '0 12px' },
                    min: new Date(),
                    max: s.DateUtil.add(new Date(), 30, 'day'),
                    placeholder: 'onError',
                    value: u,
                    onChange: d,
                    onError: function (c) {
                      s.Toast.show({ content: c.errMsg })
                    },
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Custom' }),
                  (0, r.jsx)(s.DatePicker.Combo, {
                    style: { margin: '0 12px' },
                    placeholder: 'Step',
                    title: 'Custom Title',
                    value: u,
                    onChange: d,
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'onBeforeChange' }),
                  (0, r.jsx)(s.DatePicker.Combo, {
                    style: { margin: '0 12px' },
                    placeholder: 'onBeforeChange',
                    value: u,
                    onBeforeChange: function (c) {
                      return (
                        console.log('onBeforeChange', c),
                        new Promise(function (g) {
                          s.Modal.confirm({
                            title: 'Warning',
                            content: 'Are you sure?',
                            onOk: function () {
                              g(!0)
                            },
                            onCancel: function () {
                              g(!1)
                            }
                          })
                        })
                      )
                    },
                    onChange: d,
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Step' }),
                  (0, r.jsx)(s.DatePicker.Combo, {
                    style: { margin: '0 12px' },
                    placeholder: 'Step',
                    type: 'datetime',
                    hourStep: 5,
                    minuteStep: 5,
                    value: u,
                    onChange: d,
                    allowClear: !0
                  })
                ]
              })
            ]
          })
        })
      }
    },
    81150: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)([
            { id: 'start', description: 'Start', value: new Date() },
            { id: 'middle', description: 'Middle', value: new Date() },
            { id: 'end', description: 'End', value: new Date() }
          ]),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.DatePicker.MultipleCombo, {
            placeholder: 'Please select MultipleCombo',
            value: o,
            type: 'datetime',
            onChange: function (d) {
              console.log(d), _(d)
            },
            modalProps: {
              onVisibleChange: function (d) {
                console.log('visible:', d)
              }
            },
            allowClear: !0,
            min: new Date(),
            hourStep: 5,
            minuteStep: 5,
            onError: function (d) {
              return l.Toast.show({ content: d.errMsg || '', maskClickable: !0 })
            }
          })
        })
      }
    },
    9909: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(96486),
        t = e.n(l),
        s = e(49886),
        r = e(85893)
      i.default = function () {
        var o = (0, n.useState)([null, new Date()]),
          _ = a()(o, 2),
          u = _[0],
          d = _[1]
        return (0, r.jsx)(s.Layout, {
          className: 'full',
          children: (0, r.jsxs)(s.Layout.Main, {
            children: [
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Year' }),
                  (0, r.jsx)(s.DatePicker.RangeCombo, {
                    style: { margin: '0 12px' },
                    type: 'year',
                    placeholder: 'Year',
                    ranges: null,
                    value: u,
                    onChange: function (c) {
                      console.log(c), d(c)
                    }
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Month' }),
                  (0, r.jsx)(s.DatePicker.RangeCombo, {
                    style: { margin: '0 12px' },
                    type: 'month',
                    placeholder: 'Month',
                    ranges: null,
                    value: u,
                    onChange: function (c) {
                      console.log(c), d(c)
                    },
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Date' }),
                  (0, r.jsx)(s.DatePicker.RangeCombo, {
                    style: { margin: '0 12px' },
                    type: 'date',
                    placeholder: 'Date',
                    ranges: null,
                    value: u,
                    onChange: function (c) {
                      console.log(c), d(c)
                    },
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Time' }),
                  (0, r.jsx)(s.DatePicker.RangeCombo, {
                    style: { margin: '0 12px' },
                    type: 'time',
                    placeholder: 'Time',
                    ranges: null,
                    value: u,
                    onChange: function (c) {
                      console.log(c), d(c)
                    },
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Datetime' }),
                  (0, r.jsx)(s.DatePicker.RangeCombo, {
                    style: { margin: '0 12px' },
                    type: 'datetime',
                    placeholder: 'Datetime',
                    ranges: null,
                    value: u,
                    onChange: function (c) {
                      console.log(c), d(c)
                    },
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Week' }),
                  (0, r.jsx)(s.DatePicker.RangeCombo, {
                    style: { margin: '0 12px' },
                    type: 'week',
                    placeholder: 'Week',
                    ranges: null,
                    value: u,
                    onChange: function (c) {
                      console.log(c), d(c)
                    },
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Quick Select' }),
                  (0, r.jsx)(s.DatePicker.RangeCombo, {
                    style: { margin: '0 12px' },
                    placeholder: 'Quick Select',
                    value: u,
                    onChange: function (c) {
                      console.log(c), d(c)
                    },
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Limit' }),
                  (0, r.jsx)(s.DatePicker.RangeCombo, {
                    style: { margin: '0 12px' },
                    min: new Date(),
                    max: s.DateUtil.add(new Date(), 30, 'day'),
                    placeholder: 'Limit',
                    ranges: null,
                    value: u,
                    onChange: function (c) {
                      console.log(c), d(c)
                    },
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'onError' }),
                  (0, r.jsx)(s.DatePicker.RangeCombo, {
                    style: { margin: '0 12px' },
                    min: new Date(),
                    max: s.DateUtil.add(new Date(), 30, 'day'),
                    placeholder: 'onError',
                    ranges: null,
                    value: u,
                    onChange: function (c) {
                      console.log(c), d(c)
                    },
                    onError: function (c) {
                      s.Toast.show({ content: c.errMsg })
                    },
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Custom' }),
                  (0, r.jsx)(s.DatePicker.RangeCombo, {
                    style: { margin: '0 12px' },
                    placeholder: 'Step',
                    title: 'Custom Title',
                    ranges: null,
                    value: u,
                    onChange: function (c) {
                      console.log(c), d(c)
                    },
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'onBeforeChange' }),
                  (0, r.jsx)(s.DatePicker.RangeCombo, {
                    style: { margin: '0 12px' },
                    placeholder: 'onBeforeChange',
                    value: u,
                    onBeforeChange: function (c) {
                      return (
                        console.log('onBeforeChange', c),
                        new Promise(function (g) {
                          s.Modal.confirm({
                            title: 'Warning',
                            content: 'Are you sure?',
                            onOk: function () {
                              g(!0)
                            },
                            onCancel: function () {
                              g(!1)
                            }
                          })
                        })
                      )
                    },
                    onChange: d,
                    allowClear: !0
                  })
                ]
              }),
              (0, r.jsxs)(s.Card, {
                children: [
                  (0, r.jsx)(s.Divider, { children: 'Step' }),
                  (0, r.jsx)(s.DatePicker.RangeCombo, {
                    style: { margin: '0 12px' },
                    placeholder: 'Step',
                    type: 'datetime',
                    hourStep: 5,
                    minuteStep: 5,
                    ranges: null,
                    value: u,
                    onChange: function (c) {
                      console.log(c), d(c)
                    },
                    allowClear: !0
                  })
                ]
              })
            ]
          })
        })
      }
    },
    68281: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(96486),
        t = e.n(l),
        s = e(49886),
        r = e(85893)
      i.default = function () {
        var o = (0, n.useState)(null),
          _ = a()(o, 2),
          u = _[0],
          d = _[1],
          m = (0, n.useState)([new Date(), new Date()]),
          c = a()(m, 2),
          g = c[0],
          v = c[1]
        return (0, r.jsxs)(s.Layout, {
          className: 'full',
          children: [
            (0, r.jsx)(s.Layout.Header, {
              className: 'text-center',
              children: '\u65E5\u671F\u5FEB\u6377\u9009\u62E9'
            }),
            (0, r.jsx)(s.Layout.Main, {
              className: 'bg-white',
              children: (0, r.jsx)(s.DatePicker.RangeMain, {
                rangeId: u,
                value: g,
                onChange: function (O, p) {
                  var M = p.rangeId
                  console.log('\u4FEE\u6539:', O), v(O), d(M)
                }
              })
            })
          ]
        })
      }
    },
    75936: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(96486),
        t = e.n(l),
        s = e(49886),
        r = e(85893)
      i.default = function () {
        var o = (0, n.useState)(null),
          _ = a()(o, 2),
          u = _[0],
          d = _[1],
          m = (0, n.useState)([new Date(), new Date()]),
          c = a()(m, 2),
          g = c[0],
          v = c[1]
        return (0, r.jsxs)(s.Layout, {
          className: 'full',
          children: [
            (0, r.jsx)(s.Layout.Header, {
              className: 'text-center',
              children: '\u65E5\u671F\u5FEB\u6377\u9009\u62E9'
            }),
            (0, r.jsx)(s.Layout.Main, {
              className: 'bg-white',
              children: (0, r.jsx)(s.DatePicker.RangeSelector, {
                allowClear: !0,
                rangeId: u,
                value: g,
                onChange: function (O, p) {
                  var M = p.rangeId
                  console.log('\u4FEE\u6539:', O), v(O), d(M)
                }
              })
            })
          ]
        })
      }
    },
    97922: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(27484),
        s = e.n(t),
        r = e(59542),
        o = e.n(r),
        _ = e(96671),
        u = e.n(_),
        d = e(28734),
        m = e.n(d),
        c = e(85893)
      s().extend(o()),
        s().extend(u()),
        s().extend(m()),
        (i.default = function () {
          var g = (0, n.useState)(),
            v = a()(g, 2),
            C = v[0],
            O = v[1]
          return (0, c.jsx)(c.Fragment, {
            children: (0, c.jsx)(l.DatePicker.Types, {
              value: C,
              list: [
                {
                  type: 'date',
                  id: 'date',
                  name: l.LocaleUtil.locale('\u65E5', 'datetype_unit_date')
                },
                {
                  type: 'month',
                  id: 'month',
                  name: l.LocaleUtil.locale('\u6708', 'datetype_unit_month')
                },
                {
                  type: 'quarter',
                  id: 'quarter',
                  name: l.LocaleUtil.locale('\u5B63', 'datetype_unit_quarter')
                },
                {
                  type: 'year',
                  id: 'year',
                  name: l.LocaleUtil.locale('\u5E74', 'datetype_unit_year')
                },
                {
                  type: 'week',
                  id: 'week',
                  name: l.LocaleUtil.locale('\u5468', 'datetype_unit_week')
                }
              ],
              onChange: function (M) {
                console.log('\u4FEE\u6539:', M), O(M)
              },
              contentProps: { className: 'flex flex-left' }
            })
          })
        })
    },
    71429: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(27484),
        s = e.n(t),
        r = e(59542),
        o = e.n(r),
        _ = e(28734),
        u = e.n(_),
        d = e(85893)
      s().extend(o()),
        s().extend(u()),
        (i.default = function () {
          var m = (0, n.useRef)(null),
            c = (0, n.useRef)(null),
            g = (0, n.useState)(null),
            v = a()(g, 2),
            C = v[0],
            O = v[1]
          return (
            (0, n.useEffect)(function () {
              m.current.open()
            }, []),
            (0, d.jsx)(d.Fragment, {
              children: (0, d.jsx)(l.DatePicker.WeekCombo, {
                ref: m,
                className: 'border-b',
                placeholder: 'Please select WeekCombo',
                type: 'datetime',
                allowClear: !0,
                onBeforeOpen: function () {
                  return document.querySelector('.mask.active')
                    ? (m.current.close(), c.current.close(), !1)
                    : !0
                },
                onVisibleChange: function (M) {
                  console.log('visible:', M)
                },
                modalProps: { maskProps: { style: { zIndex: 999 } } },
                onChange: function (M) {
                  O(M)
                },
                value: C,
                defaultPickerValue: new Date('2022-08-22 00:00')
              })
            })
          )
        })
    },
    85837: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsx)(a.Layout.Main, {
            children: (0, n.jsx)(a.Divider, { children: 'Divider' })
          })
        })
      }
    },
    66408: function (f, i, e) {
      e.r(i)
      var h = e(42122),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        return (
          (0, n.useEffect)(function () {}, []),
          (0, t.jsxs)(l.Layout, {
            className: 'full',
            children: [
              (0, t.jsx)(l.Layout.Header, { className: 'text-center', children: 'FloatButton' }),
              (0, t.jsxs)(l.Layout.Main, {
                className: 'bg-white',
                children: [
                  (0, t.jsx)(l.Divider, { children: 'FloatButton' }),
                  (0, t.jsx)(l.FloatButton, {
                    draggable: !0,
                    style: a()({}, l.Storage.getLocalStorage('pos') || {}),
                    list: [
                      { id: '1', icon: 'float-button-icon-more' },
                      {
                        id: '2',
                        name: '2',
                        className: 'bg-primary color-white',
                        icon: (0, t.jsx)('i', {
                          className: 'seeds-icon seeds-icon-plus',
                          style: { opacity: '0.5' }
                        })
                      },
                      { id: '3', name: '3', icon: 'seeds-icon-plus' },
                      {
                        id: '4',
                        name: '12345678',
                        className: 'color-primary',
                        children: [{ id: '3-1', name: '3-1' }]
                      }
                    ],
                    onChange: function (r) {
                      console.log(r)
                    },
                    onDragEnd: function (r) {
                      l.Storage.setLocalStorage('pos', r.position)
                    }
                  })
                ]
              }),
              (0, t.jsx)(l.Layout.Footer, { style: { height: '100px' } })
            ]
          })
        )
      }
    },
    67729: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          safeArea: !0,
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsx)(a.Divider, { children: 'Text Button' }),
              (0, n.jsxs)(a.FooterBar, {
                type: 'text',
                children: [
                  (0, n.jsx)(a.FooterBar.Tab, {
                    name: '',
                    more: [
                      {
                        id: 'option1',
                        name: 'Option 1',
                        onClick: function (t) {
                          console.log(t)
                        }
                      },
                      {
                        id: 'option2',
                        name: 'Option 2',
                        onClick: function (t) {
                          console.log(t)
                        }
                      }
                    ]
                  }),
                  (0, n.jsx)(a.FooterBar.Tab, {
                    icon: (0, n.jsx)(a.Icon, { className: 'seeds-icon-config' }),
                    onClick: function (t) {
                      console.log(t)
                    }
                  }),
                  (0, n.jsx)(a.FooterBar.Button, {
                    className: 'primary',
                    onClick: function (t) {
                      console.log(t)
                    },
                    children: 'Ok'
                  }),
                  (0, n.jsx)(a.FooterBar.Button, {
                    onClick: function (t) {
                      console.log(t)
                    },
                    children: 'Cancel'
                  })
                ]
              }),
              (0, n.jsx)(a.Divider, { children: 'Text Button disabled' }),
              (0, n.jsxs)(a.FooterBar, {
                type: 'text',
                children: [
                  (0, n.jsx)(a.FooterBar.Tab, {
                    more: [
                      {
                        disabled: !0,
                        id: 'option1',
                        name: 'Option 1',
                        onClick: function (t) {
                          console.log(t)
                        }
                      },
                      {
                        id: 'option2',
                        name: 'Option 2',
                        onClick: function (t) {
                          console.log(t)
                        }
                      }
                    ]
                  }),
                  (0, n.jsx)(a.FooterBar.Tab, {
                    disabled: !0,
                    icon: (0, n.jsx)(a.Icon, { className: 'seeds-icon-config' }),
                    onClick: function (t) {
                      console.log(t)
                    }
                  }),
                  (0, n.jsx)(a.FooterBar.Tab, {
                    disabled: !0,
                    more: [
                      {
                        id: 'option1',
                        name: 'Option 1',
                        onClick: function (t) {
                          console.log(t)
                        }
                      },
                      {
                        id: 'option2',
                        name: 'Option 2',
                        onClick: function (t) {
                          console.log(t)
                        }
                      }
                    ]
                  }),
                  (0, n.jsx)(a.FooterBar.Button, {
                    disabled: !0,
                    className: 'primary',
                    onClick: function (t) {
                      console.log(t)
                    },
                    children: 'Ok'
                  }),
                  (0, n.jsx)(a.FooterBar.Button, {
                    disabled: !0,
                    onClick: function (t) {
                      console.log(t)
                    },
                    children: 'Cancel'
                  })
                ]
              }),
              (0, n.jsx)(a.Divider, { children: 'Button' }),
              (0, n.jsxs)(a.FooterBar, {
                children: [
                  (0, n.jsx)(a.FooterBar.Tab, {
                    name: 'More',
                    more: [
                      {
                        id: 'option1',
                        name: 'Option 1',
                        onClick: function (t) {
                          console.log(t)
                        }
                      },
                      {
                        id: 'option2',
                        name: 'Option 2',
                        onClick: function (t) {
                          console.log(t)
                        }
                      }
                    ]
                  }),
                  (0, n.jsx)(a.FooterBar.Tab, {
                    icon: (0, n.jsx)(a.Icon, { className: 'seeds-icon-config' }),
                    name: 'Config',
                    onClick: function (t) {
                      console.log(t)
                    }
                  }),
                  (0, n.jsx)(a.FooterBar.Button, {
                    onClick: function (t) {
                      console.log(t)
                    },
                    children: 'Cancel'
                  }),
                  (0, n.jsx)(a.FooterBar.Button, {
                    className: 'primary',
                    onClick: function (t) {
                      console.log(t)
                    },
                    children: 'Ok'
                  })
                ]
              }),
              (0, n.jsx)(a.Divider, { children: 'Button disabled' }),
              (0, n.jsxs)(a.FooterBar, {
                children: [
                  (0, n.jsx)(a.FooterBar.Tab, {
                    name: 'More',
                    more: [
                      {
                        disabled: !0,
                        id: 'option1',
                        name: 'Option 1',
                        onClick: function (t) {
                          console.log(t)
                        }
                      },
                      {
                        id: 'option2',
                        name: 'Option 2',
                        onClick: function (t) {
                          console.log(t)
                        }
                      }
                    ]
                  }),
                  (0, n.jsx)(a.FooterBar.Tab, {
                    disabled: !0,
                    icon: (0, n.jsx)(a.Icon, { className: 'seeds-icon-config' }),
                    name: 'Config',
                    onClick: function (t) {
                      console.log(t)
                    }
                  }),
                  (0, n.jsx)(a.FooterBar.Button, {
                    disabled: !0,
                    onClick: function (t) {
                      console.log(t)
                    },
                    children: 'Cancel'
                  }),
                  (0, n.jsx)(a.FooterBar.Button, {
                    disabled: !0,
                    className: 'primary',
                    onClick: function (t) {
                      console.log(t)
                    },
                    children: 'Ok'
                  })
                ]
              })
            ]
          })
        })
      }
    },
    60279: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          safeArea: !0,
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsx)(a.Divider, { children: 'Text Button' }),
              (0, n.jsx)(a.FooterBar, {
                type: 'text',
                buttons: [
                  {
                    type: 'tab',
                    more: [
                      {
                        id: 'option1',
                        name: 'Option 1',
                        onClick: function (t) {
                          console.log(t)
                        }
                      },
                      {
                        id: 'option2',
                        name: 'Option 2',
                        onClick: function (t) {
                          console.log(t)
                        }
                      }
                    ]
                  },
                  {
                    type: 'tab',
                    icon: (0, n.jsx)(a.Icon, { className: 'seeds-icon-config' }),
                    onClick: function (t) {
                      console.log(t)
                    }
                  },
                  {
                    name: 'Ok',
                    className: 'primary',
                    onClick: function (t) {
                      console.log(t)
                    }
                  },
                  {
                    name: 'Cancel',
                    onClick: function (t) {
                      console.log(t)
                    }
                  }
                ]
              }),
              (0, n.jsx)(a.Divider, { children: 'Text Button disabled' }),
              (0, n.jsx)(a.FooterBar, {
                type: 'text',
                buttons: [
                  {
                    type: 'tab',
                    more: [
                      {
                        disabled: !0,
                        id: 'option1',
                        name: 'Option 1',
                        onClick: function (t) {
                          console.log(t)
                        }
                      },
                      {
                        id: 'option2',
                        name: 'Option 2',
                        onClick: function (t) {
                          console.log(t)
                        }
                      }
                    ]
                  },
                  {
                    type: 'tab',
                    disabled: !0,
                    icon: (0, n.jsx)(a.Icon, { className: 'seeds-icon-config' }),
                    onClick: function (t) {
                      console.log(t)
                    }
                  },
                  {
                    type: 'tab',
                    disabled: !0,
                    more: [
                      {
                        id: 'option1',
                        name: 'Option 1',
                        onClick: function (t) {
                          console.log(t)
                        }
                      },
                      {
                        id: 'option2',
                        name: 'Option 2',
                        onClick: function (t) {
                          console.log(t)
                        }
                      }
                    ]
                  },
                  {
                    name: 'Ok',
                    disabled: !0,
                    className: 'primary',
                    onClick: function (t) {
                      console.log(t)
                    }
                  },
                  {
                    name: 'Cancel',
                    disabled: !0,
                    onClick: function (t) {
                      console.log(t)
                    }
                  }
                ]
              }),
              (0, n.jsx)(a.Divider, { children: 'Button' }),
              (0, n.jsx)(a.FooterBar, {
                buttons: [
                  {
                    type: 'tab',
                    name: 'More',
                    more: [
                      {
                        id: 'option1',
                        name: 'Option 1',
                        onClick: function (t) {
                          console.log(t)
                        }
                      },
                      {
                        id: 'option2',
                        name: 'Option 2',
                        onClick: function (t) {
                          console.log(t)
                        }
                      }
                    ]
                  },
                  {
                    type: 'tab',
                    icon: (0, n.jsx)(a.Icon, { className: 'seeds-icon-config' }),
                    name: 'Config',
                    onClick: function (t) {
                      console.log(t)
                    }
                  },
                  {
                    name: 'Cancel',
                    onClick: function (t) {
                      console.log(t)
                    }
                  },
                  {
                    name: 'Ok',
                    className: 'primary',
                    onClick: function (t) {
                      console.log(t)
                    }
                  }
                ]
              }),
              (0, n.jsx)(a.Divider, { children: 'Button disabled' }),
              (0, n.jsx)(a.FooterBar, {
                buttons: [
                  {
                    type: 'tab',
                    name: 'More',
                    more: [
                      {
                        disabled: !0,
                        id: 'option1',
                        name: 'Option 1',
                        onClick: function (t) {
                          console.log(t)
                        }
                      },
                      {
                        id: 'option2',
                        name: 'Option 2',
                        onClick: function (t) {
                          console.log(t)
                        }
                      }
                    ]
                  },
                  {
                    type: 'tab',
                    disabled: !0,
                    icon: (0, n.jsx)(a.Icon, { className: 'seeds-icon-config' }),
                    name: 'Config',
                    onClick: function (t) {
                      console.log(t)
                    }
                  },
                  {
                    name: 'Cancel',
                    disabled: !0,
                    onClick: function (t) {
                      console.log(t)
                    }
                  },
                  {
                    name: 'Ok',
                    disabled: !0,
                    className: 'primary',
                    onClick: function (t) {
                      console.log(t)
                    }
                  }
                ]
              })
            ]
          })
        })
      }
    },
    2058: function (f, i, e) {
      e.r(i)
      var h = e(17061),
        a = e.n(h),
        n = e(17156),
        l = e.n(n),
        t = e(27424),
        s = e.n(t),
        r = e(67294),
        o = e(49886),
        _ = e(85893)
      i.default = function () {
        var u = o.Form.useForm(),
          d = s()(u, 1),
          m = d[0]
        function c() {
          return g.apply(this, arguments)
        }
        function g() {
          return (
            (g = l()(
              a()().mark(function v() {
                return a()().wrap(function (O) {
                  for (;;)
                    switch ((O.prev = O.next)) {
                      case 0:
                        m.validateFields()
                          .then(function () {
                            console.log('Right!')
                          })
                          .catch(function (p) {
                            console.log('Wrong!', p)
                          })
                      case 1:
                      case 'end':
                        return O.stop()
                    }
                }, v)
              })
            )),
            g.apply(this, arguments)
          )
        }
        return (0, _.jsxs)(o.Layout, {
          className: 'full',
          children: [
            (0, _.jsxs)(o.Layout.Main, {
              children: [
                (0, _.jsx)(o.Divider, { children: 'Horizontal' }),
                (0, _.jsxs)(o.Form, {
                  layout: 'horizontal',
                  form: m,
                  initialValues: { input: '123' },
                  labelCol: { span: 10 },
                  mainCol: { span: 14 },
                  children: [
                    (0, _.jsx)(o.Form.Item, {
                      name: 'input',
                      label: o.LocaleUtil.locale('\u5355\u884C\u6587\u672C\u6846'),
                      help: 'Help info',
                      extra: (0, _.jsx)('div', { children: 'Main Extra Info' }),
                      inputExtra: (0, _.jsx)('div', { children: 'Input Extra Info' }),
                      rules: [
                        {
                          required: !0,
                          message: o.LocaleUtil.locale(
                            '\u5355\u884C\u6587\u672C\u6846\u4E0D\u80FD\u4E3A\u7A7A'
                          )
                        }
                      ],
                      children: (0, _.jsx)(o.Input.Text, {
                        placeholder: o.LocaleUtil.locale('\u8BF7\u8F93\u5165'),
                        maxLength: 50
                      })
                    }),
                    (0, _.jsx)(o.Form.Item, {
                      name: 'select',
                      label: o.LocaleUtil.locale('\u4E0B\u62C9\u9009\u62E9\u6846'),
                      children: (0, _.jsx)(o.Select.Combo, {
                        placeholder: o.LocaleUtil.locale('\u8BF7\u9009\u62E9'),
                        list: [
                          { id: '1', name: '\u9009\u98791' },
                          { id: '2', name: '\u9009\u98792' }
                        ],
                        clear: function (C) {
                          var O = C.clearable,
                            p = C.triggerClear
                          return O
                            ? (0, _.jsx)(o.Input.IconClear, { onClick: p })
                            : (0, _.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, _.jsx)(o.Form.Item, {
                      name: 'textarea',
                      label: o.LocaleUtil.locale('\u591A\u884C\u6587\u672C\u6846'),
                      children: (0, _.jsx)(o.Input.AutoFit, {
                        placeholder: o.LocaleUtil.locale('\u8BF7\u8F93\u5165')
                      })
                    })
                  ]
                }),
                (0, _.jsx)(o.Divider, { children: 'Vertical' }),
                (0, _.jsxs)(o.Form, {
                  layout: 'vertical',
                  form: m,
                  children: [
                    (0, _.jsx)(o.Form.Item, {
                      name: 'input2',
                      label: o.LocaleUtil.locale('\u5355\u884C\u6587\u672C\u6846'),
                      help: '\u63D0\u793A\u4FE1\u606F',
                      rules: [
                        {
                          required: !0,
                          message: o.LocaleUtil.locale(
                            '\u5355\u884C\u6587\u672C\u6846\u4E0D\u80FD\u4E3A\u7A7A'
                          )
                        }
                      ],
                      children: (0, _.jsx)(o.Input.Text, {
                        placeholder: o.LocaleUtil.locale('\u8BF7\u8F93\u5165'),
                        maxLength: 50
                      })
                    }),
                    (0, _.jsx)(o.Form.Item, {
                      name: 'select2',
                      label: o.LocaleUtil.locale('\u4E0B\u62C9\u9009\u62E9\u6846'),
                      children: (0, _.jsx)(o.Select.Combo, {
                        placeholder: o.LocaleUtil.locale('\u8BF7\u9009\u62E9'),
                        list: [
                          { id: '1', name: '\u9009\u98791' },
                          { id: '2', name: '\u9009\u98792' }
                        ],
                        clear: function (C) {
                          var O = C.clearable,
                            p = C.triggerClear
                          return O
                            ? (0, _.jsx)(o.Input.IconClear, { onClick: p })
                            : (0, _.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, _.jsx)(o.Form.Item, {
                      name: 'textarea2',
                      label: o.LocaleUtil.locale('\u591A\u884C\u6587\u672C\u6846'),
                      children: (0, _.jsx)(o.Input.AutoFit, {
                        placeholder: o.LocaleUtil.locale('\u8BF7\u8F93\u5165')
                      })
                    })
                  ]
                })
              ]
            }),
            (0, _.jsx)(o.Layout.Footer, {
              className: 'listpicker-footer border-t',
              children: (0, _.jsx)('div', {
                className: 'listpicker-footer-button primary',
                onClick: c,
                children: o.LocaleUtil.locale('\u786E\u5B9A')
              })
            })
          ]
        })
      }
    },
    65229: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsx)('p', {
                children: "Don't use seeds-icons, cause that className often changes"
              }),
              (0, n.jsx)(a.Icon, { className: 'seeds-icons seeds-icon-signature', size: 100 })
            ]
          })
        })
      }
    },
    5927: function (f, i, e) {
      e.r(i)
      var h = e(17061),
        a = e.n(h),
        n = e(17156),
        l = e.n(n),
        t = e(38416),
        s = e.n(t),
        r = e(27424),
        o = e.n(r),
        _ = e(67294),
        u = e(49886),
        d = e(42103),
        m = e(85893)
      i.default = function () {
        var c = (0, _.useRef)(null),
          g = (0, _.useRef)(null),
          v = (0, _.useState)([
            {
              id: '1',
              thumb: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
              src: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
              status: 'fail'
            },
            {
              id: '2',
              thumb: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
              src: 'https://www.wilsoncomm.com.hk/image/cache/catalog/product-3566/6ca91b2b19a3d19b6cbe4f618a028e65-850x850.jpg'
            },
            s()(
              {
                id: '3',
                thumb: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
              },
              'thumb',
              'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
            ),
            {
              id: '4',
              thumb: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
              src: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
            }
          ]),
          C = o()(v, 2),
          O = C[0],
          p = C[1],
          M = (0, _.useState)([]),
          P = o()(M, 2),
          U = P[0],
          L = P[1]
        ;(0, _.useEffect)(function () {
          u.Bridge.ready(function () {
            console.log('\u52A0\u8F7D\u6865\u63A5')
          })
        }, [])
        function B() {
          return b.apply(this, arguments)
        }
        function b() {
          return (
            (b = l()(
              a()().mark(function T() {
                var j, y
                return a()().wrap(function (x) {
                  for (;;)
                    switch ((x.prev = x.next)) {
                      case 0:
                        if (((j = u.Image.validateListStatus(O)), j === !0)) {
                          x.next = 8
                          break
                        }
                        return u.Toast.show({ content: j }), (x.next = 5), c.current.uploadList()
                      case 5:
                        return (
                          (y = x.sent),
                          console.log('\u4E0A\u4F20\u7ED3\u679C\uFF1A', y),
                          x.abrupt('return')
                        )
                      case 8:
                      case 'end':
                        return x.stop()
                    }
                }, T)
              })
            )),
            b.apply(this, arguments)
          )
        }
        function A() {
          return (
            (g.current = null),
            new Promise(function (T) {
              setTimeout(function () {
                ;(g.current = ['watermark line1']), T(!0)
              }, 2e3)
            })
          )
        }
        return (0, m.jsxs)(u.Layout, {
          className: 'full',
          children: [
            (0, m.jsxs)(u.Layout.Main, {
              children: [
                (0, m.jsx)(u.Divider, { children: 'Default Image' }),
                (0, m.jsx)(u.Image, {
                  allowClear: !0,
                  allowChoose: !0,
                  uploadPosition: 'start',
                  sizeType: ['compressed'],
                  sourceType: ['camera', 'album'],
                  list: O,
                  count: 9,
                  onFileChange: (function () {
                    var T = l()(
                      a()().mark(function j(y) {
                        var E, x
                        return a()().wrap(function (I) {
                          for (;;)
                            switch ((I.prev = I.next)) {
                              case 0:
                                return (E = y.fileURL), (x = y.fileData), (I.next = 3), A()
                              case 3:
                                return I.abrupt('return', [
                                  {
                                    status: 'choose',
                                    localId: E,
                                    fileData: x,
                                    thumb: E,
                                    src: E,
                                    watermark: g.current,
                                    path: ''
                                  }
                                ])
                              case 4:
                              case 'end':
                                return I.stop()
                            }
                        }, j)
                      })
                    )
                    return function (j) {
                      return T.apply(this, arguments)
                    }
                  })(),
                  onChange: function (j) {
                    console.log('\u4FEE\u6539:', j), p(j)
                  },
                  onUpload: d.default
                }),
                (0, m.jsx)(u.Divider, { children: 'Preview Operate' }),
                (0, m.jsx)(u.Image, {
                  ref: c,
                  upload: (0, m.jsx)('div', {
                    style: { width: '100%', height: '100%', backgroundColor: 'ref' },
                    children: '1'
                  }),
                  allowChoose: !(O != null && O.length),
                  visibleCount: 1,
                  style: {
                    '--cell-width': '32px',
                    '--cell-height': '32px',
                    '--cell-radius': '6px',
                    '--count-font-size': '12px',
                    '--choose-icon-size': '12px'
                  },
                  preview: {
                    modal: 'page',
                    allowChoose: !0,
                    allowClear: !0,
                    mainProps: { style: { zIndex: 1e3 } },
                    onVisibleChange: function (j) {
                      j || u.HistoryUtil.back()
                    }
                  },
                  onPreview: function (j, y) {
                    return (
                      u.HistoryUtil.navigate('imagePreview=1', {
                        onBack: function () {
                          var x, D
                          ;(x = c.current) === null ||
                            x === void 0 ||
                            (D = x.setPreviewVisible) === null ||
                            D === void 0 ||
                            D.call(x, null)
                        }
                      }),
                      'browser'
                    )
                  },
                  sizeType: ['compressed'],
                  sourceType: ['camera', 'album'],
                  list: O,
                  count: 9,
                  onFileChange: (function () {
                    var T = l()(
                      a()().mark(function j(y) {
                        var E, x
                        return a()().wrap(function (I) {
                          for (;;)
                            switch ((I.prev = I.next)) {
                              case 0:
                                return (E = y.fileURL), (x = y.fileData), (I.next = 3), A()
                              case 3:
                                return I.abrupt('return', [
                                  {
                                    status: 'choose',
                                    localId: E,
                                    fileData: x,
                                    thumb: E,
                                    src: E,
                                    watermark: g.current,
                                    path: ''
                                  }
                                ])
                              case 4:
                              case 'end':
                                return I.stop()
                            }
                        }, j)
                      })
                    )
                    return function (j) {
                      return T.apply(this, arguments)
                    }
                  })(),
                  onChange: function (j) {
                    console.log('\u4FEE\u6539:', j), p(j)
                  },
                  onUpload: d.default
                })
              ]
            }),
            (0, m.jsx)(u.Layout.Footer, {
              children: (0, m.jsx)(u.Button, {
                className: 'flex primary',
                onClick: B,
                children: 'Sync Upload'
              })
            })
          ]
        })
      }
    },
    91646: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        ;(0, n.useEffect)(function () {
          l.Bridge.ready(function () {
            console.log('\u52A0\u8F7D\u6865\u63A5')
          })
        }, [])
        var s = (0, n.useRef)(null),
          r = (0, n.useState)([
            {
              id: '1',
              thumb: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
              src: 'https://player.alicdn.com/video/aliyunmedia.mp4',
              status: 'success'
            },
            {
              id: '2',
              thumb: 'https://img.zcool.cn/community/01a9a65dfad975a8012165189a6476.jpg',
              src: 'https://player.alicdn.com/video/aliyunmedia.mp4',
              status: 'fail'
            }
          ]),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        return (0, t.jsx)('div', {
          id: 'root',
          className: 'position-relative',
          style: { height: '300px' },
          children: (0, t.jsx)(l.Image, { ref: s, type: 'video', list: _ })
        })
      }
    },
    80398: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)([]),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        ;(0, n.useEffect)(function () {
          setTimeout(function () {
            var m = u(['A', 'B', 'C'])
            _(m)
          }, 1e3)
        }, [])
        function u(m) {
          for (var c = [], g = 0; g < m.length; g++)
            for (var v = 0; v < 15; v++)
              c.push({ letter: m[g], name: ''.concat(m[g], '\u59D3\u4EBA\u540D') })
          return c
        }
        console.log('list:', o)
        function d() {
          var m = {}
          return o.map(function (c, g) {
            return m[c.letter]
              ? (0, t.jsx)('li', { children: c.name }, g)
              : ((m[c.letter] = !0),
                (0, t.jsxs)(
                  n.Fragment,
                  {
                    children: [
                      (0, t.jsx)(l.IndexBar.Anchor, {
                        name: c.letter,
                        children: (0, t.jsx)('li', { children: c.letter })
                      }),
                      (0, t.jsx)('li', { children: c.name })
                    ]
                  },
                  g
                ))
          })
        }
        return (0, t.jsx)(l.Layout, {
          className: 'full',
          children: (0, t.jsx)(l.IndexBar, {
            children: (0, t.jsx)(l.Layout.Main, {
              onBottomRefresh: function () {
                return new Promise(function (c) {
                  setTimeout(function () {
                    var g = u([
                      'A',
                      'B',
                      'C',
                      'D',
                      'E',
                      'F',
                      'G',
                      'H',
                      'I',
                      'J',
                      'K',
                      'L',
                      'M',
                      'N',
                      'O',
                      'P',
                      'Q',
                      'R',
                      'S',
                      'T',
                      'U',
                      'V',
                      'W',
                      'X',
                      'Y',
                      'Z'
                    ])
                    _(g), c(!0)
                  }, 2e3)
                })
              },
              children: (0, t.jsx)('ul', { children: d() })
            })
          })
        })
      }
    },
    31641: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(''),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsx)(l.Layout, {
          className: 'full',
          children: (0, t.jsxs)(l.Layout.Main, {
            children: [
              (0, t.jsx)(l.Divider, { children: 'Common' }),
              (0, t.jsx)(l.Input.AutoFit, {
                placeholder: 'AutoFit',
                inputProps: { style: { maxHeight: '500px' } },
                style: { backgroundColor: '#f8f8f8' },
                value: o,
                onChange: _,
                allowClear: !0,
                onBlur: function () {
                  console.log('\u89E6\u53D1blur')
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Formatter' }),
              (0, t.jsx)(l.Input.AutoFit, {
                placeholder: 'AutoFit',
                inputProps: { style: { maxHeight: '500px' } },
                formatter: function (d) {
                  return '$' + d
                },
                style: { backgroundColor: '#f8f8f8' },
                value: o,
                onChange: _,
                allowClear: !0,
                onBlur: function () {
                  console.log('\u89E6\u53D1blur')
                }
              })
            ]
          })
        })
      }
    },
    59040: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useRef)(null),
          r = (0, n.useState)(1),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        return (
          (0, n.useEffect)(function () {
            console.log(s.current)
          }, []),
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(l.Input.Number, {
              ref: s,
              placeholder: 'Input',
              value: _,
              precision: 0,
              maxLength: 18,
              trim: !0,
              allowClear: !0,
              clear: function (m) {
                var c = m.clearable,
                  g = m.triggerClear
                return c
                  ? (0, t.jsx)(l.Input.IconClear, { onClick: g })
                  : (0, t.jsx)(l.Input.IconRightArrow, {})
              },
              formatter: function (m) {
                return '$' + l.MathUtil.thousands(m)
              },
              onChange: function (m) {
                console.log('\u5F97\u5230\u7684\u503C:', m), u(m)
              }
            })
          })
        )
      }
    },
    59036: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)('2.10'),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(l.Input.NumberBox, {
              className: 'xl',
              placeholder: 'Size xl',
              value: o,
              onChange: _,
              precision: 2,
              maxLength: 8,
              min: 0.1,
              trim: !0,
              allowClear: !0
            }),
            (0, t.jsx)(l.Input.NumberBox, {
              className: 'l',
              placeholder: 'Size l',
              value: o,
              onChange: _,
              precision: 2,
              maxLength: 8,
              min: 0.1,
              trim: !0,
              allowClear: !0
            }),
            (0, t.jsx)(l.Input.NumberBox, {
              placeholder: 'Size m',
              value: o,
              onChange: _,
              precision: 2,
              maxLength: 8,
              min: 0.1,
              trim: !0,
              allowClear: !0,
              formatter: function (d) {
                return '$' + l.MathUtil.thousands(Number(d).toFixed(2))
              }
            }),
            (0, t.jsx)(l.Input.NumberBox, {
              className: 's',
              placeholder: 'Size s',
              value: o,
              onChange: _,
              precision: 2,
              maxLength: 8,
              min: 0.1,
              trim: !0
            })
          ]
        })
      }
    },
    725: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(''),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.Input.Password, {
            placeholder: 'Select',
            value: o,
            allowClear: !0,
            onChange: function (d) {
              console.log(d), _(d)
            }
          })
        })
      }
    },
    17855: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)('abcdefgAbcd$'),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.Input.PasswordStrength, {
            value: o,
            onChange: function (d) {
              console.log(d), _(d)
            }
          })
        })
      }
    },
    72197: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(''),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.Input.Range, {
            style: { marginTop: '50px' },
            value: o,
            onChange: function (d) {
              console.log(d), _(d)
            }
          })
        })
      }
    },
    87997: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(3),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsx)(l.Layout, {
          className: 'full',
          children: (0, t.jsxs)(l.Layout.Main, {
            children: [
              (0, t.jsxs)(l.Card, {
                children: [
                  (0, t.jsx)(l.Divider, { children: 'Common' }),
                  (0, t.jsx)(l.Input.Rate, {
                    style: { margin: '0 12px' },
                    value: o,
                    onChange: function (d) {
                      console.log(d), _(d)
                    }
                  })
                ]
              }),
              (0, t.jsxs)(l.Card, {
                children: [
                  (0, t.jsx)(l.Divider, { children: 'ReadyOnly' }),
                  (0, t.jsx)(l.Input.Rate, { style: { margin: '0 12px' }, value: o, readOnly: !0 })
                ]
              }),
              (0, t.jsxs)(l.Card, {
                children: [
                  (0, t.jsx)(l.Divider, { children: 'Disabled' }),
                  (0, t.jsx)(l.Input.Rate, { style: { margin: '0 12px' }, value: o, disabled: !0 })
                ]
              }),
              (0, t.jsxs)(l.Card, {
                children: [
                  (0, t.jsx)(l.Divider, { children: 'Step' }),
                  (0, t.jsx)(l.Input.Rate, {
                    style: { margin: '0 12px' },
                    step: 0.1,
                    value: o,
                    onChange: _
                  })
                ]
              }),
              (0, t.jsxs)(l.Card, {
                children: [
                  (0, t.jsx)(l.Divider, { children: 'Min and Max' }),
                  (0, t.jsx)(l.Input.Rate, {
                    style: { margin: '0 12px' },
                    min: 1,
                    max: 8,
                    value: o,
                    onChange: _
                  })
                ]
              }),
              (0, t.jsxs)(l.Card, {
                children: [
                  (0, t.jsx)(l.Divider, { children: 'Icon' }),
                  (0, t.jsx)(l.Input.Rate, {
                    style: { margin: '0 12px' },
                    icon: 'seeds-icon-circle-question',
                    value: o,
                    onChange: _
                  })
                ]
              })
            ]
          })
        })
      }
    },
    27848: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(96486),
        t = e.n(l),
        s = e(49886),
        r = e(85893)
      i.default = function () {
        var o = (0, n.useState)('keyword'),
          _ = a()(o, 2),
          u = _[0],
          d = _[1]
        return (0, r.jsx)(s.Layout, {
          className: 'full',
          children: (0, r.jsxs)(s.Layout.Main, {
            children: [
              (0, r.jsx)(s.Input.Search, {
                trim: !0,
                precision: 2,
                placeholder: 'Search',
                value: u,
                allowClear: !0,
                onSearch: function (c) {
                  console.log(c), d(c)
                }
              }),
              'Your search keyword: ',
              u
            ]
          })
        })
      }
    },
    34867: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(''),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.Input.Tel, {
            value: o,
            onChange: function (d) {
              console.log(d), _(d)
            }
          })
        })
      }
    },
    8711: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(96486),
        t = e.n(l),
        s = e(49886),
        r = e(85893)
      i.default = function () {
        var o = (0, n.useRef)(null),
          _ = (0, n.useState)(
            '\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u4E2D\u534E\u4EBA\u6C11\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u4E2D\u534E\u4EBA\u6C11'
          ),
          u = a()(_, 2),
          d = u[0],
          m = u[1]
        return (0, r.jsx)(s.Layout, {
          className: 'full',
          children: (0, r.jsxs)(s.Layout.Main, {
            children: [
              (0, r.jsx)(s.Divider, { children: 'Common' }),
              (0, r.jsx)(s.Input.Text, {
                trim: !0,
                ref: o,
                precision: 2,
                value: d,
                rightIcon: function (g) {
                  var v = g.value
                  return v ? null : (0, r.jsx)(s.Input.IconRightArrow, {})
                },
                allowClear: !0,
                clear: function (g) {
                  var v = g.triggerClear
                  return t().isEmpty(d)
                    ? (0, r.jsx)(s.Input.IconRightArrow, {})
                    : (0, r.jsx)(s.Input.IconClear, { onClick: v })
                },
                onChange: function (g) {
                  console.log(g), m(g)
                }
              }),
              (0, r.jsx)(s.Divider, { children: 'Formatter' }),
              (0, r.jsx)(s.Input.Text, {
                value: d,
                allowClear: !0,
                onChange: function (g) {
                  console.log(g), m(g)
                },
                formatter: function (g) {
                  return '$' + g
                }
              })
            ]
          })
        })
      }
    },
    3207: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(''),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.Input.Textarea, {
            value: o,
            allowClear: !0,
            inputProps: { style: { padding: '12px' } },
            formatter: function (d) {
              return '$' + d
            },
            style: { backgroundColor: '#f8f8f8' },
            onChange: function (d) {
              console.log(d), _(d)
            }
          })
        })
      }
    },
    3486: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        var l = (0, h.useRef)(null)
        return (
          (0, h.useEffect)(function () {
            console.log(l.current)
          }, []),
          (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)(a.Input.Url, {
              ref: l,
              readOnly: !0,
              placeholder: 'Input',
              value: 'www.baidu.com/',
              rightIcon: (0, n.jsx)('div', { children: 'click left area will copy link' })
            })
          })
        )
      }
    },
    37031: function (f, i, e) {
      e.r(i)
      for (var h = e(67294), a = e(49886), n = e(85893), l = [], t = 0; t < 100; t++)
        l.push({ id: t, name: '\u6D4B\u8BD5\u6570\u636E' + t })
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          safeArea: !0,
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsx)(a.Divider, { children: 'Text Button' }),
              (0, n.jsx)(a.Layout.Footer, {
                onChange: function (r) {
                  console.log(r)
                },
                buttonsType: 'text',
                buttons: [
                  { children: [{ id: 'option1', name: 'Option 1' }] },
                  { id: 'ok', name: '\u786E\u5B9A', primary: !0 },
                  { id: 'cancel', name: '\u53D6\u6D88' }
                ]
              }),
              (0, n.jsx)(a.Divider, { children: 'Text Button disabled' }),
              (0, n.jsx)(a.Layout.Footer, {
                onChange: function (r) {
                  console.log(r)
                },
                buttonsType: 'text',
                buttons: [
                  { children: [{ disabled: !0, id: 'option1', name: 'Option 1' }] },
                  { disabled: !0, children: [{ disabled: !0, id: 'option1', name: 'Option 1' }] },
                  { disabled: !0, id: 'ok', name: '\u786E\u5B9A', primary: !0 },
                  { disabled: !0, id: 'cancel', name: '\u53D6\u6D88' }
                ]
              }),
              (0, n.jsx)(a.Divider, { children: 'Button' }),
              (0, n.jsx)(a.Layout.Footer, {
                onChange: function (r) {
                  console.log(r)
                },
                buttons: [
                  { name: 'More', children: [{ id: 'option1', name: 'Option 1' }] },
                  { id: 'cancel', name: 'Cancel' },
                  { id: 'ok', name: 'Ok', primary: !0 }
                ]
              }),
              (0, n.jsx)(a.Divider, { children: 'Button disabled' }),
              (0, n.jsx)(a.Layout.Footer, {
                onChange: function (r) {
                  console.log(r)
                },
                buttons: [
                  { name: 'More', children: [{ disabled: !0, id: 'option1', name: 'Option 1' }] },
                  { name: 'More', disabled: !0, children: [{ id: 'option1', name: 'Option 1' }] },
                  { disabled: !0, id: 'cancel', name: 'Cancel' },
                  { disabled: !0, id: 'ok', name: 'Ok', primary: !0 }
                ]
              })
            ]
          })
        })
      }
    },
    24923: function (f, i, e) {
      e.r(i)
      for (var h = e(67294), a = e(73935), n = e(49886), l = e(85893), t = [], s = 0; s < 100; s++)
        t.push({ id: s, name: '\u6D4B\u8BD5\u6570\u636E' + s })
      i.default = function () {
        var r = n.Layout.Header,
          o = n.Layout.Footer,
          _ = n.Layout.Aside,
          u = n.Layout.Main
        ;(0, h.useEffect)(function () {
          document.getElementById('root').parentElement.removeChild(document.getElementById('root'))
        }, [])
        function d() {
          return (
            console.log('\u5E95\u90E8\u52A0\u8F7D'),
            new Promise(function (m) {
              setTimeout(function () {
                m(!0)
              }, 5e3)
            })
          )
        }
        return (0, a.createPortal)(
          (0, l.jsxs)(n.Layout, {
            className: 'full',
            children: [
              (0, l.jsx)(r, {
                style: { height: '44px', backgroundColor: '#7dbcea' },
                children: 'Header'
              }),
              (0, l.jsxs)(n.Layout, {
                children: [
                  (0, l.jsx)(_, {
                    style: { width: '80px', backgroundColor: '#3ba0e9' },
                    children: 'Aside'
                  }),
                  (0, l.jsx)(u, {
                    safeArea: !0,
                    style: { backgroundColor: 'rgba(16, 142, 233, 1)' },
                    onBottomRefresh: d,
                    children: t.map(function (m, c) {
                      return (0, l.jsx)('div', { children: m.name }, c)
                    })
                  })
                ]
              }),
              (0, l.jsx)(o, {
                safeArea: !0,
                style: { height: '44px', backgroundColor: '#7dbcea' },
                children: 'Footer'
              })
            ]
          }),
          document.body
        )
      }
    },
    76545: function (f, i, e) {
      e.r(i)
      for (var h = e(67294), a = e(49886), n = e(2261), l = e(85893), t = [], s = 0; s < 100; s++)
        t.push({ id: s, name: '\u6D4B\u8BD5\u6570\u636E' + s })
      i.default = function () {
        function r() {
          return (
            console.log('onTopRefresh'),
            new Promise(function (_) {
              setTimeout(function () {
                _('\u81EA\u5B9A\u4E49\u63D0\u793A')
              }, 1e3)
            })
          )
        }
        function o() {
          return (
            console.log('\u5E95\u90E8\u52A0\u8F7D'),
            new Promise(function (_) {
              setTimeout(function () {
                _(!0)
              }, 1e3)
            })
          )
        }
        return (0, l.jsxs)(a.Layout, {
          safeArea: !0,
          className: 'full',
          children: [
            (0, l.jsx)(a.Layout.Header, {
              style: { height: 50, backgroundColor: 'white' },
              children: 'Header'
            }),
            (0, l.jsxs)(a.Layout.Main, {
              onTopRefresh: r,
              onBottomRefresh: o,
              touchStopPropagation: !1,
              children: [
                (0, l.jsxs)(n.Swiper, {
                  spaceBetween: 50,
                  style: { height: '200px' },
                  onSlideChange: function () {
                    return console.log('slide change')
                  },
                  onSwiper: function (u) {
                    return console.log(u)
                  },
                  children: [
                    (0, l.jsx)(n.SwiperSlide, { children: 'Slide 1' }),
                    (0, l.jsx)(n.SwiperSlide, { children: 'Slide 2' }),
                    (0, l.jsx)(n.SwiperSlide, { children: 'Slide 3' }),
                    (0, l.jsx)(n.SwiperSlide, { children: 'Slide 4' })
                  ]
                }),
                t.map(function (_, u) {
                  return (0, l.jsx)('div', { style: { height: 40 }, children: _.name }, u)
                }),
                (0, l.jsx)(a.List.InfiniteScroll, {})
              ]
            }),
            (0, l.jsx)(a.Layout.Footer, {
              onChange: function (u) {
                console.log(u)
              },
              buttons: [{ id: 'ok', name: 'Ok', primary: !0 }]
            })
          ]
        })
      }
    },
    94796: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(18874),
        s = e(85893)
      i.default = function () {
        var r = (0, n.useRef)(null),
          o = (0, n.useState)(''),
          _ = a()(o, 2),
          u = _[0],
          d = _[1],
          m = (0, n.useState)(t.default),
          c = a()(m, 2),
          g = c[0],
          v = c[1],
          C = (0, n.useState)(null),
          O = a()(C, 2),
          p = O[0],
          M = O[1]
        return (
          console.log(r),
          (0, s.jsxs)(l.Layout, {
            className: 'full',
            children: [
              (0, s.jsx)(l.Layout.Header, { className: 'text-center', children: 'List.Combo' }),
              (0, s.jsxs)(l.Layout.Main, {
                children: [
                  (0, s.jsxs)(l.Card, {
                    children: [
                      (0, s.jsx)(l.Divider, { children: 'Default Select' }),
                      (0, s.jsx)(l.List.Combo, {
                        style: { margin: '0 12px' },
                        placeholder: 'Default Select',
                        title: 'Default Select',
                        value: p,
                        onChange: M,
                        loadList: function () {
                          return g
                        }
                      })
                    ]
                  }),
                  (0, s.jsxs)(l.Card, {
                    children: [
                      (0, s.jsx)(l.Divider, { children: 'Single Select' }),
                      (0, s.jsx)(l.List.Combo, {
                        style: { margin: '0 12px' },
                        placeholder: 'Single Select',
                        allowClear: !0,
                        multiple: !1,
                        value: p,
                        onChange: M,
                        loadList: function () {
                          return g
                        },
                        checkable: !0
                      })
                    ]
                  }),
                  (0, s.jsxs)(l.Card, {
                    children: [
                      (0, s.jsx)(l.Divider, { children: 'Single Select, allow modal clear' }),
                      (0, s.jsx)(l.List.Combo, {
                        style: { margin: '0 12px' },
                        placeholder: 'Single Select',
                        allowClear: !0,
                        value: p,
                        onChange: M,
                        loadList: function () {
                          return g
                        },
                        checkable: !0
                      })
                    ]
                  }),
                  (0, s.jsxs)(l.Card, {
                    children: [
                      (0, s.jsx)(l.Divider, { children: 'Multiple Select' }),
                      (0, s.jsx)(l.List.Combo, {
                        style: { margin: '0 12px' },
                        placeholder: 'Multiple Select',
                        multiple: !0,
                        allowClear: !0,
                        value: p,
                        onChange: M,
                        loadList: function () {
                          return g
                        },
                        checkable: !0
                      })
                    ]
                  }),
                  (0, s.jsxs)(l.Card, {
                    children: [
                      (0, s.jsx)(l.Divider, { children: 'Multiple Select tags' }),
                      (0, s.jsx)(l.List.Combo, {
                        style: { margin: '0 12px' },
                        placeholder: 'Multiple Select',
                        multiple: 'tags',
                        allowClear: !0,
                        value: p,
                        onChange: M,
                        loadList: function () {
                          return g
                        },
                        checkable: !0
                      })
                    ]
                  }),
                  (0, s.jsxs)(l.Card, {
                    children: [
                      (0, s.jsx)(l.Divider, { children: 'Checkbox' }),
                      (0, s.jsx)(l.List.Combo, {
                        style: { margin: '0 12px' },
                        placeholder: 'Single Select',
                        allowClear: !0,
                        multiple: !1,
                        value: p,
                        onChange: M,
                        checkbox: function (U) {
                          var L = U.checked
                          return (0, s.jsx)(l.Checkbox, { checked: L })
                        },
                        checkboxPosition: 'left',
                        loadList: function () {
                          return g
                        },
                        checkable: !0
                      })
                    ]
                  }),
                  (0, s.jsxs)(l.Card, {
                    children: [
                      (0, s.jsx)(l.Divider, { children: 'Layout' }),
                      (0, s.jsx)(l.List.Combo, {
                        style: { margin: '0 12px' },
                        placeholder: 'Layout',
                        multiple: !1,
                        modalProps: {
                          title: 'Select',
                          header: function () {
                            return (0, s.jsx)('p', { children: 'Header' })
                          },
                          footer: function () {
                            return (0, s.jsx)('p', { children: 'Footer' })
                          }
                        },
                        allowClear: !0,
                        value: p,
                        list: g,
                        onChange: M,
                        loadList: function () {
                          return g
                        },
                        checkable: !0
                      })
                    ]
                  }),
                  (0, s.jsxs)(l.Card, {
                    children: [
                      (0, s.jsx)(l.Divider, { children: 'onBeforeChange' }),
                      (0, s.jsx)(l.List.Combo, {
                        style: { margin: '0 12px' },
                        placeholder: 'onBeforeChange',
                        allowClear: !0,
                        multiple: !1,
                        value: p,
                        onBeforeChecked: function (U) {
                          return (
                            console.log('onBeforeChange', U),
                            new Promise(function (L) {
                              l.Modal.confirm({
                                title: '\u4F60\u786E\u5B9A\u8981\u4FEE\u6539\u5417\uFF1F',
                                content: '\u4F60\u786E\u5B9A\u8981\u4FEE\u6539\u5417',
                                onOk: function () {
                                  L(!0)
                                },
                                onCancel: function () {
                                  L(!1)
                                }
                              })
                            })
                          )
                        },
                        onBeforeChange: function (U) {
                          return (
                            console.log('onBeforeChange', U),
                            new Promise(function (L) {
                              l.Modal.confirm({
                                title: '\u4F60\u786E\u5B9A\u8981\u4FEE\u6539\u5417\uFF1F',
                                content: '\u4F60\u786E\u5B9A\u8981\u4FEE\u6539\u5417',
                                onOk: function () {
                                  L(!0)
                                },
                                onCancel: function () {
                                  L(!1)
                                }
                              })
                            })
                          )
                        },
                        onChange: M,
                        loadList: function () {
                          return g
                        },
                        checkable: !0
                      })
                    ]
                  }),
                  (0, s.jsxs)(l.Card, {
                    children: [
                      (0, s.jsx)(l.Divider, { children: 'Search' }),
                      (0, s.jsx)(l.List.Combo, {
                        style: { margin: '0 12px' },
                        placeholder: 'Search',
                        multiple: !1,
                        modalProps: {
                          title: 'Select',
                          header: function () {
                            return (0, s.jsx)(l.ToolBar, {
                              invert: !0,
                              children: (0, s.jsx)(l.ToolBar.Search, {
                                value: u,
                                onSearch: function (L) {
                                  d(L), v(l.List.searchList(t.default, L))
                                }
                              })
                            })
                          }
                        },
                        allowClear: !0,
                        value: p,
                        onChange: M,
                        loadList: function () {
                          return g
                        },
                        checkable: !0
                      })
                    ]
                  })
                ]
              })
            ]
          })
        )
      }
    },
    81419: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(74987),
        s = e(64586),
        r = e(85893)
      i.default = function () {
        var o = (0, n.useRef)(null),
          _ = (0, n.useState)(null),
          u = a()(_, 2),
          d = u[0],
          m = u[1]
        return (
          console.log(o.current),
          (0, r.jsx)(l.Layout, {
            className: 'full',
            children: (0, r.jsx)(l.Layout.Main, {
              children: (0, r.jsx)(l.List, {
                ref: o,
                checkable: !0,
                checkboxPosition: 'right',
                checkboxProps: { icon: 'tick' },
                allowClear: !0,
                multiple: !0,
                value: d,
                list: s.default,
                onChange: function (g) {
                  console.log('onChange:', g), m(g)
                },
                layout: 'vertical',
                wrapper: !0
              })
            })
          })
        )
      }
    },
    23928: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(83904),
        s = e(85893)
      i.default = function () {
        var r = (0, n.useRef)(null),
          o = (0, n.useState)(null),
          _ = a()(o, 2),
          u = _[0],
          d = _[1]
        return (
          console.log(r.current),
          (0, s.jsx)(l.Layout, {
            className: 'full',
            children: (0, s.jsx)(l.Layout.Main, {
              children: (0, s.jsx)(l.List, {
                ref: r,
                checkable: !0,
                checkboxPosition: 'right',
                checkboxProps: { icon: 'tick' },
                allowClear: !0,
                multiple: !0,
                value: u,
                list: t.default,
                onChange: function (c) {
                  console.log('onChange:', c), d(c)
                },
                layout: 'vertical'
              })
            })
          })
        )
      }
    },
    58740: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(64586),
        s = e(71415),
        r = e.n(s),
        o = e(85893)
      new (r())(),
        (i.default = function () {
          var _ = (0, n.useRef)(null),
            u = (0, n.useState)(null),
            d = a()(u, 2),
            m = d[0],
            c = d[1]
          return (
            console.log(_.current),
            (0, o.jsxs)(l.Layout, {
              className: 'full',
              children: [
                (0, o.jsx)(l.Layout.Header, {
                  className: 'text-center',
                  children: 'Layout vertical'
                }),
                (0, o.jsx)(l.List.Main, {
                  ref: _,
                  layout: 'vertical',
                  wrapper: !0,
                  value: m,
                  reload: !0,
                  loadList: function () {
                    return t.default
                  },
                  onChange: function (v) {
                    console.log(v), c(v)
                  }
                }),
                (0, o.jsx)(l.Layout.Header, {
                  className: 'text-center',
                  children: 'Layout horizontal'
                }),
                (0, o.jsx)(l.List.Main, {
                  ref: _,
                  prepend: function (v) {
                    var C = v.list,
                      O = v.value,
                      p = v.onChange,
                      M = v.pagination
                    return (0, o.jsx)('div', { children: 'Custom prepend' })
                  },
                  layout: 'horizontal',
                  wrapper: !0,
                  value: m,
                  reload: !0,
                  loadList: function () {
                    return t.default
                  },
                  onChange: function (v) {
                    console.log(v), c(v)
                  }
                })
              ]
            })
          )
        })
    },
    72701: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(18874),
        s = e(85893)
      i.default = function () {
        var r = (0, n.useState)(null),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        return (0, s.jsxs)(l.Layout, {
          className: 'full',
          children: [
            (0, s.jsx)(l.Layout.Header, { className: 'text-center', children: 'List.Modal' }),
            (0, s.jsx)(l.Layout.Main, {
              children: (0, s.jsx)(l.List.Modal, {
                visible: !0,
                pagination: !0,
                value: _,
                loadList: function () {
                  return t.default
                },
                onChange: function (m) {
                  console.log(m), u(m)
                }
              })
            })
          ]
        })
      }
    },
    22159: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(36907),
        s = e(85893)
      i.default = function () {
        var r = (0, n.useState)(!0),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        return (0, s.jsxs)(l.Layout, {
          className: 'full',
          children: [
            (0, s.jsx)(l.Layout.Header, { className: 'text-center', children: 'Loading' }),
            (0, s.jsxs)(l.Layout.Main, {
              className: 'bg-white',
              children: [
                (0, s.jsx)(t.default.SpinFade, {}),
                (0, s.jsx)(t.default.Ouroboros, {}),
                (0, s.jsx)(t.default.BallWave, {}),
                (0, s.jsx)(t.default, {
                  icon: (0, s.jsx)(t.default.Ouroboros, {}),
                  content: '\u81EA\u5B9A\u4E49\u5185\u5BB9'
                })
              ]
            })
          ]
        })
      }
    },
    38669: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        function l() {
          a.Loading.show(),
            setTimeout(function () {
              a.Loading.hide()
            }, 500)
        }
        return (0, n.jsxs)(a.Layout, {
          className: 'full',
          children: [
            (0, n.jsx)(a.Layout.Header, { className: 'text-center', children: 'Loading.hide' }),
            (0, n.jsx)(a.Layout.Main, {
              className: 'bg-white',
              children: (0, n.jsx)('div', {
                className: 'demo-title',
                onClick: l,
                children: 'Loading visible toggle'
              })
            })
          ]
        })
      }
    },
    95731: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(2463),
        l = e(85893)
      i.default = function () {
        function t() {
          var s = n.default.show({
            style: { backgroundColor: 'blue' },
            maskProps: { style: { backgroundColor: 'red' } },
            className: 'abc',
            content: '\u81EA\u5B9A\u4E49\u52A0\u8F7D'
          })
          console.log(s),
            setTimeout(function () {
              n.default.show()
            }, 3e3),
            setTimeout(function () {
              n.default.hide()
            }, 6e3)
        }
        return (0, l.jsxs)(a.Layout, {
          className: 'full',
          children: [
            (0, l.jsx)(a.Layout.Header, { className: 'text-center', children: 'Loading.show' }),
            (0, l.jsx)(a.Layout.Main, {
              className: 'bg-white',
              children: (0, l.jsx)('div', {
                className: 'demo-title',
                onClick: t,
                children: 'Loading visible toggle'
              })
            })
          ]
        })
      }
    },
    33522: function (f, i, e) {
      e.r(i),
        e.d(i, {
          default: function () {
            return c
          }
        })
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(71415),
        s = e.n(t),
        r = e(57374),
        o = e(62872),
        _ = e(97046),
        u = e(85893)
      function d(g) {
        var v = g.onOk,
          C = g.onClear
        return (0, u.jsxs)(o.default.Footer, {
          className: 'mappage-footer',
          children: [
            (0, u.jsx)(_.default, {
              className: 'mappage-footer-ok',
              onClick: v,
              children: r.default.locale('\u786E\u5B9A', 'SeedsUI_ok')
            }),
            (0, u.jsx)(_.default, {
              className: 'mappage-footer-clear',
              onClick: C,
              children: r.default.locale('\u6E05\u7A7A\u6807\u6CE8', 'SeedsUI_empty_marker')
            })
          ]
        })
      }
      var m = d,
        c = function () {
          var g = (0, n.useRef)(null),
            v = (0, n.useState)({
              latitude: 31.990374883871525,
              longitude: 118.73769931504451,
              type: 'gcj02',
              address: '\u5357\u4EAC\u70FD\u706B\u79D1\u6280'
            }),
            C = a()(v, 2),
            O = C[0],
            p = C[1]
          return (
            (0, n.useEffect)(function () {
              new (s())(),
                l.Bridge.ready(function () {
                  console.log('\u52A0\u8F7D\u6865\u63A5')
                })
            }, []),
            (0, u.jsxs)(u.Fragment, {
              children: [
                (0, u.jsx)(l.Location.Combo, {
                  type: 'wgs84',
                  config: { key: '7b6e260fc45a67b31a265e22575f1c5e', type: 'bmap' },
                  modalProps: {
                    safeArea: !0,
                    footer: function (P) {
                      var U = P.visible,
                        L = P.triggerOk
                      return U === 'choose'
                        ? (0, u.jsx)(m, {
                            onOk: function () {
                              L()
                            },
                            onClear: function () {
                              L(null)
                            }
                          })
                        : null
                    },
                    mainProps: { zoom: 16 }
                  },
                  allowClear: !0,
                  autoFit: !0,
                  clickAction: 'choose',
                  previewVisible: !0,
                  chooseVisible: !0,
                  ref: g,
                  value: O,
                  onChange: function (P) {
                    console.log('\u4FEE\u6539:', P), p(P)
                  },
                  onVisibleChange: function (P) {
                    console.log('\u663E\u9690:', P)
                  },
                  onLocationStatusChange: function (P) {
                    console.log('\u5B9A\u4F4D\u72B6\u6001:', P)
                  }
                }),
                (0, u.jsx)(l.Input.Text, { value: 'aaaa' })
              ]
            })
          )
        }
    },
    82594: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        l.Bridge.debug = !0
        var s = (0, n.useRef)(null),
          r = (0, n.useState)(null),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        return (
          (0, n.useEffect)(function () {
            setTimeout(function () {
              u({
                address:
                  '\u6C5F\u82CF\u7701\u5357\u4EAC\u5E02\u96E8\u82B1\u53F0\u533A\u7389\u5170\u8DEF98\u53F7',
                value:
                  '\u6C5F\u82CF\u7701\u5357\u4EAC\u5E02\u96E8\u82B1\u53F0\u533A\u7389\u5170\u8DEF98\u53F7',
                longitude: 118.7979252979065,
                latitude: 31.968667296242337
              })
            }, 5e3)
          }, []),
          (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)('div', { children: '1' }),
              (0, t.jsx)(l.Location.Main, {
                ref: s,
                ak: '',
                style: { height: '400px' },
                type: 'choose',
                autoLocation: !1,
                value: _,
                onChange: function (m) {
                  console.log('\u4FEE\u6539:', m), u(m)
                }
              })
            ]
          })
        )
      }
    },
    46982: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(82480),
        s = e(85893),
        r = l.Map.APILoader,
        o = l.Map.MapChoose,
        _ = l.Map.coordsToWgs84
      i.default = function () {
        var u = (0, n.useRef)(null),
          d = (0, n.useState)({
            latitude: 31.990374883871525,
            longitude: 118.73769931504451,
            type: 'gcj02',
            address: '\u5357\u4EAC\u70FD\u706B\u79D1\u6280'
          }),
          m = a()(d, 2),
          c = m[0],
          g = m[1]
        return (0, s.jsx)(l.Layout, {
          className: 'full',
          children: (0, s.jsx)(l.Layout.Main, {
            children: (0, s.jsx)(r, {
              loading: (0, s.jsx)(l.Loading, { content: 'Loading...' }),
              config: {
                key: '7b6e260fc45a67b31a265e22575f1c5e',
                type: 'bmap',
                markerIcons: {
                  centerMarkerIcon: {
                    iconUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-custom-shop.png',
                    iconRetinaUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-custom-shop.png',
                    shadowUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png',
                    shadowRetinaUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png'
                  },
                  markerIcon: {
                    iconUrl: '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-icon.png',
                    iconRetinaUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-icon-2x.png',
                    shadowUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png',
                    shadowRetinaUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png'
                  }
                }
              },
              onSuccess: function () {
                console.log('\u5730\u56FE\u52A0\u8F7D\u6210\u529F')
              },
              children: (0, s.jsx)('div', {
                style: { position: 'relative', width: '100%', height: '500px' },
                children: (0, s.jsx)(o, {
                  ref: u,
                  zoom: 16,
                  value: _(c),
                  onChange: function (C) {
                    console.log('newValue:', C), g(C)
                  },
                  onMarkerClick: function (C) {
                    console.log('\u70B9\u51FBmarker:', C), console.log(u.current)
                    var O = window.L.icon({
                      active: !0,
                      iconUrl:
                        'https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-icon.bak.png',
                      iconRetinaUrl:
                        'https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-icon.bak.png',
                      shadowUrl:
                        'https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-shadow.png',
                      shadowRetinaUrl:
                        'https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-shadow.png',
                      shadowSize: [33, 33],
                      iconSize: [20, 33],
                      iconAnchor: [10, 16]
                    })
                    C.setIcon(O, { multiple: !1 })
                  }
                })
              })
            })
          })
        })
      }
    },
    27151: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(28273),
        l = e(85893),
        t = a.Map.APILoader,
        s = a.Map.MapMarkers,
        r = a.Map.LocationControl,
        o = a.Map.Circles,
        _ = a.Map.coordsToWgs84,
        u = _(
          (0, n.default)({
            center: { latitude: 39.907783490367706, longitude: 116.39120737493609 },
            radius: 1e3,
            count: 101
          })
        ),
        d = _([
          {
            address: '\u56FD\u5BB6\u5E7F\u544A\u4EA7\u4E1A\u56ED\u5317\u533A',
            latitude: 31.981827992209773,
            longitude: 118.73498038509915,
            type: 'gcj02'
          },
          {
            latitude: 31.990433909567244,
            longitude: 118.7376115295504,
            type: 'gcj02',
            address: '\u5357\u4EAC\u70FD\u706B\u79D1\u6280',
            icon: {
              html: '<div style="width:100px;background-color:red;">\u5357\u4EAC\u70FD\u706B\u79D1\u6280</div>'
            }
          },
          { latitude: 31.98768, longitude: 118.751785, type: 'gcj02', address: '\u5C0F\u884C' },
          {
            address: '\u56FD\u5BB6\u5E7F\u544A\u4EA7\u4E1A\u56ED\u5317\u533A',
            latitude: 31.981827992209773,
            longitude: 118.73498038509915,
            type: 'gcj02'
          }
        ])
      i.default = function () {
        var m = (0, h.useRef)(m)
        return (0, l.jsx)(a.Layout, {
          className: 'full',
          children: (0, l.jsx)(a.Layout.Main, {
            children: (0, l.jsx)(t, {
              config: {
                key: '7b6e260fc45a67b31a265e22575f1c5e',
                type: 'bmap',
                markerIcons: {
                  centerMarkerIcon: {
                    iconUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-custom-shop.png',
                    iconRetinaUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-custom-shop.png',
                    shadowUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png',
                    shadowRetinaUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png'
                  },
                  markerIcon: {
                    iconUrl: '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-icon.png',
                    iconRetinaUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-icon-2x.png',
                    shadowUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png',
                    shadowRetinaUrl:
                      '//res.waiqin365.com/d/seedsui/plugin/leaflet/images/marker-shadow.png'
                  }
                }
              },
              onSuccess: function () {
                console.log('\u5730\u56FE\u52A0\u8F7D\u6210\u529F')
              },
              children: (0, l.jsx)('div', {
                style: { position: 'relative', width: '100%', height: '500px' },
                children: (0, l.jsx)(s, {
                  ref: m,
                  ZoomControlProps: { style: { bottom: '20px' } },
                  markers: d,
                  polyline: d,
                  PolylineProps: { color: '#ff8800' },
                  circles: [
                    {
                      latitude: 31.981827992209773,
                      longitude: 118.73498038509915,
                      type: 'gcj02',
                      radius: 500
                    }
                  ],
                  CirclesProps: { color: '#ff8800' },
                  onMarkerClick: function (g) {
                    console.log('\u70B9\u51FBmarker:', g), console.log(m.current)
                    var v = window.L.icon({
                      active: !0,
                      iconUrl:
                        'https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-icon.bak.png',
                      iconRetinaUrl:
                        'https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-icon.bak.png',
                      shadowUrl:
                        'https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-shadow.png',
                      shadowRetinaUrl:
                        'https://lyrixi.github.io/lyrixi-design-mobile/assets/plugin/leaflet/images/marker-shadow.png',
                      shadowSize: [33, 33],
                      iconSize: [20, 33],
                      iconAnchor: [10, 16]
                    })
                    g.setIcon(v, { multiple: !0 })
                  },
                  onLoad: function (g) {
                    var v = g.getZoom()
                    g.setZoom(v - 1)
                  },
                  children: (0, l.jsx)(r, {
                    style: { bottom: '20px' },
                    onChange: function (g) {
                      m.current.panTo(g)
                    }
                  })
                })
              })
            })
          })
        })
      }
    },
    72720: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893),
        l = {
          padding: '12px 12px 8px',
          color: '#697b8c',
          fontSize: '14px',
          backgroundColor: 'rgba(250,251,252)'
        },
        t = { margin: '8px' }
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsx)(a.Divider, { children: 'Fill Mode' }),
              (0, n.jsx)(a.Mark, { className: 'default', style: t, children: 'default' }),
              (0, n.jsx)(a.Mark, { className: 'primary', style: t, children: 'primary' }),
              (0, n.jsx)(a.Mark, { className: 'link', style: t, children: 'link' }),
              (0, n.jsx)(a.Mark, { className: 'warning', style: t, children: 'warning' }),
              (0, n.jsx)(a.Mark, { className: 'danger', style: t, children: 'danger' }),
              (0, n.jsx)(a.Mark, { className: 'success', style: t, children: 'success' }),
              (0, n.jsx)(a.Divider, { children: 'Outline' }),
              (0, n.jsx)(a.Mark, {
                className: 'default outline',
                style: t,
                children: 'default outline'
              }),
              (0, n.jsx)(a.Mark, {
                className: 'primary outline',
                style: t,
                children: 'primary outline'
              }),
              (0, n.jsx)(a.Mark, { className: 'link outline', style: t, children: 'link outline' }),
              (0, n.jsx)(a.Mark, {
                className: 'warning outline',
                style: t,
                children: 'warning outline'
              }),
              (0, n.jsx)(a.Mark, {
                className: 'danger outline',
                style: t,
                children: 'danger outline'
              }),
              (0, n.jsx)(a.Mark, {
                className: 'success outline',
                style: t,
                children: 'success outline'
              }),
              (0, n.jsx)(a.Divider, { children: 'light-outline' }),
              (0, n.jsx)(a.Mark, {
                className: 'default light-outline',
                style: t,
                children: 'default light-outline'
              }),
              (0, n.jsx)(a.Mark, {
                className: 'primary light-outline',
                style: t,
                children: 'primary light-outline'
              }),
              (0, n.jsx)(a.Mark, {
                className: 'link light-outline',
                style: t,
                children: 'link light-outline'
              }),
              (0, n.jsx)(a.Mark, {
                className: 'warning light-outline',
                style: t,
                children: 'warning light-outline'
              }),
              (0, n.jsx)(a.Mark, {
                className: 'danger light-outline',
                style: t,
                children: 'danger light-outline'
              }),
              (0, n.jsx)(a.Mark, {
                className: 'success light-outline',
                style: t,
                children: 'success light-outline'
              })
            ]
          })
        })
      }
    },
    34919: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        var l = (0, h.useRef)(null)
        return (0, n.jsxs)(a.Layout, {
          className: 'full',
          children: [
            (0, n.jsx)(a.Layout.Header, { className: 'text-center', children: 'Modal' }),
            (0, n.jsx)(a.Layout.Main, {
              children: (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Filter' }),
                  (0, n.jsx)('div', {
                    onClick: function () {
                      var s
                      ;(s = l.current) === null || s === void 0 || s.open()
                    },
                    children: 'Click to toggle visible'
                  }),
                  (0, n.jsx)(a.ToolBar.Filter, {
                    active: !0,
                    icon: (0, n.jsx)(a.Icon, {
                      className: 'toolbar-icon seeds-icons seeds-icon-search'
                    }),
                    onOk: function (s) {
                      var r = s.close
                      console.log('submit'), r()
                    },
                    children: (0, n.jsx)('div', {
                      className: 'bg-white',
                      style: { height: '300px' },
                      children: 'Modal Content'
                    })
                  }),
                  (0, n.jsx)(a.ToolBar.Filter, {
                    ref: l,
                    className: 'toolbar-button',
                    onOk: function (s) {
                      var r = s.close
                      console.log('submit'), r()
                    },
                    children: (0, n.jsx)('div', {
                      className: 'bg-white',
                      style: { height: '300px' },
                      children: 'Modal Content'
                    })
                  })
                ]
              })
            })
          ]
        })
      }
    },
    25199: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useRef)(null),
          r = (0, n.useRef)(null),
          o = (0, n.useState)(!1),
          _ = a()(o, 2),
          u = _[0],
          d = _[1]
        function m() {
          d(!u)
        }
        return (0, t.jsxs)(l.Layout, {
          className: 'full',
          children: [
            (0, t.jsx)(l.Layout.Header, { className: 'text-center', children: 'Modal' }),
            (0, t.jsxs)(l.Layout.Main, {
              className: 'bg-white',
              children: [
                (0, t.jsx)('div', {
                  ref: s,
                  className: 'demo-title',
                  onClick: m,
                  children: 'Modal visible toggle'
                }),
                (0, t.jsx)(l.Modal.FilterModal, {
                  visible: !0,
                  onConfig: function () {
                    console.log('setting')
                  },
                  onReset: function () {
                    console.log('reset')
                  },
                  children: (0, t.jsx)('div', {
                    className: 'bg-white',
                    style: { height: '300px' },
                    children: 'Test'
                  })
                })
              ]
            })
          ]
        })
      }
    },
    20279: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useRef)(null),
          r = (0, n.useState)(!1),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        function d() {
          u(!_)
        }
        return (0, t.jsx)('div', {
          id: 'root',
          className: 'position-relative',
          style: { height: '300px' },
          children: (0, t.jsxs)(l.Layout, {
            className: 'full',
            children: [
              (0, t.jsx)(l.Layout.Header, { className: 'text-center', children: 'Modal' }),
              (0, t.jsxs)(l.Layout.Main, {
                className: 'bg-white',
                children: [
                  (0, t.jsx)('div', {
                    className: 'demo-title',
                    onClick: d,
                    children: 'Modal visible toggle'
                  }),
                  (0, t.jsx)(l.Modal, {
                    animation: 'slideDown',
                    ref: s,
                    visible: _,
                    onVisibleChange: u,
                    children: (0, t.jsx)('div', {
                      className: 'bg-white',
                      style: { height: '300px' },
                      children: 'Test'
                    })
                  })
                ]
              })
            ]
          })
        })
      }
    },
    96438: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Only Title' }),
                  (0, n.jsx)(a.Modal.NavBar, { ok: null, cancel: null, title: 'Title' })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Only Cancel' }),
                  (0, n.jsx)(a.Modal.NavBar, { ok: null, title: 'Title' })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Ok and Cancel' }),
                  (0, n.jsx)(a.Modal.NavBar, { title: 'Title' })
                ]
              })
            ]
          })
        })
      }
    },
    44849: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        var l = h.useRef(null)
        return (
          console.log('navBarComboRef', l),
          (0, n.jsxs)(a.Layout, {
            className: 'full',
            children: [
              (0, n.jsx)(a.Layout.Header, { className: 'text-center', children: 'Modal' }),
              (0, n.jsxs)(a.Layout.Main, {
                className: 'bg-white',
                children: [
                  (0, n.jsxs)(a.Card, {
                    children: [
                      (0, n.jsx)(a.Divider, { children: 'Only Title' }),
                      (0, n.jsx)(a.Modal.NavBarCombo, {
                        ref: l,
                        combo: 'Click to show NavModal',
                        title: 'Title',
                        ok: null,
                        cancel: null,
                        onOk: function (s) {
                          var r = s.close
                          console.log('Ok'), r()
                        },
                        onCancel: function () {
                          console.log('Cancel')
                        },
                        onVisibleChange: function (s) {
                          console.log('visible:', s)
                        },
                        children: (0, n.jsx)('div', {
                          className: 'bg-white',
                          style: { height: '300px' },
                          children: 'Modal Content'
                        })
                      })
                    ]
                  }),
                  (0, n.jsxs)(a.Card, {
                    children: [
                      (0, n.jsx)(a.Divider, { children: 'Only Cancel' }),
                      (0, n.jsx)(a.Modal.NavBarCombo, {
                        combo: 'Click to show NavModal',
                        title: 'Title',
                        ok: null,
                        onOk: function (s) {
                          var r = s.close
                          console.log('Ok'), r()
                        },
                        onCancel: function () {
                          console.log('Cancel')
                        },
                        children: (0, n.jsx)('div', {
                          className: 'bg-white',
                          style: { height: '300px' },
                          children: 'Modal Content'
                        })
                      })
                    ]
                  }),
                  (0, n.jsxs)(a.Card, {
                    children: [
                      (0, n.jsx)(a.Divider, { children: 'Ok and Cancel' }),
                      (0, n.jsx)(a.Modal.NavBarCombo, {
                        combo: 'Click to show NavModal',
                        title: 'Title',
                        onOk: function (s) {
                          var r = s.close
                          console.log('Ok'), r()
                        },
                        onCancel: function () {
                          console.log('Cancel')
                        },
                        children: (0, n.jsx)('div', {
                          className: 'bg-white',
                          style: { height: '300px' },
                          children: 'Modal Content'
                        })
                      })
                    ]
                  })
                ]
              })
            ]
          })
        )
      }
    },
    65133: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useRef)(null),
          r = (0, n.useRef)(null),
          o = (0, n.useState)(!1),
          _ = a()(o, 2),
          u = _[0],
          d = _[1]
        function m() {
          d(!u)
        }
        return (0, t.jsxs)(l.Layout, {
          className: 'full',
          children: [
            (0, t.jsx)(l.Layout.Header, { className: 'text-center', children: 'Modal' }),
            (0, t.jsxs)(l.Layout.Main, {
              className: 'bg-white',
              children: [
                (0, t.jsx)('div', {
                  ref: s,
                  className: 'demo-title',
                  onClick: m,
                  children: 'Modal visible toggle'
                }),
                (0, t.jsx)(l.Modal.NavBarModal, {
                  visible: u,
                  onOk: function () {
                    console.log('Ok')
                  },
                  onCancel: function () {
                    console.log('Cancel')
                  },
                  onVisibleChange: function (g) {
                    console.log(g), d(g)
                  },
                  children: (0, t.jsx)('div', {
                    className: 'bg-white',
                    style: { height: '300px' },
                    children: 'Test'
                  })
                })
              ]
            })
          ]
        })
      }
    },
    62847: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        function l() {
          a.Modal.alert({ content: 'alert content' })
        }
        return (0, n.jsxs)(a.Layout, {
          className: 'full',
          children: [
            (0, n.jsx)(a.Layout.Header, { className: 'text-center', children: 'Modal.alert' }),
            (0, n.jsx)(a.Layout.Main, {
              className: 'bg-white',
              children: (0, n.jsx)(a.Button, {
                className: 'flex l primary',
                onClick: l,
                children: 'Modal visible toggle'
              })
            })
          ]
        })
      }
    },
    8216: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        function l() {
          a.Modal.confirm({
            title: '\u7B2C\u4E00\u5C42',
            titleProps: { className: 'text-left', style: { color: 'red' } },
            portal: top.document.body,
            content:
              '\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6\u6700\u5927\u9AD8\u5EA6',
            contentProps: { className: 'text-left', style: { color: 'red' } },
            footerProps: { className: 'vertical' },
            cancelProps: { className: 'text-left', style: { color: 'red' } },
            okProps: { className: 'text-left', style: { color: 'red' } },
            onOk: function () {
              return (
                console.log('\u7B2C\u4E8C\u5C42'),
                a.Modal.confirm({
                  title: '\u7B2C\u4E8C\u5C42',
                  maskProps: { className: 'aa', style: { zIndex: 999 } },
                  maskClosable: !0,
                  content: 'confirm content2',
                  onOk: function () {
                    return (
                      console.log('\u7B2C\u4E09\u5C42'),
                      a.Modal.alert({
                        portal: document.body,
                        title: '\u7B2C\u4E09\u5C42',
                        content: 'confirm content3',
                        onVisibleChange: function (o) {
                          console.log('onVisibleChange:', o)
                        }
                      }),
                      !1
                    )
                  }
                }),
                !1
              )
            }
          })
        }
        return (0, n.jsxs)(a.Layout, {
          className: 'full',
          children: [
            (0, n.jsx)(a.Layout.Header, { className: 'text-center', children: 'Modal.confirm' }),
            (0, n.jsx)(a.Layout.Main, {
              className: 'bg-white',
              style: {
                backgroundImage:
                  'url(https://cdn.pixabay.com/photo/2014/12/16/08/32/cherry-blossoms-570046_1280.jpg)'
              },
              children: (0, n.jsx)(a.Button, {
                className: 'flex l primary',
                onClick: l,
                children: 'Modal visible toggle'
              })
            })
          ]
        })
      }
    },
    73653: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full bg-white',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsx)(a.Divider, { children: 'Normal' }),
              (0, n.jsxs)(a.NavBar, {
                children: [
                  (0, n.jsx)(a.NavBar.Button, { icon: 'seeds-icon-arrow-left', children: 'Back' }),
                  (0, n.jsx)(a.NavBar.Title, { children: 'Title' }),
                  (0, n.jsx)(a.NavBar.Button, { className: 'primary', children: 'Ok' })
                ]
              }),
              (0, n.jsx)(a.Divider, { children: 'Button Shape' }),
              (0, n.jsxs)(a.NavBar, {
                children: [
                  (0, n.jsx)(a.NavBar.Button, { iconShape: 'circle', icon: 'seeds-icon-close' }),
                  (0, n.jsx)(a.NavBar.Button, {
                    iconShape: 'square',
                    icon: 'seeds-icon-three-dots'
                  })
                ]
              }),
              (0, n.jsx)(a.Divider, { children: 'Title' }),
              (0, n.jsxs)(a.NavBar, {
                children: [
                  (0, n.jsx)(a.NavBar.Button, { iconShape: 'circle', icon: 'seeds-icon-close' }),
                  (0, n.jsx)(a.NavBar.Title, { children: 'Title' }),
                  (0, n.jsx)(a.NavBar.Button, { className: 'primary', children: 'Ok' })
                ]
              })
            ]
          })
        })
      }
    },
    84833: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useRef)(null),
          r = (0, n.useState)([]),
          o = a()(r, 2),
          _ = o[0],
          u = o[1],
          d = (0, n.useState)(null),
          m = a()(d, 2),
          c = m[0],
          g = m[1]
        return (
          (0, n.useEffect)(function () {
            setTimeout(function () {
              console.log('pickerRef:', s),
                u([
                  { id: '1', name: '1' },
                  { id: '2', name: '2' },
                  { id: '3', name: '3' },
                  { id: '4', name: '4' },
                  { id: '5', name: '5' },
                  { id: '6', name: '6' },
                  { id: '7', name: '7' },
                  { id: '8', name: '8' },
                  { id: '9', name: '9' },
                  { id: '10', name: '10' }
                ]),
                g([{ id: '2', name: '2' }])
            }, 2e3)
          }, []),
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(l.Picker.Combo, {
              ref: s,
              allowClear: !0,
              modalProps: { safeArea: !0, title: '\u6807\u9898', cancel: null, ok: '' },
              placeholder: 'Please select',
              value: c,
              list: _,
              onChange: function (C) {
                console.log('onChange:', C), g(C)
              },
              onVisibleChange: function (C) {
                console.log('visible:', C)
              }
            })
          })
        )
      }
    },
    78054: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = [
            { id: '1', name: '1' },
            { id: '2', name: '2' }
          ],
          r = (0, n.useState)(null),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.Picker.Main, {
            value: _,
            list: s,
            onChange: function (m) {
              console.log('onChange:', m), u(m)
            }
          })
        })
      }
    },
    66726: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)([]),
          r = a()(s, 2),
          o = r[0],
          _ = r[1],
          u = (0, n.useState)(null),
          d = a()(u, 2),
          m = d[0],
          c = d[1]
        return (
          (0, n.useEffect)(function () {
            setTimeout(function () {
              _([
                { name: '0507-\u6253\u5370', id: '8571532967972181136' },
                { name: '0507-\u6253\u5370_\u526F\u672C', id: '8421508242493921754' }
              ])
            }, 3e3)
          }, []),
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(l.Picker.Modal, {
              visible: !0,
              value: '8571532967972181136',
              list: o,
              onChange: function (v) {
                console.log('onChange:', v)
              }
            })
          })
        )
      }
    },
    75058: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893),
        s = function () {
          var o = (0, n.useState)(0),
            _ = a()(o, 2),
            u = _[0],
            d = _[1],
            m = function (g) {
              d(g)
            }
          return (0, t.jsx)(l.Layout, {
            className: 'full',
            children: (0, t.jsxs)(l.Layout.Main, {
              children: [
                (0, t.jsx)(l.Divider, { children: 'Duration' }),
                (0, t.jsxs)(l.Card, {
                  style: { padding: '10px 12px' },
                  children: [
                    (0, t.jsx)(l.Progress.Bar, {
                      percent: u,
                      style: { '--seed-progress-animation-duration': '0.1s' }
                    }),
                    (0, t.jsx)(l.Progress.Bar, {
                      percent: u,
                      style: { '--seed-progress-animation-duration': '1s', margin: '12px 0' }
                    }),
                    (0, t.jsx)(l.Progress.Bar, {
                      percent: u,
                      style: { '--seed-progress-animation-duration': '2s' }
                    })
                  ]
                }),
                (0, t.jsx)(l.Divider, { children: 'Timing' }),
                (0, t.jsxs)(l.Card, {
                  style: { padding: '10px 12px' },
                  children: [
                    (0, t.jsx)(l.Progress.Bar, {
                      percent: u,
                      style: {
                        '--seed-progress-animation-duration': '1s',
                        '--seed-progress-animation-timing': 'linear'
                      }
                    }),
                    (0, t.jsx)(l.Progress.Bar, {
                      percent: u,
                      style: {
                        '--seed-progress-animation-duration': '1s',
                        '--seed-progress-animation-timing': 'ease-out',
                        margin: '12px 0'
                      }
                    }),
                    (0, t.jsx)(l.Progress.Bar, {
                      percent: u,
                      style: {
                        '--seed-progress-animation-duration': '1s',
                        '--seed-progress-animation-timing': 'ease-in-out'
                      }
                    })
                  ]
                }),
                (0, t.jsxs)('div', {
                  children: [
                    'Percent:',
                    (0, t.jsx)('input', {
                      type: 'range',
                      min: '0',
                      max: '100',
                      value: u,
                      onChange: function (g) {
                        return m(Number(g.target.value))
                      },
                      style: { marginLeft: '10px' }
                    }),
                    u,
                    '%'
                  ]
                })
              ]
            })
          })
        }
      i.default = s
    },
    55624: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893),
        l = function () {
          return (0, n.jsx)(a.Layout, {
            className: 'full',
            children: (0, n.jsxs)(a.Layout.Main, {
              children: [
                (0, n.jsx)(a.Divider, { children: '\u57FA\u7840\u7528\u6CD5' }),
                (0, n.jsx)(a.Card, {
                  style: { padding: '10px 12px' },
                  children: (0, n.jsx)(a.Progress.Bar, { percent: 75 })
                }),
                (0, n.jsx)(a.Divider, { children: 'Size' }),
                (0, n.jsxs)(a.Card, {
                  style: { padding: '10px 12px' },
                  children: [
                    (0, n.jsx)(a.Progress.Bar, {
                      percent: 60,
                      style: { '--seed-progress-track-width': '4px' }
                    }),
                    (0, n.jsx)(a.Progress.Bar, {
                      percent: 60,
                      style: { '--seed-progress-track-width': '12px', margin: '12px 0' }
                    }),
                    (0, n.jsx)(a.Progress.Bar, {
                      percent: 60,
                      style: { '--seed-progress-track-width': '20px' }
                    })
                  ]
                }),
                (0, n.jsx)(a.Divider, { children: 'Color' }),
                (0, n.jsxs)(a.Card, {
                  style: { padding: '10px 12px' },
                  children: [
                    (0, n.jsx)(a.Progress.Bar, {
                      percent: 80,
                      style: {
                        '--seed-progress-fill-color': '#722ed1',
                        '--seed-progress-bg-color': '#f9f0ff'
                      }
                    }),
                    (0, n.jsx)(a.Progress.Bar, {
                      percent: 45,
                      style: {
                        '--seed-progress-fill-color': '#fa8c16',
                        '--seed-progress-bg-color': '#fff7e6',
                        margin: '12px 0'
                      }
                    }),
                    (0, n.jsx)(a.Progress.Bar, {
                      percent: 100,
                      className: 'success',
                      style: { margin: '12px 0' }
                    }),
                    (0, n.jsx)(a.Progress.Bar, { percent: 100, className: 'danger' })
                  ]
                })
              ]
            })
          })
        }
      i.default = l
    },
    80574: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893),
        s = function () {
          var o = (0, n.useState)(0),
            _ = a()(o, 2),
            u = _[0],
            d = _[1],
            m = function (g) {
              d(g)
            }
          return (0, t.jsx)(l.Layout, {
            className: 'full',
            children: (0, t.jsxs)(l.Layout.Main, {
              children: [
                (0, t.jsx)(l.Divider, { children: 'Duration' }),
                (0, t.jsxs)(l.Card, {
                  children: [
                    (0, t.jsx)(l.Progress.Circle, {
                      percent: u,
                      style: { '--seed-progress-animation-duration': '0.1s' },
                      children: (0, t.jsxs)('span', { children: [u, '%'] })
                    }),
                    (0, t.jsx)(l.Progress.Circle, {
                      percent: u,
                      style: { '--seed-progress-animation-duration': '1s' },
                      children: (0, t.jsxs)('span', { children: [u, '%'] })
                    }),
                    (0, t.jsx)(l.Progress.Circle, {
                      percent: u,
                      style: { '--seed-progress-animation-duration': '2s' },
                      children: (0, t.jsxs)('span', { children: [u, '%'] })
                    })
                  ]
                }),
                (0, t.jsx)(l.Divider, { children: 'Timing' }),
                (0, t.jsxs)(l.Card, {
                  children: [
                    (0, t.jsx)(l.Progress.Circle, {
                      percent: u,
                      style: {
                        '--seed-progress-animation-duration': '1s',
                        '--seed-progress-animation-timing': 'linear'
                      },
                      children: (0, t.jsxs)('span', { children: [u, '%'] })
                    }),
                    (0, t.jsx)(l.Progress.Circle, {
                      percent: u,
                      style: {
                        '--seed-progress-animation-duration': '1s',
                        '--seed-progress-animation-timing': 'ease-out'
                      },
                      children: (0, t.jsxs)('span', { children: [u, '%'] })
                    }),
                    (0, t.jsx)(l.Progress.Circle, {
                      percent: u,
                      style: {
                        '--seed-progress-animation-duration': '1s',
                        '--seed-progress-animation-timing': 'ease-in-out'
                      },
                      children: (0, t.jsxs)('span', { children: [u, '%'] })
                    })
                  ]
                }),
                (0, t.jsxs)('div', {
                  children: [
                    'Percent:',
                    (0, t.jsx)('input', {
                      type: 'range',
                      min: '0',
                      max: '100',
                      value: u,
                      onChange: function (g) {
                        return m(Number(g.target.value))
                      },
                      style: { marginLeft: '10px' }
                    }),
                    u,
                    '%'
                  ]
                })
              ]
            })
          })
        }
      i.default = s
    },
    14453: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893),
        l = function () {
          return (0, n.jsx)(a.Layout, {
            className: 'full',
            children: (0, n.jsxs)(a.Layout.Main, {
              children: [
                (0, n.jsx)(a.Divider, { children: '\u57FA\u7840\u7528\u6CD5' }),
                (0, n.jsx)(a.Card, {
                  children: (0, n.jsx)(a.Progress.Circle, {
                    percent: 75,
                    children: (0, n.jsx)('span', { children: '75%' })
                  })
                }),
                (0, n.jsx)(a.Divider, { children: 'Size' }),
                (0, n.jsxs)(a.Card, {
                  children: [
                    (0, n.jsx)(a.Progress.Circle, {
                      percent: 60,
                      size: 50,
                      children: (0, n.jsx)('span', { children: '60%' })
                    }),
                    (0, n.jsx)(a.Progress.Circle, {
                      percent: 60,
                      size: 80,
                      style: { '--seed-progress-track-width': '8px' },
                      children: (0, n.jsx)('span', { className: 'font-size-xl', children: '60%' })
                    }),
                    (0, n.jsx)(a.Progress.Circle, {
                      percent: 60,
                      size: 100,
                      style: { '--seed-progress-track-width': '10px' },
                      children: (0, n.jsx)('span', { className: 'font-size-xxl', children: '60%' })
                    })
                  ]
                }),
                (0, n.jsx)(a.Divider, { children: 'Color' }),
                (0, n.jsxs)(a.Card, {
                  children: [
                    (0, n.jsx)(a.Progress.Circle, {
                      percent: 80,
                      style: {
                        '--seed-progress-fill-color': '#722ed1',
                        '--seed-progress-bg-color': '#f9f0ff'
                      },
                      children: (0, n.jsx)('span', { children: '80%' })
                    }),
                    (0, n.jsx)(a.Progress.Circle, {
                      percent: 45,
                      style: {
                        '--seed-progress-fill-color': '#fa8c16',
                        '--seed-progress-bg-color': '#fff7e6'
                      },
                      children: (0, n.jsx)('span', { children: '45%' })
                    }),
                    (0, n.jsx)(a.Progress.Circle, {
                      percent: 100,
                      className: 'success',
                      children: (0, n.jsx)('span', { className: 'color-success', children: 'Ok' })
                    }),
                    (0, n.jsx)(a.Progress.Circle, {
                      percent: 100,
                      className: 'danger',
                      children: (0, n.jsx)('span', { className: 'color-danger', children: 'Error' })
                    })
                  ]
                })
              ]
            })
          })
        }
      i.default = l
    },
    24949: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893),
        s = {
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '50px',
          height: '50px',
          marginLeft: '-25px',
          marginTop: '-25px'
        }
      i.default = function () {
        var r = (0, n.useState)(''),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        return (
          (0, n.useEffect)(function () {
            setTimeout(function () {
              u('abc')
            }, 1e3)
          }, []),
          (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)(l.QRCode, {
              text: _,
              style: { width: '300px', height: '300px' },
              children: (0, t.jsx)('img', {
                style: s,
                alt: '',
                src: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
              })
            })
          })
        )
      }
    },
    85998: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useRef)(null),
          r = (0, n.useState)([
            { id: '1', name: '1' },
            { id: '2', name: '2' },
            { id: '3', name: '3' },
            { id: '4', name: '4' },
            { id: '5', name: '5' },
            { id: '6', name: '6' },
            { id: '7', name: '7' },
            { id: '8', name: '8' },
            { id: '9', name: '9' },
            { id: '10', name: '10' }
          ]),
          o = a()(r, 2),
          _ = o[0],
          u = o[1],
          d = (0, n.useState)(null),
          m = a()(d, 2),
          c = m[0],
          g = m[1]
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.Checkbox.Group, {
            ref: s,
            multiple: !1,
            value: c,
            list: _,
            onChange: function (C) {
              console.log('onChange:', C), g(C)
            }
          })
        })
      }
    },
    72849: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(!1),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(l.Checkbox, { checked: o, onChange: _, children: 'Common' }),
            (0, t.jsx)('br', {}),
            (0, t.jsx)(l.Checkbox, {
              checked: o,
              onChange: _,
              iconPosition: 'right',
              children: 'Common iconPosition=right'
            }),
            (0, t.jsx)('br', {}),
            (0, t.jsx)(l.Checkbox, { checked: !0, children: '\u9009\u4E2D' }),
            (0, t.jsx)('br', {}),
            (0, t.jsx)(l.Checkbox, {
              checked: !1,
              disabled: !0,
              children: '\u666E\u901A-\u7981\u7528'
            }),
            (0, t.jsx)('br', {}),
            (0, t.jsx)(l.Checkbox, {
              checked: !0,
              disabled: !0,
              children: '\u9009\u4E2D-\u7981\u7528'
            })
          ]
        })
      }
    },
    28995: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsx)(a.Layout.Main, {
            children: (0, n.jsxs)(a.Result, {
              className: 'full',
              status: '500',
              children: [
                (0, n.jsx)(a.Button, {
                  className: 'result-button primary',
                  style: { marginTop: 77 },
                  onClick: function () {
                    window.top.wq.invoke('loadRequest'), window.location.reload()
                  },
                  children: a.LocaleUtil.locale('\u91CD\u8BD5')
                }),
                (0, n.jsx)(a.Button, {
                  className: 'result-button bg-white',
                  onClick: function () {
                    Bridge.back()
                  },
                  children: a.LocaleUtil.locale('\u8FD4\u56DE')
                })
              ]
            })
          })
        })
      }
    },
    21619: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsx)(a.Layout.Main, {
            children: (0, n.jsx)(a.Result, { className: 'full', status: 'empty' })
          })
        })
      }
    },
    78271: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsx)(a.Divider, { children: 'Each row has twenty-four columns' }),
              (0, n.jsxs)(a.Row, {
                children: [
                  (0, n.jsx)(a.Row.Col, {
                    span: 8,
                    className: 'color-white',
                    style: {
                      backgroundColor: 'var(--primary)',
                      padding: 'var(--space-m)',
                      border: '1px solid white',
                      boxSizing: 'border-box'
                    },
                    children: 'Name:'
                  }),
                  (0, n.jsx)(a.Row.Col, {
                    span: 16,
                    className: 'color-white',
                    style: {
                      backgroundColor: 'var(--primary)',
                      padding: 'var(--space-m)',
                      border: '1px solid white',
                      boxSizing: 'border-box'
                    },
                    children: 'Morpheus'
                  }),
                  (0, n.jsx)(a.Row.Col, {
                    span: 8,
                    className: 'color-white',
                    style: {
                      backgroundColor: 'var(--primary)',
                      padding: 'var(--space-m)',
                      border: '1px solid white',
                      boxSizing: 'border-box'
                    },
                    children: 'Age:'
                  }),
                  (0, n.jsx)(a.Row.Col, {
                    span: 16,
                    className: 'color-white',
                    style: {
                      backgroundColor: 'var(--primary)',
                      padding: 'var(--space-m)',
                      border: '1px solid white',
                      boxSizing: 'border-box'
                    },
                    children: 'Twenty-eight'
                  })
                ]
              })
            ]
          })
        })
      }
    },
    37716: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (
          (0, h.useEffect)(function () {
            a.SafeArea.autoSafeArea(),
              console.log('\u662F\u5426\u9700\u8981\u5B89\u5168\u533A:', a.SafeArea.needsSafeArea())
          }, []),
          (0, n.jsxs)('div', {
            className: 'flex position-absolute full',
            'data-safe-area': 'auto-border-bottom',
            style: { backgroundColor: 'green', borderColor: 'red' },
            children: [
              'You can test it on mobile, if you can see a red rectangle, the mobile needs a safe area',
              (0, n.jsx)(a.SafeArea, { style: { backgroundColor: 'red' } }),
              'Use root stage safe area',
              (0, n.jsx)('div', {
                children:
                  '1. If you want to adapt to the safe area, you can invoke: SafeArea.autoSafeArea()'
              }),
              (0, n.jsx)('div', {
                children:
                  "2. If you want to root safe area, you can invoke: SafeArea.autoSafeArea('auto-safe-area-root')"
              }),
              (0, n.jsx)('div', {
                children:
                  '3. If you want to custom safe area, you can extend class: .auto-safe-area-children {...your class}'
              })
            ]
          })
        )
      }
    },
    48454: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(96486),
        t = e.n(l),
        s = e(49886),
        r = e(16260),
        o = e(83633),
        _ = e(85893)
      i.default = function () {
        var u = (0, n.useState)(''),
          d = a()(u, 2),
          m = d[0],
          c = d[1],
          g = (0, n.useState)([
            { allowClear: !0, id: '1', name: (0, _.jsx)('div', { children: 'Option1' }) },
            {
              id: '2',
              name: 'Option2',
              style: { color: 'red', padding: 0, backgroundColor: 'transparent' }
            },
            { id: '3', name: 'Option3', disabled: !0, allowClear: !0 }
          ]),
          v = a()(g, 2),
          C = v[0],
          O = v[1]
        return (0, _.jsx)(s.Layout, {
          className: 'full',
          children: (0, _.jsxs)(s.Layout.Main, {
            children: [
              (0, _.jsxs)(s.Card, {
                children: [
                  (0, _.jsx)(s.Divider, { children: 'Single Select' }),
                  (0, _.jsx)(s.Select.Combo, {
                    modalProps: { title: 'Select', portal: document.body },
                    style: { margin: '0 12px' },
                    placeholder: 'Single Select',
                    allowClear: !0,
                    multiple: !1,
                    list: r.default,
                    value: C,
                    onChange: O
                  })
                ]
              }),
              (0, _.jsxs)(s.Card, {
                children: [
                  (0, _.jsx)(s.Divider, { children: 'Single Select, allow modal clear' }),
                  (0, _.jsx)(s.Select.Combo, {
                    modalProps: { title: 'Select' },
                    style: { margin: '0 12px' },
                    placeholder: 'Single Select',
                    allowClear: !0,
                    list: r.default,
                    value: C,
                    onChange: O
                  })
                ]
              }),
              (0, _.jsxs)(s.Card, {
                children: [
                  (0, _.jsx)(s.Divider, { children: 'Multiple Select' }),
                  (0, _.jsx)(s.Select.Combo, {
                    modalProps: { title: 'Select' },
                    style: { margin: '0 12px' },
                    placeholder: 'Multiple Select',
                    multiple: !0,
                    allowClear: !0,
                    list: r.default,
                    value: C,
                    onChange: O
                  })
                ]
              }),
              (0, _.jsxs)(s.Card, {
                children: [
                  (0, _.jsx)(s.Divider, { children: 'Multiple Select separator' }),
                  (0, _.jsx)(s.Select.Combo, {
                    modalProps: { title: 'Select' },
                    style: { margin: '0 12px' },
                    placeholder: 'Multiple Select',
                    multiple: !0,
                    separator: '|',
                    allowClear: !0,
                    list: r.default,
                    value: C,
                    onChange: O
                  })
                ]
              }),
              (0, _.jsxs)(s.Card, {
                children: [
                  (0, _.jsx)(s.Divider, { children: 'Single tags' }),
                  (0, _.jsx)(s.Select.Combo, {
                    modalProps: { title: 'Select' },
                    style: { margin: '0 12px' },
                    placeholder: 'Multiple Select',
                    mode: 'tags',
                    multiple: !1,
                    allowClear: !0,
                    list: r.default,
                    value: C,
                    onChange: O
                  })
                ]
              }),
              (0, _.jsxs)(s.Card, {
                children: [
                  (0, _.jsx)(s.Divider, { children: 'Multiple Tags' }),
                  (0, _.jsx)(s.Select.Combo, {
                    modalProps: { title: 'Select' },
                    style: { margin: '0 12px' },
                    placeholder: 'Multiple Select',
                    mode: 'tags',
                    multiple: !0,
                    allowClear: !0,
                    list: r.default,
                    value: C,
                    onChange: O
                  })
                ]
              }),
              (0, _.jsxs)(s.Card, {
                children: [
                  (0, _.jsx)(s.Divider, { children: 'Multiple Tags separator' }),
                  (0, _.jsx)(s.Select.Combo, {
                    modalProps: { title: 'Select' },
                    style: { margin: '0 12px' },
                    placeholder: 'Multiple Select',
                    mode: 'tags',
                    separator: ',',
                    multiple: !0,
                    allowClear: !0,
                    list: r.default,
                    value: C,
                    onChange: O
                  })
                ]
              }),
              (0, _.jsxs)(s.Card, {
                children: [
                  (0, _.jsx)(s.Divider, { children: 'Checkbox' }),
                  (0, _.jsx)(s.Select.Combo, {
                    modalProps: { title: 'Select' },
                    style: { margin: '0 12px' },
                    placeholder: 'Single Select',
                    allowClear: !0,
                    multiple: !1,
                    list: r.default,
                    value: C,
                    onChange: O,
                    checkbox: function (M) {
                      var P = M.checked
                      return (0, _.jsx)(s.Checkbox, { checked: P })
                    },
                    checkboxPosition: 'left'
                  })
                ]
              }),
              (0, _.jsxs)(s.Card, {
                children: [
                  (0, _.jsx)(s.Divider, { children: 'Layout' }),
                  (0, _.jsx)(s.Select.Combo, {
                    style: { margin: '0 12px' },
                    placeholder: 'Layout',
                    multiple: !1,
                    modalProps: {
                      title: 'Select',
                      header: function () {
                        return (0, _.jsx)('p', { children: 'Header' })
                      },
                      footer: function () {
                        return (0, _.jsx)('p', { children: 'Footer' })
                      }
                    },
                    allowClear: !0,
                    value: C,
                    list: r.default,
                    onChange: O
                  })
                ]
              }),
              (0, _.jsxs)(s.Card, {
                children: [
                  (0, _.jsx)(s.Divider, { children: 'onBeforeChange' }),
                  (0, _.jsx)(s.Select.Combo, {
                    modalProps: { title: 'Select' },
                    style: { margin: '0 12px' },
                    placeholder: 'onBeforeChange',
                    allowClear: !0,
                    multiple: !1,
                    value: C,
                    list: r.default,
                    onChange: O,
                    onBeforeChange: function (M) {
                      return (
                        console.log('onBeforeChange', M),
                        new Promise(function (P) {
                          s.Modal.confirm({
                            title: '\u4F60\u786E\u5B9A\u8981\u4FEE\u6539\u5417\uFF1F',
                            content: '\u4F60\u786E\u5B9A\u8981\u4FEE\u6539\u5417',
                            onOk: function () {
                              P(!0)
                            },
                            onCancel: function () {
                              P(!1)
                            }
                          })
                        })
                      )
                    }
                  })
                ]
              }),
              (0, _.jsxs)(s.Card, {
                children: [
                  (0, _.jsx)(s.Divider, { children: 'List count more than 15, show Search' }),
                  (0, _.jsx)(s.Select.Combo, {
                    modalProps: { title: 'Select' },
                    style: { margin: '0 12px' },
                    placeholder: 'Search',
                    multiple: !1,
                    allowClear: !0,
                    value: C,
                    list: o.default,
                    onChange: function (M) {
                      console.log('onChange:', M), O(M)
                    }
                  })
                ]
              }),
              (0, _.jsxs)(s.Card, {
                children: [
                  (0, _.jsx)(s.Divider, { children: 'Custom Header' }),
                  (0, _.jsx)(s.Select.Combo, {
                    style: { margin: '0 12px' },
                    placeholder: 'Search',
                    multiple: !1,
                    modalProps: {
                      title: 'Select',
                      header: function () {
                        return (0, _.jsx)(s.ToolBar, {
                          invert: !0,
                          children: (0, _.jsx)(s.ToolBar.Search, {
                            value: m,
                            onSearch: function (P) {
                              c(P)
                            }
                          })
                        })
                      }
                    },
                    allowClear: !0,
                    value: C,
                    list: s.List.searchList(r.default, m),
                    onChange: function (M) {
                      console.log('onChange:', M), O(M)
                    }
                  })
                ]
              })
            ]
          })
        })
      }
    },
    20728: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useRef)(null),
          r = (0, n.useState)([{ id: '1', name: '\u9009\u98791' }]),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.Select.Main, {
            ref: s,
            multiple: !1,
            value: _,
            list: [
              { id: '1', name: '\u9009\u98791' },
              { id: '2', name: '\u9009\u98792' }
            ],
            onChange: function (m) {
              console.log('onChange:', m), u(m)
            }
          })
        })
      }
    },
    1204: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useRef)(null),
          r = (0, n.useState)([{ id: '1', name: '\u9009\u98791' }]),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        return (0, t.jsx)(t.Fragment, {
          children: (0, t.jsx)(l.Select.Modal, {
            ref: s,
            value: _,
            list: [
              { id: '1', name: '\u9009\u98791' },
              { id: '2', name: '\u9009\u98792' }
            ],
            visible: !0,
            onChange: function (m) {
              console.log('onChange:', m), u(m)
            },
            onVisibleChange: function (m) {
              console.log(m)
            }
          })
        })
      }
    },
    1685: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)([{ id: '1', name: '\u9009\u98791' }]),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsx)(l.Layout, {
          className: 'full bg-white',
          children: (0, t.jsx)(l.Layout.Main, {
            children: (0, t.jsx)(l.Selector, {
              columns: 3,
              allowClear: !0,
              placeholder: 'Please select',
              value: o,
              list: [
                { id: '1', name: '\u9009\u98791' },
                { id: '2', name: 'Option 2 is very very very very very long' },
                { id: '3', name: '\u9009\u98793' },
                { id: '4', name: '\u9009\u98794' },
                { id: '5', name: '\u9009\u98795' }
              ],
              onChange: _
            })
          })
        })
      }
    },
    73209: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        var l = (0, h.useRef)(null)
        return (
          console.log(l),
          (0, n.jsxs)(a.Layout, {
            className: 'full',
            children: [
              (0, n.jsx)(a.Layout.Header, {
                children: 'When this platform is not supported, nothing will appear'
              }),
              (0, n.jsx)(a.Layout.Main, {
                className: 'bg-white',
                children: (0, n.jsx)(a.Share.Combo, {
                  ref: l,
                  shareTo: {
                    wechat: {
                      title: '\u6807\u9898',
                      description: '\u63CF\u8FF0',
                      imageUrl:
                        'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    },
                    wecom: {
                      title: '\u6807\u9898',
                      description: '\u63CF\u8FF0',
                      imageUrl:
                        'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    },
                    dingtalk: {
                      title: '\u6807\u9898',
                      description: '\u63CF\u8FF0',
                      imageUrl:
                        'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    },
                    lark: {
                      title: '\u6807\u9898',
                      description: '\u63CF\u8FF0',
                      imageUrl:
                        'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                      url: 'https://www.baidu.com'
                    }
                  }
                })
              })
            ]
          })
        )
      }
    },
    79846: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsxs)(a.Layout, {
          className: 'full',
          children: [
            (0, n.jsx)(a.Layout.Header, { className: 'text-center', children: 'Share To' }),
            (0, n.jsx)(a.Layout.Main, {
              className: 'bg-white',
              children: (0, n.jsx)(a.Share.Main, {
                shareTo: {
                  wechat: {
                    title: '\u6807\u9898',
                    description: '\u63CF\u8FF0',
                    imageUrl:
                      'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                    url: 'https://www.baidu.com'
                  },
                  wecom: {
                    title: '\u6807\u9898',
                    description: '\u63CF\u8FF0',
                    imageUrl:
                      'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                    url: 'https://www.baidu.com'
                  },
                  dingtalk: {
                    title: '\u6807\u9898',
                    description: '\u63CF\u8FF0',
                    imageUrl:
                      'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                    url: 'https://www.baidu.com'
                  },
                  lark: {
                    title: '\u6807\u9898',
                    description: '\u63CF\u8FF0',
                    imageUrl:
                      'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                    url: 'https://www.baidu.com'
                  }
                }
              })
            })
          ]
        })
      }
    },
    78591: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsxs)(a.Layout, {
          className: 'full',
          children: [
            (0, n.jsx)(a.Layout.Header, { className: 'text-center', children: 'Share To' }),
            (0, n.jsx)(a.Layout.Main, {
              className: 'bg-white',
              children: (0, n.jsx)(a.Share.Modal, {
                visible: !0,
                shareTo: {
                  wechat: {
                    title: '\u6807\u9898',
                    description: '\u63CF\u8FF0',
                    imageUrl:
                      'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                    url: 'https://www.baidu.com'
                  },
                  wecom: {
                    title: '\u6807\u9898',
                    description: '\u63CF\u8FF0',
                    imageUrl:
                      'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                    url: 'https://www.baidu.com'
                  },
                  dingtalk: {
                    title: '\u6807\u9898',
                    description: '\u63CF\u8FF0',
                    imageUrl:
                      'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                    url: 'https://www.baidu.com'
                  },
                  lark: {
                    title: '\u6807\u9898',
                    description: '\u63CF\u8FF0',
                    imageUrl:
                      'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                    url: 'https://www.baidu.com'
                  }
                }
              })
            })
          ]
        })
      }
    },
    84713: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(
            'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
          ),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (
          (0, n.useEffect)(function () {
            l.Bridge.ready()
          }, []),
          (0, t.jsxs)(l.Layout, {
            className: 'full',
            children: [
              (0, t.jsx)(l.Layout.Header, {
                className: 'text-center',
                children: '\u624B\u5199\u7B7E\u540D'
              }),
              (0, t.jsx)(l.Layout.Main, {
                className: 'bg-white',
                children: (0, t.jsx)(l.Signature.Combo, {
                  value: o,
                  modalProps: { safeArea: 'auto' },
                  onChange: function (d) {
                    console.log(d), _(d)
                  },
                  onPreview: function (d) {
                    return l.Device.device === 'mobile' &&
                      (l.Bridge.platform === 'wechat' ||
                        l.Bridge.platform === 'wework' ||
                        l.Bridge.platform === 'alipay' ||
                        l.Bridge.platform === 'dingtalk' ||
                        l.Bridge.platform === 'lark' ||
                        l.Bridge.platform === 'wechatMiniprogram' ||
                        l.Bridge.platform === 'weworkMiniprogram' ||
                        l.Bridge.platform === 'alipayMiniprogram')
                      ? 'nativeImage'
                      : l.Bridge.platform === 'wq' || l.Bridge.platform === 'dinghuo'
                      ? (l.Bridge.previewImage({ urls: [d], current: d, index: 0 }), !1)
                      : 'browser'
                  },
                  onBeforeChange: function (d) {
                    if (!d)
                      return l.Toast.show({ content: '\u7B7E\u540D\u4E0D\u80FD\u4E3A\u7A7A' }), !1
                  }
                })
              })
            ]
          })
        )
      }
    },
    20539: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsxs)(a.Layout, {
          className: 'full',
          children: [
            (0, n.jsx)(a.Layout.Header, {
              className: 'text-center',
              children: '\u624B\u5199\u7B7E\u540D'
            }),
            (0, n.jsx)(a.Layout.Main, {
              className: 'bg-white',
              children: (0, n.jsx)(a.Signature.Main, {
                onChange: function (t) {
                  console.log(t)
                }
              })
            })
          ]
        })
      }
    },
    13799: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsxs)(a.Layout, {
          className: 'full',
          children: [
            (0, n.jsx)(a.Layout.Header, {
              className: 'text-center',
              children: '\u624B\u5199\u7B7E\u540D'
            }),
            (0, n.jsx)(a.Layout.Main, {
              className: 'bg-white',
              children: (0, n.jsx)(a.Signature.Modal, {
                visible: !0,
                onChange: function (t) {
                  console.log(t)
                }
              })
            })
          ]
        })
      }
    },
    89594: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(a.Skeleton.Detail, {}) })
      }
    },
    81676: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(n.Fragment, { children: (0, n.jsx)(a.Skeleton.Edit, {}) })
      }
    },
    28225: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(a.Skeleton.List, { divider: 'line', animated: !1 })
        })
      }
    },
    93678: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsx)(a.Divider, { children: 'Space' }),
              (0, n.jsx)(a.Space, { children: '1000' })
            ]
          })
        })
      }
    },
    58422: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893),
        l = [
          { id: 'finish', title: 'Finished', description: 'This is a description.' },
          { id: 'progress', title: 'In Progress', description: 'This is a description.' },
          { id: 'wait', title: 'Waiting', description: 'This is a description.' }
        ]
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Active by Index' }),
                  (0, n.jsx)(a.Steps, { value: { index: 1 }, list: l, direction: 'horizontal' })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Active by Id' }),
                  (0, n.jsx)(a.Steps, { value: { id: 'progress' }, list: l, direction: 'vertical' })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Active Status' }),
                  (0, n.jsx)(a.Steps, {
                    value: { id: 'progress', status: 'error' },
                    list: l,
                    align: 'left',
                    direction: 'horizontal'
                  })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Active Icon' }),
                  (0, n.jsx)(a.Steps, {
                    value: {
                      id: 'progress',
                      status: 'error',
                      icon: (0, n.jsx)(a.Icon, { className: 'seeds-icons seeds-icon-signature' })
                    },
                    list: l,
                    align: 'left',
                    direction: 'vertical'
                  })
                ]
              })
            ]
          })
        })
      }
    },
    76221: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893),
        l = [
          { id: 'finish', title: 'Finished', description: 'This is a description.' },
          { id: 'progress', title: 'In Progress', description: 'This is a description.' },
          { id: 'wait', title: 'Waiting', description: 'This is a description.' }
        ]
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Center & Horizontal' }),
                  (0, n.jsx)(a.Steps, {
                    iconSize: 24,
                    value: { index: 1 },
                    list: l,
                    align: 'center',
                    direction: 'horizontal'
                  })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Center & Vertical' }),
                  (0, n.jsx)(a.Steps, {
                    iconSize: 24,
                    value: { index: 1 },
                    list: l,
                    align: 'center',
                    direction: 'vertical'
                  })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Left & Horizontal' }),
                  (0, n.jsx)(a.Steps, {
                    iconSize: 24,
                    value: { index: 1 },
                    list: l,
                    align: 'left',
                    direction: 'horizontal'
                  })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Left & Vertical' }),
                  (0, n.jsx)(a.Steps, {
                    iconSize: 24,
                    value: { index: 1 },
                    list: l,
                    align: 'left',
                    direction: 'vertical'
                  })
                ]
              })
            ]
          })
        })
      }
    },
    29482: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893),
        l = [
          { id: 'finish', title: 'Finished', description: 'This is a description.' },
          { id: 'progress', title: 'In Progress', description: 'This is a description.' },
          { id: 'wait', title: 'Waiting', description: 'This is a description.' }
        ]
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Center & Horizontal' }),
                  (0, n.jsx)(a.Steps, {
                    value: { index: 1 },
                    list: l,
                    align: 'center',
                    direction: 'horizontal'
                  })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Center & Vertical' }),
                  (0, n.jsx)(a.Steps, {
                    value: { index: 1 },
                    list: l,
                    align: 'center',
                    direction: 'vertical'
                  })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Left & Horizontal' }),
                  (0, n.jsx)(a.Steps, {
                    value: { index: 1 },
                    list: l,
                    align: 'left',
                    direction: 'horizontal'
                  })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Left & Vertical' }),
                  (0, n.jsx)(a.Steps, {
                    value: { index: 1 },
                    list: l,
                    align: 'left',
                    direction: 'vertical'
                  })
                ]
              })
            ]
          })
        })
      }
    },
    76961: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893),
        l = [
          {
            icon: (0, n.jsx)(a.Icon, { className: 'seeds-icons seeds-icon-signature' }),
            id: 'finish',
            title: 'Finished',
            description: 'This is a description.'
          },
          {
            icon: (0, n.jsx)(a.Icon, { className: 'seeds-icons seeds-icon-signature' }),
            id: 'progress',
            title: 'In Progress',
            description: 'This is a description.'
          },
          {
            icon: (0, n.jsx)(a.Icon, { className: 'seeds-icons seeds-icon-signature' }),
            id: 'wait',
            title: 'Waiting',
            description: 'This is a description.'
          }
        ]
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Global Icon' }),
                  (0, n.jsx)(a.Steps, {
                    iconSize: 32,
                    value: { index: 1 },
                    list: l,
                    direction: 'horizontal'
                  })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Item Icon' }),
                  (0, n.jsx)(a.Steps, {
                    iconSize: 32,
                    value: {
                      index: 1,
                      icon: (0, n.jsx)(a.Icon, { className: 'seeds-icons seeds-icon-signature' })
                    },
                    list: l,
                    direction: 'vertical'
                  })
                ]
              })
            ]
          })
        })
      }
    },
    17809: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893),
        l = [
          {
            id: 'finish',
            title: (0, n.jsx)('p', {
              className: 'color-auxiliary',
              children: '2025-12-01 12:30:27'
            }),
            description: (0, n.jsx)('div', {
              className: 'color-default',
              children: (0, n.jsx)(a.List.Item, {
                avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
                title: 'Jerry Input',
                className: 'border-0'
              })
            })
          },
          {
            id: 'progress',
            title: (0, n.jsx)('p', {
              className: 'color-auxiliary',
              children: '2025-12-01 12:30:27'
            }),
            description: (0, n.jsx)('div', {
              className: 'color-default',
              children: (0, n.jsx)(a.List.Item, {
                avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
                title: 'Tom Input',
                className: 'border-0'
              })
            })
          },
          {
            id: 'wait',
            title: (0, n.jsx)('p', {
              className: 'color-auxiliary',
              children: '2025-12-01 12:30:27'
            }),
            description: (0, n.jsxs)('div', {
              className: 'color-default',
              children: [
                (0, n.jsx)(a.List.Item, {
                  avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=3',
                  title: 'Morpheus Input',
                  className: 'border-0'
                }),
                (0, n.jsx)('p', {
                  className: 'font-size-l',
                  children: 'Wait for the boss to handle.'
                }),
                (0, n.jsx)(a.Button, {
                  className: 's radius-m',
                  style: { marginTop: '8px' },
                  children: 'View detail'
                })
              ]
            })
          }
        ]
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsx)(a.Layout.Main, {
            children: (0, n.jsxs)(a.Card, {
              children: [
                (0, n.jsx)(a.Divider, { children: 'Center & Vertical' }),
                (0, n.jsx)(a.Steps, {
                  value: { index: 1 },
                  list: l,
                  align: 'center',
                  direction: 'vertical'
                })
              ]
            })
          })
        })
      }
    },
    94675: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(!1),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsx)(l.Layout, {
          className: 'full',
          children: (0, t.jsxs)(l.Layout.Main, {
            children: [
              (0, t.jsx)(l.Divider, { children: 'Size m' }),
              (0, t.jsx)(l.Switch, { checked: o, onChange: _ }),
              (0, t.jsx)(l.Switch, { checked: o, on: 'On On On On', off: 'Off', onChange: _ }),
              (0, t.jsx)(l.Divider, { children: 'Size s' }),
              (0, t.jsx)(l.Switch, { size: 's', checked: o, onChange: _ }),
              (0, t.jsx)(l.Switch, { size: 's', checked: o, on: 'On', off: 'Off', onChange: _ })
            ]
          })
        })
      }
    },
    78604: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = [
            { id: 'Fruit', name: 'Fruit' },
            { id: 'Vegetable', name: 'Vegetable', disabled: !0 },
            { id: 'Animal', name: 'Animal' }
          ],
          r = (0, n.useState)({ name: 'Vegetable', id: 'Vegetable' }),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        function d(m) {
          u(m)
        }
        return (0, t.jsx)(l.Layout, {
          className: 'full',
          children: (0, t.jsxs)(l.Layout.Main, {
            style: { backgroundColor: 'white' },
            children: [
              (0, t.jsx)(l.Divider, { children: 'OverFlow' }),
              (0, t.jsx)(l.TabBar.Group, {
                list: [
                  { id: 'Fruit', name: 'Fruit' },
                  {
                    id: 'Vegetable',
                    name: 'Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable '
                  },
                  { id: 'Animal', name: 'Animal' }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Disabled' }),
              (0, t.jsx)(l.TabBar.Group, {
                list: [
                  { id: 'Fruit', name: 'Fruit' },
                  { id: 'Vegetable', name: 'Vegetable', disabled: !0 },
                  { id: 'Animal', name: 'Animal' }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Icon' }),
              (0, t.jsx)(l.TabBar.Group, {
                list: [
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Fruit',
                    name: 'Fruit'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Vegetable',
                    name: 'Vegetable'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Animal',
                    name: 'Animal'
                  }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Children' }),
              (0, t.jsx)(l.TabBar.Group, {
                list: [
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Fruit',
                    name: 'Fruit',
                    description: 'description',
                    content: 'content'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Vegetable',
                    name: 'Vegetable',
                    description: 'description',
                    content: 'content'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Animal',
                    name: 'Animal',
                    description: 'description',
                    content: 'content'
                  }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Size s' }),
              (0, t.jsx)(l.TabBar.Group, {
                list: s,
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                },
                className: 's'
              })
            ]
          })
        })
      }
    },
    69627: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)({ name: 'Vegetable', id: 'Vegetable' }),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        function u(d) {
          _(d)
        }
        return (0, t.jsx)(l.Layout, {
          className: 'full',
          children: (0, t.jsxs)(l.Layout.Main, {
            children: [
              (0, t.jsx)(l.Divider, { children: 'OverFlow' }),
              (0, t.jsx)(l.TabBar.Menus, {
                list: [
                  { id: 'Fruit', name: 'Fruit' },
                  {
                    id: 'Vegetable',
                    name: 'Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable '
                  },
                  { id: 'Animal', name: 'Animal' }
                ],
                value: o,
                onChange: function (m) {
                  console.log(m), u(m)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Disabled' }),
              (0, t.jsx)(l.TabBar.Menus, {
                list: [
                  { id: 'Fruit', name: 'Fruit' },
                  { id: 'Vegetable', name: 'Vegetable', disabled: !0 },
                  { id: 'Animal', name: 'Animal' }
                ],
                value: o,
                onChange: function (m) {
                  console.log(m), u(m)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Icon' }),
              (0, t.jsx)(l.TabBar.Menus, {
                list: [
                  {
                    icon: (0, t.jsx)('i', {
                      className: 'tabbar-menus-tab-icon seeds-icon-file-text'
                    }),
                    id: 'Fruit'
                  },
                  {
                    icon: (0, t.jsx)('i', {
                      className: 'tabbar-menus-tab-icon seeds-icon-file-text'
                    }),
                    id: 'Vegetable'
                  },
                  {
                    icon: function (m) {
                      var c = m.checked
                      return c
                        ? (0, t.jsx)('i', { className: 'tabbar-menus-tab-icon seeds-icon-close' })
                        : (0, t.jsx)('i', { className: 'tabbar-menus-tab-icon seeds-icon-plus' })
                    },
                    id: 'Animal'
                  }
                ],
                value: o,
                onChange: function (m) {
                  console.log(m), u(m)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Children' }),
              (0, t.jsx)(l.TabBar.Menus, {
                list: [
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Fruit',
                    name: 'Fruit',
                    description: 'description',
                    content: 'content'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Vegetable',
                    name: 'Vegetable',
                    description: 'description',
                    content: 'content'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Animal',
                    name: 'Animal',
                    description: 'description',
                    content: 'content'
                  }
                ],
                value: o,
                onChange: function (m) {
                  console.log(m), u(m)
                }
              })
            ]
          })
        })
      }
    },
    50265: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = [
            { id: 'Fruit', name: 'Fruit' },
            { id: 'Vegetable', name: 'Vegetable', disabled: !0 },
            { id: 'Animal', name: 'Animal' }
          ],
          r = (0, n.useState)({ name: 'Vegetable', id: 'Vegetable' }),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        function d(m) {
          u(m)
        }
        return (0, t.jsx)(l.Layout, {
          className: 'full',
          children: (0, t.jsxs)(l.Layout.Main, {
            style: { backgroundColor: 'white' },
            children: [
              (0, t.jsx)(l.Divider, { children: 'OverFlow' }),
              (0, t.jsx)(l.TabBar.Slide, {
                list: [
                  { id: 'Fruit', name: 'Fruit' },
                  {
                    id: 'Vegetable',
                    name: 'Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable '
                  },
                  { id: 'Animal', name: 'Animal' }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Disabled' }),
              (0, t.jsx)(l.TabBar.Slide, {
                list: [
                  { id: 'Fruit', name: 'Fruit' },
                  { id: 'Vegetable', name: 'Vegetable', disabled: !0 },
                  { id: 'Animal', name: 'Animal' }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Icon' }),
              (0, t.jsx)(l.TabBar.Slide, {
                list: [
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Fruit',
                    name: 'Fruit'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Vegetable',
                    name: 'Vegetable'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Animal',
                    name: 'Animal'
                  }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Children' }),
              (0, t.jsx)(l.TabBar.Slide, {
                list: [
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Fruit',
                    name: 'Fruit',
                    description: 'description',
                    content: 'content'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Vegetable',
                    name: 'Vegetable',
                    description: 'description',
                    content: 'content'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Animal',
                    name: 'Animal',
                    description: 'description',
                    content: 'content'
                  }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Size s' }),
              (0, t.jsx)(l.TabBar.Slide, {
                list: s,
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                },
                className: 's'
              })
            ]
          })
        })
      }
    },
    71369: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = [
            { id: 'Fruit', name: 'Fruit' },
            { id: 'Vegetable', name: 'Vegetable' },
            { id: 'Animal', name: 'Animal' }
          ],
          r = (0, n.useState)({ name: 'Vegetable', id: 'Vegetable' }),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        function d(m) {
          u(m)
        }
        return (0, t.jsx)(l.Layout, {
          className: 'full',
          children: (0, t.jsxs)(l.Layout.Main, {
            children: [
              (0, t.jsx)(l.Divider, { children: 'Common' }),
              (0, t.jsx)(l.TabBar.Tabs, {
                list: [
                  { id: 'Fruit', name: 'Fruit' },
                  { id: 'Vegetable', name: 'Vegetable' },
                  { id: 'Animal', name: 'Animal' }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.TabBar.Tabs, {
                list: [
                  { id: 'Fruit', name: 'Fruit' },
                  { id: 'Vegetable', name: 'Vegetable' }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'OverFlow' }),
              (0, t.jsx)(l.TabBar.Tabs, {
                list: [
                  { id: 'Fruit', name: 'Fruit' },
                  {
                    id: 'Vegetable',
                    name: 'Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable Vegetable '
                  },
                  { id: 'Animal', name: 'Animal' }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Disabled' }),
              (0, t.jsx)(l.TabBar.Tabs, {
                list: [
                  { id: 'Fruit', name: 'Fruit' },
                  { id: 'Vegetable', name: 'Vegetable', disabled: !0 },
                  { id: 'Animal', name: 'Animal' }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Icon' }),
              (0, t.jsx)(l.TabBar.Tabs, {
                list: [
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Fruit',
                    name: 'Fruit'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Vegetable',
                    name: 'Vegetable'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Animal',
                    name: 'Animal'
                  }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              }),
              (0, t.jsx)(l.Divider, { children: 'Children' }),
              (0, t.jsx)(l.TabBar.Tabs, {
                list: [
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Fruit',
                    name: 'Fruit',
                    description: 'description',
                    content: 'content'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Vegetable',
                    name: 'Vegetable',
                    description: 'description',
                    content: 'content'
                  },
                  {
                    icon: (0, t.jsx)('i', { className: 'seeds-icon-file-text' }),
                    id: 'Animal',
                    name: 'Animal',
                    description: 'description',
                    content: 'content'
                  }
                ],
                value: _,
                onChange: function (c) {
                  console.log(c), d(c)
                }
              })
            ]
          })
        })
      }
    },
    78421: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        function l() {
          a.Toast.show({
            content: 'show toast',
            onVisibleChange: function (s) {
              console.log('visible:', s)
            }
          }),
            setTimeout(function () {
              a.Toast.hide()
            }, 500)
        }
        return (0, n.jsxs)(a.Layout, {
          className: 'full',
          children: [
            (0, n.jsx)(a.Layout.Header, { className: 'text-center', children: 'Toast.hide' }),
            (0, n.jsx)(a.Layout.Main, {
              className: 'bg-white',
              children: (0, n.jsx)('div', {
                className: 'demo-title',
                onClick: l,
                children: 'Toast visible toggle'
              })
            })
          ]
        })
      }
    },
    28517: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        function l() {
          var t = a.Toast.show({
            style: { backgroundColor: 'blue', color: 'green' },
            maskProps: { style: { backgroundColor: 'red' } },
            position: 'middle',
            content: 'show toast',
            duration: 2e3,
            maskClickable: !1,
            onVisibleChange: function (r) {
              console.log('custom visible:', r)
            }
          })
          console.log(t),
            setTimeout(function () {
              a.Toast.show({
                content: 'hh',
                onVisibleChange: function (r) {
                  console.log('hh visible:', r)
                }
              })
            }, 1e3)
        }
        return (0, n.jsxs)(a.Layout, {
          className: 'full',
          children: [
            (0, n.jsx)(a.Layout.Header, { className: 'text-center', children: 'Toast.show' }),
            (0, n.jsx)(a.Layout.Main, {
              className: 'bg-white',
              children: (0, n.jsx)('div', {
                className: 'demo-title',
                onClick: l,
                children: 'Toast visible toggle'
              })
            })
          ]
        })
      }
    },
    22555: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)(null),
          r = a()(s, 2),
          o = r[0],
          _ = r[1],
          u = (0, n.useState)(null),
          d = a()(u, 2),
          m = d[0],
          c = d[1],
          g = (0, n.useState)(null),
          v = a()(g, 2),
          C = v[0],
          O = v[1],
          p = (0, n.useState)(''),
          M = a()(p, 2),
          P = M[0],
          U = M[1],
          L = (0, n.useState)(!1),
          B = a()(L, 2),
          b = B[0],
          A = B[1],
          T = (0, n.useState)(!1),
          j = a()(T, 2),
          y = j[0],
          E = j[1],
          x = (0, n.useRef)(null)
        return (0, t.jsxs)(l.Layout, {
          className: 'full',
          children: [
            (0, t.jsx)(l.Layout.Header, {
              children: (0, t.jsx)(l.NavBar, {
                children: (0, t.jsx)(l.NavBar.Title, { children: 'ToolBar' })
              })
            }),
            (0, t.jsxs)(l.Layout.Main, {
              ref: function (I) {
                I != null && I.rootDOM && _((I == null ? void 0 : I.rootDOM) || null)
              },
              children: [
                (0, t.jsx)(l.Divider, { children: 'DateRange' }),
                (0, t.jsx)('div', {
                  className: 'toolbar-bg',
                  children: (0, t.jsxs)(l.ToolBar, {
                    children: [
                      (0, t.jsx)(l.ToolBar.DateRange, {
                        arrow: (0, t.jsx)('div', { children: '^' }),
                        portal: o,
                        title: m ? void 0 : 'DateRange',
                        value: m,
                        onChange: c
                      }),
                      (0, t.jsx)(l.ToolBar.DateRange, {
                        portal: o,
                        title: m ? void 0 : 'DateRange',
                        format: 'MM-DD',
                        value: m,
                        onChange: c
                      }),
                      (0, t.jsx)(l.ToolBar.DateRange, {
                        portal: o,
                        className: 'toolbar-button',
                        title: m ? void 0 : 'DateRange',
                        value: m,
                        onChange: c
                      })
                    ]
                  })
                }),
                (0, t.jsx)(l.Divider, { children: 'List' }),
                (0, t.jsx)('div', {
                  className: 'toolbar-bg',
                  children: (0, t.jsxs)(l.ToolBar, {
                    children: [
                      (0, t.jsx)(l.ToolBar.List, {
                        portal: o,
                        title: C ? void 0 : 'List',
                        value: C,
                        onChange: O,
                        list: [
                          { disabled: !0, id: '', name: 'Disabled' },
                          { id: '1', name: 'Option1' },
                          { id: '2', name: 'Option2' }
                        ]
                      }),
                      (0, t.jsx)(l.ToolBar.List, {
                        portal: o,
                        className: 'toolbar-button',
                        title: C ? void 0 : 'List',
                        value: C,
                        onChange: O,
                        list: [
                          { disabled: !0, id: '', name: 'Disabled' },
                          { id: '1', name: 'Option1' },
                          { id: '2', name: 'Option2' }
                        ]
                      })
                    ]
                  })
                }),
                (0, t.jsx)(l.Divider, { children: 'Button' }),
                (0, t.jsx)('div', {
                  className: 'toolbar-bg',
                  children: (0, t.jsxs)(l.ToolBar, {
                    children: [
                      (0, t.jsx)(l.ToolBar.Button, {
                        shape: 'square',
                        onClick: function () {
                          return console.log(1)
                        },
                        children: (0, t.jsx)(l.Icon, {
                          className: 'seeds-icons seeds-icon-barcode'
                        })
                      }),
                      (0, t.jsxs)(l.Space.Compact, {
                        children: [
                          (0, t.jsx)(l.ToolBar.Button, { children: '1' }),
                          (0, t.jsx)(l.ToolBar.Button, { children: '2' }),
                          (0, t.jsx)(l.ToolBar.Button, { children: '3' })
                        ]
                      }),
                      (0, t.jsxs)(l.Space.Compact, {
                        children: [
                          (0, t.jsx)(l.ToolBar.List, {
                            portal: o,
                            arrow: null,
                            title: function (I) {
                              var R = I.active
                              return (0, t.jsx)(l.ToolBar.Button, {
                                shape: 'square',
                                className: R ? 'active' : '',
                                children: (0, t.jsx)(l.Icon, {
                                  className: 'seeds-icons seeds-icon-three-dots'
                                })
                              })
                            },
                            maskProps: { style: { zIndex: 99 } },
                            value: C,
                            onChange: O,
                            list: [
                              { id: 'desc', name: 'Desc' },
                              { id: 'asc', name: 'Asc' }
                            ]
                          }),
                          (0, t.jsx)(l.ToolBar.Button, {
                            shape: 'square',
                            onClick: function () {
                              return console.log(1)
                            },
                            children: (0, t.jsx)(l.Icon, {
                              className: 'seeds-icons seeds-icon-filter-menu'
                            })
                          })
                        ]
                      })
                    ]
                  })
                }),
                (0, t.jsx)(l.Divider, { children: 'Filter' }),
                (0, t.jsx)('div', {
                  className: 'toolbar-bg',
                  children: (0, t.jsxs)(l.ToolBar, {
                    children: [
                      (0, t.jsx)(l.ToolBar.Button, {
                        onClick: function () {
                          var I
                          ;(I = x.current) === null || I === void 0 || I.open()
                        },
                        children: 'Click to toggle filter modal visible'
                      }),
                      (0, t.jsx)(l.ToolBar.Filter, {
                        active: !0,
                        icon: (0, t.jsx)(l.Icon, {
                          className: 'toolbar-icon seeds-icons seeds-icon-search'
                        }),
                        onReset: function () {
                          console.log('reset')
                        },
                        onOk: function () {
                          console.log('submit')
                        },
                        children: (0, t.jsx)('div', {
                          className: 'bg-white',
                          style: { height: '300px' },
                          children: 'Modal Content'
                        })
                      }),
                      (0, t.jsx)(l.ToolBar.Filter, {
                        ref: x,
                        className: 'toolbar-button',
                        onReset: function () {
                          console.log('reset')
                        },
                        onOk: function () {
                          console.log('submit')
                        },
                        children: (0, t.jsx)('div', {
                          className: 'bg-white',
                          style: { height: '300px' },
                          children: 'Modal Content'
                        })
                      })
                    ]
                  })
                }),
                (0, t.jsx)(l.Divider, { children: 'SearchBar' }),
                (0, t.jsx)('div', {
                  className: 'toolbar-bg',
                  children: (0, t.jsx)(l.ToolBar, {
                    children: (0, t.jsx)(l.ToolBar.Search, {
                      value: P,
                      onSearch: function (I) {
                        console.log('search:', I)
                      }
                    })
                  })
                }),
                (0, t.jsx)(l.Divider, { children: 'SearchBar active' }),
                (0, t.jsx)('div', {
                  className: 'toolbar-bg',
                  children: (0, t.jsxs)(l.ToolBar, {
                    children: [
                      (0, t.jsx)(l.ToolBar.Search, {
                        value: P,
                        readOnly: !0,
                        onClick: function () {
                          A(!0)
                        }
                      }),
                      b &&
                        (0, t.jsx)(l.ToolBar.SearchActive, {
                          value: P,
                          onSearch: function (I) {
                            U(I), console.log('search keyword:' + I), A(!1)
                          },
                          onBlur: function () {
                            A(!1)
                          }
                        })
                    ]
                  })
                }),
                (0, t.jsx)(l.Divider, { children: 'SearchBar Invert active' }),
                (0, t.jsx)('div', {
                  className: 'toolbar-bg invert',
                  children: (0, t.jsxs)(l.ToolBar, {
                    invert: !0,
                    children: [
                      (0, t.jsx)(l.ToolBar.Search, {
                        value: P,
                        readOnly: !0,
                        onClick: function () {
                          E(!0)
                        }
                      }),
                      y &&
                        (0, t.jsx)(l.ToolBar.SearchActive, {
                          value: P,
                          onSearch: function (I) {
                            U(I), console.log('search keyword:' + I), E(!1)
                          },
                          onBlur: function () {
                            E(!1)
                          }
                        })
                    ]
                  })
                })
              ]
            })
          ]
        })
      }
    },
    5778: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)(a.Tooltip, {
            content: (0, n.jsx)('p', { children: '123412341234' }),
            onVisibleChange: function (t) {
              console.log('visible:', t)
            },
            children: (0, n.jsx)('div', { style: { margin: 100 }, children: '\u70B9\u51FB' })
          })
        })
      }
    },
    2568: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useRef)(null),
          r = (0, n.useState)([
            { id: '1', name: '1' },
            { id: '2', name: '2' }
          ]),
          o = a()(r, 2),
          _ = o[0],
          u = o[1]
        return (0, t.jsxs)(l.Layout, {
          className: 'full',
          children: [
            (0, t.jsx)(l.Layout.Header, { className: 'text-center', children: 'Transfer.Combo' }),
            (0, t.jsxs)(l.Layout.Main, {
              className: 'bg-white',
              children: [
                (0, t.jsx)('div', { className: 'demo-title', children: 'Transfer Combo' }),
                (0, t.jsx)(l.Transfer.Combo, {
                  ref: s,
                  className: 'border-b',
                  placeholder: 'Select',
                  allowClear: !0,
                  list: [
                    { id: '1', name: '1' },
                    { id: '2', name: '2' },
                    { id: '3', name: '3' },
                    { id: '4', name: '4' },
                    { id: '5', name: '5' },
                    { id: '6', name: '6' },
                    { id: '7', name: '7' },
                    { id: '8', name: '8' },
                    { id: '9', name: '9' },
                    { id: '10', name: '10' },
                    { id: '11', name: '11' },
                    { id: '12', name: '12' },
                    { id: '13', name: '13' },
                    { id: '14', name: '14' },
                    { id: '15', name: '15' },
                    { id: '16', name: '16' },
                    { id: '17', name: '17' },
                    { id: '18', name: '18' },
                    { id: '19', name: '19' }
                  ],
                  value: _,
                  onChange: function (m) {
                    console.log(m), u(m)
                  },
                  modalProps: {
                    footer: function (m) {
                      var c = m.value,
                        g = m.triggerOk
                      return (0, t.jsx)(l.Layout.Footer, {
                        onClick: function () {
                          g()
                        },
                        children: (0, t.jsx)(l.Button, {
                          className: 'listpicker-footer-submit primary',
                          children: '\u786E\u5B9A'
                        })
                      })
                    },
                    mainProps: {
                      titles: { selected: '\u6807\u98981', unSelected: '\u6807\u98982' }
                    }
                  }
                })
              ]
            })
          ]
        })
      }
    },
    81801: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)([
            { id: '1', name: '1' },
            { id: '2', name: '2' }
          ]),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsxs)(l.Layout, {
          className: 'full',
          children: [
            (0, t.jsx)(l.Layout.Header, { className: 'text-center', children: 'Transfer.Main' }),
            (0, t.jsx)('div', { className: 'demo-title', children: 'Transfer List' }),
            (0, t.jsx)(l.Transfer.Main, {
              list: [
                { id: '1', name: '1' },
                { id: '2', name: '2' },
                { id: '3', name: '3' },
                { id: '4', name: '4' },
                { id: '5', name: '5' },
                { id: '6', name: '6' }
              ],
              value: o,
              titles: ['\u6807\u98981', '\u6807\u98982'],
              onChange: function (d) {
                console.log(d), _(d)
              }
            })
          ]
        })
      }
    },
    29239: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = (0, n.useState)([
            { id: '1', name: '1' },
            { id: '2', name: '2' }
          ]),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsxs)(l.Layout, {
          className: 'full',
          children: [
            (0, t.jsx)(l.Layout.Header, { className: 'text-center', children: 'Transfer.Modal' }),
            (0, t.jsxs)(l.Layout.Main, {
              className: 'bg-white',
              children: [
                (0, t.jsx)('div', { className: 'demo-title', children: 'Transfer Modal' }),
                (0, t.jsx)(l.Transfer.Modal, {
                  visible: !0,
                  list: [
                    { id: '1', name: '1' },
                    { id: '2', name: '2' },
                    { id: '3', name: '3' },
                    { id: '4', name: '4' },
                    { id: '5', name: '5' },
                    { id: '6', name: '6' }
                  ],
                  value: o,
                  titles: ['\u6807\u98981', '\u6807\u98982'],
                  onChange: function (d) {
                    console.log('newValue:', d), _(d)
                  }
                })
              ]
            })
          ]
        })
      }
    },
    76287: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              a.Typography.getDisplayValue([
                { id: 'option1', name: 'Option1' },
                { id: 'option2', name: 'Option2' }
              ]),
              (0, n.jsx)(a.Typography.Amount, { currencySymbol: '\xA5', children: '1111111.11111' })
            ]
          })
        })
      }
    },
    80985: function (f, i, e) {
      e.r(i)
      var h = e(17061),
        a = e.n(h),
        n = e(17156),
        l = e.n(n),
        t = e(27424),
        s = e.n(t),
        r = e(67294),
        o = e(49886),
        _ = e(88972),
        u = e(85893)
      i.default = function () {
        var d = (0, r.useRef)(null),
          m = (0, r.useState)([
            {
              name: '1',
              src: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
              status: 'fail'
            },
            {
              name: '2',
              src: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
            }
          ]),
          c = s()(m, 2),
          g = c[0],
          v = c[1],
          C = (0, r.useState)([]),
          O = s()(C, 2),
          p = O[0],
          M = O[1]
        ;(0, r.useEffect)(function () {
          o.Bridge.ready(function () {
            console.log('\u52A0\u8F7D\u6865\u63A5')
          })
        }, [])
        function P() {
          return U.apply(this, arguments)
        }
        function U() {
          return (
            (U = l()(
              a()().mark(function B() {
                var b, A
                return a()().wrap(function (j) {
                  for (;;)
                    switch ((j.prev = j.next)) {
                      case 0:
                        if (((b = o.Upload.validateListStatus(g)), b === !0)) {
                          j.next = 8
                          break
                        }
                        return o.Toast.show({ content: b }), (j.next = 5), d.current.uploadList()
                      case 5:
                        return (
                          (A = j.sent),
                          console.log('\u4E0A\u4F20\u7ED3\u679C\uFF1A', A),
                          j.abrupt('return')
                        )
                      case 8:
                      case 'end':
                        return j.stop()
                    }
                }, B)
              })
            )),
            U.apply(this, arguments)
          )
        }
        function L() {
          return new Promise(function (B) {
            setTimeout(function () {
              B(!0)
            }, 2e3)
          })
        }
        return (0, u.jsxs)(o.Layout, {
          className: 'full',
          children: [
            (0, u.jsxs)(o.Layout.Main, {
              children: [
                (0, u.jsx)(o.Divider, { children: 'Default Upload' }),
                (0, u.jsx)(o.Upload, {
                  ref: d,
                  reUpload: !1,
                  allowChoose: !0,
                  allowClear: !0,
                  uploadPosition: 'start',
                  maxSize: 300 * 1024 * 1024,
                  list: g,
                  count: 9,
                  onFileChange: (function () {
                    var B = l()(
                      a()().mark(function b(A) {
                        var T, j, y, E
                        return a()().wrap(function (D) {
                          for (;;)
                            switch ((D.prev = D.next)) {
                              case 0:
                                return (
                                  (T = A.fileName),
                                  (j = A.fileSize),
                                  (y = A.fileURL),
                                  (E = A.fileData),
                                  (D.next = 3),
                                  L()
                                )
                              case 3:
                                return D.abrupt('return', [
                                  {
                                    sourceType: 'local',
                                    status: 'choose',
                                    name: T,
                                    size: j,
                                    uploadDir: 'uploadDir/202504',
                                    src: y,
                                    path: '',
                                    fileData: E
                                  }
                                ])
                              case 4:
                              case 'end':
                                return D.stop()
                            }
                        }, b)
                      })
                    )
                    return function (b) {
                      return B.apply(this, arguments)
                    }
                  })(),
                  onChange: function (b) {
                    console.log('\u4FEE\u6539:', b), v(b)
                  },
                  onUpload: _.default
                }),
                (0, u.jsx)(o.Divider, { children: 'Custom Upload' }),
                (0, u.jsx)(o.Upload, {
                  className: 'custom-upload',
                  reUpload: !1,
                  allowChoose: !0,
                  allowClear: !0,
                  uploadPosition: 'start',
                  maxSize: 300 * 1024 * 1024,
                  list: p,
                  count: 9,
                  onFileChange: function (b) {
                    var A = b.fileName,
                      T = b.fileSize,
                      j = b.fileURL,
                      y = b.fileData
                    return [
                      {
                        sourceType: 'local',
                        status: 'choose',
                        name: A,
                        size: T,
                        uploadDir: 'uploadDir/202504',
                        src: j,
                        path: '',
                        fileData: y
                      }
                    ]
                  },
                  onChange: function (b) {
                    console.log('\u4FEE\u6539:', b), M(b)
                  },
                  onUpload: _.default,
                  children:
                    Array.isArray(p) && p.length
                      ? (0, u.jsx)(o.Upload.List, {
                          list: p,
                          onPreview: function () {
                            return console.log('preview'), !1
                          }
                        })
                      : 'Custom Upload Render'
                })
              ]
            }),
            (0, u.jsx)(o.Layout.Footer, {
              children: (0, u.jsx)(o.Button, {
                className: 'flex primary',
                onClick: P,
                children: 'Sync Upload'
              })
            })
          ]
        })
      }
    },
    11134: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        var l = (0, h.useRef)(null)
        return (0, n.jsxs)(a.Layout, {
          className: 'full',
          children: [
            (0, n.jsx)(a.Layout.Main, {
              children: (0, n.jsx)(a.VideoPlayer, {
                ref: l,
                poster: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                src: 'https://player.alicdn.com/video/aliyunmedia.mp4',
                autoPlay: !1,
                header: (0, n.jsx)('div', {
                  className: 'videoplayer-header-close',
                  onClick: function () {
                    alert('close')
                  }
                })
              })
            }),
            (0, n.jsxs)(a.Layout.Footer, {
              children: [
                (0, n.jsx)(a.Button, {
                  onClick: function () {
                    l.current.play()
                  },
                  children: 'Play'
                }),
                (0, n.jsx)(a.Button, {
                  onClick: function () {
                    l.current.pause()
                  },
                  children: 'Pause'
                })
              ]
            })
          ]
        })
      }
    },
    24430: function (f, i, e) {
      e.r(i),
        e.d(i, {
          default: function () {
            return o
          }
        })
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(88644),
        s = e.p + 'static/mock.180e64a6.jpg',
        r = e(85893),
        o = function () {
          var _ = (0, n.useState)([]),
            u = a()(_, 2),
            d = u[0],
            m = u[1],
            c = (0, n.useState)(!0),
            g = a()(c, 2),
            v = g[0],
            C = g[1],
            O = (0, n.useState)({}),
            p = a()(O, 2),
            M = p[0],
            P = p[1]
          function U() {
            m(T(t.default.data.skuList))
          }
          function L() {
            var y = t.default.data.skuList.filter(function (E) {
              return E.skuId === 'rio_qingshuang_qingputao_sleencan330ml'
            })
            m(T(y))
          }
          function B() {
            var y = t.default.data.skuList.filter(function (E) {
              return E.skuId === 'posm_rio_qinshuang_jiageqian'
            })
            m(T(y))
          }
          function b() {
            C(!v)
          }
          function A() {
            P({
              shapeAttributes: {
                style: 'stroke:blue;',
                className: 'blue',
                id: 'blue',
                custom: '\u81EA\u5B9A\u4E49blue'
              }
            })
          }
          function T(y) {
            return y.map(function (E) {
              return {
                polygon: [
                  [E.x2, E.y1],
                  [E.x1, E.y1],
                  [E.x1, E.y2],
                  [E.x2, E.y2]
                ],
                style: 'stroke:red;',
                className: 'default',
                id: 'default',
                custom: '\u81EA\u5B9A\u4E49\u5C5E\u6027'
              }
            })
          }
          function j(y, E) {
            console.log(y, E)
          }
          return (0, r.jsxs)('div', {
            id: 'root',
            className: 'position-relative',
            style: { height: '300px' },
            children: [
              (0, r.jsx)(l.Vott, {
                style: { height: '469px' },
                data: d,
                readOnly: v,
                src: s,
                params: M,
                onChange: j,
                preview: !0
              }),
              (0, r.jsxs)(l.Button, {
                className: 'flex danger',
                onClick: b,
                children: [
                  '\u53EA\u8BFB\u4E0E\u7ED8\u5236(',
                  v ? '\u53EA\u8BFB' : '\u7ED8\u5236',
                  ')'
                ]
              }),
              (0, r.jsx)(l.Button, {
                className: 'flex link',
                onClick: A,
                children: '\u4FEE\u6539\u6807\u6CE8\u989C\u8272\u4E3A\u84DD\u8272'
              }),
              (0, r.jsx)(l.Button, {
                className: 'flex primary',
                onClick: U,
                children: '\u5168\u90E8\u6807\u6CE8'
              }),
              (0, r.jsx)(l.Button, {
                className: 'flex success',
                onClick: L,
                children: '\u6807\u6CE8\u6E05\u723D\u9633\u5149\u73AB\u7470\u8461\u8404'
              }),
              (0, r.jsx)(l.Button, {
                className: 'flex danger',
                onClick: B,
                children:
                  '\u6807\u6CE8\u6E05\u723D\u9633\u5149\u73AB\u7470\u8461\u8404\u4EF7\u683C\u7B7E'
              })
            ]
          })
        }
    },
    23985: function (f, i, e) {
      e.r(i)
      var h = e(17061),
        a = e.n(h),
        n = e(17156),
        l = e.n(n),
        t = e(27424),
        s = e.n(t),
        r = e(67294),
        o = e(96486),
        _ = e.n(o),
        u = e(49886),
        d = e(33242),
        m = e(5565),
        c = e(85893),
        g = u.LocaleUtil.locale,
        v = u.Typography.Form,
        C = v.Item,
        O = v.Label,
        p = v.Main,
        M = function () {
          var U,
            L,
            B,
            b = (0, r.useState)(null),
            A = s()(b, 2),
            T = A[0],
            j = A[1]
          ;(0, r.useEffect)(function () {
            y()
          }, [])
          function y() {
            return E.apply(this, arguments)
          }
          function E() {
            return (
              (E = l()(
                a()().mark(function I() {
                  var R
                  return a()().wrap(function (S) {
                    for (;;)
                      switch ((S.prev = S.next)) {
                        case 0:
                          return (S.next = 2), (0, d.queryData)()
                        case 2:
                          ;(R = S.sent), j(R)
                        case 4:
                        case 'end':
                          return S.stop()
                      }
                  }, I)
                })
              )),
              E.apply(this, arguments)
            )
          }
          function x() {
            return D.apply(this, arguments)
          }
          function D() {
            return (
              (D = l()(
                a()().mark(function I() {
                  var R
                  return a()().wrap(function (S) {
                    for (;;)
                      switch ((S.prev = S.next)) {
                        case 0:
                          return (S.next = 2), (0, d.approveData)()
                        case 2:
                          ;(R = S.sent),
                            R.code === '1'
                              ? u.Toast.show({
                                  content: g('\u5BA1\u6279\u901A\u8FC7!'),
                                  onVisibleChange: function (K) {}
                                })
                              : u.Toast.show({
                                  content: R.message || g('\u5BA1\u6279\u5931\u8D25!')
                                })
                        case 4:
                        case 'end':
                          return S.stop()
                      }
                  }, I)
                })
              )),
              D.apply(this, arguments)
            )
          }
          return (0, c.jsxs)(u.Layout, {
            className: 'full',
            children: [
              (T == null ? void 0 : T.data) &&
                (0, c.jsxs)(u.Layout.Main, {
                  children: [
                    (0, c.jsxs)(u.Card, {
                      children: [
                        (0, c.jsx)(u.Divider, { children: 'Horizontal Layout' }),
                        (0, c.jsxs)(u.Typography.Form, {
                          style: { marginLeft: '12px' },
                          children: [
                            (0, c.jsxs)(C, {
                              children: [
                                (0, c.jsx)(O, {
                                  help: 'Help info',
                                  ellipsis: { rows: 1, expandable: !0 },
                                  children: g(
                                    'Input Overflow Label, It is very very very long,  It is really very very very long'
                                  )
                                }),
                                (0, c.jsx)(p, {
                                  ellipsis: { rows: 2, expandable: !0 },
                                  children: g(
                                    'Value Overflow Main, It is very very very long,  It is really very very very long'
                                  )
                                })
                              ]
                            }),
                            (0, c.jsxs)(C, {
                              children: [
                                (0, c.jsx)(O, {
                                  ellipsis: { rows: 1, expandable: !0 },
                                  children: g('Select')
                                }),
                                (0, c.jsx)(p, {
                                  children: u.Typography.getDisplayValue(
                                    (U = data) === null || U === void 0 ? void 0 : U.select
                                  )
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                    (0, c.jsxs)(u.Card, {
                      children: [
                        (0, c.jsx)(u.Divider, { children: 'Vertical Layout' }),
                        (0, c.jsxs)(u.Typography.Form, {
                          layout: 'vertical',
                          style: { marginLeft: '12px' },
                          children: [
                            (0, c.jsxs)(C, {
                              children: [
                                (0, c.jsx)(O, { children: g('Input') }),
                                (0, c.jsx)(p, {
                                  children: u.Typography.getDisplayValue(
                                    (L = data) === null || L === void 0 ? void 0 : L.input
                                  )
                                })
                              ]
                            }),
                            (0, c.jsxs)(C, {
                              children: [
                                (0, c.jsx)(O, { children: g('Select') }),
                                (0, c.jsx)(p, {
                                  children: u.Typography.getDisplayValue(
                                    (B = data) === null || B === void 0 ? void 0 : B.select
                                  )
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
              (0, c.jsx)(m.default, { onOk: x }),
              (T == null ? void 0 : T.status) &&
                (0, c.jsx)(u.Result, { className: 'full', status: T.status, title: T.message })
            ]
          })
        }
      i.default = M
    },
    42239: function (f, i, e) {
      e.r(i)
      var h = e(17061),
        a = e.n(h),
        n = e(17156),
        l = e.n(n),
        t = e(27424),
        s = e.n(t),
        r = e(67294),
        o = e(49886),
        _ = e(5548),
        u = e(49042),
        d = e(85893),
        m = o.LocaleUtil.locale,
        c = function () {
          var v = o.Form.useForm(),
            C = s()(v, 1),
            O = C[0],
            p = (0, r.useRef)(null),
            M = (0, r.useRef)('' + Date.now()),
            P = (0, r.useState)(null),
            U = s()(P, 2),
            L = U[0],
            B = U[1]
          ;(0, r.useEffect)(function () {
            b()
          }, [])
          function b() {
            return A.apply(this, arguments)
          }
          function A() {
            return (
              (A = l()(
                a()().mark(function y() {
                  var E
                  return a()().wrap(function (D) {
                    for (;;)
                      switch ((D.prev = D.next)) {
                        case 0:
                          return (D.next = 2), (0, _.queryData)()
                        case 2:
                          ;(E = D.sent),
                            B(E),
                            E != null && E.formData && O.setFieldsValue(E.formData)
                        case 5:
                        case 'end':
                          return D.stop()
                      }
                  }, y)
                })
              )),
              A.apply(this, arguments)
            )
          }
          function T() {
            return j.apply(this, arguments)
          }
          function j() {
            return (
              (j = l()(
                a()().mark(function y() {
                  var E, x, D
                  return a()().wrap(function (R) {
                    for (;;)
                      switch ((R.prev = R.next)) {
                        case 0:
                          return (R.next = 2), (0, _.validateData)({ form: O })
                        case 2:
                          if (((x = R.sent), x)) {
                            R.next = 5
                            break
                          }
                          return R.abrupt('return')
                        case 5:
                          return (
                            (R.next = 7),
                            (0, _.saveData)({
                              baseData:
                                D == null || (E = D.data) === null || E === void 0
                                  ? void 0
                                  : E.baseData,
                              data: x,
                              token: M.current
                            })
                          )
                        case 7:
                          ;(D = R.sent),
                            D.code === '1'
                              ? o.Toast.show({
                                  content: m('\u63D0\u4EA4\u6210\u529F!'),
                                  onVisibleChange: function (S) {}
                                })
                              : (D.code === '2' && (M.current = '' + Date.now()),
                                o.Toast.show({
                                  content: D.message || m('\u63D0\u4EA4\u5931\u8D25!')
                                }))
                        case 9:
                        case 'end':
                          return R.stop()
                      }
                  }, y)
                })
              )),
              j.apply(this, arguments)
            )
          }
          return (0, d.jsxs)(o.Layout, {
            className: 'full',
            children: [
              (0, d.jsx)(o.Layout.Main, {
                onScroll: function (E) {
                  p.current && window.clearTimeout(p.current),
                    (p.current = setTimeout(function () {
                      var x
                      _.cacheConfig !== null &&
                        _.cacheConfig !== void 0 &&
                        _.cacheConfig.name &&
                        typeof (E == null || (x = E.target) === null || x === void 0
                          ? void 0
                          : x.scrollTop) == 'number' &&
                        o.Storage.setCache(
                          ''.concat(_.cacheConfig.name, ':scrollTop'),
                          E.target.scrollTop,
                          {
                            persist:
                              _.cacheConfig === null || _.cacheConfig === void 0
                                ? void 0
                                : _.cacheConfig.persist
                          }
                        )
                    }, 500))
                },
                children: (0, d.jsxs)(o.Form, {
                  form: O,
                  style: { marginLeft: '12px' },
                  virtual: !0,
                  onValuesChange: function (E) {
                    window.formCacheTimeout && window.clearTimeout(window.formCacheTimeout),
                      (window.formCacheTimeout = setTimeout(function () {
                        o.Storage.setCache(''.concat(_.cacheConfig.name, ':data}'), E, {
                          persist: _.cacheConfig.persist
                        })
                      }, 1e3))
                  },
                  children: [
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'input',
                      label: m('Input'),
                      rules: [{ required: !0, message: m('Input cannot be empty') }],
                      children: (0, d.jsx)(o.Input.Text, {
                        placeholder: m('Please input'),
                        maxLength: 50
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 97,
                      name: 'textarea',
                      maxLength: 150,
                      label: m('Textarea'),
                      extra: function (E) {
                        var x = E.value
                        return (0, d.jsx)('div', {
                          className: 'text-right',
                          children: ''.concat((x == null ? void 0 : x.length) || '0', ' / 150')
                        })
                      },
                      children: (0, d.jsx)(o.Input.Textarea, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'autoFit',
                      label: m('Auto fit'),
                      children: (0, d.jsx)(o.Input.AutoFit, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'select',
                      label: m('Select'),
                      children: (0, d.jsx)(o.Select.Combo, {
                        placeholder: m('Please select'),
                        list: [
                          { id: '1', name: 'Option1' },
                          { id: '2', name: 'Option2' }
                        ],
                        allowClear: !0,
                        clear: function (E) {
                          var x = E.clearable,
                            D = E.triggerClear
                          return x
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: D })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'picker',
                      label: m('Picker'),
                      children: (0, d.jsx)(o.Picker.Combo, {
                        placeholder: m('Please select'),
                        list: [
                          { id: '1', name: 'Option1' },
                          { id: '2', name: 'Option2' }
                        ],
                        allowClear: !0,
                        clear: function (E) {
                          var x = E.clearable,
                            D = E.triggerClear
                          return x
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: D })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 50,
                      name: 'switch',
                      valuePropName: 'checked',
                      label: m('Switch'),
                      children: (0, d.jsx)(o.Switch, {})
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 74,
                      name: 'checkbox',
                      label: m('Checkbox'),
                      children: (0, d.jsx)(o.Checkbox.Group, {
                        placeholder: m('Please select'),
                        list: [
                          { id: '1', name: 'Option1' },
                          { id: '2', name: 'Option2' }
                        ],
                        allowClear: !0
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 74,
                      name: 'radio',
                      label: m('Radio'),
                      children: (0, d.jsx)(o.Radio.Group, {
                        placeholder: m('Please select'),
                        list: [
                          { id: '1', name: 'Option1' },
                          { id: '2', name: 'Option2' }
                        ],
                        allowClear: !0
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 102,
                      name: 'selector',
                      label: m('Selector'),
                      children: (0, d.jsx)(o.Selector, {
                        placeholder: m('Please select'),
                        list: [
                          { id: '1', name: 'Option1' },
                          { id: '2', name: 'Option2' },
                          { id: '3', name: 'Option3' },
                          { id: '4', name: 'Option4' }
                        ],
                        allowClear: !0
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'number',
                      label: m('Number'),
                      children: (0, d.jsx)(o.Input.Number, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 48,
                      name: 'numberBox',
                      label: m('Number box'),
                      rules: [{ required: !0, message: m('Number box can not empty') }],
                      children: (0, d.jsx)(o.Input.NumberBox, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 72,
                      name: 'password',
                      label: m('Password'),
                      extra: function (E) {
                        var x = E.value
                        return (0, d.jsx)(o.Input.PasswordStrength, { value: x })
                      },
                      children: (0, d.jsx)(o.Input.Password, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 55,
                      name: 'range',
                      label: m('Range'),
                      children: (0, d.jsx)(o.Input.Range, {})
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 55,
                      name: 'rate',
                      label: m('Rate'),
                      children: (0, d.jsx)(o.Input.Rate, {})
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'tel',
                      label: m('Tel'),
                      children: (0, d.jsx)(o.Input.Tel, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'url',
                      label: m('Url'),
                      children: (0, d.jsx)(o.Input.Url, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'datetime',
                      label: m('Datetime'),
                      children: (0, d.jsx)(o.DatePicker.Combo, {
                        type: 'datetime',
                        placeholder: m('Please select'),
                        allowClear: !0,
                        clear: function (E) {
                          var x = E.clearable,
                            D = E.triggerClear
                          return x
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: D })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'date',
                      label: m('Date'),
                      children: (0, d.jsx)(o.DatePicker.Combo, {
                        placeholder: m('Please select'),
                        allowClear: !0,
                        clear: function (E) {
                          var x = E.clearable,
                            D = E.triggerClear
                          return x
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: D })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'time',
                      label: m('Time'),
                      children: (0, d.jsx)(o.DatePicker.Combo, {
                        type: 'time',
                        placeholder: m('Please select'),
                        allowClear: !0,
                        clear: function (E) {
                          var x = E.clearable,
                            D = E.triggerClear
                          return x
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: D })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'dateRange',
                      label: m('Date range'),
                      children: (0, d.jsx)(o.DatePicker.RangeCombo, {
                        placeholder: m('Please select'),
                        allowClear: !0,
                        clear: function (E) {
                          var x = E.clearable,
                            D = E.triggerClear
                          return x
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: D })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'district',
                      label: m('District'),
                      children: (0, d.jsx)(o.Cascader.DistrictCombo, {
                        placeholder: m('Please select'),
                        allowClear: !0,
                        clear: function (E) {
                          var x = E.clearable,
                            D = E.triggerClear
                          return x
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: D })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 44,
                      name: 'location',
                      label: m('Location'),
                      children: (0, d.jsx)(o.Location.Combo, {
                        type: 'gcj02',
                        config: { key: '', type: 'bmap' },
                        placeholder: m('Please select'),
                        allowClear: !0,
                        previewVisible: !0,
                        chooseVisible: !0,
                        clear: function (E) {
                          var x = E.clearable,
                            D = E.triggerClear
                          return x ? (0, d.jsx)(o.Input.IconClear, { onClick: D }) : null
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 52,
                      name: 'signature',
                      label: m('Signature'),
                      children: (0, d.jsx)(o.Signature.Combo, {})
                    })
                  ]
                })
              }),
              (0, d.jsx)(u.default, { onOk: T }),
              (L == null ? void 0 : L.message) &&
                (0, d.jsx)(o.Result, { className: 'full', status: L.status, title: L.message })
            ]
          })
        }
      i.default = c
    },
    99297: function (f, i, e) {
      e.r(i)
      var h = e(38416),
        a = e.n(h),
        n = e(17061),
        l = e.n(n),
        t = e(17156),
        s = e.n(t),
        r = e(27424),
        o = e.n(r),
        _ = e(67294),
        u = e(49886),
        d = e(5548),
        m = e(49042),
        c = e(85893),
        g = u.LocaleUtil.locale,
        v = function () {
          var O = u.Form.useForm(),
            p = o()(O, 1),
            M = p[0],
            P = (0, _.useRef)('' + Date.now()),
            U = (0, _.useState)(null),
            L = o()(U, 2),
            B = L[0],
            b = L[1]
          ;(0, _.useEffect)(function () {
            A()
          }, [])
          function A() {
            return T.apply(this, arguments)
          }
          function T() {
            return (
              (T = s()(
                l()().mark(function E() {
                  var x
                  return l()().wrap(function (I) {
                    for (;;)
                      switch ((I.prev = I.next)) {
                        case 0:
                          return (I.next = 2), (0, d.queryData)()
                        case 2:
                          ;(x = I.sent),
                            b(x),
                            x != null && x.formData && M.setFieldsValue(x.formData)
                        case 5:
                        case 'end':
                          return I.stop()
                      }
                  }, E)
                })
              )),
              T.apply(this, arguments)
            )
          }
          function j() {
            return y.apply(this, arguments)
          }
          function y() {
            return (
              (y = s()(
                l()().mark(function E() {
                  var x, D
                  return l()().wrap(function (R) {
                    for (;;)
                      switch ((R.prev = R.next)) {
                        case 0:
                          return (R.next = 2), (0, d.validateData)({ form: M })
                        case 2:
                          if (((x = R.sent), x)) {
                            R.next = 5
                            break
                          }
                          return R.abrupt('return')
                        case 5:
                          return (
                            (R.next = 7),
                            (0, d.saveData)({
                              baseData: baseDataRef.current,
                              data: x,
                              token: P.current
                            })
                          )
                        case 7:
                          ;(D = R.sent),
                            D.code === '1'
                              ? u.Toast.show({
                                  content: g('\u63D0\u4EA4\u6210\u529F!'),
                                  onVisibleChange: function (S) {}
                                })
                              : (D.code === '2' && (P.current = '' + Date.now()),
                                u.Toast.show({
                                  content: D.message || g('\u63D0\u4EA4\u5931\u8D25!')
                                }))
                        case 9:
                        case 'end':
                          return R.stop()
                      }
                  }, E)
                })
              )),
              y.apply(this, arguments)
            )
          }
          return (0, c.jsxs)(u.Layout, {
            className: 'full',
            children: [
              (0, c.jsxs)(u.Layout.Main, {
                children: [
                  (0, c.jsxs)(u.Card, {
                    children: [
                      (0, c.jsx)(u.Divider, { children: 'Horizontal Layout' }),
                      (0, c.jsxs)(u.Form, {
                        form: M,
                        style: { margin: '0 12px' },
                        labelCol: { ellipsis: { rows: 1, expandable: !0 } },
                        children: [
                          (0, c.jsx)(u.Form.Item, {
                            name: 'input',
                            label: g(
                              'Input Overflow Title, It is very very very long,  It is really very very very long'
                            ),
                            help: 'Help info',
                            rules: [{ required: !0, message: g('Input cannot be empty') }],
                            children: (0, c.jsx)(u.Input.Text, {
                              placeholder: g('Please input'),
                              maxLength: 50
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'textarea',
                            maxLength: 150,
                            label: g('Textarea'),
                            extra: function (x) {
                              var D = x.value
                              return (0, c.jsx)('div', {
                                className: 'text-right',
                                children: ''.concat(
                                  (D == null ? void 0 : D.length) || '0',
                                  ' / 150'
                                )
                              })
                            },
                            children: (0, c.jsx)(u.Input.Textarea, {
                              placeholder: g('Please input')
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'autoFit',
                            label: g('Auto fit'),
                            children: (0, c.jsx)(u.Input.AutoFit, {
                              placeholder: g('Please input')
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'selectTags',
                            label: g('Select Tags'),
                            children: (0, c.jsx)(u.Select.Combo, {
                              mode: 'tags',
                              placeholder: g('Please select'),
                              list: [
                                { id: '1', name: 'Option1' },
                                { id: '2', name: 'Option2' }
                              ],
                              allowClear: !0,
                              clear: function (x) {
                                var D = x.clearable,
                                  I = x.triggerClear
                                return D
                                  ? (0, c.jsx)(u.Input.IconClear, { onClick: I })
                                  : (0, c.jsx)(u.Input.IconRightArrow, {})
                              }
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'select',
                            label: g('Select'),
                            children: (0, c.jsx)(u.Select.Combo, {
                              placeholder: g('Please select'),
                              list: [
                                { id: '1', name: 'Option1' },
                                { id: '2', name: 'Option2' }
                              ],
                              allowClear: !0,
                              clear: function (x) {
                                var D = x.clearable,
                                  I = x.triggerClear
                                return D
                                  ? (0, c.jsx)(u.Input.IconClear, { onClick: I })
                                  : (0, c.jsx)(u.Input.IconRightArrow, {})
                              }
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'picker',
                            label: g('Picker'),
                            children: (0, c.jsx)(u.Picker.Combo, {
                              placeholder: g('Please select'),
                              list: [
                                { id: '1', name: 'Option1' },
                                { id: '2', name: 'Option2' }
                              ],
                              allowClear: !0,
                              clear: function (x) {
                                var D = x.clearable,
                                  I = x.triggerClear
                                return D
                                  ? (0, c.jsx)(u.Input.IconClear, { onClick: I })
                                  : (0, c.jsx)(u.Input.IconRightArrow, {})
                              }
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'switch',
                            valuePropName: 'checked',
                            label: g('Switch'),
                            children: (0, c.jsx)(u.Switch, {})
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'checkbox',
                            label: g('Checkbox'),
                            children: (0, c.jsx)(u.Checkbox.Group, {
                              placeholder: g('Please select'),
                              list: [
                                { id: '1', name: 'Option1' },
                                { id: '2', name: 'Option2' }
                              ],
                              allowClear: !0
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'radio',
                            label: g('Radio'),
                            children: (0, c.jsx)(u.Radio.Group, {
                              placeholder: g('Please select'),
                              list: [
                                { id: '1', name: 'Option1' },
                                { id: '2', name: 'Option2' }
                              ],
                              allowClear: !0
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'selector',
                            label: g('Selector'),
                            children: (0, c.jsx)(u.Selector, {
                              placeholder: g('Please select'),
                              list: [
                                { id: '1', name: 'Option1' },
                                { id: '2', name: 'Option2' },
                                { id: '3', name: 'Option3' },
                                { id: '4', name: 'Option4' }
                              ],
                              allowClear: !0
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'number',
                            label: g('Number'),
                            children: (0, c.jsx)(u.Input.Number, { placeholder: g('Please input') })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'numberBox',
                            label: g('Number box'),
                            rules: [{ required: !0, message: g('Number box can not empty') }],
                            children: (0, c.jsx)(u.Input.NumberBox, {
                              placeholder: g('Please input')
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'password',
                            label: g('Password'),
                            extra: function (x) {
                              var D = x.value
                              return (0, c.jsx)(u.Input.PasswordStrength, {
                                value: D,
                                style: { marginTop: 8 }
                              })
                            },
                            children: (0, c.jsx)(u.Input.Password, {
                              placeholder: g('Please input')
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'range',
                            label: g('Range'),
                            children: (0, c.jsx)(u.Input.Range, {})
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'rate',
                            label: g('Rate'),
                            children: (0, c.jsx)(u.Input.Rate, {})
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'tel',
                            label: g('Tel'),
                            children: (0, c.jsx)(u.Input.Tel, { placeholder: g('Please input') })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'url',
                            label: g('Url'),
                            children: (0, c.jsx)(u.Input.Url, { placeholder: g('Please input') })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'signature',
                            layout: 'vertical',
                            label: g('Signature'),
                            children: (0, c.jsx)(u.Signature.Combo, {})
                          })
                        ]
                      })
                    ]
                  }),
                  (0, c.jsxs)(u.Card, {
                    children: [
                      (0, c.jsx)(u.Divider, { children: 'Vertical Layout' }),
                      (0, c.jsxs)(u.Form, {
                        form: M,
                        layout: 'vertical',
                        style: { margin: '0 12px' },
                        children: [
                          (0, c.jsx)(u.Form.Item, {
                            name: 'datetime',
                            label: g('Datetime'),
                            children: (0, c.jsx)(u.DatePicker.Combo, {
                              type: 'datetime',
                              placeholder: g('Please select'),
                              allowClear: !0,
                              clear: function (x) {
                                var D = x.clearable,
                                  I = x.triggerClear
                                return D
                                  ? (0, c.jsx)(u.Input.IconClear, { onClick: I })
                                  : (0, c.jsx)(u.Input.IconRightArrow, {})
                              }
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'date',
                            label: g('Date'),
                            children: (0, c.jsx)(u.DatePicker.Combo, {
                              placeholder: g('Please select'),
                              allowClear: !0,
                              clear: function (x) {
                                var D = x.clearable,
                                  I = x.triggerClear
                                return D
                                  ? (0, c.jsx)(u.Input.IconClear, { onClick: I })
                                  : (0, c.jsx)(u.Input.IconRightArrow, {})
                              }
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'time',
                            label: g('Time'),
                            children: (0, c.jsx)(u.DatePicker.Combo, {
                              type: 'time',
                              placeholder: g('Please select'),
                              allowClear: !0,
                              clear: function (x) {
                                var D = x.clearable,
                                  I = x.triggerClear
                                return D
                                  ? (0, c.jsx)(u.Input.IconClear, { onClick: I })
                                  : (0, c.jsx)(u.Input.IconRightArrow, {})
                              }
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'dateRange',
                            label: g('Date range'),
                            children: (0, c.jsx)(u.DatePicker.RangeCombo, {
                              placeholder: g('Please select'),
                              allowClear: !0,
                              clear: function (x) {
                                var D = x.clearable,
                                  I = x.triggerClear
                                return D
                                  ? (0, c.jsx)(u.Input.IconClear, { onClick: I })
                                  : (0, c.jsx)(u.Input.IconRightArrow, {})
                              }
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'district',
                            label: g('District'),
                            children: (0, c.jsx)(u.Cascader.DistrictCombo, {
                              placeholder: g('Please select'),
                              allowClear: !0,
                              clear: function (x) {
                                var D = x.clearable,
                                  I = x.triggerClear
                                return D
                                  ? (0, c.jsx)(u.Input.IconClear, { onClick: I })
                                  : (0, c.jsx)(u.Input.IconRightArrow, {})
                              }
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'location',
                            label: g('Location'),
                            children: (0, c.jsx)(u.Location.Combo, {
                              type: 'gcj02',
                              config: { key: '', type: 'bmap' },
                              placeholder: g('Please select'),
                              allowClear: !0,
                              previewVisible: !0,
                              chooseVisible: !0,
                              clear: function (x) {
                                var D = x.clearable,
                                  I = x.triggerClear
                                return D ? (0, c.jsx)(u.Input.IconClear, { onClick: I }) : null
                              }
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'signature',
                            label: g('Signature'),
                            children: (0, c.jsx)(u.Signature.Combo, {})
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'upload',
                            label: g('Upload'),
                            children: (0, c.jsx)(u.Upload, {
                              reUpload: !1,
                              allowChoose: !0,
                              allowClear: !0,
                              uploadPosition: 'start',
                              maxSize: 300 * 1024 * 1024,
                              list: [
                                {
                                  name: '1',
                                  src: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                                  status: 'fail'
                                },
                                {
                                  name: '2',
                                  src: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
                                }
                              ],
                              count: 9,
                              onFileChange: (function () {
                                var E = s()(
                                  l()().mark(function x(D) {
                                    var I, R, W, S
                                    return l()().wrap(function (K) {
                                      for (;;)
                                        switch ((K.prev = K.next)) {
                                          case 0:
                                            ;(I = D.fileName),
                                              (R = D.fileSize),
                                              (W = D.fileURL),
                                              (S = D.fileData),
                                              console.log({
                                                fileName: I,
                                                fileSize: R,
                                                fileURL: W,
                                                fileData: S
                                              })
                                          case 2:
                                          case 'end':
                                            return K.stop()
                                        }
                                    }, x)
                                  })
                                )
                                return function (x) {
                                  return E.apply(this, arguments)
                                }
                              })(),
                              onChange: function (x) {
                                console.log('\u4FEE\u6539:', x)
                              }
                            })
                          }),
                          (0, c.jsx)(u.Form.Item, {
                            name: 'image',
                            label: g('Image'),
                            children: (0, c.jsx)(u.Image, {
                              allowChoose: !0,
                              allowClear: !0,
                              list: [
                                {
                                  id: '1',
                                  thumb:
                                    'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                                  src: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                                  status: 'fail'
                                },
                                {
                                  id: '2',
                                  thumb:
                                    'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                                  src: 'https://www.wilsoncomm.com.hk/image/cache/catalog/product-3566/6ca91b2b19a3d19b6cbe4f618a028e65-850x850.jpg'
                                },
                                a()(
                                  {
                                    id: '3',
                                    thumb:
                                      'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
                                  },
                                  'thumb',
                                  'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
                                ),
                                {
                                  id: '4',
                                  thumb:
                                    'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                                  src: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
                                }
                              ],
                              count: 9,
                              onFileChange: (function () {
                                var E = s()(
                                  l()().mark(function x(D) {
                                    var I, R, W, S
                                    return l()().wrap(function (K) {
                                      for (;;)
                                        switch ((K.prev = K.next)) {
                                          case 0:
                                            ;(I = D.fileName),
                                              (R = D.fileSize),
                                              (W = D.fileURL),
                                              (S = D.fileData),
                                              console.log({
                                                fileName: I,
                                                fileSize: R,
                                                fileURL: W,
                                                fileData: S
                                              })
                                          case 2:
                                          case 'end':
                                            return K.stop()
                                        }
                                    }, x)
                                  })
                                )
                                return function (x) {
                                  return E.apply(this, arguments)
                                }
                              })(),
                              onChange: function (x) {
                                console.log('\u4FEE\u6539:', x)
                              }
                            })
                          })
                        ]
                      })
                    ]
                  })
                ]
              }),
              (0, c.jsx)(m.default, { onOk: j }),
              (B == null ? void 0 : B.message) &&
                (0, c.jsx)(u.Result, { className: 'full', status: B.status, title: B.title })
            ]
          })
        }
      i.default = v
    },
    66478: function (f, i, e) {
      e.r(i)
      var h = e(17061),
        a = e.n(h),
        n = e(17156),
        l = e.n(n),
        t = e(27424),
        s = e.n(t),
        r = e(67294),
        o = e(49886),
        _ = e(5548),
        u = e(49042),
        d = e(85893),
        m = o.LocaleUtil.locale,
        c = function () {
          var v = o.Form.useForm(),
            C = s()(v, 1),
            O = C[0],
            p = (0, r.useRef)('' + Date.now()),
            M = (0, r.useState)(null),
            P = s()(M, 2),
            U = P[0],
            L = P[1]
          ;(0, r.useEffect)(function () {
            B()
          }, [])
          function B() {
            return b.apply(this, arguments)
          }
          function b() {
            return (
              (b = l()(
                a()().mark(function j() {
                  var y
                  return a()().wrap(function (x) {
                    for (;;)
                      switch ((x.prev = x.next)) {
                        case 0:
                          return (x.next = 2), (0, _.queryData)()
                        case 2:
                          ;(y = x.sent),
                            L(y),
                            y != null && y.formData && O.setFieldsValue(y.formData)
                        case 5:
                        case 'end':
                          return x.stop()
                      }
                  }, j)
                })
              )),
              b.apply(this, arguments)
            )
          }
          function A() {
            return T.apply(this, arguments)
          }
          function T() {
            return (
              (T = l()(
                a()().mark(function j() {
                  var y, E
                  return a()().wrap(function (D) {
                    for (;;)
                      switch ((D.prev = D.next)) {
                        case 0:
                          return (D.next = 2), (0, _.validateData)({ form: O })
                        case 2:
                          if (((y = D.sent), y)) {
                            D.next = 5
                            break
                          }
                          return D.abrupt('return')
                        case 5:
                          return (
                            (D.next = 7),
                            (0, _.saveData)({
                              baseData: baseDataRef.current,
                              data: y,
                              token: p.current
                            })
                          )
                        case 7:
                          ;(E = D.sent),
                            E.code === '1'
                              ? o.Toast.show({
                                  content: m('\u63D0\u4EA4\u6210\u529F!'),
                                  onVisibleChange: function (R) {}
                                })
                              : (E.code === '2' && (p.current = '' + Date.now()),
                                o.Toast.show({
                                  content: E.message || m('\u63D0\u4EA4\u5931\u8D25!')
                                }))
                        case 9:
                        case 'end':
                          return D.stop()
                      }
                  }, j)
                })
              )),
              T.apply(this, arguments)
            )
          }
          return (0, d.jsxs)(o.Layout, {
            className: 'full',
            children: [
              (0, d.jsx)(o.Layout.Main, {
                children: (0, d.jsxs)(o.Form, {
                  form: O,
                  style: { marginLeft: '12px' },
                  virtual: !0,
                  children: [
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'input',
                      label: m('Input'),
                      rules: [{ required: !0, message: m('Input cannot be empty') }],
                      children: (0, d.jsx)(o.Input.Text, {
                        placeholder: m('Please input'),
                        maxLength: 50
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 97,
                      name: 'textarea',
                      maxLength: 150,
                      label: m('Textarea'),
                      extra: function (y) {
                        var E = y.value
                        return (0, d.jsx)('div', {
                          className: 'text-right',
                          children: ''.concat((E == null ? void 0 : E.length) || '0', ' / 150')
                        })
                      },
                      children: (0, d.jsx)(o.Input.Textarea, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'autoFit',
                      label: m('Auto fit'),
                      children: (0, d.jsx)(o.Input.AutoFit, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'select',
                      label: m('Select'),
                      children: (0, d.jsx)(o.Select.Combo, {
                        placeholder: m('Please select'),
                        list: [
                          { id: '1', name: 'Option1' },
                          { id: '2', name: 'Option2' }
                        ],
                        allowClear: !0,
                        clear: function (y) {
                          var E = y.clearable,
                            x = y.triggerClear
                          return E
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: x })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'picker',
                      label: m('Picker'),
                      children: (0, d.jsx)(o.Picker.Combo, {
                        placeholder: m('Please select'),
                        list: [
                          { id: '1', name: 'Option1' },
                          { id: '2', name: 'Option2' }
                        ],
                        allowClear: !0,
                        clear: function (y) {
                          var E = y.clearable,
                            x = y.triggerClear
                          return E
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: x })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 50,
                      name: 'switch',
                      valuePropName: 'checked',
                      label: m('Switch'),
                      children: (0, d.jsx)(o.Switch, {})
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 74,
                      name: 'checkbox',
                      label: m('Checkbox'),
                      children: (0, d.jsx)(o.Checkbox.Group, {
                        placeholder: m('Please select'),
                        list: [
                          { id: '1', name: 'Option1' },
                          { id: '2', name: 'Option2' }
                        ],
                        allowClear: !0
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 74,
                      name: 'radio',
                      label: m('Radio'),
                      children: (0, d.jsx)(o.Radio.Group, {
                        placeholder: m('Please select'),
                        list: [
                          { id: '1', name: 'Option1' },
                          { id: '2', name: 'Option2' }
                        ],
                        allowClear: !0
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 102,
                      name: 'selector',
                      label: m('Selector'),
                      children: (0, d.jsx)(o.Selector, {
                        placeholder: m('Please select'),
                        list: [
                          { id: '1', name: 'Option1' },
                          { id: '2', name: 'Option2' },
                          { id: '3', name: 'Option3' },
                          { id: '4', name: 'Option4' }
                        ],
                        allowClear: !0
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'number',
                      label: m('Number'),
                      children: (0, d.jsx)(o.Input.Number, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 48,
                      name: 'numberBox',
                      label: m('Number box'),
                      rules: [{ required: !0, message: m('Number box can not empty') }],
                      children: (0, d.jsx)(o.Input.NumberBox, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 52,
                      name: 'password',
                      label: m('Password'),
                      extra: function (y) {
                        var E = y.value
                        return (0, d.jsx)(o.Input.PasswordStrength, { value: E })
                      },
                      children: (0, d.jsx)(o.Input.Password, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 55,
                      name: 'range',
                      label: m('Range'),
                      children: (0, d.jsx)(o.Input.Range, {})
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 55,
                      name: 'rate',
                      label: m('Rate'),
                      children: (0, d.jsx)(o.Input.Rate, {})
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'tel',
                      label: m('Tel'),
                      children: (0, d.jsx)(o.Input.Tel, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'url',
                      label: m('Url'),
                      children: (0, d.jsx)(o.Input.Url, { placeholder: m('Please input') })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'datetime',
                      label: m('Datetime'),
                      children: (0, d.jsx)(o.DatePicker.Combo, {
                        type: 'datetime',
                        placeholder: m('Please select'),
                        allowClear: !0,
                        clear: function (y) {
                          var E = y.clearable,
                            x = y.triggerClear
                          return E
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: x })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'date',
                      label: m('Date'),
                      children: (0, d.jsx)(o.DatePicker.Combo, {
                        placeholder: m('Please select'),
                        allowClear: !0,
                        clear: function (y) {
                          var E = y.clearable,
                            x = y.triggerClear
                          return E
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: x })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'time',
                      label: m('Time'),
                      children: (0, d.jsx)(o.DatePicker.Combo, {
                        type: 'time',
                        placeholder: m('Please select'),
                        allowClear: !0,
                        clear: function (y) {
                          var E = y.clearable,
                            x = y.triggerClear
                          return E
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: x })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'dateRange',
                      label: m('Date range'),
                      children: (0, d.jsx)(o.DatePicker.RangeCombo, {
                        placeholder: m('Please select'),
                        allowClear: !0,
                        clear: function (y) {
                          var E = y.clearable,
                            x = y.triggerClear
                          return E
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: x })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'district',
                      label: m('District'),
                      children: (0, d.jsx)(o.Cascader.DistrictCombo, {
                        placeholder: m('Please select'),
                        allowClear: !0,
                        clear: function (y) {
                          var E = y.clearable,
                            x = y.triggerClear
                          return E
                            ? (0, d.jsx)(o.Input.IconClear, { onClick: x })
                            : (0, d.jsx)(o.Input.IconRightArrow, {})
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 42,
                      name: 'location',
                      label: m('Location'),
                      children: (0, d.jsx)(o.Location.Combo, {
                        type: 'gcj02',
                        config: { key: '', type: 'bmap' },
                        placeholder: m('Please select'),
                        allowClear: !0,
                        previewVisible: !0,
                        chooseVisible: !0,
                        clear: function (y) {
                          var E = y.clearable,
                            x = y.triggerClear
                          return E ? (0, d.jsx)(o.Input.IconClear, { onClick: x }) : null
                        }
                      })
                    }),
                    (0, d.jsx)(o.Form.Item, {
                      height: 52,
                      name: 'signature',
                      label: m('Signature'),
                      children: (0, d.jsx)(o.Signature.Combo, {})
                    })
                  ]
                })
              }),
              (0, d.jsx)(u.default, { onOk: A }),
              (U == null ? void 0 : U.message) &&
                (0, d.jsx)(o.Result, {
                  className: 'full',
                  status: mainStatus.status,
                  title: mainStatus.title
                })
            ]
          })
        }
      i.default = c
    },
    17309: function (f, i, e) {
      e.r(i)
      var h = e(42122),
        a = e.n(h),
        n = e(27424),
        l = e.n(n),
        t = e(67294),
        s = e(49886),
        r = e(8845),
        o = e(92848),
        _ = e(44143),
        u = e(87697),
        d = e(25429),
        m = e(85893),
        c = s.LocaleUtil.locale,
        g = { name: 'cache_pageName_list', persist: 'session' },
        v = function () {
          var O = s.Storage.useCacheState('', {
              name: ''.concat(g.name, ':queryParams'),
              persist: g.persist
            }),
            p = l()(O, 2),
            M = p[0],
            P = p[1],
            U = (0, t.useRef)(null)
          return (
            console.log('instance:', U.current),
            (0, m.jsxs)(s.Layout, {
              className: 'full',
              children: [
                (0, m.jsx)(o.default, {
                  queryParams: M,
                  onSearch: function (B) {
                    ;(M = B), P(M), U.current.reload()
                  }
                }),
                (0, m.jsx)(_.default, {
                  ref: U,
                  cache: g,
                  loadList: function (B) {
                    var b = B.page,
                      A = B.action
                    return console.log('action:', A), (0, r.queryData)(a()({ page: b }, M))
                  }
                }),
                (0, m.jsx)(u.default, {
                  ok: c('Clear cache'),
                  onOk: function () {
                    s.Storage.clearCache(g.name, { match: 'prefix' }), alert('Clear success!')
                  }
                })
              ]
            })
          )
        }
      i.default = v
    },
    59575: function (f, i, e) {
      e.r(i)
      var h = e(42122),
        a = e.n(h),
        n = e(27424),
        l = e.n(n),
        t = e(67294),
        s = e(49886),
        r = e(8845),
        o = e(92848),
        _ = e(44143),
        u = e(25429),
        d = e(85893),
        m = typeof arguments == 'undefined' ? void 0 : arguments,
        c = function () {
          var v = (0, t.useRef)(null),
            C = (0, t.useState)(null),
            O = l()(C, 2),
            p = O[0],
            M = O[1]
          return (0, d.jsxs)(s.Layout, {
            className: 'full',
            children: [
              (0, d.jsx)(o.default, {
                queryParams: p,
                onSearch: function (U) {
                  ;(p = U), M(U), v.current.reload()
                }
              }),
              (0, d.jsx)(_.default, {
                ref: v,
                loadList: function (U) {
                  var L = U.page,
                    B = U.action
                  return console.log('action:', B), (0, r.queryData)(a()({ page: L, rows: 20 }, p))
                },
                onChange: function () {
                  console.log('onChange:', m)
                }
              })
            ]
          })
        }
      i.default = c
    },
    14352: function (f, i, e) {
      e.r(i)
      var h = e(42122),
        a = e.n(h),
        n = e(27424),
        l = e.n(n),
        t = e(67294),
        s = e(49886),
        r = e(8845),
        o = e(92848),
        _ = e(44143),
        u = e(25429),
        d = e(85893),
        m = function () {
          var g,
            v,
            C = (0, t.useRef)(null),
            O = (0, t.useState)(null),
            p = l()(O, 2),
            M = p[0],
            P = p[1],
            U = (0, t.useState)(null),
            L = l()(U, 2),
            B = L[0],
            b = L[1],
            A = (0, t.useState)(void 0),
            T = l()(A, 2),
            j = T[0],
            y = T[1]
          return (0, d.jsxs)(s.Layout, {
            className: 'full',
            children: [
              (0, d.jsx)(o.default, {
                queryParams: M,
                onSearch: function (x) {
                  ;(M = x), P(x), C.current.reload()
                }
              }),
              (0, d.jsx)(_.default, {
                ref: C,
                loadList: function (x) {
                  var D = x.page,
                    I = x.action
                  return (
                    console.log('action:', I),
                    (0, r.queryData)(a()({ page: D, rows: 20 }, M), {
                      success: function () {
                        y(!0)
                      }
                    })
                  )
                },
                onLoad: function () {
                  var x, D
                  console.log('\u66F4\u65B0IndexBar\u6570\u636E...')
                  var I =
                    C == null ||
                    (x = C.current) === null ||
                    x === void 0 ||
                    (D = x.getAnchors) === null ||
                    D === void 0
                      ? void 0
                      : D.call(x)
                  b(I)
                }
              }),
              j &&
                (0, d.jsx)(s.IndexBar, {
                  anchors: B,
                  onTouchAnchor:
                    C == null || (g = C.current) === null || g === void 0
                      ? void 0
                      : g.scrollToAnchor,
                  scrollerDOM:
                    C == null || (v = C.current) === null || v === void 0 ? void 0 : v.rootDOM
                })
            ]
          })
        }
      i.default = m
    },
    60428: function (f, i, e) {
      e.r(i)
      var h = e(42122),
        a = e.n(h),
        n = e(27424),
        l = e.n(n),
        t = e(67294),
        s = e(49886),
        r = e(8845),
        o = e(92848),
        _ = e(44143),
        u = e(25429),
        d = e(85893),
        m = function () {
          var g = (0, t.useState)(null),
            v = l()(g, 2),
            C = v[0],
            O = v[1],
            p = (0, t.useRef)(null)
          return (0, d.jsxs)(s.Layout, {
            className: 'full',
            children: [
              (0, d.jsx)(o.default, {
                queryParams: C,
                onSearch: function (P) {
                  ;(C = P), O(C), p.current.reload()
                }
              }),
              (0, d.jsx)(_.default, {
                ref: p,
                virtual: {
                  getItemHeight: function (P) {
                    var U
                    return (P == null || (U = P.virtualData) === null || U === void 0
                      ? void 0
                      : U.type) === 'group'
                      ? 33
                      : 71
                  }
                },
                loadList: function (P) {
                  var U = P.page,
                    L = P.action
                  return console.log('action:', L), (0, r.queryData)(a()({ page: U }, C))
                }
              })
            ]
          })
        }
      i.default = m
    },
    62132: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        function l() {
          a.Clipboard.copy('https://lyrixi.github.io/lyrixi-design-mobile/', {
            success: function () {
              a.Toast.show({ content: 'Copy to clipboard success!' })
            }
          })
        }
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)('div', { onClick: l, children: 'Copy to clipboard' })
        })
      }
    },
    16334: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)('div', {
              children: a.AssetUtil.getFileExtension(
                '//colaboy.github.io/lyrixi-design-mobile/assets/plugin/leaflet/js/leaflet.js'
              )
            }),
            (0, n.jsx)('div', { children: a.AssetUtil.getFileExtension('leaflet.pdf') }),
            (0, n.jsx)('div', {
              children: a.AssetUtil.getFileExtension(
                '//colaboy.github.io/lyrixi-design-mobile/assets/plugin/leaflet/js/leaflet.image'
              )
            }),
            (0, n.jsx)('div', {
              children:
                a.AssetUtil.getFileExtension(
                  '//colaboy.github.io/lyrixi-design-mobile/assets/plugin/leaflet/js/leaflet.'
                ) || 'No Extension'
            }),
            (0, n.jsx)('div', {
              children: a.AssetUtil.getFileExtension('leaflet. a') || 'No Extension'
            })
          ]
        })
      }
    },
    13534: function (f, i, e) {
      e.r(i)
      var h = e(17061),
        a = e.n(h),
        n = e(17156),
        l = e.n(n),
        t = e(67294),
        s = e(49886),
        r = e(85893)
      i.default = function () {
        function o() {
          s.AssetUtil.loadJs(
            '//colaboy.github.io/lyrixi-design-mobile/assets/plugin/leaflet/js/leaflet.js',
            {
              id: 'leaflet-js',
              success: function () {
                alert('Js load succeeded')
              },
              fail: function () {
                alert('Js load failed')
              }
            }
          )
        }
        function _() {
          return u.apply(this, arguments)
        }
        function u() {
          return (
            (u = l()(
              a()().mark(function d() {
                var m
                return a()().wrap(function (g) {
                  for (;;)
                    switch ((g.prev = g.next)) {
                      case 0:
                        return (
                          (g.next = 2),
                          s.AssetUtil.loadJs(
                            '//colaboy.github.io/lyrixi-design-mobile/assets/plugin/leaflet/js/leaflet.js',
                            { id: 'leaflet-js' }
                          )
                        )
                      case 2:
                        ;(m = g.sent), alert(m ? 'Js load succeeded' : 'Js load failed')
                      case 4:
                      case 'end':
                        return g.stop()
                    }
                }, d)
              })
            )),
            u.apply(this, arguments)
          )
        }
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)('div', { onClick: o, children: 'Load js by callback' }),
            (0, r.jsx)('div', { onClick: _, children: 'Load js by async' })
          ]
        })
      }
    },
    97157: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(71415),
        t = e.n(l),
        s = e(49886),
        r = e(85893)
      new (t())(),
        (i.default = function () {
          var o = (0, n.useState)([
              {
                id: '1',
                thumb: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                src: 'https://player.alicdn.com/video/aliyunmedia.mp4',
                status: 'success'
              },
              {
                id: '2',
                thumb: 'https://img.zcool.cn/community/01a9a65dfad975a8012165189a6476.jpg',
                src: 'https://player.alicdn.com/video/aliyunmedia.mp4',
                status: 'fail'
              }
            ]),
            _ = a()(o, 2),
            u = _[0],
            d = _[1],
            m = (0, n.useState)([]),
            c = a()(m, 2),
            g = c[0],
            v = c[1],
            C = (0, n.useState)([]),
            O = a()(C, 2),
            p = O[0],
            M = O[1],
            P = (0, n.useState)({
              wechat: {
                title: '\u6807\u9898',
                description: '\u63CF\u8FF0',
                imageUrl: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                url: 'https://www.baidu.com'
              },
              wecom: {
                title: '\u6807\u9898',
                description: '\u63CF\u8FF0',
                imageUrl: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                url: 'https://www.baidu.com'
              },
              dingtalk: {
                title: '\u6807\u9898',
                description: '\u63CF\u8FF0',
                imageUrl: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                url: 'https://www.baidu.com'
              },
              lark: {
                title: '\u6807\u9898',
                description: '\u63CF\u8FF0',
                imageUrl: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                url: 'https://www.baidu.com'
              }
            }),
            U = a()(P, 2),
            L = U[0],
            B = U[1],
            b = (0, n.useRef)(null)
          return (
            (0, n.useEffect)(function () {
              setTimeout(function () {
                M({
                  latitude: 31.990374883871525,
                  longitude: 118.73769931504451,
                  type: 'gcj02',
                  address: '\u5357\u4EAC\u65B0\u57CE\u79D1\u6280\u56ED'
                })
              }, 5e3)
            }, []),
            (0, r.jsx)(s.Layout, {
              className: 'full',
              children: (0, r.jsxs)(s.Layout.Main, {
                children: [
                  (0, r.jsx)('h2', { children: '\u7EC4\u4EF6' }),
                  (0, r.jsx)('p', { className: 'demo-title', children: '\u5B9A\u4F4D' }),
                  (0, r.jsx)(s.Location.Combo, {
                    allowClear: !0,
                    autoFit: !0,
                    clickAction: 'location',
                    placeholder: '\u70B9\u51FB\u5B9A\u4F4D',
                    value: p,
                    previewVisible: !0,
                    chooseVisible: !0,
                    onChange: function (T) {
                      console.log(T), M(T)
                    }
                  }),
                  (0, r.jsx)('p', { className: 'demo-title', children: '\u8001\u5B9A\u4F4D' }),
                  (0, r.jsx)(s.Location.Combo, {
                    allowClear: !0,
                    autoFit: !0,
                    clickAction: 'location',
                    placeholder: '\u70B9\u51FB\u5B9A\u4F4D',
                    value: p,
                    previewVisible: !0,
                    chooseVisible: !0,
                    onChange: function (T) {
                      console.log(T), M(T)
                    }
                  }),
                  (0, r.jsx)('p', { className: 'demo-title', children: '\u62CD\u7167' }),
                  (0, r.jsx)(s.Image, {
                    uploadPosition: 'start',
                    timeout: 2e3,
                    list: g,
                    count: 20,
                    watermark: ['$address $distance:116.37,39.91', 'aaa', '$address', '$datetime'],
                    watermarkConfig: { showTime: '1', type: '1' },
                    uploadDir: 'businessName',
                    onChange: v,
                    onDelete: v
                  }),
                  (0, r.jsx)('p', { className: 'demo-title', children: '\u5C0F\u89C6\u9891' }),
                  (0, r.jsx)(s.Image, {
                    enableThumb: !0,
                    uploadPosition: 'start',
                    timeout: 2e3,
                    list: u,
                    count: 4,
                    uploadDir: 'businessName',
                    onChange: d,
                    onDelete: d
                  }),
                  (0, r.jsx)('h2', { children: '\u754C\u9762\u63A5\u53E3' }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children: '\u6253\u5F00\u65B0\u7A97\u53E3\u63A5\u53E3'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Bridge.openWindow({ title: '\u6D4B\u8BD5', url: 'https://www.baidu.com/' })
                    },
                    children: 'openWindow'
                  }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children:
                      '\u5173\u95ED\u5F53\u524D\u7F51\u9875\u7A97\u53E3\u63A5\u53E3(\u4EC5\u5BA2\u6237\u7AEF\u4E0E\u4F01\u5FAE)'
                  }),
                  (0, r.jsx)('a', {
                    href: '/#/test?title=test&isFromApp=confirm-close:11',
                    children: '\u8FD4\u56DE\u63D0\u793A11, \u5E76\u5173\u95EDwebview'
                  }),
                  (0, r.jsx)('br', {}),
                  (0, r.jsx)('a', {
                    href: '/#/test?title=test&isFromApp=confirm-close',
                    children: '\u8FD4\u56DE\u63D0\u793A, \u5E76\u5173\u95EDwebview'
                  }),
                  (0, r.jsx)('br', {}),
                  (0, r.jsx)('a', {
                    href: '/#/test?title=test&isFromApp=confirm:11',
                    children: '\u8FD4\u56DE\u63D0\u793A11'
                  }),
                  (0, r.jsx)('br', {}),
                  (0, r.jsx)('a', {
                    href: '/#/test?title=test&isFromApp=confirm',
                    children: '\u8FD4\u56DE\u63D0\u793A'
                  }),
                  (0, r.jsx)('br', {}),
                  (0, r.jsx)('a', {
                    href: '/#/test?title=test&isFromApp=1',
                    children: '\u8FD4\u56DE\u65F6\u5C06\u4F1A\u5173\u95EDwebview'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Bridge.closeWindow()
                    },
                    children: 'closeWindow(\u5168\u5E73\u53F0\u652F\u6301)'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Bridge.back()
                    },
                    children: 'back(\u5168\u5E73\u53F0\u652F\u6301)'
                  }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children:
                      '\u76D1\u542C\u9875\u9762\u8FD4\u56DE\u4E8B\u4EF6(\u4EC5\u5BA2\u6237\u7AEF\u4E0E\u4F01\u5FAE)'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Bridge.onHistoryBack(function () {
                        console.log('\u8FD4\u56DE\u76D1\u542C'), alert('\u8FD4\u56DE\u76D1\u542C')
                      })
                    },
                    children: 'onHistoryBack'
                  }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children: '\u4FEE\u6539\u9875\u9762title'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Bridge.setTitle({ title: '\u81EA\u5B9A\u4E49\u6807\u9898' })
                    },
                    children: 'setTitle'
                  }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children: '\u9000\u51FA\u81F3\u767B\u5F55\u9875\u9762(\u4EC5\u5BA2\u6237\u7AEF)'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Bridge.logOut()
                    },
                    children: 'logout'
                  }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children:
                      '\u8FD4\u56DE\u9996\u9875(\u4EC5\u8BA2\u8D27\u5BA2\u6237\u7AEF\u652F\u6301)'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Bridge.goHome()
                    },
                    children: 'goHome'
                  }),
                  (0, r.jsx)('h2', { children: '\u626B\u7801\u63A5\u53E3' }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children: '\u8C03\u7528365\u626B\u7801\u63A5\u53E3'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Bridge.scanQRCode({
                        scanType: ['barCode'],
                        success: function (j) {
                          console.log(j), alert(JSON.stringify(j))
                        },
                        fail: function (j) {
                          console.log(j), alert(JSON.stringify(j))
                        }
                      })
                    },
                    children: 'scanQRCode'
                  }),
                  (0, r.jsx)('h2', { children: '\u56FE\u50CF\u63A5\u53E3' }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children:
                      '\u62CD\u7167\u6216\u4ECE\u624B\u673A\u76F8\u518C\u4E2D\u9009\u56FE\u63A5\u53E3(\u4EC5\u652F\u6301\u5BA2\u6237\u7AEF,\u5FAE\u4FE1,\u4F01\u5FAE,\u5C0F\u7A0B\u5E8F)'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Bridge.chooseImage({
                        sizeType: ['original', 'compressed'],
                        sourceType: ['album', 'camera'],
                        success: function (j) {
                          console.log(j),
                            alert(JSON.stringify(j)),
                            (b.current = j == null ? void 0 : j.localIds)
                        },
                        fail: function (j) {
                          console.log(j), alert(JSON.stringify(j))
                        },
                        cancel: function (j) {
                          console.log(j), alert(JSON.stringify(j))
                        }
                      })
                    },
                    children: 'chooseImage'
                  }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children:
                      '\u4E0A\u4F20\u56FE\u7247\u63A5\u53E3(\u4EC5\u652F\u6301\u5BA2\u6237\u7AEF,\u5FAE\u4FE1,\u4F01\u5FAE,\u5C0F\u7A0B\u5E8F)'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      if (!b.current) {
                        console.log('chooseImage first!'), alert('chooseImage first!')
                        return
                      }
                      s.Loading.show({ content: '\u4E0A\u4F20\u4E2D...' }),
                        s.Bridge.uploadImage({
                          localId: b.current[0],
                          isShowProgressTips: 0,
                          uploadDir: 'test',
                          success: function (j) {
                            console.log(j), alert(JSON.stringify(j)), s.Loading.hide()
                          },
                          fail: function (j) {
                            console.log(j), alert(JSON.stringify(j)), s.Loading.hide()
                          },
                          cancel: function (j) {
                            console.log(j), alert(JSON.stringify(j)), s.Loading.hide()
                          },
                          complete: function () {
                            s.Loading.hide()
                          }
                        })
                    },
                    children: 'uploadImage'
                  }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children: '\u9884\u89C8\u56FE\u7247\u63A5\u53E3'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Bridge.previewImage({
                        urls: [
                          'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png',
                          'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
                        ],
                        index: 0,
                        current:
                          'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
                      })
                    },
                    children: 'previewImage'
                  }),
                  (0, r.jsx)('h2', { children: '\u6587\u4EF6\u63A5\u53E3' }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children:
                      '\u9884\u89C8\u6587\u4EF6\u63A5\u53E3(\u4EC5\u5BA2\u6237\u7AEF\u652F\u6301)'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Bridge.previewFile({
                        url: 'https://lyrixi.github.io/lyrixi-design-mobile/assets/images/logo.png'
                      })
                    },
                    children: 'previewFile'
                  }),
                  (0, r.jsx)('h2', { children: '\u5730\u7406\u4F4D\u7F6E\u63A5\u53E3' }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children:
                      '\u67E5\u770B\u5730\u7406\u4F4D\u7F6E\u63A5\u53E3(\u5BA2\u6237\u7AEF\u3001\u4F01\u5FAE\u3001\u652F\u4ED8\u5B9D\u751F\u6D3B\u53F7\u3001\u98DE\u4E66\u3001\u9489\u9489)'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Bridge.openLocation({
                        slatitude: 32.02,
                        slongitude: 118.79,
                        sname: '\u8D77\u70B9',
                        latitude: 39.81,
                        longitude: 116.49,
                        name: '\u7EC8\u70B9',
                        address: '\u7EC8\u70B9\u5730\u5740\u540D',
                        scale: 16
                      })
                    },
                    children: 'openLocation'
                  }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children: '\u83B7\u53D6\u5730\u7406\u4F4D\u7F6E\u63A5\u53E3'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Loading.show({ content: '\u5B9A\u4F4D\u4E2D...' }),
                        s.Bridge.getLocation({
                          type: 'gcj02',
                          success: function (j) {
                            s.Loading.hide(), console.log(j), alert(JSON.stringify(j))
                          },
                          fail: function (j) {
                            s.Loading.hide(), console.log(j), alert(JSON.stringify(j))
                          }
                        })
                    },
                    children: 'getLocation(gcj02)'
                  }),
                  (0, r.jsx)(s.Button, {
                    className: 'primary flex',
                    style: { margin: '12px 10px' },
                    onClick: function () {
                      s.Loading.show({ content: '\u5B9A\u4F4D\u4E2D...' }),
                        s.Bridge.getLocation({
                          type: 'wgs84',
                          success: function (j) {
                            s.Loading.hide(), console.log(j), alert(JSON.stringify(j))
                          },
                          fail: function (j) {
                            s.Loading.hide(), console.log(j), alert(JSON.stringify(j))
                          }
                        })
                    },
                    children: 'getLocation(wgs84)'
                  }),
                  (0, r.jsx)('p', {
                    className: 'demo-title',
                    children:
                      '\u5206\u4EAB: \u652F\u6301\u52E4\u7B56(ios\u3001android)\u3001\u5FAE\u4FE1\u3001\u4F01\u5FAE\u3001\u5C0F\u7A0B\u5E8F\u3001\u98DE\u4E66\u3001\u9489\u9489'
                  }),
                  (0, r.jsx)(s.Share.Combo, {
                    onBeforeOpen: function () {
                      return (
                        s.Loading.show({
                          content: '\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u5206\u4EAB\u94FE\u63A5'
                        }),
                        new Promise(function (T) {
                          setTimeout(function () {
                            s.Loading.hide(),
                              B({
                                wechat: {
                                  title: '\u6807\u9898',
                                  description: '\u63CF\u8FF0',
                                  imageUrl: 'https://res.waiqin365.com/d/seedsui/logo.png',
                                  url: 'https://www.baidu.com'
                                },
                                miniprogram: {
                                  title: '\u6807\u9898',
                                  description: '\u63CF\u8FF0',
                                  imageUrl: 'https://res.waiqin365.com/d/seedsui/logo.png',
                                  url: 'https://servicewechat.com/wxascheme/jump_wxa?url=weixin://dl/business/?t=IUGVzjsue7u',
                                  miniProgramId: 'gh_00011085b545',
                                  miniProgramPath:
                                    '/pages/Login/index?sharePath=%2Fpages%2FBlog%2FShareDetail%2Findex%3Finfoid%3D5083717378142702100&tenantid=6019160693176440421'
                                },
                                moments: {
                                  title: '\u6807\u9898',
                                  description: '\u63CF\u8FF0',
                                  imageUrl: 'https://res.waiqin365.com/d/seedsui/logo.png',
                                  url: 'https://www.baidu.com'
                                },
                                wecom: {
                                  title: '\u6807\u9898',
                                  description: '\u63CF\u8FF0',
                                  imageUrl: 'https://res.waiqin365.com/d/seedsui/logo.png',
                                  url: 'https://www.baidu.com'
                                },
                                dingtalk: {
                                  title: '\u6807\u9898',
                                  description: '\u63CF\u8FF0',
                                  imageUrl: 'https://res.waiqin365.com/d/seedsui/logo.png',
                                  url: 'https://www.baidu.com'
                                },
                                lark: {
                                  title: '\u6807\u9898',
                                  description: '\u63CF\u8FF0',
                                  imageUrl: 'https://res.waiqin365.com/d/seedsui/logo.png',
                                  url: 'https://www.baidu.com'
                                }
                              }),
                              T(!0)
                          }, 2e3)
                        })
                      )
                    },
                    shareTo: L,
                    children: (0, r.jsx)(s.Button, {
                      className: 'primary flex',
                      style: { margin: '12px 10px' },
                      children: '\u5206\u4EAB'
                    })
                  })
                ]
              })
            })
          )
        })
    },
    88079: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(67171),
        n = e(23522),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        return (0, t.jsx)(l.Layout, {
          className: 'full',
          children: (0, t.jsxs)(l.Layout.Main, {
            children: [
              (0, t.jsx)(l.Divider, {
                children: '\u9489\u9489\u9009\u62E9\u7167\u7247(\u7ED3\u679C\u4E0D\u540C)'
              }),
              (0, t.jsx)(a.Z, {
                language: 'javascript',
                customStyle: { overflowX: 'auto' },
                style: n.Z,
                showLineNumbers: !0,
                wrapLongLines: !0,
                children: `Bridge.chooseImage({
  count: 5,
  sizeType: ['compressed'],
  sourceType: ['album', 'camera'],
  success: async (res) => {
    // Difference is result => res.localFiles
  }
})`
              }),
              (0, t.jsx)(l.Divider, {
                children:
                  '\u9489\u9489\u4E0A\u4F20(\u7C7B\u4F3C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u4E0A\u4F20)'
              }),
              (0, t.jsx)(a.Z, {
                language: 'javascript',
                customStyle: { overflowX: 'auto' },
                style: n.Z,
                showLineNumbers: !0,
                wrapLongLines: !0,
                children: `Bridge.uploadImage({
  url: window.origin + ownServerUrl,
  localFile: localFile, // { fileType: '', filePath: '' }
  header: {
    'Content-Type': 'multipart/form-data',
    Cookie: document.cookie,
    Authorization:  \`Bearer \${localStorage.getItem('xxx-token')}\` // \u4E0A\u4F20\u9700\u8981\u5355\u72EC\u5904\u7406cookie
  },
  formData: {
    file1: localFile.filePath,
    uploadPath: formatUploadDir(uploadDir),
    // other formData
  },
  success: function (result) {
    // Own server return result
  },
  fail: function (error) {
    // error
  }
})`
              })
            ]
          })
        })
      }
    },
    34323: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        function l() {
          a.Clipboard.copy('https://lyrixi.github.io/lyrixi-design-mobile/', {
            success: function () {
              a.Toast.show({ content: 'Copy to clipboard success!' })
            }
          })
        }
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)('div', { onClick: l, children: 'Copy to clipboard' })
        })
      }
    },
    953: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        function l() {
          console.log(
            a.DOMUtil.classNames(
              void 0,
              null,
              ' ',
              'className1',
              'className2',
              'className3 className4'
            )
          )
        }
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)('div', { onClick: l, children: 'Generate class' })
        })
      }
    },
    63702: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'toDate' }),
                  (0, n.jsx)('div', {
                    style: { margin: '0 12px' },
                    onClick: function () {
                      console.log(a.DateUtil.toDate('2023-10-01 12:01:36')),
                        console.log(a.DateUtil.toDate('12:01:36')),
                        console.log(a.DateUtil.toDate('12:01'))
                    },
                    children: 'Click to Date'
                  })
                ]
              }),
              (0, n.jsxs)(a.Card, {
                children: [
                  (0, n.jsx)(a.Divider, { children: 'Get UTC' }),
                  (0, n.jsx)('div', {
                    style: { margin: '0 12px' },
                    onClick: function () {
                      var t = a.DateUtil.timeZonePlaceName()
                      console.log('zone:', t)
                      var s = a.DateUtil.utcOffset()
                      console.log('utcOffset:', s)
                      var r = a.DateUtil.stringifyUtcOffset(s)
                      console.log('utcDescription:', r)
                      var o = a.DateUtil.utcToTimeZone(new Date('2025-05-09 01:01:36'))
                      console.log('Current date:', a.DateUtil.format(o, 'YYYY-MM-DD hh:mm:ss'))
                      var _ = a.DateUtil.utcToTimeZone(
                        new Date('2025-05-09 01:01:36'),
                        a.DateUtil.parseUtcOffset('UTC+08:00')
                      )
                      console.log(
                        'Utc to Timezone UTC+8:',
                        a.DateUtil.format(_, 'YYYY-MM-DD hh:mm:ss')
                      )
                      var u = a.DateUtil.betweenTimeZones(
                        new Date('2025-05-09 01:01:36'),
                        a.DateUtil.parseUtcOffset('UTC+08:00'),
                        a.DateUtil.parseUtcOffset('UTC+09:00')
                      )
                      console.log(
                        'Between TimeZones UTC+8 To UTC+9:',
                        a.DateUtil.format(u, 'YYYY-MM-DD hh:mm:ss')
                      )
                      var d = a.DateUtil.timeZoneToUtc(
                        new Date('2025-05-09 01:01:36'),
                        a.DateUtil.parseUtcOffset('UTC+08:00')
                      )
                      console.log('Timezone to Utc:', a.DateUtil.format(d, 'YYYY-MM-DD hh:mm:ss'))
                    },
                    children: 'Click to get UTC infomation'
                  })
                ]
              })
            ]
          })
        })
      }
    },
    77659: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (
          (0, h.useEffect)(function () {
            a.Debugger.addTrigger()
          }, []),
          (0, n.jsx)(a.Layout, {
            className: 'full',
            children: (0, n.jsx)(a.Layout.Main, {
              children: '\u5DE6\u4E0B\u89D2\u70B9\u51FB10\u6B21\u547C\u51FA\u6697\u95E8'
            })
          })
        )
      }
    },
    61904: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsxs)(a.Layout.Main, {
            children: [
              (0, n.jsx)('p', { className: 'demo-title', children: 'language' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.language }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'protocol' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.protocol }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'host' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.host }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'domain' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.domain }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'kernel' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.kernel }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'device' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.device }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'os' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.os }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'osVersion' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.osVersion }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'model' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.model }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'platform' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.platform }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'platformVersion' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.platformVersion }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'isOnLine' }),
              (0, n.jsx)(a.Card, {
                style: { padding: 12 },
                children: String(a.Device.isOnLine || '')
              }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'userAgent' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.userAgent }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'getUrlParameter' }),
              (0, n.jsx)(a.Card, {
                style: { padding: 12 },
                children: a.Device.getUrlParameter('locale')
              }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'screenWidth' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.screenWidth }),
              (0, n.jsx)('p', { className: 'demo-title', children: 'screenHeight' }),
              (0, n.jsx)(a.Card, { style: { padding: 12 }, children: a.Device.screenHeight }),
              (0, n.jsx)('p', {
                className: 'demo-title',
                children: 'compareVersion: 7_7_10 vs 7_7_5'
              }),
              (0, n.jsx)(a.Card, {
                style: { padding: 12 },
                children: a.Device.compareVersion('7_7_10', '7_7_5', '_')
              })
            ]
          })
        })
      }
    },
    95816: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsx)(a.Layout.Main, { children: '\u5B9A\u4F4D' })
        })
      }
    },
    63369: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsx)(a.Layout.Main, { children: '\u5B9A\u4F4D' })
        })
      }
    },
    64868: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(49886),
        n = e(85893)
      i.default = function () {
        return (0, n.jsx)(a.Layout, {
          className: 'full',
          children: (0, n.jsx)(a.Layout.Main, { children: '\u5B9A\u4F4D' })
        })
      }
    },
    37017: function (f, i, e) {
      e.r(i),
        e.d(i, {
          default: function () {
            return o
          }
        })
      var h = e(67294),
        a = e(49886),
        n = e(27484),
        l = e.n(n),
        t = e(33852),
        s = JSON.parse(
          `{"SeedsUI_cancel":"Cancel","SeedsUI_access_error":"Forbidden access {0}","SeedsUI_date_format_error":"Illegal date format","SeedsUI_access_min_error":"Forbidden access is less than {0}","SeedsUI_access_max_error":"Forbidden access greater than {0}","SeedsUI_calendar_week_monday":"One","SeedsUI_calendar_week_tuesday":"Two","SeedsUI_calendar_week_wednesday":"Three","SeedsUI_calendar_week_thursday":"Four","SeedsUI_calendar_week_friday":"Five","SeedsUI_calendar_week_saturday":"Six","SeedsUI_unit_date":"day","SeedsUI_cascader_countries_error":"Failed to get national data","SeedsUI_cascader_countryRegions_error":"Failed to obtain provincial and municipal data","SeedsUI_cascader_incorrect_parameter":"type\u53EA\u652F\u6301: province, city, district, street","SeedsUI_placeholder_select":"Please select","SeedsUI_no_data":"No data yet","SeedsUI_reload":"reload","SeedsUI_data_error":"Failed to get data","datepicker_unit_year":"{0}Y","datepicker_unit_month":"{0}M","datepicker_unit_date":"{0}D","datepicker_unit_hour":"{0}h","datepicker_unit_minute":"{0}m","SeedsUI_today":"today","SeedsUI_yesterday":"yesterday","SeedsUI_last_days":"Nearly {0} days","SeedsUI_this_week":"Week","SeedsUI_this_month":"Month","SeedsUI_last_month":"last month","SeedsUI_this_quarter":"This quarter","SeedsUI_this_year":"this year","SeedsUI_custom":"Customize","SeedsUI_to":"reach","SeedsUI_date_range_selector_title":"Quick selection","SeedsUI_start_time":"Start time","SeedsUI_end_time":"End time","SeedsUI_unit_year":"year","SeedsUI_unit_quarter":"season","SeedsUI_unit_month":"month","SeedsUI_unit_minute":"divide","SeedsUI_unit_week":"week","SeedsUI_dateRange_limit_error":"The date range cannot exceed {0}{1}","SeedsUI_starttime_greater_than_endtime":"The start time cannot be greater than the end time","SeedsUI_date_modal_title_year":"Select Year","SeedsUI_date_modal_title_quarter":"Select the season","SeedsUI_date_modal_title_month":"Select the year and month","SeedsUI_date_modal_title_date":"Select a date","SeedsUI_date_modal_title_time":"Select a time","SeedsUI_date_modal_title_datetime":"Select a date and time","SeedsUI_date_modal_title_week":"Select Week","SeedsUI_cannot_less_than":"It can't be less than","SeedsUI_cannot_greater_than":"Can't be greater than","SeedsUI_image_choose_no_feature":"This photo control does not have a photo function, please do not call to take a photo","SeedsUI_image_choose_no_upload_button":"The photo button was not found, and the call to take a photo failed","SeedsUI_uploading":"Uploading","SeedsUI_upload_error_count":"The network is abnormal, and {0} upload failed to upload","SeedsUI_image_cannot_greater_than":"The total number of photos cannot be greater than {0}","SeedsUI_no_upload_file":"No file selected, can't be uploaded!","SeedsUI_file_need_uploaded":"If there are files on the current page that have not yet been uploaded, please wait for them to be uploaded or deleted before submitting","SeedsUI_password_weak":"weak","SeedsUI_password_medium":"middle","SeedsUI_password_strong":"strong","SeedsUI_link_copy_success":"The link has been copied to the clipboard","SeedsUI_alert_title":"prompt","SeedsUI_link_copy_error":"The link to the clipboard failed, please press and hold to copy","SeedsUI_release_refresh":"Release to refresh immediately","SeedsUI_pull_down_refresh":"The drop-down can be refreshed","SeedsUI_refreshing":"Loading...","SeedsUI_refresh_failed":"Refresh failed","SeedsUI_refresh_success":"The refresh was successful","SeedsUI_no_more_data":"There is no more data","SeedsUI_query_data_error":"Failed to get data, please try again later!","SeedsUI_retry":"retry","SeedsUI_location_failed":"Positioning failed","SeedsUI_positioning":"Positioning...","SeedsUI_get_address_failed":"Failed to get the address, please try again later","SeedsUI_choose_address":"Select an address","SeedsUI_view_address":"Check the address","SeedsUI_no_key_type":"Without a key and a map type, you can't use the map","SeedsUI_map_no_container":"No Container","SeedsUI_current_location":"You are here","SeedsUI_navigation":"navigation","SeedsUI_searching":"Searching","SeedsUI_nearby_recommendation":"Recommended nearby","SeedsUI_map_nearby_shop":"Shopping","SeedsUI_map_nearby_restaurant":"diet","SeedsUI_map_nearby_recreation":"amusement","SeedsUI_map_nearby_scenery":"Attractions","SeedsUI_map_nearby_trip":"Travel","SeedsUI_map_nearby_lodgings":"lodging","SeedsUI_map_nearby_live":"life","SeedsUI_search":"Search","SeedsUI_getting_address":"Get Address...","SeedsUI_map_js_load_failed":"The map gallery failed to load, please try again later","SeedsUI_query_failed":"The query failed","SeedsUI_query_time_out":"The query timed out","SeedsUI_ok":"Are you sure","SeedsUI_config":"Set up","SeedsUI_reset":"reset","SeedsUI_filter":"sift","SeedsUI_select_placeholder":"Please Select","SeedsUI_share_no_support":"This platform does not support sharing","SeedsUI_we_chat":"WeChat","SeedsUI_we_moment":"Circle of friends","SeedsUI_we_mini_program":"Mini programs","SeedsUI_we_com":"WeCom","SeedsUI_ding_talk":"DingTalk","SeedsUI_lark":"Lark","SeedsUI_share_to":"Share on:","SeedsUI_share_failed":"Failed to share","SeedsUI_signature":"signature","SeedsUI_clear":"purge","SeedsUI_confirm":"Confirm","SeedsUI_date_range_custom_title":"Custom selections","SeedsUI_toolbar_date_range_default_display_value":"Custom compartments","SeedsUI_added":"Added","SeedsUI_not_added":"Not added","SeedsUI_typography_ellipsis_toggle_collapse":"Collapse","SeedsUI_typography_ellipsis_toggle_expand":"unfold","SeedsUI_attach":"annex","SeedsUI_upload_preview_error":"The image has not been uploaded successfully and cannot be previewed","SeedsUI_preview_src_error":"The preview address is invalid","SeedsUI_clipboard_success":"The link to the file has been copied to the clipboard, please paste it on your system browser to download","SeedsUI_clipboard_fail_confirm":"The file link to the clipboard failed, please long press to copy<br/>{0}","SeedsUI_count_cannot_greater_than":"The total cannot be greater than {0}","SeedsUI_return_no_fileName":"No fileName is returned, unable to upload","SeedsUI_return_no_fileSize":"fileSize is not returned, and cannot be uploaded","SeedsUI_choose_type_error":"Only files in {0} format can be selected","SeedsUI_fileSize_cannot_greater_than":"The file size cannot exceed {0}M","SeedsUI_no_fileName":"The file name was not obtained and could not be uploaded","SeedsUI_no_upload_feature":"This control does not have an upload function, please do not call to take a photo","SeedsUI_no_upload_button":"The upload button was not found, and the upload call failed","SeedsUI_upload_network_error":"The network is abnormal and the upload fails","SeedsUI_no_video_src_error":"Please pass in the video source","SeedsUI_video_sdk_load_failed":"There was an error loading the player library, please try again later","SeedsUI_invalid_image_src":"The image address is invalid","SeedsUI_image_load_failed":"The image failed to load","SeedsUI_invoke_prompt":"invoke can only be used in WeChat or APP","SeedsUI_only_mobile":"This feature is only available on mobile phones","SeedsUI_location_permission_denied_error":"Targeting fails, and the user rejects the request for geolocation","SeedsUI_location_unavailable_error":"Location failed, location information is unavailable","SeedsUI_location_timeout_error":"The location failed, and the request to get the user's location timed out","SeedsUI_location_unknown_error":"The positioning system fails, and the positioning system fails","SeedsUI_location_not_supported":"The current browser does not support positioning","SeedsUI_open_location_prompt":"openLocation can only be used in WeCom or APP","SeedsUI_chooseImage_prompt":"chooseImage can only be used in WeChat or APP","SeedsUI_uploadImage_prompt":"uploadImage can only be used in WeChat or APP","SeedsUI_previewImage_prompt":"previewImage can only be used in the app","SeedsUI_previewFile_prompt":"previewFile can only be used in WeCom or APP","SeedsUI_onHistoryBack_prompt":"onHistoryBack can only be used in WeCom or APP","SeedsUI_only_app_wechat":"This feature is only available on WeChat or APP","SeedsUI_scanCode_failed":"Failed to scan the code","SeedsUI_try_again_later":"Please try again later","SeedsUI_uploadFile_prompt":"uploadFile can only be used in the app","SeedsUI_quit_page_confirm":"Are you sure you want to leave this page?","SeedsUI_alipayMiniProgram_js_load_failed":"The js of the payment applet failed to load","SeedsUI_weChat_js_load_failed":"WeChat js failed to load","SeedsUI_scanQRCode_prompt":"Please use the QR code on WeChat on your mobile phone","SeedsUI_copy_clipboard_success":"Copied to clipboard successfully","SeedsUI_copy_clipboard_refuse":"The current device does not allow access to the clipboard","SeedsUI_open_debugger_failed":"Failed to open the debug panel"}`
        ),
        r = e(85893)
      l().locale('en'), a.LocaleUtil.setLocale('en_US', s)
      var o = function () {
        return (0, r.jsx)(a.Layout, {
          className: 'full',
          children: (0, r.jsxs)(a.Layout.Main, {
            children: [
              (0, r.jsx)(a.Divider, { children: 'Node' }),
              (0, r.jsx)(a.Card, {
                style: { padding: 'var(--space-l)' },
                children: a.LocaleUtil.locale('\u8FD17\u65E5', 'SeedsUI_last_days', [
                  (0, r.jsx)('span', { style: { color: 'red' }, children: '7' }, '0')
                ])
              }),
              (0, r.jsx)(a.Divider, { children: 'String' }),
              (0, r.jsxs)(a.Card, {
                style: { padding: 'var(--space-l)' },
                children: [
                  (0, r.jsx)('div', { children: 'variable:' }),
                  a.LocaleUtil.locale('\u8FD1x\u65E5', 'SeedsUI_last_days', ['7'])
                ]
              }),
              (0, r.jsx)(a.Divider, { children: 'No locale data' }),
              (0, r.jsx)(a.Card, {
                style: { padding: 'var(--space-l)' },
                children: a.LocaleUtil.locale('\u8FD1{0}\u65E5', '', ['7'])
              }),
              (0, r.jsx)(a.Divider, { children: 'Remark Node' }),
              (0, r.jsx)(a.Card, {
                style: { padding: 'var(--space-l)' },
                children: a.LocaleUtil.locale((0, r.jsx)('div', { children: 'Node' }))
              }),
              (0, r.jsx)(a.Divider, { children: 'Remark Number' }),
              (0, r.jsx)(a.Card, {
                style: { padding: 'var(--space-l)' },
                children: a.LocaleUtil.locale(7)
              })
            ]
          })
        })
      }
    },
    7930: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(71415),
        n = e.n(a),
        l = e(49886),
        t = e(85893)
      new (n())(),
        (i.default = function () {
          return (0, t.jsx)(l.Layout, {
            className: 'full',
            children: (0, t.jsxs)(l.Layout.Main, {
              children: [
                (0, t.jsx)('h2', { children: '\u7EC4\u4EF6' }),
                (0, t.jsx)('p', { className: 'demo-title', children: '\u8BA1\u7B97' }),
                l.MathUtil.strip(0.1 * 0.2)
              ]
            })
          })
        })
    },
    65911: function (f, i, e) {
      e.r(i)
      var h = e(67294),
        a = e(71415),
        n = e.n(a),
        l = e(49886),
        t = e(85893)
      new (n())(),
        (i.default = function () {
          return (0, t.jsx)(l.Layout, {
            className: 'full',
            children: (0, t.jsxs)(l.Layout.Main, {
              children: [
                (0, t.jsx)(l.Divider, { children: 'ObjectUtil' }),
                l.ObjectUtil.isEmpty({}) ? '{} is empty' : '{} is not empty',
                l.ObjectUtil.isEmpty(new Date()) ? 'new date is empty' : 'new date is not empty'
              ]
            })
          })
        })
    },
    21484: function (f, i, e) {
      e.r(i)
      var h = e(17061),
        a = e.n(h),
        n = e(17156),
        l = e.n(n),
        t = e(67294),
        s = e(49886),
        r = e(85893)
      i.default = function () {
        function o() {
          return _.apply(this, arguments)
        }
        function _() {
          return (
            (_ = l()(
              a()().mark(function u() {
                var d
                return a()().wrap(function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (c.next = 2),
                          s.Request.get(
                            'https://res.waiqin365.com/p/platform/district/en_US/86.json',
                            null,
                            { cacheKey: '0' }
                          )
                        )
                      case 2:
                        ;(d = c.sent), console.log(d)
                      case 4:
                      case 'end':
                        return c.stop()
                    }
                }, u)
              })
            )),
            _.apply(this, arguments)
          )
        }
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)('div', { onClick: o, children: 'Request by cacheKey' })
        })
      }
    },
    46203: function (f, i, e) {
      e.r(i)
      var h = e(17061),
        a = e.n(h),
        n = e(17156),
        l = e.n(n),
        t = e(67294),
        s = e(49886),
        r = e(85893)
      i.default = function () {
        function o() {
          return _.apply(this, arguments)
        }
        function _() {
          return (
            (_ = l()(
              a()().mark(function u() {
                var d
                return a()().wrap(function (c) {
                  for (;;)
                    switch ((c.prev = c.next)) {
                      case 0:
                        return (
                          (c.next = 2),
                          s.Request.get(
                            'https://res.waiqin365.com/p/platform/district/zh_CN/86.json.info'
                          )
                        )
                      case 2:
                        ;(d = c.sent), console.log(d)
                      case 4:
                      case 'end':
                        return c.stop()
                    }
                }, u)
              })
            )),
            _.apply(this, arguments)
          )
        }
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsx)('div', { onClick: o, children: 'Request get' })
        })
      }
    },
    79014: function (f, i, e) {
      e.r(i)
      var h = e(27424),
        a = e.n(h),
        n = e(67294),
        l = e(49886),
        t = e(85893)
      i.default = function () {
        var s = l.Storage.useCacheState(null, {
            name: 'cache-state-pageName-futureName',
            persist: !0
          }),
          r = a()(s, 2),
          o = r[0],
          _ = r[1]
        return (0, t.jsx)(l.Layout, {
          className: 'full',
          children: (0, t.jsxs)(l.Layout.Main, {
            children: [
              (0, t.jsx)('h1', { children: 'Cache State' }),
              (0, t.jsx)('p', { children: JSON.stringify(o) }),
              (0, t.jsx)(l.Button, {
                className: 'flex primary',
                onClick: function () {
                  _({ name: 'morpheus' })
                },
                children: 'Set Cache'
              }),
              (0, t.jsx)(l.Button, {
                className: 'flex',
                onClick: function () {
                  _()
                },
                children: 'Remove Cache'
              }),
              (0, t.jsx)(l.Button, {
                className: 'flex',
                onClick: function () {
                  alert(JSON.stringify(o))
                },
                children: 'Get Cache'
              })
            ]
          })
        })
      }
    }
  }
])
