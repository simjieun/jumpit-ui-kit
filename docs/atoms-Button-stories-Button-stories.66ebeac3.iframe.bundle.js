"use strict";(self.webpackChunkjumpit_ui_kit=self.webpackChunkjumpit_ui_kit||[]).push([[890],{"./src/components/atoms/Button/stories/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LargePrimary:()=>LargePrimary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});let ButtonVariants=function(ButtonVariants){return ButtonVariants.OUTLINE="OUTLINE",ButtonVariants.LINK="LINK",ButtonVariants}({}),ButtonColorSchemes=function(ButtonColorSchemes){return ButtonColorSchemes.PRIMARY="PRIMARY",ButtonColorSchemes.BLACK="BLACK",ButtonColorSchemes.GRAY="GRAY",ButtonColorSchemes.WHITE="WHITE",ButtonColorSchemes}({}),ButtonSizes=function(ButtonSizes){return ButtonSizes.TINY="TINY",ButtonSizes.SMALL="SMALL",ButtonSizes.MEDIUM="MEDIUM",ButtonSizes.LARGE="LARGE",ButtonSizes.XLAGRE="XLAGRE",ButtonSizes.XXLARGE="XXLARGE",ButtonSizes}({}),ButtonShapes=function(ButtonShapes){return ButtonShapes.SQUARE="SQUARE",ButtonShapes.ROUNDED="ROUNDED",ButtonShapes.CIRCLE="CIRCLE",ButtonShapes}({});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const Button=styled_components_browser_esm.ZP.button`
  ${({size})=>size&&(size=>{switch(size){case ButtonSizes.TINY:return styled_components_browser_esm.iv`
        height: 28px;
        font-weight: 700;
        font-size: 13px;
        line-height: 20px;
      `;case ButtonSizes.SMALL:return styled_components_browser_esm.iv`
        height: 36px;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
      `;case ButtonSizes.MEDIUM:return styled_components_browser_esm.iv`
        height: 40px;
        font-weight: 700;
        font-size: 14px;
        line-height: 22px;
      `;case ButtonSizes.LARGE:return styled_components_browser_esm.iv`
        height: 48px;
        font-weight: 700;
        font-size: 15px;
        line-height: 24px;
      `;case ButtonSizes.XLAGRE:return styled_components_browser_esm.iv`
        height: 56px;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
      `;case ButtonSizes.XXLARGE:return styled_components_browser_esm.iv`
        height: 64px;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
      `;default:return null}})(size)}
  ${({colorScheme})=>(colorScheme=>{switch(colorScheme){case ButtonColorSchemes.PRIMARY:return styled_components_browser_esm.iv`
        background: #00dd6d;
        color: #fff;
        &:hover {
          background: #01c662;
        }
      `;case ButtonColorSchemes.BLACK:return styled_components_browser_esm.iv`
        background: #000;
        color: #fff;
        &:hover {
          background: #333;
        }
      `;case ButtonColorSchemes.GRAY:return styled_components_browser_esm.iv`
        background: #e4e4e4;
        color: #000;
        &:hover {
          background: #d4d4d4;
        }
      `;case ButtonColorSchemes.WHITE:return styled_components_browser_esm.iv`
        background: #fff;
        color: #000;
        &:hover {
          background: #f8f8f8;
        }
      `;default:return null}})(colorScheme)}
  ${({variant})=>variant&&(variant=>{switch(variant){case ButtonVariants.OUTLINE:return styled_components_browser_esm.iv`
        border: 1px solid #d4d4d4;
      `;case ButtonVariants.LINK:return styled_components_browser_esm.iv`
        border: none;
      `;default:return null}})(variant)}
  ${({shape})=>shape&&(shape=>{switch(shape){case ButtonShapes.SQUARE:return styled_components_browser_esm.iv`
        border-radius: 0;
      `;case ButtonShapes.ROUNDED:return styled_components_browser_esm.iv`
        border-radius: 8px;
      `;case ButtonShapes.CIRCLE:return styled_components_browser_esm.iv`
        border-radius: 50%;
      `;default:return null}})(shape)}
`;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_Button=({colorScheme=ButtonColorSchemes.PRIMARY,variant,size,children})=>(0,jsx_runtime.jsx)(Button,{variant,colorScheme,size,children});Button_Button.displayName="Button";try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"TINY"'},{value:'"SMALL"'},{value:'"MEDIUM"'},{value:'"LARGE"'},{value:'"XLAGRE"'},{value:'"XXLARGE"'}]}},colorScheme:{defaultValue:{value:"ButtonColorSchemes.PRIMARY"},description:"",name:"colorScheme",required:!1,type:{name:"enum",value:[{value:'"PRIMARY"'},{value:'"BLACK"'},{value:'"GRAY"'},{value:'"WHITE"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"OUTLINE"'},{value:'"LINK"'}]}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"SQUARE"'},{value:'"ROUNDED"'},{value:'"CIRCLE"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/atoms/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}const Button_stories={title:"@jumpit-ui-kit/Button",component:Button_Button,tags:["autodocs"],argTypes:{size:{control:"size"},colorScheme:{control:"colorScheme"},variant:{control:"variant"},shape:{control:"shape"},disabled:{control:"disabled"}}},LargePrimary={args:{size:ButtonSizes.LARGE,colorScheme:ButtonColorSchemes.PRIMARY,variant:ButtonVariants.OUTLINE,shape:ButtonShapes.SQUARE,children:"Button"}};LargePrimary.parameters={...LargePrimary.parameters,docs:{...LargePrimary.parameters?.docs,source:{originalSource:'{\n  args: {\n    size: ButtonSizes.LARGE,\n    colorScheme: ButtonColorSchemes.PRIMARY,\n    variant: ButtonVariants.OUTLINE,\n    shape: ButtonShapes.SQUARE,\n    children: "Button"\n  }\n}',...LargePrimary.parameters?.docs?.source}}};const __namedExportsOrder=["LargePrimary"]}}]);
//# sourceMappingURL=atoms-Button-stories-Button-stories.66ebeac3.iframe.bundle.js.map