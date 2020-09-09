(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{693:function(t,a,s){"use strict";s.r(a);var n=s(38),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"random-boolean"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#random-boolean","aria-hidden":"true"}},[t._v("#")]),t._v(" Random.boolean")]),t._v(" "),s("ul",[s("li",[t._v("Random.boolean()")]),t._v(" "),s("li",[t._v("Random.boolean( min, max, current )")])]),t._v(" "),s("p",[t._v("返回一个随机的布尔值。")]),t._v(" "),s("h3",{attrs:{id:"min"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#min","aria-hidden":"true"}},[t._v("#")]),t._v(" min "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("指示参数 current 出现的概率。概率计算公式为 "),s("code",[t._v("min / (min + max)")]),t._v("。该参数的默认值为 1，即有 50% 的概率返回参数 current。")]),t._v(" "),s("h3",{attrs:{id:"max"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max","aria-hidden":"true"}},[t._v("#")]),t._v(" max "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("指示参数 current 的相反值 "),s("code",[t._v("!current")]),t._v(" 出现的概率。概率计算公式为 "),s("code",[t._v("max / (min + max)")]),t._v("。该参数的默认值为 "),s("code",[t._v("1")]),t._v("，即有 50% 的概率返回参数 "),s("code",[t._v("!current")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"current"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#current","aria-hidden":"true"}},[t._v("#")]),t._v(" current "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("可选值为布尔值 "),s("code",[t._v("true")]),t._v(" 或 "),s("code",[t._v("false")]),t._v("。如果未传入任何参数，则返回 "),s("code",[t._v("true")]),t._v(" 和 "),s("code",[t._v("false")]),t._v(" 的概率各为 50%。该参数没有默认值。在该方法的内部，依据原生方法 Math.random() 返回的（浮点）数来计算和返回布尔值，例如在最简单的情况下，返回值是表达式 "),s("code",[t._v("Math.random() >= 0.5")]),t._v(" 的执行结果。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("boolean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => false")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bool")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => true")]),t._v("\n")])])]),s("h2",{attrs:{id:"random-natural"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#random-natural","aria-hidden":"true"}},[t._v("#")]),t._v(" Random.natural")]),t._v(" "),s("ul",[s("li",[t._v("Random.natural()")]),t._v(" "),s("li",[t._v("Random.natural( min )")]),t._v(" "),s("li",[t._v("Random.natural( min, max )")])]),t._v(" "),s("p",[t._v("返回一个随机的自然数（大于等于 0 的整数）。")]),t._v(" "),s("h3",{attrs:{id:"min-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#min-2","aria-hidden":"true"}},[t._v("#")]),t._v(" min "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("指示随机自然数的最小值。默认值为 0。")]),t._v(" "),s("h3",{attrs:{id:"max-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-2","aria-hidden":"true"}},[t._v("#")]),t._v(" max "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("指示随机自然数的最大值。默认值为 9007199254740992。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("natural")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 1002794054057984")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("natural")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 71529071126209")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("natural")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 77")]),t._v("\n")])])]),s("h2",{attrs:{id:"random-integer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#random-integer","aria-hidden":"true"}},[t._v("#")]),t._v(" Random.integer")]),t._v(" "),s("ul",[s("li",[t._v("Random.integer()")]),t._v(" "),s("li",[t._v("Random.integer( min )")]),t._v(" "),s("li",[t._v("Random.integer( min, max )")])]),t._v(" "),s("p",[t._v("返回一个随机的整数。")]),t._v(" "),s("h3",{attrs:{id:"min-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#min-3","aria-hidden":"true"}},[t._v("#")]),t._v(" min "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("指示随机整数的最小值。默认值为 -9007199254740992。")]),t._v(" "),s("h3",{attrs:{id:"max-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-3","aria-hidden":"true"}},[t._v("#")]),t._v(" max "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("指示随机整数的最大值。默认值为 9007199254740992。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => -3815311811805184")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 4303764511003750")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("integer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 96")]),t._v("\n")])])]),s("h2",{attrs:{id:"random-float"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#random-float","aria-hidden":"true"}},[t._v("#")]),t._v(" Random.float")]),t._v(" "),s("ul",[s("li",[t._v("Random.float()")]),t._v(" "),s("li",[t._v("Random.float( min )")]),t._v(" "),s("li",[t._v("Random.float( min, max )")]),t._v(" "),s("li",[t._v("Random.float( min, max, dmin )")]),t._v(" "),s("li",[t._v("Random.float( min, max, dmin, dmax )")])]),t._v(" "),s("p",[t._v("返回一个随机的浮点数。")]),t._v(" "),s("h3",{attrs:{id:"min-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#min-4","aria-hidden":"true"}},[t._v("#")]),t._v(" min "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("整数部分的最小值。默认值为 -9007199254740992。")]),t._v(" "),s("h3",{attrs:{id:"max-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-4","aria-hidden":"true"}},[t._v("#")]),t._v(" max "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("整数部分的最大值。默认值为 9007199254740992。")]),t._v(" "),s("h3",{attrs:{id:"dmin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dmin","aria-hidden":"true"}},[t._v("#")]),t._v(" dmin "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("小数部分位数的最小值。默认值为 0。")]),t._v(" "),s("h3",{attrs:{id:"dmax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dmax","aria-hidden":"true"}},[t._v("#")]),t._v(" dmax "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("小数部分位数的最大值。默认值为 17。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => -1766114241544192.8")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 556530504040448.25")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 82.56779679549358")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 61.718533677927894")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => 70.6849")]),t._v("\n")])])]),s("h2",{attrs:{id:"random-character"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#random-character","aria-hidden":"true"}},[t._v("#")]),t._v(" Random.character")]),t._v(" "),s("ul",[s("li",[t._v("Random.character()")]),t._v(" "),s("li",[t._v("Random.character('lower' | 'upper' | 'number' | 'symbol' )")]),t._v(" "),s("li",[t._v("Random.character( pool )")])]),t._v(" "),s("p",[t._v("返回一个随机字符。")]),t._v(" "),s("h3",{attrs:{id:"pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pool","aria-hidden":"true"}},[t._v("#")]),t._v(" pool "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("字符串。表示字符池，将从中选择一个字符返回。")]),t._v(" "),s("p",[t._v("如果传入了 "),s("code",[t._v("'lower'")]),t._v(" 或 "),s("code",[t._v("'upper'")]),t._v("、"),s("code",[t._v("'number'")]),t._v("、"),s("code",[t._v("'symbol'")]),t._v("，表示从内置的字符池从选取：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  lower"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abcdefghijklmnopqrstuvwxyz"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  upper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABCDEFGHIJKLMNOPQRSTUVWXYZ"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0123456789"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!@#$%^&*()[]"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果未传入该参数，则从 "),s("code",[t._v("lower + upper + number + symbol")]),t._v(" 中随机选取一个字符返回。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("character")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "P"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("character")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lower'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "y"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("character")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'upper'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "X"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("character")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "1"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("character")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'symbol'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "&"')]),t._v("\n")])])]),s("h2",{attrs:{id:"random-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#random-string","aria-hidden":"true"}},[t._v("#")]),t._v(" Random.string")]),t._v(" "),s("ul",[s("li",[t._v("Random.string()")]),t._v(" "),s("li",[t._v("Random.string( length )")]),t._v(" "),s("li",[t._v("Random.string( pool, length )")]),t._v(" "),s("li",[t._v("Random.string( min, max )")]),t._v(" "),s("li",[t._v("Random.string( pool, min, max )")])]),t._v(" "),s("p",[t._v("返回一个随机字符串。")]),t._v(" "),s("h3",{attrs:{id:"pool-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pool-2","aria-hidden":"true"}},[t._v("#")]),t._v(" pool "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("字符串。表示字符池，将从中选择一个字符返回。")]),t._v(" "),s("p",[t._v("如果传入 "),s("code",[t._v("'lower'")]),t._v(" 或 "),s("code",[t._v("'upper'")]),t._v("、"),s("code",[t._v("'number'")]),t._v("、"),s("code",[t._v("'symbol'")]),t._v("，表示从内置的字符池从选取：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    lower"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abcdefghijklmnopqrstuvwxyz"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    upper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ABCDEFGHIJKLMNOPQRSTUVWXYZ"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0123456789"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!@#$%^&*()[]"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果未传入该参数，则从 "),s("code",[t._v("lower + upper + number + symbol")]),t._v(" 中随机选取一个字符返回。")]),t._v(" "),s("h3",{attrs:{id:"min-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#min-5","aria-hidden":"true"}},[t._v("#")]),t._v(" min "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("随机字符串的最小长度。默认值为 3。")]),t._v(" "),s("h3",{attrs:{id:"max-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-5","aria-hidden":"true"}},[t._v("#")]),t._v(" max "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("随机字符串的最大长度。默认值为 7。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "pJjDUe"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "GaadY"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lower'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "jseqj"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "UuGQgSYk"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aeiou'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "ea"')]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'壹贰叁肆伍陆柒捌玖拾'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// => "肆捌伍叁"')]),t._v("\n")])])]),s("h2",{attrs:{id:"random-range"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#random-range","aria-hidden":"true"}},[t._v("#")]),t._v(" Random.range")]),t._v(" "),s("ul",[s("li",[t._v("Random.range( stop )")]),t._v(" "),s("li",[t._v("Random.range( start, stop )")]),t._v(" "),s("li",[t._v("Random.range( start, stop, step )")])]),t._v(" "),s("p",[t._v("返回一个整型数组。")]),t._v(" "),s("h3",{attrs:{id:"start-必选"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-必选","aria-hidden":"true"}},[t._v("#")]),t._v(" start "),s("code",[t._v("必选")])]),t._v(" "),s("p",[t._v("数组中整数的起始值。")]),t._v(" "),s("h3",{attrs:{id:"stop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop","aria-hidden":"true"}},[t._v("#")]),t._v(" stop "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("数组中整数的结束值（不包含在返回值中）。")]),t._v(" "),s("h3",{attrs:{id:"step"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step","aria-hidden":"true"}},[t._v("#")]),t._v(" step "),s("Badge",{attrs:{text:"可选"}})],1),t._v(" "),s("p",[t._v("数组中整数之间的步长。默认值为 1。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Random"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [3, 4, 5, 6]")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [1, 3, 5, 7, 9]")]),t._v("\nRandom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("range")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => [1, 4, 7]")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);