import { useState } from "react";
import FileLoad from './FileLoad/FileLoad';
import Document from './Document/Document';
import Header from './Document/Header/Header';

import './Main.scss';

export default function Main() {

    const [onDocumentPage, setOnDocumentPage] = useState(false);

    return (
        <div className="main">
            {
                onDocumentPage ? <FileLoad /> : <Document />
            }
        </div>
    )
}