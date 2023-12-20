"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8621],{41544:function(a,b,c){c.d(b,{Z:function(){return g}});let d={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};function e(a,b){let c;return`${"string"==typeof d[a]?d[a]:1===b?d[a].one:d[a].other.replace("{{count}}",b)}`}let f=(a,b)=>{let c=parseInt(Math.abs(new Date(a)-new Date(b))/6e4,10),d=Math.abs((new Date(a)-new Date(b))/1e3),f=Math.abs(a.getMonth()-b.getMonth()+12*(a.getFullYear()-b.getFullYear()));if(c<2)return d<40?e("halfAMinute",null):d<60?e("lessThanXMinutes",1):e("xMinutes",c);if(c<45)return e("xMinutes",c);if(c<90)return e("aboutXHours",1);if(c<1440){let g=Math.round(c/60);return e("aboutXHours",g)}if(c<2520)return e("xDays",1);if(c<43200){let h=Math.round(c/1440);return e("xDays",h)}if(c<86400){let i=Math.round(c/43200);return e("aboutXMonths",i)}if(f<12){let j=Math.round(c/43200);return e("xMonths",j)}let k=f%12,l=Math.floor(f/12);return k<3?e("aboutXYears",l):k<9?e("overXYears",l):e("almostXYears",l+1)};var g=f},71180:function(a,b,c){c.d(b,{jL:function(){return d.Z}}),c(93837);var d=c(41544)},8719:function(a,b){let c=(a=300)=>{let b=-window.scrollY/(a/15),c=setInterval(()=>{0!==window.scrollY?window.scrollBy(0,b):clearInterval(c)},15)};b.Z=c},50616:function(a,b,c){c.d(b,{Z:function(){return p}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(91489),i=c(81572);let j={text:g.iv`
    font-size: ${a=>(0,h.R)("fontSizes.1")(a)}px;
    line-height: ${a=>(0,h.R)("lineHeights.plus")(a)}px;
    color: ${a=>(0,h.uu)("scratched")(a)};

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    ${a=>a.open?g.iv`
            max-height: 54px;
            margin-bottom: 16px;
          `:g.iv`
            max-height: 0px;
          `}
  `,component:g.iv`
    max-height: ${a=>a.open?"100%":"0px"};
  `},k=(0,g.ZP)(i.Z).attrs(a=>Object.assign({cursor:"pointer",outline:"none",py:0,gap:0},a))``,l=(0,g.ZP)(k.Header)`
  cursor: pointer;
`,m=(0,g.ZP)(k.Content)`
  overflow: hidden;
  transition: max-height 0.3s ease-out;

  ${a=>a.isText?j.text:j.component}
`;var n=c(25610);let o=(0,f.forwardRef)((a,b)=>{let{asTitle:c,children:g,textAlign:h,openIcon:i,closeIcon:j,title:o,innerControl:p,open:q,fontSize:r,fontWeight:s,onClick:t}=a,u=(0,e.Z)(a,["asTitle","children","textAlign","openIcon","closeIcon","title","innerControl","open","fontSize","fontWeight","onClick"]),[v,w]=(0,f.useState)(!1),x=()=>{w(!v),t()};return f.createElement(k,(0,d.Z)({ref:b},u),f.createElement(l,{scale:"large",fill:"background.dark",endIcon:q?j:i,onClick:x},f.createElement(n.Z,{as:c,fontSize:r,fontWeight:s},o)),f.createElement(m,{open:p?v:q,isText:"string"==typeof g,textAlign:h},g))});o.defaultProps={asTitle:"h2",children:null,textAlign:"justify",openIcon:"ChevronRight",closeIcon:"ChevronRight",innerControl:!1,open:!1,fontSize:2,fontWeight:"medium"},o.displayName="Accordion";var p=o},59120:function(a,b,c){c.d(b,{W:function(){return f},z:function(){return e}});var d=c(99673);let e=d.iv`
  border: none;
  cursor: pointer;

  background: none;

  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }
`,f=d.ZP.button`
  position: relative;
  width: 100%;
  height: 100%;

  ${e}

  ${({noHover:a})=>!a&&d.iv`
      &:hover:not(:disabled) {
        transform: scale(1.1);
      }
    `}
`},66685:function(a,b,c){c.d(b,{Z:function(){return i}});var d=c(7896),e=c(31461),f=c(2784),g=c(59120);function h(a){let{children:b}=a,c=(0,e.Z)(a,["children"]);return f.createElement(g.W,(0,d.Z)({"data-testid":"base-button",role:"button"},c),b)}h.defaultProps={noHover:!1,onClick:()=>{}};var i=h},27439:function(a,b,c){c.d(b,{ZP:function(){return x}});var d=c(7896),e=c(31461),f=c(2784),g=c(13980),h=c(99673),i=c(91489),j=c(68054),k=c(63825),l=c(25610),m=c(19527),n=c(7029);let o=a=>h.iv`
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${a};
`,p=h.ZP.a.withConfig({shouldForwardProp:(a,b)=>!!(a.includes("ads-")||a.includes("redirect"))||b(a)}).attrs(a=>Object.assign({},a))({transition:"box-shadow ease 0.4s",textDecoration:"none",cursor:"pointer",display:"grid",overflow:"hidden",gridTemplateAreas:'"image" "body"',justifyContent:"space-between",borderRadius:(0,i.R)("radii.default")},a=>{let{enableHover:b}=a,c=(0,e.Z)(a,["enableHover"]);return b&&{":hover":{boxShadow:(0,i.R)("boxShadows.4")(c)}}},(0,j.qC)(j.Oq,i.$_,j.Dh,j.eC,j.bK,j.fU),i.Tf),q=(0,h.ZP)(n.Z).attrs(a=>Object.assign({imageWidth:"100%",imageHeight:"100%",objectFit:"cover"},a))`
  grid-area: image;
`,r=(0,h.ZP)(m.Z).attrs(a=>Object.assign({color:"inherit",background:"inherit",padding:"16px 14px",flexDirection:"column"},a))`
  grid-area: body;
`,s=(0,h.ZP)(l.Z).attrs(a=>Object.assign({fontSize:6,color:"inherit",lineHeight:"1.2em"},a))`
  ${({truncate:a,lines:b=2})=>a&&o(b)}
`,t=(0,h.ZP)(k.Z).attrs(a=>Object.assign({forwardedAs:"small",color:"inherit",display:"block",fontSize:0,marginTop:2},a))`
  ${({truncate:a,lines:b=2})=>a&&o(b)}
`,u=(0,h.ZP)(k.Z).attrs(a=>Object.assign({fontSize:2,fontWeight:"light",lineHeight:"1.5em",color:"inherit",marginTop:"3"},a))`
  ${({truncate:a,lines:b=4})=>a&&o(b)}
