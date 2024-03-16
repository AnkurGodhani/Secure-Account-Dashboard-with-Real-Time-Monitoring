import React from 'react'
import SpeechRecognition,{ useSpeechRecognition } from 'react-speech-recognition'
const Graph = () => {

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if(!browserSupportsSpeechRecognition){
    return <span>Brower IS Not Sport Your Leptop.</span>
  }
  const startListening = () =>  SpeechRecognition.startListening({ continuous: false });
  return (
    <div id='3d-graph'>
      <input list='Screach' name='ok' value={transcript} onWaitingCapture=""/>
      <datalist id='Screach'>
        <option value="google"/>
        <option value="Google."/>
        <option value="ok"/>
      </datalist>

      <button type="button" onClick={startListening}>Start</button>
      <button type="button" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button type="button" onClick={resetTranscript}>Reset</button>
      <p>Start: {transcript} </p>
    </div>
  )
}

export default Graph