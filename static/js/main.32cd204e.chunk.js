(this["webpackJsonptinh-tien"]=this["webpackJsonptinh-tien"]||[]).push([[0],{20:function(e,t,n){e.exports=n(41)},31:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),l=n.n(o),c=n(1),i=n(2),u=(n(30),n(31),n(3)),s=n(4),d=n(5),p=n(6),m=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={error:void 0},e.onAddOption=function(t){t.preventDefault();var n=e.props.onAddOption(t.target.elements.option.value.trim());e.setState((function(){return{error:n}})),n||(t.target.elements.option.value="")},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.error&&r.a.createElement("p",{className:"add-option-error"},this.state.error),r.a.createElement("form",{className:"add-option",onSubmit:this.onAddOption},r.a.createElement("input",{className:"add-option__input",type:"text",name:"option"}),r.a.createElement("button",{className:"button"},"+")))}}]),n}(r.a.Component),h=function(e,t){return{type:"CHANGE",payload:{id:e,value:t}}},f=Object(c.b)(null,{incrementValue:function(e){return{type:"INCREMENT",payload:{id:e}}},decrementValue:function(e){return{type:"DECREMENT",payload:{id:e}}},changeValue:h})((function(e){return r.a.createElement("div",{className:"option"},r.a.createElement("p",{className:"option__text"},e.count,". ",e.optionText),r.a.createElement("div",{className:"option__action"},r.a.createElement("input",{onFocus:function(){"0"===e.currentValue.toString()&&e.changeValue(e.id,"-")},onChange:function(t){0!==e.currentValue&&/^([+-]?[1-9]\d*|0|-)$/.test(t.target.value)&&Math.abs(t.target.value).toString().length<3&&e.changeValue(e.id,parseInt(t.target.value)?parseInt(t.target.value):"-"),t.target.value?e.changeValue(e.id,parseInt(t.target.value)?parseInt(t.target.value):"-"):e.changeValue(e.id,0),(t.target.value>100||t.target.value<-100)&&e.changeValue(e.id,parseInt(t.target.value/10))},type:"text",value:e.currentValue,style:{color:e.currentValue>0?"#86c232":e.currentValue<0?"#c70000":"white"}}),r.a.createElement("button",{className:"button minus",onClick:function(){return isNaN(e.currentValue)?e.changeValue(e.id,-1):e.decrementValue(e.id)}},"-"),r.a.createElement("button",{className:"button",onClick:function(){return isNaN(e.currentValue)?e.changeValue(e.id,0):e.incrementValue(e.id)}},"+")))})),E=Object(c.b)((function(e){return{options:e.options}}),{deleteOptions:function(){return{type:"DELETE_OPTIONS"}},changeValue:h})((function(e){var t=e.options.map((function(e){return e.currentValue})).reduce((function(e,t){return e+t}),0);return Object(a.useEffect)((function(){e.options.length>1&&1===e.options.filter((function(e){return 0===e.currentValue})).length&&!isNaN(t)&&0!==t&&e.changeValue(e.options.filter((function(e){return 0===e.currentValue}))[0].id,-1*t)})),r.a.createElement("div",null,r.a.createElement("div",{className:"widget-header"},r.a.createElement("h3",{className:"widget-header__title"},"C\xe1c con b\u1ea1c:"),r.a.createElement("button",{className:"button button--link",onClick:e.deleteOptions,style:{fontStyle:"italic"}},"Xo\xe1 h\u1ebftttt!!!")),0===e.options.length&&r.a.createElement("p",{className:"widget-message"},"\u0110i\u1ec1n t\xean ng\u01b0\u1eddi anh em v\xe0o d\u01b0\u1edbi kia"),e.options.map((function(e,t){return r.a.createElement(f,{id:e.id,key:t,count:t+1,currentValue:e.currentValue,optionText:e.id})})))})),O=Object(c.b)(null,{openModal:function(){return{type:"OPEN_MODAL"}}})((function(e){return r.a.createElement("div",null,r.a.createElement("button",{className:"big-button",disabled:!e.hasOptions,onClick:e.openModal},"T\xednh ti\u1ec1n!"))})),g=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"header__title"},e.title),r.a.createElement("p",{className:"header__subtitle"},e.subtitle)))};g.defaultProps={title:"H\u1ed7 tr\u1ee3 con b\u1ea1c",subtitle:"\u201cC\u1edd b\u1ea1c ng\u01b0\u1eddi ch\u01a1i l\xe0 ng\u01b0\u1eddi thua, ng\u01b0\u1eddi kh\xf4ng ch\u01a1i kh\xf4ng bao gi\u1edd th\u1eafng\u201d"};var b=g,v=n(14),N=n.n(v),y=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){N.a.setAppElement("body")},e}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(N.a,{isOpen:!!this.props.openingModal,contentLabel:"Show Results",onRequestClose:this.props.closeModal,closeTimeoutMS:200,className:"modal"},r.a.createElement("h3",{className:"modal__title"},"T\u1ed5ng k\u1ebft"),r.a.createElement("div",{className:"modal__body"},this.props.options.map((function(e,t){return r.a.createElement("div",{className:"option modal-child",key:t},r.a.createElement("p",{className:"option__text"},e.id),r.a.createElement("div",{className:"option__action"},r.a.createElement("div",{style:{color:e.totalValue.reduce((function(e,t){return e+t}),0)>0?"#86c232":e.totalValue.reduce((function(e,t){return e+t}),0)<0?"#c70000":"white",fontFamily:["Zen Dots","cursive"]}},r.a.createElement("span",null,e.totalValue.reduce((function(e,t){return e+t}),0)))))}))),r.a.createElement("button",{className:"button",onClick:this.props.closeModal},"Okay"))}}]),n}(r.a.Component),V=Object(c.b)((function(e){return{options:e.options,openingModal:e.openingModal}}),{closeModal:function(){return{type:"CLOSE_MODAL"}}})(y),_=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onAddOption=function(t){return""===t?"\u0110i\u1ec1n t\xean ng\u01b0\u1eddi anh em v\xe0o \u0111\xe2y~":e.props.options.map((function(e){return e.id})).indexOf(t)>-1?"Ng\u01b0\u1eddi anh em n\xe0y xu\u1ea5t hi\u1ec7n r\u1ed3i~~":void e.props.addOption(t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("options"),t=JSON.parse(e);t&&this.props.addOptions(t)}catch(n){}}},{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.props.options);localStorage.setItem("options",e)}},{key:"render",value:function(){var e=this.props.options.map((function(e){return e.currentValue})).reduce((function(e,t){return e+t}),0);return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{className:"container"},r.a.createElement(O,{hasOptions:this.props.options.length>0}),r.a.createElement("div",{className:"widget"},r.a.createElement(E,null),r.a.createElement("button",{className:"big-button end-round",disabled:0!==e,onClick:this.props.endRound},"Ch\u1ed1t!"),r.a.createElement(m,{onAddOption:this.onAddOption}))),r.a.createElement(V,null))}}]),n}(r.a.Component),D=Object(c.b)((function(e){return{options:e.options}}),{addOption:function(e){return{type:"ADD_OPTION",payload:{id:e,currentValue:0,totalValue:[]}}},addOptions:function(e){return{type:"ADD_OPTIONS",payload:e}},endRound:function(){return{type:"END_ROUND"}}})(_),j=n(8),C=Object(i.b)({options:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_OPTION":return[].concat(Object(j.a)(e),[t.payload]);case"ADD_OPTIONS":return[].concat(Object(j.a)(e),Object(j.a)(t.payload));case"DELETE_OPTIONS":return[];case"INCREMENT":return e.map((function(e){return e.id===t.payload.id?{id:t.payload.id,currentValue:e.currentValue+1,totalValue:e.totalValue}:e}));case"DECREMENT":return e.map((function(e){return e.id===t.payload.id?{id:t.payload.id,currentValue:e.currentValue-1,totalValue:e.totalValue}:e}));case"CHANGE":return e.map((function(e){return e.id===t.payload.id?{id:t.payload.id,currentValue:t.payload.value,totalValue:e.totalValue}:e}));case"END_ROUND":return e.map((function(e){return{id:e.id,currentValue:0,totalValue:[].concat(Object(j.a)(e.totalValue),[e.currentValue])}}));default:return e}},openingModal:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MODAL":return!0;case"CLOSE_MODAL":return!1;default:return e}}});l.a.render(r.a.createElement(c.a,{store:Object(i.c)(C)},r.a.createElement(D,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.32cd204e.chunk.js.map