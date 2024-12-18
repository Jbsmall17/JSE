
import React, { createContext, useContext, useRef, useState } from "react";


const contextObj = createContext({})


export function ContextComp({children}){
    const solarRefDiv = useRef(null)
    const mainRefDiv = useRef(null)
    const energyRefDiv = useRef(null)
    const HeaderRefDiv = useRef(null)
    const faqRefDiv = useRef(null)
    const [activePage, setActivePage] = useState("") 
    const [loadArray, setLoadArray] = useState(
        [
            {
              "id": 1,
              "number": 0,
              "appliances": "Normal Bulb",
              "unit": "40"
            },
            {
              "id": 2,
              "number": 0,
              "appliances": "Table light",
              "unit": "40"
            },
            {
              "id": 3,
              "number": 0,
              "appliances": "Led",
              "unit": "40"
            },
            {
              "id": 4,
              "number": 0,
              "appliances": "Fan",
              "unit": "40"
            },
            {
              "id": 5,
              "number": 0,
              "appliances": "Led/led tv(s42)",
              "unit": "40"
            },
            {
              "id": 6,
              "number": 0,
              "appliances": "Desktop computers",
              "unit": "40"
            },
            {
              "id": 7,
              "number": 0,
              "appliances": "Laptops",
              "unit": "40"
            },
            {
              "id": 8,
              "number": 0,
              "appliances": "Refrigerator(65-250ltr)",
              "unit": "40"
            },
            {
              "id": 9,
              "number": 0,
              "appliances": "Refrigerator(250-350ltr)",
              "unit": "40"
            },
            {
              "id": 10,
              "number": 0,
              "appliances": "Refrigerator(350-450ltr)",
              "unit": "40"
            },
            {
              "id": 11,
              "number": 0,
              "appliances": "AC-1HP",
              "unit": "40"
            },
            {
              "id": 12,
              "number": 0,
              "appliances": "AC-1HP",
              "unit": "40"
            },
            {
              "id": 13,
              "number": 0,
              "appliances": "AC-1.5HP",
              "unit": "40"
            },
            {
              "id": 14,
              "number": 0,
              "appliances": "Toaster",
              "unit": "40"
            }
          ]
    )

    return (
        <contextObj.Provider 
            value={{
                solarRefDiv,
                mainRefDiv,
                energyRefDiv,
                activePage,
                HeaderRefDiv,
                faqRefDiv,
                setActivePage,
                loadArray, 
                setLoadArray
            }}>
            {children}
        </contextObj.Provider>
    )
}


export function useCustomContext(){
    const contextValue = useContext(contextObj)
    if(!contextValue){
        throw new Error("erroe occurred")
    }
    return contextValue
}