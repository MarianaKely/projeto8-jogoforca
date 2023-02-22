import React from 'react'
import {useState} from "react"
import Letters from "./Letters"
import Thegame from "./Thegame"
import palavras from "../palavras"

export default  function App() {

  // constants that enable functionalities on the Letters.js - outset//

  const [individualkeyselected, setIndividualkeyselected] = React.useState([])
  const [informationscreen, SetInformationscreen] = useState([])
  const [chooseit, setChooseit] = useState([])
  const [resultanalysis] = useState([])  
  const [boxoferrors, SetBoxoferrors] = useState(0) 
  const [positioninthegame, setPositioninthegame] = useState ("")
  const [chooseyouroption, setChooseyouroption] = useState(true)
  const [showit, setShowit] = React.useState('')
  const [disabledkey, setDisabledkey] = useState(true)
  const [displayfocus, setDisplayfocus] = useState([]) 
  const [keysonscreen, setKeysonscreen] = React.useState('off')
  const [gotitright, setGotitright] = React.useState([])

  // constants that enable functionalities on the Letters.js - end//

  // constants that enable functionalities on the Thegame.js - outset//

  const [catchword,setCatchword ] = useState(Math.floor(Math.random() * palavras.length)) 
  const [drawn, setDrawn] = useState ("")
  const [selectedinarray, setSelectedinarray] = useState(catchword)
  const [wordarray] = useState(palavras) 
     
  // constants that enable functionalities on the Thegame.js - end//

  return (
    // creation configuration of Letters.js - outset //
    <div className='container'>
      
      <Thegame
        drawn = {drawn}
        setDrawn = {setDrawn}
        setChooseyouroption = {setChooseyouroption}
        setIndividualkeyselected = {setIndividualkeyselected}
        setPositioninthegame = {setPositioninthegame}
        SetBoxoferrors={SetBoxoferrors}
        positioninthegame = {positioninthegame}
        boxoferrors = {boxoferrors}
        setChooseit = {setChooseit}
        wordarray = {wordarray}
        informationscreen = {informationscreen}
        SetInformationscreen = {SetInformationscreen}
        chooseit = {chooseit}
        setDisplayfocus = {setDisplayfocus}
        setSelectedinarray = {setSelectedinarray}
        catchword = {catchword}
        setDisabledkey = {setDisabledkey}
        disabledkey = {disabledkey}
        selectedinarray = {selectedinarray}
        keysonscreen ={keysonscreen}
        setKeysonscreen={setKeysonscreen}
        displayfocus={displayfocus}
        showit={showit}
        setShowit={setShowit}>
      </Thegame>
      <Letters
        individualkeyselected = {individualkeyselected}
        setIndividualkeyselected = {setIndividualkeyselected}
        informationscreen = {informationscreen}
        SetInformationscreen={SetInformationscreen}
        chooseit = {chooseit}
        resultanalysis = {resultanalysis}
        boxoferrors = {boxoferrors}
        SetBoxoferrors = {SetBoxoferrors}
        positioninthegame = {positioninthegame}
        setPositioninthegame = {setPositioninthegame}
        setChooseyouroption= {setChooseyouroption}
        showit = {showit}
        setShowit={setShowit}
        disabledkey = {disabledkey}
        setDisabledkey = {setDisabledkey}
        displayfocus= {displayfocus}
        keysonscreen ={keysonscreen}
        setKeysonscreen={setKeysonscreen}
        gotitright = {gotitright}
        setGotitright = {setGotitright}>
      </Letters>

    </div>
  );
}