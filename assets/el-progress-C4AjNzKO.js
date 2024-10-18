import {
  k as z,
  q as g,
  s as _,
  t as I,
  v as E,
  bP as Fe,
  bQ as ce,
  aE as Re,
  bR as pe,
  ar as fe,
  aB as ve,
  D as ee,
  o as m,
  x as $,
  C as v,
  u as e,
  d as N,
  y as A,
  B as F,
  aj as W,
  a0 as k,
  c as D,
  a as L,
  z as Le,
  A as M,
  _ as K,
  G as ye,
  aw as me,
  ah as ge,
  ad as J,
  bA as C,
  Z as Te,
  r as he,
  a3 as Ue,
  aH as De,
  aI as be,
  a2 as H,
  b as O,
  bS as Be,
  bT as Oe,
  aV as Ne,
  bU as _e,
  M as je,
  by as Y,
  bV as te,
  bW as Ae,
  bX as Me,
  w as se,
  O as qe,
  L as Ie,
  Q as He,
  $ as ae,
  H as oe
} from './index-BvD4IwVX.js'
import {
  t as x,
  f as V,
  e as ze
} from './_plugin-vue_export-helper-BjCaq_WF.js'
import { l as Ke } from './el-message-5YY4hjQa.js'
import { i as We } from './isEqual-m2aT7rjz.js'
var Ve = 1,
  Xe = 4
