(this["webpackJsonpvulcan-ui"]=this["webpackJsonpvulcan-ui"]||[]).push([[16],{959:function(e,t,a){"use strict";a.r(t);var n=a(233),r=a(234),l=a(236),c=a(235),o=a(237),u=a(2),i=a.n(u),s=a(892),d=a(893),m=a(929),E=a.n(m),h=a(239),z=a(566),f=a(241),v=a(905),b=a(927),p=a(928),x=a(953),O=a(897),j=a(911),C=a(898),k=a(932),S=a(240),g=a(913),w=a.n(g),y=a(933),L=a.n(y),D=a(128),R=(a(567),a(129),k.newContextComponents.ContractData),N=function(e){var t=e.address,a=e.tx;return t?i.a.createElement("a",{href:"https://etherscan.io/address/"+t},t):a?i.a.createElement("a",{href:"https://etherscan.io/tx/"+a},a.slice(0,10)+"..."):null},A=function(e){var t=e.contract,a=Object(u.useContext)(h.DrizzleContext.Context),n=a.drizzle,r=a.drizzleState;return a.initialized?i.a.createElement(b.a,null,i.a.createElement(p.a,null,"Round ID ",i.a.createElement(R,{drizzle:n,drizzleState:r,contract:t,method:"latestRound",render:function(e){return e}})),i.a.createElement(p.a,null,"$ ",i.a.createElement(R,{drizzle:n,drizzleState:r,contract:t,method:"latestAnswer",render:function(e){return(1e-8*e).toFixed(2)}})),i.a.createElement(p.a,null,"Last update\xa0",i.a.createElement(R,{drizzle:n,drizzleState:r,contract:t,method:"latestTimestamp",render:function(e){return w()(e,"X").format("LLLL")}})),i.a.createElement(p.a,null,"Next update (every 1hr)\xa0",i.a.createElement(R,{drizzle:n,drizzleState:r,contract:t,method:"latestTimestamp",render:function(e){var t=w()(e,"X").add(1,"hours"),a=w.a.duration(t.diff(w()()));return"".concat(a.hours(),":").concat(a.minutes(),":").concat(a.seconds())}}))):null};var F=Object(S.b)((function(e){return{tx:e.tx,blocks:e.blocks}}))((function(e){var t,a=e.contract,n=e.tx,r=e.blocks,l=Object(u.useContext)(h.DrizzleContext.Context),c=l.drizzle,o=l.drizzleState,s=Object(u.useState)(),d=Object(v.a)(s,2),m=d[0],E=d[1],z=Object(u.useState)(),b=Object(v.a)(z,2),p=b[0],O=b[1],j=Object(u.useState)({}),C=Object(v.a)(j,2),k=C[0],S=C[1],g=Object(u.useState)(5),w=Object(v.a)(g,2),y=w[0],A=w[1];Object(u.useEffect)((function(){var e=c.contracts[a].methods.latestRound.cacheCall();E(e)}),[]),Object(u.useEffect)((function(){var e={},t=c.contracts[a];p&&t.events.ResponseReceived({fromBlock:97e5,toBlock:"latest",filter:{answerId:p}}).on("data",(function(t){e[t.returnValues.sender]=t;var a=t.transactionHash;c.store.dispatch({type:D.a,transactionHash:a}),S(e)}))}),[p]),Object(u.useEffect)((function(){var e=Object.keys(k).length;e>y&&A(e)}));var F=null===(t=o.contracts[a].latestRound[m])||void 0===t?void 0:t.value;return F!=p&&O(F),i.a.createElement(x.a,{hover:!0,responsive:!0,className:"table-outline mb-0 d-none d-sm-table"},i.a.createElement("thead",{className:"thead-light"},i.a.createElement("tr",null,i.a.createElement("th",null,"Oracle"),i.a.createElement("th",null,"Answer"),i.a.createElement("th",null,"Gas Price (Gwei)"),i.a.createElement("th",null,"Transaction"),i.a.createElement("th",null,"Date"))),i.a.createElement("tbody",null,Object(f.a)(Array(y).keys()).map((function(e){return i.a.createElement(R,{key:e,drizzle:c,drizzleState:o,contract:a,method:"oracles",methodArgs:[e],render:function(e){var t=k[e]||{},a=t.returnValues,l=t.transactionHash,c=(1e-8*((null===a||void 0===a?void 0:a.response)||0)).toFixed(2),o=n[l]||{},u=(1e-9*(o.gasPrice||0)).toFixed(2),s=(r[o.blockNumber]||{}).timestamp;return i.a.createElement("tr",null,i.a.createElement("td",null,i.a.createElement("div",null,i.a.createElement(N,{address:e}))),i.a.createElement("td",null,i.a.createElement("div",null,c)),i.a.createElement("td",null,i.a.createElement("div",null,u," Gwei")),i.a.createElement("td",null,i.a.createElement("div",null,i.a.createElement(N,{tx:l}))),i.a.createElement("td",null,i.a.createElement("div",null,s?i.a.createElement(L.a,{unix:!0,format:"LLLL"},s):"loading...")))}})}))))})),I=function(e){var t=e.contract;return Object(u.useContext)(h.DrizzleContext.Context).initialized?i.a.createElement("div",null,i.a.createElement(O.a,null,i.a.createElement(j.a,null,t," Aggregate data"),i.a.createElement(C.a,null,i.a.createElement(A,{contract:t}))),i.a.createElement(O.a,null,i.a.createElement(j.a,null,"Oracles data"),i.a.createElement(C.a,null,i.a.createElement(F,{contract:t})))):null},T=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).loading=function(){return i.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidCatch",value:function(e,t){console.error(e,t)}},{key:"render",value:function(){var e=E.a.parse(this.props.location.search,{ignoreQueryPrefix:!0}),t=this.props.match.params.address||e.address,a=this.context,n=a.drizzle;a.drizzleState;if(!a.initialized)return null;if(!n.contracts[t]){var r={contractName:t,web3Contract:new n.web3.eth.Contract(z.compilerOutput.abi,t)};return n.addContract(r,["AnswerUpdated","ResponseReceived"]),null}return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(s.a,null,i.a.createElement(d.a,null,i.a.createElement(I,{contract:t}))))}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(u.Component);T.contextType=h.DrizzleContext.Context;t.default=T}}]);
//# sourceMappingURL=16.e0d9ed7c.chunk.js.map