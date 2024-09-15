"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[42],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{XI:function(){return action}});var v4=__webpack_require__("../../node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("@storybook/core-events/preview-errors"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name:name,deprecated:deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id:id,count:0,data:{name:name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/components/Forms/InlineFieldRow.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{C:function(){return InlineFieldRow}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var InlineFieldRow=function(_param){var children=_param.children,className=_param.className,htmlProps=_object_without_properties(_param,["children","className"]),styles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(getStyles);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.container,className)},htmlProps),{children:children}))},getStyles=function(theme){return{container:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({label:"InlineFieldRow",display:"flex",flexDirection:"row",flexWrap:"wrap",alignContent:"flex-start",rowGap:theme.spacing(.5)})}};try{InlineFieldRow.displayName="InlineFieldRow",InlineFieldRow.__docgenInfo={description:"",displayName:"InlineFieldRow",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Forms/InlineFieldRow.tsx#InlineFieldRow"]={docgenInfo:InlineFieldRow.__docgenInfo,name:"InlineFieldRow",path:"src/components/Forms/InlineFieldRow.tsx#InlineFieldRow"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Forms/InlineLabel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return InlineLabel}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeContext.tsx")),_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Icon/Icon.tsx"),_Tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Tooltip/Tooltip.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var InlineLabel=function(_param){var children=_param.children,className=_param.className,tooltip=_param.tooltip,width=_param.width,transparent=_param.transparent,interactive=_param.interactive,tmp=_param.as,Component=void 0===tmp?"label":tmp,rest=_object_without_properties(_param,["children","className","tooltip","width","transparent","interactive","as"]),styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getInlineLabelStyles,transparent,width);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Component,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.label,className)},rest),{children:[children,tooltip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_4__.m,{interactive:interactive,placement:"top",content:tooltip,theme:"info",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.I,{tabIndex:0,name:"info-circle",size:"sm",className:styles.icon})})]}))},getInlineLabelStyles=function(theme){var transparent=arguments.length>1&&void 0!==arguments[1]&&arguments[1],width=arguments.length>2?arguments[2]:void 0;return{label:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({display:"flex",alignItems:"center",justifyContent:"space-between",flexShrink:0,padding:theme.spacing(0,1),fontWeight:theme.typography.fontWeightMedium,fontSize:theme.typography.size.sm,backgroundColor:transparent?"transparent":theme.colors.background.secondary,height:theme.spacing(theme.components.height.md),lineHeight:theme.spacing(theme.components.height.md),marginRight:theme.spacing(.5),borderRadius:theme.shape.radius.default,border:"none",width:width?"auto"!==width?"".concat(8*width,"px"):width:"100%",color:theme.colors.text.primary}),icon:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({color:theme.colors.text.secondary,marginLeft:"10px",":hover":{color:theme.colors.text.primary}})}};try{InlineLabel.displayName="InlineLabel",InlineLabel.__docgenInfo={description:"",displayName:"InlineLabel",props:{tooltip:{defaultValue:null,description:"Content for the labels tooltip. If provided, an info icon with the tooltip content\nwill be displayed",name:"tooltip",required:!1,type:{name:"PopoverContent"}},width:{defaultValue:null,description:"Custom width for the label",name:"width",required:!1,type:{name:'number | "auto"'}},transparent:{defaultValue:null,description:"Make labels's background transparent",name:"transparent",required:!1,type:{name:"boolean"}},interactive:{defaultValue:null,description:"Make tooltip interactive",name:"interactive",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"Controls which element the InlineLabel should be rendered into",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Forms/InlineLabel.tsx#InlineLabel"]={docgenInfo:InlineLabel.__docgenInfo,name:"InlineLabel",path:"src/components/Forms/InlineLabel.tsx#InlineLabel"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Segment/SegmentSection.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:function(){return SegmentSection}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_themes__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeContext.tsx")),_Forms_InlineFieldRow__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Forms/InlineFieldRow.tsx"),_Forms_InlineLabel__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Forms/InlineLabel.tsx"),SegmentSection=function(param){var label=param.label,htmlFor=param.htmlFor,children=param.children,fill=param.fill,styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getStyles);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Forms_InlineFieldRow__WEBPACK_IMPORTED_MODULE_4__.C,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_InlineLabel__WEBPACK_IMPORTED_MODULE_5__.c,{htmlFor:htmlFor,width:12,className:styles.label,children:label}),children,fill&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:styles.fill,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Forms_InlineLabel__WEBPACK_IMPORTED_MODULE_5__.c,{children:""})})]})})},getStyles=function(theme){return{label:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({color:theme.colors.primary.text}),fill:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({flexGrow:1,marginBottom:theme.spacing(.5)})}};try{SegmentSection.displayName="SegmentSection",SegmentSection.__docgenInfo={description:"Horizontal section for editor components.",displayName:"SegmentSection",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},fill:{defaultValue:null,description:"",name:"fill",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Segment/SegmentSection.tsx#SegmentSection"]={docgenInfo:SegmentSection.__docgenInfo,name:"SegmentSection",path:"src/components/Segment/SegmentSection.tsx#SegmentSection"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Segment/styles.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{m:function(){return getSegmentStyles}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),getSegmentStyles=function(theme){var palette="v1"in theme?theme.v1.palette:theme.palette;return{segment:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({cursor:"pointer",width:"auto"}),queryPlaceholder:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({color:palette.gray2}),disabled:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)({cursor:"not-allowed",opacity:.65,boxShadow:"none"})}}},"./src/components/Segment/useExpandableLabel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:function(){return useExpandableLabel}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/index.js"),_themes__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/ThemeContext.tsx"),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Button/Button.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var useExpandableLabel=function(initialExpanded,onExpandedChange){var ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),buttonStyles=(0,_themes__WEBPACK_IMPORTED_MODULE_2__.of)(_Button__WEBPACK_IMPORTED_MODULE_3__.my),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialExpanded),2),expanded=_useState[0],setExpanded=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),2),width=_useState1[0],setWidth=_useState1[1],setExpandedWrapper=function(expanded){setExpanded(expanded),onExpandedChange&&onExpandedChange(expanded)};return[function(param){var Component=param.Component,onClick=param.onClick,disabled=param.disabled;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button",className:buttonStyles,ref:ref,disabled:disabled,onClick:function(){setExpandedWrapper(!0),ref&&ref.current&&setWidth(1.25*ref.current.clientWidth),null==onClick||onClick()},children:Component})},width,expanded,setExpandedWrapper]}},"./src/utils/measureText.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _context;__webpack_require__.d(__webpack_exports__,{Vr:function(){return calculateFontSize},Yc:function(){return getCanvasContext},kD:function(){return measureText}});var cache=new Map,cacheLimit=500,ctxFontStyle="";function getCanvasContext(){return _context||(_context=document.createElement("canvas").getContext("2d")),_context}function measureText(text,fontSize){var fontStyle="".concat(arguments.length>2&&void 0!==arguments[2]?arguments[2]:400," ").concat(fontSize,"px 'Inter'"),cacheKey=text+fontStyle,fromCache=cache.get(cacheKey);if(fromCache)return fromCache;var context=getCanvasContext();ctxFontStyle!==fontStyle&&(context.font=ctxFontStyle=fontStyle);var metrics=context.measureText(text);return cache.size===cacheLimit&&cache.clear(),cache.set(cacheKey,metrics),metrics}function calculateFontSize(text,width,height,lineHeight,maxSize,fontWeight){var fontSizeBasedOnWidth=width/(measureText(text,14,fontWeight).width+2)*14,fontSizeBasedOnHeight=height/lineHeight,optimalSize=Math.min(fontSizeBasedOnHeight,fontSizeBasedOnWidth);return Math.min(optimalSize,null!=maxSize?maxSize:optimalSize)}},"../../node_modules/react-use/lib/misc/util.js":function(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNavigator=exports.isBrowser=exports.off=exports.on=exports.noop=void 0;exports.noop=function(){},exports.on=function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)},exports.off=function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)},exports.isBrowser="undefined"!=typeof window,exports.isNavigator="undefined"!=typeof navigator},"../../node_modules/react-use/lib/useClickAway.js":function(__unused_webpack_module,exports,__webpack_require__){var react_1=__webpack_require__("../../node_modules/react/index.js"),util_1=__webpack_require__("../../node_modules/react-use/lib/misc/util.js"),defaultEvents=["mousedown","touchstart"];exports.A=function(ref,onClickAway,events){void 0===events&&(events=defaultEvents);var savedCallback=react_1.useRef(onClickAway);react_1.useEffect((function(){savedCallback.current=onClickAway}),[onClickAway]),react_1.useEffect((function(){for(var handler=function(event){var el=ref.current;el&&!el.contains(event.target)&&savedCallback.current(event)},_i=0,events_1=events;_i<events_1.length;_i++){var eventName=events_1[_i];util_1.on(document,eventName,handler)}return function(){for(var _i=0,events_2=events;_i<events_2.length;_i++){var eventName=events_2[_i];util_1.off(document,eventName,handler)}}}),[events,ref])}},"./src/components/Segment/SegmentInput.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},BasicInput:function(){return BasicInput},BasicInputWithHtmlAttributes:function(){return BasicInputWithHtmlAttributes},BasicInputWithPlaceholder:function(){return BasicInputWithPlaceholder},InputWithAutoFocus:function(){return InputWithAutoFocus},default:function(){return SegmentInput_story}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),react=__webpack_require__("../../node_modules/react/index.js"),SegmentSection=__webpack_require__("./src/components/Segment/SegmentSection.tsx"),emotion_css_esm=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),useClickAway=__webpack_require__("../../node_modules/react-use/lib/useClickAway.js"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx"),measureText=__webpack_require__("./src/utils/measureText.ts"),InlineLabel=__webpack_require__("./src/components/Forms/InlineLabel.tsx"),Segment_styles=__webpack_require__("./src/components/Segment/styles.ts"),useExpandableLabel=__webpack_require__("./src/components/Segment/useExpandableLabel.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function SegmentInput(_param){var _obj,initialValue=_param.value,onChange=_param.onChange,Component=_param.Component,className=_param.className,placeholder=_param.placeholder,inputPlaceholder=_param.inputPlaceholder,disabled=_param.disabled,_param_autofocus=_param.autofocus,autofocus=void 0!==_param_autofocus&&_param_autofocus,onExpandedChange=_param.onExpandedChange,rest=_object_without_properties(_param,["value","onChange","Component","className","placeholder","inputPlaceholder","disabled","autofocus","onExpandedChange"]),ref=(0,react.useRef)(null),_useState=_sliced_to_array((0,react.useState)(initialValue),2),value=_useState[0],setValue=_useState[1],_useState1=_sliced_to_array((0,react.useState)((0,measureText.kD)((initialValue||"").toString(),14).width),2),inputWidth=_useState1[0],setInputWidth=_useState1[1],_useExpandableLabel=_sliced_to_array((0,useExpandableLabel.Q)(autofocus,onExpandedChange),4),Label=_useExpandableLabel[0],expanded=_useExpandableLabel[2],setExpanded=_useExpandableLabel[3],styles=(0,ThemeContext.of)(Segment_styles.m);if((0,useClickAway.A)(ref,(function(){setExpanded(!1),onChange(value)})),!expanded)return(0,jsx_runtime.jsx)(Label,{disabled:disabled,Component:Component||(0,jsx_runtime.jsx)(InlineLabel.c,{className:(0,emotion_css_esm.cx)(styles.segment,(_obj={},_define_property(_obj,styles.queryPlaceholder,void 0!==placeholder&&!value),_define_property(_obj,styles.disabled,disabled),_obj),className),children:initialValue||placeholder})});var inputWidthStyle=(0,emotion_css_esm.AH)({width:"".concat(Math.max(inputWidth+20,32),"px")});return(0,jsx_runtime.jsx)("input",_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},rest),{ref:ref,autoFocus:!0,className:(0,emotion_css_esm.cx)("gf-form gf-form-input",inputWidthStyle),value:value,placeholder:inputPlaceholder,onChange:function(item){var width=(0,measureText.kD)(item.target.value,14).width;setInputWidth(width),setValue(item.target.value)},onBlur:function(){setExpanded(!1),onChange(value)},onKeyDown:function(e){[13,27].includes(e.keyCode)&&(setExpanded(!1),onChange(value))}}))}try{SegmentInput.displayName="SegmentInput",SegmentInput.__docgenInfo={description:"",displayName:"SegmentInput",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(text: string | number) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},onExpandedChange:{defaultValue:null,description:"",name:"onExpandedChange",required:!1,type:{name:"((expanded: boolean) => void)"}},autofocus:{defaultValue:{value:"false"},description:"",name:"autofocus",required:!1,type:{name:"boolean"}},inputPlaceholder:{defaultValue:null,description:"",name:"inputPlaceholder",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Segment/SegmentInput.tsx#SegmentInput"]={docgenInfo:SegmentInput.__docgenInfo,name:"SegmentInput",path:"src/components/Segment/SegmentInput.tsx#SegmentInput"})}catch(__react_docgen_typescript_loader_error){}var Icon=__webpack_require__("./src/components/Icon/Icon.tsx");function SegmentInput_story_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function SegmentInput_story_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function SegmentInput_story_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){SegmentInput_story_define_property(target,key,source[key])}))}return target}function SegmentInput_story_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function SegmentInput_story_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function SegmentInput_story_sliced_to_array(arr,i){return function SegmentInput_story_array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function SegmentInput_story_iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||SegmentInput_story_unsupported_iterable_to_array(arr,i)||function SegmentInput_story_non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _to_consumable_array(arr){return function _array_without_holes(arr){if(Array.isArray(arr))return SegmentInput_story_array_like_to_array(arr)}(arr)||function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||SegmentInput_story_unsupported_iterable_to_array(arr)||function _non_iterable_spread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function SegmentInput_story_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return SegmentInput_story_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?SegmentInput_story_array_like_to_array(o,minLen):void 0}}var SegmentFrame=function(param){var children=param.children;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(SegmentSection.L,{label:"Segment",children:children})})},BasicInput=function(){var _useState=SegmentInput_story_sliced_to_array((0,react.useState)("some text"),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(SegmentFrame,{children:(0,jsx_runtime.jsx)(SegmentInput,{value:value,onChange:function(text){setValue(text),(0,dist.XI)("Segment value changed")(text)}})})},meta={title:"Data Source/Segment/SegmentInput",component:SegmentInput},BasicInputWithPlaceholder=function(){var _useState=SegmentInput_story_sliced_to_array((0,react.useState)(""),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(SegmentFrame,{children:(0,jsx_runtime.jsx)(SegmentInput,{placeholder:"add text",value:value,onChange:function(text){setValue(text),(0,dist.XI)("Segment value changed")(text)}})})},BasicInputWithHtmlAttributes=function(){var _useState=SegmentInput_story_sliced_to_array((0,react.useState)("some text"),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(SegmentFrame,{children:(0,jsx_runtime.jsx)(SegmentInput,{"data-testid":"segment-input-test",id:"segment-input",value:value,onChange:function(text){setValue(text),(0,dist.XI)("Segment value changed")(text)}})})},InputComponent=function(param){var initialValue=param.initialValue,_useState=SegmentInput_story_sliced_to_array((0,react.useState)(initialValue),2),value=_useState[0],setValue=_useState[1];return(0,jsx_runtime.jsx)(SegmentInput,{placeholder:"add text",autofocus:!0,value:value,onChange:function(text){setValue(text),(0,dist.XI)("Segment value changed")(text)}})},InputWithAutoFocus=function(){var _useState=SegmentInput_story_sliced_to_array((0,react.useState)([]),2),inputComponents=_useState[0],setInputComponents=_useState[1];return(0,jsx_runtime.jsxs)(SegmentFrame,{children:[inputComponents.map((function(InputComponent,i){return(0,jsx_runtime.jsx)(InputComponent,{initialValue:"test"},i)})),(0,jsx_runtime.jsx)("button",{type:"button",className:"gf-form-label query-part",onClick:function(){setInputComponents(_to_consumable_array(inputComponents).concat([InputComponent]))},children:(0,jsx_runtime.jsx)(Icon.I,{name:"plus"})})]})},Basic=function(args){var _useState=SegmentInput_story_sliced_to_array((0,react.useState)(args.value),2),value=_useState[0],setValue=_useState[1],props=SegmentInput_story_object_spread_props(SegmentInput_story_object_spread({},args),{value:value,onChange:function(value){setValue(value),(0,dist.XI)("onChange fired")({value:value})},onExpandedChange:function(expanded){return(0,dist.XI)("onExpandedChange fired")({expanded:expanded})}});return(0,jsx_runtime.jsx)(SegmentSection.L,{label:"Segment:",children:(0,jsx_runtime.jsx)(SegmentInput,SegmentInput_story_object_spread({},props))})};Basic.parameters={controls:{exclude:["value","onChange","Component","className","onExpandedChange"]}},Basic.args={value:"Initial input value",placeholder:"Placeholder text",disabled:!1,autofocus:!1,inputPlaceholder:"Start typing..."};var SegmentInput_story=meta;BasicInput.parameters={...BasicInput.parameters,docs:{...BasicInput.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState<string | number>('some text');\n  return <SegmentFrame>\n      <SegmentInput value={value} onChange={text => {\n      setValue(text);\n      action('Segment value changed')(text);\n    }} />\n    </SegmentFrame>;\n}",...BasicInput.parameters?.docs?.source}}},BasicInputWithPlaceholder.parameters={...BasicInputWithPlaceholder.parameters,docs:{...BasicInputWithPlaceholder.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState<string | number>('');\n  return <SegmentFrame>\n      <SegmentInput placeholder=\"add text\" value={value} onChange={text => {\n      setValue(text);\n      action('Segment value changed')(text);\n    }} />\n    </SegmentFrame>;\n}",...BasicInputWithPlaceholder.parameters?.docs?.source}}},BasicInputWithHtmlAttributes.parameters={...BasicInputWithHtmlAttributes.parameters,docs:{...BasicInputWithHtmlAttributes.parameters?.docs,source:{originalSource:"() => {\n  const [value, setValue] = useState<string | number>('some text');\n  return <SegmentFrame>\n      <SegmentInput data-testid=\"segment-input-test\" id=\"segment-input\" value={value} onChange={text => {\n      setValue(text);\n      action('Segment value changed')(text);\n    }} />\n    </SegmentFrame>;\n}",...BasicInputWithHtmlAttributes.parameters?.docs?.source}}},InputWithAutoFocus.parameters={...InputWithAutoFocus.parameters,docs:{...InputWithAutoFocus.parameters?.docs,source:{originalSource:'() => {\n  const [inputComponents, setInputComponents] = useState<Array<(props: InputComponentProps) => JSX.Element>>([]);\n  return <SegmentFrame>\n      {inputComponents.map((InputComponent, i) => <InputComponent initialValue="test" key={i} />)}\n      <button type="button" className="gf-form-label query-part" onClick={() => {\n      setInputComponents([...inputComponents, InputComponent]);\n    }}>\n        <Icon name="plus" />\n      </button>\n    </SegmentFrame>;\n}',...InputWithAutoFocus.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"(args: SegmentInputProps) => {\n  const [value, setValue] = useState(args.value);\n  const props: SegmentInputProps = {\n    ...args,\n    value,\n    onChange: value => {\n      setValue(value);\n      action('onChange fired')({\n        value\n      });\n    },\n    onExpandedChange: expanded => action('onExpandedChange fired')({\n      expanded\n    })\n  };\n  return <SegmentSection label=\"Segment:\">\n      <SegmentInput {...props} />\n    </SegmentSection>;\n}",...Basic.parameters?.docs?.source}}}}}]);