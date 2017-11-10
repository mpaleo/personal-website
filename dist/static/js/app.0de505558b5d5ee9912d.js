webpackJsonp([0],{Fs8J:function(s,n,t){"use strict";var e=t("czCT");n.a={components:{Terminal:e.a},name:"Home"}},M93x:function(s,n,t){"use strict";function e(s){t("lBzv")}var a=t("xJD8"),_=t("cgPG"),o=t("VU/8"),p=e,i=o(a.a,_.a,!1,p,null,null);n.a=i.exports},NHnr:function(s,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("7+uW"),a=t("M93x"),_=t("YaEn");e.a.config.productionTip=!1,new e.a({el:"#app",router:_.a,template:"<App/>",components:{App:a.a}})},POAX:function(s,n,t){"use strict";n.a={name:"Terminal",data:function(){return{output:[],input:"",prompt:"> ",buffer:{size:5,index:0,commands:[]}}},methods:{sendCommand:function(){var s=this;this.buffer.index=0,this.buffer.commands.length<this.buffer.size?this.buffer.commands.push(this.input):(this.buffer.commands.shift(),this.buffer.commands.push(this.input)),this.output.push(this.prompt+this.input),this.processCommand(this.input).forEach(function(n){s.output.push(n)}),this.input=""},prevBuffer:function(){this.buffer.index+1<=this.buffer.commands.length&&(this.buffer.index++,this.input=this.buffer.commands[this.buffer.commands.length-this.buffer.index])},nextBuffer:function(){this.buffer.index-1>0&&(this.buffer.index--,this.input=this.buffer.commands[this.buffer.commands.length-this.buffer.index])},processCommand:function(s){var n=[];switch(s){case"help":n.push("whoami       Print effective info about me"),n.push("github       Go to my GitHub"),n.push("packagist    Go to my Packagist"),n.push("linkedin     Go to my LinkedIn"),n.push("twitter      Go to my Twitter"),n.push("clear        Clear the terminal screen");break;case"whoami":n.push('<span style="color:#FFE377">Hi! My name is Michael Paleo.</span>'),n.push('<span style="color:#FFE377">I am nerd software developer warlock living in Montevideo, Uruguay.</span>'),n.push('<span style="color:#FFE377">Some things that I love:</span>'),n.push('<span style="color:#FFE377"> * Solve problems</span>'),n.push('<span style="color:#FFE377"> * Learn</span>'),n.push('<span style="color:#FFE377"> * Share knowledge</span>'),n.push('<span style="color:#FFE377"> * Write code</span>'),n.push('<span style="color:#FFE377"> * Music</span>'),n.push('<span style="color:#FFE377"> * Cars</span>'),n.push('<span style="color:#FFE377">Skills:</span>'),n.push('<span style="color:#FFE377"> * PHP</span>'),n.push('<span style="color:#FFE377">   * Laravel</span>'),n.push('<span style="color:#FFE377"> * Javascript</span>'),n.push('<span style="color:#FFE377">   * Typescript</span>'),n.push('<span style="color:#FFE377">   * Electron</span>'),n.push('<span style="color:#FFE377">   * Vue</span>'),n.push('<span style="color:#FFE377">   * React</span>'),n.push('<span style="color:#FFE377">   * React Native</span>'),n.push('<span style="color:#FFE377">   * Ionic</span>'),n.push('<span style="color:#FFE377">   * Angular</span>'),n.push('<span style="color:#FFE377"> * C#</span>'),n.push('<span style="color:#FFE377">   * .NET</span>'),n.push('<span style="color:#FFE377">   * Unity</span>'),n.push('<span style="color:#FFE377"> * Java</span>'),n.push('<span style="color:#FFE377">   * Android</span>'),n.push('<span style="color:#FFE377"> * C++</span>'),n.push('<span style="color:#FFE377">   * Arduino</span>'),n.push('<span style="color:#FFE377"> * HTML</span>'),n.push('<span style="color:#FFE377"> * CSS</span>'),n.push('<span style="color:#FFE377"> * SQL</span>'),n.push('<span style="color:#FFE377"> * Git</span>'),n.push('<span style="color:#FFE377"> * Linux</span>'),n.push('<span style="color:#FFE377"> * Vagrant</span>'),n.push('<span style="color:#FFE377"> * Docker</span>'),n.push('<span style="color:#FFE377"> * Ansible</span>'),n.push('<span style="color:#FFE377"> * Nginx</span>'),n.push('<span style="color:#FFE377"> * Cloud computing</span>'),n.push('<span style="color:#FFE377">   * AWS</span>'),n.push('<span style="color:#FFE377">   * Azure</span>');break;case"github":n.push('<span style="color:#FFE377">Opening GitHub ...</span>'),window.open("https://github.com/mpaleo","_blank");break;case"packagist":n.push('<span style="color:#FFE377">Opening Packagist ...</span>'),window.open("https://packagist.org/users/mpaleo","_blank");break;case"linkedin":n.push('<span style="color:#FFE377">Opening LinkedIn ...</span>'),window.open("https://www.linkedin.com/in/mpaleo","_blank");break;case"twitter":n.push('<span style="color:#FFE377">Opening Twitter ...</span>'),window.open("https://twitter.com/PaleoMichael","_blank");break;case"clear":this.output=[];break;default:n.push("Command not found (Want some easter eggs? Check the source code :D)")}return n}}}},"Re+6":function(s,n,t){"use strict";var e=function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"terminal"},[t("pre",{staticClass:"green asciiart"},[s._v("____________________________________________________________________\n\n                         __         ____         __ __   ____  __ __\n   ____ ___  ____  _____/ /_  ___  / / /  _   __/ // /  / __ \\/ // /\n  / __ `__ \\/ __ \\/ ___/ __ \\/ _ \\/ / /  | | / / // /_ / / / / // /_\n / / / / / / /_/ (__  ) / / /  __/ / /   | |/ /__  __// /_/ /__  __/\n/_/ /_/ /_/ .___/____/_/ /_/\\___/_/_/    |___/  /_/ (_)____(_)/_/   \n         /_/                                                        \n____________________________________________________________________")]),s._v(" "),s._m(0),s._v(" "),t("div",{staticClass:"terminal-history text white"},s._l(s.output,function(n){return t("div",{staticClass:"content-wrapper"},[t("pre",{domProps:{innerHTML:s._s(n)}})])})),s._v(" "),t("div",{staticClass:"content-wrapper"},[t("div",{staticClass:"terminal-prompt text white"},[s._v(s._s(s.prompt))]),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.input,expression:"input"}],ref:"input",staticClass:"terminal-input text white",attrs:{spellcheck:"false",autofocus:""},domProps:{value:s.input},on:{keyup:function(n){if(!("button"in n)&&s._k(n.keyCode,"enter",13,n.key))return null;s.sendCommand()},keydown:[function(n){if(!("button"in n)&&s._k(n.keyCode,"down",40,n.key))return null;s.nextBuffer()},function(n){if(!("button"in n)&&s._k(n.keyCode,"up",38,n.key))return null;s.prevBuffer()}],input:function(n){n.target.composing||(s.input=n.target.value)}}})])])},a=[function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"text white"},[s._v("Type "),t("span",{staticClass:"blue"},[s._v("'help'")]),s._v(" command to view some functionalities")])}],_={render:e,staticRenderFns:a};n.a=_},YaEn:function(s,n,t){"use strict";var e=t("7+uW"),a=t("/ocq"),_=t("lO7g");e.a.use(a.a),n.a=new a.a({routes:[{path:"/",name:"Home",component:_.a}]})},"bVw/":function(s,n){},c0ag:function(s,n,t){"use strict";var e=function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"hello"},[t("terminal")],1)},a=[],_={render:e,staticRenderFns:a};n.a=_},cgPG:function(s,n,t){"use strict";var e=function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],_={render:e,staticRenderFns:a};n.a=_},czCT:function(s,n,t){"use strict";function e(s){t("bVw/")}var a=t("POAX"),_=t("Re+6"),o=t("VU/8"),p=e,i=o(a.a,_.a,!1,p,"data-v-c977352e",null);n.a=i.exports},lBzv:function(s,n){},lO7g:function(s,n,t){"use strict";var e=t("Fs8J"),a=t("c0ag"),_=t("VU/8"),o=_(e.a,a.a,!1,null,null,null);n.a=o.exports},xJD8:function(s,n,t){"use strict";n.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.0de505558b5d5ee9912d.js.map