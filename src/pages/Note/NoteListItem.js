import React from 'react';
import {timeDifference} from "../../utils/utils";


const NoteListItem = (props) => {
    const {selectedId, deleteNote, changeNote, note} = props;
    const activeClass = selectedId === note.id ? "active" : "";
    const onChange = () => changeNote(note.id);
    const onDelete = () => deleteNote(note.id);
    return (
        <div className={`isoList ${activeClass}`}>
            <div className="isoNoteText" onClick={onChange}>
                <h3>{note.note}</h3>
                <span className="isoNoteCreatedDate">
                    {timeDifference(note.modifiedDate)}
          </span>
            </div>
            <button
                className="isoDeleteBtn"
                type="button"
                onClick={onDelete}>
                X
            </button>
        </div>
    );
};

export default NoteListItem;
