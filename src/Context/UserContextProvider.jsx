import React, { createContext, useEffect, useState } from 'react'
import checkIfSessionEnd from '../Components/JsClasses/CheckUser';
import ApiCalling from '../Components/JsClasses/apiManager';
export const UserContextAuth = createContext();
export function UserContextProvider({ children }) {
    const [userData, setUserData] = useState(null);
    const [tokenSum, setTokenSum] = useState("")
/**
 * to myslef 
 * what i did untill now 
 * 1- create user context
 * 2- create user context provider
 * 3- create sign in and sign up page
 * 4- create check user class
 * what i will do if we need to complete the authintication
 * 1- create protected component 
 * 2- payment Api
 * 3- use context to check  if the user is loged in or not to hide or show some components liken login and sign up
 * 4- forget password component 
 * 5- otp component 
 */
    useEffect(async () => {
        if (await checkIfSessionEnd()) {
            let tkn = localStorage.getItem("tokenSum");
            setTokenSum(tkn);
        }
        else {
            setTokenSum("");
            setUserData(null);
        }
    }, [])
    // get user data when token change <-- Login And First enter To user -->
    useEffect(async () => {
        if (tokenSum != null && tokenSum != "") {
            let user = await ApiCalling.getUserInfo(tokenSum);
            setUserData(user);
        }
    }, [tokenSum])
    return (

        <UserContextAuth.Provider value={{ userData: userData, setUserData: setUserData, tokenSum: tokenSum, setTokenSum: setTokenSum }}>
            {children}
        </UserContextAuth.Provider >
    )
}
