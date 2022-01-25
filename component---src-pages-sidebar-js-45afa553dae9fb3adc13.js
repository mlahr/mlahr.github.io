"use strict";(self.webpackChunksrc_mlahr_com=self.webpackChunksrc_mlahr_com||[]).push([[921],{6190:function(e,n,r){r.d(n,{Z:function(){return S}});var t=r(885),o=r(4942),i=r(3366),a=r(7462),c=r(7294),l=r(5505),u=r(9408),s=r(5535),d=r(7663),m=r(9240),p=r(8348),v=r(2371),f=r(93),h=r(7761),Z=r(9308),b=r(8416);function y(e){return(0,b.Z)("MuiLink",e)}var g=(0,r(2194).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),k=r(5893),x=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],w={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},E=(0,p.ZP)(Z.Z,{name:"MuiLink",slot:"Root",overridesResolver:function(e,n){var r=e.ownerState;return[n.root,n["underline".concat((0,m.Z)(r.underline))],"button"===r.component&&n.button]}})((function(e){var n=e.theme,r=e.ownerState,t=(0,s.D)(n,"palette.".concat(function(e){return w[e]||e}(r.color)))||r.color;return(0,a.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==t?(0,d.Fq)(t,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===r.component&&(0,o.Z)({position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"}},"&.".concat(g.focusVisible),{outline:"auto"}))})),S=c.forwardRef((function(e,n){var r=(0,v.Z)({props:e,name:"MuiLink"}),o=r.className,s=r.color,d=void 0===s?"primary":s,p=r.component,Z=void 0===p?"a":p,b=r.onBlur,g=r.onFocus,w=r.TypographyClasses,S=r.underline,B=void 0===S?"always":S,C=r.variant,R=void 0===C?"inherit":C,D=(0,i.Z)(r,x),A=(0,f.Z)(),F=A.isFocusVisibleRef,M=A.onBlur,P=A.onFocus,V=A.ref,L=c.useState(!1),N=(0,t.Z)(L,2),T=N[0],_=N[1],j=(0,h.Z)(n,V),$=(0,a.Z)({},r,{color:d,component:Z,focusVisible:T,underline:B,variant:R}),z=function(e){var n=e.classes,r=e.component,t=e.focusVisible,o=e.underline,i={root:["root","underline".concat((0,m.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,u.Z)(i,y,n)}($);return(0,k.jsx)(E,(0,a.Z)({className:(0,l.Z)(z.root,o),classes:w,color:d,component:Z,onBlur:function(e){M(e),!1===F.current&&_(!1),b&&b(e)},onFocus:function(e){P(e),!0===F.current&&_(!0),g&&g(e)},ref:j,ownerState:$,variant:R},D))}))},1629:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var t=r(7294),o=r(4320),i=r(4942),a=r(3366),c=r(7462),l=r(2692),u=r(5332),s=r(8297),d=r(6486),m=r(8348),p=r(2371),v=r(5893),f=["component","direction","spacing","divider","children"];function h(e,n){var r=t.Children.toArray(e).filter(Boolean);return r.reduce((function(e,o,i){return e.push(o),i<r.length-1&&e.push(t.cloneElement(n,{key:"separator-".concat(i)})),e}),[])}var Z=(0,m.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,r=e.theme,t=(0,c.Z)({display:"flex"},(0,l.k9)({theme:r},(0,l.P$)({values:n.direction,breakpoints:r.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var o=(0,u.hB)(r),a=Object.keys(r.breakpoints.values).reduce((function(e,r){return null==n.spacing[r]&&null==n.direction[r]||(e[r]=!0),e}),{}),s=(0,l.P$)({values:n.direction,base:a}),m=(0,l.P$)({values:n.spacing,base:a});t=(0,d.Z)(t,(0,l.k9)({theme:r},m,(function(e,r){return{"& > :not(style) + :not(style)":(0,i.Z)({margin:0},"margin".concat((t=r?s[r]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[t])),(0,u.NA)(o,e))};var t})))}return t})),b=t.forwardRef((function(e,n){var r=(0,p.Z)({props:e,name:"MuiStack"}),t=(0,s.Z)(r),o=t.component,i=void 0===o?"div":o,l=t.direction,u=void 0===l?"column":l,d=t.spacing,m=void 0===d?0:d,b=t.divider,y=t.children,g=(0,a.Z)(t,f),k={direction:u,spacing:m};return(0,v.jsx)(Z,(0,c.Z)({as:i,ownerState:k,ref:n},g,{children:b?h(y,b):y}))})),y=b,g=r(8953),k=r(9308),x=r(6190);var w=function(e){var n=e.archives,r=e.description,i=e.social,a=e.title;return void 0===n?t.createElement(t.Fragment,null):t.createElement(o.ZP,{item:!0,xs:12,md:4},t.createElement(g.Z,{elevation:0,sx:{p:2,bgcolor:"grey.200"}},t.createElement(k.Z,{variant:"h6",gutterBottom:!0},a),t.createElement(k.Z,null,r)),t.createElement(k.Z,{variant:"h6",gutterBottom:!0,sx:{mt:3}},"Archives"),n.map((function(e){return t.createElement(x.Z,{display:"block",variant:"body1",href:e.url,key:e.title},e.title)})),t.createElement(k.Z,{variant:"h6",gutterBottom:!0,sx:{mt:3}},"Social"),i.map((function(e){return t.createElement(x.Z,{display:"block",variant:"body1",href:"#",key:e.name,sx:{mb:.5}},t.createElement(y,{direction:"row",spacing:1,alignItems:"center"},t.createElement(e.icon,null),t.createElement("span",null,e.name)))})))}}}]);
//# sourceMappingURL=component---src-pages-sidebar-js-45afa553dae9fb3adc13.js.map