import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useCustomContext } from "../context/context"




export function useUtilsHook(){
  const {solarRefDiv, mainRefDiv, energyRefDiv, faqRefDiv,setActivePage } = useCustomContext()
  const navigate = useNavigate()
  const location = useLocation()
  const scrollToViewElement = (element) =>{
    if(element){
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }
 const scrollToSolar = () =>{
    if(location.pathname === "/services"){
      if(solarRefDiv.current){
        scrollToViewElement(solarRefDiv.current)
      }
    }else{
      navigate("/services") 
    }
  }
  const scrollToMain = () =>{
    if(location.pathname === "/services"){
      if(mainRefDiv.current){
        scrollToViewElement(mainRefDiv.current)
      }
    }else{
      navigate("/services") 
    }
  }
  const scrollToEnergy = () =>{
    if(location.pathname === "/services"){
      if(energyRefDiv.current){
        scrollToViewElement(energyRefDiv.current)
      }
    }else{
      navigate("/services") 
    }
  }
  const scrollToFaq = () =>{
    if(location.pathname === "/services"){
      if(faqRefDiv.current){
        scrollToViewElement(faqRefDiv.current)
      }
    }else{
      const currentScrollX = window.scrollX;
      const currentScrollY = window.scrollY;
      // 
      window.scrollTo(currentScrollX,currentScrollY)
      navigate("/services")
    }
    setActivePage("faq")
  }
  return {scrollToSolar, scrollToMain, scrollToEnergy, scrollToFaq}
} 
