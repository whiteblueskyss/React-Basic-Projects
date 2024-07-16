import { useEffect,useState } from 'react';
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {

  const [themeMode, setthemeMode] = useState('light')

  const darkTheme = () =>{
    setthemeMode('dark');
  }

  const lightTheme = () =>{
    setthemeMode('light');
  }

  useEffect(() =>{
    const html = document.querySelector('html').classList;
    html.remove('light', 'dark')
    html.add(themeMode)
  },[themeMode])

  return (
  <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>  
  <div className="flex flex-wrap min-h-screen items-center">
  <div className="w-full">
    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
         
          <ThemeBtn/>
      </div>

      <div className="w-full max-w-sm mx-auto">
            
            <Card />
      </div>
    </div>
  </div>

  </ThemeProvider>  

  )
}

export default App
