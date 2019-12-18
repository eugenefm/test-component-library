(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1005:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(193),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(88),_src_Theme_theme__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(470);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)((function(story){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__.a,{theme:_src_Theme_theme__WEBPACK_IMPORTED_MODULE_3__.a},story())})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(__webpack_require__(1007),module)}.call(this,__webpack_require__(1006)(module))},1007:function(module,exports,__webpack_require__){var map={"./Components/Button/Button.stories.mdx":1057,"./Components/Link/Link.stories.mdx":1054,"./Components/Paragraph/Paragraph.stories.mdx":1058};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1007},1054:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"primary",(function(){return primary}));__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(18),_Link__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(75),__webpack_require__(89));function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={},MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(MDXLayout,_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,{title:"Link",component:_Link__WEBPACK_IMPORTED_MODULE_4__.a,mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h1",null,"Link"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",null,"Properties"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,{of:_Link__WEBPACK_IMPORTED_MODULE_4__.a,mdxType:"Props"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)("h2",null,"Basic usage"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,{mdxType:"Preview"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,{name:"Primary",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_Link__WEBPACK_IMPORTED_MODULE_4__.a,{href:"https://google.com",target:"_blank",mdxType:"Link"},"Call to Action"))))}MDXContent.isMDXComponent=!0;var primary=function primary(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_Link__WEBPACK_IMPORTED_MODULE_4__.a,{href:"https://google.com",target:"_blank"},"Call to Action")};primary.story={},primary.story.name="Primary",primary.story.parameters={mdxSource:'<Link href="https://google.com" target="_blank">\n\t\t\tCall to Action\n\t\t</Link>'};var componentMeta={title:"Link",includeStories:["primary"]},mdxStoryNameToId={Primary:"link--primary"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={container:function container(_ref2){var context=_ref2.context,children=_ref2.children;return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.DocsContainer,{context:_objectSpread({},context,{mdxStoryNameToId:mdxStoryNameToId})},children)},page:MDXContent},__webpack_exports__.default=componentMeta},1057:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(1),blocks=__webpack_require__(18),dist=__webpack_require__(75),addon_knobs_dist=__webpack_require__(47),prop_types=(__webpack_require__(2),__webpack_require__(9),__webpack_require__(3),__webpack_require__(5),__webpack_require__(33)),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(88),index_esm=__webpack_require__(46);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var StyledButton=Object(styled_components_browser_esm.b)("button")({textTransform:"uppercase",letterSpacing:"1px"},Object(index_esm.d)({variants:{primary:{color:"white",bg:"blue",padding:2,border:"none"},secondary:{color:"blue",bg:"white",padding:2,border:"1px solid blue"}}}),index_esm.a,index_esm.b,index_esm.c),Button=function(props){var children=props.children,onClick=props.onClick,variant=props.variant,others=_objectWithoutProperties(props,["children","onClick","variant"]);return react_default.a.createElement(StyledButton,_extends({variant:variant,fontSize:0,onClick:onClick},others),children)};Button.displayName="Button",Button.propTypes={children:prop_types_default.a.node.isRequired,onClick:prop_types_default.a.func.isRequired,variant:prop_types_default.a.string},Button.defaultProps={variant:"primary"},Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},type:{name:"string"},required:!1,description:""},children:{type:{name:"node"},required:!0,description:""},onClick:{type:{name:"func"},required:!0,description:""}}};var Button_Button=Button;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Button_stories_extends(){return(Button_stories_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function Button_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Button_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Button/Button.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/Components/Button/Button.js"}),__webpack_require__.d(__webpack_exports__,"primaryButton",(function(){return Button_stories_primaryButton})),__webpack_require__.d(__webpack_exports__,"secondaryButton",(function(){return Button_stories_secondaryButton})),__webpack_require__.d(__webpack_exports__,"buttonWithKnobs",(function(){return Button_stories_buttonWithKnobs}));var layoutProps={},MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=Button_stories_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)(MDXLayout,Button_stories_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"Button",component:Button_Button,mdxType:"Meta"}),Object(esm.mdx)("h1",null,"Button"),Object(esm.mdx)("p",null,"This is the button that I made, isn't it awesome."),Object(esm.mdx)("h2",null,"Properties"),Object(esm.mdx)("p",null,"Here are all the props that it takes, which are automatically defined using ",Object(esm.mdx)("inlineCode",{parentName:"p"},"propTypes")," and ",Object(esm.mdx)("inlineCode",{parentName:"p"},"defaultProps"),"."),Object(esm.mdx)(blocks.Props,{of:Button_Button,mdxType:"Props"}),Object(esm.mdx)("h2",null,"Basic usage"),Object(esm.mdx)("p",null,"Indendation on the code preview looks a little broken in the current version of Storybook - ",Object(esm.mdx)("a",Button_stories_extends({parentName:"p"},{href:"https://github.com/storybookjs/storybook/issues/8078"}),"see this issue"),"."),Object(esm.mdx)(blocks.Preview,{mdxType:"Preview"},Object(esm.mdx)(blocks.Story,{name:"Primary Button",mdxType:"Story"},Object(esm.mdx)(Button_Button,{"aria-label":"Call to Action",onClick:Object(dist.action)("Button Click"),mdxType:"Button"},"Call to Action")),Object(esm.mdx)(blocks.Story,{name:"Secondary Button",mdxType:"Story"},Object(esm.mdx)(Button_Button,{variant:"secondary","aria-label":"Call to Action",onClick:Object(dist.action)("Button Click"),mdxType:"Button"},"Call to Action"))),Object(esm.mdx)("p",null,"This additional story will be hidden from the docs in ",Object(esm.mdx)("inlineCode",{parentName:"p"},"Storyboook 5.3.0")),Object(esm.mdx)(blocks.Story,{name:"Button with Knobs",parameters:{docs:{disable:!0}},decorators:[addon_knobs_dist.withKnobs],mdxType:"Story"},Object(esm.mdx)(Button_Button,{variant:Object(addon_knobs_dist.select)("Variant",{primary:"primary",secondary:"secondary"},"primary"),"aria-label":"Call to Action",onClick:Object(dist.action)("Button Click"),mdxType:"Button"},Object(addon_knobs_dist.text)("Text","Call to Action"))))}MDXContent.isMDXComponent=!0;var Button_stories_primaryButton=function primaryButton(){return Object(esm.mdx)(Button_Button,{"aria-label":"Call to Action",onClick:Object(dist.action)("Button Click")},"Call to Action")};Button_stories_primaryButton.story={},Button_stories_primaryButton.story.name="Primary Button",Button_stories_primaryButton.story.parameters={mdxSource:"<Button aria-label='Call to Action' onClick={action('Button Click')}>\n\t\t\tCall to Action\n\t\t</Button>"};var Button_stories_secondaryButton=function secondaryButton(){return Object(esm.mdx)(Button_Button,{variant:"secondary","aria-label":"Call to Action",onClick:Object(dist.action)("Button Click")},"Call to Action")};Button_stories_secondaryButton.story={},Button_stories_secondaryButton.story.name="Secondary Button",Button_stories_secondaryButton.story.parameters={mdxSource:"<Button variant='secondary' aria-label='Call to Action' onClick={action('Button Click')}>\n\t\t\tCall to Action\n\t\t</Button>"};var Button_stories_buttonWithKnobs=function buttonWithKnobs(){return Object(esm.mdx)(Button_Button,{variant:Object(addon_knobs_dist.select)("Variant",{primary:"primary",secondary:"secondary"},"primary"),"aria-label":"Call to Action",onClick:Object(dist.action)("Button Click")},Object(addon_knobs_dist.text)("Text","Call to Action"))};Button_stories_buttonWithKnobs.story={},Button_stories_buttonWithKnobs.story.name="Button with Knobs",Button_stories_buttonWithKnobs.story.parameters=_objectSpread({mdxSource:"<Button variant={select('Variant', {\n  primary: 'primary',\n  secondary: 'secondary'\n}, 'primary')} aria-label='Call to Action' onClick={action('Button Click')}>\n\t\t{text('Text', 'Call to Action')}\n\t</Button>"},{docs:{disable:!0}}),Button_stories_buttonWithKnobs.story.decorators=[addon_knobs_dist.withKnobs];var componentMeta={title:"Button",includeStories:["primaryButton","secondaryButton","buttonWithKnobs"]},mdxStoryNameToId={"Primary Button":"button--primary-button","Secondary Button":"button--secondary-button","Button with Knobs":"button--button-with-knobs"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={container:function container(_ref2){var context=_ref2.context,children=_ref2.children;return Object(esm.mdx)(blocks.DocsContainer,{context:_objectSpread({},context,{mdxStoryNameToId:mdxStoryNameToId})},children)},page:MDXContent};__webpack_exports__.default=componentMeta},1058:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(1),blocks=__webpack_require__(18),addon_knobs_dist=(__webpack_require__(75),__webpack_require__(47)),prop_types=(__webpack_require__(3),__webpack_require__(33)),prop_types_default=__webpack_require__.n(prop_types),styled_components_browser_esm=__webpack_require__(88),index_esm=__webpack_require__(46);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}var StyledParagraph=Object(styled_components_browser_esm.b)("p")({textDecoration:"none",lineHeight:"1.5"},Object(index_esm.d)({variants:{light:{color:"white"},dark:{color:"black"}}}),index_esm.a,index_esm.b,index_esm.c),Paragraph=function(props){var children=props.children;return react_default.a.createElement(StyledParagraph,_extends({fontFamily:"main",pt:1,pb:1,fontSize:2},props),children)};Paragraph.displayName="Paragraph",Paragraph.propTypes={variant:prop_types_default.a.oneOf(["light","dark"]),children:prop_types_default.a.node.isRequired},Paragraph.defaultProps={variant:"dark"},Paragraph.__docgenInfo={description:"",methods:[],displayName:"Paragraph",props:{variant:{defaultValue:{value:"'dark'",computed:!1},type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1,description:""},children:{type:{name:"node"},required:!0,description:""}}};var Paragraph_Paragraph=Paragraph;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Paragraph/Paragraph.js"]={name:"Paragraph",docgenInfo:Paragraph.__docgenInfo,path:"src/Components/Paragraph/Paragraph.js"});var Link=__webpack_require__(89);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Paragraph_stories_extends(){return(Paragraph_stories_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,"paragraph",(function(){return Paragraph_stories_paragraph})),__webpack_require__.d(__webpack_exports__,"paragraphWithKnobs",(function(){return Paragraph_stories_paragraphWithKnobs}));var layoutProps={},MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(esm.mdx)(MDXLayout,Paragraph_stories_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"Paragraph",component:Paragraph_Paragraph,mdxType:"Meta"}),Object(esm.mdx)("h1",null,"Paragraph"),Object(esm.mdx)("h2",null,"Properties"),Object(esm.mdx)(blocks.Props,{of:Paragraph_Paragraph,mdxType:"Props"}),Object(esm.mdx)("h2",null,"Basic usage"),Object(esm.mdx)(blocks.Preview,{mdxType:"Preview"},Object(esm.mdx)(blocks.Story,{name:"Paragraph",mdxType:"Story"},Object(esm.mdx)(Paragraph_Paragraph,{mdxType:"Paragraph"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",Object(esm.mdx)(Link.a,{href:"#",mdxType:"Link"},"This is a link "),"tempus est. Nulla id luctus quam. In sed porttitor purus. Curabitur fermentum venenatis odio, non finibus augue sagittis in. Morbi laoreet urna vitae ipsum imperdiet, sit amet porttitor massa malesuada. Nullam ultrices malesuada eros quis efficitur. Mauris sit amet justo aliquam, commodo metus eu, luctus neque. Cras auctor interdum nulla, ut congue felis interdum nec. Nunc eu imperdiet ligula. Sed vitae eros leo. Praesent mauris enim, aliquam non arcu eget, scelerisque ultricies ex. Duis vestibulum porta aliquam."))),Object(esm.mdx)(blocks.Story,{name:"Paragraph with Knobs",decorators:[addon_knobs_dist.withKnobs],mdxType:"Story"},Object(esm.mdx)(Paragraph_Paragraph,{variant:Object(addon_knobs_dist.select)("Variant",{light:"light",dark:"dark"},"dark"),mdxType:"Paragraph"},Object(addon_knobs_dist.text)("Text","Some text goes here..."))))}MDXContent.isMDXComponent=!0;var Paragraph_stories_paragraph=function paragraph(){return Object(esm.mdx)(Paragraph_Paragraph,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",Object(esm.mdx)(Link.a,{href:"#"},"This is a link "),"tempus est. Nulla id luctus quam. In sed porttitor purus. Curabitur fermentum venenatis odio, non finibus augue sagittis in. Morbi laoreet urna vitae ipsum imperdiet, sit amet porttitor massa malesuada. Nullam ultrices malesuada eros quis efficitur. Mauris sit amet justo aliquam, commodo metus eu, luctus neque. Cras auctor interdum nulla, ut congue felis interdum nec. Nunc eu imperdiet ligula. Sed vitae eros leo. Praesent mauris enim, aliquam non arcu eget, scelerisque ultricies ex. Duis vestibulum porta aliquam.")};Paragraph_stories_paragraph.story={},Paragraph_stories_paragraph.story.name="Paragraph",Paragraph_stories_paragraph.story.parameters={mdxSource:'<Paragraph>\n\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. \n      <Link href="#">This is a link </Link> \n      tempus est. Nulla id luctus quam. In sed porttitor purus. Curabitur fermentum venenatis odio, non finibus augue sagittis in. Morbi laoreet urna vitae ipsum imperdiet, sit amet porttitor massa malesuada. Nullam ultrices malesuada eros quis efficitur. Mauris sit amet justo aliquam, commodo metus eu, luctus neque. Cras auctor interdum nulla, ut congue felis interdum nec. Nunc eu imperdiet ligula. Sed vitae eros leo. Praesent mauris enim, aliquam non arcu eget, scelerisque ultricies ex. Duis vestibulum porta aliquam. \n\t\t</Paragraph>'};var Paragraph_stories_paragraphWithKnobs=function paragraphWithKnobs(){return Object(esm.mdx)(Paragraph_Paragraph,{variant:Object(addon_knobs_dist.select)("Variant",{light:"light",dark:"dark"},"dark")},Object(addon_knobs_dist.text)("Text","Some text goes here..."))};Paragraph_stories_paragraphWithKnobs.story={},Paragraph_stories_paragraphWithKnobs.story.name="Paragraph with Knobs",Paragraph_stories_paragraphWithKnobs.story.parameters={mdxSource:"<Paragraph variant={select('Variant', {\n  light: 'light',\n  dark: 'dark'\n}, 'dark')}>\n    {text('Text', 'Some text goes here...')}\n  </Paragraph>"},Paragraph_stories_paragraphWithKnobs.story.decorators=[addon_knobs_dist.withKnobs];var componentMeta={title:"Paragraph",includeStories:["paragraph","paragraphWithKnobs"]},mdxStoryNameToId={Paragraph:"paragraph--paragraph","Paragraph with Knobs":"paragraph--paragraph-with-knobs"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={container:function container(_ref2){var context=_ref2.context,children=_ref2.children;return Object(esm.mdx)(blocks.DocsContainer,{context:_objectSpread({},context,{mdxStoryNameToId:mdxStoryNameToId})},children)},page:MDXContent};__webpack_exports__.default=componentMeta},470:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={colors:{black:"hsl(231, 20%, 20%)",white:"hsl(231, 50%, 98%)",blue:"hsl(231, 99%, 60%)",navy:"#004175"},fontSizes:["12px","14px","16px","18px","20px","24px","30px","36px","48px"],space:["6px","12px","16px","20px","30px","48px"],fonts:{main:"Helvetica"}}},472:function(module,exports,__webpack_require__){__webpack_require__(473),__webpack_require__(614),__webpack_require__(615),module.exports=__webpack_require__(1005)},532:function(module,exports){},89:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(2),__webpack_require__(9),__webpack_require__(3),__webpack_require__(5);var react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(33),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(88),styled_system__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(46);function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],0<=excluded.indexOf(key)||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(0<=excluded.indexOf(key))&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var StyledLink=Object(styled_components__WEBPACK_IMPORTED_MODULE_6__.b)("a")({textDecoration:"none"},styled_system__WEBPACK_IMPORTED_MODULE_7__.a,styled_system__WEBPACK_IMPORTED_MODULE_7__.b,styled_system__WEBPACK_IMPORTED_MODULE_7__.c),Link=function(props){var children=props.children,others=_objectWithoutProperties(props,["children"]);return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(StyledLink,_extends({color:"blue",fontFamily:"main"},others),children)};Link.displayName="Link",Link.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node.isRequired},Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{type:{name:"node"},required:!0,description:""}}},__webpack_exports__.a=Link,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Link/Link.js"]={name:"Link",docgenInfo:Link.__docgenInfo,path:"src/Components/Link/Link.js"})}},[[472,1,2]]]);
//# sourceMappingURL=main.8a871ab99ce4e4424fbc.bundle.js.map