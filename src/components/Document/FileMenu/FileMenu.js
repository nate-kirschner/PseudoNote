import { useState, useRef, useEffect } from 'react';
import { save } from 'save-file';

import './FileMenu.scss';

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
            <div className="menuItemBlock newDocumentButton"
                onClick={() => generateNewTextArea()}
            >
                + New Document
            </div>
            <label 
                for="uploadFile" 
                className="menuItemBlock"
                id="uploadFileLabel" 
                onChange={(e) => uploadFile(e)} 
                accept=".psn"
            >Upload</label>
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
                            <i className="saveIcon" onClick={() => saveFile(name)}>S</i>
                        </div>
                    )
                })
            }
        </div>
    )
}