`,v=f.forwardRef((a,b)=>{let{children:c}=a,g=(0,e.Z)(a,["children"]);return f.createElement(p,(0,d.Z)({ref:b},g),c)});v.displayName="Card",v.Image=q,v.Title=s,v.Subtitle=t,v.Text=u,v.Body=r;let w={truncate:g.bool,lines:g.number};v.Title.propTypes=Object.assign({},w),v.Subtitle.propTypes=Object.assign({},w),v.Text.propTypes=Object.assign({},w);var x=v},18281:function(a,b,c){c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(91489),i=c(19527);let j=(0,g.ZP)(i.Z).attrs(a=>{let{color:b,disabled:c}=a,d=(0,e.Z)(a,["color","disabled"]);return Object.assign({alignItems:"center",color:c?"text.gray":b},d)})``,k=g.ZP.input.attrs(()=>({type:"checkbox"}))`
  appearance: none;
  background: transparent;
  width: 20px;
  height: 20px;
  outline: none;
  cursor: pointer;

  &:not(:checked) {
    border-radius: ${(0,h.R)("radii.medium")};
    border: ${(0,h.R)("borders.1")};
  }

  &:checked {
    &:after {
      content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzdmdJZCIgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0ic2MtYlpReW5NIGpjVFFtYyI+PHBhdGggZD0iTTkgMTYuMkw0LjggMTJsLTEuNCAxLjRMOSAxOSAyMSA3bC0xLjQtMS40TDkgMTYuMnoiLz48L3N2Zz4=');
      position: absolute;
      width: 20px;
      height: 20px;
      background: ${(0,h.dF)("primary")};
      border-radius: ${(0,h.R)("radii.medium")};
      box-sizing: border-box;
    }

    &:disabled {
      &:after {
        background: ${(0,h.dF)("dark")};
      }
    }
  }
`,l=(0,f.forwardRef)((a,b)=>{let{children:c,checked:g,defaultChecked:h,disabled:i,value:l,onChange:m,label:n,name:o,as:p}=a,q=(0,e.Z)(a,["children","checked","defaultChecked","disabled","value","onChange","label","name","as"]),r=f.createElement(k,{onChange:a=>m(a,l),checked:g,disabled:i,defaultChecked:h,ref:b,value:l,name:o,"data-testid":"checkbox-item"});return c||n?f.createElement(j,(0,d.Z)({forwardedAs:p,disabled:i},q,{"data-testid":"checkbox"}),r,n||c):r});l.defaultProps={children:null,disabled:!1,color:"text.base",as:"label",gap:2,onChange:()=>{}},l.displayName="Checkbox";var m=l},17781:function(a,b,c){c.d(b,{Z:function(){return u}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(68054),i=c(91489);let j="primary",k={light:i.rS.palette.text.white,dark:i.rS.palette.text.base},l=`
  -webkit-transition: all 500ms ease;
  transition: all 500ms ease;
`,m=`
  ${l}
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`,n={small:"28px",medium:"38px"},o=({props:a,variation:b,checked:c=!1})=>{let{bg:d,type:e,scales:f=k}=a,h={colorfulTransition:g.iv`
      ${l}
      background-color: ${(0,i.dF)(d||j)(a)};
      color: ${(0,i.jk)(d||j,f)(a)};
      > svg {
        ${l}
        fill: ${(0,i.jk)(d||j,f)(a)};
      }
    `,colorful:g.iv`
      ${l}
      background-color: ${(0,i.dF)(d||j)(a)};
      color: ${(0,i.jk)(d||j,f)(a)};
      > svg {
        ${l}
        fill: ${(0,i.jk)(d||j,f)(a)};
      }
    `,default:g.iv`
      background-color: ${(0,i.dF)("white")(a)};
      color: ${(0,i.jk)("white",f)(a)};
    `},m=d&&(c||!e.includes("radio","checkbox"))?"colorful":"default";return h[b||m]},p=g.ZP.div`
  ${h.e6}
  ${h.bK}
  text-decoration: none;
