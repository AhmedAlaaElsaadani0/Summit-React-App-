import{u as R,r as v,j as e,R as y}from"./index-nLugMdGR.js";import{a as B}from"./ApartmentLoading-2IL0PbLo.js";import{u as N}from"./useTranslation-DrPhCge6.js";import{A as j}from"./apiManager-C9zzvDLR.js";const X=r=>{const p=R(),{t:d,i18n:f}=N(),[n]=v.useState(!r.flag),[l]=v.useState(r.flat),h=()=>{p(`/ApartmentDetails/${l.id}`,{state:l})};return e.jsx(y.Fragment,{children:e.jsx("div",{className:`col-xl-5 w-sm-90  p-0 mb-3  rounded-4 overflow-hidden m-auto shadow Apartment ${n?"bg-primColor":"bg-whiteToBlack"}`,children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("div",{className:"row position-relative ",children:[e.jsx("div",{className:"col-md-5 ApartmentImage ApartmentSlider ",style:{Height:document.querySelectorAll(".ApartmentDesc").clientHeight,maxHeight:"500px"},children:e.jsx(B,{uniqeNum:l.id,flatImages:l.pictures},l.id)}),e.jsx("div",{className:`col-md-7 fs-3 fw-bolder ApartmentDesc ${n?"text-white":"text-primColor"}`,children:e.jsxs("div",{className:"fs-3 px-3 fw-bolder w-100",children:[e.jsxs("p",{className:"py-2 fs-5",children:[l.title.slice(0,25).length<l.title.length?l.title.slice(0,25)+"....":l.title," "]}),e.jsx("p",{className:"py-2 ApartmentAddress fs-6",children:l.governorate+"- "+l.area+"- "+l.region}),e.jsxs("div",{className:`text-black fs-4 p-4 ${n?"text-white":"text-blackToWhite"}`,children:[e.jsxs("p",{id:"Price",children:[d("Apart Price"),e.jsxs("span",{className:"fw-normal",children:[" ",l.price," "]})]}),e.jsx("div",{className:"w-100 d-flex justify-content-end text-center",children:e.jsx("button",{onClick:h,className:` sButton   ms-md-auto m-smalldevice-auto    ${n?"sButtonWhite":"sButtonGreen"} `,children:d("Apart Button")})})]})]})}),e.jsx("div",{className:`data position-absolute fw-bolder z-1 top-0 ${f.language=="ar"?"end-0 me-3":"start-0 ms-3"} mt-2 rounded   ${n?"bg-white  text-primColor":"bg-primColor text-white"} `,style:{width:"fit-content",fontSize:"11px"},children:e.jsxs("p",{id:"date",className:"mb-0 ",children:[d("Apart Post")," ",e.jsxs("span",{className:"",children:[" ",l.createdAt," "]})]})})]})})})})},D="_filterDivHide_1a6z8_1",C="_filterDivShow_1a6z8_19",F="_show_1a6z8_37",I="_showFilter_1a6z8_1",z="_showRtl_1a6z8_47",H="_showFilterRtl_1a6z8_1",L="_hide_1a6z8_61",E="_hideFilter_1a6z8_1",T="_hideRtl_1a6z8_69",k="_hideFilterRtl_1a6z8_1",q="_filterButton_1a6z8_81",G="_closebutton_1a6z8_95",o={filterDivHide:D,filterDivShow:C,show:F,showFilter:I,showRtl:z,showFilterRtl:H,hide:L,hideFilter:E,hideRtl:T,hideFilterRtl:k,filterButton:q,closebutton:G};const $="_borderBottomSelect_1gxtl_1",x={borderBottomSelect:$};function P({t:r,i18n:p,handleOnChangeSelector:d}){const f=t=>{t.preventDefault(),S(),_(),d("","",t.target.value),t.target.value!=""?(j.getAreasOfGov(t.target.value).then(s=>{b(s)}),u()):(m(),u())},n=t=>{t.preventDefault(),_(),d("",t.target.value),j.getRegionsOfArea(t.target.value).then(s=>{s.code!=401?w(s):u()})},l=t=>{t.preventDefault(),d(t.target.value)};function h(t){let s=document.createElement("option");return s.value="",s.selected=!0,s.innerHTML=t,s}const S=()=>{const t=document.querySelector("#selectorAreas");for(;t.firstChild;)t.removeChild(t.firstChild)},_=()=>{const t=document.querySelector("#selectorRegions");for(;t.firstChild;)t.removeChild(t.firstChild)},b=t=>{let s=t,a=document.querySelector("#selectorAreas"),g=h(r("Area Selc"));a.append(g),a.style.display="block",s.forEach(i=>{let c=document.createElement("option");c.value=i.id,c.innerHTML=i[p.language=="en"?"name":"arName"],a.appendChild(c)})},w=t=>{let s=t,a=document.querySelector("#selectorRegions"),g=h(r("Region Selc"));a.append(g),a.style.display="block",s==null||s.forEach(i=>{let c=document.createElement("option");c.value=i.id,c.innerHTML=i[p.language=="en"?"name":"arName"],a.appendChild(c)})},u=()=>{let t=document.querySelector("#selectorRegions"),s=h(r("Region Selc"));t.append(s)},m=()=>{let t=document.querySelector("#selectorAreas"),s=h(r("Area Selc"));t.append(s)};return e.jsxs("div",{className:"w-100",children:[e.jsx("div",{className:"py-1 rounded-3  "+x.borderBottomSelect,children:e.jsxs("select",{onChange:f,onKeyDown:f,name:"govId",className:"form-select-Amoor fw-bold  mt-3 px-3 py-2 rounded-5 "+x.borderBottomSelect,id:"selectorGovs",children:[e.jsx("option",{value:"",selected:!0,children:r("Gov Selc")}),e.jsx("option",{value:"6",children:r("Cairo")}),e.jsx("option",{value:"11",children:r("Giza")})]})}),e.jsx("div",{className:"py-1 rounded-3 "+x.borderBottomSelect,children:e.jsx("select",{onChange:n,onKeyDown:n,name:"areaId",className:"form-select-Amoor mt-3  px-3 py-2 rounded-5  "+x.borderBottomSelect,id:"selectorAreas",children:e.jsx("option",{value:"",selected:!0,disabled:!0,children:r("Area Selc")})})}),e.jsx("div",{className:"py-1 rounded-3 "+x.borderBottomSelect,children:e.jsx("select",{onChange:l,name:"regionId",className:"form-select-Amoor mt-3 px-3 py-2 rounded-5  "+x.borderBottomSelect,id:"selectorRegions",children:e.jsx("option",{value:"",selected:!0,disabled:!0,children:r("Region Selc")})})})]})}function J({getAllApartments:r,setResponse:p,loading:d,response:f,setLoading:n}){const[l,h]=v.useState({govId:"",areaId:"",regionId:""});v.useState({min:0,max:1e4});const S=(i,c=l.areaId,A=l.govId)=>{h({govId:A,areaId:c,regionId:i})},_=i=>{i.preventDefault(),n(!0),p({...f,...l,pageIndex:1,data:[]}),r(1,!0,l.govId,l.areaId,l.regionId)},[b,w]=v.useState(!1),{t:u,i18n:m}=N();let t,s;v.useEffect(()=>{t=document.getElementById("filterDiv"),s=document.getElementById("filterButton")});const a=i=>{t.classList.add(m.language=="en"?o.show:o.showRtl),setTimeout(()=>{t.classList.add(o.filterDivShow),t.classList.remove(o.filterDivHide),t.classList.remove(m.language=="en"?o.show:o.showRtl)},500),w(!0),s.style.display="none"},g=()=>{t.classList.add(m.language=="en"?o.hide:o.hideRtl),setTimeout(()=>{t.classList.add(o.filterDivHide),t.classList.remove(o.filterDivShow),t.classList.remove(m.language=="en"?o.hide:o.hideRtl)},500),w(!1)};return e.jsx(y.Fragment,{children:e.jsxs("div",{className:"position-fixed top-0 bottom-0 d-flex align-items-center  vh-100 ",style:{zIndex:"999"},children:[e.jsx("div",{className:" rounded-4 py-3 p-1 align-items-center mb-5  "+o.filterDivHide,id:"filterDiv",style:{width:"300px"},children:e.jsxs("div",{className:"bg-white shadow py-5 w-100 rounded-5 d-flex flex-column justify-content-center align-items-center px-2 position-relative",children:[e.jsx("button",{type:"button",onClick:()=>{g(),setTimeout(()=>{s.style.display="block"},500)},className:" rounded-circle p-2 m-3 border-0 position-absolute top-0  "+(m.language=="en"?"end-0 ":"start-0 ")+o.closebutton,style:{width:"50px",height:"50px",fontWeight:"bolder",fontSize:"24px"},children:"X"}),e.jsx("h3",{className:"Filter text-primColor fw-bolder",children:u("Filter")}),e.jsxs("form",{action:" ",className:"w-100 px-3 d-flex flex-column",onSubmit:i=>_(i),children:[e.jsx(P,{t:u,i18n:m,handleOnChangeSelector:S}),e.jsx("button",{type:"submit",className:"sButton sButtonGreen ",children:u("Search")})]})]})}),e.jsx("div",{className:" h-100 d-flex align-items-center",children:e.jsx("button",{type:"button",id:"filterButton",onClick:i=>b?g():a(),className:" sButton sButtonGreen rounded-circle p-2 border-0 shadow  "+o.filterButton,style:{width:"75px",height:"75px",fontWeight:"bolder",fontSize:"32px"},children:e.jsx("i",{className:"fa-solid fa-bars-staggered"})})})]})})}export{X as A,J as F};
