"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6546],{5530:function(a,b,c){c.d(b,{Z:function(){return q}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(47560);let i=(0,g.ZP)(h.rj).attrs(a=>Object.assign({pt:2,pb:3,px:3,backgroundColor:"background.lighter",borderRadius:"medium"},a))`
  grid-template-columns: minmax(auto, 64px) auto;
  grid-template-areas: ${({hasFigure:a})=>a?`'f c'
        'b b'`:`'c c'
        'b b'`};
`,j=(0,g.ZP)(h.kC).attrs(a=>Object.assign({my:3,mx:2},a))`
  flex-direction: column;
  justify-content: space-around;
  grid-area: c;
`,k=(0,g.ZP)(h.xu).attrs(a=>Object.assign({my:3,mx:2,minWidth:"64px"},a))`
  grid-area: f;
`,l=(0,g.ZP)(h.Ee)``,m=(0,g.ZP)(h.xu).attrs(a=>Object.assign({forwardedAs:"p",color:"text.base",fontWeight:"medium",fontSize:2},a))``,n=(0,g.ZP)(h.xu).attrs(a=>Object.assign({forwardedAs:"p",color:"text.base",fontWeight:"regular",fontSize:1,lineHeight:"big"},a))``,o=(0,g.ZP)(h.zx)`
  width: 100%;
  text-transform: uppercase;
  grid-area: b;
