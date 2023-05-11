/**Importo el useContext */
import React, {useContext} from "react";

/**Importo el UserContext que viene de App */
import {UserContext} from "../App.js";

const User = () => {
  
    const {user, userArreglo} = useContext(UserContext)
   // const userArreglo = useContext(UserContext)

  return (
    <div>
        <p>Nombre: {user.nombre} </p>
        <p>Edad: {user.edad}</p>
        <p>Sector: {user.sector}</p>
        <p>Area: {user.isAdmin}</p>
    
     {userArreglo.map ( (userarr )=>(
        <div>
            <p>{userarr}</p>
        </div>
      ))}
      </div>
  )
}

export default User;