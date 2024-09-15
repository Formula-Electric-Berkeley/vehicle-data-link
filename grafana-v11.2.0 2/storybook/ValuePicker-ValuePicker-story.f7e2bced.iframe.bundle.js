"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[394],{"./src/components/Select/mockOptions.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Q:function(){return generateOptions},W:function(){return generateThousandsOfOptions}});var lodash__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/lodash/lodash.js"),generateOptions=function(){var desc=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return["Sharilyn Markowitz","Naomi Striplin","Beau Bevel","Garrett Starkes","Hildegarde Pedro","Gudrun Seyler","Eboni Raines","Hye Felix","Chau Brito","Heidy Zook","Karima Husain","Virgil Mckinny","Kaley Dodrill","Sharan Ruf","Edgar Loveland","Judie Sanger","Season Bundrick","Ok Vicente","Garry Spitz","Han Harnish","A very long value that is very long and takes up a lot of space and should be truncated preferrably if it does not fit"].map((function(name){return{value:(0,lodash__WEBPACK_IMPORTED_MODULE_0__.kebabCase)(name),label:name,description:desc?"This is a description of ".concat(name):void 0}}))},generateThousandsOfOptions=function(){return new Array(1e4).fill(null).map((function(_,index){return{value:String(index),label:"Option "+index,description:"This is option number "+index}}))};try{generateOptions.displayName="generateOptions",generateOptions.__docgenInfo={description:"",displayName:"generateOptions",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Select/mockOptions.tsx#generateOptions"]={docgenInfo:generateOptions.__docgenInfo,name:"generateOptions",path:"src/components/Select/mockOptions.tsx#generateOptions"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ValuePicker/ValuePicker.story.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:function(){return Simple},default:function(){return ValuePicker_story}});var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/react/index.js"),selectors=__webpack_require__("../grafana-e2e-selectors/src/selectors/index.ts"),ThemeContext=__webpack_require__("./src/themes/ThemeContext.tsx"),Button=__webpack_require__("./src/components/Button/Button.tsx"),Select=__webpack_require__("./src/components/Select/Select.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _sliced_to_array(arr,i){return function _array_with_holes(arr){if(Array.isArray(arr))return arr}(arr)||function _iterable_to_array_limit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupported_iterable_to_array(o,minLen){if(!o)return;if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}(arr,i)||function _non_iterable_rest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ValuePicker(param){var ariaLabel=param["aria-label"],label=param.label,icon=param.icon,options=param.options,onChange=param.onChange,variant=param.variant,_param_minWidth=param.minWidth,minWidth=void 0===_param_minWidth?16:_param_minWidth,_param_size=param.size,size=void 0===_param_size?"sm":_param_size,_param_isFullWidth=param.isFullWidth,isFullWidth=void 0===_param_isFullWidth||_param_isFullWidth,menuPlacement=param.menuPlacement,fill=param.fill,buttonCss=param.buttonCss,_useState=_sliced_to_array((0,react.useState)(!1),2),isPicking=_useState[0],setIsPicking=_useState[1],theme=(0,ThemeContext.$j)();return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!isPicking&&(0,jsx_runtime.jsx)(Button.$n,{size:size||"sm",className:buttonCss,icon:icon||"plus",onClick:function(){return setIsPicking(!0)},variant:variant,fill:fill,fullWidth:isFullWidth,"data-testid":selectors.Tp.components.ValuePicker.button(null!=ariaLabel?ariaLabel:label),children:label}),isPicking&&(0,jsx_runtime.jsx)("span",{style:{minWidth:theme.spacing(minWidth),flexGrow:isFullWidth?1:void 0},children:(0,jsx_runtime.jsx)(Select.l6,{placeholder:label,options:options,"aria-label":selectors.Tp.components.ValuePicker.select(null!=ariaLabel?ariaLabel:label),isOpen:!0,onCloseMenu:function(){return setIsPicking(!1)},autoFocus:!0,onChange:function(value){setIsPicking(!1),onChange(value)},menuPlacement:menuPlacement})})]})}try{ValuePicker.displayName="ValuePicker",ValuePicker.__docgenInfo={description:"",displayName:"ValuePicker",props:{"aria-label":{defaultValue:null,description:"Aria label applied to the input field",name:"aria-label",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label to display on the picker button",name:"label",required:!0,type:{name:"string"}},icon:{defaultValue:null,description:"Icon to display on the picker button",name:"icon",required:!1,type:{name:"enum",value:[{value:'"play"'},{value:'"google"'},{value:'"microsoft"'},{value:'"github"'},{value:'"gitlab"'},{value:'"okta"'},{value:'"discord"'},{value:'"hipchat"'},{value:'"amazon"'},{value:'"google-hangouts-alt"'},{value:'"pagerduty"'},{value:'"line"'},{value:'"anchor"'},{value:'"adjust-circle"'},{value:'"angle-double-down"'},{value:'"angle-double-right"'},{value:'"angle-double-left"'},{value:'"angle-double-up"'},{value:'"angle-down"'},{value:'"angle-left"'},{value:'"angle-right"'},{value:'"angle-up"'},{value:'"align-left"'},{value:'"align-right"'},{value:'"application-observability"'},{value:'"apps"'},{value:'"archive-alt"'},{value:'"arrow"'},{value:'"arrow-down"'},{value:'"arrow-from-right"'},{value:'"arrow-left"'},{value:'"arrow-random"'},{value:'"arrow-right"'},{value:'"arrow-to-right"'},{value:'"arrow-up"'},{value:'"arrows-h"'},{value:'"arrows-v"'},{value:'"asserts"'},{value:'"expand-arrows"'},{value:'"expand-arrows-alt"'},{value:'"at"'},{value:'"ai"'},{value:'"backward"'},{value:'"bars"'},{value:'"bell"'},{value:'"bell-slash"'},{value:'"bolt"'},{value:'"book"'},{value:'"bookmark"'},{value:'"book-open"'},{value:'"brackets-curly"'},{value:'"bug"'},{value:'"building"'},{value:'"calculator-alt"'},{value:'"calendar-alt"'},{value:'"calendar-slash"'},{value:'"camera"'},{value:'"capture"'},{value:'"channel-add"'},{value:'"chart-line"'},{value:'"check"'},{value:'"check-circle"'},{value:'"check-square"'},{value:'"circle"'},{value:'"circle-mono"'},{value:'"clipboard-alt"'},{value:'"clock-nine"'},{value:'"cloud"'},{value:'"cloud-download"'},{value:'"cloud-upload"'},{value:'"code-branch"'},{value:'"cog"'},{value:'"columns"'},{value:'"comment-alt"'},{value:'"comment-alt-message"'},{value:'"comment-alt-share"'},{value:'"comments-alt"'},{value:'"compass"'},{value:'"compress-arrows"'},{value:'"copy"'},{value:'"corner-down-right-alt"'},{value:'"create-dashboard"'},{value:'"credit-card"'},{value:'"crosshair"'},{value:'"cube"'},{value:'"dashboard"'},{value:'"database"'},{value:'"dice-three"'},{value:'"docker"'},{value:'"document-info"'},{value:'"document-layout-left"'},{value:'"download-alt"'},{value:'"draggabledots"'},{value:'"edit"'},{value:'"ellipsis-v"'},{value:'"enter"'},{value:'"envelope"'},{value:'"exchange-alt"'},{value:'"exclamation-triangle"'},{value:'"exclamation-circle"'},{value:'"exclamation"'},{value:'"external-link-alt"'},{value:'"eye"'},{value:'"eye-slash"'},{value:'"ellipsis-h"'},{value:'"fa fa-spinner"'},{value:'"favorite"'},{value:'"file-alt"'},{value:'"file-blank"'},{value:'"file-copy-alt"'},{value:'"file-download"'},{value:'"file-edit-alt"'},{value:'"file-landscape-alt"'},{value:'"filter"'},{value:'"flip"'},{value:'"folder"'},{value:'"font"'},{value:'"fire"'},{value:'"folder-open"'},{value:'"folder-plus"'},{value:'"folder-upload"'},{value:'"forward"'},{value:'"frontend-observability"'},{value:'"gf-bar-alignment-after"'},{value:'"gf-bar-alignment-before"'},{value:'"gf-bar-alignment-center"'},{value:'"gf-glue"'},{value:'"gf-grid"'},{value:'"gf-interpolation-linear"'},{value:'"gf-interpolation-smooth"'},{value:'"gf-interpolation-step-after"'},{value:'"gf-interpolation-step-before"'},{value:'"gf-landscape"'},{value:'"gf-layout-simple"'},{value:'"gf-logs"'},{value:'"gf-ml"'},{value:'"gf-movepane-left"'},{value:'"gf-movepane-right"'},{value:'"gf-portrait"'},{value:'"gf-service-account"'},{value:'"gf-show-context"'},{value:'"gf-pin"'},{value:'"gf-prometheus"'},{value:'"gf-traces"'},{value:'"globe"'},{value:'"grafana"'},{value:'"graph-bar"'},{value:'"heart"'},{value:'"heart-rate"'},{value:'"heart-break"'},{value:'"history"'},{value:'"history-alt"'},{value:'"home"'},{value:'"home-alt"'},{value:'"horizontal-align-center"'},{value:'"horizontal-align-left"'},{value:'"horizontal-align-right"'},{value:'"hourglass"'},{value:'"import"'},{value:'"info"'},{value:'"info-circle"'},{value:'"k6"'},{value:'"key-skeleton-alt"'},{value:'"keyboard"'},{value:'"kubernetes"'},{value:'"layer-group"'},{value:'"layers-alt"'},{value:'"library-panel"'},{value:'"line-alt"'},{value:'"link"'},{value:'"list-ui-alt"'},{value:'"list-ul"'},{value:'"list-ol"'},{value:'"lock"'},{value:'"map-marker"'},{value:'"map-marker-plus"'},{value:'"map-marker-minus"'},{value:'"message"'},{value:'"minus"'},{value:'"minus-circle"'},{value:'"mobile-android"'},{value:'"monitor"'},{value:'"palette"'},{value:'"panel-add"'},{value:'"paragraph"'},{value:'"pathfinder-unite"'},{value:'"pause"'},{value:'"pause-circle"'},{value:'"pen"'},{value:'"percentage"'},{value:'"plug"'},{value:'"plus"'},{value:'"plus-circle"'},{value:'"plus-square"'},{value:'"power"'},{value:'"presentation-play"'},{value:'"process"'},{value:'"question-circle"'},{value:'"record-audio"'},{value:'"repeat"'},{value:'"rocket"'},{value:'"ruler-combined"'},{value:'"save"'},{value:'"search"'},{value:'"search-minus"'},{value:'"search-plus"'},{value:'"share-alt"'},{value:'"shield"'},{value:'"shield-exclamation"'},{value:'"signal"'},{value:'"signin"'},{value:'"signout"'},{value:'"sitemap"'},{value:'"slack"'},{value:'"sliders-v-alt"'},{value:'"spinner"'},{value:'"sort-amount-down"'},{value:'"sort-amount-up"'},{value:'"square-shape"'},{value:'"star"'},{value:'"step-backward"'},{value:'"stopwatch"'},{value:'"stopwatch-slash"'},{value:'"sync"'},{value:'"sync-slash"'},{value:'"table"'},{value:'"table-collapse-all"'},{value:'"table-expand-all"'},{value:'"tag-alt"'},{value:'"telegram-alt"'},{value:'"text-fields"'},{value:'"thumbs-up"'},{value:'"times"'},{value:'"times-circle"'},{value:'"toggle-on"'},{value:'"toggle-off"'},{value:'"trash-alt"'},{value:'"unarchive"'},{value:'"unlock"'},{value:'"upload"'},{value:'"user"'},{value:'"users-alt"'},{value:'"user-arrows"'},{value:'"vertical-align-bottom"'},{value:'"vertical-align-center"'},{value:'"vertical-align-top"'},{value:'"web-section-alt"'},{value:'"wrap-text"'},{value:'"rss"'},{value:'"x"'},{value:'"add-user"'},{value:'"attach"'}]}},options:{defaultValue:null,description:"ValuePicker options",name:"options",required:!0,type:{name:"SelectableValue<T>[]"}},onChange:{defaultValue:null,description:"Callback to handle selected option",name:"onChange",required:!0,type:{name:"(value: SelectableValue<T>) => void"}},variant:{defaultValue:null,description:"Which ButtonVariant to render",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"destructive"'},{value:'"success"'}]}},size:{defaultValue:{value:"sm"},description:"Size of button",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},minWidth:{defaultValue:{value:"16"},description:"Min width for select in grid units",name:"minWidth",required:!1,type:{name:"number"}},isFullWidth:{defaultValue:{value:"true"},description:"Should the picker cover the full width of its parent",name:"isFullWidth",required:!1,type:{name:"boolean"}},menuPlacement:{defaultValue:null,description:"Control where the menu is rendered",name:"menuPlacement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"bottom"'},{value:'"top"'}]}},fill:{defaultValue:null,description:"Which ButtonFill to use",name:"fill",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"outline"'},{value:'"text"'}]}},buttonCss:{defaultValue:null,description:"custom css applied to the button",name:"buttonCss",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ValuePicker/ValuePicker.tsx#ValuePicker"]={docgenInfo:ValuePicker.__docgenInfo,name:"ValuePicker",path:"src/components/ValuePicker/ValuePicker.tsx#ValuePicker"})}catch(__react_docgen_typescript_loader_error){}var icon=__webpack_require__("./src/types/icon.ts"),mockOptions=__webpack_require__("./src/components/Select/mockOptions.tsx"),lib=__webpack_require__("../../node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"MDX|Button",component:ValuePicker}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"valuepicker",children:"ValuePicker"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"A component that looks like a button but transforms into a select when clicked."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"example-usage",children:"Example usage"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["This component is currently used when adding ",(0,jsx_runtime.jsx)(_components.a,{href:"https://grafana.com/docs/grafana/latest/panels/field-options/",rel:"nofollow",children:"FieldOverrides"})," in the panel edit mode."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"<ValuePicker\n  label=\"Choose an option\"\n  options={[\n    {\n      value: 'option1',\n      label: 'Option 1',\n    },\n    {\n      value: 'option2',\n      label: 'Option 2',\n    },\n    {\n      value: 'option3',\n      label: 'Option 3',\n    },\n  ]}\n  onChange={(value) => doThings}\n  variant=\"primary\"\n  size=\"md\"\n/>\n"})}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:ValuePicker})]})}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}var meta={title:"Pickers and Editors/ValuePicker",component:ValuePicker,parameters:{docs:{page:function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},controls:{exclude:["onChange","options"]}},argTypes:{variant:{options:["primary","secondary","destructive","link"],control:{type:"select"}},icon:{control:{type:"select",options:(0,icon.GO)()}},size:{options:["sm","md","lg"],control:{type:"select"}}}},options=(0,mockOptions.Q)(),Simple=function(args){return(0,jsx_runtime.jsx)("div",{style:{width:"200px"},children:(0,jsx_runtime.jsx)(ValuePicker,_object_spread_props(_object_spread({},args),{options:options,onChange:function(v){return console.log(v)}}))})};Simple.args={label:"Pick an option",variant:"primary",size:"md",isFullWidth:!1,icon:"plus",menuPlacement:"auto"};var ValuePicker_story=meta;Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"args => {\n  return <div style={{\n    width: '200px'\n  }}>\n      <ValuePicker {...args} options={options} onChange={v => console.log(v)} />\n    </div>;\n}",...Simple.parameters?.docs?.source}}}}}]);