`,p=a=>{let{data:b,as:c,href:g,image:h,alt:p,onButtonClick:q,buttonProps:r}=a,s=(0,e.Z)(a,["data","as","href","image","alt","onButtonClick","buttonProps"]);return f.createElement(i,(0,d.Z)({"data-testid":"card",hasFigure:Boolean(h)},s),Boolean(h)&&f.createElement(k,{"data-testid":"card-figure"},f.createElement(l,{src:h,alt:p,width:64,height:64,lazy:!0})),(Boolean(b.title)||Boolean(b.text))&&f.createElement(j,{"data-testid":"card-content"},Boolean(b.title)&&f.createElement(m,{"data-testid":"card-title"},b.title),Boolean(b.text)&&f.createElement(n,{"data-testid":"card-text"},b.text)),f.createElement(o,(0,d.Z)({"data-testid":"card-button",forwardedAs:g?"a":c,href:g,onClick:q,children:b.action},r)))};p.defaultProps={as:"button",data:{title:"",text:"",action:""},image:"",href:void 0,alt:"",onButtonClick:()=>{}};var q=p},92877:function(a,b,c){c.d(b,{Z:function(){return o}});var d=c(2784),e=c(34490),f=c(70615),g=c(50616),h=c(99673),i=c(91489),j=c(63825);let k=h.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 16px;
  border-bottom: 3px solid #eee;
`,l=h.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,m=(0,h.ZP)(j.Z)`
  text-align: center;
  font-weight: ${a=>(0,i.R)("fontWeights.medium")(a)};
  font-size: ${a=>(0,i.R)("fontSizes.2")(a)}px;
`;function n({label:a,content:b,detailTitle:c,fullScreen:h,children:i,open:j,onCloseSidebar:n,onChangeOpen:o}){let[p,q]=(0,d.useState)(j);function r(){q(!1),o(!1),n()}return(0,d.useEffect)(()=>{q(j),o(j)},[j]),d.createElement(d.Fragment,null,d.createElement(g.Z,{title:a,open:!!b,onClick:()=>{q(!p),o(!p)}},b),d.createElement(f.Z,{direction:"right",visible:p,onClickOutside:r,fullScreen:h},d.createElement(k,null,d.createElement(e.xhZ,{color:"text.light","data-testid":"arrow-back",role:"button",title:"Fechar detalhes",onClick:r}),d.createElement(l,null,d.createElement(m,{"data-testid":"detail-title"},c))),i))}n.defaultProps={content:null,open:!1,onCloseSidebar:()=>{},onChangeOpen:()=>{}};var o=n},36103:function(a,b,c){c.d(b,{Z:function(){return m}});var d=c(2784),e=c(19527),f=c(23778),g=c(50238),h=c(2575);let i={color:g.Z,size:f.Z,voltage:f.Z,volume:h.Z},j=a=>null==a?void 0:a.reduce((a,b)=>{var c;return a[b.type]=Object.assign({},a[b.type],{[b.value]:[...(null==(c=(null==a?void 0:a[b.type])||{})?void 0:c[b.value])||[],b]}),a},{}),k=(a,b)=>a.map((c,d)=>{var e,f,g,h;let i=j(b);return Object.assign({},c,{variations:null==(e=(null==i?void 0:null==(f=i[null==(g=a[d-1])?void 0:g.type])?void 0:f[null==(h=a[d-1])?void 0:h.current])||b)?void 0:e.reduce((a,b)=>Array(...new Set([...a,b.id])),[])})}),l=({onAttributeChange:a,attributes:b,variations:c,title:g,alignment:h,colorMinLength:j,colorVariant:l,fullWidth:m})=>{let n={color:j},o={color:l},p=k(b,c);return d.createElement(e.Z,{flexDirection:"column",width:1,rowGap:3},p.map((b,e)=>{let j=i[null==b?void 0:b.type]||f.Z,k=c.filter(a=>b.variations.includes(a.id)&&a.type===b.type);return d.createElement(j,{fullWidth:m,key:`${null==b?void 0:b.type}-${e}`,attribute:b,variations:k,onChange:a,title:g,alignment:h,minLength:n[null==b?void 0:b.type],variant:o[null==b?void 0:b.type]})}))};l.defaultProps={attributes:[],alignment:"center",colorVariant:"smooth",fullWidth:!1,variations:[]};var m=l},28426:function(a,b,c){c.d(b,{Z:function(){return v}});var d=c(7896),e=c(31461),f=c(2784),g=c(12468),h=c(47560),i=c(70615),j=c(99673),k=c(91489),l=c(63825);let m=(0,j.ZP)(l.Z)`
  color: ${a=>(0,k.uu)("scratched")(a)};
  font-size: ${a=>(0,k.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,k.R)("fontWeights.regular")(a)};
`,n=(0,j.ZP)(l.Z)`
  margin-top: 16px;
  line-height: 1.25;
`,o=(0,j.ZP)(l.Z)`
  font-weight: ${a=>(0,k.R)("fontWeights.bold")(a)};
  color: ${a=>(0,k.ow)("text.primary")(a)};
  line-height: 1.25;
`,p=a=>{let{isMagaluCompany:b,onLinkClick:c}=a,d=(0,e.Z)(a,["isMagaluCompany","onLinkClick"]),g=()=>null==c?void 0:c();return b?f.createElement(h.xu,d,f.createElement(m,{"data-testid":"guaranteelabel"},"Empresa do"," ",f.createElement(h.rU,{underline:!0,display:"inline",color:"text.scratched",onClick:g},"Grupo Magalu")," ","que garante sua compra do pedido \xe0 entrega.")):f.createElement(h.xu,d,f.createElement(m,{"data-testid":"guaranteelabel"},"O Magalu garante a sua compra, do pedido \xe0 entrega."," ",f.createElement(h.rU,{underline:!0,display:"inline",color:"text.scratched","data-testid":"learn-more",onClick:g},"Saiba mais")))};p.defaultProps={id:"magazineluiza",delivery:"magazineluiza",isMagaluCompany:!1};var q=p,r=c(34490);let s=({text:a,title:b})=>f.createElement(h.xu,{p:16},f.createElement(h.kC,null,f.createElement(r.hzV,{mr:16,width:45,height:35}),f.createElement(o,{"data-testid":"details-title"},b)),f.createElement(h.xu,{p:1},null==a?void 0:a.map((a,b)=>f.createElement(n,{key:b},a))));s.defaultProps={title:"",text:[]};var t=s;let u=a=>{let{seller:b,showDialog:c,detailsText:j,detailsTitle:k,isMagaluCompany:l,onDetailsOpen:m,onDetailsClose:n}=a,o=(0,e.Z)(a,["seller","showDialog","detailsText","detailsTitle","isMagaluCompany","onDetailsOpen","onDetailsClose"]),{id:p}=b,[r,s]=(0,f.useState)(!1),u=a=>{m(a),s(!0)},v=a=>{n(a),s(!1)};return p===g.ig?null:f.createElement(f.Fragment,null,f.createElement(q,(0,d.Z)({isMagaluCompany:l,onLinkClick:u},o)),!c&&f.createElement(i.Z,{direction:"right",visible:r,onClickOutside:v,fullScreen:!1},f.createElement(i.$,{label:l?"Empresa do Grupo Magalu":"Entrega e compra garantida",align:"left",fontSize:3,leftButton:{icon:"back",title:"Voltar para a pagina do produto",onClick:v}}),f.createElement(t,{text:j,title:k})),c&&f.createElement(h.Vq,{visible:r,onClickOutside:v,type:"responsive",position:"center",width:"350px",titleStyle:{textAlign:"center"},showClose:!0},f.createElement(t,{text:j,title:k})))};u.defaultProps={seller:{id:"magazineluiza"},detailsText:[],detailsTitle:"",showDialog:!1,isMagaluCompany:!1,onDetailsOpen:()=>{},onDetailsClose:()=>{}};var v=u},90713:function(a,b,c){c.d(b,{Z:function(){return r}});var d=c(2784),e=c(33279),f=c(99673),g=c(91489),h=c(19527),i=c(47560);let j=f.ZP.div`
  width: 100%;
  padding: ${a=>(0,g.R)("space.2")(a)}px;
  ${({desktopMode:a})=>!a&&f.iv`
      display: flex;
      justify-content: start;
      overflow-x: scroll;
    `};
`,k=(0,f.ZP)(i.xv)`
  font-size: ${a=>(0,g.R)(a.desktopMode?"fontSizes.3":"fontSizes.2")(a)}px;
`,l=(0,f.ZP)(h.Z)`
  padding: ${a=>(0,g.R)("space.2")(a)}px;
`,m=(0,f.ZP)(h.Z)`
  justify-content: ${a=>a.desktopMode?"flex-start":"center"};
  align-items: center;
`,n=f.ZP.a`
  text-decoration: none;
  cursor: default;
  justify-content: center;
  display: flex;
`,o=f.ZP.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
  border-radius: ${(0,g.R)("radii.default")};
  align-items: center;
  background: ${a=>(0,g.dF)("white")(a)};
  box-shadow: ${a=>(0,g.R)("boxShadows.4")(a)};
  height: ${({height:a})=>`${a}px`};
  width: ${({width:a})=>`${a}px`};
  margin: ${a=>(0,g.R)("space.1")(a)}px 0px;
  & > img {
    padding: 14% 16%;
    max-width: 100%;
    max-height: 100%;
  }
`;var p=c(63092);function q({filters:a={},onItemClick:b,onView:c,label:f,desktopMode:g,itemHeight:h,itemWidth:q}){let{attributeFilters:r}=a,[s,t]=(0,e.YD)({triggerOnce:!0,threshold:0,delay:1e3});(0,d.useEffect)(()=>{t&&c({filters:a})},[t]);let u=({children:a,filter:b})=>g&&b.values.length>4?d.createElement(p.lr,{auto:!1,showControls:!1,showArrowControls:!0,showPartial:!1,showPartialNextSlide:!1,gutter:0,slidesPerView:5,"data-testid":"carousel"},a):d.createElement(m,{"data-testid":"m-carousel",desktopMode:g,gap:g?32:2},a);return d.createElement(d.Fragment,null,r.map((a,c)=>d.createElement(d.Fragment,null,d.createElement(l,null,d.createElement(i.X6,{"data-testid":"header-label",as:"h2",fontSize:g?18:14,color:"text.attributeLabel"},f)),d.createElement(j,{ref:s,"data-testid":"filter-item-container",key:c,desktopMode:g},d.createElement(u,{filter:a},null==a?void 0:a.values.map(a=>d.createElement(n,{key:a.id,role:"button",onClick:c=>b(c,a),href:a.url||a.href,"data-testid":"filter-item-link"},d.createElement(o,{"data-testid":"filter-item-label",height:h,width:"text"===a.filterType?1.6*q:q},"icon"===a.filterType?d.createElement(i.Ee,{alt:a.label,title:a.label,"data-testid":"filter-item-image",src:a.icon}):d.createElement(k,{desktopMode:!0,color:"icons.disabled","data-testid":"filter-item-text"},a.label)))))))))}q.defaultProps={filters:{},onItemClick:()=>{},onView:()=>{}};var r=q},63486:function(a,b,c){c.d(b,{Z:function(){return l}});var d=c(2784),e=c(34490),f=c(99673),g=c(19527);let h=(0,f.ZP)(g.Z)`
  display: flex;
  align-content: center;
  justify-content: ${({carousel:a})=>a?"start":"center"};
  padding: 12px;
  overflow-x: ${({scrollOff:a})=>a?"hidden":"scroll"};
`,i=(0,f.ZP)(g.Z)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;var j=c(17781);let k=({filters:a,onChange:b,hasBorder:c,scrollOff:f})=>{let g=a=>d.createElement(e.JO$,{name:{"24c":"DeliveryRTomorrow",delivery_plus_1:"FastDelivery",store_pickup:"PickupStore",delivery_1h:"Delivery1h",delivery_24h:"Delivery24h","magalu-entregas":"DeliveryM","magalu-partner":"Pin",free_shipping:"DeliveryFree",today:"ExpressDelivery",magalu_indica:"Check",promocao_sazonal_1:"Christmas",promocao_sazonal_2:"CupomPromotion",promocao_sazonal_3:"Offers",promocao_sazonal_4:"Offers"}[a]||"FastDelivery"});return d.createElement(h,{"data-testid":"delivery-filter-container",carousel:(null==a?void 0:a.length)>2,scrollOff:f},d.createElement(i,null,null==a?void 0:a.map(({label:a,slug:e,selected:f,href:h})=>d.createElement(j.Z,{as:"a",type:"checkbox",name:"DeliveryFilter",startIcon:g(e),onChange:c=>b(Object.assign({},c,{href:h,label:a,slug:e})),checked:f,href:h,value:e,key:e,id:e,hasBorder:c},a))))};k.defaultProps={filters:[],onChange:()=>{},scrollOff:!1,hasBorder:!1};var l=k},75057:function(a,b,c){c.d(b,{Z:function(){return v}});var d=c(31461),e=c(2784),f=c(15312),g=c(13111),h=c(84546),i=c(60861),j=c(18281),k=c(19527),l=c(10200),m=c(63825),n=c(29869),o=c(99673),p=c(25610);let q=(0,o.ZP)(p.Z).attrs({fontSize:5,fontWeight:"light"})``,r=(0,o.ZP)(h.Z).attrs({fontSize:[0,1,2,2],display:"contents",color:"text.light",mY:3})``,s=(0,o.ZP)(m.Z).attrs({mt:3,mb:1})``,t=(0,o.ZP)(m.Z).attrs({color:"error",mt:1})``;function u({errorEmail:a,errorName:b,labelEmail:c,labelName:o,labelNewsletter:p,noticeMeLabel:u,noticeMeLink:v,onSubmit:w,placeholderEmail:x,placeholderName:y,subtitle:z,textSubmitButton:A,title:B}){let[C,D]=(0,e.useState)(!0),[E,F]=(0,e.useState)(""),[G,H]=(0,e.useState)(""),[I,J]=(0,e.useState)({}),K=e.useCallback(()=>{let a=(0,f.Z)(E)?void 0:{fullName:b};return J(b=>Object.assign({},(0,d.Z)(b,["fullName"]),a)),a},[E]),L=e.useCallback(b=>{let c=(0,g.Z)(b)?void 0:{email:a};return J(a=>Object.assign({},(0,d.Z)(a,["email"]),c)),c},[G]),M=(0,e.useCallback)(()=>{F(""),H(""),D(!0)},[E,G]),N=a=>{let b=Object.assign({},K(E),L(G));Object.entries(b).length||w({fullName:E,email:G,newsletter:C},M),a.preventDefault()};return e.createElement(e.Fragment,null,e.createElement(k.Z,{alignItems:"baseline",gap:"2",mb:"3"},e.createElement(q,{"data-testid":"let-me-know-title"},B),e.createElement(l.Z,{href:v,target:"_blank",underline:!0,color:"text.light",fontSize:[0,1,2,2]},u)),e.createElement(r,{"data-testid":"let-me-know-description"},z),e.createElement("form",null,e.createElement(s,{"data-testid":"let-me-know-input-label-name"},o),e.createElement(n.Z,{"data-testid":"let-me-know-input-name",placeholder:y,hasError:!!I.fullName,value:E,onChange:a=>F(a.target.value),onFocus:()=>J(a=>(0,d.Z)(a,["fullName"])),onBlur:a=>K(a.target.value)}),e.createElement(t,{"data-testid":"let-me-know-error-name"},I.fullName),e.createElement(s,{"data-testid":"let-me-know-input-label-email"},c),e.createElement(n.Z,{"data-testid":"let-me-know-input-email",placeholder:x,type:"email",hasError:!!I.email,value:G,onChange:a=>H(a.target.value),onFocus:()=>J(a=>(0,d.Z)(a,["email"])),onBlur:a=>L(a.target.value)}),e.createElement(t,{"data-testid":"let-me-know-error-email"},I.email)),e.createElement(h.Z,{mt:15},e.createElement(j.Z,{as:m.Z,fontSize:[1,2],checked:C,onChange:a=>D(a.target.checked)},p)),e.createElement(h.Z,{mt:15},e.createElement(i.Z,{"data-testid":"let-me-know-submit",full:!0,onClick:N},A)))}u.defaultProps={errorEmail:"Insira o e-mail corretamente.",errorName:"Insira o nome completo corretamente.",labelEmail:"E-mail",labelName:"Nome",labelNewsletter:"Quero receber ofertas e conte\xfados por e-mail",noticeMeLabel:"Ver produtos similares",onSubmit:void 0,placeholderEmail:"Digite seu e-mail",placeholderName:"Digite seu nome",subtitle:"Avise-me quando estiver dispon\xedvel",textSubmitButton:"Avise-me",title:"N\xe3o dispon\xedvel"};var v=u},99075:function(a,b,c){c.d(b,{Z:function(){return n}});var d=c(2784),e=c(34490),f=c(64586),g=c(47560),h=c(63092),i=c(99673),j=c(91489);let k=i.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  text-align: center;
`,l=i.ZP.h2`
  font-size: ${a=>(0,j.R)("fontSizes.4")(a)}px;
  line-height: ${a=>(0,j.R)("lineHeights.fontSize")(a)};
  font-weight: ${a=>(0,j.R)("fontWeights.medium")(a)};
  color: ${a=>a.color};
  margin: 10px;
`,m=i.ZP.p`
  font-size: ${a=>(0,j.R)("fontSizes.2")(a)}px;
  line-height: ${a=>(0,j.R)("lineHeights.display")(a)};
  color: ${a=>(0,j.uu)("base")(a)};
  margin: 15px 0;
  width: 80%;
`;function n({label:a,description:b,value:c,productUrl:i,attributes:{color:j,icon:n,textColor:o}}){let p={coin:"Coin",lightning:"Lightning"}[n]||"Coin",[q,r]=(0,d.useState)(!1),[s,t]=(0,d.useState)(!1),u=a=>{a.stopPropagation(),a.preventDefault(),t(!s)},v=a=>!q&&(r(!0),(0,f.vQ)(a),setTimeout(()=>r(!1),3e3));return d.createElement(d.Fragment,null,d.createElement(h.mY,{hasInfo:!0,onClick:u,color:j,icon:p,textColor:o,value:c}),d.createElement(g.Vq,{visible:s,onClickOutside:u,position:"center",showClose:!0,type:"alert"},d.createElement(k,{onClick:a=>{a.stopPropagation(),a.preventDefault()}},d.createElement(g.kC,{alignItems:"center",flexDirection:"column"},d.createElement(e.JO$,{name:p,"data-testid":"loyalty-commission-icon",width:"25px",height:"25px",color:j}),d.createElement(l,{id:"loyaltyDialogTitle",color:j},a)),d.createElement(h.mY,{value:c,color:j,Icon:e.JO$,textColor:o}),d.createElement(m,{id:"loyaltyDialogDesc"},b),d.createElement(g.zx,{rounded:!0,variation:q?null:"outline",full:!0,onClick:()=>v(i),"data-testid":"loyalty-commission-button"},q?"Copiado":"Copiar Link"))))}},60857:function(a,b,c){c.d(b,{Z:function(){return s}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(19527),i=c(7029),j=c(99673);let k=(0,j.ZP)(h.Z).attrs(a=>({borderWidth:a.selected?2:1,borderColor:a.selected?"blue":"whisper",borderStyle:"solid",borderRadius:"default",padding:2,width:a.smallThumbnails?"84px":"110px",height:a.smallThumbnails?"66px":"110px",alignItems:"center",justifyContent:"center",cursor:"pointer",position:"relative"}))`
  & img {
    height: ${a=>a.smallThumbnails?"70px":"90px"};
  }
`,l=a=>{let{alt:b,title:c,audio:j,images:l,video:m,imgWidth:n,imgHeight:o,imgMaxHeight:p,onImageClick:q,onAudioClick:r,onVideoClick:s,showMedia:t,showMoreTooltip:u,smallThumbnails:v,preload:w}=a,x=(0,e.Z)(a,["alt","title","audio","images","video","imgWidth","imgHeight","imgMaxHeight","onImageClick","onImageChange","onAudioClick","onVideoClick","showMedia","showMoreTooltip","smallThumbnails","preload"]),[y,z]=(0,f.useState)({image:l[0],index:0}),A=a=>{q(a)};return(0,f.useEffect)(()=>{z({image:l[0],index:0})},[l]),f.createElement(h.Z,(0,d.Z)({columnGap:4,maxHeight:614,"data-testid":"media-gallery"},x),f.createElement(h.Z,{rowGap:3,flexDirection:"column",width:"fit-content"},l.slice(0,l.length>5?4:l.length).map((a,d)=>f.createElement(k,{key:`gallery-img-${d}`,selected:d===y.index,smallThumbnails:v},f.createElement(i.Z,{alt:b,title:c,"data-testid":"media-gallery-image",src:a,width:90,height:90,onClick:()=>z({image:a,index:d}),onMouseOver:()=>z({image:a,index:d})}))),l.length>5&&f.createElement(h.Z,{"data-testid":"media-gallery-image-more",fontSize:5,fontWeight:"bold",borderRadius:"default",width:v?"84px":"110px",height:v?"66px":"110px",title:u,alignItems:"center",justifyContent:"center",bg:"background.base",color:"text.base",cursor:"pointer",onClick:()=>q(4)},"+ ",l.length-4)),f.createElement(h.Z,{flex:1,maxHeight:614,position:"relative"},f.createElement(i.Z,{"data-testid":"image-selected-thumbnail",src:y.image,maxHeight:p,width:n,height:o,alt:b,title:c,lazy:!w||0!==y.index,onClick:()=>A(y.index),cursor:"pointer"}),t&&f.createElement(h.Z,{gap:2,position:"absolute",bottom:0,left:0,"data-testid":"media-gallery-icons"},!!m&&f.createElement(g.JO$,{name:"VideoCircle",cursor:"pointer",width:"40px",height:"40px","data-testid":"media-gallery-video-icon",onClick:s}),!!j&&f.createElement(g.JO$,{name:"PodcastCircle",cursor:"pointer",width:"40px",height:"40px","data-testid":"media-gallery-audio-icon",onClick:r}))))};l.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:600,imgHeight:600,imgMaxHeight:"40vh",alt:"",title:"",showMoreTooltip:"",smallThumbnails:!1,preload:!1};var m=l,n=c(47560),o=c(63092);let p=a=>{let{alt:b,title:c,audio:h,images:i,video:j,imgWidth:k,imgHeight:l,imgMaxHeight:m,counterSeparator:p,showCounter:q,onImageChange:r,onImageClick:s,onAudioClick:t,onVideoClick:u,showMedia:v,lazy:w,preload:x}=a,y=(0,e.Z)(a,["alt","title","audio","images","video","imgWidth","imgHeight","imgMaxHeight","counterSeparator","showCounter","onImageChange","onImageClick","onAudioClick","onVideoClick","showMedia","lazy","preload"]),[z,A]=(0,f.useState)(1),[B,C]=(0,f.useState)(),D={audio:t,video:u},E={video:f.createElement(n.cx,{"data-testid":"media-embed",src:j}),audio:f.createElement("audio",{"data-testid":"media-audio",controls:!0,src:h})},F=a=>{let b="string"==typeof a&&["video","audio"].includes(a)?a:null;C(b)},G=a=>{let b=D[a];b(),F(a)},H=a=>{A(a+1),r(i[a])};return f.createElement(f.Fragment,null,f.createElement(n.xu,(0,d.Z)({"data-testid":"media-gallery",fontSize:0,position:"relative"},y),f.createElement(o.lr,{lazy:w,onChange:H,showControls:!1,auto:!1},i.map((a,d)=>f.createElement(n.xu,{height:m,key:`gallery-img-${d}`},f.createElement(n.Ee,{alt:b,title:c,"data-testid":"media-gallery-image",key:`gallery-img-${d}`,src:a,m:"auto",width:k,height:l,maxHeight:m,lazy:!x||0!==d,onClick:()=>s(d)})))),v&&f.createElement(n.kC,{"data-testid":"media-gallery-icons",position:"absolute",bottom:"16px",left:"16px",columnGap:2},!!j&&f.createElement(g.JO$,{name:"VideoCircle",width:"40px",height:"40px",onClick:()=>G("video"),"data-testid":"media-gallery-video-icon"}),!!h&&f.createElement(g.JO$,{name:"PodcastCircle",width:"40px",height:"40px",onClick:()=>G("audio"),"data-testid":"media-gallery-audio-icon"})),q&&!!i.length&&f.createElement(n.xu,{"data-testid":"media-gallery-counter",bg:"background.dark",color:"text.lightest",position:"absolute",bottom:"16px",right:"16px",paddingX:2,paddingY:1,borderRadius:"default",opacity:"85%"},z,p,i.length)),B&&f.createElement(n.Vq,{title:null,position:"center",showClose:!0,onClickOutside:F,visible:!0},E[B]))};p.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:800,imgHeight:600,imgMaxHeight:"40vh",counterSeparator:" de ",showCounter:!0,alt:"",title:"",lazy:!1,preload:!1};var q=p;let r=a=>{let{alt:b,title:c,audios:g,images:h,podcasts:i,videos:j,imgWidth:k,imgHeight:l,imgMaxHeight:n,onImageChange:o,onImageClick:p,onAudioClick:r,onVideoClick:s,showThumbnail:t,showMoreTooltip:u,smallThumbnails:v,preload:w}=a,x=(0,e.Z)(a,["alt","title","audios","images","podcasts","videos","imgWidth","imgHeight","imgMaxHeight","counterSeparator","showCounter","onImageChange","onImageClick","onAudioClick","onVideoClick","showThumbnail","showMoreTooltip","smallThumbnails","lazy","preload"]),[y]=j,[z]=[...i,...g];return f.createElement(t?m:q,(0,d.Z)({alt:b,title:c,audio:z,video:y,images:h,imgWidth:k,imgHeight:l,imgMaxHeight:n,onImageClick:p,onAudioClick:r,onVideoClick:s,onImageChange:o,showMedia:!!y||!!z,showMoreTooltip:u,smallThumbnails:v,preload:w},x))};r.defaultProps={audios:[],images:[],podcasts:[],videos:[],imgWidth:800,imgHeight:600,imgMaxHeight:"40vh",counterSeparator:" de ",showCounter:!0,alt:"",title:"",onImageChange:()=>{},onImageClick:()=>{},onVideoClick:()=>{},onAudioClick:()=>{},showThumbnail:!1,showMoreTooltip:"",smallThumbnails:!1,lazy:!1,preload:!1};var s=r},91999:function(a,b,c){c.d(b,{Z:function(){return r}});var d=c(2784),e=c(71180),f=c(47560),g=c(63092),h=c(99673),i=c(91489);let j=(0,h.ZP)(f.kC)`
  align-items: center;
  padding: 0 0 ${a=>(0,i.R)("space.2")(a)}px;

  ${(0,i.aK)("large")} {
    padding: 0 0 ${a=>(0,i.R)("space.3")(a)}px;
  }
`,k=h.ZP.span`
  width: 80px;
`,l=(0,h.ZP)(f.xv).attrs(()=>({fontSize:2}))`
  color: ${a=>(0,i.R)("colors.darkSilver")(a)};
  font-weight: ${a=>(0,i.R)("fontWeights.regular")(a)};
  padding: ${a=>(0,i.R)("space.2")(a)}px;
  line-height: ${a=>(0,i.R)("lineHeights.plus")(a)}px;
`,m=(0,h.ZP)(f.xu).attrs(()=>({fontSize:2}))`
  color: #69727763;
  font-weight: ${a=>(0,i.R)("fontWeights.regular")(a)};
  line-height: ${a=>(0,i.R)("lineHeights.plus")(a)}px;
`,n=(0,h.ZP)(f.xu).attrs(()=>({fontSize:3}))`
  color: ${a=>(0,i.R)("colors.darkSilver")(a)};
  font-weight: ${a=>(0,i.R)("fontWeights.regular")(a)};
  line-height: 24px;
  padding: ${a=>(0,i.R)("space.3")(a)}px 0
    ${a=>(0,i.R)("space.3")(a)}px;
  word-break: break-word;
`,o=(0,h.ZP)(f.xu).attrs(()=>({color:"primary.base",fontSize:1}))`
  display: inline;
  text-decoration: underline;
  cursor: pointer;
`,p=(0,h.ZP)(f.xu).attrs(()=>({fontSize:2}))`
  color: #69727763;
  font-weight: ${a=>(0,i.R)("fontWeights.regular")(a)};
  line-height: ${a=>(0,i.R)("lineHeights.tall")(a)}px;
`,q=({review:a,charLimit:b})=>{let[c,h]=(0,d.useState)(!1),{rating:i,description:q,submissionDate:r,attributes:s,userData:t}=a,u=(null==q?void 0:q.length)<=b,v=/^\d+$/.test(r),w=r&&!v&&(0,e.jL)(new Date(r),new Date),x=(null==s?void 0:s.map((a,b)=>0===b?`${a.label}: ${a.value}`:` | ${a.label}: ${a.value}`))||[];return d.createElement(f.xu,null,d.createElement(j,null,d.createElement(g.qE,null),d.createElement(l,null,null==t?void 0:t.name),d.createElement(k,null,d.createElement(g.Cq,{score:i}))),x.length>0&&d.createElement(m,{"data-testid":"review-sub-title"},x),q&&d.createElement(n,{"data-testid":"review-description"},c||u?q:`${q.substring(0,b)}...`,"\xa0",!u&&d.createElement(o,{onClick:()=>h(!c),"data-testid":"see-more-btn",role:"button"},c?"ver menos":"ver mais")),w&&d.createElement(p,{"data-testid":"review-date"},`h\xe1 ${w}`))};q.defaultProps={charLimit:110};var r=q},79957:function(a,b,c){c.d(b,{Z:function(){return ab}});var d=c(7896),e=c(31461),f=c(2784),g=c(33279),h=c(34490),i=c(99673),j=c(68054),k=c(91489),l=c(63092),m=c(12468),n=c(27439),o=c(47560);let p=(a,b)=>{let c={miniature:i.iv`
      display: grid;
      padding: 8px 2px;
    `,list:i.iv`
      display: grid;
      grid-template-columns: 1fr 2fr;
      ${b>=500&&i.iv`
        ${(0,k.aK)("small")} {
          grid-template-columns: 180px 2fr;
          grid-column-gap: 20px;
        }
      `}
      padding: 16px;
    `,gallery:i.iv`
      grid-template-rows: auto auto 1fr;
    `};return c[a]},q=(0,i.ZP)(o.xv).attrs(a=>Object.assign({fontSize:13,fontWeight:"regular",lineHeight:"display"},a))`
  justify-self: left;
  color: ${(0,k.uu)("light")};

  ${j.cp}
`;(0,i.ZP)(l.iG).attrs(a=>Object.assign({width:20,height:20},a))`
  justify-self: end;
  max-width: 20px;
`;let r=(0,i.ZP)(n.ZP)`
  position: relative;
  padding: 5px;
  justify-content: unset;
  border-radius: 0;
  background-color: ${a=>a.hideLinkBorder?"unset":(0,k.ow)("background.lighter")(a)};
  ${({displayMode:a,containerWidth:b})=>a&&p(a,b)};
  display: grid;

  ${({fullHeight:a})=>a&&`
    display: flex;
    flex-direction: column;
    height: 100%;
  `}
`,s={miniature:i.iv`
    height: 20vw;
    justify-content: flex-end;
    ${(0,k.aK)("small")} {
      height: 120px;
    }
  `,list:i.iv`
    justify-content: flex-start;
    padding-top: 4px;
    min-height: 25vw;
    ${(0,k.aK)("small")} {
      min-height: initial;
      max-height: 210px;
    }
  `,gallery:i.iv`
    height: 32vw;
    justify-content: flex-end;
    ${(0,k.aK)("small")} {
      max-height: 210px;
    }
  `},t=i.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    max-height: 100%;
  }
  ${({displayMode:a})=>a&&s[a]}
