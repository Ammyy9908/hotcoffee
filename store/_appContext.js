import {createContext,useState} from "react"

const AppContext = createContext({
    user:null,
    auth_modal:false,
    login:()=>{},
    logout:()=>{},
    setAuthModal:()=>{},
    authReady:false
});

export const AppContextProvider = ({children})=>{
    const [user,setUser] = useState(null);
    const [auth_modal,setAuthModal] = useState(false);
    const [authType,setAuthType] = useState('login');

    const context = {user,setUser,auth_modal,setAuthModal,authType,setAuthType};

    return (
        <AppContext.Provider value={context}>
                {children}
        </AppContext.Provider>
    )
}

export default AppContext;

