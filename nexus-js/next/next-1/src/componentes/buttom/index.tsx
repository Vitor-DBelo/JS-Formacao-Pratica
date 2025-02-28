"use client"

import { useState } from "react"

export function Buttom(){
    const [nome, setNome] = useState('qualquer nome');

    function hendleName(){
        setNome('cleid')
    }

    return(
        <div>
            <button onClick={hendleName}>
                altera nome
            </button>
        </div>
    )
}