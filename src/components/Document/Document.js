import Header from './Header/Header';
import FileMenu from './FileMenu/FileMenu';
import TextArea from './TextArea/TextArea';

import './Document.scss';

export default function Document() {
    return (
        <div className="document">
            <Header />
            <FileMenu />
            <TextArea />
        </div>
    )
}