function ne(o) {
  return Ke(o, Ve | Xe)
}
const Ge = z({
    type: {
      type: String,
      default: 'line',
      values: ['line', 'circle', 'dashboard']
    },
    percentage: {
      type: Number,
      default: 0,
      validator: (o) => o >= 0 && o <= 100
    },
    status: {
      type: String,
      default: '',
      values: ['', 'success', 'exception', 'warning']
    },
    indeterminate: Boolean,
    duration: { type: Number, default: 3 },
    strokeWidth: { type: Number, default: 6 },
    strokeLinecap: { type: g(String), default: 'round' },
    textInside: Boolean,
    width: { type: Number, default: 126 },
    showText: { type: Boolean, default: !0 },
    color: { type: g([String, Array, Function]), default: '' },
    striped: Boolean,
    stripedFlow: Boolean,
    format: { type: g(Function), default: (o) => `${o}%` }
  }),
  Qe = _({ name: 'ElProgress' }),
  Je = _({
    ...Qe,
    props: Ge,
    setup(o) {
      const s = o,
        a = {
          success: '#13ce66',
          exception: '#ff4949',
          warning: '#e6a23c',
          default: '#20a0ff'
        },
        l = I('progress'),
        d = E(() => {
          const r = {
              width: `${s.percentage}%`,
              animationDuration: `${s.duration}s`
            },
            b = P(s.percentage)
          return (
            b.includes('gradient')
              ? (r.background = b)
              : (r.backgroundColor = b),
            r
          )
        }),
        c = E(() => ((s.strokeWidth / s.width) * 100).toFixed(1)),
        f = E(() =>
          ['circle', 'dashboard'].includes(s.type)
            ? Number.parseInt(`${50 - Number.parseFloat(c.value) / 2}`, 10)
            : 0
        ),
        w = E(() => {
          const r = f.value,
            b = s.type === 'dashboard'
          return `
          M 50 50
          m 0 ${b ? '' : '-'}${r}
          a ${r} ${r} 0 1 1 0 ${b ? '-' : ''}${r * 2}
          a ${r} ${r} 0 1 1 0 ${b ? '' : '-'}${r * 2}
          `
        }),
        h = E(() => 2 * Math.PI * f.value),
        S = E(() => (s.type === 'dashboard' ? 0.75 : 1)),
        R = E(() => `${(-1 * h.value * (1 - S.value)) / 2}px`),
        y = E(() => ({
          strokeDasharray: `${h.value * S.value}px, ${h.value}px`,
          strokeDashoffset: R.value
        })),
        j = E(() => ({
          strokeDasharray: `${h.value * S.value * (s.percentage / 100)}px, ${h.value}px`,
          strokeDashoffset: R.value,
          transition:
            'stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s'
        })),
        n = E(() => {
          let r
          return (
            s.color ? (r = P(s.percentage)) : (r = a[s.status] || a.default), r
          )
        }),
        i = E(() =>
          s.status === 'warning'
            ? Fe
            : s.type === 'line'
              ? s.status === 'success'
                ? ce
                : Re
              : s.status === 'success'
                ? pe
                : fe
        ),
        t = E(() =>
          s.type === 'line' ? 12 + s.strokeWidth * 0.4 : s.width * 0.111111 + 2
        ),
        p = E(() => s.format(s.percentage))
      function u(r) {
        const b = 100 / r.length
        return r
          .map((T, U) => (ee(T) ? { color: T, percentage: (U + 1) * b } : T))
          .sort((T, U) => T.percentage - U.percentage)
      }
      const P = (r) => {
        var b
        const { color: B } = s
        if (ve(B)) return B(r)
        if (ee(B)) return B
        {
          const T = u(B)
          for (const U of T) if (U.percentage > r) return U.color
          return (b = T[T.length - 1]) == null ? void 0 : b.color
        }
      }
      return (r, b) => (
        m(),
        $(
          'div',
          {
            class: v([
              e(l).b(),
              e(l).m(r.type),
              e(l).is(r.status),
              {
                [e(l).m('without-text')]: !r.showText,
                [e(l).m('text-inside')]: r.textInside
              }
            ]),
            role: 'progressbar',
            'aria-valuenow': r.percentage,
            'aria-valuemin': '0',
            'aria-valuemax': '100'
          },
          [
            r.type === 'line'
              ? (m(),
                $(
                  'div',
                  { key: 0, class: v(e(l).b('bar')) },
                  [
                    N(
                      'div',
                      {
                        class: v(e(l).be('bar', 'outer')),
                        style: A({ height: `${r.strokeWidth}px` })
                      },
                      [
                        N(
                          'div',
                          {
                            class: v([
                              e(l).be('bar', 'inner'),
                              {
                                [e(l).bem('bar', 'inner', 'indeterminate')]:
                                  r.indeterminate
                              },
                              {
                                [e(l).bem('bar', 'inner', 'striped')]: r.striped
                              },
                              {
                                [e(l).bem('bar', 'inner', 'striped-flow')]:
                                  r.stripedFlow
                              }
                            ]),
                            style: A(e(d))
                          },
                          [
                            (r.showText || r.$slots.default) && r.textInside
                              ? (m(),
                                $(
                                  'div',
                                  {
                                    key: 0,
                                    class: v(e(l).be('bar', 'innerText'))
                                  },
                                  [
                                    F(
                                      r.$slots,
                                      'default',
                                      { percentage: r.percentage },
                                      () => [N('span', null, W(e(p)), 1)]
                                    )
                                  ],
                                  2
                                ))
                              : k('v-if', !0)
                          ],
                          6
                        )
                      ],
                      6
                    )
                  ],
                  2
                ))
              : (m(),
                $(
                  'div',
                  {
                    key: 1,
                    class: v(e(l).b('circle')),
                    style: A({ height: `${r.width}px`, width: `${r.width}px` })
                  },
                  [
                    (m(),
                    $('svg', { viewBox: '0 0 100 100' }, [
                      N(
                        'path',
                        {
                          class: v(e(l).be('circle', 'track')),
                          d: e(w),
                          stroke: `var(${e(l).cssVarName('fill-color-light')}, #e5e9f2)`,
                          'stroke-linecap': r.strokeLinecap,
                          'stroke-width': e(c),
                          fill: 'none',
                          style: A(e(y))
                        },
                        null,
                        14,
                        ['d', 'stroke', 'stroke-linecap', 'stroke-width']
                      ),
                      N(
                        'path',
                        {
                          class: v(e(l).be('circle', 'path')),
                          d: e(w),
                          stroke: e(n),
                          fill: 'none',
                          opacity: r.percentage ? 1 : 0,
                          'stroke-linecap': r.strokeLinecap,
                          'stroke-width': e(c),
                          style: A(e(j))
                        },
                        null,
                        14,
                        [
                          'd',
                          'stroke',
                          'opacity',
                          'stroke-linecap',
                          'stroke-width'
                        ]
                      )
                    ]))
                  ],
                  6
                )),
            (r.showText || r.$slots.default) && !r.textInside
              ? (m(),
                $(
                  'div',
                  {
                    key: 2,
                    class: v(e(l).e('text')),
                    style: A({ fontSize: `${e(t)}px` })
                  },
                  [
                    F(r.$slots, 'default', { percentage: r.percentage }, () => [
                      r.status
                        ? (m(),
                          D(
                            e(M),
                            { key: 1 },
                            { default: L(() => [(m(), D(Le(e(i))))]), _: 1 }
                          ))
                        : (m(), $('span', { key: 0 }, W(e(p)), 1))
                    ])
                  ],
                  6
                ))
              : k('v-if', !0)
          ],
          10,
          ['aria-valuenow']
        )
      )
    }
  })
