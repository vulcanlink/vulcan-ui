(this["webpackJsonpvulcan-ui"]=this["webpackJsonpvulcan-ui"]||[]).push([[12],{896:function(e,a,n){"use strict";n.d(a,"a",(function(){return t}));var t={BTCUSD:{count:21,address:"0xF5fff180082d6017036B771bA883025c654BC935"},AUDUSD:{count:9,address:"0x05Cf62c4bA0ccEA3Da680f9A8744Ac51116D6231"},EURUSD:{count:9,address:"0x25Fa978ea1a7dc9bDc33a2959B9053EaE57169B5"},CHFUSD:{count:9,address:"0x02D5c618DBC591544b19d0bf13543c0728A3c4Ec"},GBPUSD:{count:9,address:"0x151445852B0cfDf6A4CC81440F2AF99176e8AD08"},JPYUSD:{count:9,address:"0xe1407BfAa6B5965BAd1C9f38316A3b655A09d8A6"},XAGUSD:{count:9,address:"0x8946A183BFaFA95BEcf57c5e08fE5B7654d2807B"},XAUUSD:{count:9,address:"0xafcE0c7b7fE3425aDb3871eAe5c0EC6d93E01935"},LINKUSD:{count:8,address:"0x32dbd3214aC75223e27e575C53944307914F7a90"},XHVUSD:{count:7,address:"0xB836ADc21C241b096A98Dd677eD25a6E3EFA8e94"},LRCETH:{count:7,address:"0x8770Afe90c52Fd117f29192866DE705F63e59407"},LENDETH:{count:8,address:"0x1EeaF25f2ECbcAf204ECADc8Db7B0db9DA845327"},BTCETH:{count:9,address:"0x0133Aa47B6197D0BA090Bf2CD96626Eb71fFd13c"},MKRETH:{count:7,address:"0xDa3d675d50fF6C555973C4f0424964e1F6A4e7D3"},MANAETH:{count:7,address:"0xc89c4ed8f52Bb17314022f6c0dCB26210C905C97"},KNCETH:{count:7,address:"0xd0e785973390fF8E77a83961efDb4F271E6B8152"},LINKETH:{count:9,address:"0xeCfA53A8bdA4F0c4dd39c55CC8deF3757aCFDD07"},USDCETH:{count:7,address:"0xdE54467873c3BCAA76421061036053e371721708"},REPETH:{count:7,address:"0xb8b513d9cf440C1b6f5C7142120d611C94fC220c"},ZRXETH:{count:7,address:"0xA0F9D94f060836756FFC84Db4C78d097cA8C23E8"},BATETH:{count:7,address:"0x9b4e2579895efa2b4765063310Dc4109a7641129"},DAIETH:{count:7,address:"0x037E8F2125bF532F3e228991e051c8A7253B642c"},TUSDETH:{count:7,address:"0x73ead35fd6A572EF763B13Be65a9db96f7643577"},USDTETH:{count:7,address:"0xa874fe207DF445ff19E7482C746C4D3fD0CB9AcE"},SUSDETH:{count:7,address:"0x6d626Ff97f0E89F6f983dE425dc5B24A18DE26Ea"},SNXETH:{count:7,address:"0xE23d1142dE4E83C08bb048bcab54d50907390828"}}},937:function(e,a,n){"use strict";n.r(a);var t=n(235),c=n(236),r=n(238),d=n(237),s=n(239),o=n(2),l=n.n(o),u=n(70),E=n(240),i=n(889),f=n(892),m=n(905),D=n(893),b=n(896),g={items:[].concat([{name:"Aggregator",url:"/aggregator",icon:"icon-speedometer"}],Object(m.a)(function(){var e=[{name:"USD Pairs",url:"/aggregator",icon:"icon-speedometer",children:[]},{name:"ETH Pairs",url:"/aggregator",icon:"icon-speedometer",children:[]}],a={USD:[],ETH:[]};return Object.entries(b.a).forEach((function(e){var n=Object(D.a)(e,2),t=n[0],c=n[1],r={name:t,url:"/aggregator/".concat(c.address),icon:"icon-speedometer"};t.includes("USD")?a.USD.push(r):t.includes("ETH")&&a.ETH.push(r)})),e[0].children=a.USD,e[1].children=a.ETH,e}()))},A=[{path:"/",exact:!0,name:"Home"},{path:"/aggregator",exact:!0,name:"Oracle Aggregator",component:l.a.lazy((function(){return n.e(8).then(n.bind(null,934))}))},{path:"/aggregator/:address",exact:!0,name:"Aggregator Data",component:l.a.lazy((function(){return Promise.all([n.e(5),n.e(13)]).then(n.bind(null,940))}))}],p=l.a.lazy((function(){return n.e(9).then(n.bind(null,936))})),C=l.a.lazy((function(){return n.e(11).then(n.bind(null,932))})),h=l.a.lazy((function(){return n.e(10).then(n.bind(null,933))})),x=function(e){function a(){var e,n;Object(t.a)(this,a);for(var c=arguments.length,s=new Array(c),o=0;o<c;o++)s[o]=arguments[o];return(n=Object(r.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(s)))).loading=function(){return l.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},n}return Object(s.a)(a,e),Object(c.a)(a,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"app"},l.a.createElement(f.d,{fixed:!0},l.a.createElement(o.Suspense,{fallback:this.loading()},l.a.createElement(h,{onLogout:function(a){return e.signOut(a)}}))),l.a.createElement("div",{className:"app-body"},l.a.createElement(f.e,{fixed:!0,display:"lg"},l.a.createElement(f.h,null),l.a.createElement(f.g,null),l.a.createElement(o.Suspense,null,l.a.createElement(f.j,Object.assign({navConfig:g},this.props,{router:E}))),l.a.createElement(f.f,null),l.a.createElement(f.i,null)),l.a.createElement("main",{className:"main"},l.a.createElement(f.b,{appRoutes:A,router:E}),l.a.createElement(i.a,{fluid:!0},l.a.createElement(o.Suspense,{fallback:this.loading()},l.a.createElement(u.g,null,A.map((function(e,a){return e.component?l.a.createElement(u.d,{key:a,path:e.path,exact:e.exact,name:e.name,render:function(a){return l.a.createElement(e.component,a)}}):null})),l.a.createElement(u.c,{from:"/",to:"/aggregator"}),l.a.createElement(u.c,{from:"/dashboard",to:"/aggregator"}))))),l.a.createElement(f.a,{fixed:!0},l.a.createElement(o.Suspense,{fallback:this.loading()},l.a.createElement(p,null)))),l.a.createElement(f.c,null,l.a.createElement(o.Suspense,{fallback:this.loading()},l.a.createElement(C,null))))}}]),a}(o.Component);a.default=x}}]);
//# sourceMappingURL=12.3455477e.chunk.js.map