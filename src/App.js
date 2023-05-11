import logo from './logo.svg';
import './App.css';
/**Para utilizar usercontext */
import React from "react";
import User from "./componentes/User.jsx";

/*Exporto una variable para el cambio de contexto en este caso UserContext*/
export const UserContext = React.createContext();


function App() {

  const user ={
    nombre: "Diego",
    edad: 42,
    sector: "Tecnologia",
    isAdmin: "Si"
  }
  const userArreglo =["Diego", "42", "Tecnologia", "No"]
    

  return (
   /*Me genera un tag simil al de html con la variable UserContext y la variable {user} la recibe User.jsx*/
   <UserContext.Provider value={{user, userArreglo}} >
      {/*Aca llamo al componente user*/}
      <User />
   </UserContext.Provider>

  );
}

export default App;
