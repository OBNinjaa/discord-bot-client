"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[93198],{594838:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.onLearnMore,r=e.selectedBackgroundOption,M=e.onSelectBackgroundOption,b=e.currentDeviceId,N=e.smallerBackgroundOptions,B=(0,o.useStateFromStores)([l.default],(function(){return l.default.getCurrentUser()})),S=(j=a.useState(null),x=2,function(e){if(Array.isArray(e))return e}(j)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0){o.push(r.value);if(t&&o.length===t)break}}catch(e){l=!0;a=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw a}}return o}}(j,x)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name)
;return"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(j,x)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),R=S[0],w=S[1],D=(0,O.default)(),T=d.default.canUseCustomBackgrounds(B),U=(0,o.useStateFromStoresObject)([p.default],(function(){return T?p.default.videoFilterAssets:{}})),V=a.useMemo((function(){return Object.values(U).filter((function(e){return e.type===y.VideoFilterType.BACKGROUND}))}),[U]),L=(0,u.useAnalyticsContext)();var j,x;a.useEffect((function(){D?(0,m.applyBackgroundOptionPreview)(r,b,{track:!1}).catch((function(){return M(null)})):null!=r&&M(null)}),[b]);var W=function(e){M(e);(0,m.applyBackgroundOptionPreview)(e,b,{location:L.location}).then((function(){return w(null)})).catch((function(){w(E.default.Messages.VIDEO_BACKGROUND_ERROR_APPLY);(0,
m.applyBackgroundOptionPreview)(null,b,{location:L.location})}))};if(!D)return null;return a.createElement(a.Fragment,null,I(c.Heading,{className:h.default.spacingTop24,variant:"eyebrow",color:"header-secondary",level:3},void 0,E.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND),null!=R?I(i.default,{className:h.default.videoBackgroundError},void 0,R):null,I(g.default,{canUseCustomBackgrounds:T,customBackgroundOptions:V,selectedOption:r,onSelectOption:W,onUpsellClick:function(){(0,s.openModalLazy)(C(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return Promise.all([n.e(40532),n.e(49209),n.e(38509)]).then(n.bind(n,338509));case 2:r=e.sent;o=r.default;return e.abrupt("return",(function(e){return a.createElement(o,k({},e,{onLearnMore:t,analyticsSource:k({},L.location,{object:_.AnalyticsObjects.BUTTON_CTA})}))}));case 5:case"end":return e.stop()}}),e)}))))},onAddBackgroundImage:function(e,t,n){
void 0===n&&(n=!1);return new Promise(function(){var r=C(regeneratorRuntime.mark((function r(a){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:r.prev=0;r.next=3;return(0,f.uploadVideoFilterAsset)(e,y.VideoFilterType.BACKGROUND);case 3:o=r.sent;W(o);(0,v.trackBackgroundOptionAdded)(o,t.type===A.FileTypes.MP4,n);w(null);r.next=12;break;case 9:r.prev=9;r.t0=r.catch(0);w(r.t0.message);case 12:a();case 13:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}())},smallerOptions:N}))};var r,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e
;n&&n.set(e,r);return r}(n(667294)),o=n(536211),u=n(556470),l=M(n(728429)),i=M(n(682473)),c=n(772575),s=n(194322),d=M(n(838583)),f=n(144594),p=M(n(96005)),v=n(939617),m=n(700192),O=M(n(712594)),g=M(n(881963)),y=n(280696),_=n(770348),A=n(683749),E=M(n(247001)),h=M(n(816725));function M(e){return e&&e.__esModule?e:{default:e}}function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function I(e,t,n,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=a;else if(u>1){for(var l=new Array(u),i=0;i<u;i++)l[i]=arguments[i+3];t.children=l}if(t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function k(){k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return k.apply(this,arguments)}function N(e,t,n,r,a,o,u){try{var l=e[o](u),i=l.value}catch(e){n(e);return}l.done?t(i):Promise.resolve(i).then(r,a)}function C(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function u(e){N(o,r,a,u,l,"next",e)}function l(e){N(o,r,a,u,l,"throw",e)}u(void 0)}))}}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},881963:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=ne
;var r,a=W(n(667294)),o=j(n(294184)),u=n(536211),l=n(378158),i=n(556470),c=j(n(954140)),s=j(n(37039)),d=W(n(278352)),f=j(n(652566)),p=j(n(962119)),v=j(n(16941)),m=n(645758),O=W(n(730977)),g=j(n(887727)),y=j(n(908306)),_=j(n(41024)),A=j(n(110583)),E=j(n(118138)),h=n(194322),M=n(499458),b=n(598671),I=j(n(865725)),k=j(n(308920)),N=n(692711),C=j(n(71636)),P=n(939617),B=j(n(211500)),S=n(280696),R=n(770348),w=n(439142),D=n(173708),T=n(265517),U=j(n(247001)),V=j(n(750812)),L=["option","source","selected","onSelectOption","isAnimatedImage","isVideo","hotspotLocation"];function j(e){return e&&e.__esModule?e:{default:e}}function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}function W(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=x(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}function z(){z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return z.apply(this,arguments)}function H(e,t,n,r,a,o,u){try{var l=e[o](u),i=l.value}catch(e){n(e);return}l.done?t(i):Promise.resolve(i).then(r,a)}function G(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function u(e){H(o,r,a,u,l,"next",e)}function l(e){H(o,r,a,u,l,"throw",e)}u(void 0)}))}}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0){
o.push(r.value);if(t&&o.length===t)break}}catch(e){l=!0;a=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $(e,t,n,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=a;else if(u>1){for(var l=new Array(u),i=0;i<u;i++)l[i]=arguments[i+3]
;t.children=l}if(t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function Y(e){var t,n=e.icon,r=e.iconClassName,a=e.onClick,u=e.text,l=e.children,i=e.className,c=e.selected,s=void 0!==c&&c,d=e.disabled,f=void 0!==d&&d,p=e.onMouseLeave,O=e.onBlur;return $(v.default,{className:(0,o.default)(i,V.default.backgroundOption,(t={},t[V.default.backgroundOptionSelected]=s,t[V.default.backgroundOptionDisabled]=f,t)),onMouseLeave:p,onBlur:O,onClick:f?void 0:a},void 0,s?$("div",{className:V.default.backgroundOptionRing}):null,$("div",{className:V.default.backgroundOptionInner},void 0,l,$("div",{className:V.default.backgroundOptionContent},void 0,$(n,{className:(0,o.default)(V.default.backgroundIconOptionIcon,r)}),$(m.Text,{className:V.default.backgroundOptionText,color:"none",variant:"text-sm/normal"},void 0,u))))}Y.displayName="VideoBackgroundIconOption";function X(e){
var t=e.option,n=e.source,r=e.isAnimated,o=F(a.useState(!1),2),u=o[0],l=o[1];a.useEffect((function(){(new Image).src=n}),[n]);if(!r||null==t)return $("div",{className:V.default.backgroundImageOption,style:{backgroundImage:"url("+n+")"}});var i=(0,N.getVideoFilterAssetURL)({userId:t.user_id,assetId:t.id,assetHash:t.asset,size:720,canAnimate:!1});return $("img",{onMouseMove:function(){return l(!0)},onMouseLeave:function(){return l(!1)},className:V.default.backgroundImageOption,src:u?n:i,alt:t.id})}X.displayName="VideoBackgroundImage";function Z(e){var t,r=e.option,p=e.source,m=e.selected,O=void 0!==m&&m,g=e.onSelectOption,y=e.isAnimatedImage,_=e.isVideo,A=e.hotspotLocation,h=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++){n=o[r];t.indexOf(n)>=0||(a[n]=e[n])}return a}(e,L),M=(0,i.useAnalyticsContext)(),N=(0,s.default)(c.default.VIDEO_BACKGROUND_IMAGE_OPTION).analyticsLocations,C=(0,u.useStateFromStores)([f.default],(function(){
return null!=A&&f.default.hasHotspot(A)})),B=_?$(I.default,{className:V.default.backgroundImageOption,src:p,loop:!0,playOnHover:!0,muted:!0}):$(X,{isAnimated:y,option:(0,P.isCustomBackgroundOption)(r)?r:void 0,source:p});function S(){if(null!=A&&C){d.hideHotspot(A);k.default.track(R.AnalyticEvents.PREMIUM_UPSELL_VIEWED,{type:T.PremiumUpsellTypes.ANIMATED_VIDEO_BACKGROUND_NEW_PRESET,location:M.location,location_stack:N})}}return a.createElement(v.default,z({},h,{className:(0,o.default)(V.default.backgroundOption,(t={},t[V.default.backgroundOptionSelected]=O,t)),onClick:function(){return g(r)},onContextMenu:function(e){return(0,l.openContextMenuLazy)(e,G(regeneratorRuntime.mark((function e(){var t,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return n.e(19401).then(n.bind(n,419401));case 2:t=e.sent;o=t.default;return e.abrupt("return",(function(e){return a.createElement(o,z({},e,{backgroundOption:r,optionIsInUse:O}))}));case 5:case"end":
return e.stop()}}),e)}))))}}),O?$("div",{className:V.default.backgroundOptionRing}):null,$("div",{onFocus:S,onMouseEnter:S,className:V.default.backgroundOptionInner},void 0,B),_||y?$(E.default,{className:V.default.playIcon}):null,C&&$(b.TextBadge,{text:U.default.Messages.NEW,className:V.default.newTextBadge}))}Z.displayName="VideoBackgroundImageOption";function q(){return $("div",{className:V.default.customBackgroundTooltip},void 0,$(_.default,{className:V.default.customBackgroundTooltipIcon}),$(m.Text,{variant:"text-sm/normal"},void 0,U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP))}q.displayName="CustomBackgroundTooltip";function J(e){var t=e.onClick,n=e.tooltipText,r=e.disabled,a=void 0!==r&&r,o=(0,u.useStateFromStores)([f.default],(function(){return f.default.hasHotspot(w.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)}));function l(){d.hideHotspot(w.HotspotLocations.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW)}
var i=o?U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NEW_ANIMATED_TOOLTIP:n;return $(O.TooltipContainer,{text:i,className:V.default.newBackgroundTooltipContainer},void 0,$(Y,{className:V.default.backgroundOptionBlurred,disabled:a,icon:y.default,iconClassName:V.default.uploadIconOption,onClick:t,onMouseLeave:l,onBlur:l,text:$("div",{className:V.default.backgroundCustomInlineUpsell},void 0,$(_.default,{className:V.default.backgroundCustomInlineUpsellIcon}),$("div",{className:V.default.overflowEllipsis},void 0,U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM))},void 0,$("div",{className:V.default.backgroundCustomInlineUpsellBackground}),$("div",{className:V.default.backgroundCustomInlineUpsellBackgroundDarkener})),o&&$(b.TextBadge,{text:U.default.Messages.NEW,className:V.default.newTextBadge}))}J.displayName="VideoBackgroundOptionUpload";function Q(e){var t=e.onClick,n=(0,i.useAnalyticsContext)(),r=(0,s.default)(c.default.VIDEO_BACKGROUND_CUSTOM_UPSELL).analyticsLocations
;a.useEffect((function(){k.default.track(R.AnalyticEvents.PREMIUM_UPSELL_VIEWED,{type:T.PremiumUpsellTypes.VIDEO_BACKGROUNDS_INLINE,location:n.location,location_stack:r})}),[]);return $(J,{onClick:t,tooltipText:U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPSELL_TOOLTIP})}Q.displayName="VideoBackgroundOptionUploadCustomUpsell";function ee(e){var t=e.onAddBackgroundImage,r=e.disabled,o=(0,M.useModalContext)(),u=r?U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_MAX_REACHED.format({maxCustomBackgrounds:25}):U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_TOOLTIP_PREMIUM,l=[{name:U.default.Messages.IMAGES,extensions:["jpg","jpeg","png","gif","mp4"]}];return $(J,{disabled:r,onClick:function(){(0,h.openModalLazy)(G(regeneratorRuntime.mark((function e(){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return Promise.all([n.e(40532),n.e(64101),n.e(49209),n.e(75527),n.e(66027)]).then(n.bind(n,75527));case 2:
r=e.sent;o=r.default;return e.abrupt("return",(function(e){return a.createElement(o,z({maxFileSizeBytes:S.MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES,onComplete:t,uploadType:D.UploadTypes.VIDEO_BACKGROUND,filters:l,modalTitle:U.default.Messages.UPLOAD_BACKGROUND,modalSubTitle:U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_UPLOAD_SUBTITLE,uploadOptionTitle:U.default.Messages.SELECT_IMAGE_MODAL_UPLOAD_IMAGE_OR_VIDEO,showUpsellHeader:!0},e))}));case 5:case"end":return e.stop()}}),e)}))),{contextKey:o})},tooltipText:u})}ee.displayName="VideoBackgroundOptionUploadCustom";var te=$(q,{});function ne(e){var t=e.canUseCustomBackgrounds,n=e.customBackgroundOptions,r=e.selectedOption,o=e.onSelectOption,u=e.onUpsellClick,l=e.onAddBackgroundImage,i=e.smallerOptions,d=a.useMemo((function(){return n.sort((function(e,t){return null==e.last_used||null==t.last_used?C.default.compare(t.id,e.id):new Date(t.last_used).getTime()-new Date(e.last_used).getTime()}))
}),[n]),f=d.length>=25,v=p.default.useExperiment({}).enabled,m=(0,s.default)(c.default.VIDEO_BACKGROUND_OPTIONS).AnalyticsLocationProvider,y=Object.values((0,B.default)()),_=(v?y:y.filter((function(e){return!(0,P.isBirthdayBackground)(e.id)}))).sort((function(e,t){return S.DEFAULT_VIDEO_BACKGROUND_SORT[e.id]-S.DEFAULT_VIDEO_BACKGROUND_SORT[t.id]}));return $(m,{},void 0,$("div",{className:i?V.default.backgroundOptionsSmall:V.default.backgroundOptionsLarge},void 0,$(Y,{selected:null==r,icon:A.default,iconClassName:V.default.noneOptionIcon,onClick:function(){return o(null)},text:U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_NONE}),$(Y,{className:V.default.backgroundOptionBlurred,selected:r===S.BLUR_BACKGROUND_OPTION,icon:g.default,iconClassName:V.default.blurOptionIcon,onClick:function(){return o(S.BLUR_BACKGROUND_OPTION)},text:U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_BLUR},void 0,$("div",{className:V.default.backgroundOptionBlurBackground})),t?$(ee,{onAddBackgroundImage:l,
disabled:f}):$(Q,{onClick:u}),d.map((function(e){return $(O.default,{text:te,"aria-label":U.default.Messages.CAMERA_PREVIEW_VIDEO_BACKGROUND_CUSTOM_TOOLTIP},e.id,(function(t){var n=(0,N.getVideoFilterAssetURL)({userId:e.user_id,assetId:e.id,assetHash:e.asset,size:720});return null==n?null:a.createElement(Z,z({},t,{key:e.id,option:e,source:n,selected:(0,P.isCustomBackgroundOption)(r)&&r.id===e.id,onSelectOption:o,isVideo:(0,N.isVideoAssetHash)(e.asset),isAnimatedImage:(0,N.isAnimatedIconHash)(e.asset)}))}))})),_.map((function(e){var t=!0===e.isVideo;return $(O.default,{text:e.name,"aria-label":e.name},e.id,(function(n){return a.createElement(Z,z({},n,{key:e.id,option:e.id,source:e.source,selected:r===e.id,onSelectOption:o,isVideo:t,isAnimatedImage:!1,hotspotLocation:e.hotspotLocation}))}))}))))}ne.displayName="VideoBackgroundOptions"},393198:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.FilterLoadingIndicator=C;t.default=function(e){
var t,n=e.hideDeviceSelector,r=void 0!==n&&n,l=e.hideDeviceHeader,v=void 0!==l&&l,h=e.onLearnMore,M=e.selectedBackgroundOption,I=e.onSelectBackgroundOption,k=e.renderCamera,N=e.hidePreviewToggle,C=void 0!==N&&N,P=e.showSmallBackgroundOptions,B=void 0!==P&&P,S=(0,u.useStateFromStores)([f.default],(function(){return f.default.getVideoDeviceId()})),R=(0,u.useStateFromStoresArray)([f.default],(function(){return Object.values(f.default.getVideoDevices())})),w=c.AlwaysPreviewVideo.useSetting(),D=R.map((function(e){return{value:e.id,label:e.name}}));a.useEffect((function(){(0,s.fetchVideoFilterAssets)()}),[]);return a.createElement(a.Fragment,null,k(S),f.default.isEnabled()?null:b(O.Text,{className:E.default.permissionWarning,color:"interactive-normal",variant:"text-sm/normal"},void 0,A.default.Messages.FORM_WARNING_VIDEO_PREVIEW.format({onEnableClick:i.default.enable})),C?null:b(m.default,{className:E.default.previewToggle,note:A.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW_NOTE,
onChange:function(e){c.AlwaysPreviewVideo.updateSetting(e);y.default.track(_.AnalyticEvents.UPDATE_USER_SETTINGS_LOCAL,{always_preview_video:e})},value:w,hideBorder:!0},void 0,b("div",{className:E.default.cameraPreviewTitle},void 0,A.default.Messages.CAMERA_PREVIEW_ALWAYS_PREVIEW)),r?null:a.createElement(a.Fragment,null,v?null:b(p.Heading,{className:E.default.spacingTop24,variant:"eyebrow",color:"header-secondary",level:3},void 0,A.default.Messages.CAMERA_PREVIEW_CAMERA),b(g.SingleSelect,{placeholder:A.default.Messages.CHANGE_CAMERA,className:(0,o.default)(E.default.selector,(t={},t[E.default.selectorNoHeader]=v,t)),options:D,value:S,onChange:function(e){return i.default.setVideoDevice(e)}})),b(d.default,{onLearnMore:h,selectedBackgroundOption:M,onSelectBackgroundOption:I,currentDeviceId:S,smallerBackgroundOptions:B}))};var r,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=M(t);if(n&&n.has(e))return n.get(e)
;var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}(n(667294)),o=h(n(294184)),u=n(536211),l=n(91817),i=h(n(740207)),c=n(894826),s=n(144594),d=h(n(594838)),f=h(n(635014)),p=n(772575),v=h(n(80828)),m=h(n(567668)),O=n(645758),g=n(967965),y=h(n(308920)),_=n(770348),A=h(n(247001)),E=h(n(895598));function h(e){return e&&e.__esModule?e:{default:e}}function M(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(M=function(e){return e?n:t})(e)}function b(e,t,n,a){r||(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=a;else if(u>1){for(var l=new Array(u),i=0;i<u;i++)l[i]=arguments[i+3];t.children=l}
if(t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,o=[],u=!0,l=!1;try{for(n=n.call(e);!(u=(r=n.next()).done);u=!0){o.push(r.value);if(t&&o.length===t)break}}catch(e){l=!0;a=e}finally{try{u||null==n.return||n.return()}finally{if(l)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e,t)||function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N=b(v.default,{});function C(){var e=I(a.useState(!1),2),t=e[0],n=e[1],r=(0,u.useStateFromStores)([f.default],(function(){return f.default.isMediaFilterSettingLoading()}));a.useEffect((function(){var e=new l.Timeout;if(r)e.start(150,(function(){n(!0)}));else{e.stop();n(!1)}return function(){return e.stop()}}),[r]);return t?b("div",{className:E.default.filterLoadingIndicator},void 0,N):null}C.displayName="FilterLoadingIndicator"},887727:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=d;var r,a,o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e)
;var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e;n&&n.set(e,r);return r}(n(667294)),u=(r=n(468205))&&r.__esModule?r:{default:r},l=["width","height","color","className","foreground"];function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}function c(){c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};return c.apply(this,arguments)}function s(e,t,n,r){a||(a="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,u=arguments.length-3;if(t||0===u||(t={children:void 0}),1===u)t.children=r;else if(u>1){for(var l=new Array(u),i=0;i<u;i++)l[i]=arguments[i+3]
;t.children=l}if(t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});return{$$typeof:a,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function d(e){var t=e.width,n=void 0===t?24:t,r=e.height,a=void 0===r?24:r,i=e.color,d=void 0===i?"currentColor":i,f=e.className,p=e.foreground,v=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++){n=o[r];t.indexOf(n)>=0||(a[n]=e[n])}return a}(e,l);return o.createElement("svg",c({},(0,u.default)(v),{className:f,width:n,height:a,viewBox:"0 0 32 32"}),s("path",{className:p,
d:"M10.5 24c0-3.682 2.318-6 6-6s6 2.318 6 6h-12zM16.5 16a4 4 0 100-8 4 4 0 000 8zM29.166 15.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 15h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 15zM31.167 16.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 11.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 11h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 11zM31.167 12.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 7.334H28.5a.335.335 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.335.335 0 00-.334-.333zM26.5 7h-1.333a.335.335 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333V7.333A.335.335 0 0026.5 7zM31.167 8.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 23.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 23h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 23zM31.167 24.333a.333.333 0 100-.667.333.333 0 000 .667zM29.166 19.334H28.5a.334.334 0 00-.334.333v.667c0 .183.15.333.334.333h.666c.184 0 .334-.15.334-.333v-.667a.334.334 0 00-.334-.333zM26.5 19h-1.333a.334.334 0 00-.334.333v1.334c0 .183.15.333.334.333H26.5c.183 0 .334-.15.334-.333v-1.334A.334.334 0 0026.5 19zM31.167 20.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 15.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 15H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 15zM1.833 16.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 11.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 11H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 11zM1.833 12.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 7.334h-.667a.335.335 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.335.335 0 00-.333-.333zM7.833 7H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333V7.333A.335.335 0 007.833 7zM1.833 8.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 23.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 23H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 23zM1.833 24.333a.333.333 0 100-.667.333.333 0 000 .667zM4.5 19.334h-.667a.334.334 0 00-.333.333v.667c0 .183.15.333.333.333H4.5c.183 0 .333-.15.333-.333v-.667a.334.334 0 00-.333-.333zM7.833 19H6.5a.335.335 0 00-.333.333v1.334c0 .183.15.333.333.333h1.333c.184 0 .333-.15.333-.333v-1.334A.334.334 0 007.833 19zM1.833 20.333a.333.333 0 100-.667.333.333 0 000 .667z",
fill:d}))}d.displayName="BackgroundBlur"}}]);
//# sourceMappingURL=3d5204dc59667b880802.js.map