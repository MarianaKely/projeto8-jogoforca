
// page that configures the gameplay - outset //


import React from 'react'


// properties area for page configuration - outset //


export default function Thegame({  
    wordarray,
    showit,
    setShowit,
    setDisabledkey,
    setKeysonscreen,
    setChooseit,
    setInformationScreen,
    boxoferrors,
    photo,
    positioninthegame,
    setPhoto,
    SetBoxoferrors,
    setPositioninthegame,
    setIndividualkeyselected,
    setChooseyouroption,
    setDrawn,
    drawn


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


    function activateWords(){

        setPositioninthegame("")
        SetBoxoferrors(0);
        setPhoto(boxoferrors);
        raffleword()
        setDisabledkey(false)
        setShowit(displaynoneselectplayedword)
        setKeysonscreen("on")
        setChooseit(arrayofselectplayedword)
        setInformationScreen(displaynoneselectplayedword)
        console.log(selectplayedword)
        setIndividualkeyselected([])
        setChooseyouroption(false)
        setDrawn(selectplayedword)

    } 


// words config - end //


// page layout settings -outset //


    return(
        
        <div className="gamebox">
                <div className="top-container-left">
                    <img data-test="game-image" src={`./assets/forca${photo ? boxoferrors : boxoferrors}.png`} alt="forca"></img>
                </div>
                <div className="bigbuttonbox">
                    <div className="buttonbox">
                        <button data-test="choose-word" onClick={activateWords}>Escolher Palavra</button>
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