import React,{useState,useEffect} from 'react';
import '../components/About.css';
import { FcNightLandscape,FcLandscape } from "react-icons/fc";

const Sticky = () => {
  const [darkMode, setDarkMode] = useState(false);
  const ActiveMode = async () => {
    setDarkMode(!darkMode);
    if(darkMode === true){ 
      document.body.classList.add('light__mode');
      document.body.classList.remove('dark__mode');
      await localStorage.setItem('About','light__mode'); 
    }
    if(darkMode === false){ 
      document.body.classList.add('dark__mode');
      document.body.classList.remove('light__mode');
      await localStorage.setItem('About','dark__mode'); 
    }

  };
  
  useEffect(() => {
    if (localStorage.getItem('About') === 'light__mode') {
      document.body.classList.add('light__mode');

    } else if (localStorage.getItem('About') === 'dark__mode') {
      document.body.classList.add('dark__mode');
      setDarkMode(!darkMode);
    }

  }, []);
  

  return ( <>
   <div className="so__sticky " >
    <div className="switch-checkbox">
    {localStorage.getItem('About') === 'dark__mode' ?
      <FcNightLandscape onClick={ActiveMode} />
      :
      <FcLandscape onClick={ActiveMode} />
    }

    </div>
   </div>
       
             
  </> )
}

export default Sticky