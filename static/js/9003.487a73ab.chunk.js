"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[9003],{9003:(e,n,o)=>{o.d(n,{WobbleUpdater:()=>d});var a=o(4709);class s{constructor(){this.angle=50,this.move=10}load(e){e&&(void 0!==e.angle&&(this.angle=(0,a.Cs)(e.angle)),void 0!==e.move&&(this.move=(0,a.Cs)(e.move)))}}class l{constructor(){this.distance=5,this.enable=!1,this.speed=new s}load(e){if(e&&(void 0!==e.distance&&(this.distance=(0,a.Cs)(e.distance)),void 0!==e.enable&&(this.enable=e.enable),void 0!==e.speed))if((0,a.hj)(e.speed))this.speed.load({angle:e.speed});else{const n=e.speed;void 0!==n.min?this.speed.load({angle:n}):this.speed.load(e.speed)}}}const t=2*Math.PI;const i=2*Math.PI;class d{constructor(e){this.container=e}init(e){var n;const o=e.options.wobble;null!==o&&void 0!==o&&o.enable?e.wobble={angle:(0,a.sZ)()*i,angleSpeed:(0,a.Gu)(o.speed.angle)/360,moveSpeed:(0,a.Gu)(o.speed.move)/10}:e.wobble={angle:0,angleSpeed:0,moveSpeed:0},e.retina.wobbleDistance=(0,a.Gu)(null!==(n=null===o||void 0===o?void 0:o.distance)&&void 0!==n?n:0)*this.container.retina.pixelRatio}isEnabled(e){var n;return!e.destroyed&&!e.spawning&&!(null===(n=e.options.wobble)||void 0===n||!n.enable)}loadOptions(e){e.wobble||(e.wobble=new l);for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];for(const s of o)e.wobble.load(null===s||void 0===s?void 0:s.wobble)}update(e,n){this.isEnabled(e)&&function(e,n){var o;const{wobble:s}=e.options,{wobble:l}=e;if(null===s||void 0===s||!s.enable||!l)return;const i=l.angleSpeed*n.factor,d=l.moveSpeed*n.factor*((null!==(o=e.retina.wobbleDistance)&&void 0!==o?o:0)*n.factor)/(a.X5/60),b=t,{position:c}=e;l.angle+=i,l.angle>b&&(l.angle-=b),c.x+=d*Math.cos(l.angle),c.y+=d*Math.abs(Math.sin(l.angle))}(e,n)}}}}]);
//# sourceMappingURL=9003.487a73ab.chunk.js.map