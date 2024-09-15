"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[7677],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{XI:function(){return action}});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"../grafana-data/src/datetime/formats.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}__webpack_require__.d(__webpack_exports__,{Od:function(){return localTimeFormat},WC:function(){return systemDateFormats}});var DEFAULT_SYSTEM_DATE_FORMAT="YYYY-MM-DD HH:mm:ss";function localTimeFormat(options,locale,fallback){if(missingIntlDateTimeFormatSupport())return null!=fallback?fallback:DEFAULT_SYSTEM_DATE_FORMAT;!locale&&navigator&&(locale=_to_consumable_array(navigator.languages));var dateTimeFormat=new Intl.DateTimeFormat(locale||void 0,options),parts=dateTimeFormat.formatToParts(new Date),mapping={year:"YYYY",month:"MM",day:"DD",hour:dateTimeFormat.resolvedOptions().hour12?"hh":"HH",minute:"mm",second:"ss",weekday:"ddd",era:"N",dayPeriod:"A",timeZoneName:"Z"};return parts.map((function(part){return mapping[part.type]||part.value})).join("")}var systemDateFormats=new(function(){function SystemDateFormatsState(){!function _class_call_check(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,SystemDateFormatsState),_define_property(this,"fullDate",DEFAULT_SYSTEM_DATE_FORMAT),_define_property(this,"fullDateMS","YYYY-MM-DD HH:mm:ss.SSS"),_define_property(this,"interval",{millisecond:"HH:mm:ss.SSS",second:"HH:mm:ss",minute:"HH:mm",hour:"MM/DD HH:mm",day:"MM/DD",month:"YYYY-MM",year:"YYYY"})}return function _create_class(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(SystemDateFormatsState,[{key:"update",value:function update(settings){this.fullDate=settings.fullDate,this.interval=settings.interval,settings.useBrowserLocale&&this.useBrowserLocale()}},{key:"useBrowserLocale",value:function useBrowserLocale(){this.fullDate=localTimeFormat({year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),this.fullDateMS=this.fullDate.replace("ss","ss.SSS"),this.interval.millisecond=localTimeFormat({hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1},null,this.interval.second).replace("ss","ss.SSS"),this.interval.second=localTimeFormat({hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1},null,this.interval.second),this.interval.minute=localTimeFormat({hour:"2-digit",minute:"2-digit",hour12:!1},null,this.interval.minute),this.interval.hour=localTimeFormat({month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1},null,this.interval.hour),this.interval.day=localTimeFormat({month:"2-digit",day:"2-digit",hour12:!1},null,this.interval.day),this.interval.month=localTimeFormat({year:"numeric",month:"2-digit",hour12:!1},null,this.interval.month)}},{key:"getTimeFieldUnit",value:function getTimeFieldUnit(useMsResolution){return"time:".concat(useMsResolution?this.fullDateMS:this.fullDate)}}]),SystemDateFormatsState}()),missingIntlDateTimeFormatSupport=function(){return!("DateTimeFormat"in Intl)||!("formatToParts"in Intl.DateTimeFormat.prototype)}},"../grafana-data/src/datetime/formatter.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{LE:function(){return dateTimeFormat},fq:function(){return dateTimeFormatTimeAgo},jw:function(){return timeZoneAbbrevation}});var moment_timezone__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/moment-timezone/index.js"),moment_timezone__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__),_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../grafana-data/src/datetime/common.ts"),_formats__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../grafana-data/src/datetime/formats.ts"),_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../grafana-data/src/datetime/moment_wrapper.ts"),dateTimeFormat=function(dateInUtc,options){return toTz(dateInUtc,(0,_common__WEBPACK_IMPORTED_MODULE_1__.O)(options)).format(getFormat(options))},dateTimeFormatTimeAgo=function(dateInUtc,options){return toTz(dateInUtc,(0,_common__WEBPACK_IMPORTED_MODULE_1__.O)(options)).fromNow()},timeZoneAbbrevation=function(dateInUtc,options){return toTz(dateInUtc,(0,_common__WEBPACK_IMPORTED_MODULE_1__.O)(options)).format("z")},getFormat=function(options){var _options_format,_options_format1;return(null==options?void 0:options.defaultWithMS)?null!==(_options_format=null==options?void 0:options.format)&&void 0!==_options_format?_options_format:_formats__WEBPACK_IMPORTED_MODULE_2__.WC.fullDateMS:null!==(_options_format1=null==options?void 0:options.format)&&void 0!==_options_format1?_options_format1:_formats__WEBPACK_IMPORTED_MODULE_2__.WC.fullDate},toTz=function(dateInUtc,timeZone){var date=dateInUtc,zone=moment_timezone__WEBPACK_IMPORTED_MODULE_0___default().tz.zone(timeZone);return zone&&zone.name?(0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__.AN)((0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__.yT)(date)).tz(zone.name):"utc"===timeZone?(0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__.AN)((0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__.yT)(date)):(0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__.AN)((0,_moment_wrapper__WEBPACK_IMPORTED_MODULE_3__.yT)(date)).local()}},"./src/components/DateTimePickers/TimeZonePicker.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:function(){return TimeZonePicker}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lodash=__webpack_require__("../../node_modules/lodash/lodash.js"),react=__webpack_require__("../../node_modules/react/index.js"),timezones=__webpack_require__("../grafana-data/src/datetime/timezones.ts"),i18n=__webpack_require__("./src/utils/i18n.tsx"),Select=__webpack_require__("./src/components/Select/Select.tsx"),emotion_css_esm=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx"),TimeZoneGroup=function(props){var children=props.children,label=props.label,styles=(0,ThemeContext.of)(getStyles);return label?(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:styles.header,children:(0,jsx_runtime.jsx)("span",{className:styles.label,children:label})}),children]}):(0,jsx_runtime.jsx)("div",{children:children})},getStyles=function(theme){return{header:(0,emotion_css_esm.AH)({padding:"7px 10px",width:"100%",borderTop:"1px solid ".concat(theme.colors.border.weak),textTransform:"capitalize"}),label:(0,emotion_css_esm.AH)({fontSize:theme.typography.size.sm,color:theme.colors.text.secondary,fontWeight:theme.typography.fontWeightMedium})}};try{TimeZoneGroup.displayName="TimeZoneGroup",TimeZoneGroup.__docgenInfo={description:"",displayName:"TimeZoneGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/TimeZonePicker/TimeZoneGroup.tsx#TimeZoneGroup"]={docgenInfo:TimeZoneGroup.__docgenInfo,name:"TimeZoneGroup",path:"src/components/DateTimePickers/TimeZonePicker/TimeZoneGroup.tsx#TimeZoneGroup"})}catch(__react_docgen_typescript_loader_error){}var TimeZoneOffset=__webpack_require__("./src/components/DateTimePickers/TimeZonePicker/TimeZoneOffset.tsx"),selectors=__webpack_require__("../grafana-e2e-selectors/src/selectors/index.ts"),Icon=__webpack_require__("./src/components/Icon/Icon.tsx"),TimeZoneDescription=__webpack_require__("./src/components/DateTimePickers/TimeZonePicker/TimeZoneDescription.tsx"),TimeZoneTitle=__webpack_require__("./src/components/DateTimePickers/TimeZonePicker/TimeZoneTitle.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}var WideTimeZoneOption=function(props){var children=props.children,innerProps=props.innerProps,innerRef=props.innerRef,data=props.data,isSelected=props.isSelected,isFocused=props.isFocused,styles=(0,ThemeContext.of)(TimeZoneOption_getStyles),timestamp=Date.now(),containerStyles=(0,emotion_css_esm.cx)(styles.container,isFocused&&styles.containerFocused);if(!(0,lodash.isString)(data.value))return null;var timeZoneInfo=(0,timezones.QZ)(data.value,timestamp);return(0,jsx_runtime.jsx)("div",_object_spread_props(_object_spread({className:containerStyles},innerProps),{ref:innerRef,"data-testid":selectors.Tp.components.Select.option,children:(0,jsx_runtime.jsxs)("div",{className:(0,emotion_css_esm.cx)(styles.leftColumn,styles.row),children:[(0,jsx_runtime.jsxs)("div",{className:(0,emotion_css_esm.cx)(styles.leftColumn,styles.wideRow),children:[(0,jsx_runtime.jsx)(TimeZoneTitle.U,{title:children}),(0,jsx_runtime.jsx)("div",{className:styles.spacer}),(0,jsx_runtime.jsx)(TimeZoneDescription.E,{info:timeZoneInfo})]}),(0,jsx_runtime.jsxs)("div",{className:styles.rightColumn,children:[(0,jsx_runtime.jsx)(TimeZoneOffset.X,{timeZone:(null==timeZoneInfo?void 0:timeZoneInfo.ianaName)||data.value,timestamp:timestamp,className:"tz-utc-offset"}),isSelected&&(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)(Icon.I,{name:"check"})})]})]})}))},CompactTimeZoneOption=function(props){var children=props.children,innerProps=props.innerProps,innerRef=props.innerRef,data=props.data,isSelected=props.isSelected,isFocused=props.isFocused,styles=(0,ThemeContext.of)(TimeZoneOption_getStyles),timestamp=Date.now(),containerStyles=(0,emotion_css_esm.cx)(styles.container,isFocused&&styles.containerFocused);if(!(0,lodash.isString)(data.value))return null;var timeZoneInfo=(0,timezones.QZ)(data.value,timestamp);return(0,jsx_runtime.jsx)("div",_object_spread_props(_object_spread({className:containerStyles},innerProps),{ref:innerRef,"data-testid":selectors.Tp.components.Select.option,children:(0,jsx_runtime.jsxs)("div",{className:styles.body,children:[(0,jsx_runtime.jsxs)("div",{className:styles.row,children:[(0,jsx_runtime.jsx)("div",{className:styles.leftColumn,children:(0,jsx_runtime.jsx)(TimeZoneTitle.U,{title:children})}),(0,jsx_runtime.jsx)("div",{className:styles.rightColumn,children:isSelected&&(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)(Icon.I,{name:"check"})})})]}),(0,jsx_runtime.jsxs)("div",{className:styles.row,children:[(0,jsx_runtime.jsx)("div",{className:styles.leftColumn,children:(0,jsx_runtime.jsx)(TimeZoneDescription.E,{info:timeZoneInfo})}),(0,jsx_runtime.jsx)("div",{className:styles.rightColumn,children:(0,jsx_runtime.jsx)(TimeZoneOffset.X,{timestamp:timestamp,timeZone:(null==timeZoneInfo?void 0:timeZoneInfo.ianaName)||data.value,className:"tz-utc-offset"})})]})]})}))},TimeZoneOption_getStyles=function(theme){return{container:(0,emotion_css_esm.AH)({display:"flex",alignItems:"center",flexDirection:"row",flexShrink:0,whiteSpace:"nowrap",cursor:"pointer",padding:"6px 8px 4px","&:hover":{background:theme.colors.action.hover}}),containerFocused:(0,emotion_css_esm.AH)({background:theme.colors.action.hover}),body:(0,emotion_css_esm.AH)({display:"flex",fontWeight:theme.typography.fontWeightMedium,flexDirection:"column",flexGrow:1}),row:(0,emotion_css_esm.AH)({display:"flex",flexDirection:"row"}),leftColumn:(0,emotion_css_esm.AH)({flexGrow:1,textOverflow:"ellipsis"}),rightColumn:(0,emotion_css_esm.AH)({justifyContent:"flex-end",alignItems:"center"}),wideRow:(0,emotion_css_esm.AH)({display:"flex",flexDirection:"row",alignItems:"baseline"}),spacer:(0,emotion_css_esm.AH)({marginLeft:"6px"})}};try{WideTimeZoneOption.displayName="WideTimeZoneOption",WideTimeZoneOption.__docgenInfo={description:"",displayName:"WideTimeZoneOption",props:{isFocused:{defaultValue:null,description:"",name:"isFocused",required:!0,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},innerProps:{defaultValue:null,description:"",name:"innerProps",required:!0,type:{name:"DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!0,type:{name:"RefCallback<HTMLDivElement>"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"SelectableZone"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/TimeZonePicker/TimeZoneOption.tsx#WideTimeZoneOption"]={docgenInfo:WideTimeZoneOption.__docgenInfo,name:"WideTimeZoneOption",path:"src/components/DateTimePickers/TimeZonePicker/TimeZoneOption.tsx#WideTimeZoneOption"})}catch(__react_docgen_typescript_loader_error){}try{CompactTimeZoneOption.displayName="CompactTimeZoneOption",CompactTimeZoneOption.__docgenInfo={description:"",displayName:"CompactTimeZoneOption",props:{isFocused:{defaultValue:null,description:"",name:"isFocused",required:!0,type:{name:"boolean"}},isSelected:{defaultValue:null,description:"",name:"isSelected",required:!0,type:{name:"boolean"}},innerProps:{defaultValue:null,description:"",name:"innerProps",required:!0,type:{name:"DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!0,type:{name:"RefCallback<HTMLDivElement>"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"SelectableZone"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/TimeZonePicker/TimeZoneOption.tsx#CompactTimeZoneOption"]={docgenInfo:CompactTimeZoneOption.__docgenInfo,name:"CompactTimeZoneOption",path:"src/components/DateTimePickers/TimeZonePicker/TimeZoneOption.tsx#CompactTimeZoneOption"})}catch(__react_docgen_typescript_loader_error){}var TimeZonePicker=function(props){var onChange=props.onChange,width=props.width,_props_autoFocus=props.autoFocus,autoFocus=void 0!==_props_autoFocus&&_props_autoFocus,onBlur=props.onBlur,value=props.value,_props_includeInternal=props.includeInternal,includeInternal=void 0!==_props_includeInternal&&_props_includeInternal,_props_disabled=props.disabled,disabled=void 0!==_props_disabled&&_props_disabled,inputId=props.inputId,_props_menuShouldPortal=props.menuShouldPortal,menuShouldPortal=void 0===_props_menuShouldPortal||_props_menuShouldPortal,_props_openMenuOnFocus=props.openMenuOnFocus,openMenuOnFocus=void 0===_props_openMenuOnFocus||_props_openMenuOnFocus,groupedTimeZones=useTimeZones(includeInternal),selected=useSelectedTimeZone(groupedTimeZones,value),filterBySearchIndex=useFilterBySearchIndex(),TimeZoneOption=width&&width<=45?CompactTimeZoneOption:WideTimeZoneOption,onChangeTz=(0,react.useCallback)((function(selectable){if(!selectable||!(0,lodash.isString)(selectable.value))return onChange(value);onChange(selectable.value)}),[onChange,value]);return(0,jsx_runtime.jsx)(Select.l6,{inputId:inputId,value:selected,placeholder:(0,i18n.t)("time-picker.zone.select-search-input","Type to search (country, city, abbreviation)"),autoFocus:autoFocus,menuShouldPortal:menuShouldPortal,openMenuOnFocus:openMenuOnFocus,width:width,filterOption:filterBySearchIndex,options:groupedTimeZones,onChange:onChangeTz,onBlur:onBlur,components:{Option:TimeZoneOption,Group:TimeZoneGroup},disabled:disabled,"aria-label":(0,i18n.t)("time-picker.zone.select-aria-label","Time zone picker")})},useTimeZones=function(includeInternal){var now=Date.now();return(0,timezones.U3)(includeInternal).map((function(group){var options=group.zones.reduce((function(options,zone){var info=(0,timezones.QZ)(zone,now);return info?(options.push({label:info.name,value:info.zone,searchIndex:getSearchIndex(info,now)}),options):options}),[]);return{label:group.name,options:options}}))},useSelectedTimeZone=function(groups,timeZone){return(0,react.useMemo)((function(){if(void 0!==timeZone){var tz=(0,lodash.toLower)(timeZone),group=groups.find((function(group){return group.label?tz.startsWith((0,lodash.toLower)(group.label)):isInternal(tz)}));return null==group?void 0:group.options.find((function(option){return(0,lodash.isEmpty)(tz)?option.value===timezones.g$.default:(0,lodash.toLower)(option.value)===tz}))}}),[groups,timeZone])},isInternal=function(timeZone){switch(timeZone){case timezones.g$.default:case timezones.g$.localBrowserTime:case timezones.g$.utc:return!0;default:return!1}},useFilterBySearchIndex=function(){return(0,react.useCallback)((function(option,searchQuery){return!(searchQuery&&option.data&&option.data.searchIndex)||option.data.searchIndex.indexOf((0,lodash.toLower)(searchQuery))>-1}),[])},getSearchIndex=function(info,timestamp){var parts=[(0,lodash.toLower)(info.name),(0,lodash.toLower)(info.abbreviation),(0,lodash.toLower)((0,TimeZoneOffset.t)(timestamp,info.zone))],_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=info.countries[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var country=_step.value;parts.push((0,lodash.toLower)(country.name)),parts.push((0,lodash.toLower)(country.code))}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}return parts.join("|")};try{TimeZonePicker.displayName="TimeZonePicker",TimeZonePicker.__docgenInfo={description:"",displayName:"TimeZonePicker",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(timeZone?: string | undefined) => void"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},includeInternal:{defaultValue:null,description:"",name:"includeInternal",required:!1,type:{name:"boolean | InternalTimeZones[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},inputId:{defaultValue:null,description:"",name:"inputId",required:!1,type:{name:"string"}},menuShouldPortal:{defaultValue:null,description:"",name:"menuShouldPortal",required:!1,type:{name:"boolean"}},openMenuOnFocus:{defaultValue:null,description:"",name:"openMenuOnFocus",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/TimeZonePicker.tsx#TimeZonePicker"]={docgenInfo:TimeZonePicker.__docgenInfo,name:"TimeZonePicker",path:"src/components/DateTimePickers/TimeZonePicker.tsx#TimeZonePicker"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DateTimePickers/TimeZonePicker/TimeZoneDescription.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return TimeZoneDescription}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/ThemeContext.tsx"),TimeZoneDescription=function(param){var info=param.info,styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getStyles),description=useDescription(info);return info?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:styles.description,children:description}):null},useDescription=function(info){return(0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((function(){var parts=[];if(!info)return"";if("Europe/Simferopol"===info.name)return"Ukraine, EEST";if(info.countries.length>0){var country=info.countries[0];parts.push(country.name)}return info.abbreviation&&parts.push(info.abbreviation),parts.join(", ")}),[info])},getStyles=function(theme){return{description:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({fontWeight:"normal",fontSize:theme.typography.size.sm,color:theme.colors.text.secondary,whiteSpace:"normal",textOverflow:"ellipsis"})}};try{TimeZoneDescription.displayName="TimeZoneDescription",TimeZoneDescription.__docgenInfo={description:"",displayName:"TimeZoneDescription",props:{info:{defaultValue:null,description:"",name:"info",required:!1,type:{name:"TimeZoneInfo"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/TimeZonePicker/TimeZoneDescription.tsx#TimeZoneDescription"]={docgenInfo:TimeZoneDescription.__docgenInfo,name:"TimeZoneDescription",path:"src/components/DateTimePickers/TimeZonePicker/TimeZoneDescription.tsx#TimeZoneDescription"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DateTimePickers/TimeZonePicker/TimeZoneOffset.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{X:function(){return TimeZoneOffset},t:function(){return formatUtcOffset}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/lodash/lodash.js"),_grafana_data__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../grafana-data/src/datetime/formatter.ts"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/ThemeContext.tsx"),TimeZoneOffset=function(props){var timestamp=props.timestamp,timeZone=props.timeZone,className=props.className,styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getStyles);return(0,lodash__WEBPACK_IMPORTED_MODULE_2__.isString)(timeZone)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.offset,className),children:formatUtcOffset(timestamp,timeZone)})}):null},formatUtcOffset=function(timestamp,timeZone){var offset=(0,_grafana_data__WEBPACK_IMPORTED_MODULE_4__.LE)(timestamp,{timeZone:timeZone,format:"Z"});return"UTC".concat(offset)},getStyles=function(theme){var textBase=(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({fontWeight:"normal",fontSize:theme.typography.size.sm,color:theme.colors.text.secondary,whiteSpace:"normal"});return{offset:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)(textBase,{color:theme.colors.text.primary,background:theme.colors.background.secondary,padding:"2px 5px",borderRadius:theme.shape.radius.default,marginLeft:"4px"})}};try{TimeZoneOffset.displayName="TimeZoneOffset",TimeZoneOffset.__docgenInfo={description:"",displayName:"TimeZoneOffset",props:{timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"number"}},timeZone:{defaultValue:null,description:"",name:"timeZone",required:!0,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/TimeZonePicker/TimeZoneOffset.tsx#TimeZoneOffset"]={docgenInfo:TimeZoneOffset.__docgenInfo,name:"TimeZoneOffset",path:"src/components/DateTimePickers/TimeZonePicker/TimeZoneOffset.tsx#TimeZoneOffset"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DateTimePickers/TimeZonePicker/TimeZoneTitle.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{U:function(){return TimeZoneTitle}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),TimeZoneTitle=function(param){var title=param.title,styles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(getStyles);return title?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:styles.title,children:title}):null},getStyles=function(theme){return{title:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({fontWeight:theme.typography.fontWeightRegular,textOverflow:"ellipsis"})}};try{TimeZoneTitle.displayName="TimeZoneTitle",TimeZoneTitle.__docgenInfo={description:"",displayName:"TimeZoneTitle",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/DateTimePickers/TimeZonePicker/TimeZoneTitle.tsx#TimeZoneTitle"]={docgenInfo:TimeZoneTitle.__docgenInfo,name:"TimeZoneTitle",path:"src/components/DateTimePickers/TimeZonePicker/TimeZoneTitle.tsx#TimeZoneTitle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/DateTimePickers/TimeZonePicker.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),_grafana_ui__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/DateTimePickers/TimeZonePicker.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var meta={title:"Pickers and Editors/TimePickers/TimeZonePicker",component:_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.U,parameters:{controls:{exclude:["inputId","onChange","onBlur"]}},args:{value:"Europe/Stockholm"},argTypes:{includeInternal:{control:{type:"boolean"}}}},Basic=function(args){var updateArgs=_sliced_to_array((0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)(),2)[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__.U,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},args),{onChange:function(newValue){(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("on selected")(newValue),updateArgs({value:newValue})},onBlur:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)("onBlur")}))};__webpack_exports__.default=meta,Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"args => {\n  const [, updateArgs] = useArgs();\n  return <TimeZonePicker {...args} onChange={newValue => {\n    action('on selected')(newValue);\n    updateArgs({\n      value: newValue\n    });\n  }} onBlur={action('onBlur')} />;\n}",...Basic.parameters?.docs?.source}}}}}]);