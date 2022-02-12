import { useState } from 'react';
import { save } from 'save-file';

import './FileMenu.scss';

export default function FileMenu({ textAreas, setTextAreas, createNewTextArea, selectedTextArea, setSelectedTextArea }) {

    const [creatingNew, setCreatingNew] = useState(false);
    const [newFileName, setNewFileName] = useState("");

    const generateNewTextArea = () => {
        setCreatingNew(true)
    }

    const handleEnterPress = (e) => {
        if (e.key === "Enter") {
            createNewTextArea(newFileName)
            setCreatingNew(false)
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
            console.log(e)
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
        <div className="fileMenu">
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
            {
                creatingNew && (
                    <div className="menuItemBlock">
                        <input 
                            className="fileNameInput"
                            type="text" 
                            onChange={(e) => setNewFileName(e.target.value)} 
                            onKeyDown={(e) => handleEnterPress(e)}
                        />
                    </div>
                )
            }
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