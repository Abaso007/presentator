(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05a7c77a"],{"11b2":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"slotWrapper"},[t._t("default")],2)])},n=[],i={name:"relocator",props:{container:{default:"body"}},computed:{containerElem:function(){return"string"===typeof this.container?document.querySelector(this.container):this.container}},mounted:function(){var t=this;if(this.containerElem){var e=this.$refs.slotWrapper;e.parentNode.removeChild(e),this.containerElem.appendChild(e),this.$once("hook:beforeDestroy",(function(){e&&(e.parentNode.removeChild(e),t.$el.appendChild(e))}))}}},o=i,r=s("2877"),c=Object(r["a"])(o,a,n,!1,null,null,null);e["a"]=c.exports},3905:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"popupContainer",staticClass:"popup",class:{active:t.isActive,"is-closing":t.isClosing},attrs:{tabindex:"-1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:e.target!==e.currentTarget?null:void(!t.closeOnEsc||t.close())}}},[s("div",{staticClass:"popup-overlay",on:{click:function(e){e.preventDefault(),!t.closeOnOverlay||t.close()}}}),s("div",{staticClass:"popup-panel"},[t.closeBtn?s("span",{staticClass:"popup-close-handle popup-close",on:{click:function(e){return e.preventDefault(),t.close()}}}):t._e(),s("div",{staticClass:"popup-header"},[t._t("header")],2),s("div",{staticClass:"popup-content"},[t._t("content")],2),s("div",{staticClass:"popup-footer"},[t._t("footer")],2)])])},n=[],i={name:"popup",props:{closeOnEsc:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0}},data:function(){return{isActive:!1,isClosing:!1}},methods:{open:function(){var t=this;this.isActive=!0,this.isClosing=!1,this.$nextTick((function(){t.$refs.popupContainer.focus()})),document.body.classList.add("popup-active"),this.$nextTick((function(){var e=t.$el.querySelector("form input");e&&e.focus()}))},close:function(){var t=this;this.isActive&&(this.isClosing=!0,document.body.classList.remove("popup-active"),this.closingTimeoutId&&clearTimeout(this.closingTimeoutId),this.closingTimeoutId=setTimeout((function(){t.isActive=!1,t.isClosing=!1}),300))}}},o=i,r=s("2877"),c=Object(r["a"])(o,a,n,!1,null,null,null);e["a"]=c.exports},"438c":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"app-footer"},[s("div",{staticClass:"info"},[s("a",{staticClass:"info-item",attrs:{href:t.$getAppConfig("VUE_APP_RELEASES_URL"),target:"_blank",rel:"noopener"}},[s("span",{staticClass:"txt"},[t._v("Presentator v2.5.0")])]),s("a",{staticClass:"info-item",attrs:{href:t.$getAppConfig("VUE_APP_REPO_URL"),target:"_blank",rel:"noopener"}},[s("i",{staticClass:"fe fe-github"}),s("span",{staticClass:"txt"},[t._v("Github")])]),t.loggedUser&&t.loggedUser.id&&t.$getAppConfig("VUE_APP_SHOW_SEND_FEEDBACK")<<0?s("div",{staticClass:"info-item handle",on:{click:function(e){return e.preventDefault(),t.openFeedbackPopup()}}},[s("i",{staticClass:"fe fe-life-buoy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])]):t._e(),t._l(t.getFooterLinks(),(function(e,a){return s("a",{staticClass:"info-item",attrs:{href:e,target:"_blank",rel:"noopener"}},[s("span",{staticClass:"txt"},[t._v(t._s(a))])])})),s("div",{staticClass:"info-item"},[s("languages-select")],1)],2),t.$getAppConfig("VUE_APP_SHOW_CREDITS")<<0?s("div",{staticClass:"credits"},[s("i18n",{attrs:{path:"Crafted by {author}"}},[s("a",{attrs:{slot:"author",href:"https://gani.bg",target:"_blank",rel:"noopener"},slot:"author"},[t._v("Gani")])])],1):t._e(),t.$getAppConfig("VUE_APP_SHOW_SEND_FEEDBACK")<<0?s("relocator",[s("feedback-popup",{ref:"feedbackPopup"})],1):t._e()],1)},n=[],i=(s("8e6e"),s("ac6a"),s("456d"),s("28a5"),s("bd86")),o=s("2f62"),r=s("11b2"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[s("popup",{ref:"popup",staticClass:"popup-sm",scopedSlots:t._u([{key:"header",fn:function(){return[s("h4",{staticClass:"title"},[t._v(t._s(t.$t("Help us improve Presentator")))])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"alert alert-light-border txt-center m-b-small"},[s("p",[t._v(" "+t._s(t.$t("Found a bug or have a feature request?"))+" "),s("br"),s("i18n",{attrs:{path:"Fill the form below OR {issuesLink}."}},[s("a",{attrs:{slot:"issuesLink",href:t.$getAppConfig("VUE_APP_ISSUES_URL"),target:"_blank",rel:"noopener"},slot:"issuesLink"},[t._v(t._s(t.$t("create a GitHub issue")))])])],1)]),s("form-field",{staticClass:"required",attrs:{name:"message"}},[s("label",{attrs:{for:"feedback_message"}},[t._v(t._s(t.$t("Message")))]),s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.message,expression:"message",modifiers:{trim:!0}}],attrs:{id:"feedback_message",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]},proxy:!0},{key:"footer",fn:function(){return[s("button",{staticClass:"btn btn-light-border",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.close()}}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Cancel")))])]),s("button",{staticClass:"btn btn-primary btn-cons btn-loader",class:{"btn-loader-active":t.isProcessing},attrs:{type:"submit"}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])])]},proxy:!0}])})],1)},l=[],u=s("f744"),p=s("3905"),f={name:"feedback-popup",components:{popup:p["a"]},data:function(){return{isProcessing:!1,message:""}},methods:{open:function(){this.resetForm(),this.$refs.popup.open(),this.$emit("open")},close:function(){this.$refs.popup.close(),this.$emit("close")},resetForm:function(){this.message=""},submitForm:function(){var t=this;this.isProcessing||(this.isProcessing=!0,u["a"].Users.sendFeedback(this.message).then((function(e){t.$toast(t.$t("Thank you for the feedback!")),t.close(),t.resetForm()})).catch((function(e){t.$errResponseHandler(e)})).finally((function(){t.isProcessing=!1})))}}},g=f,d=s("2877"),m=Object(d["a"])(g,c,l,!1,null,null,null),h=m.exports,v=s("f7ef");function _(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function b(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?_(s,!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):_(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var C={name:"app-footer",components:{relocator:r["a"],"feedback-popup":h,"languages-select":v["a"]},computed:b({},Object(o["d"])({loggedUser:function(t){return t.user.user}})),methods:{getFooterLinks:function(){for(var t=(this.$getAppConfig("VUE_APP_FOOTER_LINKS")||"").split(","),e={},s=0;s<t.length;s++){var a=t[s].split("|",2),n=(a[0]||"").trim(),i=(a[1]||"").trim();n.length&&i.length&&(e[n]=i)}return e},openFeedbackPopup:function(){this.$refs.feedbackPopup&&this.$refs.feedbackPopup.open()}}},k=C,y=Object(d["a"])(k,a,n,!1,null,null,null);e["a"]=y.exports},"81fb":function(t,e,s){t.exports=s.p+"spa-resources/img/logogram.a11cb759.svg"},c999:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"auth-container"},[s("div",{staticClass:"flex-fill-block"}),s("div",{staticClass:"container-wrapper container-wrapper-sm"},[s("app-header"),s("div",{staticClass:"clearfix m-b-large"}),s("div",{staticClass:"panel auth-panel"},[s("h3",{staticClass:"panel-title"},[t._v(t._s(t.$t("Email change confirmation")))]),s("div",{staticClass:"panel-content"},[t.isProcessing?s("div",{staticClass:"alert alert-transp-primary txt-center"},[s("p",[t._v(t._s(t.$t("Changing your email address"))+" "),s("span",{staticClass:"loader m-l-5"})])]):[t.processSuccess?t._e():s("div",{staticClass:"alert alert-transp-danger txt-center"},[s("p",[t._v(" "+t._s(t.$t("The provided email change token is invalid or expired."))+" "),s("br"),s("i18n",{attrs:{path:"Please contact us at {supportEmail} if you need further assistance."}},[s("a",{attrs:{slot:"supportEmail",href:"mailto:"+t.$getAppConfig("VUE_APP_SUPPORT_EMAIL")},slot:"supportEmail"},[t._v(t._s(t.$getAppConfig("VUE_APP_SUPPORT_EMAIL")))])])],1)]),s("div",{staticClass:"clearfix m-b-small"}),s("router-link",{staticClass:"btn btn-primary block",attrs:{to:{name:"login"}}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Continue to login")))]),s("i",{staticClass:"fe fe-arrow-right-circle"})])]],2)])],1),s("div",{staticClass:"flex-fill-block m-b-base"}),s("app-footer")],1)},n=[],i=s("f744"),o=s("dbb6"),r=s("438c"),c={name:"activate",components:{"app-header":o["a"],"app-footer":r["a"]},data:function(){return{isProcessing:!1,processSuccess:!1}},beforeMount:function(){var t=this;this.$setDocumentTitle((function(){return t.$t("Email change confirmation")})),this.activate()},methods:{activate:function(){var t=this;this.isProcessing||(this.isProcessing=!0,i["a"].Users.confirmEmailChange(this.$route.params.emailChangeToken).then((function(e){t.processSuccess=!0,t.$loginByResponse(e)})).catch((function(e){t.processSuccess=!1})).finally((function(){t.isProcessing=!1})))}}},l=c,u=s("2877"),p=Object(u["a"])(l,a,n,!1,null,null,null);e["default"]=p.exports},dbb6:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"app-logo-wrapper"},[a("router-link",{staticClass:"app-logo",attrs:{to:{name:"home"}}},[a("img",{staticClass:"img",attrs:{src:s("81fb"),alt:"Presentator logo",width:"44"}}),a("span",{staticClass:"txt"},[t._v("Presentator")])])],1)},n=[],i={name:"app-header"},o=i,r=s("2877"),c=Object(r["a"])(o,a,n,!1,null,null,null);e["a"]=c.exports},f7ef:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"languages-select",class:{loading:t.isChanging}},[s("div",{staticClass:"selected-language"},[s("span",{staticClass:"txt language-title"},[t._v(t._s(t.activeLanguageTitle))]),t._v(" ("),s("span",{staticClass:"txt language-code"},[t._v(t._s(t.activeLanguageCode))]),t._v(") ")]),s("toggler",{staticClass:"dropdown dropdown-sm"},t._l(t.languages,(function(e,a){return s("div",{key:"language_"+a,staticClass:"dropdown-item",class:{active:t.activeLanguageCode==a},on:{click:function(e){return e.preventDefault(),t.changeLanguage(a)}}},[s("small",{staticClass:"label language-code m-r-5",class:t.activeLanguageCode==a?"label-transp-primary":"label-light-border"},[t._v(t._s(a))]),s("span",{staticClass:"txt language-title"},[t._v(t._s(e))])])})),0)],1)},n=[],i=s("9225"),o={name:"languages-select",data:function(){return{isChanging:!1,languages:Object.assign({},i["c"])}},watch:{"$i18n.locale":function(t,e){"function"===typeof document._titleFunc&&this.$setDocumentTitle(document._titleFunc)}},computed:{activeLanguageCode:function(){return this.$i18n.locale},activeLanguageTitle:function(){return this.languages[this.activeLanguageCode]}},methods:{changeLanguage:function(t){var e=this;this.isChanging=!0,Object(i["a"])(t).finally((function(){e.isChanging=!1}))}}},r=o,c=s("2877"),l=Object(c["a"])(r,a,n,!1,null,null,null);e["a"]=l.exports}}]);