`,u={miniature:i.iv`
    justify-content: center;
  `,list:i.iv`
    justify-content: flex-start;
  `,gallery:i.iv`
    justify-content: flex-end;
  `},v=i.ZP.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: 5%;
  ${({displayMode:a})=>a&&u[a]}
`,w=(0,i.ZP)(o.xv).attrs(a=>Object.assign({fontSize:[1,2,2],lineHeight:"display",fontWeight:"regular"},a))`
  ${({displayMode:a})=>a!==m.IY&&"height: 32px;"}
  color: ${(0,k.uu)("base")};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
  margin: 0 0 4px 0;
  ${(0,k.aK)("small")} {
    height: 40px;
  }
  ${j.cp}
`,x=i.ZP.div`
  ${({displayMode:a})=>a===m.IY&&"padding-left: 8px"}
  ${({displayMode:a})=>a!==m.IY&&`
    display: grid;
    padding-top: 8px;
  `}
`,y=i.ZP.div`
  width: 100%;
  height: 15px;
  position: relative;
`,z=(0,i.ZP)(o.zx)`
  opacity: 0.7;
  visibility: hidden;
  position: absolute;
  width: 50%;
  min-width: 90px;

  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;

  &:hover {
    opacity: 1;
  }

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${r}:hover & {
    visibility: visible;
  }
`,A=(0,i.ZP)(o.xv).attrs(()=>({fontSize:0,fontWeight:"medium",marginTop:1}))`
  color: ${(0,k.uu)("primary")};
`;var B=c(25164),C=c(7029);let D=(0,i.ZP)(o.rj)`
  grid-template-columns: 1fr ${({displayMode:a,sponsored:b,isMagaluIndica:c})=>a!==m.IY&&c||a===m.Co&&b?"20px":""};
  margin-bottom: ${(0,k.R)("space.1")}px;
  ${a=>a.displayMode===m.IY&&`
    grid-column-start: 3;
    grid-row-start: 1;
    align-self: start;
  `}
`,E=(0,i.ZP)(o.Af).attrs(a=>Object.assign({},a))`
  justify-self: start;
`,F=(0,i.ZP)(l.iG).attrs(a=>Object.assign({width:20,height:20},a))`
  justify-self: end;
  max-width: 20px;
`,G=({displayMode:a,sponsored:b,showWishBtn:c,isLiked:d,handleAddToWishlist:e,isMagaluIndica:g})=>f.createElement(D,{isMagaluIndica:g,displayMode:a,sponsored:b},b&&a===m.Co&&f.createElement(q,{place:"header"},"Patrocinado"),g&&a===m.yg&&f.createElement(E,{autoSize:!0,padding:"2px 8px",bg:"magablu",fontSize:1,endIcon:f.createElement(h.JO$,{name:"Check",fill:"#FFF",width:"16px",height:"16px"}),fontWeight:"medium",gridGap:1,borderRadius:6,width:"125px"},"magalu indica"),c&&f.createElement(F,{active:d,onClick:e}));var H=G,I=c(19527),J=c(63825);let K=({geoLocTags:a,displayMode:b})=>null!=a&&a.title?f.createElement(I.Z,{alignItems:"center",justifyContent:b===m.Co?"center":null,gap:1},f.createElement("div",null,f.createElement(h.JO$,{name:a.icon||"FastDelivery",color:"text.primary",width:30,height:30})),f.createElement("div",null,f.createElement(J.Z,{color:"text.primary",fontSize:[1,1,2,2],fontWeight:"medium"},a.title))):null;var L=K;let M=({allGeoLocTags:a,displayMode:b})=>a.length>0&&f.createElement(I.Z,{display:"none","data-testid":"allGeoLocTags",flexDirection:"column"},a.map((a,c)=>a.title&&f.createElement(I.Z,{key:c,alignItems:"center",display:b===m.Co?"none":null,color:"text.primary",fontSize:"0",fontWeight:"medium"},a.title)));M.defaultProps={allGeoLocTags:[]};var N=M,O=c(84546),P=c(93837);let Q=(0,i.ZP)(o.xv).attrs(()=>({fontSize:0,fontWeight:"regular",marginTop:1}))`
  color: ${(0,k.uu)("scratched")};
`,R=({shippingTag:a})=>{let{time:b,cost:c,complement:d}=a,e=0===c?"Frete gr\xe1tis":`Frete: ${(0,P.Z)({value:c})}`,g=()=>0===c?f.createElement(A,null,e):f.createElement(Q,null,e);return f.createElement(O.Z,{marginTop:1,"data-testid":"productCard-shipping-tag"},null!=c&&f.createElement(g,null),b&&f.createElement(A,null,b),d&&f.createElement(A,null,d))};R.defaultProps={shippingTag:{}};var S=R;let T={miniature:i.iv`
    justify-self: center;
    align-self: center;
  `,list:i.iv`
    justify-self: left;
  `},U=i.ZP.div`
  ${({displayMode:a})=>a&&T[a]};
  max-height: 20px;
`,V=({displayMode:a,count:b,score:c,allowEmptyRating:d,showRating:e})=>(d||c)&&e?f.createElement(U,{displayMode:a},f.createElement(l.Cq,{score:c,count:b,width:"12px",height:"12px"})):null;var W=V;let X=i.ZP.div`
  position: relative;

  span {
    filter: blur(3px);
  }
`,Y=(0,i.ZP)(o.zx)`
  visibility: hidden;
  position: absolute;
  bottom: 0;

  /* stylelint-disable-next-line selector-type-no-unknown */
  ${X}:hover & {
    visibility: visible;
  }
`,Z=({hidePriceMode:a,hidePrice:b,displayMode:c,installment:e,showInCashInfo:g,showDiscount:h,showDiscountOnlyCashInfo:i,price:j,hidePriceButtonAction:k,product:m})=>b?"hide"===a?null:f.createElement(X,null,f.createElement("span",{"data-testid":"hided-price"},f.createElement(l.tA,{display:c,installment:null,price:0,showInCashInfo:g})),k&&f.createElement(Y,{full:!0,size:"small",m:"10px 0","data-testid":"show-price-button",onClick:a=>{a.preventDefault(),k(m)}},"Ver Pre\xe7o")):f.createElement(l.tA,(0,d.Z)({display:c,installment:e,showInCashInfo:g,showDiscount:h,showDiscountOnlyCashInfo:i},j));var $=Z;let _={sales_commission:B.KU,sales_dynamic_commission:B.KU},aa=a=>{let{hideLinkBorder:b,onClick:c,onView:i,domain:j,imgLazyLoading:k,index:n,lazyLoadingOffset:p,showInCashInfo:s,enableShadow:u,enableHover:A,geoLocTags:B,allGeoLocTags:D,hidePriceMode:E,hidePrice:F,hidePriceButtonAction:G,showPreview:I,previewAction:J,showWishBtn:K,onClickWishBtn:M,fullHeight:O,showRating:P,showDiscount:Q,showDiscountOnlyCashInfo:R,allowEmptyRating:T,containerWidth:U}=a,V=(0,e.Z)(a,["adId","hideLinkBorder","onClick","onView","domain","imgLazyLoading","index","lazyLoadingOffset","showInCashInfo","enableShadow","enableHover","geoLocTags","allGeoLocTags","hidePriceMode","hidePrice","hidePriceButtonAction","showPreview","previewAction","showWishBtn","onClickWishBtn","fullHeight","showRating","percentBadge","showDiscount","showDiscountOnlyCashInfo","allowEmptyRating","containerWidth"]),{displayMode:X,title:Y,price:Z,image:aa,installment:ab,badges:ac,rating:ad,variationId:ae,url:af,titleAs:ag,loyalty:ah,imageAltPrefix:ai,isOnWishlist:aj,imageWidth:ak,imageHeight:al,shippingCost:am,shippingTag:an,brand:ao,offerTags:ap,ads:aq}=V,[ar,as]=(0,f.useState)(aj),{count:at,score:au}=ad,av=null==ap?void 0:ap.includes("magalu_indica"),aw=null==ac?void 0:ac.slice(-1)[0],ax=a=>{if(a){let b=!ar;as(b)}},ay=a=>{a.stopPropagation(),a.preventDefault(),M(a,ar,ax)},[az,aA]=(0,g.YD)({triggerOnce:!0,threshold:.5,delay:1e3});(0,f.useEffect)(()=>{aA&&i(Object.assign({index:n,geoLocTags:B},V))},[aA]);let aB=ai?`${ai}${V.title}`:V.title,aC=_[null==ah?void 0:ah.type],aD=(null==aq?void 0:aq.id)||void 0;return f.createElement(r,{ref:az,href:af,onClick:a=>c(a,Object.assign({},V,{index:n})),displayMode:X,"data-testid":"product-card-container","ads-click-event":aD,"ads-view-event":aD,"ads-impression-event":aD,redirect:af,hideLinkBorder:b,enableShadow:u,enableHover:A,fullHeight:O,containerWidth:U,index:n,"data-brand":null==ao?void 0:ao.slug},f.createElement(H,{displayMode:X,sponsored:null==aq?void 0:aq.sponsored,showWishBtn:K,isLiked:ar,handleAddToWishlist:ay,isMagaluIndica:av}),f.createElement(t,{displayMode:X},av&&X===m.IY&&f.createElement(o.Af,{autoSize:!0,padding:"2px 8px",bg:"magablu",fontSize:1,endIcon:f.createElement(h.JO$,{name:"Check",fill:"#FFF",width:"16px",height:"16px"}),fontWeight:"medium",gridGap:1,borderRadius:6,width:"125px",mb:1},"magalu indica"),f.createElement(C.Z,{src:aa,alt:aB,width:ak,height:al,title:Y,lazy:k,offset:p}),ah&&f.createElement(v,{displayMode:X},aC&&f.createElement(aC,(0,d.Z)({},ah,{productUrl:j+af}))),!!aw&&f.createElement(l.Ct,{key:`${ae}-badge-${aw.id}`,url:aw.imageUrl,tooltip:aw.tooltip,displayMode:X,borderRadius:"medium"})),I&&f.createElement(y,{"data-testid":"button-preview-container"},f.createElement(z,{size:"small",m:"10px 0","data-testid":"button-preview",onClick:a=>{a.preventDefault(),J(V)}},"Conferir")),f.createElement(x,{displayMode:X,"data-testid":"product-card-content"},(null==aq?void 0:aq.sponsored)&&X!==m.Co&&f.createElement(q,{place:"content"},"Patrocinado"),X!==m.Co&&f.createElement(w,{as:ag,"data-testid":"product-title"},Y),W({displayMode:X,count:at,score:au,allowEmptyRating:T,showRating:P}),f.createElement(L,{geoLocTags:B,displayMode:X}),$({hidePriceMode:E,hidePrice:F,displayMode:X,installment:ab,showInCashInfo:s,showDiscount:Q,showDiscountOnlyCashInfo:R,price:Z,hidePriceButtonAction:G,product:V}),f.createElement(l.lF,{displayMode:X,costDescription:am.costDescription,cost:am.cost}),f.createElement(N,{allGeoLocTags:D,displayMode:X}),X!==m.Co&&f.createElement(S,{shippingTag:an})))};var ab=aa;aa.defaultProps={variationId:"",url:"",displayMode:m.IY,domain:m.RW,title:"",image:"",index:0,price:{},installment:{},geoLocTags:{},allGeoLocTags:[],rating:{},badges:[],brand:{},onClick:()=>{},onView:()=>{},imgLazyLoading:!1,fullHeight:!1,percentBadge:30,lazyLoadingOffset:50,showInCashInfo:!0,hideLinkBorder:!1,titleAs:"h2",enableShadow:!0,enableHover:!1,imageAltPrefix:"",hidePriceMode:"blur",hidePrice:!1,hidePriceButtonAction:null,showPreview:!1,previewAction:()=>{},isOnWishlist:!1,showWishBtn:!1,onClickWishBtn:()=>{},showRating:!0,showDiscount:!1,showDiscountOnlyCashInfo:!0,shippingCost:{},ads:{},shippingTag:{},allowEmptyRating:!1}},4720:function(a,b,c){c.d(b,{Z:function(){return h}});var d=c(7896),e=c(2784),f=c(79957),g=c(63092);function h({products:a,displayMode:b,onClick:c,onProductView:h,onChange:i,gutter:j,showInCashInfo:k,slidesPerView:l,interval:m,auto:n,showPartialNextSlide:o,transitionDuration:p,productTitleAs:q,imageAltPrefix:r,imgLazyLoading:s,imageWidth:t,imageHeight:u,showControls:v,showArrowControls:w,showRating:x,enableHover:y,showPreview:z,showDiscount:A,showDiscountOnlyCashInfo:B,previewAction:C}){let D=b=>{let c=Array(l).fill().map((c,d)=>a[d+b]);i(c)},E=w&&l<=(null==a?void 0:a.length);return e.createElement(g.lr,{onChange:D,slidesPerView:l,gutter:j,auto:n,interval:m,showPartialNextSlide:o,transitionDuration:p,isProductCarousel:!0,showControls:v,showArrowControls:E},null==a?void 0:a.map((a,g)=>e.createElement(f.Z,(0,d.Z)({},a,{displayMode:b,onClick:c,onView:h,showInCashInfo:k,titleAs:q,fullHeight:!0,imageAltPrefix:r,imgLazyLoading:s,imageWidth:t,imageHeight:u,showRating:x,key:`product-carousel-${a.variationId||a.id}-${g}`,enableHover:y,showPreview:z,previewAction:C,showDiscount:A,showDiscountOnlyCashInfo:B}))))}h.defaultProps={displayMode:"gallery",onClick:()=>{},onProductView:()=>{},onChange:()=>{},showInCashInfo:!0,showPartialNextSlide:!0,auto:!0,slidesPerView:2,interval:5e3,transitionDuration:400,gutter:2,productTitleAs:"h2",imageAltPrefix:"",imgLazyLoading:!0,showControls:!0,showArrowControls:!1,showRating:!0,enableHover:!0,showPreview:!1,showDiscount:!1,showDiscountOnlyCashInfo:!1,previewAction:()=>{}}},98284:function(a,b,c){c.d(b,{Z:function(){return C}});var d=c(7896),e=c(31461),f=c(2784),g=c(79957),h=c(99673),i=c(34490),j=c(91489),k=c(68054),l=c(19527),m=c(84546),n=c(78012);let o=({displayMode:a})=>{let b={gallery:h.iv`
      grid-template-columns: 1fr 1fr;
      ${(0,j.aK)("small")} {
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      }
    `,list:h.iv`
      grid-template-columns: 1fr;
    `,miniature:h.iv`
      grid-template-columns: 1fr 1fr 1fr;
      ${(0,j.aK)("small")} {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      }
    `};return b[a]},p=(0,h.ZP)(l.Z).attrs(a=>Object.assign({fontSize:[1,2,2,2],py:3,px:2,color:"text.scratched",borderRadius:"medium",bg:"transparent",textAlign:["center","left","left","left"],boxShadow:[4,"none","none","none"]},a))`
  min-width: 280px;
  margin: 0 auto;
  border-radius: 4px;
  transition: width 0.2s ease;
  word-break: break-word;

  ${k.AF}
  ${j.$_}
  ${k.Dh}
  ${k.cp}
`,q=h.ZP.h1.attrs(a=>Object.assign({fontSize:[3,5,5,5],fontWeight:"regular"},a))`
  text-align: center;
  color: ${a=>(0,j.uu)("base")(a)};
  line-height: normal;
  margin-bottom: 18px;
  span {
    color: ${a=>(0,j.ow)("primary.base")(a)};
    display: inline-flex;
    word-wrap: break-word;
    overflow: hidden;
    max-height: 2.4em;
    line-height: 1.2em;
  }

  ${(0,j.aK)("small")} {
    text-align: left;
  }

  ${k.cp}
`,r=h.ZP.span.attrs(()=>({mr:3}))`
  display: none;

  ${(0,j.aK)("small")} {
    display: block;
  }

  ${k.Dh}
`,s=(0,h.ZP)(i.olm).attrs(a=>Object.assign({width:60,height:60,color:"primary.base"},a))`
  ${j.$_}
`,t=(0,h.ZP)(m.Z).attrs(a=>Object.assign({boxShadow:[4,4,"unset","unset"],borderRadius:"medium"},a))`
  margin: 0;
  overflow: hidden;
  transition: width 0.2s ease;
`,u=(0,h.ZP)(n.Z).attrs(a=>Object.assign({gridGap:["2px","1px","1px"]},a))`
  ${({displayMode:a})=>o({displayMode:a})}
  ${k.eC}
`,v=(0,h.ZP)(u.Action).attrs(()=>({fontWeight:"regular",color:"background.primary",fill:"background.primary"}))`
  border-top: ${(0,j.R)("borders.0")};
`,w=h.ZP.li`
  list-style: none;
  ${(0,j.aK)("small")} {
    margin: ${a=>(0,j.R)("space.2")(a)}px 0px;
  }
  > * {
    min-height: 100%;
  }
`,x=({message:a,messageSecondary:b})=>f.createElement(p,{"data-testid":"product-list-empty"},f.createElement(r,null,f.createElement(s,null)),f.createElement("div",null,f.createElement(q,null,a),b||""));x.defaultProps={messageSecondary:"",message:""};var y=x,z=c(66228),A=c(12468);let B=(0,f.forwardRef)(function(a,b){var c;let{hidePriceButtonAction:h,lazyLoadingOffset:i,onClickLoadMore:j,imgLazyLoading:k,showInCashInfo:l,showDiscount:m,showDiscountOnlyCashInfo:n,imageAltPrefix:o,imageWidth:p,imageHeight:q,onClickWishBtn:r,previewAction:s,showFullListBtn:x,enableShadow:B,displayMode:C,enableHover:D,showPreview:E,showWishBtn:F,showMoreBtn:G,hidePrice:H,notFound:I,onClick:J,onProductView:K,partial:L,titleAs:M,domain:N,jsonLD:O,allowEmptyRating:P,data:Q,gridGap:R}=a,S=(0,e.Z)(a,["hidePriceButtonAction","lazyLoadingOffset","onClickLoadMore","imgLazyLoading","showInCashInfo","showDiscount","showDiscountOnlyCashInfo","imageAltPrefix","imageWidth","imageHeight","onClickWishBtn","previewAction","showFullListBtn","enableShadow","displayMode","enableHover","showPreview","showWishBtn","showMoreBtn","hidePrice","notFound","onClick","onProductView","partial","titleAs","domain","jsonLD","allowEmptyRating","data","gridGap"]);null!==(c=b)&& void 0!==c||(b=(0,f.useRef)(null));let[T,U]=(0,f.useState)(0),[V,W]=(0,f.useState)(Boolean(L));if(f.useEffect(()=>{var a;return null!=(a=b)&&a.current&&U(b.current.clientWidth),W(Boolean(L)),()=>W(!1)},[L]),I)return f.createElement(y,I);let X=null==Q?void 0:Q.map((a,b)=>f.createElement(w,{key:`product-item-${b}`},f.createElement(g.Z,(0,d.Z)({key:`product-${a.variationId||a.id}-${b}`,hidePriceButtonAction:h,lazyLoadingOffset:i,imgLazyLoading:k,showInCashInfo:l,imageAltPrefix:o,imageWidth:p,imageHeight:q,enableShadow:B,displayMode:C,domain:N,enableHover:D,showPreview:E,showWishBtn:F,hidePrice:H,onClick:J,onView:K,titleAs:M,index:b,showDiscount:m,showDiscountOnlyCashInfo:n,onClickWishBtn:(b,c,d)=>r(b,c,d,a),previewAction:()=>s(a),allowEmptyRating:P,containerWidth:T},a)))),Y=x?{label:A.dz,props:A.Bl}:{label:A.K9,props:A.Uh};return f.createElement(t,(0,d.Z)({ref:b,"data-testid":"product-list"},S),f.createElement(u,(0,d.Z)({},L&&!x&&{collapse:!0,trigger:V,collapsedIn:L},{variant:"light",displayMode:C,gridGap:R,renderAction:(V||x||G)&&L<Q.length&&f.createElement(v,(0,d.Z)({onClick:()=>{j(),W(!V)}},Y.props),Y.label)}),X),O&&Q&&f.createElement(z.ZP,{schema:Q.filter(a=>{var b;return null==(b=a.price)?void 0:b.price}).map(a=>(0,z.Iy)({product:a,isList:!0},N)),type:"ItemList"}))});B.defaultProps={hidePriceButtonAction:null,showFullListBtn:!1,displayMode:"gallery",domain:A.RW,lazyLoadingOffset:50,showInCashInfo:!0,imgLazyLoading:!0,showWishBtn:!1,showPreview:!1,showMoreBtn:!1,imageAltPrefix:"",hidePrice:!1,showDiscountOnlyCashInfo:!1,showDiscount:!1,titleAs:"h2",jsonLD:!0,partial:0,allowEmptyRating:!1,onClickLoadMore:()=>{},onClickWishBtn:()=>{},previewAction:()=>{},onClick:()=>{},onProductView:()=>{}};var C=B},79534:function(a,b,c){c.d(b,{Z:function(){return p}});var d=c(31461),e=c(2784),f=c(47560),g=c(63092),h=c(99673),i=c(91489),j=c(63825),k=c(84546);let l=(0,h.ZP)(k.Z)`
  padding-bottom: ${(0,i.R)("space.2")}px;
`;function m(a){var b=n(a,"string");return"symbol"==typeof b?b:String(b)}function n(a,b){if("object"!=typeof a||null===a)return a;var c=a[Symbol.toPrimitive];if(void 0!==c){var d=c.call(a,b||"default");if("object"!=typeof d)return d;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===b?String:Number)(a)}function o({agreedError:a,agreedLabel:b,buttonLabel:c,onSubmit:h,ratingError:i,ratingLabel:j,recommendedError:k,recommendedLabel:n,reviewCharacteristics:o,minTextSize:p,textError:q,textLabel:r,textPlaceholder:s,titleError:t,titleLabel:u,titlePlaceholder:v,focus:w}){let[x,y]=(0,e.useState)(!1),[z,A]=(0,e.useState)(""),[B,C]=(0,e.useState)(""),[D,E]=(0,e.useState)(""),[F,G]=(0,e.useState)(""),[H,I]=(0,e.useState)(o||[]),[J,K]=(0,e.useState)({}),L=Object.assign({rating:(0,e.useRef)(),title:(0,e.useRef)(),text:(0,e.useRef)(),recommended:(0,e.useRef)()},H.reduce((a,{id:b})=>Object.assign({},a,{[b]:(0,e.useRef)()}),{}),{agreed:(0,e.useRef)()}),M=(0,e.useCallback)((a,b,c=w)=>{K(e=>{let f=(0,d.Z)(e,[a].map(m)),g=Object.assign({},f,b),h=Object.keys(g);if(c&&h.includes(a)&&b){let{current:i}=L[h[0]];window.scroll({top:i.offsetTop-35,left:0,behavior:"smooth"})}return g})},[J]),N=(0,e.useCallback)((a,b,c,d,e)=>{let f=a.length<c?{[b]:d}:void 0;return M(b,f,e),f},[B,D,F,z,H,x]),O=(0,e.useCallback)((a,b,c,d)=>{let e=a?void 0:{[b]:c};return M(b,e,d),e},[B,D,F,z,H,x]),P=(0,e.useCallback)(()=>{C(""),E(""),G(""),A(""),y(!1),I(o.map(a=>(0,d.Z)(a,["value"])))},[o]),Q=(0,e.useCallback)(b=>{let c=Object.assign({},O(B,"rating",i),O(D,"title",t),N(F,"text",p,q),O(z,"recommended",k),H.reduce((a,b)=>Object.assign({},a,O(b.value,b.id,i)),{}),O(x,"agreed",a));Object.keys(c).length||h({rating:B,title:D,text:F,recommended:z,characteristics:H},P),b.preventDefault()},[B,D,F,z,x,H]);return e.createElement(f.xu,{as:"form","data-testid":"review-form"},e.createElement(l,null,e.createElement(g.qr,{onChange:a=>{O(a.target.value,"rating",i,!1),C(a.target.value)},ref:L.rating,value:B,error:J.rating,type:"rating",label:j,height:[40,30],width:[40,30],gap:[0,30],fontSize:[4,2],fontWeight:["bold","regular"],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"]})),e.createElement(l,null,e.createElement(g.qr,{onChange:a=>E(a.target.value),onFocus:()=>K(a=>(0,d.Z)(a,["title"])),onBlur:a=>O(a.target.value,"title",t,!1),ref:L.title,value:D,error:J.title,type:"text",label:u,placeholder:v,gap:[0,30],flexDirection:["column","row"],textAlign:["left","right"]})),e.createElement(l,null,e.createElement(g.qr,{onChange:a=>G(a.target.value),onFocus:()=>K(a=>(0,d.Z)(a,["text"])),onBlur:a=>N(a.target.value,"text",50,q,!1),ref:L.text,value:F,error:J.text,type:"textarea",label:r,gap:[0,30],flexDirection:["column","row"],textAlign:["left","right"],placeholder:s})),e.createElement(l,{borderBottomWidth:["1px","0px"],borderBottomStyle:"solid",borderColor:"lightSilver"},e.createElement(g.qr,{onChange:a=>{O(a.target.value,"recommended",k,!1),A(a.target.value)},ref:L.recommended,value:z,error:J.recommended,type:"recommendation",label:n,gap:[0,30],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"]})),null==H?void 0:H.map(({id:a,label:b,value:c})=>e.createElement(l,{key:a,borderBottomWidth:["1px","0px"],borderBottomStyle:"solid",borderColor:"lightSilver"},e.createElement(g.qr,{onChange:b=>{O(b.target.value,a,i,!1),I(H.map(c=>c.id===a?Object.assign({},c,{value:b.target.value}):c))},ref:L[a],value:c,error:J[a],label:b,type:"rating",height:[30,24],width:[30,24],gap:[0,30],flexDirection:["column","row"],alignItems:"center",textAlign:["center","right"]}))),e.createElement(f.kC,{m:20,flexDirection:["column","row"],gap:[0,30]},e.createElement(f.kC,{flex:"0.75"}),e.createElement(f.kC,{flex:"1",gap:"2",alignItems:["center","start"],justifyContent:"space-evenly",flexDirection:"column"},e.createElement(f.XZ,{ref:L.agreed,checked:x,onChange:b=>{O(b.target.checked,"agreed",a,!1),y(b.target.checked)}},b),J.agreed&&e.createElement(f.xv,{color:"error.base"},J.agreed))),e.createElement(f.kC,{mY:20,flexDirection:["column","row"],gap:[0,30]},e.createElement(f.kC,{flex:"0.75"}),e.createElement(f.kC,{flex:"1",gap:"2",alignItems:["center","start"],justifyContent:"space-evenly",flexDirection:"column"},e.createElement(f.zx,{onClick:Q,full:!0},c))))}(0,h.ZP)(j.Z)`
  text-decoration: underline;
  cursor: pointer;
`,o.defaultProps={agreedError:"Por favor verifique os termos.",agreedLabel:"Concordo com os termos e condi\xe7\xf5es",buttonLabel:"Enviar avalia\xe7\xe3o",ratingError:"Clique nas estrelas para classificar!",ratingLabel:"Avalia\xe7\xe3o Geral",recommendedError:"Por favor selecione uma op\xe7\xe3o.",recommendedLabel:"Voc\xea recomenda esse produto?",minTextSize:50,textError:"M\xednimo de 50 caracteres.",textLabel:"Avalia\xe7\xe3o",titleError:"Insira o t\xedtulo completo corretamente.",titleLabel:"T\xedtulo da avalia\xe7\xe3o",titlePlaceholder:"Ex. Produto Maravilhoso",textPlaceholder:"Ex: Escreva exclusivamente sobre o produto. Para sugest\xf5es, reclama\xe7\xf5es ou problemas em geral, acesse nossa Central de Atendimento",focus:!0};var p=o},4506:function(a,b,c){c.d(b,{Z:function(){return s}});var d=c(2784),e=c(34490),f=c(99673),g=c(91489),h=c(19527),i=c(84546),j=c(63825);let k=(0,f.ZP)(h.Z)`
  display: flex;
  justify-content: center;
  align-items: center;
`,l=(0,f.ZP)(h.Z)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    align-items: center;
  }
