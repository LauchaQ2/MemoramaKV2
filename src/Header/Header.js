import React from "react";
import "./Header.css";

export default function Header({tries,size, restart}){
    return(
        <div className={size > 500 ? "container-fluid d-flex align-items-center justify-content-around" : "d-block text-center"}>
            <p className={size > 500 ? "fs-1 h-auto mb-0" : "fs-3 h-auto mb-0 text-center"}>MemoramaVedo</p>
            <p className={size > 500 ? "fs-2 h-auto mb-0" : "fs-3 h-auto mb-0 text-center"}>Intentos: {tries}</p>
            <button className='btn btn-danger' onClick={restart}>REINICIAR</button>
        </div>

    )
}