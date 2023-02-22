import React from 'react'
import {useState} from "react"
import Letters from "./Letters"


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
  const [keysonscreen, setKeysonscreen] = React.useState('button-key-inactive')
  const [gotitright, setGotitright] = React.useState([])

  // constants that enable functionalities on the Letters.js - end//


  return (
    // creation configuration of Letters.js - outset //
    <div className='container'>
      
    
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