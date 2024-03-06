import ApiCalling from "./apiManager";

//==============Authorization=============
export function startANewSession() {
//it will be used when registar and log in
    let currentDate = new Date();
    localStorage.setItem("startDateSession", currentDate);
    currentDate.setMinutes(currentDate.getMinutes() + 120);
    localStorage.setItem("endDateSession", currentDate);

 }
 export function endACurrentSession() {
    localStorage.removeItem("endDateSession")
 }
 async function isUserSession(token) {
    if (token != null && token != "") {
 
       let resToken = await ApiCalling.checkUser(token);
       if (resToken.status) {
          localStorage.setItem('tokenSum', resToken.token);
         
          startANewSession();
          return true;
       }
       else {

          endACurrentSession();
          return false;
       }
    }
    else{
      return false;
    }
 }
  async function checkIfSessionEnd() {
    let now = new Date();
    let endDateSessionFromLocalStorage = localStorage.getItem("endDateSession")
    let endDateSession = new Date(endDateSessionFromLocalStorage);
    let token = localStorage.getItem('tokenSum');
    if (token != null && token != "" && endDateSessionFromLocalStorage != null && now <= endDateSession) {
   
       return true;
 
    } else {

       return await isUserSession(token);
 
    }
 }
 export default checkIfSessionEnd;