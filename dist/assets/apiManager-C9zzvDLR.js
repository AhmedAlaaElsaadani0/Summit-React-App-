const a="https://api.summitegypt.com",u=`${a}/accounts/admins`,$=`${a}/Areas`,m=`${a}/Regions`,h=`${a}/Apartments`,T=`${a}/accounts/clients`;class g{static async payForApartment(e){return await fetch(`${a}/payments/${e}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(n=>n.json())}static async loginUser(e){return await fetch(`${T}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(n=>n.json())}static async registerUser(e){return await fetch(`${T}/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(n=>n.json())}static async sendOTPToUserEmail(e){return await fetch(`${a}/accounts/SendOTPConfirmAccount`,{method:"POST",headers:{Authorization:`Bearer ${e}`}}).then(n=>n.json())}static async confirmOTP(e,t){return await fetch(`${a}/accounts/ConfirmAccountOTP?otp=${t}`,{method:"POST",headers:{Authorization:`Bearer ${e}`}}).then(s=>s.json())}static async checkUser(e){try{let t;return await fetch(`${a}/accounts/validateToken?token=${e}`).then(n=>n.json()).then(n=>t=n),t}catch{return!1}}static async getUserInfo(e){return await fetch(`${a}/accounts/currentuser`,{method:"GET",headers:{Authorization:`Bearer ${e}`}}).then(n=>n.json())}static async loginAdmin(e){return await fetch(`${u}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(n=>n.json())}static async changeAdminPassword(e,t){return(await fetch(`${u}/changepassword`,{method:"Put",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)}).then(s=>s.json())).data}static async logoutAdmin(e){return await fetch(`${u}/logout`,{method:"POST",headers:{Authorization:`Bearer ${e}`}}).then(n=>n.json())}static async editAdminProfile(e,t){return await fetch(`${u}/updatecurrent`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)}).then(s=>s.json())}static async AddArea(e,t){return await fetch(`${$}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)}).then(s=>s.json())}static async EditArea(e,t,n){return await fetch(`${$}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(t)}).then(i=>i.json())}static async getAreasOfGov(e,t){return await fetch(`${$}/${e}`,{method:"GET",headers:{Authorization:`Bearer ${t}`}}).then(s=>s.json())}static async DeleteArea(e,t){return await fetch(`${$}/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}}).then(s=>s.json())}static async AddRegion(e,t){return await fetch(`${m}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)}).then(s=>s.json())}static async EditRegion(e,t,n){return await fetch(`${m}/${e}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify(t)}).then(i=>i.json())}static async getRegionsOfArea(e,t){return await fetch(`${m}/${e}`,{method:"GET",headers:{Authorization:`Bearer ${t}`}}).then(s=>s.json())}static async DeleteRegion(e,t){return await fetch(`${m}/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}}).then(s=>s.json())}static async addAparetment(e,t,n,s,i,l,d,y,f){const o=new FormData;o.append("Title",e),o.append("Description",t),o.append("Floor",s),o.append("RegionId",n),o.append("Condition",i),o.append("Price",l),o.append("ApartmentType",y);for(let c=0;c<d.length;c++)o.append("Pictures",d[c]);return await fetch(`${h}`,{method:"POST",headers:{Authorization:`Bearer ${f}`},body:o}).then(c=>c.json())}static async editAparetment(e,t,n,s,i,l,d,y,f,o){const r=new FormData;r.append("Title",t),r.append("Description",n),r.append("Floor",i),r.append("RegionId",s),r.append("Condition",l),r.append("Price",d),r.append("ApartmentType",f);for(let p=0;p<y.length;p++)r.append("Pictures",y[p]);return await fetch(`${h}/${e}`,{method:"PUT",headers:{Authorization:`Bearer ${o}`},body:r}).then(p=>p.json())}static async getAllApartments(e){return await fetch(`${h}${e}`,{method:"GET"}).then(n=>n.json())}static async getApartmentById(e,t){return await fetch(`${h}?Id=${e}&language=${t}`,{method:"GET"}).then(s=>s.json())}static async deleteAppartment(e,t){return await fetch(`${h}/${e}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}}).then(s=>s.json())}}async function j(A){const e=new Headers;e.append("Content-Type","application/json");const t=JSON.stringify(A);return await fetch(`${a}/contact`,{method:"POST",headers:e,body:t,redirect:"follow"}).then(s=>s.json())}export{g as A,j as c};