var Ye = K(Je, [['__file', 'progress.vue']])
const Ze = ye(Ye),
  ke = Symbol('uploadContextKey'),
  xe = 'ElUpload'
class et extends Error {
  constructor(s, a, l, d) {
    super(s),
      (this.name = 'UploadAjaxError'),
      (this.status = a),
      (this.method = l),
      (this.url = d)
  }
}
function re(o, s, a) {
  let l
  return (
    a.response
      ? (l = `${a.response.error || a.response}`)
      : a.responseText
        ? (l = `${a.responseText}`)
        : (l = `fail to ${s.method} ${o} ${a.status}`),
    new et(l, a.status, s.method, o)
  )
}
function tt(o) {
  const s = o.responseText || o.response
  if (!s) return s
  try {
    return JSON.parse(s)
  } catch {
    return s
  }
}
const st = (o) => {
    typeof XMLHttpRequest > 'u' && x(xe, 'XMLHttpRequest is undefined')
    const s = new XMLHttpRequest(),
      a = o.action
    s.upload &&
      s.upload.addEventListener('progress', (c) => {
        const f = c
        ;(f.percent = c.total > 0 ? (c.loaded / c.total) * 100 : 0),
          o.onProgress(f)
      })
    const l = new FormData()
    if (o.data)
      for (const [c, f] of Object.entries(o.data))
        me(f) && f.length ? l.append(c, ...f) : l.append(c, f)
    l.append(o.filename, o.file, o.file.name),
      s.addEventListener('error', () => {
        o.onError(re(a, o, s))
      }),
      s.addEventListener('load', () => {
        if (s.status < 200 || s.status >= 300) return o.onError(re(a, o, s))
        o.onSuccess(tt(s))
      }),
      s.open(o.method, a, !0),
      o.withCredentials && 'withCredentials' in s && (s.withCredentials = !0)
    const d = o.headers || {}
    if (d instanceof Headers) d.forEach((c, f) => s.setRequestHeader(f, c))
    else
      for (const [c, f] of Object.entries(d))
        ge(f) || s.setRequestHeader(c, String(f))
    return s.send(l), s
  },
  $e = ['text', 'picture', 'picture-card']
