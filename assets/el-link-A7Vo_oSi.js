import {
  k as m,
  p as y,
  s as f,
  t as v,
  v as h,
  o as n,
  x as o,
  c as r,
  a as b,
  z as g,
  u as i,
  A as C,
  a0 as l,
  C as d,
  B as c,
  _ as E,
  G as B
} from './index-BvD4IwVX.js'
const S = m({
    type: {
      type: String,
      values: ['primary', 'success', 'warning', 'info', 'danger', 'default'],
      default: 'default'
    },
    underline: { type: Boolean, default: !0 },
    disabled: Boolean,
    href: { type: String, default: '' },
    target: { type: String, default: '_self' },
    icon: { type: y }
  }),
  $ = { click: (t) => t instanceof MouseEvent },
  w = f({ name: 'ElLink' }),
  L = f({
    ...w,
    props: S,
    emits: $,
    setup(t, { emit: u }) {
      const s = t,
        a = v('link'),
        p = h(() => [
          a.b(),
          a.m(s.type),
          a.is('disabled', s.disabled),
          a.is('underline', s.underline && !s.disabled)
        ])
      function k(e) {
        s.disabled || u('click', e)
      }
      return (e, _) => (
        n(),
        o(
          'a',
          {
            class: d(i(p)),
            href: e.disabled || !e.href ? void 0 : e.href,
            target: e.disabled || !e.href ? void 0 : e.target,
            onClick: k
          },
          [
            e.icon
              ? (n(),
                r(
                  i(C),
                  { key: 0 },
                  { default: b(() => [(n(), r(g(e.icon)))]), _: 1 }
                ))
              : l('v-if', !0),
            e.$slots.default
              ? (n(),
                o(
                  'span',
                  { key: 1, class: d(i(a).e('inner')) },
                  [c(e.$slots, 'default')],
                  2
                ))
              : l('v-if', !0),
            e.$slots.icon ? c(e.$slots, 'icon', { key: 2 }) : l('v-if', !0)
          ],
          10,
          ['href', 'target']
        )
      )
    }
  })
var P = E(L, [['__file', 'link.vue']])
const I = B(P)
export { I as E }
