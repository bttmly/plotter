// JQUERY
//
/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map

// LO-DASH
//
/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
;(function(){function n(n,t,e){e=(e||0)-1;for(var r=n?n.length:0;++e<r;)if(n[e]===t)return e;return-1}function t(t,e){var r=typeof e;if(t=t.l,"boolean"==r||null==e)return t[e]?0:-1;"number"!=r&&"string"!=r&&(r="object");var u="number"==r?e:m+e;return t=(t=t[r])&&t[u],"object"==r?t&&-1<n(t,e)?0:-1:t?0:-1}function e(n){var t=this.l,e=typeof n;if("boolean"==e||null==n)t[n]=true;else{"number"!=e&&"string"!=e&&(e="object");var r="number"==e?n:m+n,t=t[e]||(t[e]={});"object"==e?(t[r]||(t[r]=[])).push(n):t[r]=true
}}function r(n){return n.charCodeAt(0)}function u(n,t){for(var e=n.m,r=t.m,u=-1,o=e.length;++u<o;){var i=e[u],a=r[u];if(i!==a){if(i>a||typeof i=="undefined")return 1;if(i<a||typeof a=="undefined")return-1}}return n.n-t.n}function o(n){var t=-1,r=n.length,u=n[0],o=n[r/2|0],i=n[r-1];if(u&&typeof u=="object"&&o&&typeof o=="object"&&i&&typeof i=="object")return false;for(u=f(),u["false"]=u["null"]=u["true"]=u.undefined=false,o=f(),o.k=n,o.l=u,o.push=e;++t<r;)o.push(n[t]);return o}function i(n){return"\\"+U[n]
}function a(){return h.pop()||[]}function f(){return g.pop()||{k:null,l:null,m:null,"false":false,n:0,"null":false,number:null,object:null,push:null,string:null,"true":false,undefined:false,o:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var t=n.l;t&&c(t),n.k=n.l=n.m=n.object=n.number=n.string=n.o=null,g.length<_&&g.push(n)}function p(n,t,e){t||(t=0),typeof e=="undefined"&&(e=n?n.length:0);var r=-1;e=e-t||0;for(var u=Array(0>e?0:e);++r<e;)u[r]=n[t+r];return u}function s(e){function h(n,t,e){if(!n||!V[typeof n])return n;
t=t&&typeof e=="undefined"?t:tt(t,e,3);for(var r=-1,u=V[typeof n]&&Fe(n),o=u?u.length:0;++r<o&&(e=u[r],false!==t(n[e],e,n)););return n}function g(n,t,e){var r;if(!n||!V[typeof n])return n;t=t&&typeof e=="undefined"?t:tt(t,e,3);for(r in n)if(false===t(n[r],r,n))break;return n}function _(n,t,e){var r,u=n,o=u;if(!u)return o;for(var i=arguments,a=0,f=typeof e=="number"?2:i.length;++a<f;)if((u=i[a])&&V[typeof u])for(var l=-1,c=V[typeof u]&&Fe(u),p=c?c.length:0;++l<p;)r=c[l],"undefined"==typeof o[r]&&(o[r]=u[r]);
return o}function U(n,t,e){var r,u=n,o=u;if(!u)return o;var i=arguments,a=0,f=typeof e=="number"?2:i.length;if(3<f&&"function"==typeof i[f-2])var l=tt(i[--f-1],i[f--],2);else 2<f&&"function"==typeof i[f-1]&&(l=i[--f]);for(;++a<f;)if((u=i[a])&&V[typeof u])for(var c=-1,p=V[typeof u]&&Fe(u),s=p?p.length:0;++c<s;)r=p[c],o[r]=l?l(o[r],u[r]):u[r];return o}function H(n){var t,e=[];if(!n||!V[typeof n])return e;for(t in n)me.call(n,t)&&e.push(t);return e}function J(n){return n&&typeof n=="object"&&!Te(n)&&me.call(n,"__wrapped__")?n:new Q(n)
}function Q(n,t){this.__chain__=!!t,this.__wrapped__=n}function X(n){function t(){if(r){var n=p(r);be.apply(n,arguments)}if(this instanceof t){var o=nt(e.prototype),n=e.apply(o,n||arguments);return wt(n)?n:o}return e.apply(u,n||arguments)}var e=n[0],r=n[2],u=n[4];return $e(t,n),t}function Z(n,t,e,r,u){if(e){var o=e(n);if(typeof o!="undefined")return o}if(!wt(n))return n;var i=ce.call(n);if(!K[i])return n;var f=Ae[i];switch(i){case T:case F:return new f(+n);case W:case P:return new f(n);case z:return o=f(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o
}if(i=Te(n),t){var c=!r;r||(r=a()),u||(u=a());for(var s=r.length;s--;)if(r[s]==n)return u[s];o=i?f(n.length):{}}else o=i?p(n):U({},n);return i&&(me.call(n,"index")&&(o.index=n.index),me.call(n,"input")&&(o.input=n.input)),t?(r.push(n),u.push(o),(i?St:h)(n,function(n,i){o[i]=Z(n,t,e,r,u)}),c&&(l(r),l(u)),o):o}function nt(n){return wt(n)?ke(n):{}}function tt(n,t,e){if(typeof n!="function")return Ut;if(typeof t=="undefined"||!("prototype"in n))return n;var r=n.__bindData__;if(typeof r=="undefined"&&(De.funcNames&&(r=!n.name),r=r||!De.funcDecomp,!r)){var u=ge.call(n);
De.funcNames||(r=!O.test(u)),r||(r=E.test(u),$e(n,r))}if(false===r||true!==r&&1&r[1])return n;switch(e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,u){return n.call(t,e,r,u)};case 4:return function(e,r,u,o){return n.call(t,e,r,u,o)}}return Mt(n,t)}function et(n){function t(){var n=f?i:this;if(u){var h=p(u);be.apply(h,arguments)}return(o||c)&&(h||(h=p(arguments)),o&&be.apply(h,o),c&&h.length<a)?(r|=16,et([e,s?r:-4&r,h,null,i,a])):(h||(h=arguments),l&&(e=n[v]),this instanceof t?(n=nt(e.prototype),h=e.apply(n,h),wt(h)?h:n):e.apply(n,h))
}var e=n[0],r=n[1],u=n[2],o=n[3],i=n[4],a=n[5],f=1&r,l=2&r,c=4&r,s=8&r,v=e;return $e(t,n),t}function rt(e,r){var u=-1,i=st(),a=e?e.length:0,f=a>=b&&i===n,l=[];if(f){var p=o(r);p?(i=t,r=p):f=false}for(;++u<a;)p=e[u],0>i(r,p)&&l.push(p);return f&&c(r),l}function ut(n,t,e,r){r=(r||0)-1;for(var u=n?n.length:0,o=[];++r<u;){var i=n[r];if(i&&typeof i=="object"&&typeof i.length=="number"&&(Te(i)||yt(i))){t||(i=ut(i,t,e));var a=-1,f=i.length,l=o.length;for(o.length+=f;++a<f;)o[l++]=i[a]}else e||o.push(i)}return o
}function ot(n,t,e,r,u,o){if(e){var i=e(n,t);if(typeof i!="undefined")return!!i}if(n===t)return 0!==n||1/n==1/t;if(n===n&&!(n&&V[typeof n]||t&&V[typeof t]))return false;if(null==n||null==t)return n===t;var f=ce.call(n),c=ce.call(t);if(f==D&&(f=q),c==D&&(c=q),f!=c)return false;switch(f){case T:case F:return+n==+t;case W:return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case z:case P:return n==oe(t)}if(c=f==$,!c){var p=me.call(n,"__wrapped__"),s=me.call(t,"__wrapped__");if(p||s)return ot(p?n.__wrapped__:n,s?t.__wrapped__:t,e,r,u,o);
if(f!=q)return false;if(f=n.constructor,p=t.constructor,f!=p&&!(dt(f)&&f instanceof f&&dt(p)&&p instanceof p)&&"constructor"in n&&"constructor"in t)return false}for(f=!u,u||(u=a()),o||(o=a()),p=u.length;p--;)if(u[p]==n)return o[p]==t;var v=0,i=true;if(u.push(n),o.push(t),c){if(p=n.length,v=t.length,(i=v==p)||r)for(;v--;)if(c=p,s=t[v],r)for(;c--&&!(i=ot(n[c],s,e,r,u,o)););else if(!(i=ot(n[v],s,e,r,u,o)))break}else g(t,function(t,a,f){return me.call(f,a)?(v++,i=me.call(n,a)&&ot(n[a],t,e,r,u,o)):void 0}),i&&!r&&g(n,function(n,t,e){return me.call(e,t)?i=-1<--v:void 0
});return u.pop(),o.pop(),f&&(l(u),l(o)),i}function it(n,t,e,r,u){(Te(t)?St:h)(t,function(t,o){var i,a,f=t,l=n[o];if(t&&((a=Te(t))||Pe(t))){for(f=r.length;f--;)if(i=r[f]==t){l=u[f];break}if(!i){var c;e&&(f=e(l,t),c=typeof f!="undefined")&&(l=f),c||(l=a?Te(l)?l:[]:Pe(l)?l:{}),r.push(t),u.push(l),c||it(l,t,e,r,u)}}else e&&(f=e(l,t),typeof f=="undefined"&&(f=t)),typeof f!="undefined"&&(l=f);n[o]=l})}function at(n,t){return n+he(Re()*(t-n+1))}function ft(e,r,u){var i=-1,f=st(),p=e?e.length:0,s=[],v=!r&&p>=b&&f===n,h=u||v?a():s;
for(v&&(h=o(h),f=t);++i<p;){var g=e[i],y=u?u(g,i,e):g;(r?!i||h[h.length-1]!==y:0>f(h,y))&&((u||v)&&h.push(y),s.push(g))}return v?(l(h.k),c(h)):u&&l(h),s}function lt(n){return function(t,e,r){var u={};e=J.createCallback(e,r,3),r=-1;var o=t?t.length:0;if(typeof o=="number")for(;++r<o;){var i=t[r];n(u,i,e(i,r,t),t)}else h(t,function(t,r,o){n(u,t,e(t,r,o),o)});return u}}function ct(n,t,e,r,u,o){var i=1&t,a=4&t,f=16&t,l=32&t;if(!(2&t||dt(n)))throw new ie;f&&!e.length&&(t&=-17,f=e=false),l&&!r.length&&(t&=-33,l=r=false);
var c=n&&n.__bindData__;return c&&true!==c?(c=p(c),c[2]&&(c[2]=p(c[2])),c[3]&&(c[3]=p(c[3])),!i||1&c[1]||(c[4]=u),!i&&1&c[1]&&(t|=8),!a||4&c[1]||(c[5]=o),f&&be.apply(c[2]||(c[2]=[]),e),l&&we.apply(c[3]||(c[3]=[]),r),c[1]|=t,ct.apply(null,c)):(1==t||17===t?X:et)([n,t,e,r,u,o])}function pt(n){return Be[n]}function st(){var t=(t=J.indexOf)===Wt?n:t;return t}function vt(n){return typeof n=="function"&&pe.test(n)}function ht(n){var t,e;return n&&ce.call(n)==q&&(t=n.constructor,!dt(t)||t instanceof t)?(g(n,function(n,t){e=t
}),typeof e=="undefined"||me.call(n,e)):false}function gt(n){return We[n]}function yt(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==D||false}function mt(n,t,e){var r=Fe(n),u=r.length;for(t=tt(t,e,3);u--&&(e=r[u],false!==t(n[e],e,n)););return n}function bt(n){var t=[];return g(n,function(n,e){dt(n)&&t.push(e)}),t.sort()}function _t(n){for(var t=-1,e=Fe(n),r=e.length,u={};++t<r;){var o=e[t];u[n[o]]=o}return u}function dt(n){return typeof n=="function"}function wt(n){return!(!n||!V[typeof n])
}function jt(n){return typeof n=="number"||n&&typeof n=="object"&&ce.call(n)==W||false}function kt(n){return typeof n=="string"||n&&typeof n=="object"&&ce.call(n)==P||false}function xt(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;)u[t]=n[e[t]];return u}function Ct(n,t,e){var r=-1,u=st(),o=n?n.length:0,i=false;return e=(0>e?Ie(0,o+e):e)||0,Te(n)?i=-1<u(n,t,e):typeof o=="number"?i=-1<(kt(n)?n.indexOf(t,e):u(n,t,e)):h(n,function(n){return++r<e?void 0:!(i=n===t)}),i}function Ot(n,t,e){var r=true;t=J.createCallback(t,e,3),e=-1;
var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&(r=!!t(n[e],e,n)););else h(n,function(n,e,u){return r=!!t(n,e,u)});return r}function Nt(n,t,e){var r=[];t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u;){var o=n[e];t(o,e,n)&&r.push(o)}else h(n,function(n,e,u){t(n,e,u)&&r.push(n)});return r}function It(n,t,e){t=J.createCallback(t,e,3),e=-1;var r=n?n.length:0;if(typeof r!="number"){var u;return h(n,function(n,e,r){return t(n,e,r)?(u=n,false):void 0}),u}for(;++e<r;){var o=n[e];
if(t(o,e,n))return o}}function St(n,t,e){var r=-1,u=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof u=="number")for(;++r<u&&false!==t(n[r],r,n););else h(n,t);return n}function Et(n,t,e){var r=n?n.length:0;if(t=t&&typeof e=="undefined"?t:tt(t,e,3),typeof r=="number")for(;r--&&false!==t(n[r],r,n););else{var u=Fe(n),r=u.length;h(n,function(n,e,o){return e=u?u[--r]:--r,t(o[e],e,o)})}return n}function Rt(n,t,e){var r=-1,u=n?n.length:0;if(t=J.createCallback(t,e,3),typeof u=="number")for(var o=Xt(u);++r<u;)o[r]=t(n[r],r,n);
else o=[],h(n,function(n,e,u){o[++r]=t(n,e,u)});return o}function At(n,t,e){var u=-1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a>o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e>u&&(u=e,o=n)});return o}function Dt(n,t,e,r){if(!n)return e;var u=3>arguments.length;t=J.createCallback(t,r,4);var o=-1,i=n.length;if(typeof i=="number")for(u&&(e=n[++o]);++o<i;)e=t(e,n[o],o,n);else h(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)
});return e}function $t(n,t,e,r){var u=3>arguments.length;return t=J.createCallback(t,r,4),Et(n,function(n,r,o){e=u?(u=false,n):t(e,n,r,o)}),e}function Tt(n){var t=-1,e=n?n.length:0,r=Xt(typeof e=="number"?e:0);return St(n,function(n){var e=at(0,++t);r[t]=r[e],r[e]=n}),r}function Ft(n,t,e){var r;t=J.createCallback(t,e,3),e=-1;var u=n?n.length:0;if(typeof u=="number")for(;++e<u&&!(r=t(n[e],e,n)););else h(n,function(n,e,u){return!(r=t(n,e,u))});return!!r}function Bt(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=-1;
for(t=J.createCallback(t,e,3);++o<u&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[0]:v;return p(n,0,Se(Ie(0,r),u))}function Wt(t,e,r){if(typeof r=="number"){var u=t?t.length:0;r=0>r?Ie(0,u+r):r||0}else if(r)return r=zt(t,e),t[r]===e?r:-1;return n(t,e,r)}function qt(n,t,e){if(typeof t!="number"&&null!=t){var r=0,u=-1,o=n?n.length:0;for(t=J.createCallback(t,e,3);++u<o&&t(n[u],u,n);)r++}else r=null==t||e?1:Ie(0,t);return p(n,r)}function zt(n,t,e,r){var u=0,o=n?n.length:u;for(e=e?J.createCallback(e,r,1):Ut,t=e(t);u<o;)r=u+o>>>1,e(n[r])<t?u=r+1:o=r;
return u}function Pt(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(e=J.createCallback(e,r,3)),ft(n,t,e)}function Kt(){for(var n=1<arguments.length?arguments:arguments[0],t=-1,e=n?At(Ve(n,"length")):0,r=Xt(0>e?0:e);++t<e;)r[t]=Ve(n,t);return r}function Lt(n,t){var e=-1,r=n?n.length:0,u={};for(t||!r||Te(n[0])||(t=[]);++e<r;){var o=n[e];t?u[o]=t[e]:o&&(u[o[0]]=o[1])}return u}function Mt(n,t){return 2<arguments.length?ct(n,17,p(arguments,2),null,t):ct(n,1,null,null,t)
}function Vt(n,t,e){function r(){c&&ve(c),i=c=p=v,(g||h!==t)&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null))}function u(){var e=t-(Ue()-f);0<e?c=_e(u,e):(i&&ve(i),e=p,i=c=p=v,e&&(s=Ue(),a=n.apply(l,o),c||i||(o=l=null)))}var o,i,a,f,l,c,p,s=0,h=false,g=true;if(!dt(n))throw new ie;if(t=Ie(0,t)||0,true===e)var y=true,g=false;else wt(e)&&(y=e.leading,h="maxWait"in e&&(Ie(t,e.maxWait)||0),g="trailing"in e?e.trailing:g);return function(){if(o=arguments,f=Ue(),l=this,p=g&&(c||!y),false===h)var e=y&&!c;else{i||y||(s=f);var v=h-(f-s),m=0>=v;
m?(i&&(i=ve(i)),s=f,a=n.apply(l,o)):i||(i=_e(r,v))}return m&&c?c=ve(c):c||t===h||(c=_e(u,t)),e&&(m=true,a=n.apply(l,o)),!m||c||i||(o=l=null),a}}function Ut(n){return n}function Gt(n,t,e){var r=true,u=t&&bt(t);t&&(e||u.length)||(null==e&&(e=t),o=Q,t=n,n=J,u=bt(t)),false===e?r=false:wt(e)&&"chain"in e&&(r=e.chain);var o=n,i=dt(o);St(u,function(e){var u=n[e]=t[e];i&&(o.prototype[e]=function(){var t=this.__chain__,e=this.__wrapped__,i=[e];if(be.apply(i,arguments),i=u.apply(n,i),r||t){if(e===i&&wt(i))return this;
i=new o(i),i.__chain__=t}return i})})}function Ht(){}function Jt(n){return function(t){return t[n]}}function Qt(){return this.__wrapped__}e=e?Y.defaults(G.Object(),e,Y.pick(G,A)):G;var Xt=e.Array,Yt=e.Boolean,Zt=e.Date,ne=e.Function,te=e.Math,ee=e.Number,re=e.Object,ue=e.RegExp,oe=e.String,ie=e.TypeError,ae=[],fe=re.prototype,le=e._,ce=fe.toString,pe=ue("^"+oe(ce).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),se=te.ceil,ve=e.clearTimeout,he=te.floor,ge=ne.prototype.toString,ye=vt(ye=re.getPrototypeOf)&&ye,me=fe.hasOwnProperty,be=ae.push,_e=e.setTimeout,de=ae.splice,we=ae.unshift,je=function(){try{var n={},t=vt(t=re.defineProperty)&&t,e=t(n,n,n)&&t
}catch(r){}return e}(),ke=vt(ke=re.create)&&ke,xe=vt(xe=Xt.isArray)&&xe,Ce=e.isFinite,Oe=e.isNaN,Ne=vt(Ne=re.keys)&&Ne,Ie=te.max,Se=te.min,Ee=e.parseInt,Re=te.random,Ae={};Ae[$]=Xt,Ae[T]=Yt,Ae[F]=Zt,Ae[B]=ne,Ae[q]=re,Ae[W]=ee,Ae[z]=ue,Ae[P]=oe,Q.prototype=J.prototype;var De=J.support={};De.funcDecomp=!vt(e.a)&&E.test(s),De.funcNames=typeof ne.name=="string",J.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,variable:"",imports:{_:J}},ke||(nt=function(){function n(){}return function(t){if(wt(t)){n.prototype=t;
var r=new n;n.prototype=null}return r||e.Object()}}());var $e=je?function(n,t){M.value=t,je(n,"__bindData__",M)}:Ht,Te=xe||function(n){return n&&typeof n=="object"&&typeof n.length=="number"&&ce.call(n)==$||false},Fe=Ne?function(n){return wt(n)?Ne(n):[]}:H,Be={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=_t(Be),qe=ue("("+Fe(We).join("|")+")","g"),ze=ue("["+Fe(Be).join("")+"]","g"),Pe=ye?function(n){if(!n||ce.call(n)!=q)return false;var t=n.valueOf,e=vt(t)&&(e=ye(t))&&ye(e);return e?n==e||ye(n)==e:ht(n)
}:ht,Ke=lt(function(n,t,e){me.call(n,e)?n[e]++:n[e]=1}),Le=lt(function(n,t,e){(me.call(n,e)?n[e]:n[e]=[]).push(t)}),Me=lt(function(n,t,e){n[e]=t}),Ve=Rt,Ue=vt(Ue=Zt.now)&&Ue||function(){return(new Zt).getTime()},Ge=8==Ee(d+"08")?Ee:function(n,t){return Ee(kt(n)?n.replace(I,""):n,t||0)};return J.after=function(n,t){if(!dt(t))throw new ie;return function(){return 1>--n?t.apply(this,arguments):void 0}},J.assign=U,J.at=function(n){for(var t=arguments,e=-1,r=ut(t,true,false,1),t=t[2]&&t[2][t[1]]===n?1:r.length,u=Xt(t);++e<t;)u[e]=n[r[e]];
return u},J.bind=Mt,J.bindAll=function(n){for(var t=1<arguments.length?ut(arguments,true,false,1):bt(n),e=-1,r=t.length;++e<r;){var u=t[e];n[u]=ct(n[u],1,null,null,n)}return n},J.bindKey=function(n,t){return 2<arguments.length?ct(t,19,p(arguments,2),null,n):ct(t,3,null,null,n)},J.chain=function(n){return n=new Q(n),n.__chain__=true,n},J.compact=function(n){for(var t=-1,e=n?n.length:0,r=[];++t<e;){var u=n[t];u&&r.push(u)}return r},J.compose=function(){for(var n=arguments,t=n.length;t--;)if(!dt(n[t]))throw new ie;
return function(){for(var t=arguments,e=n.length;e--;)t=[n[e].apply(this,t)];return t[0]}},J.constant=function(n){return function(){return n}},J.countBy=Ke,J.create=function(n,t){var e=nt(n);return t?U(e,t):e},J.createCallback=function(n,t,e){var r=typeof n;if(null==n||"function"==r)return tt(n,t,e);if("object"!=r)return Jt(n);var u=Fe(n),o=u[0],i=n[o];return 1!=u.length||i!==i||wt(i)?function(t){for(var e=u.length,r=false;e--&&(r=ot(t[u[e]],n[u[e]],null,true)););return r}:function(n){return n=n[o],i===n&&(0!==i||1/i==1/n)
}},J.curry=function(n,t){return t=typeof t=="number"?t:+t||n.length,ct(n,4,null,null,null,t)},J.debounce=Vt,J.defaults=_,J.defer=function(n){if(!dt(n))throw new ie;var t=p(arguments,1);return _e(function(){n.apply(v,t)},1)},J.delay=function(n,t){if(!dt(n))throw new ie;var e=p(arguments,2);return _e(function(){n.apply(v,e)},t)},J.difference=function(n){return rt(n,ut(arguments,true,true,1))},J.filter=Nt,J.flatten=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=typeof t!="function"&&r&&r[t]===n?null:t,t=false),null!=e&&(n=Rt(n,e,r)),ut(n,t)
},J.forEach=St,J.forEachRight=Et,J.forIn=g,J.forInRight=function(n,t,e){var r=[];g(n,function(n,t){r.push(t,n)});var u=r.length;for(t=tt(t,e,3);u--&&false!==t(r[u--],r[u],n););return n},J.forOwn=h,J.forOwnRight=mt,J.functions=bt,J.groupBy=Le,J.indexBy=Me,J.initial=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else r=null==t||e?1:t||r;return p(n,0,Se(Ie(0,u-r),u))},J.intersection=function(){for(var e=[],r=-1,u=arguments.length,i=a(),f=st(),p=f===n,s=a();++r<u;){var v=arguments[r];
(Te(v)||yt(v))&&(e.push(v),i.push(p&&v.length>=b&&o(r?e[r]:s)))}var p=e[0],h=-1,g=p?p.length:0,y=[];n:for(;++h<g;){var m=i[0],v=p[h];if(0>(m?t(m,v):f(s,v))){for(r=u,(m||s).push(v);--r;)if(m=i[r],0>(m?t(m,v):f(e[r],v)))continue n;y.push(v)}}for(;u--;)(m=i[u])&&c(m);return l(i),l(s),y},J.invert=_t,J.invoke=function(n,t){var e=p(arguments,2),r=-1,u=typeof t=="function",o=n?n.length:0,i=Xt(typeof o=="number"?o:0);return St(n,function(n){i[++r]=(u?t:n[t]).apply(n,e)}),i},J.keys=Fe,J.map=Rt,J.mapValues=function(n,t,e){var r={};
return t=J.createCallback(t,e,3),h(n,function(n,e,u){r[e]=t(n,e,u)}),r},J.max=At,J.memoize=function(n,t){function e(){var r=e.cache,u=t?t.apply(this,arguments):m+arguments[0];return me.call(r,u)?r[u]:r[u]=n.apply(this,arguments)}if(!dt(n))throw new ie;return e.cache={},e},J.merge=function(n){var t=arguments,e=2;if(!wt(n))return n;if("number"!=typeof t[2]&&(e=t.length),3<e&&"function"==typeof t[e-2])var r=tt(t[--e-1],t[e--],2);else 2<e&&"function"==typeof t[e-1]&&(r=t[--e]);for(var t=p(arguments,1,e),u=-1,o=a(),i=a();++u<e;)it(n,t[u],r,o,i);
return l(o),l(i),n},J.min=function(n,t,e){var u=1/0,o=u;if(typeof t!="function"&&e&&e[t]===n&&(t=null),null==t&&Te(n)){e=-1;for(var i=n.length;++e<i;){var a=n[e];a<o&&(o=a)}}else t=null==t&&kt(n)?r:J.createCallback(t,e,3),St(n,function(n,e,r){e=t(n,e,r),e<u&&(u=e,o=n)});return o},J.omit=function(n,t,e){var r={};if(typeof t!="function"){var u=[];g(n,function(n,t){u.push(t)});for(var u=rt(u,ut(arguments,true,false,1)),o=-1,i=u.length;++o<i;){var a=u[o];r[a]=n[a]}}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)||(r[e]=n)
});return r},J.once=function(n){var t,e;if(!dt(n))throw new ie;return function(){return t?e:(t=true,e=n.apply(this,arguments),n=null,e)}},J.pairs=function(n){for(var t=-1,e=Fe(n),r=e.length,u=Xt(r);++t<r;){var o=e[t];u[t]=[o,n[o]]}return u},J.partial=function(n){return ct(n,16,p(arguments,1))},J.partialRight=function(n){return ct(n,32,null,p(arguments,1))},J.pick=function(n,t,e){var r={};if(typeof t!="function")for(var u=-1,o=ut(arguments,true,false,1),i=wt(n)?o.length:0;++u<i;){var a=o[u];a in n&&(r[a]=n[a])
}else t=J.createCallback(t,e,3),g(n,function(n,e,u){t(n,e,u)&&(r[e]=n)});return r},J.pluck=Ve,J.property=Jt,J.pull=function(n){for(var t=arguments,e=0,r=t.length,u=n?n.length:0;++e<r;)for(var o=-1,i=t[e];++o<u;)n[o]===i&&(de.call(n,o--,1),u--);return n},J.range=function(n,t,e){n=+n||0,e=typeof e=="number"?e:+e||1,null==t&&(t=n,n=0);var r=-1;t=Ie(0,se((t-n)/(e||1)));for(var u=Xt(t);++r<t;)u[r]=n,n+=e;return u},J.reject=function(n,t,e){return t=J.createCallback(t,e,3),Nt(n,function(n,e,r){return!t(n,e,r)
})},J.remove=function(n,t,e){var r=-1,u=n?n.length:0,o=[];for(t=J.createCallback(t,e,3);++r<u;)e=n[r],t(e,r,n)&&(o.push(e),de.call(n,r--,1),u--);return o},J.rest=qt,J.shuffle=Tt,J.sortBy=function(n,t,e){var r=-1,o=Te(t),i=n?n.length:0,p=Xt(typeof i=="number"?i:0);for(o||(t=J.createCallback(t,e,3)),St(n,function(n,e,u){var i=p[++r]=f();o?i.m=Rt(t,function(t){return n[t]}):(i.m=a())[0]=t(n,e,u),i.n=r,i.o=n}),i=p.length,p.sort(u);i--;)n=p[i],p[i]=n.o,o||l(n.m),c(n);return p},J.tap=function(n,t){return t(n),n
},J.throttle=function(n,t,e){var r=true,u=true;if(!dt(n))throw new ie;return false===e?r=false:wt(e)&&(r="leading"in e?e.leading:r,u="trailing"in e?e.trailing:u),L.leading=r,L.maxWait=t,L.trailing=u,Vt(n,t,L)},J.times=function(n,t,e){n=-1<(n=+n)?n:0;var r=-1,u=Xt(n);for(t=tt(t,e,1);++r<n;)u[r]=t(r);return u},J.toArray=function(n){return n&&typeof n.length=="number"?p(n):xt(n)},J.transform=function(n,t,e,r){var u=Te(n);if(null==e)if(u)e=[];else{var o=n&&n.constructor;e=nt(o&&o.prototype)}return t&&(t=J.createCallback(t,r,4),(u?St:h)(n,function(n,r,u){return t(e,n,r,u)
})),e},J.union=function(){return ft(ut(arguments,true,true))},J.uniq=Pt,J.values=xt,J.where=Nt,J.without=function(n){return rt(n,p(arguments,1))},J.wrap=function(n,t){return ct(t,16,[n])},J.xor=function(){for(var n=-1,t=arguments.length;++n<t;){var e=arguments[n];if(Te(e)||yt(e))var r=r?ft(rt(r,e).concat(rt(e,r))):e}return r||[]},J.zip=Kt,J.zipObject=Lt,J.collect=Rt,J.drop=qt,J.each=St,J.eachRight=Et,J.extend=U,J.methods=bt,J.object=Lt,J.select=Nt,J.tail=qt,J.unique=Pt,J.unzip=Kt,Gt(J),J.clone=function(n,t,e,r){return typeof t!="boolean"&&null!=t&&(r=e,e=t,t=false),Z(n,t,typeof e=="function"&&tt(e,r,1))
},J.cloneDeep=function(n,t,e){return Z(n,true,typeof t=="function"&&tt(t,e,1))},J.contains=Ct,J.escape=function(n){return null==n?"":oe(n).replace(ze,pt)},J.every=Ot,J.find=It,J.findIndex=function(n,t,e){var r=-1,u=n?n.length:0;for(t=J.createCallback(t,e,3);++r<u;)if(t(n[r],r,n))return r;return-1},J.findKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),h(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.findLast=function(n,t,e){var r;return t=J.createCallback(t,e,3),Et(n,function(n,e,u){return t(n,e,u)?(r=n,false):void 0
}),r},J.findLastIndex=function(n,t,e){var r=n?n.length:0;for(t=J.createCallback(t,e,3);r--;)if(t(n[r],r,n))return r;return-1},J.findLastKey=function(n,t,e){var r;return t=J.createCallback(t,e,3),mt(n,function(n,e,u){return t(n,e,u)?(r=e,false):void 0}),r},J.has=function(n,t){return n?me.call(n,t):false},J.identity=Ut,J.indexOf=Wt,J.isArguments=yt,J.isArray=Te,J.isBoolean=function(n){return true===n||false===n||n&&typeof n=="object"&&ce.call(n)==T||false},J.isDate=function(n){return n&&typeof n=="object"&&ce.call(n)==F||false
},J.isElement=function(n){return n&&1===n.nodeType||false},J.isEmpty=function(n){var t=true;if(!n)return t;var e=ce.call(n),r=n.length;return e==$||e==P||e==D||e==q&&typeof r=="number"&&dt(n.splice)?!r:(h(n,function(){return t=false}),t)},J.isEqual=function(n,t,e,r){return ot(n,t,typeof e=="function"&&tt(e,r,2))},J.isFinite=function(n){return Ce(n)&&!Oe(parseFloat(n))},J.isFunction=dt,J.isNaN=function(n){return jt(n)&&n!=+n},J.isNull=function(n){return null===n},J.isNumber=jt,J.isObject=wt,J.isPlainObject=Pe,J.isRegExp=function(n){return n&&typeof n=="object"&&ce.call(n)==z||false
},J.isString=kt,J.isUndefined=function(n){return typeof n=="undefined"},J.lastIndexOf=function(n,t,e){var r=n?n.length:0;for(typeof e=="number"&&(r=(0>e?Ie(0,r+e):Se(e,r-1))+1);r--;)if(n[r]===t)return r;return-1},J.mixin=Gt,J.noConflict=function(){return e._=le,this},J.noop=Ht,J.now=Ue,J.parseInt=Ge,J.random=function(n,t,e){var r=null==n,u=null==t;return null==e&&(typeof n=="boolean"&&u?(e=n,n=1):u||typeof t!="boolean"||(e=t,u=true)),r&&u&&(t=1),n=+n||0,u?(t=n,n=0):t=+t||0,e||n%1||t%1?(e=Re(),Se(n+e*(t-n+parseFloat("1e-"+((e+"").length-1))),t)):at(n,t)
},J.reduce=Dt,J.reduceRight=$t,J.result=function(n,t){if(n){var e=n[t];return dt(e)?n[t]():e}},J.runInContext=s,J.size=function(n){var t=n?n.length:0;return typeof t=="number"?t:Fe(n).length},J.some=Ft,J.sortedIndex=zt,J.template=function(n,t,e){var r=J.templateSettings;n=oe(n||""),e=_({},e,r);var u,o=_({},e.imports,r.imports),r=Fe(o),o=xt(o),a=0,f=e.interpolate||S,l="__p+='",f=ue((e.escape||S).source+"|"+f.source+"|"+(f===N?x:S).source+"|"+(e.evaluate||S).source+"|$","g");n.replace(f,function(t,e,r,o,f,c){return r||(r=o),l+=n.slice(a,c).replace(R,i),e&&(l+="'+__e("+e+")+'"),f&&(u=true,l+="';"+f+";\n__p+='"),r&&(l+="'+((__t=("+r+"))==null?'':__t)+'"),a=c+t.length,t
}),l+="';",f=e=e.variable,f||(e="obj",l="with("+e+"){"+l+"}"),l=(u?l.replace(w,""):l).replace(j,"$1").replace(k,"$1;"),l="function("+e+"){"+(f?"":e+"||("+e+"={});")+"var __t,__p='',__e=_.escape"+(u?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+l+"return __p}";try{var c=ne(r,"return "+l).apply(v,o)}catch(p){throw p.source=l,p}return t?c(t):(c.source=l,c)},J.unescape=function(n){return null==n?"":oe(n).replace(qe,gt)},J.uniqueId=function(n){var t=++y;return oe(null==n?"":n)+t
},J.all=Ot,J.any=Ft,J.detect=It,J.findWhere=It,J.foldl=Dt,J.foldr=$t,J.include=Ct,J.inject=Dt,Gt(function(){var n={};return h(J,function(t,e){J.prototype[e]||(n[e]=t)}),n}(),false),J.first=Bt,J.last=function(n,t,e){var r=0,u=n?n.length:0;if(typeof t!="number"&&null!=t){var o=u;for(t=J.createCallback(t,e,3);o--&&t(n[o],o,n);)r++}else if(r=t,null==r||e)return n?n[u-1]:v;return p(n,Ie(0,u-r))},J.sample=function(n,t,e){return n&&typeof n.length!="number"&&(n=xt(n)),null==t||e?n?n[at(0,n.length-1)]:v:(n=Tt(n),n.length=Se(Ie(0,t),n.length),n)
},J.take=Bt,J.head=Bt,h(J,function(n,t){var e="sample"!==t;J.prototype[t]||(J.prototype[t]=function(t,r){var u=this.__chain__,o=n(this.__wrapped__,t,r);return u||null!=t&&(!r||e&&typeof t=="function")?new Q(o,u):o})}),J.VERSION="2.4.1",J.prototype.chain=function(){return this.__chain__=true,this},J.prototype.toString=function(){return oe(this.__wrapped__)},J.prototype.value=Qt,J.prototype.valueOf=Qt,St(["join","pop","shift"],function(n){var t=ae[n];J.prototype[n]=function(){var n=this.__chain__,e=t.apply(this.__wrapped__,arguments);
return n?new Q(e,n):e}}),St(["push","reverse","sort","unshift"],function(n){var t=ae[n];J.prototype[n]=function(){return t.apply(this.__wrapped__,arguments),this}}),St(["concat","slice","splice"],function(n){var t=ae[n];J.prototype[n]=function(){return new Q(t.apply(this.__wrapped__,arguments),this.__chain__)}}),J}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p\+='';/g,j=/\b(__p\+=)''\+/g,k=/(__e\(.*?\)|\b__t\))\+'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,I=RegExp("^["+d+"]*0+(?=.$)"),S=/($^)/,E=/\bthis\b/,R=/['\n\r\t\u2028\u2029\\]/g,A="Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "),D="[object Arguments]",$="[object Array]",T="[object Boolean]",F="[object Date]",B="[object Function]",W="[object Number]",q="[object Object]",z="[object RegExp]",P="[object String]",K={};
K[B]=false,K[D]=K[$]=K[T]=K[F]=K[W]=K[q]=K[z]=K[P]=true;var L={leading:false,maxWait:0,trailing:false},M={configurable:false,enumerable:false,value:null,writable:false},V={"boolean":false,"function":true,object:true,number:false,string:false,undefined:false},U={"\\":"\\","'":"'","\n":"n","\r":"r","\t":"t","\u2028":"u2028","\u2029":"u2029"},G=V[typeof window]&&window||this,H=V[typeof exports]&&exports&&!exports.nodeType&&exports,J=V[typeof module]&&module&&!module.nodeType&&module,Q=J&&J.exports===H&&H,X=V[typeof global]&&global;!X||X.global!==X&&X.window!==X||(G=X);
var Y=s();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(G._=Y, define(function(){return Y})):H&&J?Q?(J.exports=Y)._=Y:H._=Y:G._=Y}).call(this);

