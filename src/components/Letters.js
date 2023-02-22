
// page that configures the keyboard letters - outset //

import alfabeto from "../Alphabet"

// properties area for page configuration - outset //

export default function Letters(
    {
        individualkeyselected,
        setIndividualkeyselected,
        informationscreen,
        setInformationscreen,
        chooseit,
        resultanalysis,
        boxoferrors,
        SetBoxoferrors,
        individualkeysactivated,
        setPositioninthegame,
        setChooseyouroption,
        setShowit,
        disabledkey,
        setDisabledkey
    }) {

// properties area for page configuration - end //        


 // area of ​​analysis of attempts/responses and configuration of errors - outset //  

    let otherboxoferrors = boxoferrors;
    const keyselector = [...individualkeyselected];
    const wordresultscreen = informationscreen;
    const result = [...chooseit];
    resultanalysis = [...wordresultscreen];        

    function chosenletter(alfabeto) {

        if (!individualkeyselected.includes(alfabeto)) {
            setIndividualkeyselected([...individualkeyselected, alfabeto]);


        }
        resultanalysis = [...wordresultscreen]
        if (result.includes(alfabeto)) {
            for (let i = 0; i < result.length; i++) {
                if (result[i] === alfabeto) {
                    resultanalysis[i] = alfabeto
                    setInformationscreen(resultanalysis);
                }
            }
            setShowit(resultanalysis);
        }
        else {
            if(otherboxoferrors <= 5){
                boxoferrors++
                SetBoxoferrors(boxoferrors);

    // less than five the game continues with attempts //            
        }
    }

    if (boxoferrors === 6){
        setShowit(result);
        setPositioninthegame("DERROTA");
        setDisabledkey(true);
        setChooseyouroption(true);

    // more than six the player loses //    

    }else if(resultanalysis.toString() === result.toString()){
        setPositioninthegame("VITÓRIA");
        setDisabledkey(true);
        setChooseyouroption(true);
    }
    }

  // area of ​​analysis of attempts/responses and configuration of errors - end // 
  
  // page layout settings -out set //


    return (

        <>

            <div className="keyscontainer">
              <div className="keys">
                  {alfabeto.map((alfabeto) =>
                      <button data-test="letter" onClick={() => chosenletter(alfabeto)}disabled={!keyselector.includes(alfabeto)? disabledkey : true}
                          className={`${individualkeysactivated} ${keyselector.includes(alfabeto) ? "" : ""}`}
                          key={alfabeto} >
                          {alfabeto}
                      </button>)}
              </div>
            </div>    

        </>

    )
// page layout settings -end //
    
}

// page that configures the keyboard letters - end //