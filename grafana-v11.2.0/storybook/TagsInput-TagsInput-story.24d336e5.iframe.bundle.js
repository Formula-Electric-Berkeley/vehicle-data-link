"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[6750],{"../grafana-data/src/utils/deprecationWarning.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return deprecationWarning}});var history={},deprecationWarning=function(file,oldName,newName){var message="[Deprecation warning] ".concat(file,": ").concat(oldName," is deprecated");newName&&(message+=". Use ".concat(newName," instead"));var now=Date.now(),last=history[message];(!last||now-last>1e4)&&(console.warn(message),history[message]=now)}},"./src/components/IconButton/IconButton.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{K:function(){return IconButton}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/index.js"),_grafana_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../grafana-data/src/utils/deprecationWarning.ts"),_grafana_data__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../grafana-data/src/themes/colorManipulator.ts"),_themes__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/themes/ThemeContext.tsx"),_themes_mixins__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/themes/mixins.ts"),_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/Button/Button.tsx"),_Icon_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/Icon/utils.ts"),_Tooltip__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Tooltip/Tooltip.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var IconButton=react__WEBPACK_IMPORTED_MODULE_2__.forwardRef((function(props,ref){var limitedIconSize,_props_size=props.size,size=void 0===_props_size?"md":_props_size,_props_variant=props.variant,variant=void 0===_props_variant?"secondary":_props_variant;"xxl"===size||"xxxl"===size?((0,_grafana_data__WEBPACK_IMPORTED_MODULE_3__.l)("IconButton",'size="xxl" and size="xxxl"','size="xl"'),limitedIconSize="xl"):limitedIconSize=size;var ariaLabel,buttonRef,styles=(0,_themes__WEBPACK_IMPORTED_MODULE_4__.of)(getStyles,limitedIconSize,variant);if("tooltip"in props){var tooltip=props.tooltip;ariaLabel="string"==typeof tooltip?tooltip:void 0}else if("ariaLabel"in props||"aria-label"in props){var deprecatedAriaLabel=props.ariaLabel;ariaLabel=props["aria-label"]||deprecatedAriaLabel,buttonRef=ref}if("tooltip"in props){var name=props.name,iconType=props.iconType,className=props.className,tooltip1=props.tooltip,tooltipPlacement=props.tooltipPlacement,restProps=_object_without_properties(props,["name","iconType","className","tooltip","tooltipPlacement"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Tooltip__WEBPACK_IMPORTED_MODULE_5__.m,{ref:ref,content:tooltip1,placement:tooltipPlacement,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",_object_spread_props(_object_spread({},restProps),{ref:buttonRef,"aria-label":ariaLabel,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.button,className),type:"button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_6__.Jt,{icon:name,size:limitedIconSize,className:styles.icon,iconType:iconType})}))})}var name1=props.name,iconType1=props.iconType,className1=props.className,restProps1=_object_without_properties(props,["name","iconType","className"]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",_object_spread_props(_object_spread({},restProps1),{ref:buttonRef,"aria-label":ariaLabel,className:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.cx)(styles.button,className1),type:"button",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_6__.Jt,{icon:name1,size:limitedIconSize,className:styles.icon,iconType:iconType1})}))}));IconButton.displayName="IconButton";var getStyles=function(theme,size,variant){var hoverSize=(0,_Icon_utils__WEBPACK_IMPORTED_MODULE_7__.cs)(size)+theme.spacing.gridSize,iconColor=theme.colors.text.primary;return"primary"===variant?iconColor=theme.colors.primary.text:"destructive"===variant&&(iconColor=theme.colors.error.text),{button:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({zIndex:0,position:"relative",margin:"0 ".concat(theme.spacing.x0_5," 0 0"),boxShadow:"none",border:"none",display:"inline-flex",background:"transparent",justifyContent:"center",alignItems:"center",padding:0,color:iconColor,"&[disabled], &:disabled":{cursor:"not-allowed",color:theme.colors.action.disabledText,opacity:.65},"&:before":_define_property({zIndex:-1,position:"absolute",opacity:0,width:"".concat(hoverSize,"px"),height:"".concat(hoverSize,"px"),borderRadius:theme.shape.radius.default,content:'""'},theme.transitions.handleMotion("no-preference","reduce"),{transitionDuration:"0.2s",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionProperty:"opacity"}),"&:focus, &:focus-visible":(0,_themes_mixins__WEBPACK_IMPORTED_MODULE_8__.Hi)(theme),"&:focus:not(:focus-visible)":(0,_themes_mixins__WEBPACK_IMPORTED_MODULE_8__.cr)(theme),"&:hover":{"&:before":{backgroundColor:"secondary"===variant?theme.colors.action.hover:_grafana_data__WEBPACK_IMPORTED_MODULE_9__.MV.alpha(iconColor,.12),opacity:1}}}),icon:(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({verticalAlign:"baseline"})}};try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{tooltip:{defaultValue:null,description:"Tooltip content to display on hover and as the aria-label",name:"tooltip",required:!0,type:{name:"PopoverContent"}},tooltipPlacement:{defaultValue:null,description:"Position of the tooltip",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'},{value:'"right"'},{value:'"left"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"auto-start"'},{value:'"auto-end"'}]}},name:{defaultValue:null,description:"Name of the icon *",name:"name",required:!0,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-left"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"expand-arrows-alt"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"compress-arrows"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"exclamation"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"kubernetes"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pause-circle"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'},{value:'"add-user"'},{value:'"attach"'}]}},size:{defaultValue:null,description:"Icon size - sizes xxl and xxxl are deprecated and when used being decreased to xl",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'},{value:'"xxl"'},{value:'"xxxl"'}]}},iconType:{defaultValue:null,description:"Type of the icon - mono or default",name:"iconType",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"default"'},{value:'"mono"'}]}},variant:{defaultValue:null,description:"Variant to change the color of the Icon",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"destructive"'}]}},ariaLabel:{defaultValue:null,description:"@deprecated use aria-label instead",name:"ariaLabel",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"Text available only for screen readers. No tooltip will be set in this case.",name:"aria-label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"src/components/IconButton/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TagsInput/TagsInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{u:function(){return TagsInput}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),emotion_css_esm=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),react=__webpack_require__("../../node_modules/react/index.js"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),tags=__webpack_require__("./src/utils/tags.ts"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),TagItem=function(param){var name=param.name,disabled=param.disabled,onRemove=param.onRemove,_useMemo=(0,react.useMemo)((function(){return(0,tags.MC)(name)}),[name]),color=_useMemo.color,borderColor=_useMemo.borderColor,styles=(0,ThemeContext.of)(getStyles);return(0,jsx_runtime.jsxs)("li",{className:styles.itemStyle,style:{backgroundColor:color,borderColor:borderColor},children:[(0,jsx_runtime.jsx)("span",{className:styles.nameStyle,children:name}),(0,jsx_runtime.jsx)(IconButton.K,{name:"times",size:"lg",disabled:disabled,tooltip:'Remove "'.concat(name,'" tag'),onClick:function(){return onRemove(name)},className:styles.buttonStyles})]})},getStyles=function(theme){var height=3*theme.spacing.gridSize;return{itemStyle:(0,emotion_css_esm.AH)({display:"flex",gap:"3px",alignItems:"center",height:"".concat(height,"px"),lineHeight:"".concat(height-2,"px"),color:"#fff",borderWidth:"1px",borderStyle:"solid",borderRadius:theme.shape.radius.default,padding:"0 ".concat(theme.spacing(.5)),whiteSpace:"nowrap",textShadow:"none",fontWeight:500,fontSize:theme.typography.size.sm}),nameStyle:(0,emotion_css_esm.AH)({maxWidth:"25ch",textOverflow:"ellipsis",overflow:"hidden"}),buttonStyles:(0,emotion_css_esm.AH)({margin:0,"&:hover::before":{display:"none"}})}};try{TagItem.displayName="TagItem",TagItem.__docgenInfo={description:"",displayName:"TagItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onRemove:{defaultValue:null,description:"",name:"onRemove",required:!0,type:{name:"(tag: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TagsInput/TagItem.tsx#TagItem"]={docgenInfo:TagItem.__docgenInfo,name:"TagItem",path:"src/components/TagsInput/TagItem.tsx#TagItem"})}catch(__react_docgen_typescript_loader_error){}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var TagsInput=function(param){var _param_placeholder=param.placeholder,placeholder=void 0===_param_placeholder?"New tag (enter key to add)":_param_placeholder,_param_tags=param.tags,tags=void 0===_param_tags?[]:_param_tags,onChange=param.onChange,width=param.width,className=param.className,disabled=param.disabled,addOnBlur=param.addOnBlur,invalid=param.invalid,id=param.id,_useState=_sliced_to_array((0,react.useState)(""),2),newTagName=_useState[0],setNewTagName=_useState[1],styles=(0,ThemeContext.of)(TagsInput_getStyles),theme=(0,ThemeContext.$j)(),onNameChange=(0,react.useCallback)((function(event){setNewTagName(event.target.value)}),[]),onRemove=function(tagToRemove){onChange(tags.filter((function(x){return x!==tagToRemove})))},onAdd=function(event){null==event||event.preventDefault(),tags.includes(newTagName)||onChange(tags.concat(newTagName)),setNewTagName("")};return(0,jsx_runtime.jsxs)("div",{className:(0,emotion_css_esm.cx)(styles.wrapper,className,width?(0,emotion_css_esm.AH)({width:theme.spacing(width)}):""),children:[(0,jsx_runtime.jsx)(Input.p,{id:id,disabled:disabled,placeholder:placeholder,onChange:onNameChange,value:newTagName,onKeyDown:function(event){"Enter"===event.key&&""!==newTagName&&onAdd(event)},onBlur:function(){addOnBlur&&newTagName&&onAdd()},invalid:invalid,suffix:(0,jsx_runtime.jsx)(Button.$n,{fill:"text",className:styles.addButtonStyle,onClick:onAdd,size:"md",disabled:newTagName.length<=0,children:"Add"})}),(null==tags?void 0:tags.length)>0&&(0,jsx_runtime.jsx)("ul",{className:styles.tags,children:tags.map((function(tag){return(0,jsx_runtime.jsx)(TagItem,{name:tag,onRemove:onRemove,disabled:disabled},tag)}))})]})},TagsInput_getStyles=function(theme){return{wrapper:(0,emotion_css_esm.AH)({minHeight:theme.spacing(4),display:"flex",flexDirection:"column",gap:theme.spacing(1),flexWrap:"wrap"}),tags:(0,emotion_css_esm.AH)({display:"flex",justifyContent:"flex-start",flexWrap:"wrap",gap:theme.spacing(.5)}),addButtonStyle:(0,emotion_css_esm.AH)({margin:"0 -".concat(theme.spacing(1))})}};try{TagsInput.displayName="TagsInput",TagsInput.__docgenInfo={description:"",displayName:"TagsInput",props:{placeholder:{defaultValue:{value:"New tag (enter key to add)"},description:"",name:"placeholder",required:!1,type:{name:"string"}},tags:{defaultValue:{value:"[]"},description:"Array of selected tags",name:"tags",required:!1,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(tags: string[]) => void"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Toggle disabled state",name:"disabled",required:!1,type:{name:"boolean"}},addOnBlur:{defaultValue:null,description:"Enable adding new tags when input loses focus",name:"addOnBlur",required:!1,type:{name:"boolean"}},invalid:{defaultValue:null,description:"Toggle invalid state",name:"invalid",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TagsInput/TagsInput.tsx#TagsInput"]={docgenInfo:TagsInput.__docgenInfo,name:"TagsInput",path:"src/components/TagsInput/TagsInput.tsx#TagsInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/storybook/StoryExample.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:function(){return StoryExample}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_emotion_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@emotion/css/dist/emotion-css.esm.js"),_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("../../node_modules/react/index.js"),__webpack_require__("./src/themes/ThemeContext.tsx")),StoryExample=function(param){var name=param.name,children=param.children,theme=(0,_themes_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.$j)(),style=(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({width:"100%",padding:"16px"}),heading=(0,_emotion_css__WEBPACK_IMPORTED_MODULE_1__.AH)({color:theme.colors.text.secondary,marginBottom:"16px"});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:style,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5",{className:heading,children:name}),children]})};StoryExample.displayName="StoryExample";try{StoryExample.displayName="StoryExample",StoryExample.__docgenInfo={description:"",displayName:"StoryExample",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/storybook/StoryExample.tsx#StoryExample"]={docgenInfo:StoryExample.__docgenInfo,name:"StoryExample",path:"src/utils/storybook/StoryExample.tsx#StoryExample"})}catch(__react_docgen_typescript_loader_error){}},"./src/utils/tags.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{MC:function(){return getTagColorsFromName},yC:function(){return getTagColor}});var TAG_COLORS=["#D32D20","#1E72B8","#B240A2","#705DA0","#466803","#497A3C","#3D71AA","#B15415","#890F02","#6E6E6E","#0A437C","#6D1F62","#584477","#4C7A3F","#2F4F4F","#BF1B00","#7662B1","#8A2EB8","#517A00","#000000","#3F6833","#2F575E","#99440A","#AE561A","#0E4AB4","#58140C","#052B51","#511749","#3F2B5B"],TAG_BORDER_COLORS=["#FF7368","#459EE7","#E069CF","#9683C6","#6C8E29","#76AC68","#6AA4E2","#E7823D","#AF3528","#9B9B9B","#3069A2","#934588","#7E6A9D","#88C477","#557575","#E54126","#A694DD","#B054DE","#8FC426","#262626","#658E59","#557D84","#BF6A30","#FF9B53","#3470DA","#7E3A32","#2B5177","#773D6F","#655181"];function getTagColorsFromName(){var index=function getTagColorIndexFromName(){var hash=function djb2(str){for(var hash=5381,i=0;i<str.length;i++)hash=(hash<<5)+hash+str.charCodeAt(i);return hash}((arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").toLowerCase());return Math.abs(hash%TAG_COLORS.length)}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"");return getTagColor(index)}function getTagColor(index){return{color:TAG_COLORS[index],borderColor:TAG_BORDER_COLORS[index]}}},"../../node_modules/react-use/lib/misc/util.js":function(__unused_webpack_module,exports){Object.defineProperty(exports,"__esModule",{value:!0}),exports.isNavigator=exports.isBrowser=exports.off=exports.on=exports.noop=void 0;exports.noop=function(){},exports.on=function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)},exports.off=function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)},exports.isBrowser="undefined"!=typeof window,exports.isNavigator="undefined"!=typeof navigator},"../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js":function(__unused_webpack_module,exports,__webpack_require__){Object.defineProperty(exports,"__esModule",{value:!0});var react_1=__webpack_require__("../../node_modules/react/index.js"),useIsomorphicLayoutEffect=__webpack_require__("../../node_modules/react-use/lib/misc/util.js").isBrowser?react_1.useLayoutEffect:react_1.useEffect;exports.default=useIsomorphicLayoutEffect},"../../node_modules/react-use/lib/useMeasure.js":function(__unused_webpack_module,exports,__webpack_require__){var tslib_1=__webpack_require__("../../node_modules/tslib/tslib.es6.mjs"),react_1=__webpack_require__("../../node_modules/react/index.js"),useIsomorphicLayoutEffect_1=tslib_1.__importDefault(__webpack_require__("../../node_modules/react-use/lib/useIsomorphicLayoutEffect.js")),util_1=__webpack_require__("../../node_modules/react-use/lib/misc/util.js"),defaultState={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};exports.A=util_1.isBrowser&&void 0!==window.ResizeObserver?function useMeasure(){var _a=react_1.useState(null),element=_a[0],ref=_a[1],_b=react_1.useState(defaultState),rect=_b[0],setRect=_b[1],observer=react_1.useMemo((function(){return new window.ResizeObserver((function(entries){if(entries[0]){var _a=entries[0].contentRect,x=_a.x,y=_a.y,width=_a.width,height=_a.height,top_1=_a.top,left=_a.left,bottom=_a.bottom,right=_a.right;setRect({x:x,y:y,width:width,height:height,top:top_1,left:left,bottom:bottom,right:right})}}))}),[]);return useIsomorphicLayoutEffect_1.default((function(){if(element)return observer.observe(element),function(){observer.disconnect()}}),[element]),[ref,rect]}:function(){return[util_1.noop,defaultState]}},"./src/components/TagsInput/TagsInput.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:function(){return Basic},WithManyTags:function(){return WithManyTags},default:function(){return TagsInput_story}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),StoryExample=__webpack_require__("./src/utils/storybook/StoryExample.tsx"),TagsInput=__webpack_require__("./src/components/TagsInput/TagsInput.tsx"),lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={h1:"h1",h3:"h3",p:"p",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"MDX|TagsInput",component:TagsInput.u}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"tagsinput",children:"TagsInput"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'A set of an input field and a button next to it that allows the user to add new tags. The added tags are previewed next to the input and can be removed by clicking the "X" icon. You can customize the width of the input.'}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:TagsInput.u})]})}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var meta={title:"Forms/TagsInput",component:TagsInput.u,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},controls:{exclude:["onChange","className","tags"]}}},Basic=function(props){var _useState=_sliced_to_array((0,react.useState)([]),2),tags=_useState[0],setTags=_useState[1];return(0,jsx_runtime.jsx)(TagsInput.u,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},props),{tags:tags,onChange:setTags}))},WithManyTags=function(){var _useState=_sliced_to_array((0,react.useState)(["dashboard","prod","server","frontend","game","kubernetes"]),2),tags=_useState[0],setTags=_useState[1];return(0,jsx_runtime.jsx)(StoryExample.Q,{name:"With many tags",children:(0,jsx_runtime.jsx)(TagsInput.u,{tags:tags,onChange:setTags})})},TagsInput_story=meta;Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"props => {\n  const [tags, setTags] = useState<string[]>([]);\n  return <TagsInput {...props} tags={tags} onChange={setTags} />;\n}",...Basic.parameters?.docs?.source}}},WithManyTags.parameters={...WithManyTags.parameters,docs:{...WithManyTags.parameters?.docs,source:{originalSource:"() => {\n  const [tags, setTags] = useState<string[]>(['dashboard', 'prod', 'server', 'frontend', 'game', 'kubernetes']);\n  return <StoryExample name=\"With many tags\">\n      <TagsInput tags={tags} onChange={setTags} />\n    </StoryExample>;\n}",...WithManyTags.parameters?.docs?.source}}}}}]);