let at = 1
const Z = () => Date.now() + at++,
  we = z({
    action: { type: String, default: '#' },
    headers: { type: g(Object) },
    method: { type: String, default: 'post' },
    data: { type: g([Object, Function, Promise]), default: () => J({}) },
    multiple: Boolean,
    name: { type: String, default: 'file' },
    drag: Boolean,
    withCredentials: Boolean,
    showFileList: { type: Boolean, default: !0 },
    accept: { type: String, default: '' },
    fileList: { type: g(Array), default: () => J([]) },
    autoUpload: { type: Boolean, default: !0 },
    listType: { type: String, values: $e, default: 'text' },
    httpRequest: { type: g(Function), default: st },
    disabled: Boolean,
    limit: Number
  }),
  ot = z({
    ...we,
    beforeUpload: { type: g(Function), default: C },
    beforeRemove: { type: g(Function) },
    onRemove: { type: g(Function), default: C },
    onChange: { type: g(Function), default: C },
    onPreview: { type: g(Function), default: C },
    onSuccess: { type: g(Function), default: C },
    onProgress: { type: g(Function), default: C },
    onError: { type: g(Function), default: C },
    onExceed: { type: g(Function), default: C },
    crossorigin: { type: g(String) }
  }),
  nt = z({
    files: { type: g(Array), default: () => J([]) },
    disabled: { type: Boolean, default: !1 },
    handlePreview: { type: g(Function), default: C },
    listType: { type: String, values: $e, default: 'text' },
    crossorigin: { type: g(String) }
  }),
  rt = { remove: (o) => !!o },
  lt = _({ name: 'ElUploadList' }),
  it = _({
    ...lt,
    props: nt,
    emits: rt,
    setup(o, { emit: s }) {
      const a = o,
        { t: l } = Te(),
        d = I('upload'),
        c = I('icon'),
        f = I('list'),
        w = V(),
        h = he(!1),
        S = E(() => [
          d.b('list'),
          d.bm('list', a.listType),
          d.is('disabled', a.disabled)
        ]),
        R = (y) => {
          s('remove', y)
        }
      return (y, j) => (
        m(),
        D(
          _e,
          { tag: 'ul', class: v(e(S)), name: e(f).b() },
          {
            default: L(() => [
              (m(!0),
              $(
                Ue,
                null,
                De(
                  y.files,
                  (n, i) => (
                    m(),
                    $(
                      'li',
                      {
                        key: n.uid || n.name,
                        class: v([
                          e(d).be('list', 'item'),
                          e(d).is(n.status),
                          { focusing: h.value }
                        ]),
                        tabindex: '0',
                        onKeydown: be((t) => !e(w) && R(n), ['delete']),
                        onFocus: (t) => (h.value = !0),
                        onBlur: (t) => (h.value = !1),
                        onClick: (t) => (h.value = !1)
                      },
                      [
                        F(y.$slots, 'default', { file: n, index: i }, () => [
                          y.listType === 'picture' ||
                          (n.status !== 'uploading' &&
                            y.listType === 'picture-card')
                            ? (m(),
                              $(
                                'img',
                                {
                                  key: 0,
                                  class: v(e(d).be('list', 'item-thumbnail')),
                                  src: n.url,
                                  crossorigin: y.crossorigin,
                                  alt: ''
                                },
                                null,
                                10,
                                ['src', 'crossorigin']
                              ))
                            : k('v-if', !0),
                          n.status === 'uploading' ||
                          y.listType !== 'picture-card'
                            ? (m(),
                              $(
                                'div',
                                {
                                  key: 1,
                                  class: v(e(d).be('list', 'item-info'))
                                },
                                [
                                  N(
                                    'a',
                                    {
                                      class: v(e(d).be('list', 'item-name')),
                                      onClick: H(
                                        (t) => y.handlePreview(n),
                                        ['prevent']
                                      )
                                    },
                                    [
                                      O(
                                        e(M),
                                        { class: v(e(c).m('document')) },
                                        { default: L(() => [O(e(Be))]), _: 1 },
                                        8,
                                        ['class']
                                      ),
                                      N(
                                        'span',
                                        {
                                          class: v(
                                            e(d).be('list', 'item-file-name')
                                          ),
                                          title: n.name
                                        },
                                        W(n.name),
                                        11,
                                        ['title']
                                      )
                                    ],
                                    10,
                                    ['onClick']
                                  ),
                                  n.status === 'uploading'
                                    ? (m(),
                                      D(
                                        e(Ze),
                                        {
                                          key: 0,
                                          type:
                                            y.listType === 'picture-card'
                                              ? 'circle'
                                              : 'line',
                                          'stroke-width':
                                            y.listType === 'picture-card'
                                              ? 6
                                              : 2,
                                          percentage: Number(n.percentage),
                                          style: A(
                                            y.listType === 'picture-card'
                                              ? ''
                                              : 'margin-top: 0.5rem'
                                          )
                                        },
                                        null,
                                        8,
                                        [
                                          'type',
                                          'stroke-width',
                                          'percentage',
                                          'style'
                                        ]
                                      ))
                                    : k('v-if', !0)
                                ],
                                2
                              ))
                            : k('v-if', !0),
                          N(
                            'label',
                            { class: v(e(d).be('list', 'item-status-label')) },
                            [
                              y.listType === 'text'
                                ? (m(),
                                  D(
                                    e(M),
                                    {
                                      key: 0,
                                      class: v([
                                        e(c).m('upload-success'),
                                        e(c).m('circle-check')
                                      ])
                                    },
                                    { default: L(() => [O(e(ce))]), _: 1 },
                                    8,
                                    ['class']
                                  ))
                                : ['picture-card', 'picture'].includes(
                                      y.listType
                                    )
                                  ? (m(),
                                    D(
                                      e(M),
                                      {
                                        key: 1,
                                        class: v([
                                          e(c).m('upload-success'),
                                          e(c).m('check')
                                        ])
                                      },
                                      { default: L(() => [O(e(pe))]), _: 1 },
                                      8,
                                      ['class']
                                    ))
                                  : k('v-if', !0)
                            ],
                            2
                          ),
                          e(w)
                            ? k('v-if', !0)
                            : (m(),
                              D(
                                e(M),
                                {
                                  key: 2,
                                  class: v(e(c).m('close')),
                                  onClick: (t) => R(n)
                                },
                                { default: L(() => [O(e(fe))]), _: 2 },
                                1032,
                                ['class', 'onClick']
                              )),
                          k(
                            ' Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn'
                          ),
                          k(' This is a bug which needs to be fixed '),
                          k(' TODO: Fix the incorrect navigation interaction '),
                          e(w)
                            ? k('v-if', !0)
                            : (m(),
                              $(
                                'i',
                                { key: 3, class: v(e(c).m('close-tip')) },
                                W(e(l)('el.upload.deleteTip')),
                                3
                              )),
                          y.listType === 'picture-card'
                            ? (m(),
                              $(
                                'span',
                                {
                                  key: 4,
                                  class: v(e(d).be('list', 'item-actions'))
                                },
                                [
                                  N(
                                    'span',
                                    {
                                      class: v(e(d).be('list', 'item-preview')),
                                      onClick: (t) => y.handlePreview(n)
                                    },
                                    [
                                      O(
                                        e(M),
                                        { class: v(e(c).m('zoom-in')) },
                                        { default: L(() => [O(e(Oe))]), _: 1 },
                                        8,
                                        ['class']
                                      )
                                    ],
                                    10,
                                    ['onClick']
                                  ),
                                  e(w)
                                    ? k('v-if', !0)
                                    : (m(),
                                      $(
                                        'span',
                                        {
                                          key: 0,
                                          class: v(
                                            e(d).be('list', 'item-delete')
                                          ),
                                          onClick: (t) => R(n)
                                        },
                                        [
                                          O(
                                            e(M),
                                            { class: v(e(c).m('delete')) },
                                            {
                                              default: L(() => [O(e(Ne))]),
                                              _: 1
                                            },
                                            8,
                                            ['class']
                                          )
                                        ],
                                        10,
                                        ['onClick']
                                      ))
                                ],
                                2
                              ))
                            : k('v-if', !0)
                        ])
                      ],
                      42,
                      ['onKeydown', 'onFocus', 'onBlur', 'onClick']
                    )
                  )
                ),
                128
              )),
              F(y.$slots, 'append')
            ]),
            _: 3
          },
          8,
          ['class', 'name']
        )
      )
    }
  })