`,m=(0,f.ZP)(j.Z)`
  font-weight: ${a=>(0,g.R)("fontWeights.bold")(a)};
  font-size: ${a=>(0,g.R)("fontSizes.7")(a)}px;
`,n=(0,f.ZP)(j.Z)`
  font-size: ${a=>(0,g.R)("fontSizes.0")(a)}px;
  color: ${a=>(0,g.uu)("light")(a)};
`,o=(0,f.ZP)(i.Z)`
  border-left: 3px solid ${a=>(0,g.kJ)("light")(a)};
  height: 90px;
  margin: 0px 24px;
`;var p=c(60861),q=c(63092);function r({average:a,count:b,distribution:c,actionLabel:f,onReviewButtonClick:g}){let h=b>1?`${b} avalia\xe7\xf5es`:`${b} avalia\xe7\xe3o`;return c.sort((a,b)=>b.value-a.value),d.createElement(d.Fragment,null,d.createElement(k,{mb:[3,3,3]},d.createElement(l,null,d.createElement("div",null,d.createElement(m,{"data-testid":"stat-score"},a.toFixed(1)),d.createElement(e.Uxw,{width:"50px",height:"50px",color:"#FFCC03"})),d.createElement(n,{"data-testid":"stat-desc"},h)),d.createElement(o,null),d.createElement("ul",null,null==c?void 0:c.map(a=>d.createElement(q.me,{key:a.value,id:a.value,score:a.count,count:a.count,max:b})))),!!f&&d.createElement(p.Z,{full:!0,variation:"fill",size:"medium",color:"primary",onClick:d=>g(d,{average:a,distribution:c,desc:h,total:b})},f))}r.defaultProps={actionLabel:"Quero avaliar",average:0,count:0,distribution:[],onReviewButtonClick:()=>({})};var s=r},30143:function(a,b,c){c.d(b,{Z:function(){return G}});var d=c(7896),e=c(31461),f=c(2784),g=c(25164),h=c(47560),i=c(99673),j=c(91489),k=c(34490),l=c(63825);let m=(0,i.ZP)(l.Z)`
  color: ${a=>(0,j.uu)("scratched")(a)};
  font-size: ${a=>(0,j.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,j.R)("fontWeights.regular")(a)};
  margin-right: 4px;
  height: 20px;
