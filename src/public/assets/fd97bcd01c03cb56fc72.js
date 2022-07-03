"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[24956],{176548:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.HeaderRecord=t.FindResultDirections=t.AutocompleterResultTypes=t.AutocompleterQuerySymbols=void 0;var n,i=(n=r(213192))&&n.__esModule?n:{default:n};t.HeaderRecord=function(e){this.id=e;this.text=e};var a,l,u=(0,i.default)({UP:null,DOWN:null});t.FindResultDirections=u;t.AutocompleterResultTypes=a;!function(e){e.GUILD="GUILD";e.TEXT_CHANNEL="TEXT_CHANNEL";e.GROUP_DM="GROUP_DM";e.VOICE_CHANNEL="VOICE_CHANNEL";e.USER="USER";e.HEADER="HEADER";e.APPLICATION="APPLICATION";e.SKU="SKU";e.LINK="LINK"}(a||(t.AutocompleterResultTypes=a={}));t.AutocompleterQuerySymbols=l;!function(e){e.USER="@";e.TEXT_CHANNEL="#";e.VOICE_CHANNEL="!";e.GUILD="*";e.APPLICATION="$"}(l||(t.AutocompleterQuerySymbols=l={}))},74978:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){if(e.score===t.score){
var r,n,i,a,l,u,o=null!==(r=null!==(n=e.sortable)&&void 0!==n?n:null===(i=e.comparator)||void 0===i?void 0:i.toLocaleLowerCase())&&void 0!==r?r:"",c=null!==(a=null!==(l=e.sortable)&&void 0!==l?l:null===(u=t.comparator)||void 0===u?void 0:u.toLocaleLowerCase())&&void 0!==a?a:"";if(o<c)return-1;if(o>c)return 1}return t.score-e.score}},648530:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var r,n,i,a,u,o;if(e.score!==t.score)return t.score-e.score;var c=l(e.record),s=l(t.record);if(c!==s)return c-s;var d=null!==(r=null!==(n=e.sortable)&&void 0!==n?n:null===(i=e.comparator)||void 0===i?void 0:i.toLocaleLowerCase())&&void 0!==r?r:"",f=null!==(a=null!==(u=e.sortable)&&void 0!==u?u:null===(o=t.comparator)||void 0===o?void 0:o.toLocaleLowerCase())&&void 0!==a?a:"";if(d<f)return-1;if(d>f)return 1;return 0};var n,i=(n=r(644263))&&n.__esModule?n:{default:n},a=r(770348);function l(e){
if(null==e.parent_id)return e.type===a.ChannelTypes.GUILD_CATEGORY?1e3*(e.position+1):e.position;var t,r,n=1e3*((null!==(t=null===(r=i.default.getChannel(e.parent_id))||void 0===r?void 0:r.position)&&void 0!==t?t:0)+1);return e.isVocal()?n+e.position+500:n+e.position}},872243:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.isSendableSticker=t.getStickerSendability=t.StickerSendability=void 0;var n,i=o(r(656016)),a=o(r(838583)),l=r(851757),u=r(770348);function o(e){return e&&e.__esModule?e:{default:e}}t.StickerSendability=n;!function(e){e[e.SENDABLE=0]="SENDABLE";e[e.SENDABLE_WITH_PREMIUM=1]="SENDABLE_WITH_PREMIUM";e[e.NONSENDABLE=2]="NONSENDABLE";e[e.SENDABLE_WITH_BOOSTED_GUILD=3]="SENDABLE_WITH_BOOSTED_GUILD"}(n||(t.StickerSendability=n={}));var c=function(e,t,r){if(null==t)return n.NONSENDABLE;var o=a.default.canUseStickersEverywhere(t);return(0,l.isStandardSticker)(e)?o?n.SENDABLE:n.SENDABLE_WITH_PREMIUM:(0,
l.isGuildSticker)(e)&&null!=r?e.available?null!=r.guild_id&&""!==r.guild_id&&r.guild_id===e.guild_id?n.SENDABLE:null==r.guild_id||i.default.can({permission:u.Permissions.USE_EXTERNAL_STICKERS,user:t,context:r})?o?n.SENDABLE:n.SENDABLE_WITH_PREMIUM:n.NONSENDABLE:n.SENDABLE_WITH_BOOSTED_GUILD:n.NONSENDABLE};t.getStickerSendability=c;t.isSendableSticker=function(e,t,r){return c(e,t,r)===n.SENDABLE}},371732:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=t.STICKER_PACK_NEW_TIMESTAMP_THRESHOLD=void 0;var n,i=f(r(496486)),a=f(r(536211)),l=f(r(636602)),u=f(r(71319)),o=f(r(960441)),c=f(r(82572)),s=r(770348),d=r(840433);function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1;n.configurable=!0;"value"in n&&(n.writable=!0);Object.defineProperty(e,n.key,n)}}function y(e,t){y=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return y(e,t)}function v(){v=Object.assign||function(e){
for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return v.apply(this,arguments)}var E={pendingUsages:[]},h=1e3*s.Durations.DAY;t.STICKER_PACK_NEW_TIMESTAMP_THRESHOLD=h;var A=new u.default({computeBonus:function(){return 100},computeWeight:function(e){var t=0;e<=3?t=100:e<=15?t=70:e<=30?t=50:e<=45?t=30:e<=80&&(t=10);return t},lookupKey:function(e){return c.default.getStickerById(e)},afterCompute:function(){},numFrequentlyItems:20}),m=function(e){var t=e.stickerIds;null==t||t.forEach((function(e){A.track(e);E.pendingUsages.push({key:e,timestamp:Date.now()})}));A.compute()},L=function(){A.compute()};function g(){var e,t=null===(e=o.default.frecencyWithoutFetchingLatest.stickerFrecency)||void 0===e?void 0:e.stickers;if(null==t)return!1;A.overwriteHistory(i.default.mapValues(t,(function(e){return v({},e,{recentUses:e.recentUses.map(Number).filter((function(e){return e>0}))})})),E.pendingUsages)}
var _=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;y(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.initialize=function(e){this.waitFor(c.default);null!=e&&(E=e);this.syncWith([c.default],L);this.syncWith([o.default],g)};r.getState=function(){return E};r.hasPendingUsage=function(){return E.pendingUsages.length>0};r.__getLocalVars=function(){return{state:E,NUM_FREQUENTLY_USED_STICKERS:20,stickerFrecency:A,handleStickersUsage:m,handleStickersStoreUpdate:L}};!function(e,t,r){t&&p(e.prototype,t);r&&p(e,r);Object.defineProperty(e,"prototype",{writable:!1})}(t,[{key:"stickerFrecencyWithoutFetchingLatest",get:function(){return A}}]);return t}(a.default.PersistedStore);_.displayName="StickersPersistedStore";_.persistKey="StickersPersistedStoreV2";var S=new _(l.default,((n={})[s.ActionTypes.STICKER_TRACK_USAGE]=m,n[s.ActionTypes.USER_SETTINGS_PROTO_UPDATE]=function(e){var t=e.settings.type,r=e.wasSaved
;if(t!==d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS||!r)return!1;E.pendingUsages=[]},n));t.default=S},191013:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,i,a=O(r(824390)),l=O(r(496486)),u=O(r(730381)),o=O(r(536211)),c=O(r(636602)),s=O(r(703124)),d=O(r(504762)),f=O(r(288356)),p=O(r(191839)),y=O(r(834162)),v=O(r(663303)),E=O(r(871778)),h=O(r(194198)),A=O(r(37679)),m=O(r(432310)),L=O(r(693399)),g=r(862728),_=r(71246),S=r(811076),b=r(864489),T=O(r(922629)),I=r(539331),N=r(440815),C=r(770348);function O(e){return e&&e.__esModule?e:{default:e}}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1;n.configurable=!0;"value"in n&&(n.writable=!0);Object.defineProperty(e,n.key,n)}}function R(e,t){R=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return R(e,t)}function w(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){
if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=(0,u.default)().subtract(1,"week"),D=[],k="",G=!1;function q(e,t){return e.application.name.localeCompare(t.application.name,E.default.locale,{sensitivity:"base"})}function K(e,t){return null!=e&&((0,u.default)(e.createdAt).isAfter(P)&&0===t)}var H=((n={})[C.GameTableListKeys.NAME]=q,
n[C.GameTableListKeys.PLATFORM]=function(e,t,r){var n=e.libraryApplication.getDistributor(),i=t.libraryApplication.getDistributor();return n===i?(r===C.TableSortDirections.DESCENDING?-1:1)*q(e,t):null==n?1:null==i?-1:n.localeCompare(i)},n[C.GameTableListKeys.LAST_PLAYED]=function(e,t){return e.isNew&&!t.isNew?-1:!e.isNew&&t.isNew?1:e.lastPlayed===t.lastPlayed?0:e.lastPlayed>t.lastPlayed?-1:1},n[C.GameTableListKeys.ACTIONS]=null,n),j=(0,g.cachedFunction)((function(e){return e.filter((function(e){return null!=e.libraryApplication&&e.shouldShowInLibrary}))})),F=(0,g.cachedFunction)((function(e){return e.filter((function(e){return null!=e.libraryApplication&&m.default.isLaunchable(e.libraryApplication.id,e.libraryApplication.branchId)}))})),B=(0,g.cachedFunction)((function(e,t){return e.filter((function(e){return(0,a.default)(t.toLowerCase(),e.application.name.toLowerCase())}))})),V=(0,g.cachedFunction)((function(e,t,r,n){var i=H[t];if(null==i)return e;var a=w(e).sort(i)
;return r===C.TableSortDirections.DESCENDING?a.reverse():a})),x=(0,g.cachedFunction)((function(e){return e.filter((function(e){return null!=e.libraryApplication&&e.libraryApplication.isHidden()}))}));function Q(e,t){var r=h.default.getCurrentUserStatisticsForApplication(e.id);if(null!=r)return new Date(r.last_played_at).getTime();var n=t[e.id];return null!=n?n:0}function W(){var e=new Set(y.default.getRunningVerifiedApplicationIds()),t={},r=new Set,n=y.default.getGamesSeen(!1,!1).map((function(e){var r=f.default.getGameBySettingGame(e);if(null!=r){t[r.id]=1e3*e.lastFocused;return r.id}return null})),i=Object.values(p.default.getAllLibraryApplications()).map((function(n){return function(e,t,r,n,i){if(!i&&t.has(e.id))return null;var a=f.default.getGame(e.id);if(null==a)return null;var l=Q(a,r);t.add(e.id);return(0,S.isUserEntitledToLibraryApplication)(e)||m.default.isInstalled(e.id,e.branchId)?{key:e.id+"-"+e.branchId,application:a,libraryApplication:e,lastPlayed:l,
supportsCloudSync:null!=e&&m.default.supportsCloudSync(e.id,e.branchId),isNew:K(e,l),isLaunching:s.default.launchingGames.has(e.id),isRunning:n.has(e.id),isLaunchable:(0,I.isLaunchable)({LibraryApplicationStore:p.default,LaunchableGameStore:s.default,DispatchApplicationStore:m.default,ConnectedAppsStore:d.default,applicationId:e.id,branchId:e.branchId}),isUpdatingFlags:p.default.isUpdatingFlags(e.id,e.branchId),shouldShowInLibrary:(0,S.shouldShowGameInLibrary)(a,e,v.default),defaultAction:(0,N.getDefaultLibraryApplicationAction)(e,m.default,L.default)}:null}(n,r,t,e,!0)})).filter(_.isNotNullish),a=n.map((function(n){return function(e,t,r,n){var i=null!=e?f.default.getGame(e):null;if(null==i||null==e||t.has(e))return null;var a=Q(i,r);t.add(e);return{key:e,application:i,lastPlayed:a,supportsCloudSync:!1,isNew:!1,isLaunching:s.default.launchingGames.has(e),isRunning:n.has(e),isLaunchable:(0,I.isLaunchable)({LibraryApplicationStore:p.default,LaunchableGameStore:s.default,
DispatchApplicationStore:m.default,ConnectedAppsStore:d.default,applicationId:e,branchId:null}),isUpdatingFlags:!1,shouldShowInLibrary:!1,libraryApplication:null,defaultAction:null}}(n,r,t,e)})).filter(_.isNotNullish),u=[].concat(w(a),w(i)).sort((function(e,t){return e.lastPlayed===t.lastPlayed?0:e.lastPlayed>t.lastPlayed?-1:1}));G=null!=f.default.lastFetched&&p.default.fetched;if(l.default.isEqual(u,D))return!1;D=u;b.isPlatformEmbedded&&T.default.setSystemTrayApplications(F(D).map((function(e){return e.application})).slice(0,5));return!0}var Y=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;R(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.initialize=function(){this.syncWith([f.default,s.default,y.default,m.default,L.default,p.default,h.default,v.default,d.default],W,200);this.syncWith([A.default,E.default],(function(){return!0}))};r.__getLocalVars=function(){return{MAX_SYSTEM_TRAY_ITEMS:5,
NEW_GAME_THRESHOLD:P,applicationViewItems:D,applicationFilterQuery:k,hasFetchedApplications:G,SORT_FUNCTIONS:H,getLibraryApplicationViewItems:j,getLaunchableApplicationViewItems:F,getFilteredLibraryApplicationViewItems:B,getSortedFilteredLibraryApplicationViewItems:V,getHiddenLibraryApplicationViewItems:x}};!function(e,t,r){t&&M(e.prototype,t);r&&M(e,r);Object.defineProperty(e,"prototype",{writable:!1})}(t,[{key:"applicationFilterQuery",get:function(){return k}},{key:"applicationViewItems",get:function(){return D}},{key:"launchableApplicationViewItems",get:function(){return F(D)}},{key:"libraryApplicationViewItems",get:function(){return j(D)}},{key:"filteredLibraryApplicationViewItems",get:function(){return B(this.libraryApplicationViewItems,k)}},{key:"sortedFilteredLibraryApplicationViewItems",get:function(){return V(this.filteredLibraryApplicationViewItems,A.default.sortKey,A.default.sortDirection,E.default.locale)}},{key:"hiddenLibraryApplicationViewItems",get:function(){return x(D)
}},{key:"hasFetchedApplications",get:function(){return G}}]);return t}(o.default.Store);Y.displayName="ApplicationViewStore";var z=new Y(c.default,((i={})[C.ActionTypes.LIBRARY_APPLICATION_FILTER_UPDATE]=function(e){var t=e.query;k=t},i));t.default=z},440815:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.getDefaultLibraryApplicationAction=function(e,t,r){var a=t.getState(e.id,e.branchId),l=r.getQueuePosition(e.id,e.branchId),u=r.paused;if(null!=a){if(null==l||-1===l)switch(a.type){case i.LocalDispatchApplicationStates.INSTALLING:return i.LibraryApplicationActions.INSTALL;case i.LocalDispatchApplicationStates.UPDATING:case i.LocalDispatchApplicationStates.UPDATE_REQUIRED:return i.LibraryApplicationActions.UPDATE}switch(a.type){case i.LocalDispatchApplicationStates.INSTALLING:case i.LocalDispatchApplicationStates.UPDATING:case i.LocalDispatchApplicationStates.UPDATE_REQUIRED:case i.LocalDispatchApplicationStates.REPAIRING:
return l>0?i.LibraryApplicationActions.MOVE_UP:u?i.LibraryApplicationActions.RESUME:i.LibraryApplicationActions.PAUSE;case i.LocalDispatchApplicationStates.UP_TO_DATE:return i.LibraryApplicationActions.PLAY;case i.LocalDispatchApplicationStates.UNINSTALLING:return null}}if(null!=l&&l>0)return i.LibraryApplicationActions.MOVE_UP;if((0,n.isSupportedPlatform)())return i.LibraryApplicationActions.INSTALL;return null};var n=r(539331),i=r(770348)},37679:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,i=c(r(496486)),a=c(r(536211)),l=c(r(972247)),u=c(r(636602)),o=r(770348);function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1;n.configurable=!0;"value"in n&&(n.writable=!0);Object.defineProperty(e,n.key,n)}}function d(e,t){d=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return d(e,t)}
var f,p="GameLibraryViewStore",y=o.TableSortDirections.ASCENDING,v=o.GameTableListKeys.LAST_PLAYED,E=!1,h=i.default.debounce((function(){E=!1;m.emitChange()}),200);var A=function(e){!function(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;d(e,t)}(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;r.initialize=function(){var e,t=null!==(e=l.default.get(p))&&void 0!==e?e:{};if(null!=t.sortDirection&&null!=t.sortKey){y=t.sortDirection;v=t.sortKey}};r.__getLocalVars=function(){return{STORAGE_KEY:p,DISABLE_MOUSE_TIMEOUT:200,sortDirection:y,sortKey:v,activeRowKey:f,isNavigatingByKeyboard:E,disableKeyboardMode:h,storeInstance:m}};!function(e,t,r){t&&s(e.prototype,t);r&&s(e,r);Object.defineProperty(e,"prototype",{writable:!1})}(t,[{key:"sortDirection",get:function(){return y}},{key:"sortKey",get:function(){return v}},{key:"activeRowKey",get:function(){return f}},{key:"isNavigatingByKeyboard",get:function(){return E}}]);return t}(a.default.Store)
;A.displayName="GameLibraryViewStore";var m=new A(u.default,((n={})[o.ActionTypes.LIBRARY_TABLE_SORT_UPDATE]=function(e){var t=e.direction,r=e.key;y=t;v=r;l.default.set(p,{sortDirection:y,sortKey:v})},n[o.ActionTypes.LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE]=function(e){var t=e.key;if(e.isKeyboardEvent){E=!0;h()}f=t},n)),L=m;t.default=L},424956:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=t.WHITESPACE_REGEX=t.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS=void 0;var n=q(r(824390)),i=q(r(496486)),a=q(r(74978)),l=r(678928),u=q(r(648530)),o=q(r(791548)),c=r(872243),s=q(r(371732)),d=q(r(82572)),f=r(783494),p=q(r(19566)),y=r(828593),v=r(567186),E=q(r(759027)),h=q(r(644263)),A=q(r(433385)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=G(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e;r&&r.set(e,n);return n}(r(517286)),L=q(r(876874)),g=q(r(30098)),_=q(r(201292)),S=q(r(689389)),b=q(r(788739)),T=q(r(290629)),I=q(r(211136)),N=q(r(790597)),C=q(r(728429)),O=q(r(399561)),M=r(71246),R=q(r(895201)),w=q(r(656016)),U=q(r(827513)),P=r(8916),D=r(770348),k=r(176548);function G(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(G=function(e){return e?r:t})(e)}function q(e){return e&&e.__esModule?e:{default:e}}function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,a=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(n=r.next()).done);l=!0){a.push(n.value);if(t&&a.length===t)break}}catch(e){u=!0;i=e}finally{try{
l||null==r.return||r.return()}finally{if(u)throw i}}return a}(e,t)||B(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(){H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return H.apply(this,arguments)}function j(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||B(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r)
;if(Array.isArray(e)||(r=B(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function B(e,t){if(e){if("string"==typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);return"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var x=new o.default("AutocompleteUtils"),Q=function(){return!0},W=/(\t|\s)/;t.WHITESPACE_REGEX=W;var Y,z=[],X=(Y=r(675240).Z).MENTION_EVERYONE,J=Y.MENTION_HERE,Z=Y.LAUNCHABLE_APPLICATIONS;function $(e,t){void 0===e&&(e=0);return 1e3*e*(null!=t?t:1)}
var ee=[m.GUILD_SELECTABLE_CHANNELS_KEY,m.GUILD_VOCAL_CHANNELS_KEY,D.ChannelTypes.GUILD_CATEGORY];t.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS=ee;function te(e,t,r){var i=t.exactQuery,a=t.containQuery,l=t.queryLower;void 0===r&&(r=!0);try{if(i.test(e))return 10;if(a.test(e))return 5;if(r&&(0,n.default)(l,e))return 1}catch(e){x.error(e)}return 0}function re(e){return null!=(null==e?void 0:e.joinedAt)&&!e.isPending}function ne(e){for(var t=e.query,r=e.members,i=e.limit,l=e.filter,u=C.default.getUsers(),o=N.default.getGuildId(),c=t.toLocaleLowerCase(),s=c.length,d=[],f=[],p=r.length,y=0,v=0;y<p;){var h=r[y],A=void 0,m=void 0;if(h instanceof E.default){m=h;A=L.default.getNick(o,m.id)}else{A=h.nick;m=u[h.userId]}if(null==l||l(m)){var g=m,_=g.usernameNormalized,S=g.username,b=null!=A&&""!==A?A.toLocaleLowerCase():null;if(_.substring(0,s)===c||null!=b&&(0,P.stripDiacritics)(b.substring(0,s))===c||S.substring(0,s)===c||null!=b&&b.substring(0,s)===c){var T;d.push({type:k.AutocompleterResultTypes.USER,
record:m,comparator:null!==(T=A)&&void 0!==T?T:S,score:10,sortable:null!=b?b:_})}else if(v<50&&((0,n.default)(c,_)||null!=b&&(0,n.default)(c,b))){var I;f.push({type:k.AutocompleterResultTypes.USER,record:m,score:1,comparator:null!==(I=A)&&void 0!==I?I:S,sortable:null!=b?b:_});v+=1}}y+=1}d.sort(a.default);if(d.length<i){f.sort(a.default);d=d.concat(f.slice(0,Math.max(0,i-d.length)))}d.length>i&&(d.length=i);return d}function ie(e){switch(e){case f.StickerMetadataTypes.STICKER_NAME:return 11;case f.StickerMetadataTypes.CORRELATED_EMOJI:return 6;case f.StickerMetadataTypes.TAG:return 1;case f.StickerMetadataTypes.GUILD_NAME:case f.StickerMetadataTypes.PACK_NAME:return 8;default:return 1}}function ae(e,t,r){for(var n,i=0,a=null,l=F(t);!(n=l()).done;){var u=n.value,o=te(e,u,r);if(o>i){i=o;a=u}}null!=a&&(a.isFullMatch?t.length=0:t.splice(t.indexOf(a),1));return i}function le(e,t){if(null!=e.guild_id){var r=t[e.guild_id];if(null==r){var n
;r=t[e.guild_id]=null===(n=g.default.getGuild(e.guild_id))||void 0===n?void 0:n.toString().toLocaleLowerCase()}return r}}function ue(e,t){if(null!=e.parent_id){var r=t[e.parent_id];if(null==r){var n;r=t[e.parent_id]=null===(n=h.default.getChannel(e.parent_id))||void 0===n?void 0:n.name.toLocaleLowerCase()}return r}}function oe(e,t){var r=h.default.getChannel(e);return null==e||null==r?[]:(0,i.default)(_.default.getMessages(e).toArray()).reverse().map((function(e){return e.author})).reject((function(e){return e.isNonUserBot()})).uniqBy((function(e){return e.id})).filter((function(e){var t=r.getGuildId();return null==t||re(L.default.getMember(t,e.id))})).map((function(e){var t,n=r.getGuildId(),i=null!=n?L.default.getMember(n,e.id):null;return{type:k.AutocompleterResultTypes.USER,record:e,score:0,comparator:null!==(t=null==i?void 0:i.nick)&&void 0!==t?t:e.username}})).take(t).value()}var ce={queryFriends:function(e){var t=e.query,r=e.limit,n=void 0===r?10:r,i=(e._fuzzy,e.filter)
;return ne({query:t,members:T.default.getFriendIDs().map((function(e){return C.default.getUser(e)})).filter(M.isNotNullish),limit:n,filter:i})},queryDMUsers:function(e){var t=e.query,r=e.limit,n=void 0===r?10:r,i=e.filter;return ne({query:t,members:h.default.getDMUserIds().map((function(e){return C.default.getUser(e)})).filter(M.isNotNullish),limit:n,filter:i})},queryChannelUsers:function(e){var t=e.channelId,r=e.query,n=e.limit,i=void 0===n?10:n,a=e.request,l=void 0===a||a,u=e.checkRecentlyTalkedOnEmptyQuery,o=void 0===u||u,c=h.default.getChannel(t);if(null==c)return[];var s,d=c.isThread()?h.default.getChannel(c.parent_id):null,f=null!=d?d:c;if(null==f)return[];if(f.isPrivate()){s=f.recipients.map((function(e){var t;return{userId:e,nick:null!==(t=T.default.getNickname(e))&&void 0!==t?t:null}}));var p=C.default.getCurrentUser();null!=p&&s.push({userId:p.id,nick:null})}else{if(0===r.length&&o){var y=oe(c.id,i);if(y.length>0)return y}s=L.default.getMembers(f.guild_id).filter(re)
;l&&R.default.requestMembers(f.guild_id,r,i)}return ne({query:r,members:s,limit:i,filter:function(e){return f.isPrivate()||w.default.can({permission:D.Permissions.VIEW_CHANNEL,user:e,context:f})}})},queryGuildUsers:function(e){var t=e.guildId,r=e.query,n=e.limit,i=void 0===n?10:n,a=e.request,l=void 0===a||a,u=e.checkRecentlyTalkedOnEmptyQuery,o=void 0===u||u,c=e.filter;if(null==g.default.getGuild(t))return[];if(0===r.length&&o){var s=oe(I.default.getChannelId(t),i);if(s.length>0)return s}var d=L.default.getMembers(t).filter(re);l&&r.length>0&&R.default.requestMembers(t,r,i);return ne({query:r,members:d,limit:i,filter:c})},queryUsers:function(e,t,r,n,a){void 0===t&&(t=10);void 0===r&&(r=!0);void 0===n&&(n=!0);n&&e.length>0&&R.default.requestMembers(null,e,t);return ne({query:e,members:(0,i.default)(C.default.getUsers()).values().value(),limit:t,filter:a})},queryChannels:function(e){
for(var t,r=e.query,n=e.guildId,u=e.limit,o=void 0===u?D.MAX_AUTOCOMPLETE_RESULTS:u,c=e.fuzzy,s=void 0===c||c,d=e.filter,f=void 0===d?Q:d,y=e.type,E=void 0===y?m.GUILD_SELECTABLE_CHANNELS_KEY:y,A=e.allowEmptyQueries,L=void 0!==A&&A,g=e.boosters,_=void 0===g?{}:g,b=function(e,t){void 0===t&&(t=!1);var r=e.split(" ").filter((function(e){return""!==e||t})).map((function(e){var t=e.toLocaleLowerCase();return{queryLower:t,exactQuery:new RegExp("^"+U.default.escape(t),"i"),containQuery:new RegExp(U.default.escape(t),"i"),isFullMatch:!1}}));if(e.includes(" ")){var n=e.toLocaleLowerCase();r.unshift({queryLower:n,exactQuery:new RegExp("^"+U.default.escape(n),"i"),containQuery:new RegExp(U.default.escape(n),"i"),isFullMatch:!0})}return r}(r,L),I={},N=[],O=F(null!=n?(0,i.default)(m.default.getChannels(n)[E]).map((function(e){return e.channel})).concat(p.default.computeAllActiveJoinedThreads(n)).value():(0,
i.default)(h.default.loadAllGuildAndPrivateChannelsFromDisk()).values().concat(p.default.computeAllActiveJoinedThreads()).value());!(t=O()).done;){var M=t.value;if((E===M.type||E===m.GUILD_SELECTABLE_CHANNELS_KEY&&(0,v.isGuildSelectableChannelType)(M.type)||E===m.GUILD_VOCAL_CHANNELS_KEY&&(0,v.isGuildVocalChannelType)(M.type))&&(!(0,v.isGuildSelectableChannelType)(M.type)||S.default.can(D.Permissions.VIEW_CHANNEL,M))&&(!M.isVocal()||S.default.can(M.accessPermissions,M))&&f(M)){var R=j(b),w=M.name.toLocaleLowerCase(),P=ae(w,R,s);if(0!==P){if(R.length>0)for(var G=0,q=[le(M,I),ue(M,I)];G<q.length;G++){var K=q[G];if(null!=K&&""!==K){var H=ae(K,R,!1);0!==H&&(P+=.5*H)}}0===P||R.length>1||1===R.length&&!R[0].isFullMatch||N.push({type:(0,v.isGuildVocalChannelType)(M.type)?k.AutocompleterResultTypes.VOICE_CHANNEL:k.AutocompleterResultTypes.TEXT_CHANNEL,record:M,score:$(P,_[M.id]),comparator:(0,l.computeChannelName)(M,C.default,T.default),sortable:w})}}}N.sort(a.default);N.length>o&&(N.length=o)
;return N},queryGuilds:function(e){for(var t,r=e.query,n=e.limit,l=void 0===n?10:n,u=e.fuzzy,o=void 0===u||u,c=e.filter,s=void 0===c?Q:c,d=e.boosters,f=void 0===d?{}:d,p=""===r?"":r.toLocaleLowerCase(),y={exactQuery:new RegExp("^"+U.default.escape(p),"i"),containQuery:new RegExp(U.default.escape(p),"i"),queryLower:p},v=[],E=F((0,i.default)(g.default.getGuilds()).values().value());!(t=E()).done;){var h=t.value;if(s(h)){var A=h.name.toLocaleLowerCase(),m=te(A,y,o);m>0&&v.push({type:k.AutocompleterResultTypes.GUILD,record:h,score:$(m,f[h.id]),comparator:h.toString(),sortable:A})}}v.sort(a.default);v.length>l&&(v.length=l);return v},queryGroupDMs:function(e){for(var t,r=e.query,n=e.limit,u=void 0===n?10:n,o=e.fuzzy,c=void 0===o||o,s=e.filter,d=void 0===s?Q:s,f=e.boosters,p=void 0===f?{}:f,y=r.toLocaleLowerCase(),v={exactQuery:new RegExp("^"+U.default.escape(y),"i"),containQuery:new RegExp(U.default.escape(y),"i"),queryLower:y},E=[],A=F((0,
i.default)(h.default.getMutablePrivateChannels()).values().value());!(t=A()).done;){var m=t.value;if(m.isMultiUserDM()&&d(m)){var L=(0,l.computeChannelName)(m,C.default,T.default).toLocaleLowerCase(),g=te(L,v,c);g>0&&E.push({type:k.AutocompleterResultTypes.GROUP_DM,record:m,score:$(g,p[m.id]),comparator:(0,l.computeChannelName)(m,C.default,T.default),sortable:L})}}E.sort(a.default);E.length>u&&(E.length=u);return E},queryApplications:function(e){for(var t,r=e.query,n=e.limit,i=void 0===n?10:n,l=e.fuzzy,u=void 0===l||l,o=e.filter,c=void 0===o?Q:o,s=r.toLocaleLowerCase(),d={exactQuery:new RegExp("^"+U.default.escape(s),"i"),containQuery:new RegExp(U.default.escape(s),"i"),queryLower:s},f=[],p=F(Z());!(t=p()).done;){var y=t.value.application;if(c(y)){var v=y.name.toLocaleLowerCase(),E=te(v,d,u);E>0&&f.push({type:k.AutocompleterResultTypes.APPLICATION,record:y,score:E,comparator:y.name,sortable:v})}}f.sort(a.default);f.length>i&&(f.length=i);return f},querySKUs:function(e){
for(var t,r=e.query,n=e.limit,l=void 0===n?10:n,u=e.fuzzy,o=void 0===u||u,c=e.filter,s=void 0===c?Q:c,d=r.toLocaleLowerCase(),f={exactQuery:new RegExp("^"+U.default.escape(d),"i"),containQuery:new RegExp(U.default.escape(d),"i"),queryLower:d},p=[],y=F((0,i.default)(O.default.getSKUs()).values().value());!(t=y()).done;){var v=t.value;if(v.type===D.SKUTypes.DURABLE_PRIMARY&&s(v)){var E=v.name.toLocaleLowerCase(),h=te(E,f,o);h>0&&p.push({type:k.AutocompleterResultTypes.SKU,record:v,score:h,comparator:v.name,sortable:E})}}p.sort(a.default);p.length>l&&(p.length=l);return p},getRecentlyTalked:oe,queryMentionResults:function(e){
var t=e.query,r=e.channel,a=e.canMentionEveryone,l=void 0!==a&&a,u=e.canMentionHere,o=void 0===u||u,c=e.canMentionUsers,s=void 0===c||c,d=e.canMentionRoles,f=void 0===d||d,p=e.includeAllGuildUsers,y=void 0!==p&&p,v=e.includeNonMentionableRoles,E=void 0!==v&&v,h=e.checkRecentlyTalkedOnEmptyQuery,A=void 0===h||h,m=e.limit,_=void 0===m?D.MAX_AUTOCOMPLETE_RESULTS:m,S=s?(y&&null!=r.guild_id?this.queryGuildUsers({guildId:r.guild_id,query:t,limit:_,checkRecentlyTalkedOnEmptyQuery:A}):this.queryChannelUsers({channelId:r.id,query:t,limit:_,checkRecentlyTalkedOnEmptyQuery:A})).map((function(e){var t=e.record;return{user:t,score:e.score,comparator:e.comparator,nick:L.default.getNick(r.guild_id,t.id),status:b.default.getStatus(t.id)}})):[],T=S.length,I=t.toLowerCase(),N=[];if(T<_&&f){var C=r.getGuildId(),O=g.default.getGuild(C);if(null!=O){(0,i.default)(O.roles).filter((function(e){var t=e.mentionable,r=e.name,i=e.id;return(t||l||E)&&(0,n.default)(I,r.toLowerCase())&&i!==C
})).take(_-T).forEach((function(e){N.push(e)}));T+=N.length}}var M=[];if(!r.isPrivate()&&l&&f){if(T<_&&(0,n.default)(I,X().test)){M.push(X());T+=1}o&&T<_&&(0,n.default)(I,J().test)&&M.push(J())}return{users:S,globals:M,roles:N}},queryGuildMentionResults:function(e){var t=e.query,r=e.guildId,a=e.canMentionEveryone,l=void 0!==a&&a,u=e.canMentionUsers,o=void 0===u||u,c=e.canMentionRoles,s=void 0===c||c,d=e.canMentionNonMentionableRoles,f=void 0!==d&&d,p=o?this.queryGuildUsers({guildId:r,query:t}).map((function(e){return H({},e,{status:b.default.getStatus(e.record.id)})})):[],y=p.length,v=t.toLowerCase(),E=[];if(y<D.MAX_AUTOCOMPLETE_RESULTS&&s){var h=g.default.getGuild(r);if(null!=h){(0,i.default)(h.roles).filter((function(e){var t=e.mentionable,i=e.name,a=e.id;return(t||l||f)&&(0,n.default)(v,i.toLowerCase())&&a!==r})).take(D.MAX_AUTOCOMPLETE_RESULTS-y).forEach((function(e){E.push(e)}));y+=E.length}}var A=[];if(l&&s){if(y<D.MAX_AUTOCOMPLETE_RESULTS&&(0,n.default)(v,X().test)){A.push(X())
;y+=1}y<D.MAX_AUTOCOMPLETE_RESULTS&&(0,n.default)(v,J().test)&&A.push(J())}return{users:p,globals:A,roles:E}},queryChoice:function(e){var t=e.query,r=e.choices,n=e.limit,a=void 0===n?10:n,l=e.fuzzy,u=void 0===l||l,o=t.toLocaleLowerCase(),c=new RegExp("^"+U.default.escape(o),"i"),s=new RegExp(U.default.escape(o),"i"),d=(0,i.default)(r).map((function(e){var t=te(e.displayName.toLocaleLowerCase(),{exactQuery:c,containQuery:s,queryLower:o},u);return t>0?{choice:e,score:t}:null})).filter(M.isNotNullish).sortBy((function(e){return-1*e.score}));null!==a&&(d=d.take(a));return d.value()},queryChannelResults:function(e){var t=e.query,r=e.channel,n=e.type,i=void 0===n?m.GUILD_SELECTABLE_CHANNELS_KEY:n,a=e.channelTypes;return{channels:this.queryChannels({query:t,guildId:r.getGuildId(),limit:void 0,fuzzy:void 0,filter:function(e){return null==a||a.includes(e.type)},type:i,allowEmptyQueries:!0}).map((function(e){return e.record}))}},queryApplicationCommandChannelResults:function(e){
var t=e.query,r=e.channel,n=e.channelTypes,i=e.limit,a=void 0===i?D.MAX_AUTOCOMPLETE_RESULTS:i;if(null==r.guild_id){var l=[];(null==n||n.includes(r.type))&&l.push(r);return{channels:l}}for(var o,c=[],s=F(ee);!(o=s()).done;){var d=o.value;c=c.concat(this.queryChannels({query:t,guildId:r.guild_id,limit:a,fuzzy:!0,filter:function(e){return null==n||n.includes(e.type)},type:d,allowEmptyQueries:!0}))}(c=c.filter((function(e){return"null"!==e.record.id})).sort(u.default)).length>a&&(c=c.slice(0,a));return{channels:c.map((function(e){return e.record}))}},queryChoiceResults:function(e){var t=e.query,r=e.choices;return{choices:this.queryChoice({query:t,choices:r,limit:null}).map((function(e){return e.choice}))}},queryEmojiResults:function(e){var t=e.query,r=e.channel,n=e.intention,i=e.matchComparator;y.FrecencyUserSettingsActionCreators.loadIfNecessary();return{emojis:A.default.searchWithoutFetchingLatest(r,t,D.MAX_AUTOCOMPLETE_RESULTS,n,i)}},queryStickers:function(e,t,r){void 0===t&&(t=!0)
;var n=K(void 0===r?[null,Q]:r,2),a=n[0],l=n[1],u=d.default.stickerMetadata,o=C.default.getCurrentUser(),p=new Set,v=[];y.FrecencyUserSettingsActionCreators.loadIfNecessary();for(var E,h=function(){var e=E.value;if(""===e)return"continue";var r=e.toLocaleLowerCase(),n=(0,P.stripDiacritics)(r),i=new RegExp("^"+U.default.escape(n),"i"),y=new RegExp(""+U.default.escape(n),"i");u.forEach((function(e,n){var u=0,E=null,h=d.default.getStickerById(n);if(null!=h&&l(h,(0,c.getStickerSendability)(h,o,a))){for(var A,m=F(e);!(A=m()).done;){var L=A.value,g=L.type,_=L.value,S=ie(g),b=0;if(t)_===r?b=10*S:i.test(_)?b=7*S:g!==f.StickerMetadataTypes.GUILD_NAME&&g!==f.StickerMetadataTypes.PACK_NAME&&g!==f.StickerMetadataTypes.STICKER_NAME||!y.test(_)||(b=5*S);else if(_===r){b=10*S;E=_}if(b>u){u=b;E=_}}var T=s.default.stickerFrecencyWithoutFetchingLatest.getScore(n);null!=T&&(u*=T/100);if(u>0&&null!=E&&!p.has(h.id)){p.add(h.id);v.push({sticker:h,comparator:E,score:u})}}}))},A=F(e);!(E=A()).done;)h()
;0===(v=(0,i.default)(v).sortBy((function(e){return-1*e.score})).value()).length&&(v=z);return v},matchSentinel:function(e,t,r){return!W.test(t)&&e===r}};t.default=ce},895201:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n=u(r(496486)),i=u(r(5387)),a=u(r(415275)),l=u(r(30098));function u(e){return e&&e.__esModule?e:{default:e}}var o,c=new i.default({maxAge:6e4});var s={requestMembers:function(e,t,r){void 0===r&&(r=10);var i=(null!=e?e:"")+":"+t;if(null==c.get(i)){c.set(i,!0);!function(e,t,r){null!=o&&clearTimeout(o);o=setTimeout((function(){var i=[],u=function(e){i.push(e.id)};if(null==e)n.default.forEach(l.default.getGuilds(),u);else{var o=l.default.getGuild(e);null!=o&&u(o)}i.length>0&&a.default.requestMembers(i,t.toLocaleLowerCase(),r)}),200)}(e,t,r)}}};t.default=s},675240:(e,t,r)=>{({value:!0});t.Z=void 0;var n=a(r(191013)),i=a(r(247001));function a(e){return e&&e.__esModule?e:{default:e}}var l={MENTION_EVERYONE:function(){return{test:"everyone",
text:"@everyone",description:i.default.Messages.MENTION_EVERYONE_AUTOCOMPLETE_DESCRIPTION}},MENTION_HERE:function(){return{test:"here",text:"@here",description:i.default.Messages.MENTION_HERE_AUTOCOMPLETE_DESCRIPTION}},LAUNCHABLE_APPLICATIONS:function(){return n.default.launchableApplicationViewItems}};t.Z=l}}]);
//# sourceMappingURL=fd97bcd01c03cb56fc72.js.map