// COLLECTION
//
// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  (function(root, factory) {
    var _;
    if (typeof define === "function" && define.amd) {
      define(["lodash", "exports"], function(_, exports) {
        root.Collection = factory(root, exports, _);
      });
    } else if (typeof exports !== "undefined") {
      _ = require("lodash");
      factory(root, exports, _);
    } else {
      root.Collection = factory(root, {}, root._);
    }
  })(this, function(root, Collection, _) {
    var addArg, notReturnsCollectionMethods, previousCollection, returnsCollectionMethods, slice;
    previousCollection = root.Collection;
    slice = Array.prototype.slice.call.bind(Array.prototype.slice);
    addArg = function(arg, args) {
      args = slice(args);
      args.unshift(arg);
      return args;
    };
    Collection = (function(_super) {
      __extends(Collection, _super);

      function Collection(models) {
        var model, _i, _len;
        if (models) {
          for (_i = 0, _len = models.length; _i < _len; _i++) {
            model = models[_i];
            this.push(model);
          }
        }
      }

      Collection.prototype.slice = function() {
        return new Collection(Collection.__super__.slice.call(this, arguments));
      };

      Collection.prototype.splice = function() {
        return new Collection(Collection.__super__.splice.call(this, arguments));
      };

      Collection.prototype.groupBy = function() {
        var col, groups, key;
        groups = _.groupBy(addArg(this, arguments));
        for (key in groups) {
          col = groups[key];
          groups[key] = new Collection(col);
        }
        return groups;
      };

      return Collection;

    })(Array);
    returnsCollectionMethods = ['forEach', 'each', 'eachRight', 'forEachRight', 'map', 'collect', 'filter', 'select', 'where', 'pluck', 'reject', 'invoke', 'initial', 'rest', 'tail', 'drop', 'compact', 'flatten', 'without', 'shuffle', 'remove', 'transform', 'unique', 'uniq', 'union', 'intersection', 'difference'];
    notReturnsCollectionMethods = ['reduce', 'foldl', 'inject', 'reduceRight', 'foldr', 'find', 'detect', 'findWhere', 'every', 'all', 'some', 'any', 'contains', 'max', 'min', 'include', 'size', 'first', 'last', 'indexOf', 'lastIndexOf', 'isEmpty', 'toArray', 'at', 'findLast', 'indexBy', 'sortBy', 'countBy'];
    _.each(returnsCollectionMethods, function(method) {
      if (_[method]) {
        Collection.prototype[method] = function() {
          return new Collection(_[method].apply(_, addArg(this, arguments)));
        };
      }
    });
    _.each(notReturnsCollectionMethods, function(method) {
      if (_[method]) {
        Collection.prototype[method] = function() {
          return _[method].apply(_, addArg(this, arguments));
        };
      }
    });
    Collection.noConflict = function() {
      root.Collection = previousCollection;
      return this;
    };
    return Collection;
  });

}).call(this);


// CONTROLS
//
// Generated by CoffeeScript 1.7.1
var $_, ControlCollection, Factory, changeEvent, controlValidations, each, elClear, elValid, elValue, event, every, extend, filter, invalidEvent, isFunction, map, p, remove, slice, trigger, validEvent,
  __hasProp = {}.hasOwnProperty,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __slice = [].slice;

if (Element && !Element.prototype.matches) {
  p = Element.prototype;
  p.matches = p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
}

map = Function.prototype.call.bind(Array.prototype.map);

each = Function.prototype.call.bind(Array.prototype.forEach);

slice = Function.prototype.call.bind(Array.prototype.slice);

every = Function.prototype.call.bind(Array.prototype.every);

filter = Function.prototype.call.bind(Array.prototype.filter);

remove = function(arr, val) {
  var i;
  i = arr.indexOf(val);
  if (i !== -1) {
    arr.splice(i, 1);
  }
  return arr;
};

extend = function(out) {
  var i, key, _ref;
  out || (out = {});
  i = 1;
  while (i < arguments.length) {
    if (!arguments[i]) {
      continue;
    }
    _ref = arguments[i];
    for (key in _ref) {
      if (!__hasProp.call(_ref, key)) continue;
      out[key] = arguments[i][key];
    }
    i++;
  }
  return out;
};

$_ = function(selector, context) {
  if (context == null) {
    context = document;
  }
  if (typeof context === "string") {
    context = document.querySelector(context);
  }
  if (!(context instanceof Node)) {
    throw new TypeError("Can't select with that context.");
  }
  return slice(context.querySelectorAll(selector));
};

isFunction = function(obj) {
  return obj && obj instanceof Function;
};

controlValidations = (function() {
  var v;
  v = {
    notEmpty: function(el) {
      return !!el.value;
    },
    notEmptyTrim: function(el) {
      return !!el.value.trim();
    },
    numeric: function(el) {
      return /^\d+$/.test(el.value);
    },
    alphanumeric: function(el) {
      return /^[a-z0-9]+$/i.test(el.value);
    },
    letters: function(el) {
      return /^[a-z]+$/i.test(el.value);
    },
    isValue: function(value, el) {
      return String(el.value) === String(value);
    },
    phone: function(el) {
      return v.allowed("1234567890()-+ ", el);
    },
    email: function(el) {
      var i;
      i = document.createElement("input");
      i.type = "email";
      i.value = el.value;
      return !!el.value && i.validity.valid;
    },
    list: function(el) {
      var listValues, _ref;
      listValues = map(el.list.options || [], function(option) {
        return option.value || option.innerHTML;
      });
      return _ref = el.value, __indexOf.call(listValues, _ref) >= 0;
    },
    radio: function(el) {
      var name;
      if ((name = el.name)) {
        return $_("input[type='radio'][name='" + name + "']").some(function(input) {
          return input.checked;
        });
      } else {
        return false;
      }
    },
    checkbox: function(minChecked, maxChecked, el) {
      var len, name;
      if (minChecked == null) {
        minChecked = 0;
      }
      if (maxChecked == null) {
        maxChecked = 50;
      }
      if ((name = el.name)) {
        len = $_("input[type='checkbox'][name='" + name + "']").filter(function(input) {
          return input.checked;
        }).length;
        return (minChecked <= len && len <= maxChecked);
      } else {
        return true;
      }
    },
    select: function(min, max, el) {
      var selected, _ref;
      if (min == null) {
        min = 1;
      }
      if (max == null) {
        max = 1;
      }
      selected = filter(el, function(opt) {
        return opt.selected && !opt.disabled;
      });
      if ((min <= (_ref = selected.length) && _ref <= max)) {
        return true;
      } else {
        return false;
      }
    },
    allowed: function(allowedChars, el) {
      var char, str, _i, _len;
      allowedChars = allowedChars.split("");
      str = el.value.split("");
      for (_i = 0, _len = str.length; _i < _len; _i++) {
        char = str[_i];
        if (__indexOf.call(allowedChars, char) < 0) {
          return false;
        }
      }
      return true;
    },
    notAllowed: function(notAllowedChars, el) {
      var char, str, _i, _len;
      notAllowedChars = notAllowedChars.split("");
      str = el.value.split("");
      for (_i = 0, _len = notAllowedChars.length; _i < _len; _i++) {
        char = notAllowedChars[_i];
        if (__indexOf.call(str, char) >= 0) {
          return false;
        }
      }
      return true;
    },
    numberBetween: function(min, max, el) {
      var _ref;
      return (Number(min) <= (_ref = Number(el.value)) && _ref <= Number(max));
    },
    numberMax: function(max, el) {
      return Number(el.value) <= Number(max);
    },
    numberMin: function(min, el) {
      return Number(el.value) >= Number(min);
    },
    lengthBetween: function(min, max, el) {
      var _ref;
      return (Number(min) <= (_ref = el.value.length) && _ref <= Number(max));
    },
    lengthMax: function(max, el) {
      return el.value.length <= Number(max);
    },
    lengthMin: function(min, el) {
      return el.value.length >= Number(min);
    },
    lengthIs: function(len, el) {
      return el.value.length === Number(len);
    }
  };
  return v;
})();

elValid = (function() {
  var getArgs, getMethod, splitMethods;
  splitMethods = function(str) {
    return str != null ? str.split("&&").map(function(m) {
      return m != null ? m.trim() : void 0;
    }) : void 0;
  };
  getMethod = function(str) {
    return str != null ? str.split("(")[0] : void 0;
  };
  getArgs = function(str) {
    var _ref;
    return str != null ? (_ref = str.match(/\(([^)]+)\)/)) != null ? _ref[1].split(",").map(function(arg) {
      return arg != null ? arg.trim().replace(/'/g, "") : void 0;
    }) : void 0 : void 0;
  };
  return function(el, customFn) {
    var attr, composed;
    if (customFn) {
      return customFn(el);
    } else if ((attr = el.dataset.controlValidation)) {
      composed = splitMethods(attr);
      return composed.every(function(str) {
        var args, method, sigLength;
        method = getMethod(str);
        args = getArgs(str) || [];
        sigLength = controlValidations[method].length;
        args.length = sigLength === 0 ? 0 : sigLength - 1;
        args.push(el);
        if (method in controlValidations) {
          return controlValidations[method].apply(null, args);
        } else {
          return false;
        }
      });
    } else {
      return el.validity.valid;
    }
  };
})();

elValue = function(el) {
  var _ref, _ref1;
  if (el.matches("input[type=radio]") || el.matches("input[type=checkbox]")) {
    if (el.checked) {
      return el.value;
    } else {
      return false;
    }
  } else if (el.matches("select")) {
    if (!((_ref = el.selectedOptions[0]) != null ? _ref.disabled : void 0)) {
      return (_ref1 = el.selectedOptions[0]) != null ? _ref1.value : void 0;
    } else {
      return false;
    }
  } else if (el.matches("button") || el.matches("input[type='button']")) {
    return false;
  } else if (el.matches("input") || el.matches("textarea")) {
    return el.value;
  } else {
    return false;
  }
};

elClear = function(el) {
  var changed, originalSelected;
  changed = false;
  if (el.matches("[type=radio]") || el.matches("[type=checkbox]")) {
    if (el.checked) {
      el.checked = false;
      changed = true;
    }
  } else if (el.matches("select")) {
    if (el.selectedOptions.length) {
      originalSelected = el.selectedOptions;
      each(el.selectedOptions, function(option) {
        return option.selected = false;
      });
      if (el.selectedOptions.length === originalSelected.length) {
        changed = !every(originalSelected, function(opt) {
          return __indexOf.call(el.selectedOptions, opt) >= 0;
        });
      }
    }
  } else if (el.matches("input")) {
    if (el.value) {
      el.value = "";
      changed = true;
    }
  }
  return changed;
};

event = function(type) {
  return new Event(type, {
    bubbles: true
  });
};

trigger = function(target, type) {
  var evt, method;
  evt = event(type);
  method = "trigger" in target ? "trigger" : "dispatchEvent";
  return target[method](evt);
};

validEvent = function() {
  return event("valid");
};

invalidEvent = function() {
  return event("invalid");
};

changeEvent = function() {
  return event("change");
};

window.ValueObject = (function(_super) {
  __extends(ValueObject, _super);

  function ValueObject(arr) {
    if (Array.isArray(arr)) {
      [].push.apply(this, arr);
    } else {
      throw new TypeError("Pass an array to the ValueObject constructor!");
    }
  }

  ValueObject.prototype.normal = function() {
    var arr;
    arr = [];
    [].push.apply(arr, this);
    return arr;
  };

  ValueObject.prototype.valueArray = function() {
    return this.map(function(pair) {
      return pair.value;
    });
  };

  ValueObject.prototype.idArray = function() {
    return this.map(function(pair) {
      return pair.id;
    });
  };

  ValueObject.prototype.idValuePair = function() {
    var o, pair, _i, _len;
    o = {};
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      pair = this[_i];
      o[pair.id] = pair.value;
    }
    return o;
  };

  ValueObject.prototype.valueString = function(delimiter) {
    if (delimiter == null) {
      delimiter = ", ";
    }
    return this.valueArray().join(delimiter);
  };

  ValueObject.prototype.valueArrayOne = function() {
    var m;
    m = this.valueArray();
    if (m.length > 1) {
      return m;
    } else {
      return m[0];
    }
  };

  ValueObject.prototype.idArrayOne = function() {
    var m;
    m = this.idArray();
    if (m.length > 1) {
      return m;
    } else {
      return m[0];
    }
  };

  ValueObject.prototype.at = function(i) {
    if (isNaN(Number(i))) {
      return this.idValuePair()[i];
    } else {
      return this[i].value;
    }
  };

  ValueObject.prototype.first = function() {
    return this.at(0);
  };

  ValueObject.prototype.last = function() {
    return this.at(this.length - 1);
  };

  ValueObject.prototype.serialize = function() {
    return JSON.stringify(this.normal());
  };

  return ValueObject;

})(Array);

ControlCollection = (function(_super) {
  __extends(ControlCollection, _super);

  function ControlCollection(elements) {
    this._setValidityListener = false;
    this._eventListeners = {};
    [].push.apply(this, elements);
  }

  ControlCollection.prototype.value = function(param) {
    if (param) {
      return this._setValue(param);
    } else {
      return this._getValue();
    }
  };

  ControlCollection.prototype._getValue = function() {
    var control, o, v, values, _i, _len;
    values = [];
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      control = this[_i];
      v = elValue(control);
      if (v) {
        o = {};
        o.id = control.id;
        o.value = v;
        values.push(o);
      }
    }
    return new ValueObject(values);
  };

  ControlCollection.prototype._setValue = function(param) {
    var control, _i, _len;
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      control = this[_i];
      if ("value" in control) {
        control.value = param;
      }
    }
    return this;
  };

  ControlCollection.prototype.data = function(attr, val) {
    if (val) {
      return this._setData(attr, val);
    } else {
      return this._getData(attr);
    }
  };

  ControlCollection.prototype._getData = function(attr) {
    var control, data, o, _i, _len;
    data = [];
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      control = this[_i];
      o = {};
      o.id = control.id;
      o.value = control.dataset[attr];
      values.push(o);
    }
    return new ValueObject(data);
  };

  ControlCollection.prototype._setData = function(attr, val) {
    var control, _i, _len;
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      control = this[_i];
      control.dataset[attr] = val;
    }
    return this;
  };

  ControlCollection.prototype.prop = function(prop, val) {
    if (prop === "value") {
      return this.value.apply(this, arguments);
    } else {
      if (val) {
        return this._setData(attr, val);
      } else {
        return this._getData(attr);
      }
    }
  };

  ControlCollection.prototype._getProp = function(prop) {
    var control, data, o, _i, _len;
    data = [];
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      control = this[_i];
      o = {};
      o.id = control.id;
      o.value = control[attr];
      values.push(o);
    }
    return new ValueObject(data);
  };

  ControlCollection.prototype._setProp = function(prop, val) {
    var control, _i, _len;
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      control = this[_i];
      if (prop in control) {
        control[attr] = val;
      }
    }
    return this;
  };

  ControlCollection.prototype.valid = function() {
    return this.every(function(el) {
      return elValid(el);
    });
  };

  ControlCollection.prototype.filter = function() {
    var args, selector;
    args = slice(arguments);
    if (typeof args[0] === "string") {
      selector = args[0];
      args[0] = function(control) {
        return control.matches(selector);
      };
    }
    return new ControlCollection(Array.prototype.filter.apply(this, args));
  };

  ControlCollection.prototype.not = function() {
    var args, fn, notFn;
    args = slice(arguments);
    fn = args.shift();
    if (typeof fn === "string") {
      notFn = function(e) {
        return !e.matches(fn);
      };
    } else {
      notFn = function(e) {
        return !fn(e);
      };
    }
    args.unshift(notFn);
    return new ControlCollection(Array.prototype.filter.apply(this, args));
  };

  ControlCollection.prototype.tag = function(tag) {
    return new ControlCollection(this.filter(function(el) {
      return el.tagName.toLowerCase() === tag.toLowerCase;
    }));
  };

  ControlCollection.prototype.type = function(type) {
    return new ControlCollection(this.filter(function(el) {
      return el.type.toLowerCase() === type.toLowerCase();
    }));
  };

  ControlCollection.prototype.clear = function() {
    var control, _i, _len;
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      control = this[_i];
      if (elClear(control)) {
        control.dispatchEvent(changeEvent());
      }
    }
    return this;
  };

  ControlCollection.prototype.disabled = function(param) {
    var control, _i, _len;
    if (param == null) {
      return this;
    }
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      control = this[_i];
      control.disabled = !!param;
    }
    return this;
  };

  ControlCollection.prototype.required = function(param) {
    var control, _i, _len;
    if (param == null) {
      return this;
    }
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      control = this[_i];
      control.required = !!param;
    }
    return this;
  };

  ControlCollection.prototype.checked = function(param) {
    var control, _i, _len;
    if (param == null) {
      return this;
    }
    param = !!param;
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      control = this[_i];
      if (control.matches("[type='radio'], [type='checkbox']")) {
        if (control.checked !== param) {
          control.checked = param;
          trigger(control, "change");
        }
      }
    }
    return this;
  };

  ControlCollection.prototype.on = function(eventType, handler) {
    var eventHandler, _base;
    if (eventType === "valid") {
      this.setValidityListener();
    }
    eventHandler = (function(_this) {
      return function(event) {
        var _ref;
        if (_ref = event.target, __indexOf.call(_this, _ref) >= 0) {
          return handler.call(_this, event);
        }
      };
    })(this);
    document.addEventListener(eventType, eventHandler);
    (_base = this._eventListeners)[eventType] || (_base[eventType] = []);
    this._eventListeners[eventType].push(eventHandler);
    return eventHandler;
  };

  ControlCollection.prototype.off = function(eventType, handler) {
    remove(this._eventListeners[eventType] || [], handler);
    return document.removeEventListener(eventType, handler);
  };

  ControlCollection.prototype.offAll = function(eventType) {
    var list;
    list = eventType ? [eventType] : Object.keys(this._eventListeners);
    return each(list, (function(_this) {
      return function(type) {
        var listeners;
        listeners = _this._eventListeners[type] || [];
        return each(listeners, function(fn) {
          return _this.off(type, fn);
        });
      };
    })(this));
  };

  ControlCollection.prototype.trigger = function(evt) {
    if (!(evt instanceof Event)) {
      evt = new CustomEvent(evt, {
        bubbles: true,
        detail: {}
      });
    }
    return this[0].dispatchEvent(evt);
  };

  ControlCollection.prototype.invoke = function() {
    var args, control, fn, _i, _len;
    fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      control = this[_i];
      if (typeof fn === "string") {
        if (fn in control && isFunction(control[fn])) {
          control[fn](args);
        }
      } else if (isFunction(fn)) {
        fn.apply(control, args);
      }
    }
    return this;
  };

  ControlCollection.prototype.labels = function() {
    var control, labels, _i, _len;
    labels = [];
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      control = this[_i];
      [].push.apply(labels, control.labels);
    }
    return labels;
  };

  ControlCollection.prototype.setValidityListener = function() {
    var listener;
    if (!this._validityListener) {
      this._validityListener = true;
      listener = function() {
        return this.trigger(this.valid() ? validEvent() : invalidEvent());
      };
      this.on("change", listener);
      this.on("input", listener);
      return setTimeout((function(_this) {
        return function() {
          return _this.trigger("change");
        };
      })(this), 0);
    }
  };

  return ControlCollection;

})(Array);

Factory = (function() {
  var controlTags;
  controlTags = ["input", "select", "button", "textarea"];
  return function(param) {
    var controlElements, inner;
    controlElements = [];
    inner = function(param) {
      var _ref;
      if (typeof param === "string") {
        inner(document.querySelector(param));
      } else if (param instanceof Element) {
        if (_ref = param.tagName.toLowerCase(), __indexOf.call(controlTags, _ref) < 0) {
          inner(param.querySelectorAll(controlTags.join(", ")));
        } else {
          controlElements.push(param);
        }
      } else if (param.length != null) {
        each(param, function(el) {
          return inner(el);
        });
      }
    };
    inner(param);
    return new ControlCollection(controlElements);
  };
})();

Factory.validate = elValid;

Factory.addValidation = function(name, fn) {
  if (controlValidations[name]) {
    return false;
  }
  return controlValidations[name] = fn;
};

Factory.getValidations = function() {
  return extend({}, controlValidations);
};

Factory.init = ControlCollection;

Factory.valueInit = ValueObject;

window.Controls = Factory;


