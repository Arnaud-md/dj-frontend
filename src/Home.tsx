import { useEffect, useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Musique } from "./Musique";

const Home = () => {
    const [musiquesPreferees, setMusiquesPreferees]=useState([]);
    const [musiquesParDate, setMusiquesParDate]=useState([]);
    const navigate = useNavigate();
    console.log("tableau des musiques préférées : ",musiquesPreferees);
    console.log("tableau des musiques par date de sortie : ",musiquesParDate);
    useEffect( () => {
        const getMusics = async () => {
            const response = await fetch("http://localhost:1337/api/musiques?filters[Favoris][$eq]=true&populate=*")
            const data = await response.json()
            console.log('musiques', data.data)
            setMusiquesPreferees(data.data);
        }
        getMusics()
    }, [])

    useEffect( () => {
        const getMusics = async () => {
            const response = await fetch("http://localhost:1337/api/musiques?tri=Date_de_sortie&populate=*")
            const data = await response.json()
            console.log('musiques par date', data.data)
            setMusiquesParDate(data.data);
        }
        getMusics()
    }, [])

    return (
        <div>
            <div className="title_and_add">
            <h1>Mon DJ virtuel</h1>
            <button className="button">Ajouter une musique</button>
            </div>
            <h2>Mes musiques préférées</h2>
            <div className="container_total">
            {musiquesPreferees.map((valeur: any, index) => (
                <Musique 
                //key={index}
                couleur={valeur.attributes.Couleur_de_fond}
                titre={valeur.attributes.Titre}
                chanteur={valeur.attributes.chanteur.data.attributes}
                //onRoll={(value: number) => handleRoll(index, value)} 
                />
            ))}
            </div>
            <h2>Mes musiques par date de sortie</h2>
            <div className="container_total">
            {musiquesParDate.map((valeur: any, index) => (
                <Musique 
                //key={index}
                couleur={valeur.attributes.Couleur_de_fond}
                titre={valeur.attributes.Titre}
                chanteur={valeur.attributes.chanteur.data.attributes}
                //onRoll={(value: number) => handleRoll(index, value)} 
                />
            ))}
            </div>
        </div>
    );
};

export default Home;