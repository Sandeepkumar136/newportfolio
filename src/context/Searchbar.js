import { createContext, useContext, useState } from "react";

const SearchbarDialogueBoxContext = createContext();

export const SearchbarDialogueBoxProvider = ({children})=>{
    const [isSearchbarOpen , setIsSearchbarOpen]= useState(false);
    const openSearchbar = ()=> setIsSearchbarOpen(true);
    const closeSearchbar = ()=> setIsSearchbarOpen(false);
    return(
        <SearchbarDialogueBoxContext.Provider value={{openSearchbar, closeSearchbar, isSearchbarOpen}}>
            {children}
        </SearchbarDialogueBoxContext.Provider>
    )
}
export const useSearchbarDialogueBox = () => useContext(SearchbarDialogueBoxContext);