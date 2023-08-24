(function(){"use strict";var e={4037:function(e,t,o){var i=o(9242),s=o(3396),n=o(7139);const d={class:"app has-background-danger-light has-text-danger"},r={class:"top has-background-danger-light"},l={class:"columns"},c={class:"column is-4 is-flex is-align-items-center is-justify-content-center"},u={key:0},a=(0,s._)("div",{class:"column is-4 is-flex is-align-items-center is-justify-content-center"},[(0,s._)("h1",{class:"title has-text-danger is-size-1"},"Maya's Songs")],-1),v={key:0,class:"column is-4 is-flex is-align-items-center is-justify-content-center"},p={key:0,class:"video-selection columns is-multiline"};function h(e,t,o,i,h,g){const m=(0,s.up)("VideoSelect"),f=(0,s.up)("SelectedVideos");return(0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("div",r,[(0,s._)("div",l,[(0,s._)("div",c,[h.showSelectedVideos?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",u,"You have selected "+(0,n.zw)(g.selectedVideosDuration)+" of your 8 videos",1))]),a,h.showSelectedVideos?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",v,[g.playPossible?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"button is-danger",onClick:t[0]||(t[0]=(...e)=>g.playSelectedVideos&&g.playSelectedVideos(...e))},"Play")):(0,s.kq)("",!0)]))])]),h.showSelectedVideos?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",p,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(h.videos,((e,t)=>((0,s.wg)(),(0,s.j4)(m,{key:t,video:e,isSelected:h.selectedVideos.includes(e),onToggleSelection:g.toggleVideoSelection,class:"column is-4"},null,8,["video","isSelected","onToggleSelection"])))),128))])),h.showSelectedVideos?((0,s.wg)(),(0,s.j4)(f,{key:1,selectedVideos:h.selectedVideos},null,8,["selectedVideos"])):(0,s.kq)("",!0)])}o(7658);var g=o(4161);const m={class:"selected-videos"};function f(e,t,o,i,n,d){const r=(0,s.up)("VideoPlayer");return(0,s.wg)(),(0,s.iD)("div",m,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.selectedVideos,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:t,class:"video-container"},[(0,s.Wm)(r,{video:e},null,8,["video"])])))),128))])}const b={class:"video-player"},y=["src"];function V(e,t,o,i,n,d){return(0,s.wg)(),(0,s.iD)("div",b,[(0,s._)("iframe",{src:d.embeddedUrl,frameborder:"0",allowfullscreen:""},null,8,y)])}var w={name:"VideoPlayer",props:{video:{type:Object,required:!0}},computed:{embeddedUrl(){const e=this.extractVideoId(this.video.url);return`https://www.youtube.com/embed/${e}`}},methods:{extractVideoId(e){const t=e.match(/(?:\/embed\/|v=|\/\d{2,4}\/|youtu\.be\/|\/v\/|\/e\/|\/u\/\d{1,2}\/|\/embed\/|\/v\/|e\/|u\/\d{1,2}\/|^youtu\.be\/)([^#?\s]+)/);return t&&11===t[1].length?t[1]:null}}},S=o(89);const x=(0,S.Z)(w,[["render",V],["__scopeId","data-v-357ce60a"]]);var k=x,_={name:"SelectedVideos",props:{selectedVideos:{type:Array,required:!0}},components:{VideoPlayer:k},methods:{getEmbeddedUrl(e){const t=this.extractVideoId(e.url);return`https://www.youtube.com/embed/${t}`},extractVideoId(e){const t=e.match(/(?:\/embed\/|v=|\/\d{2,4}\/|youtu\.be\/|\/v\/|\/e\/|\/u\/\d{1,2}\/|\/embed\/|\/v\/|e\/|u\/\d{1,2}\/|^youtu\.be\/)([^#?\s]+)/);return t&&11===t[1].length?t[1]:null}}};const D=(0,S.Z)(_,[["render",f],["__scopeId","data-v-44bdb34e"]]);var O=D;const j={class:"container"},I=["src"];function P(e,t,o,i,d,r){return(0,s.wg)(),(0,s.iD)("div",j,[(0,s._)("div",{class:"block",onClick:t[0]||(t[0]=(...e)=>r.toggleSelection&&r.toggleSelection(...e))},[(0,s._)("div",{class:(0,n.C_)(["video-select",{selected:o.isSelected}])},[(0,s._)("p",null,"This video counts as "+(0,n.zw)(this.video.value),1),(0,s._)("img",{src:r.thumbnailUrl,alt:"Video Thumbnail"},null,8,I)],2)])])}var U={name:"VideoSelect",props:{video:{type:Object,required:!0},isSelected:Boolean},computed:{thumbnailUrl(){const e=this.extractVideoId(this.video.url);return`https://img.youtube.com/vi/${e}/0.jpg`}},methods:{extractVideoId(e){const t=e.match(/(?:\/embed\/|v=|\/\d{2,4}\/|youtu\.be\/|\/v\/|\/e\/|\/u\/\d{1,2}\/|\/embed\/|\/v\/|e\/|u\/\d{1,2}\/|^youtu\.be\/)([^#?\s]+)/);return t&&11===t[1].length?t[1]:null},toggleSelection(){this.$emit("toggle-selection",this.video)}}};const q=(0,S.Z)(U,[["render",P],["__scopeId","data-v-018ebc08"]]);var T=q,z={name:"App",data(){return{videos:[],selectedVideos:[],totalDurationLimit:8,showSelectedVideos:!1}},components:{SelectedVideos:O,VideoSelect:T},computed:{playPossible(){return this.selectedVideosDuration<=this.totalDurationLimit},selectedVideosDuration(){return this.selectedVideos.reduce(((e,t)=>e+parseFloat(t.value)),0)}},methods:{async fetchVideoUrls(){try{const e=await g.Z.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vRp17gc4isgUx4lS9joSFBbE-82O1JetltGyzHGr4ge93bUzEHIavTzNfvzMdx3qPGOgGxM6Munei--/pub?output=csv");let t=e.data.split("\r\n"),o=t.shift().split(",").map((e=>e.toLowerCase()));this.videos=t.map((e=>{let t=e.split(","),i={};return t.forEach(((e,t)=>{i[o[t]]=e.replaceAll(";","\n")})),i}))}catch(e){console.error("Error fetching video URLs",e)}},getEmbeddedUrl(e){const t=this.extractVideoId(e.url);return`https://www.youtube.com/embed/${t}`},extractVideoId(e){const t=e.match(/(?:\/embed\/|v=|\/\d{2,4}\/|youtu\.be\/|\/v\/|\/e\/|\/u\/\d{1,2}\/|\/embed\/|\/v\/|e\/|u\/\d{1,2}\/|^youtu\.be\/)([^#?\s]+)/);return t&&11===t[1].length?t[1]:null},playSelectedVideos(){console.log("In playSelectedVideos"),this.selectedVideosDuration>this.totalDurationLimit?alert("Total duration exceeds 40 minutes. Please select fewer videos."):this.showSelectedVideos=!0},getVideoDuration(e){const t=e.duration.split(":");return 60*parseInt(t[0])+parseInt(t[1])},toggleVideoSelection(e){const t=this.selectedVideos.indexOf(e);-1!==t?this.selectedVideos.splice(t,1):this.selectedVideos.push(e)}},mounted(){this.fetchVideoUrls()}};const C=(0,S.Z)(z,[["render",h]]);var E=C;(0,i.ri)(E).mount("#app")}},t={};function o(i){var s=t[i];if(void 0!==s)return s.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,i,s,n){if(!i){var d=1/0;for(u=0;u<e.length;u++){i=e[u][0],s=e[u][1],n=e[u][2];for(var r=!0,l=0;l<i.length;l++)(!1&n||d>=n)&&Object.keys(o.O).every((function(e){return o.O[e](i[l])}))?i.splice(l--,1):(r=!1,n<d&&(d=n));if(r){e.splice(u--,1);var c=s();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[i,s,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,n,d=i[0],r=i[1],l=i[2],c=0;if(d.some((function(t){return 0!==e[t]}))){for(s in r)o.o(r,s)&&(o.m[s]=r[s]);if(l)var u=l(o)}for(t&&t(i);c<d.length;c++)n=d[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},i=self["webpackChunkyoutube_app"]=self["webpackChunkyoutube_app"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(4037)}));i=o.O(i)})();
//# sourceMappingURL=app.1072596c.js.map