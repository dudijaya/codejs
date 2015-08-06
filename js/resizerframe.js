

!function(a){"use strict";function b(b,c,d){"addEventListener"in a?b.addEventListener(c,d,!1):"attachEvent"in a&&b.attachEvent("on"+c,d)}function c(){var b,c=["moz","webkit","o","ms"];for(b=0;b<c.length&&!A;b+=1)A=a[c[b]+"RequestAnimationFrame"];A||f(" RequestAnimationFrame not supported")}function d(){var b="Host page";return a.top!==a.self&&(b=a.parentIFrame?a.parentIFrame.getId():"Nested host page"),b}function e(a){return x+"["+d()+"]"+a}function f(b){u&&"object"==typeof a.console&&console.log(e(b))}function g(b){"object"==typeof a.console&&console.warn(e(b))}function h(b){function c(){function a(){l(I),j()}h("Height"),h("Width"),m(a,I,"resetPage")}function d(a){var b=a.id;f(" Removing iFrame: "+b),a.parentNode.removeChild(a),C[b].closedCallback(b),delete C[b],f(" --")}function e(){var a=H.substr(y).split(":");return{iframe:C[a[0]].iframe,id:a[0],height:a[1],width:a[2],type:a[3]}}function h(a){var b=Number(C[J]["max"+a]),c=Number(C[J]["min"+a]),d=a.toLowerCase(),e=Number(I[d]);if(c>b)throw new Error("Value for min"+a+" can not be greater than max"+a);f(" Checking "+d+" is in range "+c+"-"+b),c>e&&(e=c,f(" Set "+d+" to min value")),e>b&&(e=b,f(" Set "+d+" to max value")),I[d]=""+e}function o(){function a(){function a(){f(" Checking connection is from allowed list of origins: "+d);var a;for(a=0;a<d.length;a++)if(d[a]===c)return!0;return!1}function b(){var a=C[J].remoteHost;return f(" Checking connection is from: "+a),c===a}return d.constructor===Array?a():b()}var c=b.origin,d=C[J].checkOrigin;if(d&&""+c!="null"&&!a())throw new Error("Unexpected message received from: "+c+" for "+I.iframe.id+". Message was: "+b.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}function p(){return x===(""+H).substr(0,y)&&H.substr(y).split(":")[0]in C}function q(){var a=I.type in{"true":1,"false":1,undefined:1};return a&&f(" Ignoring init message from meta parent page"),a}function r(a){return H.substr(H.indexOf(":")+w+a)}function s(a){f(" MessageCallback passed: {iframe: "+I.iframe.id+", message: "+a+"}"),C[J].messageCallback({iframe:I.iframe,message:JSON.parse(a)}),f(" --")}function t(){return null===I.iframe?(g(" IFrame ("+I.id+") not found"),!1):!0}function v(a){var b=a.getBoundingClientRect();return i(),{x:parseInt(b.left,10)+parseInt(z.x,10),y:parseInt(b.top,10)+parseInt(z.y,10)}}function A(b){function c(){z=h,B(),f(" --")}function d(){return{x:Number(I.width)+e.x,y:Number(I.height)+e.y}}var e=b?v(I.iframe):{x:0,y:0},h=d();f(" Reposition requested from iFrame (offset x:"+e.x+" y:"+e.y+")"),a.top!==a.self?a.parentIFrame?a.parentIFrame["scrollTo"+(b?"Offset":"")](h.x,h.y):g(" Unable to scroll to requested position, window.parentIFrame not found"):c()}function B(){!1!==C[J].scrollCallback(z)&&j()}function D(b){function c(a){var b=v(a);f(" Moving to in page link (#"+d+") at x: "+b.x+" y: "+b.y),z={x:b.x,y:b.y},B(),f(" --")}var d=b.split("#")[1]||"",e=decodeURIComponent(d),g=document.getElementById(e)||document.getElementsByName(e)[0];a.top!==a.self?a.parentIFrame?a.parentIFrame.moveToAnchor(d):f(" In page link #"+d+" not found and window.parentIFrame not found"):g?c(g):f(" In page link #"+d+" not found")}function E(){switch(C[J].firstRun&&G(),I.type){case"close":d(I.iframe);break;case"message":s(r(6));break;case"scrollTo":A(!1);break;case"scrollToOffset":A(!0);break;case"inPageLink":D(r(9));break;case"reset":k(I);break;case"init":c(),C[J].initCallback(I.iframe),C[J].resizedCallback(I);break;default:c(),C[J].resizedCallback(I)}}function F(a){var b=!0;return C[a]||(b=!1,g(I.type+" No settings for "+a+". Message was: "+H)),b}function G(){C[J].firstRun=!1,Function.prototype.bind&&(C[J].iframe.iFrameResizer={close:d.bind(null,C[J].iframe),resize:n.bind(null,"Window resize","resize",C[J].iframe),moveToAnchor:function(a){n("Move to anchor","inPageLink:"+a,C[J].iframe,J)},sendMessage:function(a){a=JSON.stringify(a),n("Send Message","message:"+a,C[J].iframe,J)}})}var H=b.data,I={},J=null;p()?(I=e(),J=I.id,!q()&&F(J)&&(u=C[J].log,f(" Received: "+H),t()&&o()&&E())):f(" Ignored: "+H)}function i(){null===z&&(z={x:void 0!==a.pageXOffset?a.pageXOffset:document.documentElement.scrollLeft,y:void 0!==a.pageYOffset?a.pageYOffset:document.documentElement.scrollTop},f(" Get page position: "+z.x+","+z.y))}function j(){null!==z&&(a.scrollTo(z.x,z.y),f(" Set page position: "+z.x+","+z.y),z=null)}function k(a){function b(){l(a),n("reset","reset",a.iframe,a.id)}f(" Size reset requested by "+("init"===a.type?"host page":"iFrame")),i(),m(b,a,"init")}function l(a){function b(b){a.iframe.style[b]=a[b]+"px",f(" IFrame ("+c+") "+b+" set to "+a[b]+"px")}var c=a.iframe.id;C[c].sizeHeight&&b("height"),C[c].sizeWidth&&b("width")}function m(a,b,c){c!==b.type&&A?(f(" Requesting animation frame"),A(a)):a()}function n(a,b,c,d){c&&c.contentWindow?(f("["+a+"] Sending msg to iframe ("+b+")"),c.contentWindow.postMessage(x+b,C[d||c.id].targetOrigin)):(g("["+a+"] IFrame not found"),C[d]&&delete C[d])}function o(a,c){function d(){function b(b){1/0!==C[v][b]&&0!==C[v][b]&&(a.style[b]=C[v][b]+"px",f(" Set "+b+" = "+C[v][b]+"px"))}b("maxHeight"),b("minHeight"),b("maxWidth"),b("minWidth")}function e(b){return""===b&&(a.id=b="iFrameResizer"+t++,u=(c||{}).log,f(" Added missing iframe ID: "+b+" ("+a.src+")")),b}function h(){f(" IFrame scrolling "+(C[v].scrolling?"enabled":"disabled")+" for "+v),a.style.overflow=!1===C[v].scrolling?"hidden":"auto",a.scrolling=!1===C[v].scrolling?"no":"yes"}function i(){("number"==typeof C[v].bodyMargin||"0"===C[v].bodyMargin)&&(C[v].bodyMarginV1=C[v].bodyMargin,C[v].bodyMargin=""+C[v].bodyMargin+"px")}function j(){return v+":"+C[v].bodyMarginV1+":"+C[v].sizeWidth+":"+C[v].log+":"+C[v].interval+":"+C[v].enablePublicMethods+":"+C[v].autoResize+":"+C[v].bodyMargin+":"+C[v].heightCalculationMethod+":"+C[v].bodyBackground+":"+C[v].bodyPadding+":"+C[v].tolerance+":"+C[v].inPageLinks+":"+C[v].resizeFrom+":"+C[v].widthCalculationMethod}function l(){var b=C[v].firstRun,c=C[v].heightCalculationMethod in B;!b&&c&&k({iframe:a,height:0,width:0,type:"init"})}function m(c){function d(){n("iFrame.onload",c,a),l()}b(a,"load",d),n("init",c,a)}function o(a){if("object"!=typeof a)throw new TypeError("Options is not an object.")}function p(a){for(var b in E)E.hasOwnProperty(b)&&(C[v][b]=a.hasOwnProperty(b)?a[b]:E[b])}function q(a){return"file://"===a?"*":a}function r(b){b=b||{},C[v]={firstRun:!0,iframe:a,remoteHost:a.src.split("/").slice(0,3).join("/")},o(b),p(b),C[v].targetOrigin=!0===C[v].checkOrigin?q(C[v].remoteHost):"*",u=C[v].log}function s(){return v in C}var v=e(a.id);s()?g(" Ignored iFrame, already setup."):(r(c),h(),d(),i(),m(j()))}function p(a,b){null===D&&(D=setTimeout(function(){D=null,a()},b))}function q(){function c(a){p(function(){e("Window "+a,"resize")},66)}function d(){"hidden"!==document.visibilityState&&e("Tab Visable","resize")}function e(a,b){function c(a){return"parent"===C[a].resizeFrom&&C[a].autoResize&&!C[a].firstRun}for(var d in C)c(d)&&n(a,b,document.getElementById(d),d)}b(a,"message",h),b(a,"resize",function(){c("resize")}),b(document,"visibilitychange",d),b(document,"-webkit-visibilitychange",d),b(a,"focusin",function(){c("focus")})}function r(){function a(a,b){if(!b.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==b.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+b.tagName+">.");o(b,a)}return c(),q(),function(b,c){switch(typeof c){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(c||"iframe"),a.bind(void 0,b));break;case"object":a(b,c);break;default:throw new TypeError("Unexpected data type ("+typeof c+").")}}}function s(a){a.fn.iFrameResize=function(a){return this.filter("iframe").each(function(b,c){o(c,a)}).end()}}var t=0,u=!1,v="message",w=v.length,x="[iFrameSizer]",y=x.length,z=null,A=a.requestAnimationFrame,B={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},C={},D=null,E={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){g("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}};a.jQuery&&s(jQuery),"function"==typeof define&&define.amd?define([],r):"object"==typeof module&&"object"==typeof module.exports?module.exports=r():a.iFrameResize=a.iFrameResize||r()}(window||{});
iFrameResize({});
