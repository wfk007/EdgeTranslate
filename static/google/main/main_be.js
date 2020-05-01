(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var d=this||self;function e(a,v){a=a.split(".");var b=d;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var c;a.length&&(c=a.shift());)a.length||void 0===v?b[c]&&b[c]!==Object.prototype[c]?b=b[c]:b=b[c]={}:b[c]=v};var f={0:"\u041f\u0435\u0440\u0430\u043a\u043b\u0430\u0441\u0446\u0456",1:"\u0421\u043a\u0430\u0441\u0430\u0432\u0430\u0446\u044c",2:"\u0417\u0430\u043a\u0440\u044b\u0446\u044c",3:function(a){return"Google \u0430\u045e\u0442\u0430\u043c\u0430\u0442\u044b\u0447\u043d\u0430 \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u045e \u0433\u044d\u0442\u0443\u044e \u0441\u0442\u0430\u0440\u043e\u043d\u043a\u0443 \u043d\u0430: "+a},4:function(a){return"\u041f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u0437\u0435\u043d\u044b \u043d\u0430: "+
a},5:"\u041f\u0430\u043c\u044b\u043b\u043a\u0430: \u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435 \u0437\u0434\u043e\u043b\u0435\u045e \u0432\u044b\u043a\u0430\u043d\u0430\u0446\u044c \u0412\u0430\u0448 \u0437\u0430\u043f\u044b\u0442. \u041f\u0430\u0441\u043f\u0440\u0430\u0431\u0443\u0439\u0446\u0435 \u043f\u0430\u0437\u043d\u0435\u0439.",6:"\u0414\u0430\u0432\u0435\u0434\u0430\u0446\u0446\u0430 \u0431\u043e\u043b\u044c\u0448",7:function(a){return"\u041f\u0440\u044b\u0432\u0435\u0434\u0437\u0435\u043d\u0430 \u045e \u0434\u0437\u0435\u044f\u043d\u043d\u0435 "+
a},8:"\u041f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u0447\u044b\u043a",9:"\u041f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u0430\u0435\u0446\u0446\u0430",10:function(a){return"\u041f\u0435\u0440\u0430\u043a\u043b\u0430\u0441\u0446\u0456 \u0433\u044d\u0442\u0443 \u0441\u0442\u0430\u0440\u043e\u043d\u043a\u0443 \u0437 \u0434\u0430\u043f\u0430\u043c\u043e\u0433\u0430\u0439 \u041f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u0447\u044b\u043a\u0430 Google \u043d\u0430 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e \u043c\u043e\u0432\u0443: "+
(a+"?")},11:function(a){return"\u041f\u0440\u0430\u0433\u043b\u044f\u0434\u0437\u0435\u0446\u044c \u0433\u044d\u0442\u0443\u044e \u0441\u0442\u0430\u0440\u043e\u043d\u043a\u0443 \u045e: "+a},12:"\u041f\u0430\u043a\u0430\u0437\u0430\u0446\u044c \u0430\u0440\u044b\u0433\u0456\u043d\u0430\u043b",13:"\u0417\u043c\u0435\u0441\u0442 \u0433\u044d\u0442\u0430\u0433\u0430 \u043b\u0430\u043a\u0430\u043b\u044c\u043d\u0430\u0433\u0430 \u0444\u0430\u0439\u043b\u0430 \u0431\u0443\u0434\u0437\u0435 \u0430\u0434\u0430\u0441\u043b\u0430\u043d\u044b \u043d\u0430 Google \u0434\u043b\u044f \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u0443 \u043f\u0440\u0430\u0437 \u0431\u044f\u0441\u043f\u0435\u0447\u043d\u0430\u0435 \u0437\u043b\u0443\u0447\u044d\u043d\u043d\u0435.",
14:"\u0417\u043c\u0435\u0441\u0442 \u0433\u044d\u0442\u0430\u0439 \u0431\u044f\u0441\u043f\u0435\u0447\u043d\u0430\u0439 \u0441\u0442\u0430\u0440\u043e\u043d\u043a\u0456 \u0431\u0443\u0434\u0437\u0435 \u0430\u0434\u0430\u0441\u043b\u0430\u043d\u044b \u043d\u0430 Google \u0434\u043b\u044f \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u0443 \u043f\u0440\u0430\u0437 \u0431\u044f\u0441\u043f\u0435\u0447\u043d\u0430\u0435 \u0437\u043b\u0443\u0447\u044d\u043d\u043d\u0435.",15:"\u0417\u043c\u0435\u0441\u0442 \u0433\u044d\u0442\u0430\u0439 \u0441\u0442\u0430\u0440\u043e\u043d\u043a\u0456 \u045e\u043d\u0443\u0442\u0440\u0430\u043d\u0430\u0439 \u0441\u0435\u0442\u043a\u0456 \u0431\u0443\u0434\u0437\u0435 \u0430\u0434\u0430\u0441\u043b\u0430\u043d\u044b \u043d\u0430 Google \u0434\u043b\u044f \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u0443 \u043f\u0440\u0430\u0437 \u0431\u044f\u0441\u043f\u0435\u0447\u043d\u0430\u0435 \u0437\u043b\u0443\u0447\u044d\u043d\u043d\u0435.",
16:"\u0412\u044b\u0431\u0440\u0430\u0446\u044c \u043c\u043e\u0432\u0443",17:function(a){return"\u0412\u044b\u043a\u043b\u044e\u0447\u044b\u0446\u044c "+(a+" \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434")},18:function(a){return"\u0410\u0434\u043a\u043b\u044e\u0447\u044b\u0446\u044c \u0434\u043b\u044f: "+a},19:"\u0417\u0430\u045e\u0441\u0435\u0434\u044b \u0445\u0430\u0432\u0430\u0446\u044c",20:"\u0417\u044b\u0445\u043e\u0434\u043d\u044b \u0442\u044d\u043a\u0441\u0442:",21:"\u041f\u0440\u0430\u043f\u0430\u043d\u0443\u0439\u0446\u0435 \u043b\u0435\u043f\u0448\u044b \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434",
22:"\u0421\u0430\u0434\u0437\u0435\u0439\u043d\u0456\u0447\u0430\u0446\u044c",23:"\u041f\u0435\u0440\u0430\u043a\u043b\u0430\u0441\u0446\u0456 \u045e\u0441\u0451",24:"\u0410\u0434\u043d\u0430\u0432\u0456\u0446\u044c \u0443\u0441\u0451",25:"\u0410\u0434\u043c\u044f\u043d\u0456\u0446\u044c \u0443\u0441\u0451",26:"\u041f\u0435\u0440\u0430\u043a\u043b\u0430\u0441\u0446\u0456 \u0440\u0430\u0437\u0434\u0437\u0435\u043b\u044b \u043d\u0430 \u043c\u0430\u044e \u043c\u043e\u0432\u0443",27:function(a){return"\u041f\u0435\u0440\u0430\u043a\u043b\u0430\u0441\u0446\u0456 \u045e\u0441\u0451 \u043d\u0430 "+
a},28:"\u041f\u0430\u043a\u0430\u0437\u0430\u0446\u044c \u043c\u043e\u0432\u044b \u0430\u0440\u044b\u0433\u0456\u043d\u0430\u043b\u0443",29:"\u041e\u043f\u0446\u044b\u0456",30:"\u0412\u044b\u043a\u043b\u044e\u0447\u044b\u0446\u044c \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434 \u0434\u043b\u044f \u0433\u044d\u0442\u0430\u0433\u0430 \u0441\u0430\u0439\u0442\u0430",31:null,32:"\u041f\u0430\u043a\u0430\u0437\u0430\u0446\u044c \u0430\u043b\u044c\u0442\u044d\u0440\u043d\u0430\u0442\u044b\u045e\u043d\u044b\u044f \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u044b.",
33:"\u041d\u0430\u0446\u0456\u0441\u043d\u0456\u0446\u0435 \u043d\u0430 \u0441\u043b\u043e\u0432\u044b \u0432\u044b\u0448\u044d\u0439, \u043a\u0430\u0431 \u0443\u0431\u0430\u0447\u044b\u0446\u044c \u0430\u043b\u044c\u0442\u044d\u0440\u043d\u0430\u0442\u044b\u045e\u043d\u044b\u044f \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u044b",34:"\u0412\u044b\u043a\u0430\u0440\u044b\u0441\u0442\u0430\u0446\u044c",35:"\u041f\u0435\u0440\u0430\u0446\u044f\u0433\u043di\u0446\u0435 \u0437 \u0434\u0430\u043f\u0430\u043c\u043e\u0433\u0430\u0439 \u043a\u043b\u0430\u0432\u0456\u0448\u044b Shift, \u043a\u0430\u0431 \u0437\u043c\u044f\u043d\u0456\u0446\u044c \u043f\u0430\u0440\u0430\u0434\u0430\u043a",
36:"\u041d\u0430\u0446i\u0441\u043di\u0446\u0435, \u043a\u0430\u0431 \u043f\u0440\u0430\u0433\u043b\u0435\u0434\u0437\u0435\u0446\u044c \u0430\u043b\u044c\u0442\u044d\u0440\u043d\u0430\u0442\u044b\u045e\u043d\u044b\u044f \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u044b",37:"\u0423\u0442\u0440\u044b\u043c\u043b\u0456\u0432\u0430\u0439\u0446\u0435 \u043a\u043b\u0430\u0432\u0456\u0448\u0443 Shift, \u043a\u043b\u0456\u043a\u043d\u0456\u0446\u0435 \u0456 \u043f\u0435\u0440\u0430\u0446\u044f\u0433\u043d\u0456\u0446\u0435 \u0441\u043b\u043e\u0432\u044b, \u043a\u0430\u0431 \u0437\u043c\u044f\u043d\u0456\u0446\u044c \u043f\u0430\u0440\u0430\u0434\u0430\u043a.",
38:"\u0414\u0437\u044f\u043a\u0443\u0435\u043c \u0412\u0430\u043c \u0437\u0430 \u045e\u043a\u043b\u0430\u0434 \u0412\u0430\u0448\u044b\u0445 \u043f\u0440\u0430\u043f\u0430\u043d\u043e\u045e \u043f\u0430 \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u0443 Google Translate.",39:"\u041ai\u0440\u0430\u0432\u0430\u0446\u044c \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u0430\u043c \u0433\u044d\u0442\u0430\u0433\u0430 \u0441\u0430\u0439\u0442\u0430",40:"\u041d\u0430\u0446\u0456\u0441\u043d\u0456\u0446\u0435 \u043d\u0430 \u0441\u043b\u043e\u0432\u0430, \u043a\u0430\u0431 \u0443\u0431\u0430\u0447\u044b\u0446\u044c \u0430\u043b\u044c\u0442\u044d\u0440\u043d\u0430\u0442\u044b\u045e\u043d\u044b\u044f \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u044b, \u0430\u0431\u043e \u0434\u0432\u043e\u0439\u0447\u044b \u043d\u0430\u0446i\u0441\u043di\u0446\u0435, \u043a\u0430\u0431 \u0430\u0434\u0440\u0430\u0437\u0443 \u0440\u044d\u0434\u0430\u0433\u0430\u0432\u0430\u0446\u044c",
41:"\u0417\u044b\u0445\u043e\u0434\u043d\u044b \u0442\u044d\u043a\u0441\u0442",42:"\u041f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u0447\u044b\u043a",43:"\u041f\u0435\u0440\u0430\u043a\u043b\u0430\u0441\u0446\u0456",44:"\u0412\u0430\u0448\u0430 \u0432\u044b\u043f\u0440\u0430\u045e\u043b\u0435\u043d\u043d\u0435 \u0430\u0442\u0440\u044b\u043c\u0430\u043d\u0430.",45:"\u041f\u0430\u043c\u044b\u043b\u043a\u0430: \u043c\u043e\u0432\u0430 \u0432\u044d\u0431-\u0441\u0442\u0430\u0440\u043e\u043d\u043a\u0456 \u043d\u0435 \u043f\u0430\u0434\u0442\u0440\u044b\u043c\u043b\u0456\u0432\u0430\u0435\u0446\u0446\u0430.",
46:"\u0412\u0456\u0434\u0436\u044d\u0442 \u043f\u0435\u0440\u0430\u043a\u043b\u0430\u0434\u0443"};var g=window.google&&google.translate&&google.translate._const;
if(g){var h;a:{for(var k=[],l=[""],m=0;m<l.length;++m){var n=l[m].split(","),p=n[0];if(p){var q=Number(n[1]);if(!(!q||.1<q||0>q)){var r=Number(n[2]),t=new Date,u=1E4*t.getFullYear()+100*(t.getMonth()+1)+t.getDate();!r||r<u||k.push({version:p,ratio:q,a:r})}}}var w=0,x=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),y=Number(x&&x[1])||Math.random();for(m=0;m<k.length;++m){var z=k[m];w+=z.ratio;if(1<=w)break;if(y<w){h=z.version;break a}}h="TE_20200210_00"}var A="/element/%s/e/js/element/element_main.js".replace("%s",
h);if("0"==h){var B=" element %s e js element element_main.js".split(" ");B[B.length-1]="main_be.js";A=B.join("/").replace("%s",h)}if(g._cjlc)g._cjlc(this.EDGE_TRANSLATE_URL + "google/element_main.js");else{var C=this.EDGE_TRANSLATE_URL + "google/element_main.js",D=document.createElement("script");D.type="text/javascript";D.charset="UTF-8";D.src=C;var E=document.getElementsByTagName("head")[0];E||(E=document.body.parentNode.appendChild(document.createElement("head")));E.appendChild(D)}e("google.translate.m",f);e("google.translate.v",h)};}).call(window)