`,n=i.ZP.label`
  color: ${a=>(0,j.uu)("base")(a)};
  font-size: ${a=>(0,j.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,j.R)("fontWeights.bold")(a)};
  text-decoration: ${({disableClick:a})=>a?"none":"underline"};
  cursor: ${({disableClick:a})=>a?"default":"pointer"};
`,o=i.ZP.a`
  cursor: pointer;

  svg {
    vertical-align: middle;
  }
`,p=(0,i.ZP)(k.ZGh).attrs(a=>({color:`${a.logoIconColor||(0,j.ow)("base")(a)}`,width:60,height:14,viewBox:"0 0 60 14"}))`
  vertical-align: middle;
  margin-top: 4px;
`,q=i.ZP.div`
  padding: 15px 15px;
`,r=(0,i.ZP)(l.Z)`
  font-size: ${a=>(0,j.R)("fontSizes.5")(a)}px;
  font-weight: ${a=>(0,j.R)("fontWeights.bold")(a)};
`,s=i.ZP.a`
  height: 20px;
  display: flex;
  align-items: center;
  margin: 28px 0;
  text-decoration: none;
  font-size: ${a=>(0,j.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,j.R)("fontWeights.medium")(a)};
  color: ${a=>(0,j.uu)("primary")(a)};
  cursor: pointer;
`,t=(0,i.ZP)(k._Qn).attrs(a=>({color:(0,j.uu)("primary")(a)}))`
  vertical-align: middle;
  width: 20px;
  height: 20px;
`,u=i.ZP.div`
  margin: 0 0 15px;
`,v=(0,i.ZP)(l.Z)`
  font-size: ${a=>(0,j.R)("fontSizes.3")(a)}px;
  font-weight: ${a=>(0,j.R)("fontWeights.bold")(a)};
  padding: 0 0 5px;
`,w=i.ZP.p`
  font-size: ${a=>(0,j.R)("fontSizes.2")(a)}px;
  color: ${a=>(0,j.uu)("greyish")(a)};
  padding: 0 0 5px;
`,x=a=>{let{id:b,delivery:c,handleLabelName:d}=a,g=(0,e.Z)(a,["id","delivery","handleLabelName"]);return c||b?c&&(null==b?void 0:b.toUpperCase())!==(null==c?void 0:c.toUpperCase())?f.createElement(h.xu,g,f.createElement(m,{"data-testid":"label"},"Vendido por ",d(b)),f.createElement(m,{"data-testid":"label"},"Entregue por ",d(c))):f.createElement(h.xu,g,f.createElement(m,{"data-testid":"label"},"Vendido e entregue por ",d(c))):null};x.defaultProps={id:"magazineluiza",delivery:"magazineluiza",handleLabelName:()=>{}};var y=x;let z=a=>{let{address:b,number:c,district:d,city:e,state:f,zipcode:g}=a,h=[];return b&&c&&h.push(`${b}, ${c}`),e&&f&&h.push(`${d?`${d} - `:""}${e}/${f}`),g&&h.push(`CEP: ${g}`),h},A=({seller:a,onOffersClick:b})=>{let{id:c,description:d,deliveryId:e,details:g,href:h}=a,i=z((null==g?void 0:g.address)||{}),j=[(null==g?void 0:g.legalName)&&{label:"Raz\xe3o Social",id:"legalName",value:null==g?void 0:g.legalName},(null==g?void 0:g.documentNumber)&&{label:"CNPJ",id:"documentNumber",value:null==g?void 0:g.documentNumber},i.length&&{label:"Endere\xe7o",id:"address",value:z(null==g?void 0:g.address)}];return f.createElement(q,null,f.createElement(r,null,d),f.createElement(s,{href:h,onClick:a=>b(a,{id:c,delivery:e}),"data-testid":"offers-link"},"Veja todas as ofertas dessa loja ",f.createElement(t,null)),j.map((a,b)=>f.createElement(u,{key:`seller-detail-${b}`,"data-testid":"details"},f.createElement(v,null,null==a?void 0:a.label),Array.isArray(null==a?void 0:a.value)?null==a?void 0:a.value.map(a=>f.createElement(w,{"data-testid":"details-value",key:`seller-value-${a}`},a)):f.createElement(w,null,null==a?void 0:a.value))))};A.defaultProps={seller:{id:"magazineluiza",deliveryId:"magazineluiza",description:"Magalu",details:{}},onOffersClick:()=>{}};var B=A,C={zattini:{id:"zattini",logo:k.fOR},netshoes:{id:"netshoes",logo:k.fOD},kabum:{id:"kabum",logo:k.M0M},"epocacosmeticos-integra":{id:"epoca",logo:k.uE5}},D=c(12468),E=c(83179);let F=a=>{let{showSellerDetailContent:b,onCloseModalContent:c,seller:i,onSellerClick:j,onOffersClick:k,disableSellerClick:l,disableSellerDetails:m,logoIconColor:q,showDialog:r,modal:s}=a,t=(0,e.Z)(a,["showSellerDetailContent","onCloseModalContent","seller","onSellerClick","onOffersClick","disableSellerClick","disableSellerDetails","logoIconColor","showDialog","modal"]),{id:u,description:v,deliveryId:w}=i,[x,z]=(0,f.useState)(b),A=a=>{j(a,{id:u,delivery:w}),z(!m)},F=()=>{z(!1),c()};f.useEffect(()=>{z(b)},[b]);let G=a=>{if(a===D.ig)return f.createElement(p,{title:"Logo magalu","data-testid":"magalogo",logoIconColor:q});if(C[a]){let{id:b,logo:c}=C[a];return f.createElement(o,{title:`Logo ${b}`,"data-testid":`${b}logo`,children:f.createElement(c,{preserveAspectRatio:!0}),onClick:l?null:A})}return f.createElement(n,{onClick:l?null:A,disableClick:l,children:v||w,"data-testid":"link"})};return f.createElement(f.Fragment,null,f.createElement(y,(0,d.Z)({id:u,delivery:w,handleLabelName:G},t)),!l&&!r&&f.createElement(g.YE,{direction:"right",visible:x,onClickOutside:F,fullScreen:!0,portal:!0},f.createElement(E.Z,{label:s.title||"Informa\xe7\xf5es da loja parceira",align:"left",leftButton:{icon:"back",title:"Voltar para a pagina do produto",onClick:F}}),s.content||f.createElement(B,{seller:i,onOffersClick:k})),!l&&!m&&r&&f.createElement(h.Vq,{visible:x,onClickOutside:F,position:"center",type:"responsive",showClose:!0,title:s.title,titleStyle:s.titleStyle},s.content||f.createElement(B,{seller:i,onOffersClick:k})))};F.defaultProps={seller:{id:"magazineluiza",deliveryId:"magazineluiza",description:"Magalu"},onSellerClick:()=>{},onOffersClick:()=>{},disableSellerClick:!1,onCloseModalContent:()=>({}),showSellerDetailContent:!1,disableSellerDetails:!1,logoIconColor:"",showDialog:!1,modal:{title:""}};var G=F},2334:function(a,b,c){c.d(b,{Z:function(){return i}});var d=c(31461),e=c(2784),f=c(63092),g=c(47560);let h=a=>{let{items:b}=a,c=(0,d.Z)(a,["items"]);return e.createElement(g.xu,c,b.map((a,b)=>e.createElement(g.xu,{key:`shipping-item-${b}`},!!b&&e.createElement(g.bo,null),e.createElement(f.KI,a))))};h.defaultProps={items:[]};var i=h},34958:function(a,b,c){c.d(b,{Z:function(){return P}});var d=c(7896),e=c(31461),f=c(2784),g=c(99673),h=c(68054),i=c(91489),j=c(19527),k=c(63825),l=c(27439);let m=g.iv`
  color: ${a=>(0,i.uu)("base")(a)};
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-width: 97%;
`,n={miniature:g.iv`
    display: grid;
    padding: 8px 2px;
  `,list:g.iv`
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 16px;
  `,gallery:g.iv``,none:g.iv`
    display: contents;
  `,button:g.iv`
    display: block;
    padding: 16px 16px 6px;
  `},o={miniature:g.iv`
    height: 20vw;
    justify-content: flex-end;
    & > span {
      display: block;
      width: 100%;
      height: 100%;
    }
  `,list:g.iv`
    justify-content: flex-start;
    padding-top: 4px;
    min-height: 25vw;
  `,gallery:g.iv`
    height: 32vw;
    justify-content: flex-end;
    & > span {
      display: block;
      width: 100%;
      height: 100%;
    }
  `},p=(0,g.ZP)(l.ZP)`
  background-color: ${a=>(0,i.ow)("background.lighter")(a)};
  padding: 0;
  ${({displayMode:a})=>a&&n[a]}
