import React, {useState, createContext} from 'react'
// create context 
export const SidebarContext = createContext();

const SidebarProvide = ({children}) => {
  // sidebar state
  const [isOpen, setIsOpen] = useState(false);

  const handlenClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{isOpen, setIsOpen, handlenClose}}>{children}</SidebarContext.Provider>
  )
};

export default SidebarProvide 