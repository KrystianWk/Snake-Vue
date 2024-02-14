(function(){"use strict";var e={4372:function(e,t,n){var o=n(6116),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Board")],1)},s=[],i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"board",tabindex:"0"},on:{keydown:e.handleKeyDown}},[e._l(e.rows,(function(n){return t("div",{key:n,staticClass:"board-row"},e._l(e.cols,(function(o){return t("div",{key:o,staticClass:"board-col"},[e.isSnake(o,n)?t("div",{staticClass:"snake-segment"}):e.isFood(o,n)?t("div",{staticClass:"food"}):e._e()])})),0)})),e.gameOver?t("button",{on:{click:e.resetGame}},[e._v("New Game")]):e._e(),e.gameOver?t("form",{on:{submit:function(t){return t.preventDefault(),e.saveScore.apply(null,arguments)}}},[t("label",{attrs:{for:"username"}},[e._v("Nick:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",id:"username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),t("button",{attrs:{type:"submit"}},[e._v("Zapisz wynik")])]):e._e(),t("button",{directives:[{name:"show",rawName:"v-show",value:e.gameOver&&!e.showScores,expression:"gameOver && !showScores"}],on:{click:e.fetchScores}},[e._v(" Pokaż wyniki ")]),e.showScores&&e.scores.length?t("table",[e._m(0),t("tbody",e._l(e.scores,(function(n,o){return t("tr",{key:o},[t("td",[e._v(e._s(n.username))]),t("td",[e._v(e._s(n.score))])])})),0)]):e._e()],2)},a=[function(){var e=this,t=e._self._c;return t("thead",[t("tr",[t("th",[e._v("Użytkownik")]),t("th",[e._v("Wynik")])])])}],c=n(2964),u={name:"GameBoard",data(){return{cols:20,rows:20,snakeSegments:[{x:5,y:5}],foodPosition:{x:10,y:10},direction:"RIGHT",gameOver:!1,username:"",scores:[],showScores:!1}},methods:{handleKeyDown(e){if(!this.gameOver)switch(e.key){case"ArrowUp":"DOWN"!==this.direction&&(this.direction="UP");break;case"ArrowDown":"UP"!==this.direction&&(this.direction="DOWN");break;case"ArrowLeft":"RIGHT"!==this.direction&&(this.direction="LEFT");break;case"ArrowRight":"LEFT"!==this.direction&&(this.direction="RIGHT");break}},moveSnake(){if(this.gameOver)return;let e={x:this.snakeSegments[0].x,y:this.snakeSegments[0].y};switch(this.direction){case"UP":e.y--;break;case"DOWN":e.y++;break;case"LEFT":e.x--;break;case"RIGHT":e.x++;break}e.x<0||e.x>=this.cols||e.y<0||e.y>=this.rows||this.snakeSegments.slice(1).some((t=>t.x===e.x&&t.y===e.y))?this.gameOver=!0:(this.snakeSegments.unshift(e),this.isFood(e.x,e.y)?this.generateFood():this.snakeSegments.pop())},isSnake(e,t){return this.snakeSegments.some((n=>n.x===e&&n.y===t))},isFood(e,t){return this.foodPosition.x===e&&this.foodPosition.y===t},generateFood(){this.foodPosition={x:Math.floor(Math.random()*this.cols),y:Math.floor(Math.random()*this.rows)}},resetGame(){window.location.reload()},fetchScores(){c.c.get("http://localhost:3000/scores").then((e=>{console.log("Pobrane dane:",e.data),this.scores=e.data,this.showScores=!0})).catch((e=>{console.error("Błąd pobierania wyników:",e)}))},saveScore(){const e=this.username,t=this.snakeSegments.length;c.c.post("http://localhost:3000/save-score",{username:e,score:t}).then((e=>{console.log(e.data)})).catch((n=>{console.error("Błąd podczas zapisywania wyniku:",e,t,n)}))}},mounted(){setInterval((()=>{this.moveSnake()}),250)}},l=u,d=n(2528),h=(0,d.c)(l,i,a,!1,null,"6c689bf8",null),f=h.exports,v={components:{Board:f}},m=v,p=(0,d.c)(m,r,s,!1,null,null,null),y=p.exports;o.cp.config.productionTip=!1,new o.cp({render:e=>e(y)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,s){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],s=e[l][2];for(var a=!0,c=0;c<o.length;c++)(!1&s||i>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(a=!1,s<i&&(i=s));if(a){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[o,r,s]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,i=o[0],a=o[1],c=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var l=c(n)}for(t&&t(o);u<i.length;u++)s=i[u],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},o=self["webpackChunkgra_snake"]=self["webpackChunkgra_snake"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[999],(function(){return n(4372)}));o=n.O(o)})();
//# sourceMappingURL=app.4de8a058.js.map