var le = K(it, [['__file', 'upload-list.vue']])
const ut = z({ disabled: { type: Boolean, default: !1 } }),
  dt = { file: (o) => me(o) },
  Ee = 'ElUploadDrag',
  ct = _({ name: Ee }),
  pt = _({
    ...ct,
    props: ut,
    emits: dt,
    setup(o, { emit: s }) {
      je(ke) || x(Ee, 'usage: <el-upload><el-upload-dragger /></el-upload>')
      const l = I('upload'),
        d = he(!1),
        c = V(),
        f = (h) => {
          if (c.value) return
          ;(d.value = !1), h.stopPropagation()
          const S = Array.from(h.dataTransfer.files)
          s('file', S)
        },
        w = () => {
          c.value || (d.value = !0)
        }
      return (h, S) => (
        m(),
        $(
          'div',
          {
            class: v([e(l).b('dragger'), e(l).is('dragover', d.value)]),
            onDrop: H(f, ['prevent']),
            onDragover: H(w, ['prevent']),
            onDragleave: H((R) => (d.value = !1), ['prevent'])
          },
          [F(h.$slots, 'default')],
          42,
          ['onDrop', 'onDragover', 'onDragleave']
        )
      )
    }
  })
var ft = K(pt, [['__file', 'upload-dragger.vue']])
const vt = z({
    ...we,
    beforeUpload: { type: g(Function), default: C },
    onRemove: { type: g(Function), default: C },
    onStart: { type: g(Function), default: C },
    onSuccess: { type: g(Function), default: C },
    onProgress: { type: g(Function), default: C },
    onError: { type: g(Function), default: C },
    onExceed: { type: g(Function), default: C }
  }),
  yt = _({ name: 'ElUploadContent', inheritAttrs: !1 }),
  mt = _({
    ...yt,
    props: vt,
    setup(o, { expose: s }) {
      const a = o,
        l = I('upload'),
        d = V(),
        c = Y({}),
        f = Y(),
        w = (t) => {
          if (t.length === 0) return
          const {
            autoUpload: p,
            limit: u,
            fileList: P,
            multiple: r,
            onStart: b,
            onExceed: B
          } = a
          if (u && P.length + t.length > u) {
            B(t, P)
            return
          }
          r || (t = t.slice(0, 1))
          for (const T of t) {
            const U = T
            ;(U.uid = Z()), b(U), p && h(U)
          }
        },
        h = async (t) => {
          if (((f.value.value = ''), !a.beforeUpload)) return R(t)
          let p,
            u = {}
          try {
            const r = a.data,
              b = a.beforeUpload(t)
            ;(u = te(a.data) ? ne(a.data) : a.data),
              (p = await b),
              te(a.data) && We(r, u) && (u = ne(a.data))
          } catch {
            p = !1
          }
          if (p === !1) {
            a.onRemove(t)
            return
          }
          let P = t
          p instanceof Blob &&
            (p instanceof File
              ? (P = p)
              : (P = new File([p], t.name, { type: t.type }))),
            R(Object.assign(P, { uid: t.uid }), u)
        },
        S = async (t, p) => (ve(t) ? t(p) : t),
        R = async (t, p) => {
          const {
            headers: u,
            data: P,
            method: r,
            withCredentials: b,
            name: B,
            action: T,
            onProgress: U,
            onSuccess: Ce,
            onError: Se,
            httpRequest: Pe
          } = a
          try {
            p = await S(p ?? P, t)
          } catch {
            a.onRemove(t)
            return
          }
          const { uid: X } = t,
            G = {
              headers: u || {},
              withCredentials: b,
              file: t,
              data: p,
              method: r,
              filename: B,
              action: T,
              onProgress: (q) => {
                U(q, t)
              },
              onSuccess: (q) => {
                Ce(q, t), delete c.value[X]
              },
              onError: (q) => {
                Se(q, t), delete c.value[X]
              }
            },
            Q = Pe(G)
          ;(c.value[X] = Q),
            Q instanceof Promise && Q.then(G.onSuccess, G.onError)
        },
        y = (t) => {
          const p = t.target.files
          p && w(Array.from(p))
        },
        j = () => {
          d.value || ((f.value.value = ''), f.value.click())
        },
        n = () => {
          j()
        }
      return (
        s({
          abort: (t) => {
            Ae(c.value)
              .filter(t ? ([u]) => String(t.uid) === u : () => !0)
              .forEach(([u, P]) => {
                P instanceof XMLHttpRequest && P.abort(), delete c.value[u]
              })
          },
          upload: h
        }),
        (t, p) => (
          m(),
          $(
            'div',
            {
              class: v([
                e(l).b(),
                e(l).m(t.listType),
                e(l).is('drag', t.drag),
                e(l).is('disabled', e(d))
              ]),
              tabindex: e(d) ? '-1' : '0',
              onClick: j,
              onKeydown: be(H(n, ['self']), ['enter', 'space'])
            },
            [
              t.drag
                ? (m(),
                  D(
                    ft,
                    { key: 0, disabled: e(d), onFile: w },
                    { default: L(() => [F(t.$slots, 'default')]), _: 3 },
                    8,
                    ['disabled']
                  ))
                : F(t.$slots, 'default', { key: 1 }),
              N(
                'input',
                {
                  ref_key: 'inputRef',
                  ref: f,
                  class: v(e(l).e('input')),
                  name: t.name,
                  disabled: e(d),
                  multiple: t.multiple,
                  accept: t.accept,
                  type: 'file',
                  onChange: y,
                  onClick: H(() => {}, ['stop'])
                },
                null,
                42,
                ['name', 'disabled', 'multiple', 'accept', 'onClick']
              )
            ],
            42,
            ['tabindex', 'onKeydown']
          )
        )
      )
    }
  })
