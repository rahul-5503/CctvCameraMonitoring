import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{ createContext, useState ,useEffect} from 'react';
//import AsyncStorage from '@react-native-async-storage/async-storage';
export const AuthContext = createContext();


export const AuthProvider =({children})=>{
    const [isLoading,setIsLoading]=useState(false);
    const [userToken, setUserToken]=useState(null);

    const login = async()=>{
        setIsLoading(true);
        setUserToken('afdgdglk')
       /*const response = await axios.post( "https://prod-autosecauthsts.azurewebsites.net/connect/token",
 
        QueryString.stringify({
              "client_id": "cswebapp",
              "grant_type": "password",
              "scope": "AdministratorClientId_api offline_access",
              "username": "admin@test.com",
              "password": "123456"
        }));

  // AsyncStorage.setItem("authData", JSON.stringify(response.data));
  console.log("res::::"+JSON.stringify(response.data));
   await AsyncStorage.setItem("access_token",response.data.access_token);*/
   await AsyncStorage.setItem('token', 'afdgdglk');
        setIsLoading(false);
    }
    
    const logout = ()=>{
        setIsLoading(true);
        setUserToken(null)
        AsyncStorage.removeItem('token');
        setIsLoading(false);
    }
    const  isLoggedIn= async() => {
       try{
           setIsLoading(true);
         
           let userToken = await AsyncStorage.getItem("token");
           setUserToken(userToken);
           setIsLoading(false);
           
       }catch{
           console.log ("error")
       }}
    
    useEffect(() =>{
        isLoggedIn();
    },[]);
    return(
        <AuthContext.Provider value={{login, logout, userToken, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}