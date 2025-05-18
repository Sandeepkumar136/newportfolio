const { createContext, useState } = require("react");

const AlertDialogueContext = createContext();

export const AlertDialogueProvider = ({children})=>{
    const [isAlertOpen, setIsAlertOpen] = useState(true);
    const closeAlert = ()=> setIsAlertOpen(false);

    return(
        <AlertDialogueContext.Provider value={{isAlertOpen, closeAlert}}>
            {children}
        </AlertDialogueContext.Provider>
    )
}
export const useAlert = () => createContext(AlertDialogueContext) ;