// UNDERDSCORE STRING
//
!function(e,n){"use strict";function r(e,n){var r,t,u=e.toLowerCase();for(n=[].concat(n),r=0;n.length>r;r+=1)if(t=n[r]){if(t.test&&t.test(e))return!0;if(t.toLowerCase()===u)return!0}}var t=n.prototype.trim,u=n.prototype.trimRight,i=n.prototype.trimLeft,l=function(e){return 1*e||0},o=function(e,n){if(1>n)return"";for(var r="";n>0;)1&n&&(r+=e),n>>=1,e+=e;return r},a=[].slice,c=function(e){return null==e?"\\s":e.source?e.source:"["+g.escapeRegExp(e)+"]"},s={lt:"<",gt:">",quot:'"',amp:"&",apos:"'"},f={};for(var p in s)f[s[p]]=p;f["'"]="#39";var h=function(){function e(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}var r=o,t=function(){return t.cache.hasOwnProperty(arguments[0])||(t.cache[arguments[0]]=t.parse(arguments[0])),t.format.call(null,t.cache[arguments[0]],arguments)};return t.format=function(t,u){var i,l,o,a,c,s,f,p=1,g=t.length,d="",m=[];for(l=0;g>l;l++)if(d=e(t[l]),"string"===d)m.push(t[l]);else if("array"===d){if(a=t[l],a[2])for(i=u[p],o=0;a[2].length>o;o++){if(!i.hasOwnProperty(a[2][o]))throw new Error(h('[_.sprintf] property "%s" does not exist',a[2][o]));i=i[a[2][o]]}else i=a[1]?u[a[1]]:u[p++];if(/[^s]/.test(a[8])&&"number"!=e(i))throw new Error(h("[_.sprintf] expecting number but found %s",e(i)));switch(a[8]){case"b":i=i.toString(2);break;case"c":i=n.fromCharCode(i);break;case"d":i=parseInt(i,10);break;case"e":i=a[7]?i.toExponential(a[7]):i.toExponential();break;case"f":i=a[7]?parseFloat(i).toFixed(a[7]):parseFloat(i);break;case"o":i=i.toString(8);break;case"s":i=(i=n(i))&&a[7]?i.substring(0,a[7]):i;break;case"u":i=Math.abs(i);break;case"x":i=i.toString(16);break;case"X":i=i.toString(16).toUpperCase()}i=/[def]/.test(a[8])&&a[3]&&i>=0?"+"+i:i,s=a[4]?"0"==a[4]?"0":a[4].charAt(1):" ",f=a[6]-n(i).length,c=a[6]?r(s,f):"",m.push(a[5]?i+c:c+i)}return m.join("")},t.cache={},t.parse=function(e){for(var n=e,r=[],t=[],u=0;n;){if(null!==(r=/^[^\x25]+/.exec(n)))t.push(r[0]);else if(null!==(r=/^\x25{2}/.exec(n)))t.push("%");else{if(null===(r=/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(n)))throw new Error("[_.sprintf] huh?");if(r[2]){u|=1;var i=[],l=r[2],o=[];if(null===(o=/^([a-z_][a-z_\d]*)/i.exec(l)))throw new Error("[_.sprintf] huh?");for(i.push(o[1]);""!==(l=l.substring(o[0].length));)if(null!==(o=/^\.([a-z_][a-z_\d]*)/i.exec(l)))i.push(o[1]);else{if(null===(o=/^\[(\d+)\]/.exec(l)))throw new Error("[_.sprintf] huh?");i.push(o[1])}r[2]=i}else u|=2;if(3===u)throw new Error("[_.sprintf] mixing positional and named placeholders is not (yet) supported");t.push(r)}n=n.substring(r[0].length)}return t},t}(),g={VERSION:"2.3.0",isBlank:function(e){return null==e&&(e=""),/^\s*$/.test(e)},stripTags:function(e){return null==e?"":n(e).replace(/<\/?[^>]+>/g,"")},capitalize:function(e){return e=null==e?"":n(e),e.charAt(0).toUpperCase()+e.slice(1)},chop:function(e,r){return null==e?[]:(e=n(e),r=~~r,r>0?e.match(new RegExp(".{1,"+r+"}","g")):[e])},clean:function(e){return g.strip(e).replace(/\s+/g," ")},count:function(e,r){if(null==e||null==r)return 0;e=n(e),r=n(r);for(var t=0,u=0,i=r.length;;){if(u=e.indexOf(r,u),-1===u)break;t++,u+=i}return t},chars:function(e){return null==e?[]:n(e).split("")},swapCase:function(e){return null==e?"":n(e).replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})},escapeHTML:function(e){return null==e?"":n(e).replace(/[&<>"']/g,function(e){return"&"+f[e]+";"})},unescapeHTML:function(e){return null==e?"":n(e).replace(/\&([^;]+);/g,function(e,r){var t;return r in s?s[r]:(t=r.match(/^#x([\da-fA-F]+)$/))?n.fromCharCode(parseInt(t[1],16)):(t=r.match(/^#(\d+)$/))?n.fromCharCode(~~t[1]):e})},escapeRegExp:function(e){return null==e?"":n(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},splice:function(e,n,r,t){var u=g.chars(e);return u.splice(~~n,~~r,t),u.join("")},insert:function(e,n,r){return g.splice(e,n,0,r)},include:function(e,r){return""===r?!0:null==e?!1:-1!==n(e).indexOf(r)},join:function(){var e=a.call(arguments),n=e.shift();return null==n&&(n=""),e.join(n)},lines:function(e){return null==e?[]:n(e).split("\n")},reverse:function(e){return g.chars(e).reverse().join("")},startsWith:function(e,r){return""===r?!0:null==e||null==r?!1:(e=n(e),r=n(r),e.length>=r.length&&e.slice(0,r.length)===r)},endsWith:function(e,r){return""===r?!0:null==e||null==r?!1:(e=n(e),r=n(r),e.length>=r.length&&e.slice(e.length-r.length)===r)},succ:function(e){return null==e?"":(e=n(e),e.slice(0,-1)+n.fromCharCode(e.charCodeAt(e.length-1)+1))},titleize:function(e){return null==e?"":(e=n(e).toLowerCase(),e.replace(/(?:^|\s|-)\S/g,function(e){return e.toUpperCase()}))},camelize:function(e){return g.trim(e).replace(/[-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""})},underscored:function(e){return g.trim(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()},dasherize:function(e){return g.trim(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()},classify:function(e){return g.titleize(n(e).replace(/[\W_]/g," ")).replace(/\s/g,"")},humanize:function(e){return g.capitalize(g.underscored(e).replace(/_id$/,"").replace(/_/g," "))},trim:function(e,r){return null==e?"":!r&&t?t.call(e):(r=c(r),n(e).replace(new RegExp("^"+r+"+|"+r+"+$","g"),""))},ltrim:function(e,r){return null==e?"":!r&&i?i.call(e):(r=c(r),n(e).replace(new RegExp("^"+r+"+"),""))},rtrim:function(e,r){return null==e?"":!r&&u?u.call(e):(r=c(r),n(e).replace(new RegExp(r+"+$"),""))},truncate:function(e,r,t){return null==e?"":(e=n(e),t=t||"...",r=~~r,e.length>r?e.slice(0,r)+t:e)},prune:function(e,r,t){if(null==e)return"";if(e=n(e),r=~~r,t=null!=t?n(t):"...",r>=e.length)return e;var u=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},i=e.slice(0,r+1).replace(/.(?=\W*\w*$)/g,u);return i=i.slice(i.length-2).match(/\w\w/)?i.replace(/\s*\S+$/,""):g.rtrim(i.slice(0,i.length-1)),(i+t).length>e.length?e:e.slice(0,i.length)+t},words:function(e,n){return g.isBlank(e)?[]:g.trim(e,n).split(n||/\s+/)},pad:function(e,r,t,u){e=null==e?"":n(e),r=~~r;var i=0;switch(t?t.length>1&&(t=t.charAt(0)):t=" ",u){case"right":return i=r-e.length,e+o(t,i);case"both":return i=r-e.length,o(t,Math.ceil(i/2))+e+o(t,Math.floor(i/2));default:return i=r-e.length,o(t,i)+e}},lpad:function(e,n,r){return g.pad(e,n,r)},rpad:function(e,n,r){return g.pad(e,n,r,"right")},lrpad:function(e,n,r){return g.pad(e,n,r,"both")},sprintf:h,vsprintf:function(e,n){return n.unshift(e),h.apply(null,n)},toNumber:function(e,n){return e?(e=g.trim(e),e.match(/^-?\d+(?:\.\d+)?$/)?l(l(e).toFixed(~~n)):0/0):0},numberFormat:function(e,n,r,t){if(isNaN(e)||null==e)return"";e=e.toFixed(~~n),t="string"==typeof t?t:",";var u=e.split("."),i=u[0],l=u[1]?(r||".")+u[1]:"";return i.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+t)+l},strRight:function(e,r){if(null==e)return"";e=n(e),r=null!=r?n(r):r;var t=r?e.indexOf(r):-1;return~t?e.slice(t+r.length,e.length):e},strRightBack:function(e,r){if(null==e)return"";e=n(e),r=null!=r?n(r):r;var t=r?e.lastIndexOf(r):-1;return~t?e.slice(t+r.length,e.length):e},strLeft:function(e,r){if(null==e)return"";e=n(e),r=null!=r?n(r):r;var t=r?e.indexOf(r):-1;return~t?e.slice(0,t):e},strLeftBack:function(e,n){if(null==e)return"";e+="",n=null!=n?""+n:n;var r=e.lastIndexOf(n);return~r?e.slice(0,r):e},toSentence:function(e,n,r,t){n=n||", ",r=r||" and ";var u=e.slice(),i=u.pop();return e.length>2&&t&&(r=g.rtrim(n)+r),u.length?u.join(n)+r+i:i},toSentenceSerial:function(){var e=a.call(arguments);return e[3]=!0,g.toSentence.apply(g,e)},slugify:function(e){if(null==e)return"";var r="ąàáäâãåæăćęèéëêìíïîłńòóöôõøśșțùúüûñçżź",t="aaaaaaaaaceeeeeiiiilnoooooosstuuuunczz",u=new RegExp(c(r),"g");return e=n(e).toLowerCase().replace(u,function(e){var n=r.indexOf(e);return t.charAt(n)||"-"}),g.dasherize(e.replace(/[^\w\s-]/g,""))},surround:function(e,n){return[n,e,n].join("")},quote:function(e,n){return g.surround(e,n||'"')},unquote:function(e,n){return n=n||'"',e[0]===n&&e[e.length-1]===n?e.slice(1,e.length-1):e},exports:function(){var e={};for(var n in this)this.hasOwnProperty(n)&&!n.match(/^(?:include|contains|reverse)$/)&&(e[n]=this[n]);return e},repeat:function(e,r,t){if(null==e)return"";if(r=~~r,null==t)return o(n(e),r);for(var u=[];r>0;u[--r]=e);return u.join(t)},naturalCmp:function(e,r){if(e==r)return 0;if(!e)return-1;if(!r)return 1;for(var t=/(\.\d+)|(\d+)|(\D+)/g,u=n(e).toLowerCase().match(t),i=n(r).toLowerCase().match(t),l=Math.min(u.length,i.length),o=0;l>o;o++){var a=u[o],c=i[o];if(a!==c){var s=parseInt(a,10);if(!isNaN(s)){var f=parseInt(c,10);if(!isNaN(f)&&s-f)return s-f}return c>a?-1:1}}return u.length===i.length?u.length-i.length:r>e?-1:1},levenshtein:function(e,r){if(null==e&&null==r)return 0;if(null==e)return n(r).length;if(null==r)return n(e).length;e=n(e),r=n(r);for(var t,u,i=[],l=0;r.length>=l;l++)for(var o=0;e.length>=o;o++)u=l&&o?e.charAt(o-1)===r.charAt(l-1)?t:Math.min(i[o],i[o-1],t)+1:l+o,t=i[o],i[o]=u;return i.pop()},toBoolean:function(e,n,t){return"number"==typeof e&&(e=""+e),"string"!=typeof e?!!e:(e=g.trim(e),r(e,n||["true","1"])?!0:r(e,t||["false","0"])?!1:void 0)}};g.strip=g.trim,g.lstrip=g.ltrim,g.rstrip=g.rtrim,g.center=g.lrpad,g.rjust=g.lpad,g.ljust=g.rpad,g.contains=g.include,g.q=g.quote,g.toBool=g.toBoolean,"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(module.exports=g),exports._s=g),"function"==typeof define&&define.amd&&define("underscore.string",[],function(){return g}),e._=e._||{},e._.string=e._.str=g}(this,String);

// COLOR.JS
//
//
// Copyright (c) 2008-2013, Andrew Brehaut, Tim Baumann, Matt Wilson, 
//                          Simon Heimler, Michel Vielmetter 
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
// * Redistributions of source code must retain the above copyright notice,
//   this list of conditions and the following disclaimer.
// * Redistributions in binary form must reproduce the above copyright notice,
//   this list of conditions and the following disclaimer in the documentation
//   and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.

// color.js - version 1.0.1
//
// HSV <-> RGB code based on code from http://www.cs.rit.edu/~ncs/color/t_convert.html
// object function created by Douglas Crockford.
// Color scheme degrees taken from the colorjack.com colorpicker
//
// HSL support kindly provided by Tim Baumann - http://github.com/timjb

// create namespaces
/*global net */
if ("undefined" == typeof net) { var net = {}; }
if (!net.brehaut) { net.brehaut = {}; }

// this module function is called with net.brehaut as 'this'
(function ( ) {
  "use strict";
  // Constants

  // css_colors maps color names onto their hex values
  // these names are defined by W3C
  var css_colors = {aliceblue:'#F0F8FF',antiquewhite:'#FAEBD7',aqua:'#00FFFF',aquamarine:'#7FFFD4',azure:'#F0FFFF',beige:'#F5F5DC',bisque:'#FFE4C4',black:'#000000',blanchedalmond:'#FFEBCD',blue:'#0000FF',blueviolet:'#8A2BE2',brown:'#A52A2A',burlywood:'#DEB887',cadetblue:'#5F9EA0',chartreuse:'#7FFF00',chocolate:'#D2691E',coral:'#FF7F50',cornflowerblue:'#6495ED',cornsilk:'#FFF8DC',crimson:'#DC143C',cyan:'#00FFFF',darkblue:'#00008B',darkcyan:'#008B8B',darkgoldenrod:'#B8860B',darkgray:'#A9A9A9',darkgrey:'#A9A9A9',darkgreen:'#006400',darkkhaki:'#BDB76B',darkmagenta:'#8B008B',darkolivegreen:'#556B2F',darkorange:'#FF8C00',darkorchid:'#9932CC',darkred:'#8B0000',darksalmon:'#E9967A',darkseagreen:'#8FBC8F',darkslateblue:'#483D8B',darkslategray:'#2F4F4F',darkslategrey:'#2F4F4F',darkturquoise:'#00CED1',darkviolet:'#9400D3',deeppink:'#FF1493',deepskyblue:'#00BFFF',dimgray:'#696969',dimgrey:'#696969',dodgerblue:'#1E90FF',firebrick:'#B22222',floralwhite:'#FFFAF0',forestgreen:'#228B22',fuchsia:'#FF00FF',gainsboro:'#DCDCDC',ghostwhite:'#F8F8FF',gold:'#FFD700',goldenrod:'#DAA520',gray:'#808080',grey:'#808080',green:'#008000',greenyellow:'#ADFF2F',honeydew:'#F0FFF0',hotpink:'#FF69B4',indianred:'#CD5C5C',indigo:'#4B0082',ivory:'#FFFFF0',khaki:'#F0E68C',lavender:'#E6E6FA',lavenderblush:'#FFF0F5',lawngreen:'#7CFC00',lemonchiffon:'#FFFACD',lightblue:'#ADD8E6',lightcoral:'#F08080',lightcyan:'#E0FFFF',lightgoldenrodyellow:'#FAFAD2',lightgray:'#D3D3D3',lightgrey:'#D3D3D3',lightgreen:'#90EE90',lightpink:'#FFB6C1',lightsalmon:'#FFA07A',lightseagreen:'#20B2AA',lightskyblue:'#87CEFA',lightslategray:'#778899',lightslategrey:'#778899',lightsteelblue:'#B0C4DE',lightyellow:'#FFFFE0',lime:'#00FF00',limegreen:'#32CD32',linen:'#FAF0E6',magenta:'#FF00FF',maroon:'#800000',mediumaquamarine:'#66CDAA',mediumblue:'#0000CD',mediumorchid:'#BA55D3',mediumpurple:'#9370D8',mediumseagreen:'#3CB371',mediumslateblue:'#7B68EE',mediumspringgreen:'#00FA9A',mediumturquoise:'#48D1CC',mediumvioletred:'#C71585',midnightblue:'#191970',mintcream:'#F5FFFA',mistyrose:'#FFE4E1',moccasin:'#FFE4B5',navajowhite:'#FFDEAD',navy:'#000080',oldlace:'#FDF5E6',olive:'#808000',olivedrab:'#6B8E23',orange:'#FFA500',orangered:'#FF4500',orchid:'#DA70D6',palegoldenrod:'#EEE8AA',palegreen:'#98FB98',paleturquoise:'#AFEEEE',palevioletred:'#D87093',papayawhip:'#FFEFD5',peachpuff:'#FFDAB9',peru:'#CD853F',pink:'#FFC0CB',plum:'#DDA0DD',powderblue:'#B0E0E6',purple:'#800080',red:'#FF0000',rosybrown:'#BC8F8F',royalblue:'#4169E1',saddlebrown:'#8B4513',salmon:'#FA8072',sandybrown:'#F4A460',seagreen:'#2E8B57',seashell:'#FFF5EE',sienna:'#A0522D',silver:'#C0C0C0',skyblue:'#87CEEB',slateblue:'#6A5ACD',slategray:'#708090',slategrey:'#708090',snow:'#FFFAFA',springgreen:'#00FF7F',steelblue:'#4682B4',tan:'#D2B48C',teal:'#008080',thistle:'#D8BFD8',tomato:'#FF6347',turquoise:'#40E0D0',violet:'#EE82EE',wheat:'#F5DEB3',white:'#FFFFFF',whitesmoke:'#F5F5F5',yellow:'#FFFF00',yellowgreen:'#9ACD32"'};

  // CSS value regexes, according to http://www.w3.org/TR/css3-values/
  var css_integer = '(?:\\+|-)?\\d+';
  var css_float = '(?:\\+|-)?\\d*\\.\\d+';
  var css_number = '(?:' + css_integer + ')|(?:' + css_float + ')';
  css_integer = '(' + css_integer + ')';
  css_float = '(' + css_float + ')';
  css_number = '(' + css_number + ')';
  var css_percentage = css_number + '%';
  var css_whitespace = '\\s*?';

  // http://www.w3.org/TR/2003/CR-css3-color-20030514/
  var hsl_hsla_regex = new RegExp([
    '^hsl(a?)\\(', css_number, ',', css_percentage, ',', css_percentage, '(,(', css_number, '))?\\)$'
  ].join(css_whitespace) );
  var rgb_rgba_integer_regex = new RegExp([
    '^rgb(a?)\\(', css_integer, ',', css_integer, ',', css_integer, '(,(', css_number, '))?\\)$'
  ].join(css_whitespace) );
  var rgb_rgba_percentage_regex = new RegExp([
    '^rgb(a?)\\(', css_percentage, ',', css_percentage, ',', css_percentage, '(,(', css_number, '))?\\)$'
  ].join(css_whitespace) );

  // Package wide variables

  // becomes the top level prototype object
  var color;

  /* registered_models contains the template objects for all the
   * models that have been registered for the color class.
   */
  var registered_models = [];


  /* factories contains methods to create new instance of
   * different color models that have been registered.
   */
  var factories = {};

  // Utility functions

  /* object is Douglas Crockfords object function for prototypal
   * inheritance.
   */
  if (!this.object) {
    this.object = function (o) {
      function F () { }
      F.prototype = o;
      return new F();
    };
  }
  var object = this.object;

  /* takes a value, converts to string if need be, then pads it
   * to a minimum length.
   */
  function pad ( val, len ) {
    val = val.toString();
    var padded = [];

    for (var i = 0, j = Math.max( len - val.length, 0); i < j; i++) {
      padded.push('0');
    }

    padded.push(val);
    return padded.join('');
  }


  /* takes a string and returns a new string with the first letter
   * capitalised
   */
  function capitalise ( s ) {
    return s.slice(0,1).toUpperCase() + s.slice(1);
  }

  /* removes leading and trailing whitespace
   */
  function trim ( str ) {
    return str.replace(/^\s+|\s+$/g, '');
  }

  /* used to apply a method to object non-destructively by
   * cloning the object and then apply the method to that
   * new object
   */
  function cloneOnApply( meth ) {
    return function ( ) {
      var cloned = this.clone();
      meth.apply(cloned, arguments);
      return cloned;
    };
  }


  /* registerModel is used to add additional representations
   * to the color code, and extend the color API with the new
   * operatiosn that model provides. see before for examples
   */
  function registerModel( name, model ) {
    var proto = object(color);
    var fields = []; // used for cloning and generating accessors

    var to_meth = 'to'+ capitalise(name);

    function convertAndApply( meth ) {
      return function ( ) {
        return meth.apply(this[to_meth](), arguments);
      };
    }

    for (var key in model) if (model.hasOwnProperty(key)) {
      proto[key] = model[key];
      var prop = proto[key];

      if (key.slice(0,1) == '_') { continue; }
      if (!(key in color) && "function" == typeof prop) {
        // the method found on this object is a) public and b) not
        // currently supported by the color object. Create an impl that
        // calls the toModel function and passes that new object
        // onto the correct method with the args.
        color[key] = convertAndApply(prop);
      }
      else if ("function" != typeof prop) {
        // we have found a public property. create accessor methods
        // and bind them up correctly
        fields.push(key);
        var getter = 'get'+capitalise(key);
        var setter = 'set'+capitalise(key);

        color[getter] = convertAndApply(
          proto[getter] = (function ( key ) {
            return function ( ) {
              return this[key];
            };
          })( key )
        );

        color[setter] = convertAndApply(
          proto[setter] = (function ( key ) {
            return function ( val ) {
              var cloned = this.clone();
              cloned[key] = val;
              return cloned;
            };
          })( key )
        );
      }
    } // end of for over model

    // a method to create a new object - largely so prototype chains dont
    // get insane. This uses an unrolled 'object' so that F is cached
    // for later use. this is approx a 25% speed improvement
    function F () { }
    F.prototype = proto;
    function factory ( ) {
      return new F();
    }
    factories[name] = factory;

    proto.clone = function () {
      var cloned = factory();
      for (var i = 0, j = fields.length; i < j; i++) {
        var key = fields[i];
        cloned[key] = this[key];
      }
      return cloned;
    };

    color[to_meth] = function ( ) {
      return factory();
    };

    registered_models.push(proto);

    return proto;
  }// end of registerModel

  // Template Objects

  /* color is the root object in the color hierarchy. It starts
   * life as a very simple object, but as color models are
   * registered it has methods programmatically added to manage
   * conversions as needed.
   */
  color = {
    /* fromObject takes an argument and delegates to the internal
     * color models to try to create a new instance.
     */
    fromObject: function ( o ) {
      if (!o) {
        return object(color);
      }

      for (var i = 0, j = registered_models.length; i < j; i++) {
        var nu = registered_models[i].fromObject(o);
        if (nu) {
          return nu;
        }
      }

      return object(color);
    },

    toString: function ( ) {
      return this.toCSS();
    }
  };

  var transparent = null; // defined with an RGB later.

  /* RGB is the red green blue model. This definition is converted
   * to a template object by registerModel.
   */
  registerModel('RGB', {
    red:    0,
    green:  0,
    blue:   0,
    alpha:  0,

    /* getLuminance returns a value between 0 and 1, this is the
     * luminance calcuated according to
     * http://www.poynton.com/notes/colour_and_gamma/ColorFAQ.html#RTFToC9
     */
    getLuminance: function ( ) {
      return (this.red * 0.2126) + (this.green * 0.7152) + (this.blue * 0.0722);
    },

    /* does an alpha based blend of color onto this. alpha is the
     * amount of 'color' to use. (0 to 1)
     */
    blend: function ( color , alpha ) {
      color = color.toRGB();
      alpha = Math.min(Math.max(alpha, 0), 1);
      var rgb = this.clone();     

      rgb.red = (rgb.red * (1 - alpha)) + (color.red * alpha);
      rgb.green = (rgb.green * (1 - alpha)) + (color.green * alpha);
      rgb.blue = (rgb.blue * (1 - alpha)) + (color.blue * alpha);
      rgb.alpha = (rgb.alpha * (1 - alpha)) + (color.alpha * alpha);

      return rgb;
    },

    /* fromObject attempts to convert an object o to and RGB
     * instance. This accepts an object with red, green and blue
     * members or a string. If the string is a known CSS color name
     * or a hexdecimal string it will accept it.
     */
    fromObject: function ( o ) {
      if (o instanceof Array) {
        return this._fromRGBArray ( o );
      }
      if ("string" == typeof o) {
        return this._fromCSS( trim( o ) );
      }
      if (o.hasOwnProperty('red') &&
          o.hasOwnProperty('green') &&
          o.hasOwnProperty('blue')) {
        return this._fromRGB ( o );
      }
      // nothing matchs, not an RGB object
    },

    _stringParsers: [
        // CSS RGB(A) literal:
        function ( css ) {
          css = trim(css);

          var withInteger = match(rgb_rgba_integer_regex, 255);
          if(withInteger) {
            return withInteger;
          }
          return match(rgb_rgba_percentage_regex, 100);

          function match(regex, max_value) {
            var colorGroups = css.match( regex );

            // If there is an "a" after "rgb", there must be a fourth parameter and the other way round
            if (!colorGroups || (!!colorGroups[1] + !!colorGroups[5] === 1)) {
              return null;
            }

            var rgb = factories.RGB();
            rgb.red   = Math.min(1, Math.max(0, colorGroups[2] / max_value));
            rgb.green = Math.min(1, Math.max(0, colorGroups[3] / max_value));
            rgb.blue  = Math.min(1, Math.max(0, colorGroups[4] / max_value));
            rgb.alpha = !!colorGroups[5] ? Math.min(Math.max(parseFloat(colorGroups[6]), 0), 1) : 1;

            return rgb;
          }
        },

        function ( css ) {
            var lower = css.toLowerCase();
            if (lower in css_colors) {
              css = css_colors[lower];
            }

            if (!css.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)) {
              return;
            }

            css = css.replace(/^#/,'');

            var bytes = css.length / 3;

            var max = Math.pow(16, bytes) - 1;

            var rgb = factories.RGB();
            rgb.red =   parseInt(css.slice(0, bytes), 16) / max;
            rgb.green = parseInt(css.slice(bytes * 1,bytes * 2), 16) / max;
            rgb.blue =  parseInt(css.slice(bytes * 2), 16) / max;
            rgb.alpha = 1;
            return rgb;
        },

        function ( css ) {
            if (css.toLowerCase() !== 'transparent') return;

            return transparent;
        }
    ],

    _fromCSS: function ( css ) {
      var color = null;
      for (var i = 0, j = this._stringParsers.length; i < j; i++) {
          color = this._stringParsers[i](css);
          if (color) return color;
      }
    },

    _fromRGB: function ( RGB ) {
      var newRGB = factories.RGB();

      newRGB.red = RGB.red;
      newRGB.green = RGB.green;
      newRGB.blue = RGB.blue;
      newRGB.alpha = RGB.hasOwnProperty('alpha') ? RGB.alpha : 1;

      return newRGB;
    },

    _fromRGBArray: function ( RGB ) {
      var newRGB = factories.RGB();

      newRGB.red = Math.max(0, Math.min(1, RGB[0] / 255));
      newRGB.green = Math.max(0, Math.min(1, RGB[1] / 255));
      newRGB.blue = Math.max(0, Math.min(1, RGB[2] / 255));
      newRGB.alpha = RGB[3] !== undefined ? Math.max(0, Math.min(1, RGB[3])) : 1;

      return newRGB;
    },

    // convert to a CSS string. defaults to two bytes a value
    toCSSHex: function ( bytes ) {
        bytes = bytes || 2;

        var max = Math.pow(16, bytes) - 1;
        var css = [
          "#",
          pad ( Math.round(this.red * max).toString( 16 ).toUpperCase(), bytes ),
          pad ( Math.round(this.green * max).toString( 16 ).toUpperCase(), bytes ),
          pad ( Math.round(this.blue * max).toString( 16 ).toUpperCase(), bytes )
        ];

        return css.join('');
    },    
    
    toCSS: function ( bytes ) {
      if (this.alpha === 1) return this.toCSSHex(bytes); 

      var max = 255;
      
      var components = [
        'rgba(',
        Math.max(0, Math.min(max, Math.round(this.red * max))), ',',
        Math.max(0, Math.min(max, Math.round(this.green * max))), ',', 
        Math.max(0, Math.min(max, Math.round(this.blue * max))), ',',
        Math.max(0, Math.min(1, this.alpha)), 
        ')'
      ];

      return components.join('');
    },

    toHSV: function ( ) {
      var hsv = factories.HSV();
      var min, max, delta;

      min = Math.min(this.red, this.green, this.blue);
      max = Math.max(this.red, this.green, this.blue);
      hsv.value = max; // v

      delta = max - min;

      if( delta == 0 ) { // white, grey, black
        hsv.hue = hsv.saturation = 0;
      }
      else { // chroma
        hsv.saturation = delta / max;

        if( this.red == max ) {
          hsv.hue = ( this.green - this.blue ) / delta; // between yellow & magenta
        }
        else if( this.green  == max ) {
          hsv.hue = 2 + ( this.blue - this.red ) / delta; // between cyan & yellow
        }
        else {
          hsv.hue = 4 + ( this.red - this.green ) / delta; // between magenta & cyan
        }

        hsv.hue = ((hsv.hue * 60) + 360) % 360; // degrees
      }

      hsv.alpha = this.alpha;

      return hsv;
    },
    toHSL: function ( ) {
      return this.toHSV().toHSL();
    },

    toRGB: function ( ) {
      return this.clone();
    }
  });

  transparent = color.fromObject({red: 0, blue: 0, green: 0, alpha: 0});


  /* Like RGB above, this object describes what will become the HSV
   * template object. This model handles hue, saturation and value.
   * hue is the number of degrees around the color wheel, saturation
   * describes how much color their is and value is the brightness.
   */
  registerModel('HSV', {
    hue: 0,
    saturation: 0,
    value: 1,
    alpha: 1,

    shiftHue: cloneOnApply(function ( degrees ) {
      var hue = (this.hue + degrees) % 360;
      if (hue < 0) {
        hue = (360 + hue) % 360;
      }

      this.hue = hue;
    }),

    devalueByAmount: cloneOnApply(function ( val ) {
      this.value = Math.min(1, Math.max(this.value - val, 0));
    }),

    devalueByRatio: cloneOnApply(function ( val ) {
      this.value = Math.min(1, Math.max(this.value * (1 - val), 0));
    }),

    valueByAmount: cloneOnApply(function ( val ) {
      this.value = Math.min(1, Math.max(this.value + val, 0));
    }),

    valueByRatio: cloneOnApply(function ( val ) {
      this.value = Math.min(1, Math.max(this.value * (1 + val), 0));
    }),

    desaturateByAmount: cloneOnApply(function ( val ) {
      this.saturation = Math.min(1, Math.max(this.saturation - val, 0));
    }),

    desaturateByRatio: cloneOnApply(function ( val ) {
      this.saturation = Math.min(1, Math.max(this.saturation * (1 - val), 0));
    }),

    saturateByAmount: cloneOnApply(function ( val ) {
      this.saturation = Math.min(1, Math.max(this.saturation + val, 0));
    }),

    saturateByRatio: cloneOnApply(function ( val ) {
      this.saturation = Math.min(1, Math.max(this.saturation * (1 + val), 0));
    }),

    schemeFromDegrees: function ( degrees ) {
      var newColors = [];
      for (var i = 0, j = degrees.length; i < j; i++) {
        var col = this.clone();
        col.hue = (this.hue + degrees[i]) % 360;
        newColors.push(col);
      }
      return newColors;
    },

    complementaryScheme: function ( ) {
      return this.schemeFromDegrees([0,180]);
    },

    splitComplementaryScheme: function ( ) {
      return this.schemeFromDegrees([0,150,320]);
    },

    splitComplementaryCWScheme: function ( ) {
      return this.schemeFromDegrees([0,150,300]);
    },

    splitComplementaryCCWScheme: function ( ) {
      return this.schemeFromDegrees([0,60,210]);
    },

    triadicScheme: function ( ) {
      return this.schemeFromDegrees([0,120,240]);
    },

    clashScheme: function ( ) {
      return this.schemeFromDegrees([0,90,270]);
    },

    tetradicScheme: function ( ) {
      return this.schemeFromDegrees([0,90,180,270]);
    },

    fourToneCWScheme: function ( ) {
      return this.schemeFromDegrees([0,60,180,240]);
    },

    fourToneCCWScheme: function ( ) {
      return this.schemeFromDegrees([0,120,180,300]);
    },

    fiveToneAScheme: function ( ) {
      return this.schemeFromDegrees([0,115,155,205,245]);
    },

    fiveToneBScheme: function ( ) {
      return this.schemeFromDegrees([0,40,90,130,245]);
    },

    fiveToneCScheme: function ( ) {
      return this.schemeFromDegrees([0,50,90,205,320]);
    },

    fiveToneDScheme: function ( ) {
      return this.schemeFromDegrees([0,40,155,270,310]);
    },

    fiveToneEScheme: function ( ) {
      return this.schemeFromDegrees([0,115,230,270,320]);
    },

    sixToneCWScheme: function ( ) {
      return this.schemeFromDegrees([0,30,120,150,240,270]);
    },

    sixToneCCWScheme: function ( ) {
      return this.schemeFromDegrees([0,90,120,210,240,330]);
    },

    neutralScheme: function ( ) {
      return this.schemeFromDegrees([0,15,30,45,60,75]);
    },

    analogousScheme: function ( ) {
      return this.schemeFromDegrees([0,30,60,90,120,150]);
    },

    fromObject: function ( o ) {
      if (o.hasOwnProperty('hue') &&
          o.hasOwnProperty('saturation') &&
          o.hasOwnProperty('value')) {
        var hsv = factories.HSV();

        hsv.hue = o.hue;
        hsv.saturation = o.saturation;
        hsv.value = o.value;
        hsv.alpha = o.hasOwnProperty('alpha') ? o.alpha : 1;

        return hsv;
      }
      // nothing matches, not an HSV object
      return null;
    },

    _normalise: function ( ) {
       this.hue %= 360;
       this.saturation = Math.min(Math.max(0, this.saturation), 1);
       this.value = Math.min(Math.max(0, this.value));
       this.alpha = Math.min(1, Math.max(0, this.alpha));
    },

    toRGB: function ( ) {
      this._normalise();

      var rgb = factories.RGB();
      var i;
      var f, p, q, t;

      if( this.saturation === 0 ) {
        // achromatic (grey)
        rgb.red = this.value;
        rgb.green = this.value;
        rgb.blue = this.value;
        rgb.alpha = this.alpha;
        return rgb;
      }

      var h = this.hue / 60;			// sector 0 to 5
      i = Math.floor( h );
      f = h - i;			// factorial part of h
      p = this.value * ( 1 - this.saturation );
      q = this.value * ( 1 - this.saturation * f );
      t = this.value * ( 1 - this.saturation * ( 1 - f ) );

      switch( i ) {
        case 0:
          rgb.red = this.value;
          rgb.green = t;
          rgb.blue = p;
          break;
        case 1:
          rgb.red = q;
          rgb.green = this.value;
          rgb.blue = p;
          break;
        case 2:
          rgb.red = p;
          rgb.green = this.value;
          rgb.blue = t;
          break;
        case 3:
          rgb.red = p;
          rgb.green = q;
          rgb.blue = this.value;
          break;
        case 4:
          rgb.red = t;
          rgb.green = p;
          rgb.blue = this.value;
          break;
        default:		// case 5:
          rgb.red = this.value;
          rgb.green = p;
          rgb.blue = q;
          break;
      }

      rgb.alpha = this.alpha;

      return rgb;
    },
    toHSL: function() {
      this._normalise();

      var hsl = factories.HSL();

      hsl.hue = this.hue;
      var l = (2 - this.saturation) * this.value,
          s = this.saturation * this.value;
      if(l && 2 - l) {
        s /= (l <= 1) ? l : 2 - l;
      }
      l /= 2;
      hsl.saturation = s;
      hsl.lightness = l;
      hsl.alpha = this.alpha;

      return hsl;
    },

    toHSV: function ( ) {
      return this.clone();
    }
  });

  registerModel('HSL', {
    hue: 0,
    saturation: 0,
    lightness: 0,
    alpha: 1,

    darkenByAmount: cloneOnApply(function ( val ) {
      this.lightness = Math.min(1, Math.max(this.lightness - val, 0));
    }),

    darkenByRatio: cloneOnApply(function ( val ) {
      this.lightness = Math.min(1, Math.max(this.lightness * (1 - val), 0));
    }),

    lightenByAmount: cloneOnApply(function ( val ) {
      this.lightness = Math.min(1, Math.max(this.lightness + val, 0));
    }),

    lightenByRatio: cloneOnApply(function ( val ) {
      this.lightness = Math.min(1, Math.max(this.lightness * (1 + val), 0));
    }),

    fromObject: function ( o ) {
      if ("string" == typeof o) {
        return this._fromCSS( o );
      }
      if (o.hasOwnProperty('hue') &&
          o.hasOwnProperty('saturation') &&
          o.hasOwnProperty('lightness')) {
        return this._fromHSL ( o );
      }
      // nothing matchs, not an RGB object
    },

    _fromCSS: function ( css ) {
      var colorGroups = trim( css ).match( hsl_hsla_regex );

      // if there is an "a" after "hsl", there must be a fourth parameter and the other way round
      if (!colorGroups || (!!colorGroups[1] + !!colorGroups[5] === 1)) {
        return null;
      }

      var hsl = factories.HSL();
      hsl.hue        = (colorGroups[2] % 360 + 360) % 360;
      hsl.saturation = Math.max(0, Math.min(parseInt(colorGroups[3], 10) / 100, 1));
      hsl.lightness  = Math.max(0, Math.min(parseInt(colorGroups[4], 10) / 100, 1));
      hsl.alpha      = !!colorGroups[5] ? Math.max(0, Math.min(1, parseFloat(colorGroups[6]))) : 1;

      return hsl;
    },

    _fromHSL: function ( HSL ) {
      var newHSL = factories.HSL();

      newHSL.hue = HSL.hue;
      newHSL.saturation = HSL.saturation;
      newHSL.lightness = HSL.lightness;

      newHSL.alpha = HSL.hasOwnProperty('alpha') ? HSL.alpha : 1;

      return newHSL;
    },

    _normalise: function ( ) {
       this.hue = (this.hue % 360 + 360) % 360;
       this.saturation = Math.min(Math.max(0, this.saturation), 1);
       this.lightness = Math.min(Math.max(0, this.lightness));
       this.alpha = Math.min(1, Math.max(0, this.alpha));
    },

    toHSL: function() {
      return this.clone();
    },
    toHSV: function() {
      this._normalise();

      var hsv = factories.HSV();

      // http://ariya.blogspot.com/2008/07/converting-between-hsl-and-hsv.html
      hsv.hue = this.hue; // H
      var l = 2 * this.lightness,
          s = this.saturation * ((l <= 1) ? l : 2 - l);
      hsv.value = (l + s) / 2; // V
      hsv.saturation = ((2 * s) / (l + s)) || 0; // S
      hsv.alpha = this.alpha;

      return hsv;
    },
    toRGB: function() {
      return this.toHSV().toRGB();
    }
  });

  // Package specific exports

  /* the Color function is a factory for new color objects.
   */
  function Color( o ) {
    return color.fromObject( o );
  }
  Color.isValid = function( str ) {
    var key, c = Color( str );

    var length = 0;
    for(key in c) {
      if(c.hasOwnProperty(key)) {
        length++;
      }
    }

    return length > 0;
  };
  net.brehaut.Color = Color;
}).call(net.brehaut);

/* Export to CommonJS
*/
var module;
if(module) {
  module.exports.Color = net.brehaut.Color;
}
var Color = net.brehaut.Color;

// D3
// 
!function(){function n(n,t){return t>n?-1:n>t?1:n>=t?0:0/0}function t(n){return null!=n&&!isNaN(n)}function r(n){return{left:function(t,r,e,u){for(arguments.length<3&&(e=0),arguments.length<4&&(u=t.length);u>e;){var i=e+u>>>1;n(t[i],r)<0?e=i+1:u=i}return e},right:function(t,r,e,u){for(arguments.length<3&&(e=0),arguments.length<4&&(u=t.length);u>e;){var i=e+u>>>1;n(t[i],r)>0?u=i:e=i+1}return e}}}function e(n){return n.length}function u(n){for(var t=1;n*t%1;)t*=10;return t}function i(n,t){try{for(var r in t)Object.defineProperty(n.prototype,r,{value:t[r],enumerable:!1})}catch(e){n.prototype=t}}function o(){}function a(n){return sa+n in this}function c(n){return n=sa+n,n in this&&delete this[n]}function s(){var n=[];return this.forEach(function(t){n.push(t)}),n}function l(){var n=0;for(var t in this)t.charCodeAt(0)===la&&++n;return n}function f(){for(var n in this)if(n.charCodeAt(0)===la)return!1;return!0}function h(){}function g(n,t,r){return function(){var e=r.apply(t,arguments);return e===t?n:e}}function p(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var r=0,e=fa.length;e>r;++r){var u=fa[r]+t;if(u in n)return u}}function v(){}function d(){}function m(n){function t(){for(var t,e=r,u=-1,i=e.length;++u<i;)(t=e[u].on)&&t.apply(this,arguments);return n}var r=[],e=new o;return t.on=function(t,u){var i,o=e.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,r=r.slice(0,i=r.indexOf(o)).concat(r.slice(i+1)),e.remove(t)),u&&r.push(e.set(t,{on:u})),n)},t}function y(){Bo.event.preventDefault()}function x(){for(var n,t=Bo.event;n=t.sourceEvent;)t=n;return t}function M(n){for(var t=new d,r=0,e=arguments.length;++r<e;)t[arguments[r]]=m(t);return t.of=function(r,e){return function(u){try{var i=u.sourceEvent=Bo.event;u.target=n,Bo.event=u,t[u.type].apply(r,e)}finally{Bo.event=i}}},t}function _(n){return ga(n,ya),n}function b(n){return"function"==typeof n?n:function(){return pa(n,this)}}function w(n){return"function"==typeof n?n:function(){return va(n,this)}}function S(n,t){function r(){this.removeAttribute(n)}function e(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var r=t.apply(this,arguments);null==r?this.removeAttribute(n):this.setAttribute(n,r)}function a(){var r=t.apply(this,arguments);null==r?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,r)}return n=Bo.ns.qualify(n),null==t?n.local?e:r:"function"==typeof t?n.local?a:o:n.local?i:u}function k(n){return n.trim().replace(/\s+/g," ")}function E(n){return new RegExp("(?:^|\\s+)"+Bo.requote(n)+"(?:\\s+|$)","g")}function A(n){return n.trim().split(/^|\s+/)}function C(n,t){function r(){for(var r=-1;++r<u;)n[r](this,t)}function e(){for(var r=-1,e=t.apply(this,arguments);++r<u;)n[r](this,e)}n=A(n).map(N);var u=n.length;return"function"==typeof t?e:r}function N(n){var t=E(n);return function(r,e){if(u=r.classList)return e?u.add(n):u.remove(n);var u=r.getAttribute("class")||"";e?(t.lastIndex=0,t.test(u)||r.setAttribute("class",k(u+" "+n))):r.setAttribute("class",k(u.replace(t," ")))}}function z(n,t,r){function e(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,r)}function i(){var e=t.apply(this,arguments);null==e?this.style.removeProperty(n):this.style.setProperty(n,e,r)}return null==t?e:"function"==typeof t?i:u}function L(n,t){function r(){delete this[n]}function e(){this[n]=t}function u(){var r=t.apply(this,arguments);null==r?delete this[n]:this[n]=r}return null==t?r:"function"==typeof t?u:e}function T(n){return"function"==typeof n?n:(n=Bo.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function q(n){return{__data__:n}}function R(n){return function(){return ma(this,n)}}function D(t){return arguments.length||(t=n),function(n,r){return n&&r?t(n.__data__,r.__data__):!n-!r}}function P(n,t){for(var r=0,e=n.length;e>r;r++)for(var u,i=n[r],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,r);return n}function U(n){return ga(n,Ma),n}function j(n){var t,r;return function(e,u,i){var o,a=n[i].update,c=a.length;for(i!=r&&(r=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function H(){var n=this.__transition__;n&&++n.active}function F(n,t,r){function e(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Wo(arguments));e.call(this),this.addEventListener(n,this[o]=u,u.$=r),u._=t}function i(){var t,r=new RegExp("^__on([^.]+)"+Bo.requote(n)+"$");for(var e in this)if(t=e.match(r)){var u=this[e];this.removeEventListener(t[1],u,u.$),delete this[e]}}var o="__on"+n,a=n.indexOf("."),c=O;a>0&&(n=n.substring(0,a));var s=ba.get(n);return s&&(n=s,c=I),a?t?u:e:t?v:i}function O(n,t){return function(r){var e=Bo.event;Bo.event=r,t[0]=this.__data__;try{n.apply(this,t)}finally{Bo.event=e}}}function I(n,t){var r=O(n,t);return function(n){var t=this,e=n.relatedTarget;e&&(e===t||8&e.compareDocumentPosition(t))||r.call(t,n)}}function Y(){var n=".dragsuppress-"+ ++Sa,t="click"+n,r=Bo.select(Qo).on("touchmove"+n,y).on("dragstart"+n,y).on("selectstart"+n,y);if(wa){var e=Ko.style,u=e[wa];e[wa]="none"}return function(i){function o(){r.on(t,null)}r.on(n,null),wa&&(e[wa]=u),i&&(r.on(t,function(){y(),o()},!0),setTimeout(o,0))}}function Z(n,t){t.changedTouches&&(t=t.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var e=r.createSVGPoint();return e.x=t.clientX,e.y=t.clientY,e=e.matrixTransform(n.getScreenCTM().inverse()),[e.x,e.y]}var u=n.getBoundingClientRect();return[t.clientX-u.left-n.clientLeft,t.clientY-u.top-n.clientTop]}function V(){return Bo.event.changedTouches[0].identifier}function $(){return Bo.event.target}function X(){return Qo}function B(n){return n>0?1:0>n?-1:0}function J(n,t,r){return(t[0]-n[0])*(r[1]-n[1])-(t[1]-n[1])*(r[0]-n[0])}function W(n){return n>1?0:-1>n?ka:Math.acos(n)}function G(n){return n>1?Aa:-1>n?-Aa:Math.asin(n)}function K(n){return((n=Math.exp(n))-1/n)/2}function Q(n){return((n=Math.exp(n))+1/n)/2}function nt(n){return((n=Math.exp(2*n))-1)/(n+1)}function tt(n){return(n=Math.sin(n/2))*n}function rt(){}function et(n,t,r){return new ut(n,t,r)}function ut(n,t,r){this.h=n,this.s=t,this.l=r}function it(n,t,r){function e(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*e(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,r=0>r?0:r>1?1:r,o=.5>=r?r*(1+t):r+t-r*t,i=2*r-o,yt(u(n+120),u(n),u(n-120))}function ot(n,t,r){return new at(n,t,r)}function at(n,t,r){this.h=n,this.c=t,this.l=r}function ct(n,t,r){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),st(r,Math.cos(n*=za)*t,Math.sin(n)*t)}function st(n,t,r){return new lt(n,t,r)}function lt(n,t,r){this.l=n,this.a=t,this.b=r}function ft(n,t,r){var e=(n+16)/116,u=e+t/500,i=e-r/200;return u=gt(u)*Oa,e=gt(e)*Ia,i=gt(i)*Ya,yt(vt(3.2404542*u-1.5371385*e-.4985314*i),vt(-.969266*u+1.8760108*e+.041556*i),vt(.0556434*u-.2040259*e+1.0572252*i))}function ht(n,t,r){return n>0?ot(Math.atan2(r,t)*La,Math.sqrt(t*t+r*r),n):ot(0/0,0/0,n)}function gt(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function pt(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function vt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function dt(n){return yt(n>>16,255&n>>8,255&n)}function mt(n){return dt(n)+""}function yt(n,t,r){return new xt(n,t,r)}function xt(n,t,r){this.r=n,this.g=t,this.b=r}function Mt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _t(n,t,r){var e,u,i,o=0,a=0,c=0;if(e=/([a-z]+)\((.*)\)/i.exec(n))switch(u=e[2].split(","),e[1]){case"hsl":return r(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(kt(u[0]),kt(u[1]),kt(u[2]))}return(i=$a.get(n))?t(i.r,i.g,i.b):(null==n||"#"!==n.charAt(0)||isNaN(i=parseInt(n.substring(1),16))||(4===n.length?(o=(3840&i)>>4,o=o>>4|o,a=240&i,a=a>>4|a,c=15&i,c=c<<4|c):7===n.length&&(o=(16711680&i)>>16,a=(65280&i)>>8,c=255&i)),t(o,a,c))}function bt(n,t,r){var e,u,i=Math.min(n/=255,t/=255,r/=255),o=Math.max(n,t,r),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),e=n==o?(t-r)/a+(r>t?6:0):t==o?(r-n)/a+2:(n-t)/a+4,e*=60):(e=0/0,u=c>0&&1>c?0:e),et(e,u,c)}function wt(n,t,r){n=St(n),t=St(t),r=St(r);var e=pt((.4124564*n+.3575761*t+.1804375*r)/Oa),u=pt((.2126729*n+.7151522*t+.072175*r)/Ia),i=pt((.0193339*n+.119192*t+.9503041*r)/Ya);return st(116*u-16,500*(e-u),200*(u-i))}function St(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function kt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function Et(n){return"function"==typeof n?n:function(){return n}}function At(n){return n}function Ct(n){return function(t,r,e){return 2===arguments.length&&"function"==typeof r&&(e=r,r=null),Nt(t,r,n,e)}}function Nt(n,t,r,e){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=r.call(i,c)}catch(e){return o.error.call(i,e),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Bo.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,s=null;return!Qo.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Bo.event;Bo.event=n;try{o.progress.call(i,c)}finally{Bo.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(s=n,i):s},i.response=function(n){return r=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Wo(arguments)))}}),i.send=function(r,e,u){if(2===arguments.length&&"function"==typeof e&&(u=e,e=null),c.open(r,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var l in a)c.setRequestHeader(l,a[l]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=s&&(c.responseType=s),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==e?null:e),i},i.abort=function(){return c.abort(),i},Bo.rebind(i,o,"on"),null==e?i:i.get(zt(e))}function zt(n){return 1===n.length?function(t,r){n(null==t?r:null)}:n}function Lt(){var n=Tt(),t=qt()-n;t>24?(isFinite(t)&&(clearTimeout(Wa),Wa=setTimeout(Lt,t)),Ja=0):(Ja=1,Ka(Lt))}function Tt(){var n=Date.now();for(Ga=Xa;Ga;)n>=Ga.t&&(Ga.f=Ga.c(n-Ga.t)),Ga=Ga.n;return n}function qt(){for(var n,t=Xa,r=1/0;t;)t.f?t=n?n.n=t.n:Xa=t.n:(t.t<r&&(r=t.t),t=(n=t).n);return Ba=n,r}function Rt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Dt(n,t){var r=Math.pow(10,3*ca(8-t));return{scale:t>8?function(n){return n/r}:function(n){return n*r},symbol:n}}function Pt(n){var t=n.decimal,r=n.thousands,e=n.grouping,u=n.currency,i=e?function(n){for(var t=n.length,u=[],i=0,o=e[0];t>0&&o>0;)u.push(n.substring(t-=o,t+o)),o=e[i=(i+1)%e.length];return u.reverse().join(r)}:At;return function(n){var r=nc.exec(n),e=r[1]||" ",o=r[2]||">",a=r[3]||"",c=r[4]||"",s=r[5],l=+r[6],f=r[7],h=r[8],g=r[9],p=1,v="",d="",m=!1;switch(h&&(h=+h.substring(1)),(s||"0"===e&&"="===o)&&(s=e="0",o="=",f&&(l-=Math.floor((l-1)/4))),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=tc.get(g)||Ut;var y=s&&f;return function(n){var r=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):a;if(0>p){var c=Bo.formatPrefix(n,h);n=c.scale(n),r=c.symbol+d}else n*=p;n=g(n,h);var x=n.lastIndexOf("."),M=0>x?n:n.substring(0,x),_=0>x?"":t+n.substring(x+1);!s&&f&&(M=i(M));var b=v.length+M.length+_.length+(y?0:u.length),w=l>b?new Array(b=l-b+1).join(e):"";return y&&(M=i(w+M)),u+=v,n=M+_,("<"===o?u+n+w:">"===o?w+u+n:"^"===o?w.substring(0,b>>=1)+u+n+w.substring(b):u+(y?n:w+n))+r}}}function Ut(n){return n+""}function jt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Ht(n,t,r){function e(t){var r=n(t),e=i(r,1);return e-t>t-r?r:e}function u(r){return t(r=n(new ec(r-1)),1),r}function i(n,r){return t(n=new ec(+n),r),n}function o(n,e,i){var o=u(n),a=[];if(i>1)for(;e>o;)r(o)%i||a.push(new Date(+o)),t(o,1);else for(;e>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,r){try{ec=jt;var e=new jt;return e._=n,o(e,t,r)}finally{ec=Date}}n.floor=n,n.round=e,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Ft(n);return c.floor=c,c.round=Ft(e),c.ceil=Ft(u),c.offset=Ft(i),c.range=a,n}function Ft(n){return function(t,r){try{ec=jt;var e=new jt;return e._=t,n(e,r)._}finally{ec=Date}}}function Ot(n){function t(n){function t(t){for(var r,u,i,o=[],a=-1,c=0;++a<e;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=ic[r=n.charAt(++a)])&&(r=n.charAt(++a)),(i=C[r])&&(r=i(t,null==u?"e"===r?" ":"0":u)),o.push(r),c=a+1);return o.push(n.substring(c,a)),o.join("")}var e=n.length;return t.parse=function(t){var e={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=r(e,n,t,0);if(u!=t.length)return null;"p"in e&&(e.H=e.H%12+12*e.p);var i=null!=e.Z&&ec!==jt,o=new(i?jt:ec);return"j"in e?o.setFullYear(e.y,0,e.j):"w"in e&&("W"in e||"U"in e)?(o.setFullYear(e.y,0,1),o.setFullYear(e.y,0,"W"in e?(e.w+6)%7+7*e.W-(o.getDay()+5)%7:e.w+7*e.U-(o.getDay()+6)%7)):o.setFullYear(e.y,e.m,e.d),o.setHours(e.H+Math.floor(e.Z/100),e.M+e.Z%100,e.S,e.L),i?o._:o},t.toString=function(){return n},t}function r(n,t,r,e){for(var u,i,o,a=0,c=t.length,s=r.length;c>a;){if(e>=s)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in ic?t.charAt(a++):o],!i||(e=i(n,r,e))<0)return-1}else if(u!=r.charCodeAt(e++))return-1}return e}function e(n,t,r){b.lastIndex=0;var e=b.exec(t.substring(r));return e?(n.w=w.get(e[0].toLowerCase()),r+e[0].length):-1}function u(n,t,r){M.lastIndex=0;var e=M.exec(t.substring(r));return e?(n.w=_.get(e[0].toLowerCase()),r+e[0].length):-1}function i(n,t,r){E.lastIndex=0;var e=E.exec(t.substring(r));return e?(n.m=A.get(e[0].toLowerCase()),r+e[0].length):-1}function o(n,t,r){S.lastIndex=0;var e=S.exec(t.substring(r));return e?(n.m=k.get(e[0].toLowerCase()),r+e[0].length):-1}function a(n,t,e){return r(n,C.c.toString(),t,e)}function c(n,t,e){return r(n,C.x.toString(),t,e)}function s(n,t,e){return r(n,C.X.toString(),t,e)}function l(n,t,r){var e=x.get(t.substring(r,r+=2).toLowerCase());return null==e?-1:(n.p=e,r)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function r(n){try{ec=jt;var t=new ec;return t._=n,e(t)}finally{ec=Date}}var e=t(n);return r.parse=function(n){try{ec=jt;var t=e.parse(n);return t&&t._}finally{ec=Date}},r.toString=e.toString,r},t.multi=t.utc.multi=ar;var x=Bo.map(),M=Yt(v),_=Zt(v),b=Yt(d),w=Zt(d),S=Yt(m),k=Zt(m),E=Yt(y),A=Zt(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return It(n.getDate(),t,2)},e:function(n,t){return It(n.getDate(),t,2)},H:function(n,t){return It(n.getHours(),t,2)},I:function(n,t){return It(n.getHours()%12||12,t,2)},j:function(n,t){return It(1+rc.dayOfYear(n),t,3)},L:function(n,t){return It(n.getMilliseconds(),t,3)},m:function(n,t){return It(n.getMonth()+1,t,2)},M:function(n,t){return It(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return It(n.getSeconds(),t,2)},U:function(n,t){return It(rc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return It(rc.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return It(n.getFullYear()%100,t,2)},Y:function(n,t){return It(n.getFullYear()%1e4,t,4)},Z:ir,"%":function(){return"%"}},N={a:e,A:u,b:i,B:o,c:a,d:Qt,e:Qt,H:tr,I:tr,j:nr,L:ur,m:Kt,M:rr,p:l,S:er,U:$t,w:Vt,W:Xt,x:c,X:s,y:Jt,Y:Bt,Z:Wt,"%":or};return t}function It(n,t,r){var e=0>n?"-":"",u=(e?-n:n)+"",i=u.length;return e+(r>i?new Array(r-i+1).join(t)+u:u)}function Yt(n){return new RegExp("^(?:"+n.map(Bo.requote).join("|")+")","i")}function Zt(n){for(var t=new o,r=-1,e=n.length;++r<e;)t.set(n[r].toLowerCase(),r);return t}function Vt(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+1));return e?(n.w=+e[0],r+e[0].length):-1}function $t(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r));return e?(n.U=+e[0],r+e[0].length):-1}function Xt(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r));return e?(n.W=+e[0],r+e[0].length):-1}function Bt(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+4));return e?(n.y=+e[0],r+e[0].length):-1}function Jt(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+2));return e?(n.y=Gt(+e[0]),r+e[0].length):-1}function Wt(n,t,r){return/^[+-]\d{4}$/.test(t=t.substring(r,r+5))?(n.Z=-t,r+5):-1}function Gt(n){return n+(n>68?1900:2e3)}function Kt(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+2));return e?(n.m=e[0]-1,r+e[0].length):-1}function Qt(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+2));return e?(n.d=+e[0],r+e[0].length):-1}function nr(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+3));return e?(n.j=+e[0],r+e[0].length):-1}function tr(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+2));return e?(n.H=+e[0],r+e[0].length):-1}function rr(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+2));return e?(n.M=+e[0],r+e[0].length):-1}function er(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+2));return e?(n.S=+e[0],r+e[0].length):-1}function ur(n,t,r){oc.lastIndex=0;var e=oc.exec(t.substring(r,r+3));return e?(n.L=+e[0],r+e[0].length):-1}function ir(n){var t=n.getTimezoneOffset(),r=t>0?"-":"+",e=~~(ca(t)/60),u=ca(t)%60;return r+It(e,"0",2)+It(u,"0",2)}function or(n,t,r){ac.lastIndex=0;var e=ac.exec(t.substring(r,r+1));return e?r+e[0].length:-1}function ar(n){for(var t=n.length,r=-1;++r<t;)n[r][0]=this(n[r][0]);return function(t){for(var r=0,e=n[r];!e[1](t);)e=n[++r];return e[0](t)}}function cr(){}function sr(n,t,r){var e=r.s=n+t,u=e-n,i=e-u;r.t=n-i+(t-u)}function lr(n,t){n&&fc.hasOwnProperty(n.type)&&fc[n.type](n,t)}function fr(n,t,r){var e,u=-1,i=n.length-r;for(t.lineStart();++u<i;)e=n[u],t.point(e[0],e[1],e[2]);t.lineEnd()}function hr(n,t){var r=-1,e=n.length;for(t.polygonStart();++r<e;)fr(n[r],t,1);t.polygonEnd()}function gr(){function n(n,t){n*=za,t=t*za/2+ka/4;var r=n-e,o=r>=0?1:-1,a=o*r,c=Math.cos(t),s=Math.sin(t),l=i*s,f=u*c+l*Math.cos(a),h=l*o*Math.sin(a);gc.add(Math.atan2(h,f)),e=n,u=c,i=s}var t,r,e,u,i;pc.point=function(o,a){pc.point=n,e=(t=o)*za,u=Math.cos(a=(r=a)*za/2+ka/4),i=Math.sin(a)},pc.lineEnd=function(){n(t,r)}}function pr(n){var t=n[0],r=n[1],e=Math.cos(r);return[e*Math.cos(t),e*Math.sin(t),Math.sin(r)]}function vr(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function dr(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function mr(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function yr(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function xr(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function Mr(n){return[Math.atan2(n[1],n[0]),G(n[2])]}function _r(n,t){return ca(n[0]-t[0])<Ca&&ca(n[1]-t[1])<Ca}function br(n,t){n*=za;var r=Math.cos(t*=za);wr(r*Math.cos(n),r*Math.sin(n),Math.sin(t))}function wr(n,t,r){++vc,mc+=(n-mc)/vc,yc+=(t-yc)/vc,xc+=(r-xc)/vc}function Sr(){function n(n,u){n*=za;var i=Math.cos(u*=za),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),s=Math.atan2(Math.sqrt((s=r*c-e*a)*s+(s=e*o-t*c)*s+(s=t*a-r*o)*s),t*o+r*a+e*c);dc+=s,Mc+=s*(t+(t=o)),_c+=s*(r+(r=a)),bc+=s*(e+(e=c)),wr(t,r,e)}var t,r,e;Ec.point=function(u,i){u*=za;var o=Math.cos(i*=za);t=o*Math.cos(u),r=o*Math.sin(u),e=Math.sin(i),Ec.point=n,wr(t,r,e)}}function kr(){Ec.point=br}function Er(){function n(n,t){n*=za;var r=Math.cos(t*=za),o=r*Math.cos(n),a=r*Math.sin(n),c=Math.sin(t),s=u*c-i*a,l=i*o-e*c,f=e*a-u*o,h=Math.sqrt(s*s+l*l+f*f),g=e*o+u*a+i*c,p=h&&-W(g)/h,v=Math.atan2(h,g);wc+=p*s,Sc+=p*l,kc+=p*f,dc+=v,Mc+=v*(e+(e=o)),_c+=v*(u+(u=a)),bc+=v*(i+(i=c)),wr(e,u,i)}var t,r,e,u,i;Ec.point=function(o,a){t=o,r=a,Ec.point=n,o*=za;var c=Math.cos(a*=za);e=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),wr(e,u,i)},Ec.lineEnd=function(){n(t,r),Ec.lineEnd=kr,Ec.point=br}}function Ar(){return!0}function Cr(n,t,r,e,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,r=n[0],e=n[t];if(_r(r,e)){u.lineStart();for(var a=0;t>a;++a)u.point((r=n[a])[0],r[1]);return u.lineEnd(),void 0}var c=new zr(r,n,null,!0),s=new zr(r,null,c,!1);c.o=s,i.push(c),o.push(s),c=new zr(e,n,null,!1),s=new zr(e,null,c,!0),c.o=s,i.push(c),o.push(s)}}),o.sort(t),Nr(i),Nr(o),i.length){for(var a=0,c=r,s=o.length;s>a;++a)o[a].e=c=!c;for(var l,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;l=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,s=l.length;s>a;++a)u.point((f=l[a])[0],f[1]);else e(g.x,g.n.x,1,u);g=g.n}else{if(p){l=g.p.z;for(var a=l.length-1;a>=0;--a)u.point((f=l[a])[0],f[1])}else e(g.x,g.p.x,-1,u);g=g.p}g=g.o,l=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Nr(n){if(t=n.length){for(var t,r,e=0,u=n[0];++e<t;)u.n=r=n[e],r.p=u,u=r;u.n=r=n[0],r.p=u}}function zr(n,t,r,e){this.x=n,this.z=t,this.o=r,this.e=e,this.v=!1,this.n=this.p=null}function Lr(n,t,r,e){return function(u,i){function o(t,r){var e=u(t,r);n(t=e[0],r=e[1])&&i.point(t,r)}function a(n,t){var r=u(n,t);d.point(r[0],r[1])}function c(){y.point=a,d.lineStart()}function s(){y.point=o,d.lineEnd()}function l(n,t){v.push([n,t]);var r=u(n,t);M.point(r[0],r[1])}function f(){M.lineStart(),v=[]}function h(){l(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),r=x.buffer(),e=r.length;if(v.pop(),p.push(v),v=null,e)if(1&t){n=r[0];var u,e=n.length-1,o=-1;if(e>0){for(_||(i.polygonStart(),_=!0),i.lineStart();++o<e;)i.point((u=n[o])[0],u[1]);i.lineEnd()}}else e>1&&2&t&&r.push(r.pop().concat(r.shift())),g.push(r.filter(Tr))}var g,p,v,d=t(i),m=u.invert(e[0],e[1]),y={point:o,lineStart:c,lineEnd:s,polygonStart:function(){y.point=l,y.lineStart=f,y.lineEnd=h,g=[],p=[]},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=s,g=Bo.merge(g);var n=Dr(m,p);g.length?(_||(i.polygonStart(),_=!0),Cr(g,Rr,n,r,i)):n&&(_||(i.polygonStart(),_=!0),i.lineStart(),r(null,null,1,i),i.lineEnd()),_&&(i.polygonEnd(),_=!1),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),r(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=qr(),M=t(x),_=!1;return y}}function Tr(n){return n.length>1}function qr(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,r){n.push([t,r])},lineEnd:v,buffer:function(){var r=t;return t=[],n=null,r},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Rr(n,t){return((n=n.x)[0]<0?n[1]-Aa-Ca:Aa-n[1])-((t=t.x)[0]<0?t[1]-Aa-Ca:Aa-t[1])}function Dr(n,t){var r=n[0],e=n[1],u=[Math.sin(r),-Math.cos(r),0],i=0,o=0;gc.reset();for(var a=0,c=t.length;c>a;++a){var s=t[a],l=s.length;if(l)for(var f=s[0],h=f[0],g=f[1]/2+ka/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===l&&(d=0),n=s[d];var m=n[0],y=n[1]/2+ka/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=_>=0?1:-1,w=b*_,S=w>ka,k=p*x;if(gc.add(Math.atan2(k*b*Math.sin(w),v*M+k*Math.cos(w))),i+=S?_+b*Ea:_,S^h>=r^m>=r){var E=dr(pr(f),pr(n));xr(E);var A=dr(u,E);xr(A);var C=(S^_>=0?-1:1)*G(A[2]);(e>C||e===C&&(E[0]||E[1]))&&(o+=S^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Ca>i||Ca>i&&0>gc)^1&o}function Pr(n){var t,r=0/0,e=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?ka:-ka,c=ca(i-r);ca(c-ka)<Ca?(n.point(r,e=(e+o)/2>0?Aa:-Aa),n.point(u,e),n.lineEnd(),n.lineStart(),n.point(a,e),n.point(i,e),t=0):u!==a&&c>=ka&&(ca(r-u)<Ca&&(r-=u*Ca),ca(i-a)<Ca&&(i-=a*Ca),e=Ur(r,e,i,o),n.point(u,e),n.lineEnd(),n.lineStart(),n.point(a,e),t=0),n.point(r=i,e=o),u=a},lineEnd:function(){n.lineEnd(),r=e=0/0},clean:function(){return 2-t}}}function Ur(n,t,r,e){var u,i,o=Math.sin(n-r);return ca(o)>Ca?Math.atan((Math.sin(t)*(i=Math.cos(e))*Math.sin(r)-Math.sin(e)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+e)/2}function jr(n,t,r,e){var u;if(null==n)u=r*Aa,e.point(-ka,u),e.point(0,u),e.point(ka,u),e.point(ka,0),e.point(ka,-u),e.point(0,-u),e.point(-ka,-u),e.point(-ka,0),e.point(-ka,u);else if(ca(n[0]-t[0])>Ca){var i=n[0]<t[0]?ka:-ka;u=r*i/2,e.point(-i,u),e.point(0,u),e.point(i,u)}else e.point(t[0],t[1])}function Hr(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function r(n){var r,i,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?ka:-ka),h):0;if(!r&&(s=c=v)&&n.lineStart(),v!==c&&(g=e(r,p),(_r(r,g)||_r(p,g))&&(p[0]+=Ca,p[1]+=Ca,v=t(p[0],p[1]))),v!==c)l=0,v?(n.lineStart(),g=e(p,r),n.point(g[0],g[1])):(g=e(r,p),n.point(g[0],g[1]),n.lineEnd()),r=g;else if(a&&r&&o^v){var m;d&i||!(m=e(p,r,!0))||(l=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||r&&_r(r,p)||n.point(p[0],p[1]),r=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),r=null},clean:function(){return l|(s&&c)<<1}}}function e(n,t,r){var e=pr(n),u=pr(t),o=[1,0,0],a=dr(e,u),c=vr(a,a),s=a[0],l=c-s*s;if(!l)return!r&&n;var f=i*c/l,h=-i*s/l,g=dr(o,a),p=yr(o,f),v=yr(a,h);mr(p,v);var d=g,m=vr(p,d),y=vr(d,d),x=m*m-y*(vr(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=yr(d,(-m-M)/y);if(mr(_,p),_=Mr(_),!r)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=ca(A-ka)<Ca,N=C||Ca>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(ca(_[0]-w)<Ca?k:E):k<=_[1]&&_[1]<=E:A>ka^(w<=_[0]&&_[0]<=S)){var z=yr(d,(-m+M)/y);return mr(z,p),[_,Mr(z)]}}}function u(t,r){var e=o?n:ka-n,u=0;return-e>t?u|=1:t>e&&(u|=2),-e>r?u|=4:r>e&&(u|=8),u}var i=Math.cos(n),o=i>0,a=ca(i)>Ca,c=ge(n,6*za);return Lr(t,r,c,o?[0,-n]:[-ka,n-ka])}function Fr(n,t,r,e){return function(u){var i,o=u.a,a=u.b,c=o.x,s=o.y,l=a.x,f=a.y,h=0,g=1,p=l-c,v=f-s;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=r-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-s,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=e-s,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:s+h*v}),1>g&&(u.b={x:c+g*p,y:s+g*v}),u}}}}}}function Or(n,t,r,e){function u(e,u){return ca(e[0]-n)<Ca?u>0?0:3:ca(e[0]-r)<Ca?u>0?2:1:ca(e[1]-t)<Ca?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var r=u(n,1),e=u(t,1);return r!==e?r-e:0===r?t[1]-n[1]:1===r?n[0]-t[0]:2===r?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,r=d.length,e=n[1],u=0;r>u;++u)for(var i,o=1,a=d[u],c=a.length,s=a[0];c>o;++o)i=a[o],s[1]<=e?i[1]>e&&J(s,i,n)>0&&++t:i[1]<=e&&J(s,i,n)<0&&--t,s=i;return 0!==t}function s(i,a,c,s){var l=0,f=0;if(null==i||(l=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do s.point(0===l||3===l?n:r,l>1?e:t);while((l=(l+c+4)%4)!==f)}else s.point(a[0],a[1])}function l(u,i){return u>=n&&r>=u&&i>=t&&e>=i}function f(n,t){l(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Cc,Math.min(Cc,n)),t=Math.max(-Cc,Math.min(Cc,t));var r=l(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=r,S=!1,r&&(a.lineStart(),a.point(n,t));else if(r&&w)a.point(n,t);else{var e={a:{x:_,y:b},b:{x:n,y:t}};C(e)?(w||(a.lineStart(),a.point(e.a.x,e.a.y)),a.point(e.b.x,e.b.y),r||a.lineEnd(),k=!1):r&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=r}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=qr(),C=Fr(n,t,r,e),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Bo.merge(v);var t=c([n,e]),r=k&&t,u=v.length;(r||u)&&(a.polygonStart(),r&&(a.lineStart(),s(null,null,1,a),a.lineEnd()),u&&Cr(v,i,t,s,a),a.polygonEnd()),v=d=m=null}};return N}}function Ir(n,t){function r(r,e){return r=n(r,e),t(r[0],r[1])}return n.invert&&t.invert&&(r.invert=function(r,e){return r=t.invert(r,e),r&&n.invert(r[0],r[1])}),r}function Yr(n){var t=0,r=ka/3,e=ie(n),u=e(t,r);return u.parallels=function(n){return arguments.length?e(t=n[0]*ka/180,r=n[1]*ka/180):[180*(t/ka),180*(r/ka)]},u}function Zr(n,t){function r(n,t){var r=Math.sqrt(i-2*u*Math.sin(t))/u;return[r*Math.sin(n*=u),o-r*Math.cos(n)]}var e=Math.sin(n),u=(e+Math.sin(t))/2,i=1+e*(2*u-e),o=Math.sqrt(i)/u;return r.invert=function(n,t){var r=o-t;return[Math.atan2(n,r)/u,G((i-(n*n+r*r)*u*u)/(2*u))]},r}function Vr(){function n(n,t){zc+=u*n-e*t,e=n,u=t}var t,r,e,u;Dc.point=function(i,o){Dc.point=n,t=e=i,r=u=o},Dc.lineEnd=function(){n(t,r)}}function $r(n,t){Lc>n&&(Lc=n),n>qc&&(qc=n),Tc>t&&(Tc=t),t>Rc&&(Rc=t)}function Xr(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=r}function r(n,t){o.push("L",n,",",t)}function e(){a.point=n}function u(){o.push("Z")}var i=Br(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:e,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=e,a.point=n},pointRadius:function(n){return i=Br(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Br(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Jr(n,t){mc+=n,yc+=t,++xc}function Wr(){function n(n,e){var u=n-t,i=e-r,o=Math.sqrt(u*u+i*i);Mc+=o*(t+n)/2,_c+=o*(r+e)/2,bc+=o,Jr(t=n,r=e)}var t,r;Uc.point=function(e,u){Uc.point=n,Jr(t=e,r=u)}}function Gr(){Uc.point=Jr}function Kr(){function n(n,t){var r=n-e,i=t-u,o=Math.sqrt(r*r+i*i);Mc+=o*(e+n)/2,_c+=o*(u+t)/2,bc+=o,o=u*n-e*t,wc+=o*(e+n),Sc+=o*(u+t),kc+=3*o,Jr(e=n,u=t)}var t,r,e,u;Uc.point=function(i,o){Uc.point=n,Jr(t=e=i,r=u=o)},Uc.lineEnd=function(){n(t,r)}}function Qr(n){function t(t,r){n.moveTo(t,r),n.arc(t,r,o,0,Ea)}function r(t,r){n.moveTo(t,r),a.point=e}function e(t,r){n.lineTo(t,r)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=r},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:v};return a}function ne(n){function t(n){return(a?e:r)(n)}function r(t){return ee(t,function(r,e){r=n(r,e),t.point(r[0],r[1])})}function e(t){function r(r,e){r=n(r,e),t.point(r[0],r[1])}function e(){x=0/0,S.point=i,t.lineStart()}function i(r,e){var i=pr([r,e]),o=n(r,e);u(x,M,y,_,b,w,x=o[0],M=o[1],y=r,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=r,t.lineEnd()}function c(){e(),S.point=s,S.lineEnd=l}function s(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function l(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:r,lineStart:e,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=e}};return S}function u(t,r,e,a,c,s,l,f,h,g,p,v,d,m){var y=l-t,x=f-r,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=s+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=ca(ca(w)-1)<Ca||ca(e-h)<Ca?(e+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],z=C-t,L=N-r,T=x*z-y*L;(T*T/M>i||ca((y*z+x*L)/M-.5)>.3||o>a*g+c*p+s*v)&&(u(t,r,e,a,c,s,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,l,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*za),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function te(n){var t=ne(function(t,r){return n([t*La,r*La])});return function(n){return oe(t(n))}}function re(n){this.stream=n}function ee(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function ue(n){return ie(function(){return n})()}function ie(n){function t(n){return n=a(n[0]*za,n[1]*za),[n[0]*h+c,s-n[1]*h]}function r(n){return n=a.invert((n[0]-c)/h,(s-n[1])/h),n&&[n[0]*La,n[1]*La]}function e(){a=Ir(o=se(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,s=p+n[1]*h,u()
}function u(){return l&&(l.valid=!1,l=null),t}var i,o,a,c,s,l,f=ne(function(n,t){return n=i(n,t),[n[0]*h+c,s-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Ac,_=At,b=null,w=null;return t.stream=function(n){return l&&(l.valid=!1),l=oe(M(o,f(_(n)))),l.valid=!0,l},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Ac):Hr((b=+n)*za),u()):b},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Or(n[0][0],n[0][1],n[1][0],n[1][1]):At,u()):w},t.scale=function(n){return arguments.length?(h=+n,e()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],e()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*za,d=n[1]%360*za,e()):[v*La,d*La]},t.rotate=function(n){return arguments.length?(m=n[0]%360*za,y=n[1]%360*za,x=n.length>2?n[2]%360*za:0,e()):[m*La,y*La,x*La]},Bo.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&r,e()}}function oe(n){return ee(n,function(t,r){n.point(t*za,r*za)})}function ae(n,t){return[n,t]}function ce(n,t){return[n>ka?n-Ea:-ka>n?n+Ea:n,t]}function se(n,t,r){return n?t||r?Ir(fe(n),he(t,r)):fe(n):t||r?he(t,r):ce}function le(n){return function(t,r){return t+=n,[t>ka?t-Ea:-ka>t?t+Ea:t,r]}}function fe(n){var t=le(n);return t.invert=le(-n),t}function he(n,t){function r(n,t){var r=Math.cos(t),a=Math.cos(n)*r,c=Math.sin(n)*r,s=Math.sin(t),l=s*e+a*u;return[Math.atan2(c*i-l*o,a*e-s*u),G(l*i+c*o)]}var e=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return r.invert=function(n,t){var r=Math.cos(t),a=Math.cos(n)*r,c=Math.sin(n)*r,s=Math.sin(t),l=s*i-c*o;return[Math.atan2(c*i+s*o,a*e+l*u),G(l*e-a*u)]},r}function ge(n,t){var r=Math.cos(n),e=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=pe(r,u),i=pe(r,i),(o>0?i>u:u>i)&&(u+=o*Ea)):(u=n+o*Ea,i=n-.5*c);for(var s,l=u;o>0?l>i:i>l;l-=c)a.point((s=Mr([r,-e*Math.cos(l),-e*Math.sin(l)]))[0],s[1])}}function pe(n,t){var r=pr(t);r[0]-=n,xr(r);var e=W(-r[1]);return((-r[2]<0?-e:e)+2*Math.PI-Ca)%(2*Math.PI)}function ve(n,t,r){var e=Bo.range(n,t-Ca,r).concat(t);return function(n){return e.map(function(t){return[n,t]})}}function de(n,t,r){var e=Bo.range(n,t-Ca,r).concat(t);return function(n){return e.map(function(t){return[t,n]})}}function me(n){return n.source}function ye(n){return n.target}function xe(n,t,r,e){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(e),a=Math.sin(e),c=u*Math.cos(n),s=u*Math.sin(n),l=o*Math.cos(r),f=o*Math.sin(r),h=2*Math.asin(Math.sqrt(tt(e-t)+u*o*tt(r-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,r=Math.sin(h-n)*g,e=r*c+t*l,u=r*s+t*f,o=r*i+t*a;return[Math.atan2(u,e)*La,Math.atan2(o,Math.sqrt(e*e+u*u))*La]}:function(){return[n*La,t*La]};return p.distance=h,p}function Me(){function n(n,u){var i=Math.sin(u*=za),o=Math.cos(u),a=ca((n*=za)-t),c=Math.cos(a);jc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=e*i-r*o*c)*a),r*i+e*o*c),t=n,r=i,e=o}var t,r,e;Hc.point=function(u,i){t=u*za,r=Math.sin(i*=za),e=Math.cos(i),Hc.point=n},Hc.lineEnd=function(){Hc.point=Hc.lineEnd=v}}function _e(n,t){function r(t,r){var e=Math.cos(t),u=Math.cos(r),i=n(e*u);return[i*u*Math.sin(t),i*Math.sin(r)]}return r.invert=function(n,r){var e=Math.sqrt(n*n+r*r),u=t(e),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,e*o),Math.asin(e&&r*i/e)]},r}function be(n,t){function r(n,t){o>0?-Aa+Ca>t&&(t=-Aa+Ca):t>Aa-Ca&&(t=Aa-Ca);var r=o/Math.pow(u(t),i);return[r*Math.sin(i*n),o-r*Math.cos(i*n)]}var e=Math.cos(n),u=function(n){return Math.tan(ka/4+n/2)},i=n===t?Math.sin(n):Math.log(e/Math.cos(t))/Math.log(u(t)/u(n)),o=e*Math.pow(u(n),i)/i;return i?(r.invert=function(n,t){var r=o-t,e=B(i)*Math.sqrt(n*n+r*r);return[Math.atan2(n,r)/i,2*Math.atan(Math.pow(o/e,1/i))-Aa]},r):Se}function we(n,t){function r(n,t){var r=i-t;return[r*Math.sin(u*n),i-r*Math.cos(u*n)]}var e=Math.cos(n),u=n===t?Math.sin(n):(e-Math.cos(t))/(t-n),i=e/u+n;return ca(u)<Ca?ae:(r.invert=function(n,t){var r=i-t;return[Math.atan2(n,r)/u,i-B(u)*Math.sqrt(n*n+r*r)]},r)}function Se(n,t){return[n,Math.log(Math.tan(ka/4+t/2))]}function ke(n){var t,r=ue(n),e=r.scale,u=r.translate,i=r.clipExtent;return r.scale=function(){var n=e.apply(r,arguments);return n===r?t?r.clipExtent(null):r:n},r.translate=function(){var n=u.apply(r,arguments);return n===r?t?r.clipExtent(null):r:n},r.clipExtent=function(n){var o=i.apply(r,arguments);if(o===r){if(t=null==n){var a=ka*e(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},r.clipExtent(null)}function Ee(n,t){return[Math.log(Math.tan(ka/4+t/2)),-n]}function Ae(n){return n[0]}function Ce(n){return n[1]}function Ne(n){for(var t=n.length,r=[0,1],e=2,u=2;t>u;u++){for(;e>1&&J(n[r[e-2]],n[r[e-1]],n[u])<=0;)--e;r[e++]=u}return r.slice(0,e)}function ze(n,t){return n[0]-t[0]||n[1]-t[1]}function Le(n,t,r){return(r[0]-t[0])*(n[1]-t[1])<(r[1]-t[1])*(n[0]-t[0])}function Te(n,t,r,e){var u=n[0],i=r[0],o=t[0]-u,a=e[0]-i,c=n[1],s=r[1],l=t[1]-c,f=e[1]-s,h=(a*(c-s)-f*(u-i))/(f*o-a*l);return[u+h*o,c+h*l]}function qe(n){var t=n[0],r=n[n.length-1];return!(t[0]-r[0]||t[1]-r[1])}function Re(){tu(this),this.edge=this.site=this.circle=null}function De(n){var t=Gc.pop()||new Re;return t.site=n,t}function Pe(n){$e(n),Bc.remove(n),Gc.push(n),tu(n)}function Ue(n){var t=n.circle,r=t.x,e=t.cy,u={x:r,y:e},i=n.P,o=n.N,a=[n];Pe(n);for(var c=i;c.circle&&ca(r-c.circle.x)<Ca&&ca(e-c.circle.cy)<Ca;)i=c.P,a.unshift(c),Pe(c),c=i;a.unshift(c),$e(c);for(var s=o;s.circle&&ca(r-s.circle.x)<Ca&&ca(e-s.circle.cy)<Ca;)o=s.N,a.push(s),Pe(s),s=o;a.push(s),$e(s);var l,f=a.length;for(l=1;f>l;++l)s=a[l],c=a[l-1],Ke(s.edge,c.site,s.site,u);c=a[0],s=a[f-1],s.edge=We(c.site,s.site,null,u),Ve(c),Ve(s)}function je(n){for(var t,r,e,u,i=n.x,o=n.y,a=Bc._;a;)if(e=He(a,o)-i,e>Ca)a=a.L;else{if(u=i-Fe(a,o),!(u>Ca)){e>-Ca?(t=a.P,r=a):u>-Ca?(t=a,r=a.N):t=r=a;break}if(!a.R){t=a;break}a=a.R}var c=De(n);if(Bc.insert(t,c),t||r){if(t===r)return $e(t),r=De(t.site),Bc.insert(c,r),c.edge=r.edge=We(t.site,c.site),Ve(t),Ve(r),void 0;if(!r)return c.edge=We(t.site,c.site),void 0;$e(t),$e(r);var s=t.site,l=s.x,f=s.y,h=n.x-l,g=n.y-f,p=r.site,v=p.x-l,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+l,y:(h*x-v*y)/m+f};Ke(r.edge,s,p,M),c.edge=We(s,n,null,M),r.edge=We(n,p,null,M),Ve(t),Ve(r)}}function He(n,t){var r=n.site,e=r.x,u=r.y,i=u-t;if(!i)return e;var o=n.P;if(!o)return-1/0;r=o.site;var a=r.x,c=r.y,s=c-t;if(!s)return a;var l=a-e,f=1/i-1/s,h=l/s;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*s)-c+s/2+u-i/2)))/f+e:(e+a)/2}function Fe(n,t){var r=n.N;if(r)return He(r,t);var e=n.site;return e.y===t?e.x:1/0}function Oe(n){this.site=n,this.edges=[]}function Ie(n){for(var t,r,e,u,i,o,a,c,s,l,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Xc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)l=a[o].end(),e=l.x,u=l.y,s=a[++o%c].start(),t=s.x,r=s.y,(ca(e-t)>Ca||ca(u-r)>Ca)&&(a.splice(o,0,new Qe(Ge(i.site,l,ca(e-f)<Ca&&p-u>Ca?{x:f,y:ca(t-f)<Ca?r:p}:ca(u-p)<Ca&&h-e>Ca?{x:ca(r-p)<Ca?t:h,y:p}:ca(e-h)<Ca&&u-g>Ca?{x:h,y:ca(t-h)<Ca?r:g}:ca(u-g)<Ca&&e-f>Ca?{x:ca(r-g)<Ca?t:f,y:g}:null),i.site,null)),++c)}function Ye(n,t){return t.angle-n.angle}function Ze(){tu(this),this.x=this.y=this.arc=this.site=this.cy=null}function Ve(n){var t=n.P,r=n.N;if(t&&r){var e=t.site,u=n.site,i=r.site;if(e!==i){var o=u.x,a=u.y,c=e.x-o,s=e.y-a,l=i.x-o,f=i.y-a,h=2*(c*f-s*l);if(!(h>=-Na)){var g=c*c+s*s,p=l*l+f*f,v=(f*g-s*p)/h,d=(c*p-l*g)/h,f=d+a,m=Kc.pop()||new Ze;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Wc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Wc.insert(y,m),y||(Jc=m)}}}}function $e(n){var t=n.circle;t&&(t.P||(Jc=t.N),Wc.remove(t),Kc.push(t),tu(t),n.circle=null)}function Xe(n){for(var t,r=$c,e=Fr(n[0][0],n[0][1],n[1][0],n[1][1]),u=r.length;u--;)t=r[u],(!Be(t,n)||!e(t)||ca(t.a.x-t.b.x)<Ca&&ca(t.a.y-t.b.y)<Ca)&&(t.a=t.b=null,r.splice(u,1))}function Be(n,t){var r=n.b;if(r)return!0;var e,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],s=t[1][1],l=n.l,f=n.r,h=l.x,g=l.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=s)return}else i={x:d,y:c};r={x:d,y:s}}else{if(i){if(i.y<c)return}else i={x:d,y:s};r={x:d,y:c}}}else if(e=(h-p)/(v-g),u=m-e*d,-1>e||e>1)if(h>p){if(i){if(i.y>=s)return}else i={x:(c-u)/e,y:c};r={x:(s-u)/e,y:s}}else{if(i){if(i.y<c)return}else i={x:(s-u)/e,y:s};r={x:(c-u)/e,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:e*o+u};r={x:a,y:e*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:e*a+u};r={x:o,y:e*o+u}}return n.a=i,n.b=r,!0}function Je(n,t){this.l=n,this.r=t,this.a=this.b=null}function We(n,t,r,e){var u=new Je(n,t);return $c.push(u),r&&Ke(u,n,t,r),e&&Ke(u,t,n,e),Xc[n.i].edges.push(new Qe(u,n,t)),Xc[t.i].edges.push(new Qe(u,t,n)),u}function Ge(n,t,r){var e=new Je(n,null);return e.a=t,e.b=r,$c.push(e),e}function Ke(n,t,r,e){n.a||n.b?n.l===r?n.b=e:n.a=e:(n.a=e,n.l=t,n.r=r)}function Qe(n,t,r){var e=n.a,u=n.b;this.edge=n,this.site=t,this.angle=r?Math.atan2(r.y-t.y,r.x-t.x):n.l===t?Math.atan2(u.x-e.x,e.y-u.y):Math.atan2(e.x-u.x,u.y-e.y)}function nu(){this._=null}function tu(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ru(n,t){var r=t,e=t.R,u=r.U;u?u.L===r?u.L=e:u.R=e:n._=e,e.U=u,r.U=e,r.R=e.L,r.R&&(r.R.U=r),e.L=r}function eu(n,t){var r=t,e=t.L,u=r.U;u?u.L===r?u.L=e:u.R=e:n._=e,e.U=u,r.U=e,r.L=e.R,r.L&&(r.L.U=r),e.R=r}function uu(n){for(;n.L;)n=n.L;return n}function iu(n,t){var r,e,u,i=n.sort(ou).pop();for($c=[],Xc=new Array(n.length),Bc=new nu,Wc=new nu;;)if(u=Jc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==r||i.y!==e)&&(Xc[i.i]=new Oe(i),je(i),r=i.x,e=i.y),i=n.pop();else{if(!u)break;Ue(u.arc)}t&&(Xe(t),Ie(t));var o={cells:Xc,edges:$c};return Bc=Wc=$c=Xc=null,o}function ou(n,t){return t.y-n.y||t.x-n.x}function au(n,t,r){return(n.x-r.x)*(t.y-n.y)-(n.x-t.x)*(r.y-n.y)}function cu(n){return n.x}function su(n){return n.y}function lu(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function fu(n,t,r,e,u,i){if(!n(t,r,e,u,i)){var o=.5*(r+u),a=.5*(e+i),c=t.nodes;c[0]&&fu(n,c[0],r,e,o,a),c[1]&&fu(n,c[1],o,e,u,a),c[2]&&fu(n,c[2],r,a,o,i),c[3]&&fu(n,c[3],o,a,u,i)}}function hu(n,t){n=Bo.rgb(n),t=Bo.rgb(t);var r=n.r,e=n.g,u=n.b,i=t.r-r,o=t.g-e,a=t.b-u;return function(n){return"#"+Mt(Math.round(r+i*n))+Mt(Math.round(e+o*n))+Mt(Math.round(u+a*n))}}function gu(n,t){var r,e={},u={};for(r in n)r in t?e[r]=du(n[r],t[r]):u[r]=n[r];for(r in t)r in n||(u[r]=t[r]);return function(n){for(r in e)u[r]=e[r](n);return u}}function pu(n,t){return t-=n=+n,function(r){return n+t*r}}function vu(n,t){var r,e,u,i=ns.lastIndex=ts.lastIndex=0,o=-1,a=[],c=[];for(n+="",t+="";(r=ns.exec(n))&&(e=ts.exec(t));)(u=e.index)>i&&(u=t.substring(i,u),a[o]?a[o]+=u:a[++o]=u),(r=r[0])===(e=e[0])?a[o]?a[o]+=e:a[++o]=e:(a[++o]=null,c.push({i:o,x:pu(r,e)})),i=ts.lastIndex;return i<t.length&&(u=t.substring(i),a[o]?a[o]+=u:a[++o]=u),a.length<2?c[0]?(t=c[0].x,function(n){return t(n)+""}):function(){return t}:(t=c.length,function(n){for(var r,e=0;t>e;++e)a[(r=c[e]).i]=r.x(n);return a.join("")})}function du(n,t){for(var r,e=Bo.interpolators.length;--e>=0&&!(r=Bo.interpolators[e](n,t)););return r}function mu(n,t){var r,e=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(r=0;a>r;++r)e.push(du(n[r],t[r]));for(;i>r;++r)u[r]=n[r];for(;o>r;++r)u[r]=t[r];return function(n){for(r=0;a>r;++r)u[r]=e[r](n);return u}}function yu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function xu(n){return function(t){return 1-n(1-t)}}function Mu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function _u(n){return n*n}function bu(n){return n*n*n}function wu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,r=t*n;return 4*(.5>n?r:3*(n-t)+r-.75)}function Su(n){return function(t){return Math.pow(t,n)}}function ku(n){return 1-Math.cos(n*Aa)}function Eu(n){return Math.pow(2,10*(n-1))}function Au(n){return 1-Math.sqrt(1-n*n)}function Cu(n,t){var r;return arguments.length<2&&(t=.45),arguments.length?r=t/Ea*Math.asin(1/n):(n=1,r=t/4),function(e){return 1+n*Math.pow(2,-10*e)*Math.sin((e-r)*Ea/t)}}function Nu(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function zu(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Lu(n,t){n=Bo.hcl(n),t=Bo.hcl(t);var r=n.h,e=n.c,u=n.l,i=t.h-r,o=t.c-e,a=t.l-u;return isNaN(o)&&(o=0,e=isNaN(e)?t.c:e),isNaN(i)?(i=0,r=isNaN(r)?t.h:r):i>180?i-=360:-180>i&&(i+=360),function(n){return ct(r+i*n,e+o*n,u+a*n)+""}}function Tu(n,t){n=Bo.hsl(n),t=Bo.hsl(t);var r=n.h,e=n.s,u=n.l,i=t.h-r,o=t.s-e,a=t.l-u;return isNaN(o)&&(o=0,e=isNaN(e)?t.s:e),isNaN(i)?(i=0,r=isNaN(r)?t.h:r):i>180?i-=360:-180>i&&(i+=360),function(n){return it(r+i*n,e+o*n,u+a*n)+""}}function qu(n,t){n=Bo.lab(n),t=Bo.lab(t);var r=n.l,e=n.a,u=n.b,i=t.l-r,o=t.a-e,a=t.b-u;return function(n){return ft(r+i*n,e+o*n,u+a*n)+""}}function Ru(n,t){return t-=n,function(r){return Math.round(n+t*r)}}function Du(n){var t=[n.a,n.b],r=[n.c,n.d],e=Uu(t),u=Pu(t,r),i=Uu(ju(r,t,-u))||0;t[0]*r[1]<r[0]*t[1]&&(t[0]*=-1,t[1]*=-1,e*=-1,u*=-1),this.rotate=(e?Math.atan2(t[1],t[0]):Math.atan2(-r[0],r[1]))*La,this.translate=[n.e,n.f],this.scale=[e,i],this.skew=i?Math.atan2(u,i)*La:0}function Pu(n,t){return n[0]*t[0]+n[1]*t[1]}function Uu(n){var t=Math.sqrt(Pu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function ju(n,t,r){return n[0]+=r*t[0],n[1]+=r*t[1],n}function Hu(n,t){var r,e=[],u=[],i=Bo.transform(n),o=Bo.transform(t),a=i.translate,c=o.translate,s=i.rotate,l=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(e.push("translate(",null,",",null,")"),u.push({i:1,x:pu(a[0],c[0])},{i:3,x:pu(a[1],c[1])})):c[0]||c[1]?e.push("translate("+c+")"):e.push(""),s!=l?(s-l>180?l+=360:l-s>180&&(s+=360),u.push({i:e.push(e.pop()+"rotate(",null,")")-2,x:pu(s,l)})):l&&e.push(e.pop()+"rotate("+l+")"),f!=h?u.push({i:e.push(e.pop()+"skewX(",null,")")-2,x:pu(f,h)}):h&&e.push(e.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(r=e.push(e.pop()+"scale(",null,",",null,")"),u.push({i:r-4,x:pu(g[0],p[0])},{i:r-2,x:pu(g[1],p[1])})):(1!=p[0]||1!=p[1])&&e.push(e.pop()+"scale("+p+")"),r=u.length,function(n){for(var t,i=-1;++i<r;)e[(t=u[i]).i]=t.x(n);return e.join("")}}function Fu(n,t){return t=t-(n=+n)?1/(t-n):0,function(r){return(r-n)*t}}function Ou(n,t){return t=t-(n=+n)?1/(t-n):0,function(r){return Math.max(0,Math.min(1,(r-n)*t))}}function Iu(n){for(var t=n.source,r=n.target,e=Zu(t,r),u=[t];t!==e;)t=t.parent,u.push(t);for(var i=u.length;r!==e;)u.splice(i,0,r),r=r.parent;return u}function Yu(n){for(var t=[],r=n.parent;null!=r;)t.push(n),n=r,r=r.parent;return t.push(n),t}function Zu(n,t){if(n===t)return n;for(var r=Yu(n),e=Yu(t),u=r.pop(),i=e.pop(),o=null;u===i;)o=u,u=r.pop(),i=e.pop();return o}function Vu(n){n.fixed|=2}function $u(n){n.fixed&=-7}function Xu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Bu(n){n.fixed&=-5}function Ju(n,t,r){var e=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Ju(i,t,r),n.charge+=i.charge,e+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var s=t*r[n.point.index];n.charge+=n.pointCharge=s,e+=s*n.point.x,u+=s*n.point.y}n.cx=e/n.charge,n.cy=u/n.charge}function Wu(n,t){return Bo.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=ri,n}function Gu(n,t){for(var r=[n];null!=(n=r.pop());)if(t(n),(u=n.children)&&(e=u.length))for(var e,u;--e>=0;)r.push(u[e])}function Ku(n,t){for(var r=[n],e=[];null!=(n=r.pop());)if(e.push(n),(i=n.children)&&(u=i.length))for(var u,i,o=-1;++o<u;)r.push(i[o]);for(;null!=(n=e.pop());)t(n)}function Qu(n){return n.children}function ni(n){return n.value}function ti(n,t){return t.value-n.value}function ri(n){return Bo.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function ei(n){return n.x}function ui(n){return n.y}function ii(n,t,r){n.y0=t,n.y=r}function oi(n){return Bo.range(n.length)}function ai(n){for(var t=-1,r=n[0].length,e=[];++t<r;)e[t]=0;return e}function ci(n){for(var t,r=1,e=0,u=n[0][1],i=n.length;i>r;++r)(t=n[r][1])>u&&(e=r,u=t);return e}function si(n){return n.reduce(li,0)}function li(n,t){return n+t[1]}function fi(n,t){return hi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function hi(n,t){for(var r=-1,e=+n[0],u=(n[1]-e)/t,i=[];++r<=t;)i[r]=u*r+e;return i}function gi(n){return[Bo.min(n),Bo.max(n)]}function pi(n,t){return n.value-t.value}function vi(n,t){var r=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=r,r._pack_prev=t}function di(n,t){n._pack_next=t,t._pack_prev=n}function mi(n,t){var r=t.x-n.x,e=t.y-n.y,u=n.r+t.r;return.999*u*u>r*r+e*e}function yi(n){function t(n){l=Math.min(n.x-n.r,l),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((r=n.children)&&(s=r.length)){var r,e,u,i,o,a,c,s,l=1/0,f=-1/0,h=1/0,g=-1/0;if(r.forEach(xi),e=r[0],e.x=-e.r,e.y=0,t(e),s>1&&(u=r[1],u.x=u.r,u.y=0,t(u),s>2))for(i=r[2],bi(e,u,i),t(i),vi(e,i),e._pack_prev=i,vi(i,u),u=e._pack_next,o=3;s>o;o++){bi(e,u,i=r[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(mi(a,i)){p=1;break}if(1==p)for(c=e._pack_prev;c!==a._pack_prev&&!mi(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<e.r?di(e,u=a):di(e=c,u),o--):(vi(e,i),u=i,t(i))}var m=(l+f)/2,y=(h+g)/2,x=0;for(o=0;s>o;o++)i=r[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,r.forEach(Mi)}}function xi(n){n._pack_next=n._pack_prev=n}function Mi(n){delete n._pack_next,delete n._pack_prev}function _i(n,t,r,e){var u=n.children;if(n.x=t+=e*n.x,n.y=r+=e*n.y,n.r*=e,u)for(var i=-1,o=u.length;++i<o;)_i(u[i],t,r,e)}function bi(n,t,r){var e=n.r+r.r,u=t.x-n.x,i=t.y-n.y;if(e&&(u||i)){var o=t.r+r.r,a=u*u+i*i;o*=o,e*=e;var c=.5+(e-o)/(2*a),s=Math.sqrt(Math.max(0,2*o*(e+a)-(e-=a)*e-o*o))/(2*a);r.x=n.x+c*u+s*i,r.y=n.y+c*i-s*u}else r.x=n.x+e,r.y=n.y}function wi(n,t){return n.parent==t.parent?1:2}function Si(n){var t=n.children;return t.length?t[0]:n.t}function ki(n){var t,r=n.children;return(t=r.length)?r[t-1]:n.t}function Ei(n,t,r){var e=r/(t.i-n.i);t.c-=e,t.s+=r,n.c+=e,t.z+=r,t.m+=r}function Ai(n){for(var t,r=0,e=0,u=n.children,i=u.length;--i>=0;)t=u[i],t.z+=r,t.m+=r,r+=t.s+(e+=t.c)}function Ci(n,t,r){return n.a.parent===t.parent?n.a:r}function Ni(n){return 1+Bo.max(n,function(n){return n.y})}function zi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Li(n){var t=n.children;return t&&t.length?Li(t[0]):n}function Ti(n){var t,r=n.children;return r&&(t=r.length)?Ti(r[t-1]):n}function qi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ri(n,t){var r=n.x+t[3],e=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(r+=u/2,u=0),0>i&&(e+=i/2,i=0),{x:r,y:e,dx:u,dy:i}}function Di(n){var t=n[0],r=n[n.length-1];return r>t?[t,r]:[r,t]}function Pi(n){return n.rangeExtent?n.rangeExtent():Di(n.range())}function Ui(n,t,r,e){var u=r(n[0],n[1]),i=e(t[0],t[1]);return function(n){return i(u(n))}}function ji(n,t){var r,e=0,u=n.length-1,i=n[e],o=n[u];return i>o&&(r=e,e=u,u=r,r=i,i=o,o=r),n[e]=t.floor(i),n[u]=t.ceil(o),n}function Hi(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:hs}function Fi(n,t,r,e){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(r(n[o-1],n[o])),i.push(e(t[o-1],t[o]));return function(t){var r=Bo.bisect(n,t,1,a)-1;return i[r](u[r](t))}}function Oi(n,t,r,e){function u(){var u=Math.min(n.length,t.length)>2?Fi:Ui,c=e?Ou:Fu;return o=u(n,t,c,r),a=u(t,n,c,du),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Ru)},i.clamp=function(n){return arguments.length?(e=n,u()):e},i.interpolate=function(n){return arguments.length?(r=n,u()):r},i.ticks=function(t){return Vi(n,t)},i.tickFormat=function(t,r){return $i(n,t,r)},i.nice=function(t){return Yi(n,t),u()},i.copy=function(){return Oi(n,t,r,e)},u()}function Ii(n,t){return Bo.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Yi(n,t){return ji(n,Hi(Zi(n,t)[2]))}function Zi(n,t){null==t&&(t=10);var r=Di(n),e=r[1]-r[0],u=Math.pow(10,Math.floor(Math.log(e/t)/Math.LN10)),i=t/e*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),r[0]=Math.ceil(r[0]/u)*u,r[1]=Math.floor(r[1]/u)*u+.5*u,r[2]=u,r}function Vi(n,t){return Bo.range.apply(Bo,Zi(n,t))}function $i(n,t,r){var e=Zi(n,t);if(r){var u=nc.exec(r);if(u.shift(),"s"===u[8]){var i=Bo.formatPrefix(Math.max(ca(e[0]),ca(e[1])));return u[7]||(u[7]="."+Xi(i.scale(e[2]))),u[8]="f",r=Bo.format(u.join("")),function(n){return r(i.scale(n))+i.symbol}}u[7]||(u[7]="."+Bi(u[8],e)),r=u.join("")}else r=",."+Xi(e[2])+"f";return Bo.format(r)}function Xi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Bi(n,t){var r=Xi(t[2]);return n in gs?Math.abs(r-Xi(Math.max(ca(t[0]),ca(t[1]))))+ +("e"!==n):r-2*("%"===n)}function Ji(n,t,r,e){function u(n){return(r?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return r?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(r=t[0]>=0,n.domain((e=t.map(Number)).map(u)),o):e},o.base=function(r){return arguments.length?(t=+r,n.domain(e.map(u)),o):t},o.nice=function(){var t=ji(e.map(u),r?Math:vs);return n.domain(t),e=t.map(i),o},o.ticks=function(){var n=Di(e),o=[],a=n[0],c=n[1],s=Math.floor(u(a)),l=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(l-s)){if(r){for(;l>s;s++)for(var h=1;f>h;h++)o.push(i(s)*h);o.push(i(s))}else for(o.push(i(s));s++<l;)for(var h=f-1;h>0;h--)o.push(i(s)*h);for(s=0;o[s]<a;s++);for(l=o.length;o[l-1]>c;l--);o=o.slice(s,l)}return o},o.tickFormat=function(n,t){if(!arguments.length)return ps;arguments.length<2?t=ps:"function"!=typeof t&&(t=Bo.format(t));var e,a=Math.max(.1,n/o.ticks().length),c=r?(e=1e-12,Math.ceil):(e=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+e))<=a?t(n):""}},o.copy=function(){return Ji(n.copy(),t,r,e)},Ii(o,n)}function Wi(n,t,r){function e(t){return n(u(t))}var u=Gi(t),i=Gi(1/t);return e.invert=function(t){return i(n.invert(t))},e.domain=function(t){return arguments.length?(n.domain((r=t.map(Number)).map(u)),e):r},e.ticks=function(n){return Vi(r,n)},e.tickFormat=function(n,t){return $i(r,n,t)},e.nice=function(n){return e.domain(Yi(r,n))},e.exponent=function(o){return arguments.length?(u=Gi(t=o),i=Gi(1/t),n.domain(r.map(u)),e):t},e.copy=function(){return Wi(n.copy(),t,r)},Ii(e,n)}function Gi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Ki(n,t){function r(r){return i[((u.get(r)||("range"===t.t?u.set(r,n.push(r)):0/0))-1)%i.length]}function e(t,r){return Bo.range(n.length).map(function(n){return t+r*n})}var u,i,a;return r.domain=function(e){if(!arguments.length)return n;n=[],u=new o;for(var i,a=-1,c=e.length;++a<c;)u.has(i=e[a])||u.set(i,n.push(i));return r[t.t].apply(r,t.a)},r.range=function(n){return arguments.length?(i=n,a=0,t={t:"range",a:arguments},r):i},r.rangePoints=function(u,o){arguments.length<2&&(o=0);var c=u[0],s=u[1],l=(s-c)/(Math.max(1,n.length-1)+o);return i=e(n.length<2?(c+s)/2:c+l*o/2,l),a=0,t={t:"rangePoints",a:arguments},r},r.rangeBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=(f-l)/(n.length-o+2*c);return i=e(l+h*c,h),s&&i.reverse(),a=h*(1-o),t={t:"rangeBands",a:arguments},r},r.rangeRoundBands=function(u,o,c){arguments.length<2&&(o=0),arguments.length<3&&(c=o);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=Math.floor((f-l)/(n.length-o+2*c)),g=f-l-(n.length-o)*h;return i=e(l+Math.round(g/2),h),s&&i.reverse(),a=Math.round(h*(1-o)),t={t:"rangeRoundBands",a:arguments},r},r.rangeBand=function(){return a},r.rangeExtent=function(){return Di(t.a[0])},r.copy=function(){return Ki(n,t)},r.domain(n)}function Qi(r,e){function u(){var n=0,t=e.length;for(o=[];++n<t;)o[n-1]=Bo.quantile(r,n/t);return i}function i(n){return isNaN(n=+n)?void 0:e[Bo.bisect(o,n)]}var o;return i.domain=function(e){return arguments.length?(r=e.filter(t).sort(n),u()):r},i.range=function(n){return arguments.length?(e=n,u()):e},i.quantiles=function(){return o},i.invertExtent=function(n){return n=e.indexOf(n),0>n?[0/0,0/0]:[n>0?o[n-1]:r[0],n<o.length?o[n]:r[r.length-1]]},i.copy=function(){return Qi(r,e)},u()}function no(n,t,r){function e(t){return r[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=r.length/(t-n),o=r.length-1,e}var i,o;return e.domain=function(r){return arguments.length?(n=+r[0],t=+r[r.length-1],u()):[n,t]},e.range=function(n){return arguments.length?(r=n,u()):r},e.invertExtent=function(t){return t=r.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},e.copy=function(){return no(n,t,r)},u()}function to(n,t){function r(r){return r>=r?t[Bo.bisect(n,r)]:void 0}return r.domain=function(t){return arguments.length?(n=t,r):n},r.range=function(n){return arguments.length?(t=n,r):t},r.invertExtent=function(r){return r=t.indexOf(r),[n[r-1],n[r]]},r.copy=function(){return to(n,t)},r}function ro(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(r){return arguments.length?(n=r.map(t),t):n},t.ticks=function(t){return Vi(n,t)},t.tickFormat=function(t,r){return $i(n,t,r)},t.copy=function(){return ro(n)},t}function eo(n){return n.innerRadius}function uo(n){return n.outerRadius}function io(n){return n.startAngle}function oo(n){return n.endAngle}function ao(n){function t(t){function o(){s.push("M",i(n(l),a))}for(var c,s=[],l=[],f=-1,h=t.length,g=Et(r),p=Et(e);++f<h;)u.call(this,c=t[f],f)?l.push([+g.call(this,c,f),+p.call(this,c,f)]):l.length&&(o(),l=[]);return l.length&&o(),s.length?s.join(""):null}var r=Ae,e=Ce,u=Ar,i=co,o=i.key,a=.7;return t.x=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(e=n,t):e},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=bs.get(n)||co).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function co(n){return n.join("L")}function so(n){return co(n)+"Z"}function lo(n){for(var t=0,r=n.length,e=n[0],u=[e[0],",",e[1]];++t<r;)u.push("H",(e[0]+(e=n[t])[0])/2,"V",e[1]);return r>1&&u.push("H",e[0]),u.join("")}function fo(n){for(var t=0,r=n.length,e=n[0],u=[e[0],",",e[1]];++t<r;)u.push("V",(e=n[t])[1],"H",e[0]);return u.join("")}function ho(n){for(var t=0,r=n.length,e=n[0],u=[e[0],",",e[1]];++t<r;)u.push("H",(e=n[t])[0],"V",e[1]);return u.join("")}function go(n,t){return n.length<4?co(n):n[1]+mo(n.slice(1,n.length-1),yo(n,t))}function po(n,t){return n.length<3?co(n):n[0]+mo((n.push(n[0]),n),yo([n[n.length-2]].concat(n,[n[1]]),t))}function vo(n,t){return n.length<3?co(n):n[0]+mo(n,yo(n,t))}function mo(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return co(n);var r=n.length!=t.length,e="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(r&&(e+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,e+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var s=2;s<t.length;s++,c++)i=n[c],a=t[s],e+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(r){var l=n[c];e+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+l[0]+","+l[1]}return e}function yo(n,t){for(var r,e=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)r=i,i=o,o=n[a],e.push([u*(o[0]-r[0]),u*(o[1]-r[1])]);return e}function xo(n){if(n.length<3)return co(n);var t=1,r=n.length,e=n[0],u=e[0],i=e[1],o=[u,u,u,(e=n[1])[0]],a=[i,i,i,e[1]],c=[u,",",i,"L",wo(ks,o),",",wo(ks,a)];for(n.push(n[r-1]);++t<=r;)e=n[t],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),So(c,o,a);return n.pop(),c.push("L",e),c.join("")}function Mo(n){if(n.length<4)return co(n);for(var t,r=[],e=-1,u=n.length,i=[0],o=[0];++e<3;)t=n[e],i.push(t[0]),o.push(t[1]);for(r.push(wo(ks,i)+","+wo(ks,o)),--e;++e<u;)t=n[e],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),So(r,i,o);return r.join("")}function _o(n){for(var t,r,e=-1,u=n.length,i=u+4,o=[],a=[];++e<4;)r=n[e%u],o.push(r[0]),a.push(r[1]);for(t=[wo(ks,o),",",wo(ks,a)],--e;++e<i;)r=n[e%u],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),So(t,o,a);return t.join("")}function bo(n,t){var r=n.length-1;if(r)for(var e,u,i=n[0][0],o=n[0][1],a=n[r][0]-i,c=n[r][1]-o,s=-1;++s<=r;)e=n[s],u=s/r,e[0]=t*e[0]+(1-t)*(i+u*a),e[1]=t*e[1]+(1-t)*(o+u*c);return xo(n)}function wo(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function So(n,t,r){n.push("C",wo(ws,t),",",wo(ws,r),",",wo(Ss,t),",",wo(Ss,r),",",wo(ks,t),",",wo(ks,r))}function ko(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Eo(n){for(var t=0,r=n.length-1,e=[],u=n[0],i=n[1],o=e[0]=ko(u,i);++t<r;)e[t]=(o+(o=ko(u=i,i=n[t+1])))/2;return e[t]=o,e}function Ao(n){for(var t,r,e,u,i=[],o=Eo(n),a=-1,c=n.length-1;++a<c;)t=ko(n[a],n[a+1]),ca(t)<Ca?o[a]=o[a+1]=0:(r=o[a]/t,e=o[a+1]/t,u=r*r+e*e,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*r,o[a+1]=u*e));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function Co(n){return n.length<3?co(n):n[0]+mo(n,Ao(n))}function No(n){for(var t,r,e,u=-1,i=n.length;++u<i;)t=n[u],r=t[0],e=t[1]+Ms,t[0]=r*Math.cos(e),t[1]=r*Math.sin(e);return n}function zo(n){function t(t){function c(){v.push("M",a(n(m),f),l,s(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=Et(r),_=Et(u),b=r===e?function(){return g}:Et(e),w=u===i?function(){return p}:Et(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var r=Ae,e=Ae,u=0,i=Ce,o=Ar,a=co,c=a.key,s=a,l="L",f=.7;return t.x=function(n){return arguments.length?(r=e=n,t):e},t.x0=function(n){return arguments.length?(r=n,t):r},t.x1=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=bs.get(n)||co).key,s=a.reverse||a,l=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Lo(n){return n.radius}function To(n){return[n.x,n.y]}function qo(n){return function(){var t=n.apply(this,arguments),r=t[0],e=t[1]+Ms;return[r*Math.cos(e),r*Math.sin(e)]}}function Ro(){return 64}function Do(){return"circle"}function Po(n){var t=Math.sqrt(n/ka);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Uo(n,t){return ga(n,Ls),n.id=t,n}function jo(n,t,r,e){var u=n.id;return P(n,"function"==typeof r?function(n,i,o){n.__transition__[u].tween.set(t,e(r.call(n,n.__data__,i,o)))}:(r=e(r),function(n){n.__transition__[u].tween.set(t,r)}))}function Ho(n){return null==n&&(n=""),function(){this.textContent=n}}function Fo(n,t,r,e){var u=n.__transition__||(n.__transition__={active:0,count:0}),i=u[r];if(!i){var a=e.time;i=u[r]={tween:new o,time:a,ease:e.ease,delay:e.delay,duration:e.duration},++u.count,Bo.timer(function(e){function o(e){return u.active>r?s():(u.active=r,i.event&&i.event.start.call(n,l,t),i.tween.forEach(function(r,e){(e=e.call(n,l,t))&&v.push(e)}),Bo.timer(function(){return p.c=c(e||1)?Ar:c,1},0,a),void 0)}function c(e){if(u.active!==r)return s();for(var o=e/g,a=f(o),c=v.length;c>0;)v[--c].call(n,a);return o>=1?(i.event&&i.event.end.call(n,l,t),s()):void 0}function s(){return--u.count?delete u[r]:delete n.__transition__,1}var l=n.__data__,f=i.ease,h=i.delay,g=i.duration,p=Ga,v=[];return p.t=h+a,e>=h?o(e-h):(p.c=o,void 0)},0,a)}}function Oo(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function Io(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function Yo(n){return n.toISOString()}function Zo(n,t,r){function e(t){return n(t)}function u(n,r){var e=n[1]-n[0],u=e/r,i=Bo.bisect(Fs,u);return i==Fs.length?[t.year,Zi(n.map(function(n){return n/31536e6}),r)[2]]:i?t[u/Fs[i-1]<Fs[i]/u?i-1:i]:[Ys,Zi(n,r)[2]]}return e.invert=function(t){return Vo(n.invert(t))
},e.domain=function(t){return arguments.length?(n.domain(t),e):n.domain().map(Vo)},e.nice=function(n,t){function r(r){return!isNaN(r)&&!n.range(r,Vo(+r+1),t).length}var i=e.domain(),o=Di(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),e.domain(ji(i,t>1?{floor:function(t){for(;r(t=n.floor(t));)t=Vo(t-1);return t},ceil:function(t){for(;r(t=n.ceil(t));)t=Vo(+t+1);return t}}:n))},e.ticks=function(n,t){var r=Di(e.domain()),i=null==n?u(r,10):"number"==typeof n?u(r,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(r[0],Vo(+r[1]+1),1>t?1:t)},e.tickFormat=function(){return r},e.copy=function(){return Zo(n.copy(),t,r)},Ii(e,n)}function Vo(n){return new Date(n)}function $o(n){return JSON.parse(n.responseText)}function Xo(n){var t=Go.createRange();return t.selectNode(Go.body),t.createContextualFragment(n.responseText)}var Bo={version:"3.4.8"};Date.now||(Date.now=function(){return+new Date});var Jo=[].slice,Wo=function(n){return Jo.call(n)},Go=document,Ko=Go.documentElement,Qo=window;try{Wo(Ko.childNodes)[0].nodeType}catch(na){Wo=function(n){for(var t=n.length,r=new Array(t);t--;)r[t]=n[t];return r}}try{Go.createElement("div").style.setProperty("opacity",0,"")}catch(ta){var ra=Qo.Element.prototype,ea=ra.setAttribute,ua=ra.setAttributeNS,ia=Qo.CSSStyleDeclaration.prototype,oa=ia.setProperty;ra.setAttribute=function(n,t){ea.call(this,n,t+"")},ra.setAttributeNS=function(n,t,r){ua.call(this,n,t,r+"")},ia.setProperty=function(n,t,r){oa.call(this,n,t+"",r)}}Bo.ascending=n,Bo.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Bo.min=function(n,t){var r,e,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(r=n[u])&&r>=r);)r=void 0;for(;++u<i;)null!=(e=n[u])&&r>e&&(r=e)}else{for(;++u<i&&!(null!=(r=t.call(n,n[u],u))&&r>=r);)r=void 0;for(;++u<i;)null!=(e=t.call(n,n[u],u))&&r>e&&(r=e)}return r},Bo.max=function(n,t){var r,e,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(r=n[u])&&r>=r);)r=void 0;for(;++u<i;)null!=(e=n[u])&&e>r&&(r=e)}else{for(;++u<i&&!(null!=(r=t.call(n,n[u],u))&&r>=r);)r=void 0;for(;++u<i;)null!=(e=t.call(n,n[u],u))&&e>r&&(r=e)}return r},Bo.extent=function(n,t){var r,e,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(r=u=n[i])&&r>=r);)r=u=void 0;for(;++i<o;)null!=(e=n[i])&&(r>e&&(r=e),e>u&&(u=e))}else{for(;++i<o&&!(null!=(r=u=t.call(n,n[i],i))&&r>=r);)r=void 0;for(;++i<o;)null!=(e=t.call(n,n[i],i))&&(r>e&&(r=e),e>u&&(u=e))}return[r,u]},Bo.sum=function(n,t){var r,e=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(r=+n[i])||(e+=r);else for(;++i<u;)isNaN(r=+t.call(n,n[i],i))||(e+=r);return e},Bo.mean=function(n,r){var e,u=0,i=n.length,o=-1,a=i;if(1===arguments.length)for(;++o<i;)t(e=n[o])?u+=e:--a;else for(;++o<i;)t(e=r.call(n,n[o],o))?u+=e:--a;return a?u/a:void 0},Bo.quantile=function(n,t){var r=(n.length-1)*t+1,e=Math.floor(r),u=+n[e-1],i=r-e;return i?u+i*(n[e]-u):u},Bo.median=function(r,e){return arguments.length>1&&(r=r.map(e)),r=r.filter(t),r.length?Bo.quantile(r.sort(n),.5):void 0};var aa=r(n);Bo.bisectLeft=aa.left,Bo.bisect=Bo.bisectRight=aa.right,Bo.bisector=function(t){return r(1===t.length?function(r,e){return n(t(r),e)}:t)},Bo.shuffle=function(n){for(var t,r,e=n.length;e;)r=0|Math.random()*e--,t=n[e],n[e]=n[r],n[r]=t;return n},Bo.permute=function(n,t){for(var r=t.length,e=new Array(r);r--;)e[r]=n[t[r]];return e},Bo.pairs=function(n){for(var t,r=0,e=n.length-1,u=n[0],i=new Array(0>e?0:e);e>r;)i[r]=[t=u,u=n[++r]];return i},Bo.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,t=Bo.min(arguments,e),r=new Array(t);++n<t;)for(var u,i=-1,o=r[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return r},Bo.transpose=function(n){return Bo.zip.apply(Bo,n)},Bo.keys=function(n){var t=[];for(var r in n)t.push(r);return t},Bo.values=function(n){var t=[];for(var r in n)t.push(n[r]);return t},Bo.entries=function(n){var t=[];for(var r in n)t.push({key:r,value:n[r]});return t},Bo.merge=function(n){for(var t,r,e,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(r=new Array(o);--u>=0;)for(e=n[u],t=e.length;--t>=0;)r[--o]=e[t];return r};var ca=Math.abs;Bo.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw new Error("infinite range");var e,i=[],o=u(ca(r)),a=-1;if(n*=o,t*=o,r*=o,0>r)for(;(e=n+r*++a)>t;)i.push(e/o);else for(;(e=n+r*++a)<t;)i.push(e/o);return i},Bo.map=function(n){var t=new o;if(n instanceof o)n.forEach(function(n,r){t.set(n,r)});else for(var r in n)t.set(r,n[r]);return t},i(o,{has:a,get:function(n){return this[sa+n]},set:function(n,t){return this[sa+n]=t},remove:c,keys:s,values:function(){var n=[];return this.forEach(function(t,r){n.push(r)}),n},entries:function(){var n=[];return this.forEach(function(t,r){n.push({key:t,value:r})}),n},size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===la&&n.call(this,t.substring(1),this[t])}});var sa="\x00",la=sa.charCodeAt(0);Bo.nest=function(){function n(t,a,c){if(c>=i.length)return e?e.call(u,a):r?a.sort(r):a;for(var s,l,f,h,g=-1,p=a.length,v=i[c++],d=new o;++g<p;)(h=d.get(s=v(l=a[g])))?h.push(l):d.set(s,[l]);return t?(l=t(),f=function(r,e){l.set(r,n(t,e,c))}):(l={},f=function(r,e){l[r]=n(t,e,c)}),d.forEach(f),l}function t(n,r){if(r>=i.length)return n;var e=[],u=a[r++];return n.forEach(function(n,u){e.push({key:n,values:t(u,r)})}),u?e.sort(function(n,t){return u(n.key,t.key)}):e}var r,e,u={},i=[],a=[];return u.map=function(t,r){return n(r,t,0)},u.entries=function(r){return t(n(Bo.map,r,0),0)},u.key=function(n){return i.push(n),u},u.sortKeys=function(n){return a[i.length-1]=n,u},u.sortValues=function(n){return r=n,u},u.rollup=function(n){return e=n,u},u},Bo.set=function(n){var t=new h;if(n)for(var r=0,e=n.length;e>r;++r)t.add(n[r]);return t},i(h,{has:a,add:function(n){return this[sa+n]=!0,n},remove:function(n){return n=sa+n,n in this&&delete this[n]},values:s,size:l,empty:f,forEach:function(n){for(var t in this)t.charCodeAt(0)===la&&n.call(this,t.substring(1))}}),Bo.behavior={},Bo.rebind=function(n,t){for(var r,e=1,u=arguments.length;++e<u;)n[r=arguments[e]]=g(n,t,t[r]);return n};var fa=["webkit","ms","moz","Moz","o","O"];Bo.dispatch=function(){for(var n=new d,t=-1,r=arguments.length;++t<r;)n[arguments[t]]=m(n);return n},d.prototype.on=function(n,t){var r=n.indexOf("."),e="";if(r>=0&&(e=n.substring(r+1),n=n.substring(0,r)),n)return arguments.length<2?this[n].on(e):this[n].on(e,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(e,null);return this}},Bo.event=null,Bo.requote=function(n){return n.replace(ha,"\\$&")};var ha=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ga={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var r in t)n[r]=t[r]},pa=function(n,t){return t.querySelector(n)},va=function(n,t){return t.querySelectorAll(n)},da=Ko[p(Ko,"matchesSelector")],ma=function(n,t){return da.call(n,t)};"function"==typeof Sizzle&&(pa=function(n,t){return Sizzle(n,t)[0]||null},va=Sizzle,ma=Sizzle.matchesSelector),Bo.selection=function(){return _a};var ya=Bo.selection.prototype=[];ya.select=function(n){var t,r,e,u,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(e=this[o]).parentNode;for(var c=-1,s=e.length;++c<s;)(u=e[c])?(t.push(r=n.call(u,u.__data__,c,o)),r&&"__data__"in u&&(r.__data__=u.__data__)):t.push(null)}return _(i)},ya.selectAll=function(n){var t,r,e=[];n=w(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(r=o[a])&&(e.push(t=Wo(n.call(r,r.__data__,a,u))),t.parentNode=r);return _(e)};var xa={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Bo.ns={prefix:xa,qualify:function(n){var t=n.indexOf(":"),r=n;return t>=0&&(r=n.substring(0,t),n=n.substring(t+1)),xa.hasOwnProperty(r)?{space:xa[r],local:n}:n}},ya.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var r=this.node();return n=Bo.ns.qualify(n),n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}for(t in n)this.each(S(t,n[t]));return this}return this.each(S(n,t))},ya.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var r=this.node(),e=(n=A(n)).length,u=-1;if(t=r.classList){for(;++u<e;)if(!t.contains(n[u]))return!1}else for(t=r.getAttribute("class");++u<e;)if(!E(n[u]).test(t))return!1;return!0}for(t in n)this.each(C(t,n[t]));return this}return this.each(C(n,t))},ya.style=function(n,t,r){var e=arguments.length;if(3>e){if("string"!=typeof n){2>e&&(t="");for(r in n)this.each(z(r,n[r],t));return this}if(2>e)return Qo.getComputedStyle(this.node(),null).getPropertyValue(n);r=""}return this.each(z(n,t,r))},ya.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(L(t,n[t]));return this}return this.each(L(n,t))},ya.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},ya.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},ya.append=function(n){return n=T(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},ya.insert=function(n,t){return n=T(n),t=b(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},ya.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},ya.data=function(n,t){function r(n,r){var e,u,i,a=n.length,f=r.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new o,y=new o,x=[];for(e=-1;++e<a;)d=t.call(u=n[e],u.__data__,e),m.has(d)?v[e]=u:m.set(d,u),x.push(d);for(e=-1;++e<f;)d=t.call(r,i=r[e],e),(u=m.get(d))?(g[e]=u,u.__data__=i):y.has(d)||(p[e]=q(i)),y.set(d,i),m.remove(d);for(e=-1;++e<a;)m.has(x[e])&&(v[e]=n[e])}else{for(e=-1;++e<h;)u=n[e],i=r[e],u?(u.__data__=i,g[e]=u):p[e]=q(i);for(;f>e;++e)p[e]=q(r[e]);for(;a>e;++e)v[e]=n[e]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),s.push(g),l.push(v)}var e,u,i=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(e=this[0]).length);++i<a;)(u=e[i])&&(n[i]=u.__data__);return n}var c=U([]),s=_([]),l=_([]);if("function"==typeof n)for(;++i<a;)r(e=this[i],n.call(e,e.parentNode.__data__,i));else for(;++i<a;)r(e=this[i],n);return s.enter=function(){return c},s.exit=function(){return l},s},ya.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},ya.filter=function(n){var t,r,e,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(r=this[i]).parentNode;for(var a=0,c=r.length;c>a;a++)(e=r[a])&&n.call(e,e.__data__,a,i)&&t.push(e)}return _(u)},ya.order=function(){for(var n=-1,t=this.length;++n<t;)for(var r,e=this[n],u=e.length-1,i=e[u];--u>=0;)(r=e[u])&&(i&&i!==r.nextSibling&&i.parentNode.insertBefore(r,i),i=r);return this},ya.sort=function(n){n=D.apply(this,arguments);for(var t=-1,r=this.length;++t<r;)this[t].sort(n);return this.order()},ya.each=function(n){return P(this,function(t,r,e){n.call(t,t.__data__,r,e)})},ya.call=function(n){var t=Wo(arguments);return n.apply(t[0]=this,t),this},ya.empty=function(){return!this.node()},ya.node=function(){for(var n=0,t=this.length;t>n;n++)for(var r=this[n],e=0,u=r.length;u>e;e++){var i=r[e];if(i)return i}return null},ya.size=function(){var n=0;return this.each(function(){++n}),n};var Ma=[];Bo.selection.enter=U,Bo.selection.enter.prototype=Ma,Ma.append=ya.append,Ma.empty=ya.empty,Ma.node=ya.node,Ma.call=ya.call,Ma.size=ya.size,Ma.select=function(n){for(var t,r,e,u,i,o=[],a=-1,c=this.length;++a<c;){e=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var s=-1,l=u.length;++s<l;)(i=u[s])?(t.push(e[s]=r=n.call(u.parentNode,i.__data__,s,a)),r.__data__=i.__data__):t.push(null)}return _(o)},Ma.insert=function(n,t){return arguments.length<2&&(t=j(this)),ya.insert.call(this,n,t)},ya.transition=function(){for(var n,t,r=As||++Ts,e=[],u=Cs||{time:Date.now(),ease:wu,delay:0,duration:250},i=-1,o=this.length;++i<o;){e.push(n=[]);for(var a=this[i],c=-1,s=a.length;++c<s;)(t=a[c])&&Fo(t,c,r,u),n.push(t)}return Uo(e,r)},ya.interrupt=function(){return this.each(H)},Bo.select=function(n){var t=["string"==typeof n?pa(n,Go):n];return t.parentNode=Ko,_([t])},Bo.selectAll=function(n){var t=Wo("string"==typeof n?va(n,Go):n);return t.parentNode=Ko,_([t])};var _a=Bo.select(Ko);ya.on=function(n,t,r){var e=arguments.length;if(3>e){if("string"!=typeof n){2>e&&(t=!1);for(r in n)this.each(F(r,n[r],t));return this}if(2>e)return(e=this.node()["__on"+n])&&e._;r=!1}return this.each(F(n,t,r))};var ba=Bo.map({mouseenter:"mouseover",mouseleave:"mouseout"});ba.forEach(function(n){"on"+n in Go&&ba.remove(n)});var wa="onselectstart"in Go?null:p(Ko.style,"userSelect"),Sa=0;Bo.mouse=function(n){return Z(n,x())},Bo.touches=function(n,t){return arguments.length<2&&(t=x().touches),t?Wo(t).map(function(t){var r=Z(n,t);return r.identifier=t.identifier,r}):[]},Bo.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",i)}function t(n,t,u,i,o){return function(){function a(){var n,r,e=t(h,v);e&&(n=e[0]-x[0],r=e[1]-x[1],p|=n|r,x=e,g({type:"drag",x:e[0]+s[0],y:e[1]+s[1],dx:n,dy:r}))}function c(){t(h,v)&&(m.on(i+d,null).on(o+d,null),y(p&&Bo.event.target===f),g({type:"dragend"}))}var s,l=this,f=Bo.event.target,h=l.parentNode,g=r.of(l,arguments),p=0,v=n(),d=".drag"+(null==v?"":"-"+v),m=Bo.select(u()).on(i+d,a).on(o+d,c),y=Y(),x=t(h,v);e?(s=e.apply(l,arguments),s=[s.x-x[0],s.y-x[1]]):s=[0,0],g({type:"dragstart"})}}var r=M(n,"drag","dragstart","dragend"),e=null,u=t(v,Bo.mouse,X,"mousemove","mouseup"),i=t(V,Bo.touch,$,"touchmove","touchend");return n.origin=function(t){return arguments.length?(e=t,n):e},Bo.rebind(n,r,"on")};var ka=Math.PI,Ea=2*ka,Aa=ka/2,Ca=1e-6,Na=Ca*Ca,za=ka/180,La=180/ka,Ta=Math.SQRT2,qa=2,Ra=4;Bo.interpolateZoom=function(n,t){function r(n){var t=n*y;if(m){var r=Q(v),o=i/(qa*h)*(r*nt(Ta*t+v)-K(v));return[e+o*s,u+o*l,i*r/Q(Ta*t+v)]}return[e+n*s,u+n*l,i*Math.exp(Ta*t)]}var e=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],s=o-e,l=a-u,f=s*s+l*l,h=Math.sqrt(f),g=(c*c-i*i+Ra*f)/(2*i*qa*h),p=(c*c-i*i-Ra*f)/(2*c*qa*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/Ta;return r.duration=1e3*y,r},Bo.behavior.zoom=function(){function n(n){n.on(A,s).on(Ua+".zoom",f).on(C,h).on("dblclick.zoom",g).on(z,l)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function r(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function e(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=r(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){_&&_.domain(x.range().map(function(n){return(n-S.x)/S.k}).map(x.invert)),w&&w.domain(b.range().map(function(n){return(n-S.y)/S.k}).map(b.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function s(){function n(){l=1,u(Bo.mouse(e),g),a(s)}function r(){f.on(C,Qo===e?h:null).on(N,null),p(l&&Bo.event.target===i),c(s)}var e=this,i=Bo.event.target,s=L.of(e,arguments),l=0,f=Bo.select(Qo).on(C,n).on(N,r),g=t(Bo.mouse(e)),p=Y();H.call(e),o(s)}function l(){function n(){var n=Bo.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function r(){var t=Bo.event.target;Bo.select(t).on(M,i).on(_,f),b.push(t);for(var r=Bo.event.changedTouches,o=0,c=r.length;c>o;++o)v[r[o].identifier]=null;var s=n(),l=Date.now();if(1===s.length){if(500>l-m){var h=s[0],g=v[h.identifier];e(2*S.k),u(h,g),y(),a(p)}m=l}else if(s.length>1){var h=s[0],x=s[1],w=h[0]-x[0],k=h[1]-x[1];d=w*w+k*k}}function i(){for(var n,t,r,i,o=Bo.touches(g),c=0,s=o.length;s>c;++c,i=null)if(r=o[c],i=v[r.identifier]){if(t)break;n=r,t=i}if(i){var l=(l=r[0]-n[0])*l+(l=r[1]-n[1])*l,f=d&&Math.sqrt(l/d);n=[(n[0]+r[0])/2,(n[1]+r[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],e(f*h)}m=null,u(n,t),a(p)}function f(){if(Bo.event.touches.length){for(var t=Bo.event.changedTouches,r=0,e=t.length;e>r;++r)delete v[t[r].identifier];for(var u in v)return void n()}Bo.selectAll(b).on(x,null),w.on(A,s).on(z,l),k(),c(p)}var h,g=this,p=L.of(g,arguments),v={},d=0,x=".zoom-"+Bo.event.changedTouches[0].identifier,M="touchmove"+x,_="touchend"+x,b=[],w=Bo.select(g).on(A,null).on(z,r),k=Y();H.call(g),r(),o(p)}function f(){var n=L.of(this,arguments);d?clearTimeout(d):(H.call(this),o(n)),d=setTimeout(function(){d=null,c(n)},50),y();var r=v||Bo.mouse(this);p||(p=t(r)),e(Math.pow(2,.002*Da())*S.k),u(r,p),a(n)}function h(){p=null}function g(){var n=L.of(this,arguments),r=Bo.mouse(this),i=t(r),s=Math.log(S.k)/Math.LN2;o(n),e(Math.pow(2,Bo.event.shiftKey?Math.ceil(s)-1:Math.floor(s)+1)),u(r,i),a(n),c(n)}var p,v,d,m,x,_,b,w,S={x:0,y:0,k:1},k=[960,500],E=Pa,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",z="touchstart.zoom",L=M(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=L.of(this,arguments),t=S;As?Bo.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var r=k[0],e=k[1],u=r/2,i=e/2,o=Bo.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,r/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,r/t.k]);return function(t){var e=o(t),c=r/e[2];this.__chart__=S={x:u-e[0]*c,y:i-e[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Pa:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(_=t,x=t.copy(),S={x:0,y:0,k:1},n):_},n.y=function(t){return arguments.length?(w=t,b=t.copy(),S={x:0,y:0,k:1},n):w},Bo.rebind(n,L,"on")};var Da,Pa=[0,1/0],Ua="onwheel"in Go?(Da=function(){return-Bo.event.deltaY*(Bo.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Go?(Da=function(){return Bo.event.wheelDelta},"mousewheel"):(Da=function(){return-Bo.event.detail},"MozMousePixelScroll");rt.prototype.toString=function(){return this.rgb()+""},Bo.hsl=function(n,t,r){return 1===arguments.length?n instanceof ut?et(n.h,n.s,n.l):_t(""+n,bt,et):et(+n,+t,+r)};var ja=ut.prototype=new rt;ja.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),et(this.h,this.s,this.l/n)},ja.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),et(this.h,this.s,n*this.l)},ja.rgb=function(){return it(this.h,this.s,this.l)},Bo.hcl=function(n,t,r){return 1===arguments.length?n instanceof at?ot(n.h,n.c,n.l):n instanceof lt?ht(n.l,n.a,n.b):ht((n=wt((n=Bo.rgb(n)).r,n.g,n.b)).l,n.a,n.b):ot(+n,+t,+r)};var Ha=at.prototype=new rt;Ha.brighter=function(n){return ot(this.h,this.c,Math.min(100,this.l+Fa*(arguments.length?n:1)))},Ha.darker=function(n){return ot(this.h,this.c,Math.max(0,this.l-Fa*(arguments.length?n:1)))},Ha.rgb=function(){return ct(this.h,this.c,this.l).rgb()},Bo.lab=function(n,t,r){return 1===arguments.length?n instanceof lt?st(n.l,n.a,n.b):n instanceof at?ct(n.l,n.c,n.h):wt((n=Bo.rgb(n)).r,n.g,n.b):st(+n,+t,+r)};var Fa=18,Oa=.95047,Ia=1,Ya=1.08883,Za=lt.prototype=new rt;Za.brighter=function(n){return st(Math.min(100,this.l+Fa*(arguments.length?n:1)),this.a,this.b)},Za.darker=function(n){return st(Math.max(0,this.l-Fa*(arguments.length?n:1)),this.a,this.b)},Za.rgb=function(){return ft(this.l,this.a,this.b)},Bo.rgb=function(n,t,r){return 1===arguments.length?n instanceof xt?yt(n.r,n.g,n.b):_t(""+n,yt,it):yt(~~n,~~t,~~r)};var Va=xt.prototype=new rt;Va.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,r=this.g,e=this.b,u=30;return t||r||e?(t&&u>t&&(t=u),r&&u>r&&(r=u),e&&u>e&&(e=u),yt(Math.min(255,~~(t/n)),Math.min(255,~~(r/n)),Math.min(255,~~(e/n)))):yt(u,u,u)},Va.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),yt(~~(n*this.r),~~(n*this.g),~~(n*this.b))},Va.hsl=function(){return bt(this.r,this.g,this.b)},Va.toString=function(){return"#"+Mt(this.r)+Mt(this.g)+Mt(this.b)};var $a=Bo.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});$a.forEach(function(n,t){$a.set(n,dt(t))}),Bo.functor=Et,Bo.xhr=Ct(At),Bo.dsv=function(n,t){function r(n,r,i){arguments.length<3&&(i=r,r=null);var o=Nt(n,t,null==r?e:u(r),i);return o.row=function(n){return arguments.length?o.response(null==(r=n)?e:u(n)):r},o}function e(n){return r.parse(n.responseText)}function u(n){return function(t){return r.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return r.parse=function(n,t){var e;return r.parseRows(n,function(n,r){if(e)return e(n,r-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");e=t?function(n,r){return t(u(n),r)}:u})},r.parseRows=function(n,t){function r(){if(l>=s)return o;if(u)return u=!1,i;var t=l;if(34===n.charCodeAt(t)){for(var r=t;r++<s;)if(34===n.charCodeAt(r)){if(34!==n.charCodeAt(r+1))break;++r}l=r+2;var e=n.charCodeAt(r+1);return 13===e?(u=!0,10===n.charCodeAt(r+2)&&++l):10===e&&(u=!0),n.substring(t+1,r).replace(/""/g,'"')}for(;s>l;){var e=n.charCodeAt(l++),a=1;if(10===e)u=!0;else if(13===e)u=!0,10===n.charCodeAt(l)&&(++l,++a);else if(e!==c)continue;return n.substring(t,l-a)}return n.substring(t)}for(var e,u,i={},o={},a=[],s=n.length,l=0,f=0;(e=r())!==o;){for(var h=[];e!==i&&e!==o;)h.push(e),e=r();(!t||(h=t(h,f++)))&&a.push(h)}return a},r.format=function(t){if(Array.isArray(t[0]))return r.formatRows(t);var e=new h,u=[];return t.forEach(function(n){for(var t in n)e.has(t)||u.push(e.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},r.formatRows=function(n){return n.map(i).join("\n")},r},Bo.csv=Bo.dsv(",","text/csv"),Bo.tsv=Bo.dsv("	","text/tab-separated-values"),Bo.touch=function(n,t,r){if(arguments.length<3&&(r=t,t=x().changedTouches),t)for(var e,u=0,i=t.length;i>u;++u)if((e=t[u]).identifier===r)return Z(n,e)};var Xa,Ba,Ja,Wa,Ga,Ka=Qo[p(Qo,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Bo.timer=function(n,t,r){var e=arguments.length;2>e&&(t=0),3>e&&(r=Date.now());var u=r+t,i={c:n,t:u,f:!1,n:null};Ba?Ba.n=i:Xa=i,Ba=i,Ja||(Wa=clearTimeout(Wa),Ja=1,Ka(Lt))},Bo.timer.flush=function(){Tt(),qt()},Bo.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var Qa=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Dt);Bo.formatPrefix=function(n,t){var r=0;return n&&(0>n&&(n*=-1),t&&(n=Bo.round(n,Rt(n,t))),r=1+Math.floor(1e-12+Math.log(n)/Math.LN10),r=Math.max(-24,Math.min(24,3*Math.floor((r-1)/3)))),Qa[8+r/3]};var nc=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,tc=Bo.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Bo.round(n,Rt(n,t))).toFixed(Math.max(0,Math.min(20,Rt(n*(1+1e-15),t))))}}),rc=Bo.time={},ec=Date;jt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){uc.setUTCDate.apply(this._,arguments)},setDay:function(){uc.setUTCDay.apply(this._,arguments)},setFullYear:function(){uc.setUTCFullYear.apply(this._,arguments)},setHours:function(){uc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){uc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){uc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){uc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){uc.setUTCSeconds.apply(this._,arguments)},setTime:function(){uc.setTime.apply(this._,arguments)}};var uc=Date.prototype;rc.year=Ht(function(n){return n=rc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),rc.years=rc.year.range,rc.years.utc=rc.year.utc.range,rc.day=Ht(function(n){var t=new ec(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),rc.days=rc.day.range,rc.days.utc=rc.day.utc.range,rc.dayOfYear=function(n){var t=rc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var r=rc[n]=Ht(function(n){return(n=rc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var r=rc.year(n).getDay();return Math.floor((rc.dayOfYear(n)+(r+t)%7)/7)-(r!==t)});rc[n+"s"]=r.range,rc[n+"s"].utc=r.utc.range,rc[n+"OfYear"]=function(n){var r=rc.year(n).getDay();return Math.floor((rc.dayOfYear(n)+(r+t)%7)/7)}}),rc.week=rc.sunday,rc.weeks=rc.sunday.range,rc.weeks.utc=rc.sunday.utc.range,rc.weekOfYear=rc.sundayOfYear;var ic={"-":"",_:" ",0:"0"},oc=/^\s*\d+/,ac=/^%/;Bo.locale=function(n){return{numberFormat:Pt(n),timeFormat:Ot(n)}};var cc=Bo.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Bo.format=cc.numberFormat,Bo.geo={},cr.prototype={s:0,t:0,add:function(n){sr(n,this.t,sc),sr(sc.s,this.s,this),this.s?this.t+=sc.t:this.s=sc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var sc=new cr;Bo.geo.stream=function(n,t){n&&lc.hasOwnProperty(n.type)?lc[n.type](n,t):lr(n,t)};var lc={Feature:function(n,t){lr(n.geometry,t)},FeatureCollection:function(n,t){for(var r=n.features,e=-1,u=r.length;++e<u;)lr(r[e].geometry,t)}},fc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var r=n.coordinates,e=-1,u=r.length;++e<u;)n=r[e],t.point(n[0],n[1],n[2])},LineString:function(n,t){fr(n.coordinates,t,0)},MultiLineString:function(n,t){for(var r=n.coordinates,e=-1,u=r.length;++e<u;)fr(r[e],t,0)},Polygon:function(n,t){hr(n.coordinates,t)},MultiPolygon:function(n,t){for(var r=n.coordinates,e=-1,u=r.length;++e<u;)hr(r[e],t)},GeometryCollection:function(n,t){for(var r=n.geometries,e=-1,u=r.length;++e<u;)lr(r[e],t)}};Bo.geo.area=function(n){return hc=0,Bo.geo.stream(n,pc),hc};var hc,gc=new cr,pc={sphere:function(){hc+=4*ka},point:v,lineStart:v,lineEnd:v,polygonStart:function(){gc.reset(),pc.lineStart=gr},polygonEnd:function(){var n=2*gc;hc+=0>n?4*ka+n:n,pc.lineStart=pc.lineEnd=pc.point=v}};Bo.geo.bounds=function(){function n(n,t){x.push(M=[l=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,r){var e=pr([t*za,r*za]);if(m){var u=dr(m,e),i=[u[1],-u[0],0],o=dr(i,u);xr(o),o=Mr(o);var c=t-p,s=c>0?1:-1,v=o[0]*La*s,d=ca(c)>180;if(d^(v>s*p&&s*t>v)){var y=o[1]*La;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>s*p&&s*t>v)){var y=-o[1]*La;f>y&&(f=y)}else f>r&&(f=r),r>g&&(g=r);d?p>t?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t):h>=l?(l>t&&(l=t),t>h&&(h=t)):t>p?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t)}else n(t,r);m=e,p=t}function r(){_.point=t}function e(){M[0]=l,M[1]=h,_.point=n,m=null}function u(n,r){if(m){var e=n-p;y+=ca(e)>180?e+(e>0?360:-360):e}else v=n,d=r;pc.point(n,r),t(n,r)}function i(){pc.lineStart()}function o(){u(v,d),pc.lineEnd(),ca(y)>Ca&&(l=-(h=180)),M[0]=l,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function s(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var l,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:r,lineEnd:e,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,pc.polygonStart()},polygonEnd:function(){pc.polygonEnd(),_.point=n,_.lineStart=r,_.lineEnd=e,0>gc?(l=-(h=180),f=-(g=90)):y>Ca?g=90:-Ca>y&&(f=-90),M[0]=l,M[1]=h}};return function(n){g=h=-(l=f=1/0),x=[],Bo.geo.stream(n,_);var t=x.length;if(t){x.sort(c);for(var r,e=1,u=x[0],i=[u];t>e;++e)r=x[e],s(r[0],u)||s(r[1],u)?(a(u[0],r[1])>a(u[0],u[1])&&(u[1]=r[1]),a(r[0],u[1])>a(u[0],u[1])&&(u[0]=r[0])):i.push(u=r);for(var o,r,p=-1/0,t=i.length-1,e=0,u=i[t];t>=e;u=r,++e)r=i[e],(o=a(u[1],r[0]))>p&&(p=o,l=r[0],h=u[1])}return x=M=null,1/0===l||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[l,f],[h,g]]
}}(),Bo.geo.centroid=function(n){vc=dc=mc=yc=xc=Mc=_c=bc=wc=Sc=kc=0,Bo.geo.stream(n,Ec);var t=wc,r=Sc,e=kc,u=t*t+r*r+e*e;return Na>u&&(t=Mc,r=_c,e=bc,Ca>dc&&(t=mc,r=yc,e=xc),u=t*t+r*r+e*e,Na>u)?[0/0,0/0]:[Math.atan2(r,t)*La,G(e/Math.sqrt(u))*La]};var vc,dc,mc,yc,xc,Mc,_c,bc,wc,Sc,kc,Ec={sphere:v,point:br,lineStart:Sr,lineEnd:kr,polygonStart:function(){Ec.lineStart=Er},polygonEnd:function(){Ec.lineStart=Sr}},Ac=Lr(Ar,Pr,jr,[-ka,-ka/2]),Cc=1e9;Bo.geo.clipExtent=function(){var n,t,r,e,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Or(n=+a[0][0],t=+a[0][1],r=+a[1][0],e=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[r,e]]}};return o.extent([[0,0],[960,500]])},(Bo.geo.conicEqualArea=function(){return Yr(Zr)}).raw=Zr,Bo.geo.albers=function(){return Bo.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Bo.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,r(i,o),t||(e(i,o),t)||u(i,o),t}var t,r,e,u,i=Bo.geo.albers(),o=Bo.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Bo.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,r){t=[n,r]}};return n.invert=function(n){var t=i.scale(),r=i.translate(),e=(n[0]-r[0])/t,u=(n[1]-r[1])/t;return(u>=.12&&.234>u&&e>=-.425&&-.214>e?o:u>=.166&&.234>u&&e>=-.214&&-.115>e?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),r=o.stream(n),e=a.stream(n);return{point:function(n,u){t.point(n,u),r.point(n,u),e.point(n,u)},sphere:function(){t.sphere(),r.sphere(),e.sphere()},lineStart:function(){t.lineStart(),r.lineStart(),e.lineStart()},lineEnd:function(){t.lineEnd(),r.lineEnd(),e.lineEnd()},polygonStart:function(){t.polygonStart(),r.polygonStart(),e.polygonStart()},polygonEnd:function(){t.polygonEnd(),r.polygonEnd(),e.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var s=i.scale(),l=+t[0],f=+t[1];return r=i.translate(t).clipExtent([[l-.455*s,f-.238*s],[l+.455*s,f+.238*s]]).stream(c).point,e=o.translate([l-.307*s,f+.201*s]).clipExtent([[l-.425*s+Ca,f+.12*s+Ca],[l-.214*s-Ca,f+.234*s-Ca]]).stream(c).point,u=a.translate([l-.205*s,f+.212*s]).clipExtent([[l-.214*s+Ca,f+.166*s+Ca],[l-.115*s-Ca,f+.234*s-Ca]]).stream(c).point,n},n.scale(1070)};var Nc,zc,Lc,Tc,qc,Rc,Dc={point:v,lineStart:v,lineEnd:v,polygonStart:function(){zc=0,Dc.lineStart=Vr},polygonEnd:function(){Dc.lineStart=Dc.lineEnd=Dc.point=v,Nc+=ca(zc/2)}},Pc={point:$r,lineStart:v,lineEnd:v,polygonStart:v,polygonEnd:v},Uc={point:Jr,lineStart:Wr,lineEnd:Gr,polygonStart:function(){Uc.lineStart=Kr},polygonEnd:function(){Uc.point=Jr,Uc.lineStart=Wr,Uc.lineEnd=Gr}};Bo.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Bo.geo.stream(n,o)),i.result()}function t(){return o=null,n}var r,e,u,i,o,a=4.5;return n.area=function(n){return Nc=0,Bo.geo.stream(n,u(Dc)),Nc},n.centroid=function(n){return mc=yc=xc=Mc=_c=bc=wc=Sc=kc=0,Bo.geo.stream(n,u(Uc)),kc?[wc/kc,Sc/kc]:bc?[Mc/bc,_c/bc]:xc?[mc/xc,yc/xc]:[0/0,0/0]},n.bounds=function(n){return qc=Rc=-(Lc=Tc=1/0),Bo.geo.stream(n,u(Pc)),[[Lc,Tc],[qc,Rc]]},n.projection=function(n){return arguments.length?(u=(r=n)?n.stream||te(n):At,t()):r},n.context=function(n){return arguments.length?(i=null==(e=n)?new Xr:new Qr(n),"function"!=typeof a&&i.pointRadius(a),t()):e},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Bo.geo.albersUsa()).context(null)},Bo.geo.transform=function(n){return{stream:function(t){var r=new re(t);for(var e in n)r[e]=n[e];return r}}},re.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Bo.geo.projection=ue,Bo.geo.projectionMutator=ie,(Bo.geo.equirectangular=function(){return ue(ae)}).raw=ae.invert=ae,Bo.geo.rotation=function(n){function t(t){return t=n(t[0]*za,t[1]*za),t[0]*=La,t[1]*=La,t}return n=se(n[0]%360*za,n[1]*za,n.length>2?n[2]*za:0),t.invert=function(t){return t=n.invert(t[0]*za,t[1]*za),t[0]*=La,t[1]*=La,t},t},ce.invert=ae,Bo.geo.circle=function(){function n(){var n="function"==typeof e?e.apply(this,arguments):e,t=se(-n[0]*za,-n[1]*za,0).invert,u=[];return r(null,null,1,{point:function(n,r){u.push(n=t(n,r)),n[0]*=La,n[1]*=La}}),{type:"Polygon",coordinates:[u]}}var t,r,e=[0,0],u=6;return n.origin=function(t){return arguments.length?(e=t,n):e},n.angle=function(e){return arguments.length?(r=ge((t=+e)*za,u*za),n):t},n.precision=function(e){return arguments.length?(r=ge(t*za,(u=+e)*za),n):u},n.angle(90)},Bo.geo.distance=function(n,t){var r,e=(t[0]-n[0])*za,u=n[1]*za,i=t[1]*za,o=Math.sin(e),a=Math.cos(e),c=Math.sin(u),s=Math.cos(u),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((r=f*o)*r+(r=s*l-c*f*a)*r),c*l+s*f*a)},Bo.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Bo.range(Math.ceil(i/d)*d,u,d).map(h).concat(Bo.range(Math.ceil(s/m)*m,c,m).map(g)).concat(Bo.range(Math.ceil(e/p)*p,r,p).filter(function(n){return ca(n%d)>Ca}).map(l)).concat(Bo.range(Math.ceil(a/v)*v,o,v).filter(function(n){return ca(n%m)>Ca}).map(f))}var r,e,u,i,o,a,c,s,l,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(s).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],s=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),s>c&&(t=s,s=c,c=t),n.precision(y)):[[i,s],[u,c]]},n.minorExtent=function(t){return arguments.length?(e=+t[0][0],r=+t[1][0],a=+t[0][1],o=+t[1][1],e>r&&(t=e,e=r,r=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[e,a],[r,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,l=ve(a,o,90),f=de(e,r,y),h=ve(s,c,90),g=de(i,u,y),n):y},n.majorExtent([[-180,-90+Ca],[180,90-Ca]]).minorExtent([[-180,-80-Ca],[180,80+Ca]])},Bo.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||e.apply(this,arguments),r||u.apply(this,arguments)]}}var t,r,e=me,u=ye;return n.distance=function(){return Bo.geo.distance(t||e.apply(this,arguments),r||u.apply(this,arguments))},n.source=function(r){return arguments.length?(e=r,t="function"==typeof r?null:r,n):e},n.target=function(t){return arguments.length?(u=t,r="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Bo.geo.interpolate=function(n,t){return xe(n[0]*za,n[1]*za,t[0]*za,t[1]*za)},Bo.geo.length=function(n){return jc=0,Bo.geo.stream(n,Hc),jc};var jc,Hc={sphere:v,point:v,lineStart:Me,lineEnd:v,polygonStart:v,polygonEnd:v},Fc=_e(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Bo.geo.azimuthalEqualArea=function(){return ue(Fc)}).raw=Fc;var Oc=_e(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},At);(Bo.geo.azimuthalEquidistant=function(){return ue(Oc)}).raw=Oc,(Bo.geo.conicConformal=function(){return Yr(be)}).raw=be,(Bo.geo.conicEquidistant=function(){return Yr(we)}).raw=we;var Ic=_e(function(n){return 1/n},Math.atan);(Bo.geo.gnomonic=function(){return ue(Ic)}).raw=Ic,Se.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Aa]},(Bo.geo.mercator=function(){return ke(Se)}).raw=Se;var Yc=_e(function(){return 1},Math.asin);(Bo.geo.orthographic=function(){return ue(Yc)}).raw=Yc;var Zc=_e(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Bo.geo.stereographic=function(){return ue(Zc)}).raw=Zc,Ee.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Aa]},(Bo.geo.transverseMercator=function(){var n=ke(Ee),t=n.center,r=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[-n[1],n[0]])},n.rotate=function(n){return n?r([n[0],n[1],n.length>2?n[2]+90:90]):(n=r(),[n[0],n[1],n[2]-90])},n.rotate([0,0])}).raw=Ee,Bo.geom={},Bo.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=Et(r),i=Et(e),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(ze),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var s=Ne(a),l=Ne(c),f=l[0]===s[0],h=l[l.length-1]===s[s.length-1],g=[];for(t=s.length-1;t>=0;--t)g.push(n[a[s[t]][2]]);for(t=+f;t<l.length-h;++t)g.push(n[a[l[t]][2]]);return g}var r=Ae,e=Ce;return arguments.length?t(n):(t.x=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(e=n,t):e},t)},Bo.geom.polygon=function(n){return ga(n,Vc),n};var Vc=Bo.geom.polygon.prototype=[];Vc.area=function(){for(var n,t=-1,r=this.length,e=this[r-1],u=0;++t<r;)n=e,e=this[t],u+=n[1]*e[0]-n[0]*e[1];return.5*u},Vc.centroid=function(n){var t,r,e=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++e<u;)t=a,a=this[e],r=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*r,o+=(t[1]+a[1])*r;return[i*n,o*n]},Vc.clip=function(n){for(var t,r,e,u,i,o,a=qe(n),c=-1,s=this.length-qe(this),l=this[s-1];++c<s;){for(t=n.slice(),n.length=0,u=this[c],i=t[(e=t.length-a)-1],r=-1;++r<e;)o=t[r],Le(o,l,u)?(Le(i,l,u)||n.push(Te(i,o,l,u)),n.push(o)):Le(i,l,u)&&n.push(Te(i,o,l,u)),i=o;a&&n.push(n[0]),l=u}return n};var $c,Xc,Bc,Jc,Wc,Gc=[],Kc=[];Oe.prototype.prepare=function(){for(var n,t=this.edges,r=t.length;r--;)n=t[r].edge,n.b&&n.a||t.splice(r,1);return t.sort(Ye),t.length},Qe.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},nu.prototype={insert:function(n,t){var r,e,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;r=n}else this._?(n=uu(this._),t.P=null,t.N=n,n.P=n.L=t,r=n):(t.P=t.N=null,this._=t,r=null);for(t.L=t.R=null,t.U=r,t.C=!0,n=t;r&&r.C;)e=r.U,r===e.L?(u=e.R,u&&u.C?(r.C=u.C=!1,e.C=!0,n=e):(n===r.R&&(ru(this,r),n=r,r=n.U),r.C=!1,e.C=!0,eu(this,e))):(u=e.L,u&&u.C?(r.C=u.C=!1,e.C=!0,n=e):(n===r.L&&(eu(this,r),n=r,r=n.U),r.C=!1,e.C=!0,ru(this,e))),r=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,r,e,u=n.U,i=n.L,o=n.R;if(r=i?o?uu(o):i:o,u?u.L===n?u.L=r:u.R=r:this._=r,i&&o?(e=r.C,r.C=n.C,r.L=i,i.U=r,r!==o?(u=r.U,r.U=n.U,n=r.R,u.L=n,r.R=o,o.U=r):(r.U=u,u=r,n=r.R)):(e=n.C,n=r),n&&(n.U=u),!e){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,ru(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,eu(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,ru(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,eu(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ru(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,eu(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Bo.geom.voronoi=function(n){function t(n){var t=new Array(n.length),e=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return iu(r(n),a).cells.forEach(function(r,a){var c=r.edges,s=r.site,l=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=e&&s.x<=i&&s.y>=u&&s.y<=o?[[e,o],[i,o],[i,u],[e,u]]:[];l.point=n[a]}),t}function r(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Ca)*Ca,y:Math.round(o(n,t)/Ca)*Ca,i:t}})}var e=Ae,u=Ce,i=e,o=u,a=Qc;return n?t(n):(t.links=function(n){return iu(r(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return iu(r(n)).cells.forEach(function(r,e){for(var u,i,o=r.site,a=r.edges.sort(Ye),c=-1,s=a.length,l=a[s-1].edge,f=l.l===o?l.r:l.l;++c<s;)u=l,i=f,l=a[c].edge,f=l.l===o?l.r:l.l,e<i.i&&e<f.i&&au(o,i,f)<0&&t.push([n[e],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=Et(e=n),t):e},t.y=function(n){return arguments.length?(o=Et(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?Qc:n,t):a===Qc?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===Qc?null:a&&a[1]},t)};var Qc=[[-1e6,-1e6],[1e6,1e6]];Bo.geom.delaunay=function(n){return Bo.geom.voronoi().triangles(n)},Bo.geom.quadtree=function(n,t,r,e,u){function i(n){function i(n,t,r,e,u,i,o,a){if(!isNaN(r)&&!isNaN(e))if(n.leaf){var c=n.x,l=n.y;if(null!=c)if(ca(c-r)+ca(l-e)<.01)s(n,t,r,e,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,s(n,f,c,l,u,i,o,a),s(n,t,r,e,u,i,o,a)}else n.x=r,n.y=e,n.point=t}else s(n,t,r,e,u,i,o,a)}function s(n,t,r,e,u,o,a,c){var s=.5*(u+a),l=.5*(o+c),f=r>=s,h=e>=l,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=lu()),f?u=s:a=s,h?o=l:c=l,i(n,t,r,e,u,o,a,c)}var l,f,h,g,p,v,d,m,y,x=Et(a),M=Et(c);if(null!=t)v=t,d=r,m=e,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)l=n[g],l.x<v&&(v=l.x),l.y<d&&(d=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(g=0;p>g;++g){var _=+x(l=n[g],g),b=+M(l,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=lu();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){fu(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=l=null,k}var o,a=Ae,c=Ce;return(o=arguments.length)?(a=cu,c=su,3===o&&(u=r,e=t,r=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=r=e=u=null:(t=+n[0][0],r=+n[0][1],e=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,r],[e,u]]},i.size=function(n){return arguments.length?(null==n?t=r=e=u=null:(t=r=0,e=+n[0],u=+n[1]),i):null==t?null:[e-t,u-r]},i)},Bo.interpolateRgb=hu,Bo.interpolateObject=gu,Bo.interpolateNumber=pu,Bo.interpolateString=vu;var ns=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ts=new RegExp(ns.source,"g");Bo.interpolate=du,Bo.interpolators=[function(n,t){var r=typeof t;return("string"===r?$a.has(t)||/^(#|rgb\(|hsl\()/.test(t)?hu:vu:t instanceof rt?hu:Array.isArray(t)?mu:"object"===r&&isNaN(t)?gu:pu)(n,t)}],Bo.interpolateArray=mu;var rs=function(){return At},es=Bo.map({linear:rs,poly:Su,quad:function(){return _u},cubic:function(){return bu},sin:function(){return ku},exp:function(){return Eu},circle:function(){return Au},elastic:Cu,back:Nu,bounce:function(){return zu}}),us=Bo.map({"in":At,out:xu,"in-out":Mu,"out-in":function(n){return Mu(xu(n))}});Bo.ease=function(n){var t=n.indexOf("-"),r=t>=0?n.substring(0,t):n,e=t>=0?n.substring(t+1):"in";return r=es.get(r)||rs,e=us.get(e)||At,yu(e(r.apply(null,Jo.call(arguments,1))))},Bo.interpolateHcl=Lu,Bo.interpolateHsl=Tu,Bo.interpolateLab=qu,Bo.interpolateRound=Ru,Bo.transform=function(n){var t=Go.createElementNS(Bo.ns.prefix.svg,"g");return(Bo.transform=function(n){if(null!=n){t.setAttribute("transform",n);var r=t.transform.baseVal.consolidate()}return new Du(r?r.matrix:is)})(n)},Du.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var is={a:1,b:0,c:0,d:1,e:0,f:0};Bo.interpolateTransform=Hu,Bo.layout={},Bo.layout.bundle=function(){return function(n){for(var t=[],r=-1,e=n.length;++r<e;)t.push(Iu(n[r]));return t}},Bo.layout.chord=function(){function n(){var n,s,f,h,g,p={},v=[],d=Bo.range(i),m=[];for(r=[],e=[],n=0,h=-1;++h<i;){for(s=0,g=-1;++g<i;)s+=u[h][g];v.push(s),m.push(Bo.range(i)),n+=s}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,r){return a(u[t][n],u[t][r])})}),n=(Ea-l*i)/n,s=0,h=-1;++h<i;){for(f=s,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=s,b=s+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}e[y]={index:y,startAngle:f,endAngle:s,value:(s-f)/n},s+=l}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&r.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){r.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var r,e,u,i,o,a,c,s={},l=0;return s.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,r=e=null,s):u},s.padding=function(n){return arguments.length?(l=n,r=e=null,s):l},s.sortGroups=function(n){return arguments.length?(o=n,r=e=null,s):o},s.sortSubgroups=function(n){return arguments.length?(a=n,r=null,s):a},s.sortChords=function(n){return arguments.length?(c=n,r&&t(),s):c},s.chords=function(){return r||n(),r},s.groups=function(){return e||n(),e},s},Bo.layout.force=function(){function n(n){return function(t,r,e,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-r,c=i*i+o*o;if(c>a*a/d){if(p>c){var s=t.charge/c;n.px-=i*s,n.py-=o*s}return!0}if(t.point&&c&&p>c){var s=t.pointCharge/c;n.px-=i*s,n.py-=o*s}}return!t.charge}}function t(n){n.px=Bo.event.x,n.py=Bo.event.y,a.resume()}var r,e,u,i,o,a={},c=Bo.dispatch("start","tick","end"),s=[1,1],l=.9,f=os,h=as,g=-30,p=cs,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((e*=.99)<.005)return c.end({type:"end",alpha:e=0}),!0;var t,r,a,f,h,p,d,x,M,_=m.length,b=y.length;for(r=0;b>r;++r)a=y[r],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=e*i[r]*((p=Math.sqrt(p))-u[r])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=e*v)&&(x=s[0]/2,M=s[1]/2,r=-1,d))for(;++r<_;)a=m[r],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Ju(t=Bo.geom.quadtree(m),e,o),r=-1;++r<_;)(a=m[r]).fixed||t.visit(n(a));for(r=-1;++r<_;)a=m[r],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*l,a.y-=(a.py-(a.py=a.y))*l);c.tick({type:"tick",alpha:e})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(s=n,a):s},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(l=+n,a):l},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,e?e=n>0?n:0:n>0&&(c.start({type:"start",alpha:e=n}),Bo.timer(a.tick)),a):e},a.start=function(){function n(n,e){if(!r){for(r=new Array(c),a=0;c>a;++a)r[a]=[];for(a=0;s>a;++a){var u=y[a];r[u.source.index].push(u.target),r[u.target.index].push(u.source)}}for(var i,o=r[t],a=-1,s=o.length;++a<s;)if(!isNaN(i=o[a][n]))return i;return Math.random()*e}var t,r,e,c=m.length,l=y.length,p=s[0],v=s[1];for(t=0;c>t;++t)(e=m[t]).index=t,e.weight=0;for(t=0;l>t;++t)e=y[t],"number"==typeof e.source&&(e.source=m[e.source]),"number"==typeof e.target&&(e.target=m[e.target]),++e.source.weight,++e.target.weight;for(t=0;c>t;++t)e=m[t],isNaN(e.x)&&(e.x=n("x",p)),isNaN(e.y)&&(e.y=n("y",v)),isNaN(e.px)&&(e.px=e.x),isNaN(e.py)&&(e.py=e.y);if(u=[],"function"==typeof f)for(t=0;l>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;l>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;l>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;l>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return r||(r=Bo.behavior.drag().origin(At).on("dragstart.force",Vu).on("drag.force",t).on("dragend.force",$u)),arguments.length?(this.on("mouseover.force",Xu).on("mouseout.force",Bu).call(r),void 0):r},Bo.rebind(a,c,"on")};var os=20,as=1,cs=1/0;Bo.layout.hierarchy=function(){function n(u){var i,o=[u],a=[];for(u.depth=0;null!=(i=o.pop());)if(a.push(i),(s=r.call(n,i,i.depth))&&(c=s.length)){for(var c,s,l;--c>=0;)o.push(l=s[c]),l.parent=i,l.depth=i.depth+1;e&&(i.value=0),i.children=s}else e&&(i.value=+e.call(n,i,i.depth)||0),delete i.children;return Ku(u,function(n){var r,u;t&&(r=n.children)&&r.sort(t),e&&(u=n.parent)&&(u.value+=n.value)}),a}var t=ti,r=Qu,e=ni;return n.sort=function(r){return arguments.length?(t=r,n):t},n.children=function(t){return arguments.length?(r=t,n):r},n.value=function(t){return arguments.length?(e=t,n):e},n.revalue=function(t){return e&&(Gu(t,function(n){n.children&&(n.value=0)}),Ku(t,function(t){var r;t.children||(t.value=+e.call(n,t,t.depth)||0),(r=t.parent)&&(r.value+=t.value)})),t},n},Bo.layout.partition=function(){function n(t,r,e,u){var i=t.children;if(t.x=r,t.y=t.depth*u,t.dx=e,t.dy=u,i&&(o=i.length)){var o,a,c,s=-1;for(e=t.value?e/t.value:0;++s<o;)n(a=i[s],r,c=a.value*e,u),r+=c}}function t(n){var r=n.children,e=0;if(r&&(u=r.length))for(var u,i=-1;++i<u;)e=Math.max(e,t(r[i]));return 1+e}function r(r,i){var o=e.call(this,r,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var e=Bo.layout.hierarchy(),u=[1,1];return r.size=function(n){return arguments.length?(u=n,r):u},Wu(r,e)},Bo.layout.pie=function(){function n(i){var o=i.map(function(r,e){return+t.call(n,r,e)}),a=+("function"==typeof e?e.apply(this,arguments):e),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Bo.sum(o),s=Bo.range(i.length);null!=r&&s.sort(r===ss?function(n,t){return o[t]-o[n]}:function(n,t){return r(i[n],i[t])});var l=[];return s.forEach(function(n){var t;l[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),l}var t=Number,r=ss,e=0,u=Ea;return n.value=function(r){return arguments.length?(t=r,n):t},n.sort=function(t){return arguments.length?(r=t,n):r},n.startAngle=function(t){return arguments.length?(e=t,n):e},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var ss={};Bo.layout.stack=function(){function n(a,c){var s=a.map(function(r,e){return t.call(n,r,e)}),l=s.map(function(t){return t.map(function(t,r){return[i.call(n,t,r),o.call(n,t,r)]})}),f=r.call(n,l,c);s=Bo.permute(s,f),l=Bo.permute(l,f);var h,g,p,v=e.call(n,l,c),d=s.length,m=s[0].length;for(g=0;m>g;++g)for(u.call(n,s[0][g],p=v[g],l[0][g][1]),h=1;d>h;++h)u.call(n,s[h][g],p+=l[h-1][g][1],l[h][g][1]);return a}var t=At,r=oi,e=ai,u=ii,i=ei,o=ui;return n.values=function(r){return arguments.length?(t=r,n):t},n.order=function(t){return arguments.length?(r="function"==typeof t?t:ls.get(t)||oi,n):r},n.offset=function(t){return arguments.length?(e="function"==typeof t?t:fs.get(t)||ai,n):e},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var ls=Bo.map({"inside-out":function(n){var t,r,e=n.length,u=n.map(ci),i=n.map(si),o=Bo.range(e).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,s=[],l=[];for(t=0;e>t;++t)r=o[t],c>a?(a+=i[r],s.push(r)):(c+=i[r],l.push(r));return l.reverse().concat(s)},reverse:function(n){return Bo.range(n.length).reverse()},"default":oi}),fs=Bo.map({silhouette:function(n){var t,r,e,u=n.length,i=n[0].length,o=[],a=0,c=[];for(r=0;i>r;++r){for(t=0,e=0;u>t;t++)e+=n[t][r][1];e>a&&(a=e),o.push(e)}for(r=0;i>r;++r)c[r]=(a-o[r])/2;return c},wiggle:function(n){var t,r,e,u,i,o,a,c,s,l=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=s=0,r=1;h>r;++r){for(t=0,u=0;l>t;++t)u+=n[t][r][1];for(t=0,i=0,a=f[r][0]-f[r-1][0];l>t;++t){for(e=0,o=(n[t][r][1]-n[t][r-1][1])/(2*a);t>e;++e)o+=(n[e][r][1]-n[e][r-1][1])/a;i+=o*n[t][r][1]}g[r]=c-=u?i/u*a:0,s>c&&(s=c)}for(r=0;h>r;++r)g[r]-=s;return g},expand:function(n){var t,r,e,u=n.length,i=n[0].length,o=1/u,a=[];for(r=0;i>r;++r){for(t=0,e=0;u>t;t++)e+=n[t][r][1];if(e)for(t=0;u>t;t++)n[t][r][1]/=e;else for(t=0;u>t;t++)n[t][r][1]=o}for(r=0;i>r;++r)a[r]=0;return a},zero:ai});Bo.layout.histogram=function(){function n(n,i){for(var o,a,c=[],s=n.map(r,this),l=e.call(this,s,i),f=u.call(this,l,s,i),i=-1,h=s.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=s[i],a>=l[0]&&a<=l[1]&&(o=c[Bo.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,r=Number,e=gi,u=fi;return n.value=function(t){return arguments.length?(r=t,n):r},n.range=function(t){return arguments.length?(e=Et(t),n):e},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return hi(n,t)}:Et(t),n):u},n.frequency=function(r){return arguments.length?(t=!!r,n):t},n},Bo.layout.pack=function(){function n(n,i){var o=r.call(this,n,i),a=o[0],c=u[0],s=u[1],l=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,Ku(a,function(n){n.r=+l(n.value)}),Ku(a,yi),e){var f=e*(t?1:Math.max(2*a.r/c,2*a.r/s))/2;Ku(a,function(n){n.r+=f}),Ku(a,yi),Ku(a,function(n){n.r-=f})}return _i(a,c/2,s/2,t?1:1/Math.max(2*a.r/c,2*a.r/s)),o}var t,r=Bo.layout.hierarchy().sort(pi),e=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(r){return arguments.length?(t=null==r||"function"==typeof r?r:+r,n):t},n.padding=function(t){return arguments.length?(e=+t,n):e},Wu(n,r)},Bo.layout.tree=function(){function n(n,u){var l=o.call(this,n,u),f=l[0],h=t(f);if(Ku(h,r),h.parent.m=-h.z,Gu(h,e),s)Gu(f,i);else{var g=f,p=f,v=f;Gu(f,function(n){n.x<g.x&&(g=n),n.x>p.x&&(p=n),n.depth>v.depth&&(v=n)});var d=a(g,p)/2-g.x,m=c[0]/(p.x+a(p,g)/2+d),y=c[1]/(v.depth||1);Gu(f,function(n){n.x=(n.x+d)*m,n.y=n.depth*y})}return l}function t(n){for(var t,r={A:null,children:[n]},e=[r];null!=(t=e.pop());)for(var u,i=t.children,o=0,a=i.length;a>o;++o)e.push((i[o]=u={_:i[o],parent:t,children:(u=i[o].children)&&u.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=u);return r.children[0]}function r(n){var t=n.children,r=n.parent.children,e=n.i?r[n.i-1]:null;if(t.length){Ai(n);var i=(t[0].z+t[t.length-1].z)/2;e?(n.z=e.z+a(n._,e._),n.m=n.z-i):n.z=i}else e&&(n.z=e.z+a(n._,e._));n.parent.A=u(n,e,n.parent.A||r[0])}function e(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function u(n,t,r){if(t){for(var e,u=n,i=n,o=t,c=u.parent.children[0],s=u.m,l=i.m,f=o.m,h=c.m;o=ki(o),u=Si(u),o&&u;)c=Si(c),i=ki(i),i.a=n,e=o.z+f-u.z-s+a(o._,u._),e>0&&(Ei(Ci(o,n,r),n,e),s+=e,l+=e),f+=o.m,s+=u.m,h+=c.m,l+=i.m;o&&!ki(i)&&(i.t=o,i.m+=f-l),u&&!Si(c)&&(c.t=u,c.m+=s-h,r=n)}return r}function i(n){n.x*=c[0],n.y=n.depth*c[1]}var o=Bo.layout.hierarchy().sort(null).value(null),a=wi,c=[1,1],s=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(s=null==(c=t)?i:null,n):s?null:c},n.nodeSize=function(t){return arguments.length?(s=null==(c=t)?null:i,n):s?c:null},Wu(n,o)},Bo.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],s=0;Ku(c,function(n){var t=n.children;t&&t.length?(n.x=zi(t),n.y=Ni(t)):(n.x=o?s+=r(n,o):0,n.y=0,o=n)});var l=Li(c),f=Ti(c),h=l.x-r(l,f)/2,g=f.x+r(f,l)/2;return Ku(c,u?function(n){n.x=(n.x-c.x)*e[0],n.y=(c.y-n.y)*e[1]}:function(n){n.x=(n.x-h)/(g-h)*e[0],n.y=(1-(c.y?n.y/c.y:1))*e[1]}),a}var t=Bo.layout.hierarchy().sort(null).value(null),r=wi,e=[1,1],u=!1;return n.separation=function(t){return arguments.length?(r=t,n):r},n.size=function(t){return arguments.length?(u=null==(e=t),n):u?null:e},n.nodeSize=function(t){return arguments.length?(u=null!=(e=t),n):u?e:null},Wu(n,t)},Bo.layout.treemap=function(){function n(n,t){for(var r,e,u=-1,i=n.length;++u<i;)e=(r=n[u]).value*(0>t?0:t),r.area=isNaN(e)||0>=e?0:e}function t(r){var i=r.children;if(i&&i.length){var o,a,c,s=f(r),l=[],h=i.slice(),p=1/0,v="slice"===g?s.dx:"dice"===g?s.dy:"slice-dice"===g?1&r.depth?s.dy:s.dx:Math.min(s.dx,s.dy);for(n(h,s.dx*s.dy/r.value),l.area=0;(c=h.length)>0;)l.push(o=h[c-1]),l.area+=o.area,"squarify"!==g||(a=e(l,v))<=p?(h.pop(),p=a):(l.area-=l.pop().area,u(l,v,s,!1),v=Math.min(s.dx,s.dy),l.length=l.area=0,p=1/0);l.length&&(u(l,v,s,!0),l.length=l.area=0),i.forEach(t)}}function r(t){var e=t.children;if(e&&e.length){var i,o=f(t),a=e.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);e.forEach(r)}}function e(n,t){for(var r,e=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(r=n[o].area)&&(i>r&&(i=r),r>u&&(u=r));return e*=e,t*=t,e?Math.max(t*u*p/e,e/(t*i*p)):1/0}function u(n,t,r,e){var u,i=-1,o=n.length,a=r.x,s=r.y,l=t?c(n.area/t):0;if(t==r.dx){for((e||l>r.dy)&&(l=r.dy);++i<o;)u=n[i],u.x=a,u.y=s,u.dy=l,a+=u.dx=Math.min(r.x+r.dx-a,l?c(u.area/l):0);u.z=!0,u.dx+=r.x+r.dx-a,r.y+=l,r.dy-=l}else{for((e||l>r.dx)&&(l=r.dx);++i<o;)u=n[i],u.x=a,u.y=s,u.dx=l,s+=u.dy=Math.min(r.y+r.dy-s,l?c(u.area/l):0);u.z=!1,u.dy+=r.y+r.dy-s,r.x+=l,r.dx-=l}}function i(e){var u=o||a(e),i=u[0];return i.x=0,i.y=0,i.dx=s[0],i.dy=s[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?r:t)(i),h&&(o=u),u}var o,a=Bo.layout.hierarchy(),c=Math.round,s=[1,1],l=null,f=qi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(s=n,i):s},i.padding=function(n){function t(t){var r=n.call(i,t,t.depth);return null==r?qi(t):Ri(t,"number"==typeof r?[r,r,r,r]:r)}function r(t){return Ri(t,n)}if(!arguments.length)return l;var e;return f=null==(l=n)?qi:"function"==(e=typeof n)?t:"number"===e?(n=[n,n,n,n],r):r,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Wu(i,a)},Bo.random={normal:function(n,t){var r=arguments.length;return 2>r&&(t=1),1>r&&(n=0),function(){var r,e,u;do r=2*Math.random()-1,e=2*Math.random()-1,u=r*r+e*e;while(!u||u>1);return n+t*r*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Bo.random.normal.apply(Bo,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Bo.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,r=0;n>r;r++)t+=Math.random();return t}}},Bo.scale={};var hs={floor:At,ceil:At};Bo.scale.linear=function(){return Oi([0,1],[0,1],du,!1)};var gs={s:1,g:1,p:1,r:1,e:1};Bo.scale.log=function(){return Ji(Bo.scale.linear().domain([0,1]),10,!0,[1,10])};var ps=Bo.format(".0e"),vs={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Bo.scale.pow=function(){return Wi(Bo.scale.linear(),1,[0,1])},Bo.scale.sqrt=function(){return Bo.scale.pow().exponent(.5)},Bo.scale.ordinal=function(){return Ki([],{t:"range",a:[[]]})},Bo.scale.category10=function(){return Bo.scale.ordinal().range(ds)},Bo.scale.category20=function(){return Bo.scale.ordinal().range(ms)},Bo.scale.category20b=function(){return Bo.scale.ordinal().range(ys)},Bo.scale.category20c=function(){return Bo.scale.ordinal().range(xs)};var ds=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(mt),ms=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(mt),ys=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(mt),xs=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(mt);Bo.scale.quantile=function(){return Qi([],[])},Bo.scale.quantize=function(){return no(0,1,[0,1])},Bo.scale.threshold=function(){return to([.5],[0,1])},Bo.scale.identity=function(){return ro([0,1])},Bo.svg={},Bo.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=r.apply(this,arguments),o=e.apply(this,arguments)+Ms,a=u.apply(this,arguments)+Ms,c=(o>a&&(c=o,o=a,a=c),a-o),s=ka>c?"0":"1",l=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);
return c>=_s?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+s+",0 "+n*l+","+n*f+"Z":"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=eo,r=uo,e=io,u=oo;return n.innerRadius=function(r){return arguments.length?(t=Et(r),n):t},n.outerRadius=function(t){return arguments.length?(r=Et(t),n):r},n.startAngle=function(t){return arguments.length?(e=Et(t),n):e},n.endAngle=function(t){return arguments.length?(u=Et(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+r.apply(this,arguments))/2,i=(e.apply(this,arguments)+u.apply(this,arguments))/2+Ms;return[Math.cos(i)*n,Math.sin(i)*n]},n};var Ms=-Aa,_s=Ea-Ca;Bo.svg.line=function(){return ao(At)};var bs=Bo.map({linear:co,"linear-closed":so,step:lo,"step-before":fo,"step-after":ho,basis:xo,"basis-open":Mo,"basis-closed":_o,bundle:bo,cardinal:vo,"cardinal-open":go,"cardinal-closed":po,monotone:Co});bs.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var ws=[0,2/3,1/3,0],Ss=[0,1/3,2/3,0],ks=[0,1/6,2/3,1/6];Bo.svg.line.radial=function(){var n=ao(No);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},fo.reverse=ho,ho.reverse=fo,Bo.svg.area=function(){return zo(At)},Bo.svg.area.radial=function(){var n=zo(No);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Bo.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),s=t(this,o,n,a);return"M"+c.p0+e(c.r,c.p1,c.a1-c.a0)+(r(c,s)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,s.r,s.p0)+e(s.r,s.p1,s.a1-s.a0)+u(s.r,s.p1,c.r,c.p0))+"Z"}function t(n,t,r,e){var u=t.call(n,r,e),i=a.call(n,u,e),o=c.call(n,u,e)+Ms,l=s.call(n,u,e)+Ms;return{r:i,a0:o,a1:l,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(l),i*Math.sin(l)]}}function r(n,t){return n.a0==t.a0&&n.a1==t.a1}function e(n,t,r){return"A"+n+","+n+" 0 "+ +(r>ka)+",1 "+t}function u(n,t,r,e){return"Q 0,0 "+e}var i=me,o=ye,a=Lo,c=io,s=oo;return n.radius=function(t){return arguments.length?(a=Et(t),n):a},n.source=function(t){return arguments.length?(i=Et(t),n):i},n.target=function(t){return arguments.length?(o=Et(t),n):o},n.startAngle=function(t){return arguments.length?(c=Et(t),n):c},n.endAngle=function(t){return arguments.length?(s=Et(t),n):s},n},Bo.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=r.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(e),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=me,r=ye,e=To;return n.source=function(r){return arguments.length?(t=Et(r),n):t},n.target=function(t){return arguments.length?(r=Et(t),n):r},n.projection=function(t){return arguments.length?(e=t,n):e},n},Bo.svg.diagonal.radial=function(){var n=Bo.svg.diagonal(),t=To,r=n.projection;return n.projection=function(n){return arguments.length?r(qo(t=n)):t},n},Bo.svg.symbol=function(){function n(n,e){return(Es.get(t.call(this,n,e))||Po)(r.call(this,n,e))}var t=Do,r=Ro;return n.type=function(r){return arguments.length?(t=Et(r),n):t},n.size=function(t){return arguments.length?(r=Et(t),n):r},n};var Es=Bo.map({circle:Po,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*zs)),r=t*zs;return"M0,"+-t+"L"+r+",0"+" 0,"+t+" "+-r+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Ns),r=t*Ns/2;return"M0,"+r+"L"+t+","+-r+" "+-t+","+-r+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Ns),r=t*Ns/2;return"M0,"+-r+"L"+t+","+r+" "+-t+","+r+"Z"}});Bo.svg.symbolTypes=Es.keys();var As,Cs,Ns=Math.sqrt(3),zs=Math.tan(30*za),Ls=[],Ts=0;Ls.call=ya.call,Ls.empty=ya.empty,Ls.node=ya.node,Ls.size=ya.size,Bo.transition=function(n){return arguments.length?As?n.transition():n:_a.transition()},Bo.transition.prototype=Ls,Ls.select=function(n){var t,r,e,u=this.id,i=[];n=b(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],s=-1,l=c.length;++s<l;)(e=c[s])&&(r=n.call(e,e.__data__,s,o))?("__data__"in e&&(r.__data__=e.__data__),Fo(r,s,u,e.__transition__[u]),t.push(r)):t.push(null)}return Uo(i,u)},Ls.selectAll=function(n){var t,r,e,u,i,o=this.id,a=[];n=w(n);for(var c=-1,s=this.length;++c<s;)for(var l=this[c],f=-1,h=l.length;++f<h;)if(e=l[f]){i=e.__transition__[o],r=n.call(e,e.__data__,f,c),a.push(t=[]);for(var g=-1,p=r.length;++g<p;)(u=r[g])&&Fo(u,g,o,i),t.push(u)}return Uo(a,o)},Ls.filter=function(n){var t,r,e,u=[];"function"!=typeof n&&(n=R(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var r=this[i],a=0,c=r.length;c>a;a++)(e=r[a])&&n.call(e,e.__data__,a,i)&&t.push(e)}return Uo(u,this.id)},Ls.tween=function(n,t){var r=this.id;return arguments.length<2?this.node().__transition__[r].tween.get(n):P(this,null==t?function(t){t.__transition__[r].tween.remove(n)}:function(e){e.__transition__[r].tween.set(n,t)})},Ls.attr=function(n,t){function r(){this.removeAttribute(a)}function e(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?r:(n+="",function(){var t,r=this.getAttribute(a);return r!==n&&(t=o(r,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?e:(n+="",function(){var t,r=this.getAttributeNS(a.space,a.local);return r!==n&&(t=o(r,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Hu:du,a=Bo.ns.qualify(n);return jo(this,"attr."+n,t,a.local?i:u)},Ls.attrTween=function(n,t){function r(n,r){var e=t.call(this,n,r,this.getAttribute(u));return e&&function(n){this.setAttribute(u,e(n))}}function e(n,r){var e=t.call(this,n,r,this.getAttributeNS(u.space,u.local));return e&&function(n){this.setAttributeNS(u.space,u.local,e(n))}}var u=Bo.ns.qualify(n);return this.tween("attr."+n,u.local?e:r)},Ls.style=function(n,t,r){function e(){this.style.removeProperty(n)}function u(t){return null==t?e:(t+="",function(){var e,u=Qo.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(e=du(u,t),function(t){this.style.setProperty(n,e(t),r)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(r in n)this.style(r,n[r],t);return this}r=""}return jo(this,"style."+n,t,u)},Ls.styleTween=function(n,t,r){function e(e,u){var i=t.call(this,e,u,Qo.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,e)},Ls.text=function(n){return jo(this,"text",n,Ho)},Ls.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Ls.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Bo.ease.apply(Bo,arguments)),P(this,function(r){r.__transition__[t].ease=n}))},Ls.delay=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].delay:P(this,"function"==typeof n?function(r,e,u){r.__transition__[t].delay=+n.call(r,r.__data__,e,u)}:(n=+n,function(r){r.__transition__[t].delay=n}))},Ls.duration=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].duration:P(this,"function"==typeof n?function(r,e,u){r.__transition__[t].duration=Math.max(1,n.call(r,r.__data__,e,u))}:(n=Math.max(1,n),function(r){r.__transition__[t].duration=n}))},Ls.each=function(n,t){var r=this.id;if(arguments.length<2){var e=Cs,u=As;As=r,P(this,function(t,e,u){Cs=t.__transition__[r],n.call(t,t.__data__,e,u)}),Cs=e,As=u}else P(this,function(e){var u=e.__transition__[r];(u.event||(u.event=Bo.dispatch("start","end"))).on(n,t)});return this},Ls.transition=function(){for(var n,t,r,e,u=this.id,i=++Ts,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],s=0,l=t.length;l>s;s++)(r=t[s])&&(e=Object.create(r.__transition__[u]),e.delay+=e.duration,Fo(r,s,i,e)),n.push(r)}return Uo(o,i)},Bo.svg.axis=function(){function n(n){n.each(function(){var n,s=Bo.select(this),l=this.__chart__||r,f=this.__chart__=r.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):At:t,p=s.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Ca),d=Bo.transition(p.exit()).style("opacity",Ca).remove(),m=Bo.transition(p.order()).style("opacity",1),y=Pi(f),x=s.selectAll(".domain").data([0]),M=(x.enter().append("path").attr("class","domain"),Bo.transition(x));v.append("line"),v.append("text");var _=v.select("line"),b=m.select("line"),w=p.select("text").text(g),S=v.select("text"),k=m.select("text");switch(e){case"bottom":n=Oo,_.attr("y2",u),S.attr("y",Math.max(u,0)+o),b.attr("x2",0).attr("y2",u),k.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+i+"V0H"+y[1]+"V"+i);break;case"top":n=Oo,_.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),b.attr("x2",0).attr("y2",-u),k.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+-i+"V0H"+y[1]+"V"+-i);break;case"left":n=Io,_.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),b.attr("x2",-u).attr("y2",0),k.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),M.attr("d","M"+-i+","+y[0]+"H0V"+y[1]+"H"+-i);break;case"right":n=Io,_.attr("x2",u),S.attr("x",Math.max(u,0)+o),b.attr("x2",u).attr("y2",0),k.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),M.attr("d","M"+i+","+y[0]+"H0V"+y[1]+"H"+i)}if(f.rangeBand){var E=f,A=E.rangeBand()/2;l=f=function(n){return E(n)+A}}else l.rangeBand?l=f:d.call(n,f);v.call(n,l),m.call(n,f)})}var t,r=Bo.scale.linear(),e=qs,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(r=t,n):r},n.orient=function(t){return arguments.length?(e=t in Rs?t+"":qs,n):e},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(r){return arguments.length?(t=r,n):t},n.tickSize=function(t){var r=arguments.length;return r?(u=+t,i=+arguments[r-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var qs="bottom",Rs={top:1,right:1,bottom:1,left:1};Bo.svg.brush=function(){function n(i){i.each(function(){var i=Bo.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,At);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Ds[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,f=Bo.transition(i),h=Bo.transition(o);c&&(l=Pi(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(f)),s&&(l=Pi(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),e(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+l[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",l[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",l[1]-l[0])}function e(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Bo.event.keyCode&&(C||(x=null,z[0]-=l[1],z[1]-=f[1],C=2),y())}function p(){32==Bo.event.keyCode&&2==C&&(z[0]+=l[1],z[1]+=f[1],C=0,y())}function v(){var n=Bo.mouse(_),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),C||(Bo.event.altKey?(x||(x=[(l[0]+l[1])/2,(f[0]+f[1])/2]),z[0]=l[+(n[0]<x[0])],z[1]=f[+(n[1]<x[1])]):x=null),E&&d(n,c,0)&&(r(S),u=!0),A&&d(n,s,1)&&(e(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function d(n,t,r){var e,u,a=Pi(t),c=a[0],s=a[1],p=z[r],v=r?f:l,d=v[1]-v[0];return C&&(c-=p,s-=d+p),e=(r?g:h)?Math.max(c,Math.min(s,n[r])):n[r],C?u=(e+=p)+d:(x&&(p=Math.max(c,Math.min(s,2*x[r]-e))),e>p?(u=e,e=p):u=p),v[0]!=e||v[1]!=u?(r?o=null:i=null,v[0]=e,v[1]=u,!0):void 0}function m(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Bo.select("body").style("cursor",null),L.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var x,M,_=this,b=Bo.select(Bo.event.target),w=a.of(_,arguments),S=Bo.select(_),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&s,C=b.classed("extent"),N=Y(),z=Bo.mouse(_),L=Bo.select(Qo).on("keydown.brush",u).on("keyup.brush",p);if(Bo.event.changedTouches?L.on("touchmove.brush",v).on("touchend.brush",m):L.on("mousemove.brush",v).on("mouseup.brush",m),S.interrupt().selectAll("*").interrupt(),C)z[0]=l[0]-z[0],z[1]=f[0]-z[1];else if(k){var T=+/w$/.test(k),q=+/^n/.test(k);M=[l[1-T]-z[0],f[1-q]-z[1]],z[0]=l[T],z[1]=f[q]}else Bo.event.altKey&&(x=z.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Bo.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=M(n,"brushstart","brush","brushend"),c=null,s=null,l=[0,0],f=[0,0],h=!0,g=!0,p=Ps[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:l,y:f,i:i,j:o},r=this.__chart__||t;this.__chart__=t,As?Bo.select(this).transition().each("start.brush",function(){i=r.i,o=r.j,l=r.x,f=r.y,n({type:"brushstart"})}).tween("brush:brush",function(){var r=mu(l,t.x),e=mu(f,t.y);return i=o=null,function(u){l=t.x=r(u),f=t.y=e(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Ps[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,p=Ps[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(h=!!t[0],g=!!t[1]):c?h=!!t:s&&(g=!!t),n):c&&s?[h,g]:c?h:s?g:null},n.extent=function(t){var r,e,u,a,h;return arguments.length?(c&&(r=t[0],e=t[1],s&&(r=r[0],e=e[0]),i=[r,e],c.invert&&(r=c(r),e=c(e)),r>e&&(h=r,r=e,e=h),(r!=l[0]||e!=l[1])&&(l=[r,e])),s&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],s.invert&&(u=s(u),a=s(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(r=i[0],e=i[1]):(r=l[0],e=l[1],c.invert&&(r=c.invert(r),e=c.invert(e)),r>e&&(h=r,r=e,e=h))),s&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],s.invert&&(u=s.invert(u),a=s.invert(a)),u>a&&(h=u,u=a,a=h))),c&&s?[[r,u],[e,a]]:c?[r,e]:s&&[u,a])},n.clear=function(){return n.empty()||(l=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&l[0]==l[1]||!!s&&f[0]==f[1]},Bo.rebind(n,a,"on")};var Ds={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Ps=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Us=rc.format=cc.timeFormat,js=Us.utc,Hs=js("%Y-%m-%dT%H:%M:%S.%LZ");Us.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Yo:Hs,Yo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Yo.toString=Hs.toString,rc.second=Ht(function(n){return new ec(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),rc.seconds=rc.second.range,rc.seconds.utc=rc.second.utc.range,rc.minute=Ht(function(n){return new ec(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),rc.minutes=rc.minute.range,rc.minutes.utc=rc.minute.utc.range,rc.hour=Ht(function(n){var t=n.getTimezoneOffset()/60;return new ec(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),rc.hours=rc.hour.range,rc.hours.utc=rc.hour.utc.range,rc.month=Ht(function(n){return n=rc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),rc.months=rc.month.range,rc.months.utc=rc.month.utc.range;var Fs=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Os=[[rc.second,1],[rc.second,5],[rc.second,15],[rc.second,30],[rc.minute,1],[rc.minute,5],[rc.minute,15],[rc.minute,30],[rc.hour,1],[rc.hour,3],[rc.hour,6],[rc.hour,12],[rc.day,1],[rc.day,2],[rc.week,1],[rc.month,1],[rc.month,3],[rc.year,1]],Is=Us.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Ar]]),Ys={range:function(n,t,r){return Bo.range(Math.ceil(n/r)*r,+t,r).map(Vo)},floor:At,ceil:At};Os.year=rc.year,rc.scale=function(){return Zo(Bo.scale.linear(),Os,Is)};var Zs=Os.map(function(n){return[n[0].utc,n[1]]}),Vs=js.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Ar]]);Zs.year=rc.year.utc,rc.scale.utc=function(){return Zo(Bo.scale.linear(),Zs,Vs)},Bo.text=Ct(function(n){return n.responseText}),Bo.json=function(n,t){return Nt(n,"application/json",$o,t)},Bo.html=function(n,t){return Nt(n,"text/html",Xo,t)},Bo.xml=Ct(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(Bo):"object"==typeof module&&module.exports?module.exports=Bo:this.d3=Bo}();

// CHOSEN
//
/* Chosen v1.1.0 | (c) 2011-2013 by Harvest | MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md */
(function(){var a,AbstractChosen,Chosen,SelectParser,b,c={}.hasOwnProperty,d=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a};SelectParser=function(){function SelectParser(){this.options_index=0,this.parsed=[]}return SelectParser.prototype.add_node=function(a){return"OPTGROUP"===a.nodeName.toUpperCase()?this.add_group(a):this.add_option(a)},SelectParser.prototype.add_group=function(a){var b,c,d,e,f,g;for(b=this.parsed.length,this.parsed.push({array_index:b,group:!0,label:this.escapeExpression(a.label),children:0,disabled:a.disabled}),f=a.childNodes,g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(this.add_option(c,b,a.disabled));return g},SelectParser.prototype.add_option=function(a,b,c){return"OPTION"===a.nodeName.toUpperCase()?(""!==a.text?(null!=b&&(this.parsed[b].children+=1),this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:a.value,text:a.text,html:a.innerHTML,selected:a.selected,disabled:c===!0?c:a.disabled,group_array_index:b,classes:a.className,style:a.style.cssText})):this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:!0}),this.options_index+=1):void 0},SelectParser.prototype.escapeExpression=function(a){var b,c;return null==a||a===!1?"":/[\&\<\>\"\'\`]/.test(a)?(b={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},c=/&(?!\w+;)|[\<\>\"\'\`]/g,a.replace(c,function(a){return b[a]||"&amp;"})):a},SelectParser}(),SelectParser.select_to_array=function(a){var b,c,d,e,f;for(c=new SelectParser,f=a.childNodes,d=0,e=f.length;e>d;d++)b=f[d],c.add_node(b);return c.parsed},AbstractChosen=function(){function AbstractChosen(a,b){this.form_field=a,this.options=null!=b?b:{},AbstractChosen.browser_is_supported()&&(this.is_multiple=this.form_field.multiple,this.set_default_text(),this.set_default_values(),this.setup(),this.set_up_html(),this.register_observers())}return AbstractChosen.prototype.set_default_values=function(){var a=this;return this.click_test_action=function(b){return a.test_active_click(b)},this.activate_action=function(b){return a.activate_field(b)},this.active_field=!1,this.mouse_on_container=!1,this.results_showing=!1,this.result_highlighted=null,this.allow_single_deselect=null!=this.options.allow_single_deselect&&null!=this.form_field.options[0]&&""===this.form_field.options[0].text?this.options.allow_single_deselect:!1,this.disable_search_threshold=this.options.disable_search_threshold||0,this.disable_search=this.options.disable_search||!1,this.enable_split_word_search=null!=this.options.enable_split_word_search?this.options.enable_split_word_search:!0,this.group_search=null!=this.options.group_search?this.options.group_search:!0,this.search_contains=this.options.search_contains||!1,this.single_backstroke_delete=null!=this.options.single_backstroke_delete?this.options.single_backstroke_delete:!0,this.max_selected_options=this.options.max_selected_options||1/0,this.inherit_select_classes=this.options.inherit_select_classes||!1,this.display_selected_options=null!=this.options.display_selected_options?this.options.display_selected_options:!0,this.display_disabled_options=null!=this.options.display_disabled_options?this.options.display_disabled_options:!0},AbstractChosen.prototype.set_default_text=function(){return this.default_text=this.form_field.getAttribute("data-placeholder")?this.form_field.getAttribute("data-placeholder"):this.is_multiple?this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text:this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text,this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text},AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=!0},AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=!1},AbstractChosen.prototype.input_focus=function(){var a=this;if(this.is_multiple){if(!this.active_field)return setTimeout(function(){return a.container_mousedown()},50)}else if(!this.active_field)return this.activate_field()},AbstractChosen.prototype.input_blur=function(){var a=this;return this.mouse_on_container?void 0:(this.active_field=!1,setTimeout(function(){return a.blur_test()},100))},AbstractChosen.prototype.results_option_build=function(a){var b,c,d,e,f;for(b="",f=this.results_data,d=0,e=f.length;e>d;d++)c=f[d],b+=c.group?this.result_add_group(c):this.result_add_option(c),(null!=a?a.first:void 0)&&(c.selected&&this.is_multiple?this.choice_build(c):c.selected&&!this.is_multiple&&this.single_set_selected_text(c.text));return b},AbstractChosen.prototype.result_add_option=function(a){var b,c;return a.search_match&&this.include_option_in_results(a)?(b=[],a.disabled||a.selected&&this.is_multiple||b.push("active-result"),!a.disabled||a.selected&&this.is_multiple||b.push("disabled-result"),a.selected&&b.push("result-selected"),null!=a.group_array_index&&b.push("group-option"),""!==a.classes&&b.push(a.classes),c=document.createElement("li"),c.className=b.join(" "),c.style.cssText=a.style,c.setAttribute("data-option-array-index",a.array_index),c.innerHTML=a.search_text,this.outerHTML(c)):""},AbstractChosen.prototype.result_add_group=function(a){var b;return(a.search_match||a.group_match)&&a.active_options>0?(b=document.createElement("li"),b.className="group-result",b.innerHTML=a.search_text,this.outerHTML(b)):""},AbstractChosen.prototype.results_update_field=function(){return this.set_default_text(),this.is_multiple||this.results_reset_cleanup(),this.result_clear_highlight(),this.results_build(),this.results_showing?this.winnow_results():void 0},AbstractChosen.prototype.reset_single_select_options=function(){var a,b,c,d,e;for(d=this.results_data,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.selected?a.selected=!1:void 0);return e},AbstractChosen.prototype.results_toggle=function(){return this.results_showing?this.results_hide():this.results_show()},AbstractChosen.prototype.results_search=function(){return this.results_showing?this.winnow_results():this.results_show()},AbstractChosen.prototype.winnow_results=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m;for(this.no_results_clear(),e=0,g=this.get_search_text(),a=g.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),d=this.search_contains?"":"^",c=new RegExp(d+a,"i"),j=new RegExp(a,"i"),m=this.results_data,k=0,l=m.length;l>k;k++)b=m[k],b.search_match=!1,f=null,this.include_option_in_results(b)&&(b.group&&(b.group_match=!1,b.active_options=0),null!=b.group_array_index&&this.results_data[b.group_array_index]&&(f=this.results_data[b.group_array_index],0===f.active_options&&f.search_match&&(e+=1),f.active_options+=1),(!b.group||this.group_search)&&(b.search_text=b.group?b.label:b.html,b.search_match=this.search_string_match(b.search_text,c),b.search_match&&!b.group&&(e+=1),b.search_match?(g.length&&(h=b.search_text.search(j),i=b.search_text.substr(0,h+g.length)+"</em>"+b.search_text.substr(h+g.length),b.search_text=i.substr(0,h)+"<em>"+i.substr(h)),null!=f&&(f.group_match=!0)):null!=b.group_array_index&&this.results_data[b.group_array_index].search_match&&(b.search_match=!0)));return this.result_clear_highlight(),1>e&&g.length?(this.update_results_content(""),this.no_results(g)):(this.update_results_content(this.results_option_build()),this.winnow_results_set_highlight())},AbstractChosen.prototype.search_string_match=function(a,b){var c,d,e,f;if(b.test(a))return!0;if(this.enable_split_word_search&&(a.indexOf(" ")>=0||0===a.indexOf("["))&&(d=a.replace(/\[|\]/g,"").split(" "),d.length))for(e=0,f=d.length;f>e;e++)if(c=d[e],b.test(c))return!0},AbstractChosen.prototype.choices_count=function(){var a,b,c,d;if(null!=this.selected_option_count)return this.selected_option_count;for(this.selected_option_count=0,d=this.form_field.options,b=0,c=d.length;c>b;b++)a=d[b],a.selected&&(this.selected_option_count+=1);return this.selected_option_count},AbstractChosen.prototype.choices_click=function(a){return a.preventDefault(),this.results_showing||this.is_disabled?void 0:this.results_show()},AbstractChosen.prototype.keyup_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),b){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0)return this.keydown_backstroke();if(!this.pending_backstroke)return this.result_clear_highlight(),this.results_search();break;case 13:if(a.preventDefault(),this.results_showing)return this.result_select(a);break;case 27:return this.results_showing&&this.results_hide(),!0;case 9:case 38:case 40:case 16:case 91:case 17:break;default:return this.results_search()}},AbstractChosen.prototype.clipboard_event_checker=function(){var a=this;return setTimeout(function(){return a.results_search()},50)},AbstractChosen.prototype.container_width=function(){return null!=this.options.width?this.options.width:""+this.form_field.offsetWidth+"px"},AbstractChosen.prototype.include_option_in_results=function(a){return this.is_multiple&&!this.display_selected_options&&a.selected?!1:!this.display_disabled_options&&a.disabled?!1:a.empty?!1:!0},AbstractChosen.prototype.search_results_touchstart=function(a){return this.touch_started=!0,this.search_results_mouseover(a)},AbstractChosen.prototype.search_results_touchmove=function(a){return this.touch_started=!1,this.search_results_mouseout(a)},AbstractChosen.prototype.search_results_touchend=function(a){return this.touch_started?this.search_results_mouseup(a):void 0},AbstractChosen.prototype.outerHTML=function(a){var b;return a.outerHTML?a.outerHTML:(b=document.createElement("div"),b.appendChild(a),b.innerHTML)},AbstractChosen.browser_is_supported=function(){return"Microsoft Internet Explorer"===window.navigator.appName?document.documentMode>=8:/iP(od|hone)/i.test(window.navigator.userAgent)?!1:/Android/i.test(window.navigator.userAgent)&&/Mobile/i.test(window.navigator.userAgent)?!1:!0},AbstractChosen.default_multiple_text="Select Some Options",AbstractChosen.default_single_text="Select an Option",AbstractChosen.default_no_result_text="No results match",AbstractChosen}(),a=jQuery,a.fn.extend({chosen:function(b){return AbstractChosen.browser_is_supported()?this.each(function(){var c,d;c=a(this),d=c.data("chosen"),"destroy"===b&&d?d.destroy():d||c.data("chosen",new Chosen(this,b))}):this}}),Chosen=function(c){function Chosen(){return b=Chosen.__super__.constructor.apply(this,arguments)}return d(Chosen,c),Chosen.prototype.setup=function(){return this.form_field_jq=a(this.form_field),this.current_selectedIndex=this.form_field.selectedIndex,this.is_rtl=this.form_field_jq.hasClass("chosen-rtl")},Chosen.prototype.set_up_html=function(){var b,c;return b=["chosen-container"],b.push("chosen-container-"+(this.is_multiple?"multi":"single")),this.inherit_select_classes&&this.form_field.className&&b.push(this.form_field.className),this.is_rtl&&b.push("chosen-rtl"),c={"class":b.join(" "),style:"width: "+this.container_width()+";",title:this.form_field.title},this.form_field.id.length&&(c.id=this.form_field.id.replace(/[^\w]/g,"_")+"_chosen"),this.container=a("<div />",c),this.container.html(this.is_multiple?'<ul class="chosen-choices"><li class="search-field"><input type="text" value="'+this.default_text+'" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>':'<a class="chosen-single chosen-default" tabindex="-1"><span>'+this.default_text+'</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'),this.form_field_jq.hide().after(this.container),this.dropdown=this.container.find("div.chosen-drop").first(),this.search_field=this.container.find("input").first(),this.search_results=this.container.find("ul.chosen-results").first(),this.search_field_scale(),this.search_no_results=this.container.find("li.no-results").first(),this.is_multiple?(this.search_choices=this.container.find("ul.chosen-choices").first(),this.search_container=this.container.find("li.search-field").first()):(this.search_container=this.container.find("div.chosen-search").first(),this.selected_item=this.container.find(".chosen-single").first()),this.results_build(),this.set_tab_index(),this.set_label_behavior(),this.form_field_jq[0].dispatchEvent(new CustomEvent("chosen:ready",{chosen:this}))},Chosen.prototype.register_observers=function(){var a=this;return this.container.bind("mousedown.chosen",function(b){a.container_mousedown(b)}),this.container.bind("mouseup.chosen",function(b){a.container_mouseup(b)}),this.container.bind("mouseenter.chosen",function(b){a.mouse_enter(b)}),this.container.bind("mouseleave.chosen",function(b){a.mouse_leave(b)}),this.search_results.bind("mouseup.chosen",function(b){a.search_results_mouseup(b)}),this.search_results.bind("mouseover.chosen",function(b){a.search_results_mouseover(b)}),this.search_results.bind("mouseout.chosen",function(b){a.search_results_mouseout(b)}),this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen",function(b){a.search_results_mousewheel(b)}),this.search_results.bind("touchstart.chosen",function(b){a.search_results_touchstart(b)}),this.search_results.bind("touchmove.chosen",function(b){a.search_results_touchmove(b)}),this.search_results.bind("touchend.chosen",function(b){a.search_results_touchend(b)}),this.form_field_jq.bind("chosen:updated.chosen",function(b){a.results_update_field(b)}),this.form_field_jq.bind("chosen:activate.chosen",function(b){a.activate_field(b)}),this.form_field_jq.bind("chosen:open.chosen",function(b){a.container_mousedown(b)}),this.form_field_jq.bind("chosen:close.chosen",function(b){a.input_blur(b)}),this.search_field.bind("blur.chosen",function(b){a.input_blur(b)}),this.search_field.bind("keyup.chosen",function(b){a.keyup_checker(b)}),this.search_field.bind("keydown.chosen",function(b){a.keydown_checker(b)}),this.search_field.bind("focus.chosen",function(b){a.input_focus(b)}),this.search_field.bind("cut.chosen",function(b){a.clipboard_event_checker(b)}),this.search_field.bind("paste.chosen",function(b){a.clipboard_event_checker(b)}),this.is_multiple?this.search_choices.bind("click.chosen",function(b){a.choices_click(b)}):this.container.bind("click.chosen",function(a){a.preventDefault()})},Chosen.prototype.destroy=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.search_field[0].tabIndex&&(this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex),this.container.remove(),this.form_field_jq.removeData("chosen"),this.form_field_jq.show()},Chosen.prototype.search_field_disabled=function(){return this.is_disabled=this.form_field_jq[0].disabled,this.is_disabled?(this.container.addClass("chosen-disabled"),this.search_field[0].disabled=!0,this.is_multiple||this.selected_item.unbind("focus.chosen",this.activate_action),this.close_field()):(this.container.removeClass("chosen-disabled"),this.search_field[0].disabled=!1,this.is_multiple?void 0:this.selected_item.bind("focus.chosen",this.activate_action))},Chosen.prototype.container_mousedown=function(b){return this.is_disabled||(b&&"mousedown"===b.type&&!this.results_showing&&b.preventDefault(),null!=b&&a(b.target).hasClass("search-choice-close"))?void 0:(this.active_field?this.is_multiple||!b||a(b.target)[0]!==this.selected_item[0]&&!a(b.target).parents("a.chosen-single").length||(b.preventDefault(),this.results_toggle()):(this.is_multiple&&this.search_field.val(""),a(this.container[0].ownerDocument).bind("click.chosen",this.click_test_action),this.results_show()),this.activate_field())},Chosen.prototype.container_mouseup=function(a){return"ABBR"!==a.target.nodeName||this.is_disabled?void 0:this.results_reset(a)},Chosen.prototype.search_results_mousewheel=function(a){var b;return a.originalEvent&&(b=-a.originalEvent.wheelDelta||a.originalEvent.detail),null!=b?(a.preventDefault(),"DOMMouseScroll"===a.type&&(b=40*b),this.search_results.scrollTop(b+this.search_results.scrollTop())):void 0},Chosen.prototype.blur_test=function(){return!this.active_field&&this.container.hasClass("chosen-container-active")?this.close_field():void 0},Chosen.prototype.close_field=function(){return a(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action),this.active_field=!1,this.results_hide(),this.container.removeClass("chosen-container-active"),this.clear_backstroke(),this.show_search_field_default(),this.search_field_scale()},Chosen.prototype.activate_field=function(){return this.container.addClass("chosen-container-active"),this.active_field=!0,this.search_field.val(this.search_field.val()),this.search_field.focus()},Chosen.prototype.test_active_click=function(b){var c;return c=a(b.target).closest(".chosen-container"),c.length&&this.container[0]===c[0]?this.active_field=!0:this.close_field()},Chosen.prototype.results_build=function(){return this.parsing=!0,this.selected_option_count=null,this.results_data=SelectParser.select_to_array(this.form_field),this.is_multiple?this.search_choices.find("li.search-choice").remove():this.is_multiple||(this.single_set_selected_text(),this.disable_search||this.form_field.options.length<=this.disable_search_threshold?(this.search_field[0].readOnly=!0,this.container.addClass("chosen-container-single-nosearch")):(this.search_field[0].readOnly=!1,this.container.removeClass("chosen-container-single-nosearch"))),this.update_results_content(this.results_option_build({first:!0})),this.search_field_disabled(),this.show_search_field_default(),this.search_field_scale(),this.parsing=!1},Chosen.prototype.result_do_highlight=function(a){var b,c,d,e,f;if(a.length){if(this.result_clear_highlight(),this.result_highlight=a,this.result_highlight.addClass("highlighted"),d=parseInt(this.search_results.css("maxHeight"),10),f=this.search_results.scrollTop(),e=d+f,c=this.result_highlight.position().top+this.search_results.scrollTop(),b=c+this.result_highlight.outerHeight(),b>=e)return this.search_results.scrollTop(b-d>0?b-d:0);if(f>c)return this.search_results.scrollTop(c)}},Chosen.prototype.result_clear_highlight=function(){return this.result_highlight&&this.result_highlight.removeClass("highlighted"),this.result_highlight=null},Chosen.prototype.results_show=function(){return this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq[0].dispatchEvent(new CustomEvent("chosen:maxselected",{chosen:this})),!1):(this.container.addClass("chosen-with-drop"),this.results_showing=!0,this.search_field.focus(),this.search_field.val(this.search_field.val()),this.winnow_results(),this.form_field_jq[0].dispatchEvent(new CustomEvent("chosen:showing_dropdown",{chosen:this})))},Chosen.prototype.update_results_content=function(a){return this.search_results.html(a)},Chosen.prototype.results_hide=function(){return this.results_showing&&(this.result_clear_highlight(),this.container.removeClass("chosen-with-drop"),this.form_field_jq[0].dispatchEvent(new CustomEvent("chosen:hiding_dropdown",{chosen:this}))),this.results_showing=!1},Chosen.prototype.set_tab_index=function(){var a;return this.form_field.tabIndex?(a=this.form_field.tabIndex,this.form_field.tabIndex=-1,this.search_field[0].tabIndex=a):void 0},Chosen.prototype.set_label_behavior=function(){var b=this;return this.form_field_label=this.form_field_jq.parents("label"),!this.form_field_label.length&&this.form_field.id.length&&(this.form_field_label=a("label[for='"+this.form_field.id+"']")),this.form_field_label.length>0?this.form_field_label.bind("click.chosen",function(a){return b.is_multiple?b.container_mousedown(a):b.activate_field()}):void 0},Chosen.prototype.show_search_field_default=function(){return this.is_multiple&&this.choices_count()<1&&!this.active_field?(this.search_field.val(this.default_text),this.search_field.addClass("default")):(this.search_field.val(""),this.search_field.removeClass("default"))},Chosen.prototype.search_results_mouseup=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c.length?(this.result_highlight=c,this.result_select(b),this.search_field.focus()):void 0},Chosen.prototype.search_results_mouseover=function(b){var c;return c=a(b.target).hasClass("active-result")?a(b.target):a(b.target).parents(".active-result").first(),c?this.result_do_highlight(c):void 0},Chosen.prototype.search_results_mouseout=function(b){return a(b.target).hasClass("active-result")?this.result_clear_highlight():void 0},Chosen.prototype.choice_build=function(b){var c,d,e=this;return c=a("<li />",{"class":"search-choice"}).html("<span>"+b.html+"</span>"),b.disabled?c.addClass("search-choice-disabled"):(d=a("<a />",{"class":"search-choice-close","data-option-array-index":b.array_index}),d.bind("click.chosen",function(a){return e.choice_destroy_link_click(a)}),c.append(d)),this.search_container.before(c)},Chosen.prototype.choice_destroy_link_click=function(b){return b.preventDefault(),b.stopPropagation(),this.is_disabled?void 0:this.choice_destroy(a(b.target))},Chosen.prototype.choice_destroy=function(a){return this.result_deselect(a[0].getAttribute("data-option-array-index"))?(this.show_search_field_default(),this.is_multiple&&this.choices_count()>0&&this.search_field.val().length<1&&this.results_hide(),a.parents("li").first().remove(),this.search_field_scale()):void 0},Chosen.prototype.results_reset=function(){return this.reset_single_select_options(),this.form_field.options[0].selected=!0,this.single_set_selected_text(),this.show_search_field_default(),this.results_reset_cleanup(),this.form_field_jq[0].dispatchEvent(new Event("change")),this.active_field?this.results_hide():void 0},Chosen.prototype.results_reset_cleanup=function(){return this.current_selectedIndex=this.form_field.selectedIndex,this.selected_item.find("abbr").remove()},Chosen.prototype.result_select=function(a){var b,c;return this.result_highlight?(b=this.result_highlight,this.result_clear_highlight(),this.is_multiple&&this.max_selected_options<=this.choices_count()?(this.form_field_jq[0].dispatchEvent(new CustomEvent("chosen:maxselected",{chosen:this})),!1):(this.is_multiple?b.removeClass("active-result"):this.reset_single_select_options(),c=this.results_data[b[0].getAttribute("data-option-array-index")],c.selected=!0,this.form_field.options[c.options_index].selected=!0,this.selected_option_count=null,this.is_multiple?this.choice_build(c):this.single_set_selected_text(c.text),(a.metaKey||a.ctrlKey)&&this.is_multiple||this.results_hide(),this.search_field.val(""),(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex)&&this.form_field_jq[0].dispatchEvent(new CustomEvent("change",{selected:this.form_field.options[c.options_index].value})),this.current_selectedIndex=this.form_field.selectedIndex,this.search_field_scale())):void 0},Chosen.prototype.single_set_selected_text=function(a){return null==a&&(a=this.default_text),a===this.default_text?this.selected_item.addClass("chosen-default"):(this.single_deselect_control_build(),this.selected_item.removeClass("chosen-default")),this.selected_item.find("span").text(a)},Chosen.prototype.result_deselect=function(a){var b;return b=this.results_data[a],this.form_field.options[b.options_index].disabled?!1:(b.selected=!1,this.form_field.options[b.options_index].selected=!1,this.selected_option_count=null,this.result_clear_highlight(),this.results_showing&&this.winnow_results(),this.form_field_jq[0].dispatchEvent(new CustomEvent("change",{deselected:this.form_field.options[b.options_index].value})),this.search_field_scale(),!0)},Chosen.prototype.single_deselect_control_build=function(){return this.allow_single_deselect?(this.selected_item.find("abbr").length||this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'),this.selected_item.addClass("chosen-single-with-deselect")):void 0},Chosen.prototype.get_search_text=function(){return this.search_field.val()===this.default_text?"":a("<div/>").text(a.trim(this.search_field.val())).html()},Chosen.prototype.winnow_results_set_highlight=function(){var a,b;return b=this.is_multiple?[]:this.search_results.find(".result-selected.active-result"),a=b.length?b.first():this.search_results.find(".active-result").first(),null!=a?this.result_do_highlight(a):void 0},Chosen.prototype.no_results=function(b){var c;return c=a('<li class="no-results">'+this.results_none_found+' "<span></span>"</li>'),c.find("span").first().html(b),this.search_results.append(c),this.form_field_jq[0].dispatchEvent(new CustomEvent("chosen:no_results",{chosen:this}))},Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove()},Chosen.prototype.keydown_arrow=function(){var a;return this.results_showing&&this.result_highlight?(a=this.result_highlight.nextAll("li.active-result").first())?this.result_do_highlight(a):void 0:this.results_show()},Chosen.prototype.keyup_arrow=function(){var a;return this.results_showing||this.is_multiple?this.result_highlight?(a=this.result_highlight.prevAll("li.active-result"),a.length?this.result_do_highlight(a.first()):(this.choices_count()>0&&this.results_hide(),this.result_clear_highlight())):void 0:this.results_show()},Chosen.prototype.keydown_backstroke=function(){var a;return this.pending_backstroke?(this.choice_destroy(this.pending_backstroke.find("a").first()),this.clear_backstroke()):(a=this.search_container.siblings("li.search-choice").last(),a.length&&!a.hasClass("search-choice-disabled")?(this.pending_backstroke=a,this.single_backstroke_delete?this.keydown_backstroke():this.pending_backstroke.addClass("search-choice-focus")):void 0)},Chosen.prototype.clear_backstroke=function(){return this.pending_backstroke&&this.pending_backstroke.removeClass("search-choice-focus"),this.pending_backstroke=null},Chosen.prototype.keydown_checker=function(a){var b,c;switch(b=null!=(c=a.which)?c:a.keyCode,this.search_field_scale(),8!==b&&this.pending_backstroke&&this.clear_backstroke(),b){case 8:this.backstroke_length=this.search_field.val().length;break;case 9:this.results_showing&&!this.is_multiple&&this.result_select(a),this.mouse_on_container=!1;break;case 13:a.preventDefault();break;case 38:a.preventDefault(),this.keyup_arrow();break;case 40:a.preventDefault(),this.keydown_arrow()}},Chosen.prototype.search_field_scale=function(){var b,c,d,e,f,g,h,i,j;if(this.is_multiple){for(d=0,h=0,f="position:absolute; left: -1000px; top: -1000px; display:none;",g=["font-size","font-style","font-weight","font-family","line-height","text-transform","letter-spacing"],i=0,j=g.length;j>i;i++)e=g[i],f+=e+":"+this.search_field.css(e)+";";return b=a("<div />",{style:f}),b.text(this.search_field.val()),a("body").append(b),h=b.width()+25,b.remove(),c=this.container.outerWidth(),h>c-10&&(h=c-10),this.search_field.css({width:h+"px"})}},Chosen}(AbstractChosen)}).call(this);

// PUBSUB
//
/*! Tiny Pub/Sub - v0.7.0 - 2013-01-29
* https://github.com/cowboy/jquery-tiny-pubsub
* Copyright (c) 2013 "Cowboy" Ben Alman; Licensed MIT */
(function($) {

  var o = $({});

  $.sub = function() {
    o.on.apply(o, arguments);
  };

  $.unsub = function() {
    o.off.apply(o, arguments);
  };

  $.pub = function() {
    o.trigger.apply(o, arguments);
  };

}(jQuery));

// PLOTTER
//
window.Plotter = {};

// Generated by CoffeeScript 1.7.1
(function() {
  var cp;

  cp = $(".chart-pane");

  Plotter.settings = {
    url: {
      dataset: "data/clean-dataset.08-13.json"
    },
    chart: {
      padding: 60,
      height: cp.height(),
      width: cp.width()
    },
    posColors: {
      QB: "#3498db",
      RB: "#2ecc71",
      TE: "#f1c40f",
      WR: "#e67e22"
    },
    abbrToStat: [
      {
        Passing: {
          passComp: "Pass Completions",
          passAtt: "Pass Attempts",
          passYds: "Pass Yards",
          passTD: "Pass Touchdowns",
          passINT: "Interceptions"
        },
        Rushing: {
          rushAtt: "Rushing Attempts",
          rushYds: "Rushing Yards",
          rushTD: "Rushing Touchdowns",
          rushYPA: "Yards Per Rush"
        },
        Receiving: {
          recs: "Receptions",
          recYards: "Receiving Yards",
          recYPR: "Yards Per Reception",
          recTD: "Receiving Touchdowns"
        },
        Totals: {
          scrimYds: "Total Scrimmage Yards",
          totalTD: "Total Touchdowns",
          totalTouches: "Total Touches"
        },
        Fantasy: {
          fantPt: "Fantasy Points",
          fantPos: "Position",
          posRank: "Fantasy Position Rank",
          VBD: "VBD Points",
          ovRank: "Overall VBD Rank"
        },
        Other: {
          season: "Season",
          age: "Age",
          gamesPlayed: "Games Played",
          gamesStarted: "Games Started"
        }
      }
    ],
    statToAbbr: {
      "Pass Completions": "passComp",
      "Pass Attempts": "passAtt",
      "Pass Yards": "passYds",
      "Pass TD": "passTD",
      "Interceptions": "passINT",
      "Rushing Attempts": "rushAtt",
      "Rushing Yards": "rushYds",
      "Rushing Touchdowns": "rushTD",
      "Yards Per Rush": "rushYPA",
      "Receptions": "recs",
      "Receiving Yards": "recYards",
      "Yards Per Reception": "recYPR",
      "Receiving Touchdowns": "recTD",
      "Total Scrimmage Yards": "scrimYds",
      "Total Touchdowns": "totalTD",
      "Fantasy Points": "fantPt",
      "Fantasy Position Rank": "posRank",
      "VBD Points": "VBD",
      "Overall VBD Rank": "ovRank",
      "Season": "season",
      "Age": "age",
      "Games Played": "gamesPlayed",
      "Games Started": "gamesStarted"
    },
    perGameStats: ['passComp', 'passAtt', 'passYds', 'passTD', 'passINT', 'rushAtt', 'rushYds', 'rushTD', 'recYards', 'recTD', 'fantPt', 'VBD', 'scrimYds', 'totalTD'],
    teams: [
      {
        abbr: "ARI",
        name: "Cardinals",
        location: "Arizona"
      }, {
        abbr: "STL",
        name: "Rams",
        location: "St. Louis"
      }, {
        abbr: "SFO",
        name: "49ers",
        location: "San Francisco"
      }, {
        abbr: "SEA",
        name: "Seahawks",
        location: "Seattle"
      }, {
        abbr: "GNB",
        name: "Packers",
        location: "Green Bay"
      }, {
        abbr: "CHI",
        name: "Bears",
        location: "Chicago"
      }, {
        abbr: "DET",
        name: "Lions",
        location: "Detroit"
      }, {
        abbr: "MIN",
        name: "Vikings",
        location: "Minnesota"
      }, {
        abbr: "ATL",
        name: "Falcons",
        location: "Atlanta"
      }, {
        abbr: "NOR",
        name: "Saints",
        location: "New Orleans"
      }, {
        abbr: "TAM",
        name: "Buccaneers",
        location: "Tampa Bay"
      }, {
        abbr: "CAR",
        name: "Panthers",
        location: "Carolina"
      }, {
        abbr: "DAL",
        name: "Cowboys",
        location: "Dallas"
      }, {
        abbr: "NYG",
        name: "Giants",
        location: "New York"
      }, {
        abbr: "PHI",
        name: "Eagles",
        location: "Philadelphia"
      }, {
        abbr: "WAS",
        name: "Redskins",
        location: "Washington"
      }, {
        abbr: "SDG",
        name: "Chargers",
        location: "San Diego"
      }, {
        abbr: "OAK",
        name: "Raiders",
        location: "Oakland"
      }, {
        abbr: "KAN",
        name: "Chiefs",
        location: "Kansas City"
      }, {
        abbr: "DEN",
        name: "Broncos",
        location: "Denver"
      }, {
        abbr: "PIT",
        name: "Steelers",
        location: "Pittsburgh"
      }, {
        abbr: "BAL",
        name: "Ravens",
        location: "Baltimore"
      }, {
        abbr: "CIN",
        name: "Bengals",
        location: "Cincinnati"
      }, {
        abbr: "CLE",
        name: "Browns",
        location: "Cleveland"
      }, {
        abbr: "HOU",
        name: "Texans",
        location: "Houston"
      }, {
        abbr: "IND",
        name: "Colts",
        location: "Indianapolis"
      }, {
        abbr: "JAX",
        name: "Jaguars",
        location: "Jacksonville"
      }, {
        abbr: "TEN",
        name: "Titans",
        location: "Tennessee"
      }, {
        abbr: "NWE",
        name: "Patriots",
        location: "New England"
      }, {
        abbr: "NYJ",
        name: "Jets",
        location: "New York"
      }, {
        abbr: "MIA",
        name: "Dolphins",
        location: "Miami"
      }, {
        abbr: "BUF",
        name: "Bills",
        location: "Buffalo"
      }
    ]
  };

}).call(this);


// Generated by CoffeeScript 1.7.1
Plotter.util = (function() {
  return {
    typeCheck: (function() {
      var classToType;
      classToType = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regexp',
        '[object Object]': 'object'
      };
      return function(obj) {
        if (obj === void 0 || obj === null) {
          return String(obj);
        }
        return classToType[Object.prototype.toString.call(obj)];
      };
    })()
  };
})();


// Generated by CoffeeScript 1.7.1
(function() {
  (function(App) {
    var hub;
    hub = $({});
    App.on = function() {
      return hub.on.apply(hub, arguments);
    };
    App.off = function() {
      return hub.off.apply(hub, arguments);
    };
    App.trigger = function() {
      return hub.trigger.apply(hub, arguments);
    };
    return $(function() {
      return $.getJSON("data/clean-dataset.08-13.min.json", function(json) {
        return App.trigger("dataSetLoaded", [json]);
      });
    });
  })(window.Plotter);

}).call(this);


// Generated by CoffeeScript 1.7.1
(function() {
  var compare,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  compare = function(val1, comp, val2) {
    switch (comp) {
      case "===":
        return val1 === val2;
      case "!==":
        return val1 !== val2;
      case ">":
        return val1 > val2;
      case ">=":
        return val1 >= val2;
      case "<":
        return val1 < val2;
      case "<=":
        return val1 <= val2;
    }
  };

  Collection.prototype.whereArray = function(prop, vals) {
    var element, results, _i, _len, _ref;
    switch (Plotter.util.typeCheck(vals)) {
      case "string":
        vals = [vals];
        break;
      case "array":
        break;
      default:
        throw new Error("Collection::whereArr requires a string or array as its second argument.");
    }
    results = [];
    for (_i = 0, _len = this.length; _i < _len; _i++) {
      element = this[_i];
      if (element[prop]) {
        if (_ref = element[prop], __indexOf.call(vals, _ref) >= 0) {
          results.push(element);
        }
      }
    }
    return new Collection(results);
  };

  Collection.prototype.multiWhereArray = function(opts) {
    var opt, results, _i, _len;
    results = this;
    for (_i = 0, _len = opts.length; _i < _len; _i++) {
      opt = opts[_i];
      results = Collection.prototype.whereArray.apply(results, [opt.prop, opt.vals]);
    }
    return results;
  };

  Collection.prototype.dynamicFilter = function(opts) {
    var opt, results, _i, _len;
    results = this;
    for (_i = 0, _len = opts.length; _i < _len; _i++) {
      opt = opts[_i];
      results = results.filter(function(el) {
        return compare(el[opt.prop], opt.comp, opt.val);
      });
    }
    return Collection(results);
  };

}).call(this);


// Generated by CoffeeScript 1.7.1
(function(App) {
  return $(function() {
    var $$, gameSeasonSwitch, highlightButton, playerPositionSwitch, players, positions, renderButton, seasons, variables;
    $$ = Controls;
    Plotter.appControls = [playerPositionSwitch = $$("#input-group--pp-switch"), gameSeasonSwitch = $$("#input-group--gs-switch"), positions = $$("#input-group--positions"), players = $$("#input-group--players"), variables = $$("#input-group--variables"), seasons = $$("#input-group--seasons"), renderButton = $$("#control-button--render"), highlightButton = $$("#control-button--highlight")];
    Plotter.controls = $$(Plotter.appControls);
    Plotter.controls.formattedValues = function() {
      var ppVal, ret, valid;
      ret = {};
      valid = true;
      if ((ppVal = playerPositionSwitch.value().first())) {
        if (ppVal === "positions") {
          ret.ppVal = positions.value().valueArray();
        } else if (ppVal === "players") {
          ret.ppVal = players.value().valueArray();
        }
      } else {
        valid = false;
      }
      if (seasons.value().length) {
        ret.seasons = seasons.value().valueArray();
      } else {
        valid = false;
      }
      if (variables.value().length) {
        ret.vars = variables.value().idValuePair();
      } else {
        valid = false;
      }
      if (!(ret.gsVal = gameSeasonSwitch.value().first())) {
        valid = false;
      }
      console.log(ret);
      if (!valid) {
        return valid;
      } else {
        return ret;
      }
    };
    renderButton.on("click", function(event) {
      return App.trigger("requestRender", Plotter.controls.formattedValues());
    });
    highlightButton.disabled(true);
    $("#input-group--players").hide();
    $("#input-group--positions").hide();
    playerPositionSwitch.on("change", function(event) {
      var value;
      value = this.value().first();
      if (value === "players") {
        $("#input-group--players").slideDown();
        return $("#input-group--positions").slideUp();
      } else {
        $("#input-group--positions").slideDown();
        return $("#input-group--players").slideUp();
      }
    });
    return Plotter.controls.on("change", function(event) {
      if (Plotter.controls.formattedValues()) {
        return renderButton.disabled(false);
      }
    });
  });
})(window.Plotter);


// Generated by CoffeeScript 1.7.1
(function(App) {
  var __;
  __ = function(arr) {
    return new Collection(arr);
  };
  App.DataSorter = void 0;
  App.on("dataSetLoaded", function(event, data) {
    return App.DataSorter = __(data);
  });
  return App.on("requestRender", function(event, data) {
    var ppProp, seasons, sortArr, sortData;
    sortData = data;
    seasons = sortData.seasons.map(Number);
    ppProp = sortData.ppVal[0].length === 2 ? "fantPos" : "name";
    sortArr = [
      {
        prop: ppProp,
        vals: sortData.ppVal
      }, {
        prop: "season",
        vals: seasons
      }
    ];
    return App.ChartDrawer(sortData.vars, App.DataSorter.multiWhereArray(sortArr));
  });
})(window.Plotter);


// Generated by CoffeeScript 1.7.1
(function() {
  (function(App) {
    return App.ScaleMaker = (function() {
      var CONSTANTS, last, numericalSort, scaleValues;
      CONSTANTS = {
        r: {
          min: 2,
          max: 10
        },
        c: {
          min: -.15,
          max: .15
        }
      };
      numericalSort = function(a, b) {
        return a - b;
      };
      last = function(arr) {
        return arr[arr.length - 1];
      };
      scaleValues = function(vars, data) {
        var cVals, rVals, scales, xVals, yVals;
        xVals = data.pluck(vars.xVar).sort(numericalSort);
        yVals = data.pluck(vars.yVar).sort(numericalSort);
        rVals = data.pluck(vars.rVar).sort(numericalSort);
        cVals = data.pluck(vars.cVar).sort(numericalSort);
        return scales = (function() {
          return {
            x: d3.scale.linear().domain([xVals[0], last(xVals)]).range([App.settings.chart.padding, App.settings.chart.width - App.settings.chart.padding]),
            y: d3.scale.linear().domain([last(yVals), yVals[0]]).range([App.settings.chart.padding, App.settings.chart.height - App.settings.chart.padding]),
            r: d3.scale.linear().domain([rVals[0], last(rVals)]).range([CONSTANTS.r.min, CONSTANTS.r.max]),
            c: d3.scale.linear().domain([cVals[0], last(cVals)]).range([CONSTANTS.c.min, CONSTANTS.c.max])
          };
        })();
      };
      return scaleValues;
    })();
  })(window.Plotter);

}).call(this);


// Generated by CoffeeScript 1.7.1
(function() {
  (function(App) {
    return App.ChartDrawer = (function() {
      var drawChart, makeScales;
      makeScales = function(vars, data) {
        return App.ScaleMaker(vars, data);
      };
      drawChart = function(vars, data) {
        var c, chartHeight, chartPadding, chartWidth, dotHolder, posColors, r, scales, scatterplot, scatterplotPoints, x, xAxis, y, yAxis;
        vars = {
          xVar: App.settings.statToAbbr[vars["x-var-select"]],
          yVar: App.settings.statToAbbr[vars["y-var-select"]],
          rVar: App.settings.statToAbbr[vars["size-var-select"]],
          cVar: App.settings.statToAbbr[vars["shade-var-select"]]
        };
        App.scales = scales = makeScales(vars, data);
        chartHeight = App.settings.chart.height;
        chartWidth = App.settings.chart.width;
        chartPadding = App.settings.chart.padding;
        posColors = Plotter.settings.posColors;
        x = vars.xVar;
        y = vars.yVar;
        r = vars.rVar;
        c = vars.cVar;
        $(".chart-pane").empty();
        scatterplot = d3.select(".chart-pane").append("svg").attr("id", "d3-scatterplot");
        dotHolder = d3.select("#d3-scatterplot").append("g").attr("id", "dot-holder");
        scatterplotPoints = dotHolder.selectAll("circle").data(data).enter().append("circle").attr("cx", function(d) {
          return scales.x(d[x]);
        }).attr("cy", function(d) {
          return scales.y(d[y]);
        }).attr("r", function(d) {
          if (scales.r && d[r]) {
            return scales.r(d[r]);
          } else {
            return 4;
          }
        }).attr("fill", function(d) {
          var base;
          base = posColors[d.fantPos];
          if (scales.c && d[c]) {
            if (scales.c(d[c]) > 0) {
              return Color(base).lightenByAmount(scales.c(d[c])).desaturateByAmount(scales.c(d[c])).toCSS();
            } else {
              return Color(base).darkenByAmount(0 - scales.c(d[c])).saturateByAmount(0 - scales.c(d[c])).toCSS();
            }
          } else {
            return base;
          }
        }).attr("id", function(d) {
          var id;
          id = "";
          id += d.name.split(" ").join("-").replace(/\./g, "").replace(/'/g, "") + "_";
          id += d.season + "_";
          id += d.fantPos;
          return id;
        });
        xAxis = d3.svg.axis().scale(scales.x).orient("bottom");
        yAxis = d3.svg.axis().scale(scales.y).orient("left");
        scatterplot.append("g").attr("class", "axis").attr("id", "xAxis").attr("transform", "translate( 0, " + (chartHeight - chartPadding) + " )").call(xAxis);
        scatterplot.append("text").attr("class", "xAxis-label").attr("transform", "translate( " + chartPadding + ", " + (chartHeight + 30 - chartPadding * 2) + " )").text(x);
        scatterplot.append("g").attr("class", "axis").attr("id", "yAxis").attr("transform", "translate( " + chartPadding + ", 0 )").call(yAxis);
        return scatterplot.append("text").attr("class", "yAxis-label").attr("transform", "translate( " + chartPadding + ", 0) rotate(-90)").text(y);
      };
      return drawChart;
    })();
  })(window.Plotter);

}).call(this);


// Generated by CoffeeScript 1.7.1
(function(App) {
  (function() {
    return $(".input-select--variables").chosen({
      width: "100%"
    });
  })();
  (function() {
    var togglers;
    $(".input-group").data("plotter-open", true);
    togglers = $(".input-group__toggle");
    return togglers.click(function() {
      var content, inputGroup;
      inputGroup = $(this).parent(".input-group");
      content = inputGroup.find(".input-group__content");
      if (inputGroup.data("plotter-open")) {
        content.slideUp();
        return inputGroup.addClass("input-group--collapsed").data("plotter-open", false);
      } else {
        content.slideDown();
        return inputGroup.removeClass("input-group--collapsed").data("plotter-open", true);
      }
    });
  })();
  (function() {
    var navbar, toggler;
    navbar = $(".navbar");
    toggler = $(".menu-toggle");
    toggler.data("plotter-menu-state");
    return toggler.click(function() {
      $(this).toggleClass("menu-toggle--x");
      return $("html").toggleClass("navbar-open");
    });
  })();
  (function() {
    var playerSelect;
    playerSelect = $(".input-select--players");
    return App.on("dataSetLoaded", function(event, fullSet) {
      var htmlStr, name, names, _i, _len;
      names = (new Collection(fullSet)).pluck("name").sort().unique();
      htmlStr = "<option></option>";
      for (_i = 0, _len = names.length; _i < _len; _i++) {
        name = names[_i];
        htmlStr += "<option>";
        htmlStr += name;
        htmlStr += "</option>";
      }
      return playerSelect.html(htmlStr).chosen({
        width: "100%"
      });
    });
  })();
  return (function() {
    var groups, htmlStr;
    htmlStr = "";
    groups = ["Passing", "Rushing", "Receiving", "Totals", "Fantasy", "Other"];
    return App.on("dataSetLoaded", function(event, fullSet) {
      var group, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = groups.length; _i < _len; _i++) {
        group = groups[_i];
        _results.push(htmlStr += "<optgroup label='" + name + "'>");
      }
      return _results;
    });
  })();
})(window.Plotter);


// Generated by CoffeeScript 1.7.1
(function(App) {
  var q;
  q = function(i) {
    return document.querySelector(i);
  };
  App.selectTest = function() {
    q("#ppSwitchPosition").checked = true;
    q("#gsSwitchSeason").checked = true;
    q("#check-rb").checked = true;
    q("#check-wr").checked = true;
    q("#check-2008").checked = true;
    q("#check-2009").checked = true;
    q("#check-2010").checked = true;
    q("#check-2011").checked = true;
    q("#check-2012").checked = true;
    q("#check-2013").checked = true;
    q("#y-var-select option[data-stat='FantPt']").selected = true;
    q("#x-var-select option[data-stat='PosRank']").selected = true;
    q("#size-var-select option[data-stat='TotalTD']").selected = true;
    q("#shade-var-select option[data-stat='ScrimYds']").selected = true;
    $("#x-var-select").trigger("chosen:updated");
    $("#y-var-select").trigger("chosen:updated");
    $("#size-var-select").trigger("chosen:updated");
    return $("#shade-var-select").trigger("chosen:updated");
  };
  return App.selectTest();
})(window.Plotter);

