"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[9638],{"./src/components/Layout/Stack/Stack.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return Stack}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_themes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/themes/ThemeContext.tsx"),_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Layout/utils/responsiveness.tsx"),_utils_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Layout/utils/styles.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Stack=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function(props,ref){var _props_gap=props.gap,gap=void 0===_props_gap?1:_props_gap,alignItems=props.alignItems,justifyContent=props.justifyContent,direction=props.direction,wrap=props.wrap,children=props.children,grow=props.grow,shrink=props.shrink,basis=props.basis,flex=props.flex,width=props.width,minWidth=props.minWidth,maxWidth=props.maxWidth,height=props.height,minHeight=props.minHeight,maxHeight=props.maxHeight,rest=_object_without_properties(props,["gap","alignItems","justifyContent","direction","wrap","children","grow","shrink","basis","flex","width","minWidth","maxWidth","height","minHeight","maxHeight"]),styles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(getStyles,gap,alignItems,justifyContent,direction,wrap,grow,shrink,basis,flex),sizeStyles=(0,_themes__WEBPACK_IMPORTED_MODULE_3__.of)(_utils_styles__WEBPACK_IMPORTED_MODULE_4__.E,width,minWidth,maxWidth,height,minHeight,maxHeight);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({ref:ref,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.flex,sizeStyles)},rest),{children:children}))}));Stack.displayName="Stack";var getStyles=function(theme,gap,alignItems,justifyContent,direction,wrap,grow,shrink,basis,flex){return{flex:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)([{display:"flex"},(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,direction,(function(val){return{flexDirection:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,wrap,(function(val){return{flexWrap:"boolean"==typeof val?val?"wrap":"nowrap":val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,alignItems,(function(val){return{alignItems:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,justifyContent,(function(val){return{justifyContent:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,gap,(function(val){return{gap:theme.spacing(val)}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,grow,(function(val){return{flexGrow:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,shrink,(function(val){return{flexShrink:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,basis,(function(val){return{flexBasis:val}})),(0,_utils_responsiveness__WEBPACK_IMPORTED_MODULE_5__.Y)(theme,flex,(function(val){return{flex:val}}))])}};try{Stack.displayName="Stack",Stack.__docgenInfo={description:"",displayName:"Stack",props:{gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"ResponsiveProp<ThemeSpacingTokens>"}},alignItems:{defaultValue:null,description:"",name:"alignItems",required:!1,type:{name:"ResponsiveProp<AlignItems>"}},justifyContent:{defaultValue:null,description:"",name:"justifyContent",required:!1,type:{name:"ResponsiveProp<JustifyContent>"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"ResponsiveProp<Direction>"}},wrap:{defaultValue:null,description:"",name:"wrap",required:!1,type:{name:"ResponsiveProp<Wrap>"}},grow:{defaultValue:null,description:"Sets the property `flex-grow`",name:"grow",required:!1,type:{name:"ResponsiveProp<number>"}},shrink:{defaultValue:null,description:"Sets the property `flex-shrink`",name:"shrink",required:!1,type:{name:"ResponsiveProp<number>"}},basis:{defaultValue:null,description:"Sets the property `flex-basis`",name:"basis",required:!1,type:{name:"ResponsiveProp<FlexBasis>"}},flex:{defaultValue:null,description:"Sets the property `flex`",name:"flex",required:!1,type:{name:"ResponsiveProp<Flex>"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"ResponsiveProp<MinWidth<number>>"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"ResponsiveProp<MaxWidth<number>>"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"ResponsiveProp<Width<number>>"}},minHeight:{defaultValue:null,description:"",name:"minHeight",required:!1,type:{name:"ResponsiveProp<MinHeight<number>>"}},maxHeight:{defaultValue:null,description:"",name:"maxHeight",required:!1,type:{name:"ResponsiveProp<MaxHeight<number>>"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"ResponsiveProp<Height<number>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/Stack/Stack.tsx#Stack"]={docgenInfo:Stack.__docgenInfo,name:"Stack",path:"src/components/Layout/Stack/Stack.tsx#Stack"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/utils/responsiveness.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function breakpointCSS(theme,prop,getCSS,key){var value=prop[key];if(null!=value)return function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},theme.breakpoints.up(key),getCSS(value))}function getResponsiveStyle(theme,prop,getCSS){return null==prop?null:"object"==typeof prop&&"xs"in prop?[breakpointCSS(theme,prop,getCSS,"xs"),breakpointCSS(theme,prop,getCSS,"sm"),breakpointCSS(theme,prop,getCSS,"md"),breakpointCSS(theme,prop,getCSS,"lg"),breakpointCSS(theme,prop,getCSS,"xl"),breakpointCSS(theme,prop,getCSS,"xxl")]:getCSS(prop)}__webpack_require__.d(__webpack_exports__,{Y:function(){return getResponsiveStyle}});try{getResponsiveStyle.displayName="getResponsiveStyle",getResponsiveStyle.__docgenInfo={description:"Function that converts a ResponsiveProp object into CSS",displayName:"getResponsiveStyle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"]={docgenInfo:getResponsiveStyle.__docgenInfo,name:"getResponsiveStyle",path:"src/components/Layout/utils/responsiveness.tsx#getResponsiveStyle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Layout/utils/styles.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return getSizeStyles}});var _emotion_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_responsiveness__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Layout/utils/responsiveness.tsx"),getSizeStyles=function(theme,width,minWidth,maxWidth,height,minHeight,maxHeight){return(0,_emotion_css__WEBPACK_IMPORTED_MODULE_0__.AH)([(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,width,(function(val){return{width:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,minWidth,(function(val){return{minWidth:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,maxWidth,(function(val){return{maxWidth:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,height,(function(val){return{height:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,minHeight,(function(val){return{minHeight:theme.spacing(val)}})),(0,_responsiveness__WEBPACK_IMPORTED_MODULE_1__.Y)(theme,maxHeight,(function(val){return{maxHeight:theme.spacing(val)}}))])}},"../../node_modules/react-use/lib/misc/util.js":function(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNavigator=exports.isBrowser=exports.off=exports.on=exports.noop=void 0;exports.noop=function(){},exports.on=function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)},exports.off=function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)},exports.isBrowser="undefined"!=typeof window,exports.isNavigator="undefined"!=typeof navigator},"../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js":function(__unused_webpack_module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__("../../node_modules/react/index.js"),useIsomorphicLayoutEffect=__webpack_require__("../../node_modules/react-use/lib/misc/util.js").isBrowser?react_1.useLayoutEffect:react_1.useEffect;exports.default=useIsomorphicLayoutEffect},"../../node_modules/react-use/lib/useMeasure.js":function(__unused_webpack_module,exports,__webpack_require__){var tslib_1=__webpack_require__("../../node_modules/tslib/tslib.es6.mjs"),react_1=__webpack_require__("../../node_modules/react/index.js"),useIsomorphicLayoutEffect_1=tslib_1.__importDefault(__webpack_require__("../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js")),util_1=__webpack_require__("../../node_modules/react-use/lib/misc/util.js"),defaultState={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};exports.A=util_1.isBrowser&&void 0!==window.ResizeObserver?function useMeasure(){var _a=react_1.useState(null),element=_a[0],ref=_a[1],_b=react_1.useState(defaultState),rect=_b[0],setRect=_b[1],observer=react_1.useMemo((function(){return new window.ResizeObserver((function(entries){if(entries[0]){var _a=entries[0].contentRect,x=_a.x,y=_a.y,width=_a.width,height=_a.height,top_1=_a.top,left=_a.left,bottom=_a.bottom,right=_a.right;setRect({x:x,y:y,width:width,height:height,top:top_1,left:left,bottom:bottom,right:right})}}))}),[]);return useIsomorphicLayoutEffect_1.default((function(){if(element)return observer.observe(element),function(){observer.disconnect()}}),[element]),[ref,rect]}:function(){return[util_1.noop,defaultState]}},"./src/components/SecretInput/SecretInput.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{basic:function(){return basic},default:function(){return SecretInput_story},secretIsConfigured:function(){return secretIsConfigured}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),Stack=__webpack_require__("./src/components/Layout/Stack/Stack.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SecretInput=function(_param){var isConfigured=_param.isConfigured,onReset=_param.onReset,props=_object_without_properties(_param,["isConfigured","onReset"]);return(0,jsx_runtime.jsxs)(Stack.B,{children:[!isConfigured&&(0,jsx_runtime.jsx)(Input.p,_object_spread_props(_object_spread({},props),{type:"password"})),isConfigured&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Input.p,_object_spread_props(_object_spread({},props),{type:"text",disabled:!0,value:"configured"})),(0,jsx_runtime.jsx)(Button.$n,{onClick:onReset,variant:"secondary",children:"Reset"})]})]})};try{SecretInput.displayName="SecretInput",SecretInput.__docgenInfo={description:"",displayName:"SecretInput",props:{width:{defaultValue:null,description:"Sets the width to a multiple of 8px. Should only be used with inline forms. Setting width of the container is preferred in other cases.",name:"width",required:!1,type:{name:"number"}},prefix:{defaultValue:null,description:"Show an icon as a prefix in the input",name:"prefix",required:!1,type:{name:"ReactNode"}},invalid:{defaultValue:null,description:"Show an invalid state around the input",name:"invalid",required:!1,type:{name:"boolean"}},suffix:{defaultValue:null,description:"Show an icon as a suffix in the input",name:"suffix",required:!1,type:{name:"ReactNode"}},loading:{defaultValue:null,description:"Show a loading indicator as a suffix in the input",name:"loading",required:!1,type:{name:"boolean"}},addonBefore:{defaultValue:null,description:"Add a component as an addon before the input",name:"addonBefore",required:!1,type:{name:"ReactNode"}},addonAfter:{defaultValue:null,description:"Add a component as an addon after the input",name:"addonAfter",required:!1,type:{name:"ReactNode"}},isConfigured:{defaultValue:null,description:"TRUE if the secret was already configured. (It is needed as often the backend doesn't send back the actual secret, only the information that it was configured)",name:"isConfigured",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SecretInput/SecretInput.tsx#SecretInput"]={docgenInfo:SecretInput.__docgenInfo,name:"SecretInput",path:"src/components/SecretInput/SecretInput.tsx#SecretInput"})}catch(__react_docgen_typescript_loader_error){}var lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{id:"secret-input",children:"Secret Input"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Used for secret/password input. It has 2 states: ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.em,{children:"configured"})})," and ",(0,jsx_runtime.jsx)(_components.strong,{children:(0,jsx_runtime.jsx)(_components.em,{children:"not configured"})}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"If configured it will disable the input and add a reset button that will\nclear the input and make it accessible."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"In non configured state it behaves like a normal password input."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This is used for passwords or anything that is encrypted on the server and is\nlater returned encrypted to the user (like datasource passwords)."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import {SecretInput} from '@grafana/ui';\n\n<SecretInput\n  value={...}\n  isConfigured={...}\n  onChange={...}\n  onReset={...}\n/>\n"})}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:SecretInput})]})}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var SecretInput_story={title:"Forms/SecretInput",component:SecretInput,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},controls:{exclude:["prefix","suffix","addonBefore","addonAfter","type","disabled","invalid","loading","before","after"]}},args:{width:50,placeholder:"Enter your secret..."},argTypes:{width:{control:{type:"range",min:10,max:200,step:10}}}},Template=function(args){var _useState=_sliced_to_array((0,react.useState)(""),2),secret=_useState[0],setSecret=_useState[1];return(0,jsx_runtime.jsx)(SecretInput,{width:args.width,value:secret,isConfigured:args.isConfigured,placeholder:args.placeholder,onChange:function(event){return setSecret(event.target.value.trim())},onReset:function(){return setSecret("")}})},basic=Template.bind({});basic.args={isConfigured:!1};var secretIsConfigured=Template.bind({});secretIsConfigured.args={isConfigured:!0},basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:"args => {\n  const [secret, setSecret] = useState('');\n  return <SecretInput width={args.width} value={secret} isConfigured={args.isConfigured} placeholder={args.placeholder} onChange={(event: ChangeEvent<HTMLInputElement>) => setSecret(event.target.value.trim())} onReset={() => setSecret('')} />;\n}",...basic.parameters?.docs?.source}}},secretIsConfigured.parameters={...secretIsConfigured.parameters,docs:{...secretIsConfigured.parameters?.docs,source:{originalSource:"args => {\n  const [secret, setSecret] = useState('');\n  return <SecretInput width={args.width} value={secret} isConfigured={args.isConfigured} placeholder={args.placeholder} onChange={(event: ChangeEvent<HTMLInputElement>) => setSecret(event.target.value.trim())} onReset={() => setSecret('')} />;\n}",...secretIsConfigured.parameters?.docs?.source}}}}}]);