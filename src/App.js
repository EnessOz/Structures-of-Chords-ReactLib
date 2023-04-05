import { useState } from "react";
import { BsGithub } from 'react-icons/bs'
import audioFileA from "./audio/A.mp3"
import audioFileAd from "./audio/Ad.mp3"
import audioFileB from "./audio/B.mp3"
import audioFileC from "./audio/C.mp3"
import audioFileCd from "./audio/Cd.mp3"
import audioFileD from "./audio/D.mp3"
import audioFileDd from "./audio/Dd.mp3"
import audioFileE from "./audio/E.mp3"
import audioFileF from "./audio/F.mp3"
import audioFileFd from "./audio/Fd.mp3"
import audioFileG from "./audio/G.mp3"
import audioFileGd from "./audio/Gd.mp3"
import audioFileAoctv from "./audio/Aoctv.mp3"
import audioFileAdoctv from "./audio/Adoctv.mp3"
import audioFileBoctv from "./audio/Boctv.mp3"
import audioFileCoctv from "./audio/Coctv.mp3"
import audioFileCdoctv from "./audio/Cdoctv.mp3"
import audioFileDoctv from "./audio/Doctv.mp3"
import audioFileDdoctv from "./audio/Ddoctv.mp3"





function App() {
  const [btnCreated, setBtnCreated] = useState(Array(6).fill(false));
  const [BtnCreated2, setBtnCreated2] = useState(Array(6).fill(false));
  const [hzName, setHzName] = useState("Frequency")
  const git = () => {
    window.open("https://github.com/EnessOz")
  }


  const playNote = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
  }

  const Minorchords = [
    { name: "Am", notes: [
        { name: "A", Hz:"220.00", audio: audioFileA },
        { name: "C", Hz:"261.63", audio: audioFileC },
        { name: "E", Hz: "329.63", audio: audioFileE }, 
      ]
    },
    { name: "A#m", notes: [
        { name: "A#", Hz:"233.08", audio: audioFileAd },
        { name: "C#", Hz:"277.18", audio: audioFileCd },
        { name: "F", Hz:"349.23", audio: audioFileF },
      ]
    },
    { name: "Bm", notes: [
        { name: "B", Hz:"246.94", audio: audioFileB },
        { name: "D", Hz:"293.66", audio: audioFileD },
        { name: "F#", Hz:"369.99", audio: audioFileFd },
      ]
    },
    { name: "Cm", notes: [
        { name: "C", Hz:"261.63", audio: audioFileC },
        { name: "D#",Hz:"311.13", audio: audioFileDd },
        { name: "G", Hz:"392.00", audio: audioFileG },
      ]
    },
    { name: "C#m", notes: [
        { name: "C#",Hz:"277.18", audio: audioFileCd },
        { name: "E",Hz:"329.63", audio: audioFileE },
        { name: "G#",Hz:"415.30", audio: audioFileGd },
      ]
    },
    { name: "Dm", notes: [
        { name: "D",Hz:"293.66", audio: audioFileD },
        { name: "F",Hz:"349.23", audio: audioFileF },
        { name: "A",Hz:"440.00", audio: audioFileAoctv },
      ]
    },
    { name: "D#m", notes: [
      { name: "D#",Hz:"311.13", audio: audioFileDd },
      { name: "F#",Hz:"369.99", audio: audioFileFd },
      { name: "A#",Hz:"466.16", audio: audioFileAdoctv }, 
    ]
    },
    { name: "Em", notes: [
    { name: "E",Hz:"329.63", audio: audioFileE },
    { name: "G",Hz:"392.00", audio: audioFileG },
    { name: "B",Hz:"493.88", audio: audioFileBoctv }, 
  ]
    },
    { name: "Fm", notes: [
  { name: "F",Hz:"349.23", audio: audioFileF },
  { name: "G#",Hz:"415.30", audio: audioFileGd },
  { name: "C",Hz:"523.25", audio: audioFileCoctv }, 
]
    },
    { name: "F#m", notes: [
  { name: "F#",Hz:"369.99", audio: audioFileFd },
  { name: "A",Hz:"440.00", audio: audioFileAoctv },
  { name: "C#",Hz:"554.37", audio: audioFileCdoctv }, 
]
    },
    { name: "Gm", notes: [
  { name: "G",Hz:"392.00", audio: audioFileG },
  { name: "A#",Hz:"466.16", audio: audioFileAdoctv },
  { name: "D",Hz:"587.33", audio: audioFileDoctv }, 
]
    },
    { name: "G#m", notes: [
  { name: "G#",Hz:"415.30", audio: audioFileGd },
  { name: "B",Hz:"493.88", audio: audioFileBoctv },
  { name: "D#",Hz:"622.25", audio: audioFileDdoctv }, 
]
    },];
  
 const majorChords = [
   
    { name: "A", notes: [
        { name: "A",Hz:"220.00", audio: audioFileA },
        { name: "C#",Hz:"277.18", audio: audioFileCd },
        { name: "E",Hz:"329.63", audio: audioFileE },
      ]
    },
    { name: "A#", notes: [
        { name: "A#",Hz:"233.08", audio: audioFileAd },
        { name: "D",Hz:"293.66", audio: audioFileD },
        { name: "F",Hz:"349.23", audio: audioFileF }, 
      ]
    },
    { name: "B", notes: [
      { name: "B",Hz:"246.94", audio: audioFileB },
      { name: "D#",Hz:"311.13", audio: audioFileDd },
      { name: "F#",Hz:"369.99", audio: audioFileFd }, 
    ]
    },
    { name: "C", notes: [
      { name: "C",Hz:"261.63", audio: audioFileC },
      { name: "E",Hz:"326.63", audio: audioFileE },
      { name: "G",Hz:"392.00", audio: audioFileG }, 
    ]
    },
    { name: "C#",Hz:"", notes: [
      { name: "C#",Hz:"277.18", audio: audioFileCd },
      { name: "F",Hz:"349.23", audio: audioFileF },
      { name: "G#",Hz:"415.30", audio: audioFileGd }, 
    ]
    },
    { name: "D", notes: [
      { name: "D",Hz:"277.18",  audio: audioFileD },
      { name: "F#",Hz:"369.99",  audio: audioFileFd },
      { name: "A",Hz:"440.00",  audio: audioFileAoctv }, 
    ]
    },
    { name: "D#", notes: [
      { name: "D#",Hz:"311.13",  audio: audioFileDd },
      { name: "G",Hz:"392.00",  audio: audioFileG },
      { name: "A#",Hz:"466.16",  audio: audioFileAdoctv }, 
    ]
    },
    { name: "E", notes: [
      { name: "E",Hz:"329.63",  audio: audioFileE },
      { name: "G#",Hz:"415.30",  audio: audioFileGd },
      { name: "B",Hz:"493.88",  audio: audioFileBoctv }, 
    ]
    },
    { name: "F", notes: [
      { name: "F",Hz:"349.23",  audio: audioFileF },
      { name: "A",Hz:"440.00",  audio: audioFileAoctv },
      { name: "C",Hz:"523.25",  audio: audioFileCoctv }, 
    ]
    },
    { name: "F#", notes: [
      { name: "F#",Hz:"369.99",  audio: audioFileFd },
      { name: "A#",Hz:"466.16",  audio: audioFileAdoctv },
      { name: "C#",Hz:"554.37",  audio: audioFileCdoctv }, 
    ]
    },
    { name: "G", notes: [
      { name: "G",Hz:"392.00",  audio: audioFileG },
      { name: "B",Hz:"493.99",  audio: audioFileBoctv },
      { name: "D",Hz:"587.33",  audio: audioFileDoctv }, 
    ]
    },
    { name: "G#", notes: [
      { name: "G#",Hz:"415.30",  audio: audioFileGd },
      { name: "C",Hz:"523.25",  audio: audioFileCoctv },
      { name: "D#",Hz:"622.25",  audio: audioFileDdoctv }, 
    ]
    },];

  return (
    <>
   
      <div className="allChords">
        <div className="minorChords">
          <h1>Minor Chords</h1>

          {Minorchords.map((chord, index) => (
            <div className="crtbtns" key={index}>
              <button 
                    onClick={() => setBtnCreated((prevState) => {
                      const newBtnCreated = [...prevState];
                        newBtnCreated[index] = !newBtnCreated[index];
                        console.log("newBtnCreatednewBtnCreated",newBtnCreated)
                          return newBtnCreated;
                           })}>{chord.name}
              </button>
                  {btnCreated[index] && chord.notes.map((note, index) => (
              <button 
                    className="crtbtn" 
                      key={index} 
                        onClick={() => {
                           playNote(note.audio);
                            setHzName(`${note.Hz} Hz`);}}>
                              {note.name}
              </button>
                  ))}
              </div>
          ))}
        </div>
        <div className="majorChords">
          <h1>Major Chords</h1>

          {majorChords.map((chord, index) => (
            <div className="crtbtns" key={index}>
              <button
                  onClick={() => setBtnCreated2((prevState) => {
                    const newBtnCreated2 = [...prevState];
                     newBtnCreated2[index] = !newBtnCreated2[index];
                      return newBtnCreated2;
                        })}>{chord.name}
                </button>
                  {BtnCreated2[index] && chord.notes.map((note, index) => (
               <button 
                    className="crtbtn" 
                      key={index} 
                       onClick={() => {
                         playNote(note.audio);
                           setHzName(`${note.Hz} Hz`);}}>
                            {note.name}
                </button>
              ))}   
            </div>
          ))}
        </div>
        <div className="hzLink">
          <h1 className="Hz">{hzName}</h1>
          <button className="gitLink" onClick={git}><BsGithub/></button>
          
          </div>
          
      </div>
      
      
    </>
  );
}

export default App;
