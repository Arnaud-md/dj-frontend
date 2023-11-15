import { useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
const [pseudo, setPseudo]=useState("");
const [mdp, setMdp]=useState("");
const navigate = useNavigate();

const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new value', e.target.value)

            setPseudo(e.target.value)


}, [])

const handleChange2 = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('new value', e.target.value)

            setMdp(e.target.value)
   

}, [])

const handleClick = useCallback(async ()=> {
    const response = await fetch("http://localhost:1337/api/auth/local", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            identifier: pseudo,
            password: mdp
        })
    })
    const data = await response.json()

    console.log("reponse : ",data, data.jwt);
    if(data.jwt) {
        navigate("/home");
    }
},[pseudo,mdp,navigate])

    return (
        <div>
            <p>Pseudo</p>
            <input  onChange={handleChange} type="text"></input>
            <p>Mot de passe</p>
            <input  onChange={handleChange2} type="password"></input>
            <button onClick={handleClick}>Se connecter</button>
        </div>
    );
};

export default Connexion;