import { useState , createContext } from "react";


export const UserContext = createContext({});

function UserProvider({children}) {
    const [name, setName] = useState("gabriel")

    return(
        <UserContext.Provider value={{ name , setName }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;