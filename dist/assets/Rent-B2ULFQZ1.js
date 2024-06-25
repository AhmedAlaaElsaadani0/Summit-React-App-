import{r as i,j as e,R as I,H as z}from"./index-nLugMdGR.js";import{A}from"./apiManager-C9zzvDLR.js";import{A as w,F as L}from"./Filter-7Wp-QWhi.js";import{A as M}from"./ApartmentLoading-2IL0PbLo.js";import{u as N}from"./useTranslation-DrPhCge6.js";const T=()=>{var y;const[t,m]=i.useState({regionId:"",pageIndex:0,areaId:"",govId:"",data:[]}),[g,l]=i.useState(!0),{t:c,i18n:s}=N(),[u,x]=i.useState(s.language),[f,p]=i.useState(!1),o=async(n=t.pageIndex+1,r=!1,v=t.govId,b=t.areaId,j=t.regionId)=>{try{const E=`?Type=1&pageIndex=${n}&language=${s.language}&regionId=${j}&govId=${v}&areaid=${b}`,a=await A.getAllApartments(E);a.data?m(d=>{var h;return{...d,...a,pageIndex:((h=a==null?void 0:a.data)==null?void 0:h.length)===0?a.pageIndex:a.pageIndex+1,data:r?a.data:[...d.data,...a.data]}}):m(d=>({...d,...a,pageIndex:a.pageIndex,data:[]})),l(!1)}catch{l(!1),m(a=>({...a,data:[]}))}};i.useEffect(()=>{o()},[]),i.useEffect(()=>{u!==s.language&&(l(!0),m({...t,data:[]}),o(t.pageIndex-1,!0),x(s.language))},[s.language,u]);async function S(){p(!0),await o(t.pageIndex).then(()=>{p(!1)})}return i.useEffect(()=>{var r;let n=document.getElementById("loadMore");f&&((r=t==null?void 0:t.data)==null?void 0:r.length)>0&&(n.disabled=!1,n.innerHTML="Load More")},[t,f]),e.jsxs(I.Fragment,{children:[e.jsxs(z,{children:[e.jsx("meta",{name:"Keywords",content:`\r
      Summit,Summit Egypt,Summit Elzahaby,Summit Elzahaby for real estate,Summit Egypt for real estate,Summit Elzahaby for real estate investment,Summit Egypt for real estate investment,Summit Elzahaby for real estate investment and urban development,Summit Egypt for real estate investment and urban development,Summit Elzahaby for real estate development,Summit Egypt for real estate development,Summit Elzahaby for real estate projects,Summit Egypt for real estate projects,Summit Elzahaby for investment,Summit Egypt for investment,Summit Elzahaby for contracting,Summit Egypt for contracting,Summit Elzahaby for contracting and real estate investment,Summit Egypt for contracting and real estate investment,Summit Elzahaby for contracting and urban development,Summit Egypt for contracting and urban development,Summit Elzahaby for contracting and real estate development,Summit Egypt for contracting and real estate development,Summit Elzahaby for contracting and real estate projects,Summit Egypt for contracting and real estate projects\r
      `}),e.jsx("meta",{name:"description",content:`\r
      Summit Egypt is a real estate company that offers a wide selection of apartments, villas, houses, lands, and commercial real estate for sale and rent in Egypt.\r
      \r
      `}),e.jsx("title",{children:"Summit Egypt-Buy"})]}),e.jsxs("div",{className:"d-flex  justify-content-center align-items-center flex-wrap",style:{minHeight:"100%"},children:[e.jsx("div",{className:"Apartments mt-5  w-100    ",children:e.jsx("div",{className:"container-fluid w-90 m-auto",children:e.jsx("div",{className:"row",children:g?[!0,!1,!0].map((n,r)=>e.jsx(M,{flag:n},r)):((y=t==null?void 0:t.data)==null?void 0:y.length)==0?e.jsx("h2",{className:"text-center bg-primColor text-white p-5 ",children:c("Not Found Apart Message")}):t==null?void 0:t.data.map((n,r)=>e.jsx(w,{index:r,previousPage:"Area",loading:g,flat:n,flag:r%2!=0},r))})})}),e.jsx("div",{children:(t==null?void 0:t.count)>0&&(t==null?void 0:t.count)/(t==null?void 0:t.pageSize)>=(t==null?void 0:t.pageIndex)?e.jsx("button",{onClick:n=>{n.target.disabled=!0,n.target.innerHTML='<i className="fa-solid fa-spinner fa-spin"></i>',S()},className:"sButton sButtonGreen",id:"loadMore",children:c("Load More")}):""})]}),e.jsx(L,{getAllApartments:o,loading:g,setLoading:l,setResponse:m,response:t})]})};export{T as default};