`,q=g.ZP.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({hasBorder:a})=>a?"1px solid":"none"};
  scroll-snap-align: center;
  border-radius: ${a=>(0,i.R)("space.4")(a)}px;

  min-width: 144px;
  height: ${a=>n[null==a?void 0:a.size]};

  ${a=>o({props:a})};

  ${({autoSize:a})=>a?g.iv`
          justify-content: space-around;
          width: auto;
          min-width: auto;
          height: auto;
          padding: ${(0,i.R)("space.2")}px ${(0,i.R)("space.2")}px;
        `:g.iv`
          max-width: 144px;
        `}

  ${m}
  ${l}
  ${h.E0}
  ${h.o3}
  ${h.JB}
  ${h.Ue}
  ${h.Cc}
`,r=g.ZP.p`
  max-width: 60%;
  font-size: inherit;
  font-weight: inherit;
  line-height: ${a=>(0,i.R)("lineHeights.standard")(a)}px;
  font-stretch: normal;
  letter-spacing: normal;

  ${a=>{let{color:b}=a,c=(0,e.Z)(a,["color"]);return b&&g.iv`
      color: ${(0,i.uu)(b)(c)};
    `}}

  ${({autoSize:a})=>a&&g.iv`
      max-width: 100%;
    `};
`,s=g.ZP.input`
  ${m}
  display: none;

  &:checked + ${q} {
    ${a=>o({props:a,variation:"colorfulTransition",checked:!0})};
  }
`,t=a=>{let{as:b,checked:c,clickable:g,startIcon:h,children:i,autoSize:j,endIcon:k,value:l,color:m,gridGap:n,size:o,name:t,type:u,id:v,bg:w,scales:x,onChange:y,onClick:z,hasBorder:A}=a,B=(0,e.Z)(a,["as","checked","clickable","startIcon","children","autoSize","endIcon","value","color","gridGap","size","name","type","id","bg","scales","onChange","onClick","hasBorder"]),C=a=>{var b,c;y({value:null==a?void 0:null==(b=a.target)?void 0:b.value,selected:null==a?void 0:null==(c=a.target)?void 0:c.checked})};return f.createElement(p,(0,d.Z)({},B,{as:g?b||"a":b||"div","data-testid":"chip-container"}),u&&f.createElement(s,{"data-testid":"chip-input",checked:c,onChange:C,value:l,type:u,name:t,bg:w,scales:x,id:v}),f.createElement(q,(0,d.Z)({"data-testid":"chip-label",onClick:z,gridGap:n,clickable:g,startIcon:h,autoSize:j,endIcon:k,size:o,htmlFor:v,bg:w,type:u,hasBorder:A,scales:x},B,g&&{onChange:y}),h,f.createElement(r,{autoSize:j,clickable:g,color:m,bg:w},i),k))};t.defaultProps={onChange:()=>{},onClick:()=>{},type:"",clickable:!1,startIcon:null,size:"medium",children:null,gridGap:2,bg:"",fontSize:0,fontWeight:"regular",hasBorder:!1,endIcon:null,value:"",color:"",name:"",id:""};var u=t},88699:function(a,b,c){c.d(b,{Z:function(){return k}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(8341);let i=(0,g.ZP)(h.Z)`
  display: grid;
  ${({trigger:a,collapsedIn:b})=>a&&g.iv`
      > *:nth-child(n + ${b}) {
        display: none;
        overflow: hidden;
        max-height: 0;
      }
    `};
`,j=a=>{let{children:b,trigger:c,collapsedIn:g}=a,h=(0,e.Z)(a,["children","trigger","collapsedIn"]);return f.createElement(i,(0,d.Z)({trigger:c,collapsedIn:g+1,"data-testid":"collapse"},h),f.Children.toArray(b).map(a=>f.isValidElement(a)&&f.cloneElement(a)))};j.defaultProps={trigger:!1,children:null,collapsedIn:0},j.displayName="Collapse";var k=j},58331:function(a,b,c){c.d(b,{Z:function(){return k}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(19527),i=c(63825);let j={like:{icon:"Like"},dislike:{icon:"Dislike"}};var k=function(a){let{type:b,label:c,onClick:k,color:l}=a,m=(0,e.Z)(a,["type","label","onClick","color"]),{icon:n}=j[b];return f.createElement(h.Z,(0,d.Z)({alignItems:"center",onClick:k},m),f.createElement(g.JO$,{name:n,color:l,cursor:"pointer"}),f.createElement(i.Z,{ml:"6px"},c))}},97600:function(a,b,c){c.d(b,{Z:function(){return i}});var d=c(2784),e=c(99673),f=c(91489);let g=e.ZP.hr`
  height: ${({size:a})=>`${a}px`};
  width: 100%;
  border: none;
  ${f.$_}
`,h=a=>d.createElement(g,a);h.defaultProps={size:1,bg:"border.light"};var i=h},39471:function(a,b,c){c.d(b,{Z:function(){return r}});var d=c(2784),e=c(99673),f=c(91489),g=c(7029),h=c(84546),i=c(19527),j=c(63825);let k=(0,e.ZP)(h.Z)`
  border-radius: 50%;
  width: ${a=>(0,f.R)("sizes.hotLinks.width")(a)};
  height: ${a=>(0,f.R)("sizes.hotLinks.height")(a)};
  margin-bottom: 8px;
`,l=e.ZP.a`
  display: block;
  text-decoration: none;
  width: 100%;
`,m=(0,e.ZP)(g.Z)``,n=e.iv`
  flex-flow: wrap;
  background: ${a=>(0,f.R)("palette.background.lighter")(a)};
  padding: 0 8px;
  border-left: 4px solid ${({borderColor:a})=>a||"transparent"};
  width: 100%;
  border-radius: 4px;
  box-shadow: ${a=>(0,f.R)("boxShadows.4")(a)};

  p {
    font-size: ${a=>(0,f.R)("fontSizes.2")(a)}px;
    color: ${a=>(0,f.uu)("scratched")(a)};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
    text-align: left;
  }

  ${k} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: ${a=>(0,f.R)("borders.0")(a)};
    margin: 4px 7px 4px 0;

    ${m} {
      width: 100%;
      border-radius: 50%;
    }
  }
`,o=(0,e.ZP)(i.Z)`
  flex-direction: column;
  align-items: center;

  ${({directionType:a})=>"column"===a&&n}
`,p=(0,e.ZP)(j.Z).attrs(()=>({color:"base",fontSize:[0,1,2]}))`
  text-align: center;
  line-height: ${a=>(0,f.R)("lineHeights.plus")(a)}px;
`,q=({item:a,onClick:b,directionType:c,imgLazyLoading:e})=>{let{link:f,image:g,text:h,borderColor:i}=a;return d.createElement(l,{href:f,onClick:c=>b(c,a),"data-testid":"hotlink-link",borderColor:i},d.createElement(o,{directionType:c,borderColor:i,"data-testid":`title-${h}`},d.createElement(k,null,d.createElement(m,{alt:h,src:g,lazy:e})),d.createElement(p,null,h)))};q.defaultProps={item:{},onClick:()=>{},directionType:"row",imgLazyLoading:!0};var r=q},29869:function(a,b,c){c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(91489);let i=g.iv`
  border: 1px solid;
  border-color: ${a=>{let{hasError:b}=a,c=(0,e.Z)(a,["hasError"]);return(0,h.ow)(b?"error.base":"border.light")(c)}};
  border-radius: 4px;
  width: 100%;

  padding: ${(0,h.R)("space.2")}px;
  line-height: ${(0,h.R)("lineHeights.input")};
  font-size: ${(0,h.R)("fontSizes.1")}px;

  ::placeholder {
    color: ${(0,h.uu)("light")};
  }
`,j=g.ZP.input`
  ${i}
`,k=g.ZP.textarea.attrs(a=>({rows:a.rows||"5",cols:a.cols||"40"}))`
  ${i}
  resize: none;
  font-family: ${(0,h.R)("fontFamily")};
`,l=(0,f.forwardRef)((a,b)=>{let{children:c,value:g,onChange:h}=a,i=(0,e.Z)(a,["children","value","onChange"]),l=i.multiline?k:j;return f.createElement(l,(0,d.Z)({ref:b},i,{value:g,onChange:a=>h(a,g)}),c)});l.defaultProps={multiline:!1,hasError:!1,onChange:()=>{}},l.displayName="Input";var m=l},81572:function(a,b,c){c.d(b,{Z:function(){return w}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(91489),i=c(63825),j=c(19527),k=c(84546);let l=(0,g.ZP)(j.Z).attrs(a=>{let{justifyContent:b,centered:c}=a,d=(0,e.Z)(a,["justifyContent","centered"]);return Object.assign({width:"100%",alignItems:"center",justifyContent:c?"center":b,flexWrap:"wrap",gap:2,px:2},!(null!=d&&d.scale)&&{py:2},d)})({textDecoration:"none"},h.bU,h.bA),m=(0,g.ZP)(i.Z).attrs(a=>{let{textAlign:b,centered:c,justifyContent:d}=a,f=(0,e.Z)(a,["textAlign","centered","justifyContent"]);return Object.assign({forwardedAs:"span",fontSize:1,flex:c||"space-between"!==d?"unset":1,color:"inherit",position:"center"===b?"absolute":"initial",transform:"center"===b?"translateX(-50%)":"initial",left:"center"===b?"50%":"initial"},f)})``,n=(0,g.ZP)(k.Z).attrs(a=>Object.assign({fontSize:1,color:"text.scratched",fontWeight:"regular",lineHeight:"display"},a))({flexBasis:"100%",textAlign:"justify",textAlignLast:"left"});var o=c(34490);let p=a=>{let{children:b}=a,c=(0,e.Z)(a,["children"]);return f.createElement(i.Z,(0,d.Z)({},c,{"data-testid":"item-description"}),b)};p.defaultProps={color:"inherit",fontWeight:"normal",display:"block",as:"small",fontSize:0,mt:1},p.displayName="ItemDescription";var q=p;let r=a=>{let{children:b}=a,c=(0,e.Z)(a,["children"]);return f.createElement(n,(0,d.Z)({},c,{"data-testid":"item-content"}),b)};r.displayName="ItemContent";var s=r;let t=a=>{let{centered:b,description:c,content:g,endIcon:h,fill:j,fontSize:k,hint:n,onClick:p,startIcon:r,textAlign:t,title:u,ellipsis:v,as:w,titleAs:x,justifyContent:y}=a,z=(0,e.Z)(a,["centered","description","content","endIcon","fill","fontSize","hint","onClick","startIcon","textAlign","title","ellipsis","as","titleAs","justifyContent"]),A=f.Children.toArray(null==z?void 0:z.children),B=a=>a&&"string"==typeof a?f.createElement(o.JO$,{name:a,fill:j,"data-testid":"item-icon"}):a,C=()=>c&&"string"==typeof c?f.createElement(q,null,c):c;return f.createElement(l,(0,d.Z)({forwardedAs:w,centered:b,textAlign:t,onClick:p,"data-testid":"item",justifyContent:y},z),B(r),(u&&"string"==typeof u?f.createElement(m,{fontSize:k,textAlign:t,centered:b,"data-testid":"item-title",forwardedAs:x},u,C()):u)||(()=>{let a=C(),c=v?{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",width:"100%"}:null;return a?f.createElement(f.Fragment,null,f.createElement(m,{fontSize:k,textAlign:t,centered:b,style:c,"data-testid":"item-title",forwardedAs:x},A,a)):f.createElement(f.Fragment,null,f.createElement(m,{fontSize:k,textAlign:t,centered:b,style:c,"data-testid":"item-title",forwardedAs:x,justifyContent:y},null==A?void 0:A.filter(({type:{displayName:a}={}})=>"ItemContent"!==a)))})(),(n&&"string"==typeof n?f.createElement(i.Z,{as:"label",fontSize:1,fontWeight:"normal","data-testid":"item-hint"},n):n)||B(h),(()=>{let a=null==A?void 0:A.find(({type:{displayName:a}={}})=>"ItemContent"===a);return a||(g?f.createElement(s,null,g):null)})())};t.defaultProps={title:"",children:null,justifyContent:"space-between",startIcon:null,endIcon:null,hint:null,centered:!1,fill:"currentColor",ellipsis:!1};var u=t;let v=(0,f.forwardRef)((a,b)=>{let{as:c,onClick:g}=a,h=(0,e.Z)(a,["as","onClick"]),i=f.Children.toArray(null==h?void 0:h.children),j=null==i?void 0:i.find(({type:{displayName:a}={}})=>null==a?void 0:a.includes("ItemHeader"));return j?f.createElement(l,(0,d.Z)({ref:b,forwardedAs:c,onClick:g,"data-testid":"item-container"},h),i):f.createElement(u,(0,d.Z)({ref:b,as:c,onClick:g},h))});v.defaultProps={title:"",children:null},v.Content=s,v.Description=q,v.Header=a=>f.createElement(u,(0,d.Z)({px:0,py:0},a)),v.Header.displayName="ItemHeader",v.displayName="Item";var w=v},66228:function(a,b,c){c.d(b,{ij:function(){return d.ij},ZP:function(){return g},I1:function(){return d.I1},Iy:function(){return d.Iy}});var d=c(93088),e=c(2784);let f=({type:a,schema:b})=>{let c=Array.isArray(b)?{"@context":"https://schema.org/","@graph":b}:Object.assign({"@context":"https://schema.org/","@type":a},b);return e.createElement("script",{type:"application/ld+json","data-testid":"jsonld-script",dangerouslySetInnerHTML:{__html:JSON.stringify(c)}})};var g=f},93088:function(a,b,c){c.d(b,{H9:function(){return e},ij:function(){return h},I1:function(){return j},NI:function(){return l},Iy:function(){return v},"$5":function(){return x}});let d=(a,b)=>{var c,d,e,f,g,h,i;return a&&0!==Object.keys(a).length&&(null==a?void 0:a.count)!==0||b&&null!=b&&b.general&&0!==Object.keys(null==b?void 0:b.general).length&&(null==b?void 0:null==(c=b.general)?void 0:c.reviewCount)!==0?{"@type":"AggregateRating",ratingValue:(null==a?void 0:a.count)>0?null==a?void 0:null==(d=a.score)?void 0:d.toString():null==b?void 0:null==(e=b.general)?void 0:null==(f=e.rating)?void 0:f.toFixed(0),reviewCount:(null==a?void 0:a.count)>0?null==a?void 0:null==(g=a.count)?void 0:g.toString():null==b?void 0:null==(h=b.general)?void 0:null==(i=h.reviewCount)?void 0:i.toString()}:null};var e=d,f=c(12468);let g=(a,b=f.RW)=>{if(!a||0===a.length)return{};let c=[{name:"magalu.com",position:1,url:""}],d=[...c,...a],e=d.map(a=>({"@type":"ListItem",position:a.position,item:{"@id":`${b}${null==a?void 0:a.url}`,name:a.name}}));return{itemListElement:e}};var h=g;let i=a=>{if(!a||0===Object.keys(a).length||0===a.count)return null;let b=a.filter(a=>a.question&&a.answer).map(a=>({"@type":"Question",name:a.question,acceptedAnswer:{"@type":"Answer",text:a.answer}}));return{mainEntity:b}};var j=i;let k=(a,b)=>{var c,d,e,f;return a&&0!==Object.keys(a).length&&b&&a.price&&(null!=a&&null!=(c=a.price)&&c.bestPrice||null!=a&&null!=(d=a.price)&&d.price)?{"@type":"Offer",price:(null==a?void 0:null==(e=a.price)?void 0:e.bestPrice)||(null==a?void 0:null==(f=a.price)?void 0:f.price),priceCurrency:"BRL",availability:"http://schema.org/InStock",url:(null==a?void 0:a.offer)||b}:null};var l=k;let m=a=>{let b=new Date(a);return a?`${b.getFullYear()}-${b.getMonth()+1}-${b.getDate()}`:""};var n=m;let o=(a,b,c)=>{var d,g;let h=`${c}${null==a?void 0:a.url}`,i=e(a.rating,b),j=l(a,h);return Object.assign({"@context":"https://schema.org","@type":"Product"},i?{aggregateRating:i}:{},{name:a.title,image:null==(d=a.image)?void 0:d.replace("{w}",f.w.width).replace("{h}",f.w.height),brand:null==(g=a.brand)?void 0:g.label,sku:a.id,description:a.description||a.title},j?{offers:j}:{})};var p=o;let q=(a="",b="")=>a?`${a} > ${b}`:"";var r=q;let s=(a,b)=>{var c,d,e,f,g;let h=null==b?void 0:null==(c=b.userReviews)?void 0:null==(d=c.items)?void 0:d.map(a=>x(a)).filter(a=>a),i=null==a?void 0:null==(e=a.attributes)?void 0:e.find(a=>"color"===a.type);return Object.assign({description:a.description||a.title,category:r(null==a?void 0:null==(f=a.category)?void 0:f.name,null==a?void 0:null==(g=a.subcategory)?void 0:g.name),color:null==i?void 0:i.current,itemCondition:"https://schema.org/NewCondition",sku:null==a?void 0:a.id},h?{review:h}:{})};var t=s;let u=({product:a={},productRating:b={},isList:c=!1},d=f.RW)=>{if(!a||0===Object.keys(a).length)return{};let e=p(a,b,d),g=c?{}:t(a,b);return Object.assign({},e,g)};var v=u;let w=a=>{var b;return a&&0!==Object.keys(a).length&&a.userData&&null!=(b=a.userData)&&b.name?{"@type":"Review",author:{"@type":"Person",name:a.userData.name},datePublished:n(a.submissionDate),reviewBody:a.description,name:a.title,reviewRating:{"@type":"Rating",bestRating:"5",ratingValue:a.rating.toString(),worstRating:"1"}}:null};var x=w},10200:function(a,b,c){c.d(b,{Z:function(){return m}});var d=c(7896),e=c(31461),f=c(2784);c(21302);var g=c(99673),h=c(68054),i=c(91489);let j={a:g.iv`
    text-decoration: none;
  `,button:g.iv`
    font-size: inherit;
    font-family: inherit;
    border: 0;
    margin: 0;
    overflow: visible;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  `},k=g.ZP.a.attrs(a=>{let{color:b}=a,c=(0,e.Z)(a,["color"]);return Object.assign({color:b||"text.base",fontSize:1},c)})`
  cursor: pointer;

  ${({as:a})=>j[a]}
  ${({textAlign:a})=>a?g.iv`
          display: block;
        `:g.iv`
          ${{display:"inline-flex"}}
          ${h.GQ}
          align-items: center;
        `}
  ${({underline:a})=>a&&g.iv`
      text-decoration: underline;
    `}
  ${({hover:a})=>a&&g.iv`
      &:hover {
        text-decoration: ${a=>null!=a&&a.underlineOnHover?"underline":!(null!=a&&a.underline)&&"none"};
        color: ${a=>a.colorOnHover||(0,i.ow)(a.color)(a)||a.color};
      }
    `}
  ${h.Oq}
  ${h.Cg}
  ${h.bK}
  ${i.$_}
  ${h.Dh}
  ${h.yd}
  ${h.cp}
  ${h.eC}
  ${i.SG}
`;function l(a){let{children:b}=a,c=(0,e.Z)(a,["children"]),g=null!=c&&c.href?"a":"button";return f.createElement(k,(0,d.Z)({"data-testid":"link",as:g},c),b)}l.defaultProps={hover:!0,underline:!1,underlineOnHover:!0,bg:"transparent"},l.displayName="Link";var m=l},54934:function(a,b,c){c.d(b,{Z:function(){return q}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(99673),i=c(91489),j=c(84546),k=c(63825);let l={primary:h.iv`
    background-color: ${a=>(0,i.dF)("primary")(a)};
    color: ${a=>(0,i.uu)("lightest")(a)};
    font-size: ${a=>(0,i.R)("fontSizes.2")(a)}px;
  `,secondary:h.iv`
    color: ${a=>(0,i.uu)("light")(a)};
  `},m=h.ZP.div`
  ${({noBorder:a})=>!a&&h.iv`
      border-bottom: 1px solid #ededed;
    `}
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 4px 12px 12px;
  ${a=>l[a.variation]}
`,n=(0,h.ZP)(j.Z)`
  flex: 1;
`,o=(0,h.ZP)(k.Z).attrs(({isLink:a,chevronRight:b})=>({fontSize:1,fontWeight:a||!b?"regular":"medium"}))`
  ${a=>l[a.variation]}
  line-height: ${a=>(0,i.R)("lineHeights.tall")(a)}px;
  padding-left: ${a=>a.icon?"8px":"0px"};
`;function p(a){let{icon:b,text:c,testId:h,onClick:i}=a,j=(0,e.Z)(a,["icon","text","testId","onClick"]),{chevronRight:k,href:l,variation:p}=j,q="primary"===p?"#FFF":"#999",r=Array.isArray(c)?c[0]:c||"",s=Array.isArray(c)?c.slice(1):[];return f.createElement(m,(0,d.Z)({"data-testid":h,as:l?"a":"div",href:l,onClick:i},j),b&&f.createElement(g.JO$,{name:b,color:b.startsWith("Category")?"#0086FF":q}),f.createElement(n,null,f.createElement(o,(0,d.Z)({isLink:!!l,icon:b},j),r),s.map(a=>f.createElement(o,{key:a,isLink:!!l,icon:b,variation:"secondary"},a))),k&&f.createElement(g.JO$,{name:"ChevronRight",color:q}))}p.defaultProps={chevronRight:!0,href:null,icon:null,testId:"",variation:"",onClick:()=>{}};var q=p},97851:function(a,b,c){c.d(b,{Z:function(){return k}});var d=c(2784),e=c(99673),f=c(91489);let g=e.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,h=e.ZP.button`
  position: relative;
  width: 100%;
  height: 100%;

  max-width: ${({maxWidth:a})=>`${a}px`};
  max-height: ${({maxHeight:a})=>`${a}px`};
  border: none;
  cursor: pointer;

  background: none;

  transition: all 0.2s ease-in-out;

  &:disabled {
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    transform: scale(1.1);
  }
`,i=e.ZP.div`
  ${f.$_}

  position: absolute;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 28px;
  width: 28px;
  border-radius: 50%;
  border: 3px solid ${({borderColor:a})=>a};

  font-size: 12px;
  font-weight: bold;
`,j=({children:a,amount:b=0,nullable:c=!0,truncateAmountThreshold:e,maxWidth:f=60,maxHeight:j=46,backgroundColor:k="#ccc",counterColor:l="#fff",fontColor:m="#000",onClick:n})=>d.createElement(g,null,d.createElement(h,{maxWidth:f,maxHeight:j,onClick:n},a,(b||c)&&d.createElement(i,{"data-testid":"numbered-btn-counter",bg:l,borderColor:k,color:m},e&&b>e?`${e}+`:b)));var k=j},26527:function(a,b,c){c.d(b,{Z:function(){return j}});var d=c(2784),e=c(34490),f=c(99673),g=c(91489);let h=f.ZP.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  backdrop-filter: blur(4px);
  z-index: ${a=>(0,g.R)("zIndices.4")(a)};

  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${(0,g.ow)("background.lighter")};
    opacity: 0.7;
    position: absolute;
    z-index: -1;
  }
`,i=()=>d.createElement(h,null,d.createElement(e.JO$,{name:"AnimatedLoadingColorful2",width:50,height:50}));var j=i},7121:function(a,b,c){c.d(b,{Z:function(){return n}});var d=c(7896),e=c(31461),f=c(2784),g=c(35741),h=c(99673),i=c(68054),j=c(91489),k=c(64586);let l=h.ZP.div.attrs(a=>Object.assign({},a))`
  border-radius: ${a=>(0,j.R)("radii.default")(a)};
  background-color: ${a=>a.backgroundColor||"white"};
  animation: ${k.Ji} 0.2s ease-in;

  #arrow {
    position: absolute;
    width: 16px;
    height: 16px;
    &:after {
      content: ' ';
      background-color: ${a=>a.backgroundColor||"white"};
      position: absolute;
      width: 16px;
      height: 16px;
      transform: rotate(45deg);
      ${j.$_}
    }
  }

  &[data-popper-placement^='bottom'] > #arrow {
    top: -8px;
    :after {
      left: 0;
    }
  }

  &[data-popper-placement^='top'] > #arrow {
    bottom: -8px;
    :after {
      left: 0;
    }
  }

  &[data-popper-placement^='right'] > #arrow {
    left: -6px;
  }

  &[data-popper-placement^='left'] > #arrow {
    right: -6px;
  }

  ${i.Dh}
  ${i.cp}
  ${j.$_}
`;var m=c(84546),n=function(a){let{backgroundColor:b,children:c,parentRef:h,placement:i="bottom",visible:j}=a,k=(0,e.Z)(a,["backgroundColor","children","parentRef","placement","visible"]),[n,o]=(0,f.useState)(null),p=(0,f.useRef)(null),{styles:q,attributes:r}=(0,g.D)(h.current,p.current,{placement:i,modifiers:[{name:"arrow",options:{element:n}},{name:"offset",options:{offset:[0,10]}},{name:"flip",options:{flipVariations:!1}}]});return f.createElement(f.Fragment,null,j?f.createElement(l,(0,d.Z)({"data-testid":"popper-container",ref:p,style:q.popper},r.popper,{backgroundColor:b},k),f.createElement("div",{ref:o,style:q.arrow,id:"arrow"}),f.createElement(m.Z,{"data-testid":"popper-children-container",m:1},c)):null)}},73002:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(31461),e=c(2784),f=c(34490),g=c(99673),h=c(91489),i=c(84546);let j=(0,g.ZP)(i.Z)`
  display: flex;
  align-items: center;
  cursor: pointer;

  label {
    margin-right: 10px;
    font-weight: 700;

    ${({desktopMode:a})=>a&&g.iv`
        font-size: ${a=>(0,h.R)("fontSizes.0")(a)}px;
      `};
  }

  select {
    appearance: none;
    display: block;
    background: transparent;
    cursor: pointer;
    border: 1px solid ${a=>(0,h.kJ)("base")(a)};

    ${({desktopMode:a})=>a?g.iv`
            font-size: ${a=>(0,h.R)("fontSizes.0")(a)}px;
            padding: 8px 32px 8px 12px;
          `:g.iv`
            width: 100%;
            padding: 16px 32px 16px 12px;
            border-radius: 4px;
          `};

    &:focus {
      outline: none;
      background: ${a=>(0,h.R)("baseColors.wildsand.base")(a)};
    }
    ::-ms-expand {
      display: none;
    }
  }

  svg {
    outline: none;
    pointer-events: none;

    flex: 0 0 auto;
    margin-left: -32px;
  }
`;function k(a){let{id:b,textLabel:c,options:g,onChange:h}=a,i=(0,d.Z)(a,["id","textLabel","options","onChange"]),k=g.find(a=>a.selected);return e.createElement(j,i,c&&e.createElement("label",{htmlFor:`select-${b}`,"data-testid":"select-label"},c),e.createElement("select",{id:`select-${b}`,onChange:a=>h(a.target.value),value:null==k?void 0:k.value,"data-testid":`select-${b}`},null==g?void 0:g.map(a=>e.createElement("option",{key:a.value,selected:a.selected,value:a.value,"data-testid":"select-option"},a.label))),e.createElement(f._ME,{width:20,height:20}))}k.defaultProps={desktopMode:!1,onChange:()=>{},options:[]};var l=k},26780:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(19527),i=c(63825);let j=[1,2,3,4,5],k=(0,f.forwardRef)((a,b)=>{let{onChange:c,emptyOutline:k,showLabel:l,labelOptions:m,value:n}=a,o=(0,e.Z)(a,["onChange","emptyOutline","showLabel","labelOptions","value"]),[p,q]=(0,f.useState)(n),r=k?"StarOutline":"Star",s=m[p]||"";(0,f.useEffect)(()=>(q(n),()=>q(0)),[n]);let t=a=>p>=a||k?"stars.base":"stars.disabled";return f.createElement(h.Z,{justifyContent:"space-between",alignItems:"center",width:1},f.createElement(h.Z,{ref:b,"data-testid":"select-rating",justifyContent:"start",onMouseLeave:()=>q(n)},j.map(a=>f.createElement(g.JO$,(0,d.Z)({key:a,name:p>=a?"Star":r,cursor:"pointer",color:t(a),onMouseOver:()=>q(a),onClick:()=>c({target:{value:a}})},o)))),l&&f.createElement(i.Z,{mr:3,fontSize:[1,2],fontWeight:"medium"},s))});k.defaultProps={emptyOutline:!1,showLabel:!1,value:"",labelOptions:{1:"P\xe9ssimo",2:"Ruim",3:"Regular",4:"Bom",5:"Excelente"}},k.displayName="SelectRating";var l=k},47560:function(a,b,c){c.d(b,{UQ:function(){return d.Z},Yd:function(){return f.Z},xu:function(){return e.Z},gN:function(){return w},zx:function(){return x.Z},XZ:function(){return y.Z},Af:function(){return z.Z},Vq:function(){return A.Z},Lt:function(){return Y},cx:function(){return aa},kC:function(){return m.Z},rj:function(){return ab.Z},X6:function(){return ac.Z},bo:function(){return V.Z},Ee:function(){return as.Z},II:function(){return ad.Z},ck:function(){return ae.Z},uk:function(){return an},rU:function(){return C.Z},TR:function(){return ao.Z},fG:function(){return aq.Z},SX:function(){return ar.Z},rD:function(){return aR.Z},U2:function(){return aQ},Ph:function(){return ap.Z},D_:function(){return at.Z},OK:function(){return av},q5:function(){return aC},td:function(){return aG},x4:function(){return aI},xv:function(){return aJ.Z}});var d=c(50616),e=c(84546),f=c(66685),g=c(7896),h=c(31461),i=c(2784),j=c(99673),k=c(91489),l=c(34490),m=c(19527);let n=(0,j.ZP)(m.Z)`
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: ${a=>(0,k.R)("space.2")(a)}px 0;
`,o=j.ZP.span`
  font-size: ${a=>(0,k.R)("fontSizes.0")(a)}px;
  color: ${a=>(0,k.uu)("light")(a)};
`,p=j.ZP.span`
  font-size: ${a=>(0,k.R)("fontSizes.2")(a)}px;
  color: ${a=>(0,k.uu)("base")(a)};
`,q=(0,j.ZP)(m.Z)`
  align-items: center;
  height: 100%;
`,r=(0,j.ZP)(l._Qn).attrs(a=>({color:(0,k.uu)("lighter")(a)}))``,s=j.ZP.a`
  text-decoration: none;
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  color: ${a=>(0,k.uu)("lighter")(a)};
`,t=j.ZP.span`
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  color: ${a=>(0,k.uu)("scratched")(a)};
`,u=j.ZP.span`
  display: flex;
`,v=a=>{let{seller:b,item:c,onClick:d,active:e}=a,f=(0,h.Z)(a,["seller","item","onClick","active"]);return b?i.createElement(q,{"data-testid":"breadcrumb-item-list"},i.createElement(n,{"data-testid":"breadcrumb-item"},i.createElement(o,null,b.text),i.createElement(p,{"data-testid":"breadcrumb-item-name"},i.createElement("b",null,b.name)))):i.createElement(q,{"data-testid":"breadcrumb-item-list"},c.position>0&&i.createElement(r,{width:20,height:20}),i.createElement(e?t:s,(0,g.Z)({"data-testid":"breadcrumb-item",onClick:e?null:a=>d(a,c),active:e,href:c.url},f),i.createElement(u,null,c.icon||c.name)))};v.defaultProps={seller:void 0,item:void 0,active:!0,onClick:()=>{}};var w=v,x=c(60861);c(27439);var y=c(18281),z=c(17781);c(88699);var A=c(77766),B=c(64586),C=c(10200);let D=(0,j.ZP)(m.Z).attrs(a=>Object.assign({color:"text.base",alignItems:"center",p:3},a))``,E=(0,j.ZP)(e.Z).attrs(a=>Object.assign({display:"inline-block"},a))``,F=(0,j.ZP)(C.Z).attrs(a=>{let{pointing:b}=a,c=(0,h.Z)(a,["isOpen","pointing"]);return Object.assign({position:"relative",fontSize:1,py:b?3:2,gridGap:1},c)})``,G=(0,j.ZP)(e.Z).attrs(a=>Object.assign({position:"absolute",color:"text.base",bg:"background.lighter",borderRadius:"medium",zIndex:1,minWidth:"10rem",maxHeight:"20rem",forwardedAs:"ul"},(0,h.Z)(a,["pointing"])))`
  border: ${(0,k.R)("borders.0")};

  ${({pointing:a})=>a&&j.iv`
      &::before,
      &::after {
        content: '';
        position: absolute;
        bottom: 100%;
        left: 19px;
        border: 11px solid transparent;
        border-bottom-color: ${(0,k.R)("borders.0")};
      }

      &::after {
        left: 20px;
        border: 10px solid transparent;
        border-bottom-color: ${(0,k.dF)("lighter")};
      }
    `}
`,H=(0,j.ZP)(D)`
  gap: ${(0,k.R)("space.1")}px;
  ${({disableHover:a})=>!a&&j.iv`
      &:hover {
        background-color: ${(0,k.dF)("darker")};
      }
    `}
`,I=(0,j.ZP)(D)`
  font-weight: ${a=>(0,k.R)("fontWeights.medium")(a)};
`,J=(0,j.ZP)(l._ME)`
  width: 20px;
  height: 20px;
  transition: transform 0.25s ease-out;
  transform: ${({rotated:a})=>a&&"rotate(-180deg)"};
  ${k.$_}
`,K=(0,i.createContext)(!1),L=({children:a,value:b})=>i.createElement(K.Provider,{value:b},a),M=()=>(0,i.useContext)(K);var N=L;let O=a=>{let{children:b,fill:c}=a,d=(0,h.Z)(a,["children","fill"]),{isOpen:e,handleOnClick:f,pointing:j}=M();return i.createElement(F,(0,g.Z)({},d,{isOpen:e,pointing:j,onClick:f,"data-testid":"dropdown-title"}),b,i.createElement(J,{fill:c,rotated:e}))};O.defaultProps={children:null,fill:"text.base",underlineOnHover:!1},O.displayName="DropdownTitle";var P=O;let Q=a=>{let{children:b}=a,c=(0,h.Z)(a,["children"]),{isOpen:d,pointing:e}=M();return d?i.createElement(G,(0,g.Z)({},c,{pointing:e,"data-testid":"dropdown-menu"}),b):null};Q.defaultProps={children:null,fontSize:1,forwardedAs:"ul"},Q.displayName="DropdownMenu";var R=Q;let S=a=>{let{children:b,startIcon:c,endIcon:d}=a,e=(0,h.Z)(a,["children","startIcon","endIcon"]);return i.createElement(I,e,c,b,d)};S.defaultProps={children:null,startIcon:null,endIcon:null,forwardedAs:"li"},S.displayName="DropdownLabel";let T=a=>{let{children:b,value:c,startIcon:d,endIcon:e}=a,f=(0,h.Z)(a,["children","value","startIcon","endIcon","onClick"]),{setIsOpen:j,handleOnChange:k}=M(),l=a=>{j(!1),k(a,{value:c})};return i.createElement(H,(0,g.Z)({},f,{role:"option",onClick:l,"data-testid":"dropdown-item"}),d,b,e)};T.defaultProps={children:null,value:null,startIcon:null,endIcon:null,disableHover:!1,forwardedAs:"li"},T.displayName="DropdownItem";var U=T,V=c(97600);let W=a=>i.createElement(V.Z,a),X=a=>{let{title:b,children:c,options:d,onClick:e,onChange:f,mouseenter:j,pointing:k}=a,l=(0,h.Z)(a,["title","children","options","onClick","onChange","mouseenter","pointing"]),m=(0,i.useRef)(),[n,o]=(0,i.useState)(!1);j?(0,B.Ay)(m,o):(0,B.t$)(m,()=>o(!1));let p=a=>{j||o(!n),e(a)},q=(a,{value:b})=>{f(a,{value:b})};return i.createElement(N,{value:{isOpen:n,setIsOpen:o,handleOnClick:p,handleOnChange:q,pointing:k}},i.createElement(E,{ref:m,"data-testid":"dropdown"},(()=>{let a=i.Children.toArray(c).find(({type:{displayName:a}})=>"DropdownTitle"===a);return a?i.isValidElement(a)&&a:i.createElement(P,l,b)})(),d?i.createElement(R,{mouseenter:j,pointing:k},null==d?void 0:d.map(a=>{let{key:b,text:c,value:d,startIcon:e,endIcon:f}=a,j=(0,h.Z)(a,["key","text","value","startIcon","endIcon"]);return i.createElement(U,(0,g.Z)({key:b,value:d,startIcon:e,endIcon:f},j),c)})):i.Children.toArray(c).find(({type:{displayName:a}})=>"DropdownMenu"===a)))};X.defaultProps={children:null,mouseenter:!1,pointing:!1,onChange:()=>{},onClick:()=>{}},X.Title=P,X.Menu=R,X.Label=S,X.Divider=W,X.Item=U,W.displayName="DropdownDivider";var Y=X;let Z=j.ZP.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${({padding:a})=>a}%;
`,$=j.ZP.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`,_=a=>{let{src:b,ratio:c}=a,d=(0,h.Z)(a,["src","ratio"]),[e,f]=(c&&"string"==typeof c?c:"16:9").split(":"),j=e&&f?f/e:null,k=j&&!Number.isNaN(j)?(100*j).toFixed(2):"56.25";return i.createElement(Z,(0,g.Z)({"data-testid":"embed",padding:k},d),i.createElement($,{src:(0,B.qJ)(b)}))};_.defaultProps={ratio:"16:9"};var aa=_;c(58331);var ab=c(8341),ac=c(25610);c(39471);var ad=c(29869),ae=c(81572);c(66228),c(93088),c(91785);let af=({quantity:a=0,size:b=6,color:c="rgba(0, 0, 0, 0.3)"})=>j.iv`
  width: ${b}px;
  height: ${b}px;
  background-color: ${c};
  border-radius: 50%;
  margin-right: calc((100% / ${a}) - ${b}px);

  &:last-child {
    margin-right: ${b}px;
  }
`,ag=j.ZP.div`
  position: relative;
  height: ${({height:a})=>a};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  div {
    ${({bullets:a})=>af(a)}
  }
`,ah=j.ZP.div`
  position: relative;
  width: ${({width:a})=>a||"100%"};
  height: ${({height:a})=>a||"auto"};
`,ai=j.ZP.progress`
  position: absolute;
  width: ${({width:a})=>a||"100%"};
  height: ${({height:a})=>a||"auto"};
  border-radius: ${(0,k.R)("radii.big")};
  appearance: none;
  border: none;

  &::-webkit-progress-bar {
    height: ${({height:a})=>a};
    border-radius: ${(0,k.R)("radii.big")};
    background-color: ${a=>(0,k.dF)("whisper")(a)};
  }

  &::-webkit-progress-value {
    height: ${({height:a})=>a};
    border-radius: ${(0,k.R)("radii.big")};
    background-color: ${({color:a})=>a};
  }

  &::-moz-progress-bar {
    height: ${({height:a})=>a};
    border-radius: ${(0,k.R)("radii.big")};
    background-color: ${({color:a})=>a};
  }
`,aj=j.ZP.span`
  font-size: ${a=>(0,k.R)("fontSizes.3")(a)}px;
  color: ${({color:a})=>(0,k._j)(a,15)};
  font-weight: ${a=>(0,k.R)("fontWeights.bold")(a)};

  position: absolute;
  left: ${({value:a})=>a&&`calc(${a}% - 22px)`};
  top: -25px;
`,ak=({quantity:a})=>a&&Array.from(Array(a).keys()).map(a=>i.createElement("div",{key:a,"data-testid":"linear-progress-bullet"})),al=a=>Boolean(Object.keys(a).length),am=({bullets:a,value:b,max:c,color:d,label:e,height:f,width:g}={})=>i.createElement(ah,{color:d,width:g,height:f,"data-testid":"linear-progress"},e&&i.createElement(aj,{color:d,value:b,"data-testid":"linear-progress-label"},e),i.createElement(ai,{max:c,color:d,width:g,height:f,value:b,"data-label":e},e),al(a)&&i.createElement(ag,{bullets:a,height:f},ak(a)));am.defaultProps={max:100,label:"",color:"#FFCC03",width:"100%",height:"10px",bullets:{}};var an=am,ao=c(15566);c(23076),c(54934);var ap=c(73002);(function({links:a}){return a.map((a,b)=>i.createElement("link",(0,g.Z)({key:`link-head-${b}`},a)))}).defaultProps={links:[]};var aq=c(97851),ar=c(26527);c(75851),c(70715);var as=c(7029),at=c(85737);let au=(0,i.forwardRef)(function(a,b){let{onChange:c,onClick:d,value:e,children:f}=a,g=(0,h.Z)(a,["onChange","onClick","value","children"]),j=a=>{c(a,e),d(a)};if(!i.isValidElement(f))return null;let k=i.cloneElement(f,Object.assign({},g));return i.createElement("div",{onClick:j,ref:b},k)});au.defaultProps={onClick:()=>({})};var av=au;let aw=(0,i.createContext)(null);aw.displayName="TabContext";let ax=()=>{let[a,b]=i.useState(null);return i.useEffect(()=>{b(`stereo-id-${Math.round(1e5*Math.random())}`)},[]),a},ay=({children:a,value:b})=>{let c=ax(),d=(0,i.useMemo)(()=>({idPrefix:c,value:b}),[b]);return i.createElement(aw.Provider,{value:d},a)},az=()=>(0,i.useContext)(aw),aA=(a,b)=>{let{idPrefix:c}=a;return null===c?null:`${a.idPrefix}-P-${b}`},aB=(a,b)=>{let{idPrefix:c}=a;return null===c?null:`${a.idPrefix}-T-${b}`};var aC=ay;let aD=i.forwardRef(function(a,b){let{onChange:c,value:d,children:e}=a,f=(0,h.Z)(a,["onChange","value","children"]),j=i.Children.map(e,a=>{let b=a.props.value;if(void 0===b)return null;let e=b===d;return i.cloneElement(a,{value:b,onChange:c,selected:e})});return i.createElement("div",(0,g.Z)({},f,{ref:b,role:"tablist"}),j)});var aE=aD;let aF=i.forwardRef(function(a,b){let{children:c}=a,d=(0,h.Z)(a,["children"]),e=az();if(null===e)throw TypeError("No TabContext provided");let f=i.Children.map(c,a=>i.isValidElement(a)?i.cloneElement(a,{"aria-controls":aA(e,a.props.value),id:aB(e,a.props.value)}):null);return i.createElement(aE,(0,g.Z)({},d,{ref:b,value:e.value}),f)});var aG=aF;let aH=i.forwardRef(function(a,b){let{children:c,value:d}=a,f=(0,h.Z)(a,["children","value"]),j=az();if(null===j)throw TypeError("No TabContext provided");let k=aA(j,d),l=aB(j,d);return void 0===d?null:i.createElement(e.Z,(0,g.Z)({ref:b,hidden:j.value!==d,id:k,"aria-labelledby":l,role:"tabpanel"},f),c)});var aI=aH,aJ=c(63825);c(26780);let aK=(0,j.ZP)(m.Z).attrs({alignItems:"center",justifyContent:"center",backgroundColor:"background.lighter"})`
  height: 24px;
`,aL=(0,j.ZP)(e.Z)`
  width: 100%;
`,aM=(0,j.ZP)(e.Z).attrs(a=>Object.assign({},a,{borderRadius:"medium",zIndex:0}))`
  background-color: ${a=>(0,k.R)("baseColors.wildsand.base")(a)};
  position: absolute;
  height: 3px;
  width: 100%;
`,aN=(0,j.ZP)(e.Z).attrs({bg:"background.primary",borderRadius:"medium",zIndex:1})`
  position: absolute;
  height: 3px;
`,aO=j.ZP.input.attrs({type:"range"})`
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 100%;
  outline: none;
  z-index: ${a=>a.overlapIndex?(0,k.R)(`zIndices.${a.overlapIndex}`)(a):(0,k.R)("zIndices.3")(a)};

  &,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }

  &::-webkit-slider-thumb {
    background-color: ${(0,k.dF)("lighter")};
    border: ${a=>(0,k.R)("borders.0")(a)};
    border-radius: ${a=>(0,k.R)("radii.circle")(a)};
    box-shadow: ${a=>(0,k.R)("boxShadows.2")(a)};
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }

  &::-moz-range-thumb {
    background-color: ${(0,k.dF)("lighter")};
    border: ${a=>(0,k.R)("borders.0")(a)};
    border-radius: ${a=>(0,k.R)("radii.circle")(a)};
    box-shadow: ${a=>(0,k.R)("boxShadows.2")(a)};
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin-top: 4px;
    pointer-events: all;
    position: relative;
  }
`,aP=({minAllowed:a,maxAllowed:b,currentMin:c,currentMax:d,onChange:e})=>{let[f,g]=(0,i.useState)(c),[h,j]=(0,i.useState)(d),k=(0,i.useRef)(null),l=(0,i.useRef)(null),m=(0,i.useRef)(null),n=(0,i.useCallback)(c=>Math.round((c-a)/(b-a)*100),[c,d]),o=c=>(0,B.Z4)(c,d,a,b),p=d=>(0,B.rx)(d,c,a,b);(0,i.useEffect)(()=>{if(l.current){let a=n(f),b=n(+l.current.value);m.current&&(m.current.style.left=`${a}%`,m.current.style.width=`${b-a}%`)}},[f,n]),(0,i.useEffect)(()=>{if(k.current){let a=n(+k.current.value),b=n(h);m.current&&(m.current.style.width=`${b-a}%`)}},[h,n]),(0,i.useEffect)(()=>{g(o(c)?c:a),j(p(d)?d:b)},[c,d]);let q=(a,b)=>{e({currentMin:a,currentMax:b})};return i.createElement(aK,null,i.createElement(aO,{"data-testid":"slider-input-min",type:"range",min:a,max:b,value:f,ref:k,step:.01,overlapIndex:f>b-100?4:2,onChange:function(a){let b=Math.min(+a.target.value,h-1);g(b),q(b,h)}}),i.createElement(aO,{"data-testid":"slider-input-max",type:"range",min:a,max:b,value:h,ref:l,step:.01,onChange:function(a){let b=Math.max(+a.target.value,f+1);j(b),q(f,b)}}),i.createElement(aL,null,i.createElement(aM,null),i.createElement(aN,{ref:m})))};var aQ=aP,aR=c(7121)},87302:function(a,b,c){c.d(b,{CK:function(){return f.CK},Ee:function(){return d.Ee},Vq:function(){return d.Vq},X6:function(){return d.X6},YE:function(){return e.YE},kC:function(){return d.kC},rU:function(){return d.rU},rj:function(){return d.rj},"t$":function(){return f.t$},uk:function(){return d.uk},xu:function(){return d.xu},xv:function(){return d.xv}});var d=c(47560);c(63092);var e=c(25164);c(82709);var f=c(64586);c(12468)}}])
//# sourceMappingURL=8621-6b0e4f872dd197ac.js.map