
// page that configures the gameplay - outset //

import React from 'react'


// properties area for page configuration - outset //

export default function Thegame({  
    drawn,
    setDrawn,
    wordarray,
    positioninthegame,
    setPositioninthegame,
    boxoferrors,
    SetBoxoferrors,
    setDisabledkey,
    showit,
    setShowit,
    setKeysonscreen,
    setChooseit,
    SetInformationscreen,  
    setChooseyouroption, 
    setIndividualkeyselected
}){

 // properties area for page configuration - end //   


    let selectplayedword = ""
    let arrayofselectplayedword = []
    let displaynoneselectplayedword = []


 // it shuffle words and choose from list - outset //   
    
    function raffleword(){
        const arraypositioning = Math.floor(Math.random() * wordarray.length)
        selectplayedword = wordarray[arraypositioning]
        arrayofselectplayedword = selectplayedword.split("")
        arrayofselectplayedword.forEach(() => {displaynoneselectplayedword.push(" _ ")})

    }

 // it shuffle words and choose from list - end //

 
 // words config - outset //

    function wordtime(){

        setPositioninthegame("")
        SetBoxoferrors(0);
       
        raffleword()
        setDisabledkey(false)
        setShowit(displaynoneselectplayedword)
        setKeysonscreen("on")
        setChooseit(arrayofselectplayedword)
        SetInformationscreen(displaynoneselectplayedword)
        setIndividualkeyselected([])
        setChooseyouroption(false)
        setDrawn(selectplayedword)

    } 
 
// words config - end //


 // page layout settings -outset //

    return(
        
        <div className="gamebox">
                <div className="buttonbox">
                    <div className="word-chose-button">
                        <button data-test="choose-word" onClick={wordtime}>Escolher Palavra</button>
                    </div>
                    <div  className="randombox">            
                        <h1 data-test="word" data-answer={`${drawn}`} className={`${positioninthegame}`} > {showit} </h1>
                    </div>
                </div>
            </div>
    )

// page layout settings -end //

}

// page that configures the gameplay - end //