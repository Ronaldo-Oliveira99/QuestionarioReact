import React from 'react'


export default function Result({score , playAgain}){

    return(
        <section data-resultado = {score} className='score' >
        
                <h2 > Você acertou {score} de 3 Perguntas!</h2>
                <button data-test="refazer" onClick={playAgain} className='playBtn'>Refazer Quiz</button>

        </section>
        
    )
}

