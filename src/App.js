import './App.css';
import NavBar from './components/NavBar';
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme,darkTheme,GlobalStyles} from "./components/Themes"
import Filter from './components/Filter';
import {useState,useEffect} from "react"
import CountryContainer from './components/CountryContainer';
function App() {
  const [theme,setTheme]=useState("light")
  
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")

  }
  const [olgdata,setOlgData]=useState([])
  const [inputfilter,setInputfilter]=useState("")
  useEffect(() => {
      fetchdata()
  }, []);
  const fetchdata = async () => {
     const response= await fetch("https://restcountries.com/v2/all")
     const data=await response.json()
     setOlgData(data)
  }
  const [selectValue,setSelectValue]=useState("")
  const handleChange = (a) => {
    a.preventDefault()

    setInputfilter(a.target.value)
}
  
  return (
    <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
   
     <NavBar themeToggler={themeToggler} />
     <Filter inputfilter={inputfilter} setInputfilter={setInputfilter} key="123"
      olgdata={olgdata} setSelectValue={setSelectValue} selectValue={selectValue}  handleChange={handleChange}
      />
     <CountryContainer setSelectValue={setSelectValue} selectValue={selectValue} olgdata={olgdata} 
      inputfilter={inputfilter} setInputfilter={setInputfilter} 
     />
    
    </ThemeProvider>
  );
}

export default App;
