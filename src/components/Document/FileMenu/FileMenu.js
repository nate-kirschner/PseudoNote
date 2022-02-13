import { useState, useRef, useEffect } from 'react';
import { save } from 'save-file';

import './FileMenu.scss';

/* <a href="https://icons8.com/icon/UMe7Vqu3pLBX/add-file">Add File icon by Icons8</a> */
/* <img src="https://img.icons8.com/material-outlined/24/000000/upload--v1.png"/> */

export default function FileMenu({ textAreas, setTextAreas, createNewTextArea, selectedTextArea, setSelectedTextArea, mode, setMode }) {

    const [creatingNew, setCreatingNew] = useState(false);
    const [newFileName, setNewFileName] = useState("");

    const inputRef = useRef(null);
 
    const generateNewTextArea = () => {
        setCreatingNew(true);
    }

    useEffect(() => {
        if (creatingNew) {
            inputRef.current.focus();
        } else {
            setNewFileName("")
        }
    }, [creatingNew])

    const handleEnterPress = (e) => {
        if (e.key === "Enter") {
            createNewTextArea(newFileName)
            setCreatingNew(false)
            setNewFileName("")
            setMode("text")
        }
    }

    const saveFile = async (name) => {
        await save(JSON.stringify(textAreas[name]), `${name}.psn`);
    }

    const uploadFile = (event) => {
        event.preventDefault()
        const reader = new FileReader()
        const fileName = event.target.files[0].name;
        reader.onload = async (e) => { 
            const text = (e.target.result)
            setTextAreas({
                ...textAreas,
                [fileName]: {
                    ...JSON.parse(text),
                    order: Object.keys(textAreas).length
                },
            })
        };
        reader.readAsText(event.target.files[0])
    }

    return (
        <div className={`fileMenu ${mode=="text" ? "fileMenuText" : "fileMenuCode"}`}>
            <div className="uploadContainer">
                <div className="menuItemBlock newDocumentButton"
                    onClick={() => generateNewTextArea()}
                >
                    <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/30/000000/external-add-file-folder-and-document-kmg-design-detailed-outline-kmg-design.png"/>
                </div>
                <label 
                    for="uploadFile" 
                    className="menuItemBlock uploadButton"
                    id="uploadFileLabel" 
                    onChange={(e) => uploadFile(e)} 
                    accept=".psn">
                        <img src="https://img.icons8.com/material-outlined/30/000000/upload--v1.png"/>
                </label>
                </div>
            <input type="file" id="uploadFile" onChange={(e) => uploadFile(e)}  />
            
            
            <div className={"menuItemBlock " + (creatingNew ? "visible" : "hidden")}>
                <input 
                    className="fileNameInput"
                    ref={inputRef}
                    type="text" 
                    value={newFileName}
                    onChange={(e) => setNewFileName(e.target.value)} 
                    onKeyDown={(e) => handleEnterPress(e)}
                />
            </div>
                
            {
                Object.keys(textAreas).map(name => {
                    return (
                        <div className="menuItemBlock" onClick={() => setSelectedTextArea(name)}>
                            {name}
                            {/* <i className="saveIcon" onClick={() => saveFile(name)}>S</i> */}
                        </div>
                    )
                })
            }
            <i className="saveIcon" onClick={() => saveFile(selectedTextArea)}>Save File</i>
        </div>
    )
}