`,q=g.ZP.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: ${a=>(0,i.R)("space.2")(a)}px;
  ${({displayMode:a})=>a&&o[a]}
`,r=g.ZP.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  ${({highlight:a,highlightType:b,sponsored:c})=>a&&!b?g.iv`
          margin: ${(0,i.R)("space.0")}px ${(0,i.R)("space.2")}px;
        `:g.iv`
          margin-bottom: ${c?(0,i.R)("space.2"):(0,i.R)("space.3")}px;
        `};
`,s=(0,g.ZP)(k.Z).attrs(({highlight:a,fontSize:b})=>({fontSize:null!=b?b:[a?1:2,4,5],lineHeight:"display",fontWeight:"medium"}))`
  ${m}
  ${h.cp}

  & > span {
    font-weight: ${a=>(0,i.R)("fontWeights.bold")(a)};
  }
`,t=g.ZP.h2`
  ${m}
  height: 32px;
  line-height: ${a=>(0,i.R)("lineHeights.plus")(a)}px;
  font-size: ${a=>(0,i.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,i.R)("fontWeights.regular")(a)};
  margin: 0 0 4px 0;
`,u=g.ZP.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`,v=(0,g.ZP)(k.Z).attrs(()=>({fontSize:[1,4,5],lineHeight:"display",fontWeight:"regular"}))`
  ${m}
  ${h.cp}
`,w=g.ZP.div`
  display: grid;
`,x=g.ZP.div`
  box-shadow: ${({exhibition:a})=>"highlight"===a?"0 4px 10px 0 rgba(0, 0, 0, 0.11)":"unset"};
  border-radius: ${({exhibition:a})=>"highlight"===a&&"4px"};
  overflow: hidden;
  ${h.Dh}
  ${h.$_}
  ${h.bK}
  ${h.Cg}
`,y=(0,g.ZP)(j.Z)`
  flex: 1;
  flex: 0 0 calc(100% / 4);
  border-right: ${(0,i.R)("borders.0")};
  border-width: 2px;
`,z=(0,g.ZP)(k.Z).attrs(()=>({fontSize:0,color:"light",marginTop:1}))``;var A=c(98284);let B=({title:a,titleAs:b,titleSize:c,highlightType:d,showSponsoredSubTitle:e})=>{let[g,h="",i=""]=a.split('"'),j=i.replace(", ","");return f.createElement(r,{highlight:h,highlightType:d,sponsored:e},d?f.createElement(s,{as:b,fontSize:c,"data-testid":"product-title-head"},g," ",f.createElement("span",null,h)," ",j):f.createElement(f.Fragment,null,f.createElement(s,{as:b,fontSize:c,highlight:h,"data-testid":"product-title-head"},g),!!h&&f.createElement(v,{as:b,fontSize:c,"data-testid":"text-highlight"},h),!!j&&f.createElement(s,{as:b,fontSize:c,"data-testid":"text-suffix"},j)),e&&f.createElement(z,{"data-testid":"sponsored-tag"},"Patrocinados"))};B.defaultProps={title:"",titleAs:"h2",highlightType:!1,showSponsoredSubTitle:!1};var C=B;let D=a=>{let{data:b,title:c,titleAs:g,titleSize:h,imageAltPrefix:i,productTitleAs:j,showDiscountOnlyCashInfo:k,showDiscount:l}=a,m=(0,e.Z)(a,["data","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showDiscountOnlyCashInfo","showDiscount"]);return f.createElement(f.Fragment,null,f.createElement(C,{title:c,titleSize:h,titleAs:g}),f.createElement(A.Z,(0,d.Z)({data:b,displayMode:"list",enableShadow:!1,exhibition:"rank",imageAltPrefix:i,titleAs:j,showInCashInfo:!0,showDiscountOnlyCashInfo:k,showDiscount:l},m)))},E=a=>{let{data:b,title:c,titleAs:g,titleSize:h,imageAltPrefix:i,productTitleAs:j,showFullListBtn:k,showMoreBtn:l,onClickLoadMore:m,showDiscountOnlyCashInfo:n,showDiscount:o,showSponsoredSubTitle:p}=a,q=(0,e.Z)(a,["data","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showFullListBtn","showMoreBtn","onClickLoadMore","showDiscountOnlyCashInfo","showDiscount","showSponsoredSubTitle"]);return f.createElement(f.Fragment,null,f.createElement(C,{title:c,titleSize:h,titleAs:g,showSponsoredSubTitle:p}),f.createElement(A.Z,(0,d.Z)({data:b,displayMode:"gallery",enableShadow:!1,exhibition:"list",imageAltPrefix:i,titleAs:j,showFullListBtn:k,showMoreBtn:l,onClickLoadMore:m,showInCashInfo:!0,showDiscount:o,showDiscountOnlyCashInfo:n},q)))};var F=c(7029);let G=a=>{let{data:b,highlight:c,title:g,titleAs:h,titleSize:i,imageAltPrefix:j,productTitleAs:k,showDiscount:l,showDiscountOnlyCashInfo:m}=a,n=(0,e.Z)(a,["data","highlight","title","titleAs","titleSize","imageAltPrefix","productTitleAs","showDiscount","showDiscountOnlyCashInfo"]),o=j?`${j}${c.title}`:c.title;return f.createElement(f.Fragment,null,f.createElement(p,{as:"div",displayMode:"list","data-testid":"product-card-container",hideLinkBorder:!1},f.createElement(q,{displayMode:"list"},f.createElement(F.Z,{src:c.image,alt:o,lazy:!0,offset:2})),f.createElement(w,{displayMode:"gallery","data-testid":"product-card-content"},f.createElement(C,{title:g,titleAs:h,titleSize:i}))),f.createElement(A.Z,(0,d.Z)({data:b,displayMode:"gallery",enableShadow:!1,exhibition:"highlight",imageAltPrefix:j,titleAs:k,showInCashInfo:!0,showDiscountOnlyCashInfo:m,showDiscount:l},n)))};var H=c(34490),I=c(47560);let J=({data:a,button:b,title:c,titleAs:d,titleSize:e,imageAltPrefix:g,productTitleAs:h,onClick:i})=>{let[j]=a,k=g?`${g}${j.title}`:null==j?void 0:j.title;return f.createElement(p,{displayMode:"button","data-testid":"product-card-container",hideLinkBorder:!1,as:"div"},f.createElement(C,{title:c,titleAs:d,titleSize:e}),f.createElement(u,null,f.createElement(q,{displayMode:"list"},f.createElement(F.Z,{src:null==j?void 0:j.image,alt:k,lazy:!0,offset:2})),f.createElement(w,{displayMode:"none","data-testid":"product-card-content"},f.createElement(r,{as:h},f.createElement(t,null,null==j?void 0:j.title)))),f.createElement(I.zx,{"data-testid":"showcase-button",onClick:a=>i(a,j),color:"secondary",startIcon:f.createElement(H.tuM,{width:32,height:32}),m:"10px 0",full:!0},(null==b?void 0:b.label)||"RETOMAR SUA COMPRA"))};var K=c(4720),L=c(79957);let M=a=>{let{title:b,titleAs:c,titleSize:g,data:h,highlight:i,slidesPerView:k,showDiscount:l,showDiscountOnlyCashInfo:m,showSponsoredSubTitle:n}=a,o=(0,e.Z)(a,["title","titleAs","titleSize","data","highlight","slidesPerView","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle"]);return f.createElement(f.Fragment,null,f.createElement(C,{title:b,titleAs:c,titleSize:g,highlightType:!!i,showSponsoredSubTitle:n}),f.createElement(j.Z,null,i&&f.createElement(y,{slidesPerView:k},f.createElement(L.Z,(0,d.Z)({},i,{displayMode:"gallery",showInCashInfo:!0,titleAs:"h3",fullHeight:!0,imageAltPrefix:"",imgLazyLoading:!0,imageWidth:o.imageWidth,imageHeight:o.imageHeight,showRating:!1,showDiscountOnlyCashInfo:m,showDiscount:l,key:`product-hightlight${i.variationId||i.id}`,enableHover:!0}))),f.createElement(K.Z,(0,d.Z)({products:h,slidesPerView:i?k-1:k,enableHover:!i,showDiscountOnlyCashInfo:m,showDiscount:l},o))))};M.defaultProps={slidesPerView:4};var N={rank:D,list:E,highlight:G,button:J,carousel:M};let O=(0,f.forwardRef)((a,b)=>{var c;let{data:g,onClick:h,onProductView:i,jsonLD:j,exhibition:k,titleAs:l,titleSize:m,imageAltPrefix:n,productTitleAs:o,showFullListBtn:p,showMoreBtn:q,onClickLoadMore:r,showInCashInfo:s,showDiscount:t,showDiscountOnlyCashInfo:u,showSponsoredSubTitle:v}=a,w=(0,e.Z)(a,["data","onClick","onProductView","jsonLD","exhibition","titleAs","titleSize","imageAltPrefix","productTitleAs","showFullListBtn","showMoreBtn","onClickLoadMore","showInCashInfo","showDiscount","showDiscountOnlyCashInfo","showSponsoredSubTitle"]);null!==(c=b)&& void 0!==c||(b=(0,f.useRef)(null));let y=void 0===N[k]?N.rank:N[k];return f.createElement(x,(0,d.Z)({ref:b,exhibition:k},w),f.createElement(y,(0,d.Z)({data:g.products,title:g.title,highlight:g.highlight,button:g.button,onClick:h,onProductView:i,jsonLD:j,titleAs:l,titleSize:m,productTitleAs:o,imageAltPrefix:n,showFullListBtn:p,showMoreBtn:q,onClickLoadMore:r,showInCashInfo:s,showDiscount:t,showDiscountOnlyCashInfo:u,showSponsoredSubTitle:v},w)))});O.defaultProps={data:{title:null,products:[]},onClick:()=>!1,onProductView:()=>{},exhibition:"rank",jsonLD:!0,titleAs:"h2",productTitleAs:"h3",imageAltPrefix:"",showFullListBtn:!1,showMoreBtn:!1,showInCashInfo:!0,showDiscount:!1,showDiscountOnlyCashInfo:!1,showSponsoredSubTitle:!1},O.displayName="Showcase";var P=O},83179:function(a,b,c){c.d(b,{Z:function(){return r}});var d=c(7896),e=c(31461),f=c(2784),g=c(34490),h=c(99673),i=c(91489),j=c(68054),k=c(63825);let l={left:h.iv`
    grid-template-columns: auto repeat(1, auto) 1fr;
  `,right:h.iv`
    grid-template-columns: 1fr repeat(1, auto) auto;
  `,default:h.iv`
    grid-template-columns: 1fr repeat(1, auto) 1fr;
  `},m=(0,h.ZP)(k.Z)`
  align-self: center;
  font-weight: 500;
`,n=h.ZP.div`
  margin-right: auto;
`,o=h.ZP.div`
  display: grid;
  ${a=>l[null==a?void 0:a.align]||l.default}
  gap: 0 10px;
  padding: 20px 16px;
  border-bottom: 1px solid ${a=>(0,i.dF)("darker")(a)};
  ${j.Dh}
  ${j.$_}
  ${j.bK}
  ${j.Cg}
  ${j.J4}
  ${j.$u}
`,p={close:g.x8P,back:g.xhZ},q=a=>{let{label:b,align:c,fontSize:g,leftButton:h,showCloseButton:i}=a,j=(0,e.Z)(a,["label","align","fontSize","leftButton","showCloseButton"]),{icon:k,title:l,onClick:q,iconColor:r="#8c8c8c"}=h,s=p[k||"close"];return f.createElement(o,(0,d.Z)({},j,{align:c,"data-testid":"sidebar-header"}),f.createElement(n,null,i&&f.createElement(s,{color:r,role:"button",title:l,"data-testid":`${k}-button`,onClick:q})),f.createElement(m,(0,d.Z)({fontSize:g},j,{"data-testid":"title"}),b))};q.defaultProps={align:"center",fontSize:1,leftButton:{icon:"close",onClick:()=>{}},showCloseButton:!0};var r=q},70615:function(a,b,c){c.d(b,{"$":function(){return s.Z},Z:function(){return y}});var d=c(7896),e=c(31461),f=c(2784),g=c(39879),h=c(99673),i=c(68054),j=c(91489),k=c(81572),l=c(84546);let m={left:h.iv`
    left: 0;
    transform: ${({visible:a})=>a?"translateX(0)":"translateX(-100%)"};
  `,right:h.iv`
    right: 0;
    transform: ${({visible:a})=>a?"translateX(0)":"translateX(100%)"};
  `},n=h.ZP.aside`
  z-index: ${a=>(0,j.R)("zIndices.2")(a)};
  visibility: ${({visible:a})=>a?"visible":"hidden"};
`,o=(0,h.ZP)(k.Z).attrs(a=>({borderBottom:`1px solid ${(0,j.dF)("darker")(a)}`}))``,p=(0,h.ZP)(l.Z).attrs(a=>{let{fullScreen:b}=a,c=(0,e.Z)(a,["visible","fullScreen"]);return{backgroundColor:(0,j.dF)((null==c?void 0:c.bg)||"lighter")(c),zIndex:(0,j.R)("zIndices.3")(c),width:b?"100%":"80%",overflowX:"hidden",position:"fixed",overflowY:"auto",textAlign:"left",display:"block",height:"100vh",top:0}})`
  ${i.$_}

  ${({direction:a})=>m[a]||m.right}
  visibility: ${({visible:a})=>a?"visible":"hidden"};
  transition: ${({timeTransition:a})=>`transform ${a}s ease-in-out`};

  /* mobile native toolbar */
  padding-bottom: 54px;
`,q=(0,h.ZP)(l.Z).attrs(a=>{let{visible:b}=a,c=(0,e.Z)(a,["visible"]);return{backgroundColor:"rgba(0, 0, 0, 0.5)",zIndex:(0,j.R)("zIndices.2")(c),opacity:Number(b),position:"fixed",bottom:0,right:0,left:0,top:0}})`
  visibility: ${({visible:a})=>a?"visible":"hidden"};
  transition: visibility 0s, opacity 0.3s linear;
`;var r=c(75851),s=c(83179),t=c(34490);let u=a=>{let{children:b,variant:c,startIcon:g,fontSize:h,fontWeight:i,textAlign:j,ariaLabel:k,fill:l,onClick:m}=a,n=(0,e.Z)(a,["children","variant","startIcon","fontSize","fontWeight","textAlign","ariaLabel","fill","onClick"]);return f.createElement(o,(0,d.Z)({variant:c,scale:"large",startIcon:g&&f.createElement(t.JO$,{name:g,"aria-label":k,fill:l,onClick:m,"data-testid":"sidebar-header-icon"}),textAlign:j,fontSize:h,fontWeight:i,"data-testid":"sidebar-header"},n),b)};u.defaultProps={children:null,variant:"transparent",startIcon:"ArrowBack",fontSize:1,fontWeight:"medium",textAlign:"center",ariaLabel:"fechar sidebar",fill:"currentColor",onClick:()=>{}};let v=a=>f.createElement(r.Z,{id:"portal-sidebar"},a),w=a=>{let{portal:b=!1}=a,c=(0,e.Z)(a,["portal"]),d=f.createElement(x,c);return b?v(d):d},x=a=>{let{children:b,visible:c,direction:h,timeTransition:i,onClickOutside:j,headerTitle:k,fullScreen:l}=a,m=(0,e.Z)(a,["children","visible","direction","timeTransition","onClickOutside","headerTitle","fullScreen"]),o=(0,f.useRef)(null);return(0,f.useEffect)(()=>{var a;let b=window.getComputedStyle(document.body).overflow;return document.body.style.overflow=c?"hidden":b,null!=o&&null!=(a=o.current)&&a.scrollTop&&(o.current.scrollTop=0),()=>{document.body.style.overflow=b}},[c]),(0,f.useEffect)(()=>{(0,g.Iq)()},[b]),f.createElement(n,{visible:c,"data-testid":"sidebar"},f.createElement(p,(0,d.Z)({forwardRef:o,visible:c,direction:h,timeTransition:i,fullScreen:l,"data-testid":"content"},m),k&&f.createElement(s.Z,{label:k,leftButton:{onClick:j}}),b),f.createElement(q,{"aria-hidden":"true",visible:c,onClick:j,"data-testid":"overlay"}))};x.defaultProps={direction:"left",timeTransition:.3,headerTitle:null,fullScreen:!1,visible:!1,onClickOutside:()=>{}},w.Header=u;var y=w},35306:function(a,b,c){c.d(b,{Z:function(){return t}});var d=c(7896),e=c(31461),f=c(2784),g=c(63092),h=c(47560),i=c(99673),j=c(91489);let k={default:i.iv`
    flex-direction: column;
    word-break: break-word;
    min-width: 280px;
  `,flex:i.iv`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    ${(0,j.aK)("small")} {
      justify-content: left;
    }
  `,inline:i.iv`
    display: inline;
    font-size: inherit;
    line-height: normal;
  `},l={flex:i.iv`
    display: inline-block;
    padding: ${(0,j.R)("space.3")}px ${(0,j.R)("space.2")}px;
    ${(0,j.aK)("small")} {
      width: 150px;
      padding: unset;
    }
  `,inline:i.iv`
    display: inline-block;
    margin-right: ${(0,j.R)("space.4")}px;
    font-size: inherit;
    & a {
      display: inline-block;
      font-size: inherit;
      line-height: normal;
    }
  `},m={default:i.iv`
    color: ${a=>(0,j.uu)("base")(a)};
    padding-bottom: ${(0,j.R)("space.3")}px;
    line-height: normal;
  `,inline:i.iv`
    display: inline-block;
    margin-right: ${(0,j.R)("space.3")}px;
    font-size: inherit;
  `},n=(0,i.ZP)(h.xu).attrs(a=>Object.assign({p:3,textAlign:"left",borderRadius:"default"},a))``,o=(0,i.ZP)(h.X6)`
  ${a=>m[a.variation]||m.default};
`,p=(0,i.ZP)(h.bo)`
  ${(0,j.aK)("small")} {
    display: none;
  }
`,q=i.ZP.ul`
  list-style-position: inside;
  display: flex;
  justify-content: space-around;
  ${a=>k[a.variation]||k.default};
`,r=(0,i.ZP)(h.xv).attrs(()=>({forwardedAs:"li",fontSize:2,color:"scratched",lineHeight:"big"}))`
  list-style-type: ${({hideListPoint:a})=>a?"none":"disc"};
  ${a=>l[a.variation]||l.default};
`,s=a=>{let{hideListPoint:b,limitListItems:c,list:i,handleClickLink:j,showAllItems:k,showMoreLabel:l,title:m,titleAs:s,typeList:t}=a,u=(0,e.Z)(a,["hideListPoint","limitListItems","list","handleClickLink","showAllItems","showMoreLabel","title","titleAs","typeList"]),[v,w]=(0,f.useState)(k),[x,y]=(0,f.useState)(i.slice(0,c)),z=()=>{w(!0),y(i)};return f.createElement(n,(0,d.Z)({"data-testid":"text-list-container"},u,{variation:t}),m&&f.createElement(f.Fragment,null,f.createElement(o,{"data-testid":"text-list-title",as:s,variation:t},m),"inline"!==t&&f.createElement(p,{variation:t})),f.createElement(q,{"data-testid":"text-list-ul",variation:t},x.map((a,d)=>f.createElement(r,{variation:t,hide:!v&&d>=c,key:d,"data-testid":"text-list-text",hideListPoint:b},f.createElement(g.g0,{data:a,handleClickLink:j})))),!v&&x.length>=c&&f.createElement(f.Fragment,null,f.createElement(p,null),f.createElement(h.ck,{fontWeight:"medium",fontSize:1,color:"text.primary",fill:"text.primary",startIcon:"ChevronDownCircle",variant:"transparent",gap:1,centered:!0,onClick:z,"data-testid":"term-list-more"},l)))};s.defaultProps={hideListPoint:!1,limitListItems:20,list:[],handleClickLink:()=>{},showAllItems:!0,showMoreLabel:"veja mais",title:null,titleAs:"h1",typeList:"default"};var t=s},41323:function(a,b,c){c.d(b,{Z:function(){return o}});var d=c(7896),e=c(31461),f=c(2784),g=c(1587),h=c(99673),i=c(91489),j=c(34490),k=c(19527);let l=(0,h.ZP)(k.Z).attrs(()=>({alignItems:"center",justifyContent:"space-between",backgroundColor:"background.primaryDark",padding:1}))``,m=(0,h.ZP)(j._Qn).attrs(a=>({color:(0,i.uu)("lightest")(a)}))``,n=a=>{let{text:b,defaultText:c,zipcode:h,state:i,city:j,onClick:k}=a,n=(0,e.Z)(a,["text","defaultText","zipcode","state","city","onClick"]);return f.createElement(l,(0,d.Z)({onClick:k,"data-testid":"container"},n),f.createElement(g.Z,{city:j,defaultText:c,state:i,text:b,zipcode:h,iconHeight:18,iconWidth:20}),f.createElement(m,null))};n.defaultProps={zipcode:void 0,state:void 0,city:void 0};var o=n},25164:function(a,b,c){c.d(b,{G4:function(){return M},jm:function(){return I},aw:function(){return S},pZ:function(){return Q},f4:function(){return ai},DH:function(){return ab},KU:function(){return ac.Z},Il:function(){return ad.Z},Ak:function(){return aC},Ym:function(){return as},fP:function(){return aD.Z},u0:function(){return aE.Z},YE:function(){return v.Z}}),c(5530),c(92877),c(36103);var d=c(31461),e=c(2784),f=c(34490),g=c(93837),h=c(68054),i=c(99673),j=c(91489),k=c(19527),l=c(8341),m=c(63825);let n=i.ZP.section`
  padding: 12px;
  border: solid 1px ${a=>(0,j.dF)("whisper")(a)};
  border-radius: 4px;
  ${h.Dh}
`,o=(0,i.ZP)(k.Z)`
  justify-content: space-between;
`,p=(0,i.ZP)(m.Z)`
  font-weight: ${a=>(0,j.R)("fontWeights.medium")(a)};
  cursor: pointer;
  text-decoration: underline;
`,q=(0,i.ZP)(m.Z)`
  font-size: ${a=>(0,j.R)("fontSizes.0")(a)}px;
  line-height: ${a=>(0,j.R)("lineHeights.input")(a)}em;
`,r=(0,i.ZP)(l.Z)`
  padding: 12px;
  border-bottom: 1px solid ${a=>(0,j.dF)("darker")(a)};
  align-items: center;
  grid-template-columns: auto 1fr;
  grid-gap: 1em;
  margin-bottom: 20px;
`,s=(0,i.ZP)(m.Z)`
  font-size: ${a=>(0,j.R)("fontSizes.2")(a)}px;
`,t=`Cart\xe3o de cr\xe9dito`;var u=c(563),v=c(70615);let w=a=>{let{plan:b,payments:c,onClick:h,onClose:i,onPaymentMethodChange:j}=a,k=(0,d.Z)(a,["plan","payments","onClick","onClose","onPaymentMethodChange"]),[l,m]=(0,e.useState)(!1),w=()=>{m(!0),h(b)},x=()=>{m(!1),i()},{paymentMethodDescription:y,totalAmount:z,quantity:A,amount:B}=b;return e.createElement(n,k,e.createElement(o,null,e.createElement("div",null,e.createElement(p,{onClick:w,role:"button","aria-hidden":!0,"aria-label":"abrir m\xe9todos de pagamento"},t),e.createElement(q,null,y)),e.createElement("div",null,e.createElement(q,{textAlign:"right"},(0,g.Z)({value:z})),e.createElement(q,{fontWeight:"500"},A,"x ",(0,g.Z)({value:B})))),e.createElement(v.Z,{visible:l,direction:"right",onClickOutside:x,"data-testid":"sidebar-payments"},e.createElement(r,null,e.createElement(f.x8P,{color:"#bcbcbc",onClick:x,role:"button",title:"fechar m\xe9todos de pagamento"}),e.createElement(s,{fontWeight:"normal"},"Formas de pagamento")),e.createElement(u.Z,{payments:c,onChange:j})))};w.defaultProps={plan:{},payments:{},onClick:()=>({}),onClose:()=>({}),onPaymentMethodChange:()=>({})},c(28426),c(63486);var x=c(7896),y=c(1729),z=c(99554),A=c(84546);let B=(0,i.ZP)(A.Z)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${a=>(0,j.dF)("lighter")(a)};
  border-bottom: 1px solid ${a=>(0,j.dF)("darker")(a)};
  border-top: 1px solid ${a=>(0,j.dF)("darker")(a)};
  padding: 14px 16px;
`,C=i.ZP.div``,D=(0,i.ZP)(m.Z)``,E=(0,i.ZP)(m.Z)`
  margin: 4px 0;
  color: ${a=>(0,j.uu)("scratched")(a)};
`,F=i.ZP.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 20px 16px;
  border-bottom: 1px solid ${a=>(0,j.dF)("darker")(a)};
  margin-bottom: 0.5em;
`,G=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,H=a=>{let{onClick:b,label:c,position:g,filterSelected:h,fullScreen:i,showFilterInput:j,onChangeFilterInput:k,onClearInput:l,children:m}=a,n=(0,d.Z)(a,["onClick","label","position","filterSelected","fullScreen","showFilterInput","onChangeFilterInput","onClearInput","children"]),[o,p]=(0,e.useState)(!1),q=()=>{p(!0),b({label:c,position:g})};return e.createElement(e.Fragment,null,e.createElement(B,(0,x.Z)({},n,{onClick:q,"data-testid":"filter-item-container"}),e.createElement(C,null,e.createElement(D,{fontSize:1,"data-testid":"filter-item-container"},c),h&&e.createElement(E,{as:"string"!=typeof h?"div":"p",fontSize:0,"data-testid":"filter-item-selected"},h)),e.createElement(C,null,e.createElement(f.olP,{width:"12px",height:"12px"}))),e.createElement(C,null,e.createElement(v.Z,{direction:"right",visible:o,onClickOutside:()=>p(!1),fullScreen:i},e.createElement(C,null,e.createElement(F,null,e.createElement(C,null,e.createElement(f.xhZ,{color:"#8c8c8c","data-testid":"close-filter-detail",role:"button",title:"Fechar filtro",onClick:()=>p(!1)})),e.createElement(G,null,e.createElement(D,{fontSize:1,textAlign:"center",fontWeight:"500"},c))),e.createElement("div",null,j&&e.createElement(z.Z,{m:"20px",onChange:k,onClearInput:l,label:c})),m))))};H.defaultProps={filterSelected:"",onClick:()=>({}),fullScreen:!1};var I=H,J=c(41869);let K=(a="",b=[])=>b.filter(b=>{var c,d;return null==(c=b.label)?void 0:null==(d=c.toUpperCase())?void 0:d.includes(a.toUpperCase())}),L=a=>{let{fullScreen:b,label:c,position:f,filterSelected:g,items:h,showFilterInput:i,onItemClick:j}=a,k=(0,d.Z)(a,["fullScreen","label","position","filterSelected","items","showFilterInput","onItemClick"]),[l,m]=(0,e.useState)((0,J.Z)(h));(0,e.useEffect)(()=>(m((0,J.Z)(h)),()=>m([])),[h]);let n=()=>{m(h)},o=a=>{m((0,J.Z)(K(a.target.value,h)))};return e.createElement(I,(0,x.Z)({},k,{label:c,position:f,fullScreen:b,onChangeFilterInput:o,onClearInput:n,filterSelected:g,showFilterInput:i}),e.createElement("ul",null,l.map((a,b)=>e.createElement(y.Z,{item:a,key:(null==a?void 0:a.slug)||b,onClick:j}))))};L.defaultProps={label:"",filterSelected:"",items:[],showFilterInput:!1,onItemClick:()=>({})};var M=L,N=c(63092),O=c(82260);let P=a=>{let{fullScreen:b,label:c,position:f,filterSelected:g,items:h,onItemClick:i}=a,j=(0,d.Z)(a,["fullScreen","label","position","filterSelected","items","showFilterInput","onItemClick"]),[k,l]=(0,e.useState)((0,O.Z)(h));return(0,e.useEffect)(()=>(l(h),()=>l({})),[h]),e.createElement(I,(0,x.Z)({position:f,label:c,fullScreen:b,filterSelected:g&&Object.keys(g).length?e.createElement(N.Cq,{min:0,max:5,score:null==g?void 0:g.value,label:null==g?void 0:g.hint,format:"label",fontSize:"14px",width:"20px",height:"20px"}):void 0},j),k.map((a,b)=>e.createElement("ul",{key:(null==a?void 0:a.slug)||b},e.createElement(N.L2,{onClick:i,item:a},e.createElement(N.Cq,{min:0,max:5,score:null==a?void 0:a.value,label:null==a?void 0:a.hint,format:"label",fontSize:"14px",width:"20px",height:"20px","data-testid":"review-item"})))))};P.defaultProps={filterSelected:[],items:[],showFilterInput:!1,onItemClick:()=>{},onClick:()=>{}};var Q=P;let R=a=>{let{fullScreen:b,label:c,position:f,onApply:h,min:i,max:j,selectedMin:k,selectedMax:l,item:m}=a,n=(0,d.Z)(a,["fullScreen","label","position","onApply","min","max","selectedMin","selectedMax","item"]);return e.createElement(I,(0,x.Z)({id:"filter-item-price-container",position:f,label:c,fullScreen:b,filterSelected:k||l?`${(0,g.Z)({value:k})} - ${(0,g.Z)({value:l})}`:void 0},n),e.createElement(N.MS,{min:i,max:j,initialMin:k,initialMax:l,onApply:h,item:m}))};R.defaultProps={onApply:()=>{},onClick:()=>{},item:{}};var S=R;c(75057);var T=c(64586),U=c(10200);let V=i.ZP.nav.attrs(a=>Object.assign({bg:"background.primary"},a))`
  text-align: left;

  ${j.$_}
`,W=i.ZP.ul.attrs(a=>Object.assign({my:0,pl:0},a))`
  display: flex;
  align-items: center;
  line-height: 45px;
  list-style: none;
  white-space: nowrap;
  justify-content: space-between;

  ${h.Dh}
`,X=(0,i.ZP)(U.Z).attrs(a=>Object.assign({color:"text.white",px:"10px",underlineOnHover:!1},a))`
  ${j.$_}
`,Y=i.ZP.div`
  position: absolute;
  background-color: ${a=>(0,j.dF)("white")(a)};
  z-index: ${a=>(0,j.R)("zIndices.4")(a)};
  ${a=>`display: ${a.show?"block":"none"}`};
  ${h.FK}
  ${j.$_}
  ${h.Dh}
`,Z=i.ZP.li`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  z-index: ${a=>a.selected&&(0,j.R)("zIndices.1")(a)};
  background-color: ${a=>a.selected&&(0,j.dF)("white")(a)};

  &:hover {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;

    & path {
      fill: ${a=>a.colorOnHover?a.colorOnHover:(0,j.uu)("base")(a)};
    }
  }
  &:hover > div > a {
    color: ${a=>a.colorOnHover?a.colorOnHover:(0,j.uu)("base")(a)};
  }
`,$=i.ZP.div`
  background: rgba(0, 0, 0, 0.6);
  animation: ${T.Ji} 0.2s linear;

  position: fixed;
  z-index: ${a=>(0,j.R)("zIndices.0")(a)};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  ${a=>a.show?i.iv`
          display: block;
        `:i.iv`
          display: none;
        `};
`;var _=c(48919);let aa=a=>{let{data:b,enableHoverDelay:c}=a,g=(0,d.Z)(a,["data","enableHoverDelay"]),{categoryList:h,specialLinks:i,externalLinks:j,allCategories:l}=b,{orderBy:m=[],list:n=[],show:o}=h,p=(0,T.IC)(n,m),q=p.slice(0,o||m.length),r=(0,e.useRef)(null),s={},t={},[u,v]=(0,e.useState)(0),[w,x]=(0,e.useState)(null),[y,z]=(0,e.useState)(null);(0,T.O)(s,r,"inline-block");let A=(a={},b)=>e.createElement(Y,{marginLeft:u,show:w===b,"data-testid":"nav-submenu",ref:t[b]},e.createElement(_.Z,{data:a,onMenuItemClick:g.onMenuItemClick})),B=a=>{let b=t[a].current;b.style.visibility="hidden",b.style.display="block";let c=b.clientWidth,d=s[a].current.offsetLeft,e=r.current.offsetWidth+r.current.offsetLeft,f=d+c-e;f>=0?v(-f):v(0),b.style.display=null,b.style.visibility=null},C=({menuType:a,index:b,menu:d,icon:g,chevronDown:h=!1})=>{let{color:i,label:j,url:l}=d,m=`${a}-item-${b}`;s[m]=(0,e.useRef)(null),t[m]=(0,e.useRef)(null);let n=()=>{z(setTimeout(async()=>{await B(m),x(m)},300))};return(0,e.useEffect)(()=>()=>clearTimeout(y),[]),e.createElement(Z,{selected:w===m,"data-testid":"link-menu-item",key:m,colorOnHover:i,onMouseEnter:a=>{a.stopPropagation(),c?n():x(m)},onMouseLeave:()=>{t[m].current.style.display="none",x(null),c?clearTimeout(y):B(m)},ref:s[m]},e.createElement(k.Z,{mx:"2px",justifyContent:"center",alignItems:"center"},g&&e.createElement(f.JO$,{name:g,"data-testid":`link-icon-${b}`,color:"text.lightest"}),e.createElement(X,{href:l},j),h&&e.createElement(f.JO$,{name:"ChevronDown",color:"text.lightest"})),A(d,m))};return e.createElement(V,{"data-testid":"links-menu",ref:r},e.createElement(W,null,C({menuType:"main",index:0,icon:"Burger",menu:l,chevronDown:!0}),i.map((a,b)=>C({menuType:"special",index:b,menu:a})),q.map((a,b)=>C({menuType:"category",index:b,menu:a})),j.map((a,b)=>C({menuType:"external",index:b,menu:a,icon:a.id}))),e.createElement($,{"data-testid":"menu-overlay",show:w}))};aa.defaultProps={data:{categoryList:{},specialLinks:[],externalLinks:[],allCategories:{}},enableHoverDelay:!0};var ab=aa,ac=c(99075);c(60857),c(91999);var ad=c(79957);c(4720),c(98284);let ae={height:"auto",fontSize:0,flexWrap:"no-wrap",mt:0,overflow:"auto",px:"9px",pb:"5px"},af={height:"16px",fontSize:1,flexWrap:"wrap",mt:1,overflow:"hidden"},ag=(0,i.ZP)(k.Z).attrs(a=>Object.assign({bg:"background.primary"},a.isMobile?Object.assign({},ae):Object.assign({},af),a))`
  white-space: pre;
  line-height: ${a=>(0,j.R)("lineHeights.plus")(a)}px;

  a {
    font-size: inherit;
  }
`,ah=a=>{let{data:b,onClick:c,isMobile:f,isRendered:g}=a,h=(0,d.Z)(a,["data","onClick","isMobile","isRendered"]),{links:i,title:j}=b;return(null==i?void 0:i.length)>=1&&j?e.createElement(ag,(0,x.Z)({display:g?"flex":"none","data-testid":"header-links-list",isMobile:f},h),e.createElement(m.Z,{color:"text.lightest"},`${j}:`),null==i?void 0:i.map((a,b)=>{let d=0!==b&&"|";return e.createElement(U.Z,{"data-testid":"header-link",key:a.value,href:a.href,onClick:b=>c(b,a),hover:!1,color:"text.lightest"},` ${d||""} ${(0,T.kC)(a.value)}`)})):null};ah.defaultProps={data:{links:[],title:""},onClick:()=>{},isMobile:!1,isRendered:!0};var ai=ah,aj=c(41544),ak=c(47560);let al=i.ZP.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > ul {
    width: 100%;
    margin-top: 20px;
  }

  ${(0,j.aK)("large")} {
    flex-direction: row;
    width: 100%;

    > ul {
      width: ${({showScoreDesc:a})=>a?"50%":"100%"};
    }
  }
`,am=i.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(0,j.aK)("large")} {
    flex-direction: column-reverse;
    flex: 1;
  }
`,an=i.ZP.div`
  margin-left: 8px;

  > div {
    margin-left: -4px;
  }
`,ao=i.ZP.li`
  display: grid;
  grid-template-columns: 2fr 2fr auto;
  align-items: center;
  grid-gap: 8px;

  & > p:first-child {
    font-size: ${(0,j.R)("fontSizes.1")}px;
    line-height: ${(0,j.R)("lineHeights.display")};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > p:last-child {
    font-weight: ${a=>(0,j.R)("fontWeights.bold")(a)};
  }

  ${(0,j.aK)("large")} {
    grid-template-columns: 1fr 2fr auto;
  }
`,ap=(0,i.ZP)(m.Z)`
  font-weight: ${a=>(0,j.R)("fontWeights.medium")(a)};
  font-size: ${a=>(0,j.R)("fontSizes.7")(a)}px;

  & > span {
    display: none;
  }

  ${(0,j.aK)("large")} {
    line-height: ${a=>(0,j.R)("lineHeights.fontSize")(a)};

    & > span {
      display: inline-block;
    }
  }
`,aq=(0,i.ZP)(m.Z)`
  font-size: ${a=>(0,j.R)("fontSizes.1")(a)}px;
  color: ${a=>(0,j.uu)("light")(a)};

  ${(0,j.aK)("large")} {
    margin-top: ${a=>(0,j.R)("space.3")(a)}px;
  }
`;function ar({average:a,count:b,characteristics:c,showScoreDesc:d}){let f=b>1?`${b} avalia\xe7\xf5es`:`${b} avalia\xe7\xe3o`;return e.createElement(al,{showScoreDesc:d},d&&e.createElement(am,null,e.createElement(ap,{"data-testid":"stat-score"},e.createElement("span",null,"Nota:"),` ${a.toFixed(1)}`),e.createElement(an,null,e.createElement(N.Cq,{score:a,width:"20px",height:"20px"}),e.createElement(aq,{"data-testid":"stat-desc"},f))),e.createElement("ul",null,null==c?void 0:c.map(a=>e.createElement(ao,{key:a.label},e.createElement(m.Z,null,a.label),e.createElement(ak.uk,{height:"8px",color:"#0086ff",value:a.value,max:5}),e.createElement(m.Z,null,a.value.toFixed(1))))))}ar.defaultProps={average:0,count:0,characteristics:[],showScoreDesc:!0};var as=ar;let at=i.ZP.div`
  ${(0,j.aK)("large")} {
    display: flex;
  }
`,au=(0,i.ZP)(m.Z)`
  margin-top: 4px;
  font-size: ${a=>(0,j.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,j.R)(a.bold?"fontWeights.medium":"fontWeights.regular")(a)};
  color: ${a=>(0,j.uu)("base")(a)};

  > span {
    color: ${a=>(0,j.uu)("lighter")(a)};
  }
`,av=(0,i.ZP)(m.Z)`
  margin-top: 12px;
  font-size: ${a=>(0,j.R)("fontSizes.5")(a)}px;
  font-weight: ${a=>(0,j.R)("fontWeights.medium")(a)};
  color: ${a=>(0,j.uu)("base")(a)};
  line-height: ${a=>(0,j.R)("lineHeights.display")(a)};
`,aw=(0,i.ZP)(m.Z)`
  margin: 12px 0;
  font-size: ${a=>(0,j.R)("fontSizes.1")(a)}px;
  color: ${a=>(0,j.uu)("scratched")(a)};
  line-height: ${a=>(0,j.R)("lineHeights.plus")(a)}px;
  text-align: justify;
`,ax=(0,i.ZP)(A.Z)`
  border-bottom: 3px solid ${a=>(0,j.kJ)("light")(a)};
  margin: 16px 0px;
  width: 100%;
`,ay=(0,i.ZP)(m.Z)`
  font-size: ${a=>(0,j.R)("fontSizes.1")(a)}px;
  font-weight: ${a=>(0,j.R)("fontWeights.medium")(a)};

  color: ${a=>a.reviewOK?(0,j.R)("baseColors.lima.base")(a):(0,j.R)("baseColors.vermillion.base")(a)};
`,az=(0,i.ZP)(A.Z)`
  ${(0,j.aK)("large")} {
    width: 50%;
    flex: 1;
    margin-right: 32px;
  }
`,aA=(0,i.ZP)(A.Z)`
  ${(0,j.aK)("large")} {
    align-self: center;
    width: 50%;
  }
`;function aB({title:a,text:b,rating:c,recommended:d,user:f,date:g,characteristics:h,showScoreDesc:i}){let j=g&&(0,aj.Z)(new Date(g),new Date);return e.createElement(e.Fragment,null,e.createElement(at,{"data-testid":"review-card"},e.createElement(az,null,e.createElement(N.Cq,{score:c,width:"20px",height:"20px"}),e.createElement(au,null,(null==f?void 0:f.name)||"An\xf4nimo"," - ",e.createElement("span",null,"H\xe1 ",j)),e.createElement(av,{bold:!0},a),e.createElement(aw,null,b),e.createElement(ay,{reviewOK:d},d?"Sim, eu recomendo esse produto":"N\xe3o, eu n\xe3o recomendo esse produto")),e.createElement(aA,null,e.createElement(as,{characteristics:h,showScoreDesc:i}))),e.createElement(ax,null))}aB.defaultProps={user:{name:"An\xf4nimo"},showScoreDesc:!1};var aC=aB;c(4506);var aD=c(30143),aE=c(2334);c(34958),c(35306),c(41323),c(90713)}}])
//# sourceMappingURL=6546-ef3250d9e6958a83.js.map