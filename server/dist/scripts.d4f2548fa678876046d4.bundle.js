var EasyAutocomplete=function(e){return e.Configuration=function(e){function t(e){return void 0!==o[e]&&null!==o[e]}function n(e,t){function n(t,o){for(var a in o)void 0===t[a]&&e.log("Property '"+a+"' does not exist in EasyAutocomplete options API."),"object"==typeof t[a]&&-1===$.inArray(a,i)&&n(t[a],o[a])}n(o,t)}var o={data:"list-required",url:"list-required",dataType:"json",listLocation:function(e){return e},xmlElementName:"",getValue:function(e){return e},autocompleteOff:!0,placeholder:!1,ajaxCallback:function(){},matchResponseProperty:!1,list:{sort:{enabled:!1,method:function(e,t){return e=o.getValue(e),t=o.getValue(t),t>e?-1:e>t?1:0}},maxNumberOfElements:6,hideOnEmptyPhrase:!0,match:{enabled:!1,caseSensitive:!1,method:function(e,t){return e.search(t)>-1}},showAnimation:{type:"normal",time:400,callback:function(){}},hideAnimation:{type:"normal",time:400,callback:function(){}},onClickEvent:function(){},onSelectItemEvent:function(){},onLoadEvent:function(){},onChooseEvent:function(){},onKeyEnterEvent:function(){},onMouseOverEvent:function(){},onMouseOutEvent:function(){},onShowListEvent:function(){},onHideListEvent:function(){}},highlightPhrase:!0,theme:"",cssClasses:"",minCharNumber:0,requestDelay:0,adjustWidth:!0,ajaxSettings:{},preparePostData:function(e,t){return e},loggerEnabled:!0,template:"",categoriesAssigned:!1,categories:[{maxNumberOfElements:4}]},i=["ajaxSettings","template"];this.get=function(e){return o[e]},this.equals=function(e,n){return!(!t(e)||o[e]!==n)},this.checkDataUrlProperties=function(){return"list-required"!==o.url||"list-required"!==o.data},this.checkRequiredProperties=function(){for(var e in o)if("required"===o[e])return logger.error("Option "+e+" must be defined"),!1;return!0},this.printPropertiesThatDoesntExist=function(e,t){n(e,t)},function(){if("xml"===e.dataType&&(e.getValue||(e.getValue=function(e){return $(e).text()}),e.list||(e.list={}),e.list.sort||(e.list.sort={}),e.list.sort.method=function(t,n){return t=e.getValue(t),n=e.getValue(n),n>t?-1:t>n?1:0},e.list.match||(e.list.match={}),e.list.match.method=function(e,t){return e.search(t)>-1}),void 0!==e.categories&&e.categories instanceof Array){for(var t=[],n=0,i=e.categories.length;i>n;n+=1){var a=e.categories[n];for(var r in o.categories[0])void 0===a[r]&&(a[r]=o.categories[0][r]);t.push(a)}e.categories=t}}(),function(){function t(e,n){var o=e||{};for(var i in e)void 0!==n[i]&&null!==n[i]&&("object"!=typeof n[i]||n[i]instanceof Array?o[i]=n[i]:t(e[i],n[i]));return void 0!==n.data&&null!==n.data&&"object"==typeof n.data&&(o.data=n.data),o}o=t(o,e)}(),!0===o.loggerEnabled&&n(console,e),function(){void 0!==e.ajaxSettings&&"object"==typeof e.ajaxSettings?o.ajaxSettings=e.ajaxSettings:o.ajaxSettings={}}(),function(){if("list-required"!==o.url&&"function"!=typeof o.url){var t=o.url;o.url=function(){return t}}if(void 0!==o.ajaxSettings.url&&"function"!=typeof o.ajaxSettings.url){var t=o.ajaxSettings.url;o.ajaxSettings.url=function(){return t}}if("string"==typeof o.listLocation){var n=o.listLocation;"XML"===o.dataType.toUpperCase()?o.listLocation=function(e){return $(e).find(n)}:o.listLocation=function(e){return e[n]}}if("string"==typeof o.getValue){var i=o.getValue;o.getValue=function(e){return e[i]}}void 0!==e.categories&&(o.categoriesAssigned=!0)}()},e}(EasyAutocomplete||{}),EasyAutocomplete=function(e){return e.Logger=function(){this.error=function(e){console.log("ERROR: "+e)},this.warning=function(e){console.log("WARNING: "+e)}},e}(EasyAutocomplete||{}),EasyAutocomplete=function(e){return e.Constans=function(){var e={CONTAINER_CLASS:"easy-autocomplete-container",CONTAINER_ID:"eac-container-",WRAPPER_CSS_CLASS:"easy-autocomplete"};this.getValue=function(t){return e[t]}},e}(EasyAutocomplete||{}),EasyAutocomplete=function(e){return e.ListBuilderService=function(e,t){function n(t,n){var o={};if(o="XML"===e.get("dataType").toUpperCase()?function(){var o,i={};return void 0!==t.xmlElementName&&(i.xmlElementName=t.xmlElementName),void 0!==t.listLocation?o=t.listLocation:void 0!==e.get("listLocation")&&(o=e.get("listLocation")),void 0!==o?"string"==typeof o?i.data=$(n).find(o):"function"==typeof o&&(i.data=o(n)):i.data=n,i}():function(){var e={};return void 0!==t.listLocation?"string"==typeof t.listLocation?e.data=n[t.listLocation]:"function"==typeof t.listLocation&&(e.data=t.listLocation(n)):e.data=n,e}(),void 0!==t.header&&(o.header=t.header),void 0!==t.maxNumberOfElements&&(o.maxNumberOfElements=t.maxNumberOfElements),void 0!==e.get("list").maxNumberOfElements&&(o.maxListSize=e.get("list").maxNumberOfElements),void 0!==t.getValue)if("string"==typeof t.getValue){var i=t.getValue;o.getValue=function(e){return e[i]}}else"function"==typeof t.getValue&&(o.getValue=t.getValue);else o.getValue=e.get("getValue");return o}function o(t){var n=[];return void 0===t.xmlElementName&&(t.xmlElementName=e.get("xmlElementName")),$(t.data).find(t.xmlElementName).each(function(){n.push(this)}),n}this.init=function(t){var n=[],o={};return o.data=e.get("listLocation")(t),o.getValue=e.get("getValue"),o.maxListSize=e.get("list").maxNumberOfElements,n.push(o),n},this.updateCategories=function(t,o){if(e.get("categoriesAssigned")){t=[];for(var i=0;i<e.get("categories").length;i+=1){var a=n(e.get("categories")[i],o);t.push(a)}}return t},this.convertXml=function(t){if("XML"===e.get("dataType").toUpperCase())for(var n=0;n<t.length;n+=1)t[n].data=o(t[n]);return t},this.processData=function(n,o){for(var i=0,a=n.length;a>i;i+=1)n[i].data=t(e,n[i],o);return n},this.checkIfDataExists=function(e){for(var t=0,n=e.length;n>t;t+=1)if(void 0!==e[t].data&&e[t].data instanceof Array&&e[t].data.length>0)return!0;return!1}},e}(EasyAutocomplete||{}),EasyAutocomplete=function(e){return e.proccess=function(t,n,o){function i(e,n){return t.get("list").match.caseSensitive||("string"==typeof e&&(e=e.toLowerCase()),n=n.toLowerCase()),!!t.get("list").match.method(e,n)}e.proccess.match=i;var a=n.data,r=o;return a=function(e,n){var o=[],a="";if(t.get("list").match.enabled)for(var r=0,s=e.length;s>r;r+=1)a=t.get("getValue")(e[r]),i(a,n)&&o.push(e[r]);else o=e;return o}(a,r),a=function(e){return void 0!==n.maxNumberOfElements&&e.length>n.maxNumberOfElements&&(e=e.slice(0,n.maxNumberOfElements)),e}(a),a=function(e){return t.get("list").sort.enabled&&e.sort(t.get("list").sort.method),e}(a)},e}(EasyAutocomplete||{}),EasyAutocomplete=function(e){return e.Template=function(e){var t={basic:{type:"basic",method:function(e){return e},cssClass:""},description:{type:"description",fields:{description:"description"},method:function(e){return e+" - description"},cssClass:"eac-description"},iconLeft:{type:"iconLeft",fields:{icon:""},method:function(e){return e},cssClass:"eac-icon-left"},iconRight:{type:"iconRight",fields:{iconSrc:""},method:function(e){return e},cssClass:"eac-icon-right"},links:{type:"links",fields:{link:""},method:function(e){return e},cssClass:""},custom:{type:"custom",method:function(){},cssClass:""}},n=function(e){var n,o=e.fields;return"description"===e.type?(n=t.description.method,"string"==typeof o.description?n=function(e,t){return e+" - <span>"+t[o.description]+"</span>"}:"function"==typeof o.description&&(n=function(e,t){return e+" - <span>"+o.description(t)+"</span>"}),n):"iconRight"===e.type?("string"==typeof o.iconSrc?n=function(e,t){return e+"<img class='eac-icon' src='"+t[o.iconSrc]+"' />"}:"function"==typeof o.iconSrc&&(n=function(e,t){return e+"<img class='eac-icon' src='"+o.iconSrc(t)+"' />"}),n):"iconLeft"===e.type?("string"==typeof o.iconSrc?n=function(e,t){return"<img class='eac-icon' src='"+t[o.iconSrc]+"' />"+e}:"function"==typeof o.iconSrc&&(n=function(e,t){return"<img class='eac-icon' src='"+o.iconSrc(t)+"' />"+e}),n):"links"===e.type?("string"==typeof o.link?n=function(e,t){return"<a href='"+t[o.link]+"' >"+e+"</a>"}:"function"==typeof o.link&&(n=function(e,t){return"<a href='"+o.link(t)+"' >"+e+"</a>"}),n):"custom"===e.type?e.method:t.basic.method};this.getTemplateClass=function(e){var n=function(){return""};return e&&e.type&&e.type&&t[e.type]?function(){var n=t[e.type].cssClass;return function(){return n}}():n}(e),this.build=function(e){return e&&e.type&&e.type&&t[e.type]?n(e):t.basic.method}(e)},e}(EasyAutocomplete||{}),EasyAutocomplete=function(e){return e.main=function(t,n){function o(){return 0===b.length?void p.error("Input field doesn't exist."):h.checkDataUrlProperties()?h.checkRequiredProperties()?(i(),void r()):void p.error("Will not work without mentioned properties."):void p.error("One of options variables 'data' or 'url' must be defined.")}function i(){function e(){var e=b.outerWidth();b.parent().css("width",e)}function t(e,t){return h.get("highlightPhrase")&&""!==t?o(e,t):e}function n(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function o(e,t){var o=n(t);return(e+"").replace(new RegExp("("+o+")","gi"),"<b>$1</b>")}b.parent().hasClass(g.getValue("WRAPPER_CSS_CLASS"))&&(function(){b.next("."+g.getValue("CONTAINER_CLASS")).remove()}(),function(){b.unwrap()}()),function(){var t=$("<div>"),n=g.getValue("WRAPPER_CSS_CLASS");h.get("theme")&&""!==h.get("theme")&&(n+=" eac-"+h.get("theme")),h.get("cssClasses")&&""!==h.get("cssClasses")&&(n+=" "+h.get("cssClasses")),""!==m.getTemplateClass()&&(n+=" "+m.getTemplateClass()),t.addClass(n),b.wrap(t),!0===h.get("adjustWidth")&&e()}(),function(){var e=$("<div>").addClass(g.getValue("CONTAINER_CLASS"));e.attr("id",a()).prepend($("<ul>")),function(){e.on("show.eac",function(){switch(h.get("list").showAnimation.type){case"slide":var t=h.get("list").showAnimation.time,n=h.get("list").showAnimation.callback;e.find("ul").slideDown(t,n);break;case"fade":var t=h.get("list").showAnimation.time,n=h.get("list").showAnimation.callback;e.find("ul").fadeIn(t);break;default:e.find("ul").show()}h.get("list").onShowListEvent()}).on("hide.eac",function(){switch(h.get("list").hideAnimation.type){case"slide":var t=h.get("list").hideAnimation.time,n=h.get("list").hideAnimation.callback;e.find("ul").slideUp(t,n);break;case"fade":var t=h.get("list").hideAnimation.time,n=h.get("list").hideAnimation.callback;e.find("ul").fadeOut(t,n);break;default:e.find("ul").hide()}h.get("list").onHideListEvent()}).on("selectElement.eac",function(){e.find("ul li").removeClass("selected"),e.find("ul li").eq(_).addClass("selected"),h.get("list").onSelectItemEvent()}).on("loadElements.eac",function(n,o,i){var a="",r=e.find("ul");r.empty().detach(),w=[];for(var s=0,l=0,u=o.length;u>l;l+=1){var d=o[l].data;if(0!==d.length){void 0!==o[l].header&&o[l].header.length>0&&r.append("<div class='eac-category' >"+o[l].header+"</div>");for(var f=0,g=d.length;g>f&&s<o[l].maxListSize;f+=1)a=$("<li><div class='eac-item'></div></li>"),function(){var e=f,n=s,r=o[l].getValue(d[e]);a.find(" > div").on("click",function(){b.val(r).trigger("change"),_=n,c(n),h.get("list").onClickEvent(),h.get("list").onChooseEvent()}).mouseover(function(){_=n,c(n),h.get("list").onMouseOverEvent()}).mouseout(function(){h.get("list").onMouseOutEvent()}).html(m.build(t(r,i),d[e]))}(),r.append(a),w.push(d[f]),s+=1}}e.append(r),h.get("list").onLoadEvent()})}(),b.after(e)}(),E=$("#"+a()),h.get("placeholder")&&b.attr("placeholder",h.get("placeholder"))}function a(){var e=b.attr("id");return e=g.getValue("CONTAINER_ID")+e}function r(){function e(){b.focusout(function(){var e,t=b.val();h.get("list").match.caseSensitive||(t=t.toLowerCase());for(var n=0,o=w.length;o>n;n+=1)if(e=h.get("getValue")(w[n]),h.get("list").match.caseSensitive||(e=e.toLowerCase()),e===t)return _=n,void c(_)})}function t(){b.off("keyup").keyup(function(e){function t(e){function t(e,t){return!1===h.get("matchResponseProperty")||("string"==typeof h.get("matchResponseProperty")?t[h.get("matchResponseProperty")]===e:"function"!=typeof h.get("matchResponseProperty")||h.get("matchResponseProperty")(t)===e)}if(!(e.length<h.get("minCharNumber"))){if("list-required"!==h.get("data")){var n=h.get("data"),o=v.init(n);o=v.updateCategories(o,n),o=v.processData(o,e),u(o,e),b.parent().find("li").length>0?s():l()}var i=function(){var e={},t=h.get("ajaxSettings")||{};for(var n in t)e[n]=t[n];return e}();void 0!==i.url&&""!==i.url||(i.url=h.get("url")),void 0!==i.dataType&&""!==i.dataType||(i.dataType=h.get("dataType")),void 0!==i.url&&"list-required"!==i.url&&(i.url=i.url(e),i.data=h.get("preparePostData")(i.data,e),$.ajax(i).done(function(n){var o=v.init(n);o=v.updateCategories(o,n),o=v.convertXml(o),t(e,n)&&(o=v.processData(o,e),u(o,e)),v.checkIfDataExists(o)&&b.parent().find("li").length>0?s():l(),h.get("ajaxCallback")()}).fail(function(){p.warning("Fail to load response data")}).always(function(){}))}}switch(e.keyCode){case 27:l(),d();break;case 38:e.preventDefault(),w.length>0&&_>0&&(_-=1,b.val(h.get("getValue")(w[_])),c(_));break;case 40:e.preventDefault(),w.length>0&&_<w.length-1&&(_+=1,b.val(h.get("getValue")(w[_])),c(_));break;default:if(e.keyCode>40||8===e.keyCode){var n=b.val();!0!==h.get("list").hideOnEmptyPhrase||8!==e.keyCode||""!==n?h.get("requestDelay")>0?(void 0!==f&&clearTimeout(f),f=setTimeout(function(){t(n)},h.get("requestDelay"))):t(n):l()}}})}function n(){b.on("keydown",function(e){return e=e||window.event,38===e.keyCode?(suppressKeypress=!0,!1):void 0}).keydown(function(e){13===e.keyCode&&_>-1&&(b.val(h.get("getValue")(w[_])),h.get("list").onKeyEnterEvent(),h.get("list").onChooseEvent(),_=-1,l(),e.preventDefault())})}function o(){b.off("keypress")}function i(){b.focus(function(){""!==b.val()&&w.length>0&&(_=-1,s())})}function a(){b.blur(function(){setTimeout(function(){_=-1,l()},250)})}function r(){b.attr("autocomplete","off")}!function(){y("autocompleteOff",!0)&&r(),e(),t(),n(),o(),i(),a()}()}function s(){E.trigger("show.eac")}function l(){E.trigger("hide.eac")}function c(e){E.trigger("selectElement.eac",e)}function u(e,t){E.trigger("loadElements.eac",[e,t])}function d(){b.trigger("blur")}var f,g=new e.Constans,h=new e.Configuration(n),p=new e.Logger,m=new e.Template(n.template),v=new e.ListBuilderService(h,e.proccess),y=h.equals,b=t,E="",w=[],_=-1;e.consts=g,this.getConstants=function(){return g},this.getConfiguration=function(){return h},this.getContainer=function(){return E},this.getSelectedItemIndex=function(){return _},this.getItems=function(){return w},this.getItemData=function(e){return w.length<e||void 0===w[e]?-1:w[e]},this.getSelectedItemData=function(){return this.getItemData(_)},this.build=function(){i()},this.init=function(){o()}},e.eacHandles=[],e.getHandle=function(t){return e.eacHandles[t]},e.inputHasId=function(e){return void 0!==$(e).attr("id")&&$(e).attr("id").length>0},e.assignRandomId=function(t){var n="";do{n="eac-"+Math.floor(1e4*Math.random())}while(0!==$("#"+n).length);elementId=e.consts.getValue("CONTAINER_ID")+n,$(t).attr("id",n)},e.setHandle=function(t,n){e.eacHandles[n]=t},e}(EasyAutocomplete||{});!function(e){e.fn.easyAutocomplete=function(t){return this.each(function(){var n=e(this),o=new EasyAutocomplete.main(n,t);EasyAutocomplete.inputHasId(n)||EasyAutocomplete.assignRandomId(n),o.init(),EasyAutocomplete.setHandle(o,n.attr("id"))})},e.fn.getSelectedItemIndex=function(){var t=e(this).attr("id");return void 0!==t?EasyAutocomplete.getHandle(t).getSelectedItemIndex():-1},e.fn.getItems=function(){var t=e(this).attr("id");return void 0!==t?EasyAutocomplete.getHandle(t).getItems():-1},e.fn.getItemData=function(t){var n=e(this).attr("id");return void 0!==n&&t>-1?EasyAutocomplete.getHandle(n).getItemData(t):-1},e.fn.getSelectedItemData=function(){var t=e(this).attr("id");return void 0!==t?EasyAutocomplete.getHandle(t).getSelectedItemData():-1}}(jQuery),function(){function e(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),n=function(e,n){return!(void 0===t[e]||t[e]===n)};if(t.opacity<1||n("zIndex","auto")||n("transform","none")||n("mixBlendMode","normal")||n("filter","none")||n("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1}function t(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function n(e){e&&e.blur&&e!==document.body&&e.blur()}function o(e,t){for(var n=0;n<e.length;++n)if(e[n]===t)return!0;return!1}function i(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function a(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,n=!1,o=function(){n?this.downgradeModal():this.maybeHideModal(),n=!1}.bind(this),i=function(i){if(i.target===e){var a="DOMNodeRemoved";n|=i.type.substr(0,a.length)===a,window.clearTimeout(t),t=window.setTimeout(o,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(t){e.addEventListener(t,i)})}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}function r(){if(!i(this))return g.call(this);var e=t(this);e&&e.close()}var s=window.CustomEvent;s&&"object"!=typeof s||(s=function(e,t){t=t||{};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),n},s.prototype=window.Event.prototype),a.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),l.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var n=document.createEvent("MouseEvents");n.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(n),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"],o=t.map(function(e){return e+":not([disabled])"});o.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(o.join(", "))}n(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!l.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");e(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,l.needsCentering(this.dialog_)?(l.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new s("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(t)}};var l={};if(l.reposition=function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,n=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,n)+"px"},l.isInlinePositionSetByStylesheet=function(e){for(var t=0;t<document.styleSheets.length;++t){var n=document.styleSheets[t],i=null;try{i=n.cssRules}catch(e){}if(i)for(var a=0;a<i.length;++a){var r=i[a],s=null;try{s=document.querySelectorAll(r.selectorText)}catch(e){}if(s&&o(s,e)){var l=r.style.getPropertyValue("top"),c=r.style.getPropertyValue("bottom");if(l&&"auto"!==l||c&&"auto"!==c)return!0}}}return!1},l.needsCentering=function(e){return!("absolute"!==window.getComputedStyle(e).position||"auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom||l.isInlinePositionSetByStylesheet(e))},l.forceRegisterDialog=function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new a(e)},l.registerDialog=function(e){e.showModal||l.forceRegisterDialog(e)},l.DialogManager=function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var n=[];t.forEach(function(e){for(var t,o=0;t=e.removedNodes[o];++o)t instanceof Element&&("dialog"===t.localName&&n.push(t),n=n.concat(t.querySelectorAll("dialog")))}),n.length&&e(n)}))},l.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},l.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},l.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,n=0;e=this.pendingDialogStack[n];++n)e.updateZIndex(--t,--t),0===n&&(this.overlay.style.zIndex=--t);var o=this.pendingDialogStack[0];if(o){(o.dialog.parentNode||document.body).appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},l.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=t(e);){for(var n,o=0;n=this.pendingDialogStack[o];++o)if(n.dialog===e)return 0===o;e=e.parentElement}return!1},l.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),n(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},l.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new s("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&n.dialog.dispatchEvent(t)&&n.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},l.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach(function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()})},l.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},l.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},l.dm=new l.DialogManager,l.formSubmitter=null,l.useValue=null,void 0===window.HTMLDialogElement){var c=document.createElement("form");if(c.setAttribute("method","dialog"),"dialog"!==c.method){var u=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(u){var d=u.get;u.get=function(){return i(this)?"dialog":d.call(this)};var f=u.set;u.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):f.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",u)}}document.addEventListener("click",function(e){if(l.formSubmitter=null,l.useValue=null,!e.defaultPrevented){var n=e.target;if(n&&i(n.form)){if(!("submit"===n.type&&["button","input"].indexOf(n.localName)>-1)){if("input"!==n.localName||"image"!==n.type)return;l.useValue=e.offsetX+","+e.offsetY}t(n)&&(l.formSubmitter=n)}}},!1);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=r,document.addEventListener("submit",function(e){var n=e.target;if(i(n)){e.preventDefault();var o=t(n);if(o){var a=l.formSubmitter;a&&a.form===n?o.close(l.useValue||a.value):o.close(),l.formSubmitter=null}}},!0)}l.forceRegisterDialog=l.forceRegisterDialog,l.registerDialog=l.registerDialog,"function"==typeof define&&"amd"in define?define(function(){return l}):"object"==typeof module&&"object"==typeof module.exports?module.exports=l:window.dialogPolyfill=l}();