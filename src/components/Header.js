import React from 'react'


export default function Header({title,subtitle}){

    return(
        <div className='title' >

            <h2>{title}</h2>
            <p>{subtitle}</p>

        </div>
        
    )
}
