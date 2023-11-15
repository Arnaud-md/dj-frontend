import { useCallback, useEffect, useState } from "react"

// export function Musique(props: { onRoll: (newValue: number) => void, value: number}){
    export function Musique(props: {
        titre: string, 
        chanteur: {Nom: string, Prenom: string},
        couleur: string
    }){
    // const [value, setValue] = useState(Math.floor(Math.random()*6 + 1))

    return <div className="container">
        <div style={{backgroundColor: props.couleur}} className="musique">
        <h3 className="titre">{props.titre}</h3>
        <h3 className="chanteur">{props.chanteur.Prenom} {props.chanteur.Nom}</h3>
        </div>
        
        </div>
}