var ie = K(mt, [['__file', 'upload-content.vue']])
const ue = 'ElUpload',
  de = (o) => {
    var s
    ;(s = o.url) != null && s.startsWith('blob:') && URL.revokeObjectURL(o.url)
  },
  gt = (o, s) => {
    const a = Me(o, 'fileList', void 0, { passive: !0 }),
      l = (n) => a.value.find((i) => i.uid === n.uid)
    function d(n) {
      var i
      ;(i = s.value) == null || i.abort(n)
    }
    function c(n = ['ready', 'uploading', 'success', 'fail']) {
      a.value = a.value.filter((i) => !n.includes(i.status))
    }
    function f(n) {
      a.value = a.value.filter((i) => i !== n)
    }
    const w = (n, i) => {
        const t = l(i)
        t &&
          (console.error(n),
          (t.status = 'fail'),
          f(t),
          o.onError(n, t, a.value),
          o.onChange(t, a.value))
      },
      h = (n, i) => {
        const t = l(i)
        t &&
          (o.onProgress(n, t, a.value),
          (t.status = 'uploading'),
          (t.percentage = Math.round(n.percent)))
      },
      S = (n, i) => {
        const t = l(i)
        t &&
          ((t.status = 'success'),
          (t.response = n),
          o.onSuccess(n, t, a.value),
          o.onChange(t, a.value))
      },
      R = (n) => {
        ge(n.uid) && (n.uid = Z())
        const i = {
          name: n.name,
          percentage: 0,
          status: 'ready',
          size: n.size,
          raw: n,
          uid: n.uid
        }
        if (o.listType === 'picture-card' || o.listType === 'picture')
          try {
            i.url = URL.createObjectURL(n)
          } catch (t) {
            ze(ue, t.message), o.onError(t, i, a.value)
          }
        ;(a.value = [...a.value, i]), o.onChange(i, a.value)
      },
      y = async (n) => {
        const i = n instanceof File ? l(n) : n
        i || x(ue, 'file to be removed not found')
        const t = (p) => {
          d(p), f(p), o.onRemove(p, a.value), de(p)
        }
        o.beforeRemove
          ? (await o.beforeRemove(i, a.value)) !== !1 && t(i)
          : t(i)
      }
    function j() {
      a.value
        .filter(({ status: n }) => n === 'ready')
        .forEach(({ raw: n }) => {
          var i
          return n && ((i = s.value) == null ? void 0 : i.upload(n))
        })
    }
    return (
      se(
        () => o.listType,
        (n) => {
          ;(n !== 'picture-card' && n !== 'picture') ||
            (a.value = a.value.map((i) => {
              const { raw: t, url: p } = i
              if (!p && t)
                try {
                  i.url = URL.createObjectURL(t)
                } catch (u) {
                  o.onError(u, i, a.value)
                }
              return i
            }))
        }
      ),
      se(
        a,
        (n) => {
          for (const i of n)
            i.uid || (i.uid = Z()), i.status || (i.status = 'success')
        },
        { immediate: !0, deep: !0 }
      ),
      {
        uploadFiles: a,
        abort: d,
        clearFiles: c,
        handleError: w,
        handleProgress: h,
        handleStart: R,
        handleSuccess: S,
        handleRemove: y,
        submit: j,
        revokeFileObjectURL: de
      }
    )
  },
  ht = _({ name: 'ElUpload' }),
  bt = _({
    ...ht,
    props: ot,
    setup(o, { expose: s }) {
      const a = o,
        l = V(),
        d = Y(),
        {
          abort: c,
          submit: f,
          clearFiles: w,
          uploadFiles: h,
          handleStart: S,
          handleError: R,
          handleRemove: y,
          handleSuccess: j,
          handleProgress: n,
          revokeFileObjectURL: i
        } = gt(a, d),
        t = E(() => a.listType === 'picture-card'),
        p = E(() => ({
          ...a,
          fileList: h.value,
          onStart: S,
          onProgress: n,
          onSuccess: j,
          onError: R,
          onRemove: y
        }))
      return (
        qe(() => {
          h.value.forEach(i)
        }),
        Ie(ke, { accept: He(a, 'accept') }),
        s({
          abort: c,
          submit: f,
          clearFiles: w,
          handleStart: S,
          handleRemove: y
        }),
        (u, P) => (
          m(),
          $('div', null, [
            e(t) && u.showFileList
              ? (m(),
                D(
                  le,
                  {
                    key: 0,
                    disabled: e(l),
                    'list-type': u.listType,
                    files: e(h),
                    crossorigin: u.crossorigin,
                    'handle-preview': u.onPreview,
                    onRemove: e(y)
                  },
                  ae(
                    {
                      append: L(() => [
                        O(
                          ie,
                          oe({ ref_key: 'uploadRef', ref: d }, e(p)),
                          {
                            default: L(() => [
                              u.$slots.trigger
                                ? F(u.$slots, 'trigger', { key: 0 })
                                : k('v-if', !0),
                              !u.$slots.trigger && u.$slots.default
                                ? F(u.$slots, 'default', { key: 1 })
                                : k('v-if', !0)
                            ]),
                            _: 3
                          },
                          16
                        )
                      ]),
                      _: 2
                    },
                    [
                      u.$slots.file
                        ? {
                            name: 'default',
                            fn: L(({ file: r, index: b }) => [
                              F(u.$slots, 'file', { file: r, index: b })
                            ])
                          }
                        : void 0
                    ]
                  ),
                  1032,
                  [
                    'disabled',
                    'list-type',
                    'files',
                    'crossorigin',
                    'handle-preview',
                    'onRemove'
                  ]
                ))
              : k('v-if', !0),
            !e(t) || (e(t) && !u.showFileList)
              ? (m(),
                D(
                  ie,
                  oe({ key: 1, ref_key: 'uploadRef', ref: d }, e(p)),
                  {
                    default: L(() => [
                      u.$slots.trigger
                        ? F(u.$slots, 'trigger', { key: 0 })
                        : k('v-if', !0),
                      !u.$slots.trigger && u.$slots.default
                        ? F(u.$slots, 'default', { key: 1 })
                        : k('v-if', !0)
                    ]),
                    _: 3
                  },
                  16
                ))
              : k('v-if', !0),
            u.$slots.trigger
              ? F(u.$slots, 'default', { key: 2 })
              : k('v-if', !0),
            F(u.$slots, 'tip'),
            !e(t) && u.showFileList
              ? (m(),
                D(
                  le,
                  {
                    key: 3,
                    disabled: e(l),
                    'list-type': u.listType,
                    files: e(h),
                    crossorigin: u.crossorigin,
                    'handle-preview': u.onPreview,
                    onRemove: e(y)
                  },
                  ae({ _: 2 }, [
                    u.$slots.file
                      ? {
                          name: 'default',
                          fn: L(({ file: r, index: b }) => [
                            F(u.$slots, 'file', { file: r, index: b })
                          ])
                        }
                      : void 0
                  ]),
                  1032,
                  [
                    'disabled',
                    'list-type',
                    'files',
                    'crossorigin',
                    'handle-preview',
                    'onRemove'
                  ]
                ))
              : k('v-if', !0)
          ])
        )
      )
    }
  })
var kt = K(bt, [['__file', 'upload.vue']])
const St = ye(kt)
export { St as E }
