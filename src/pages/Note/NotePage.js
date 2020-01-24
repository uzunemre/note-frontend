import React from 'react';
import {connect} from 'react-redux';
import noteActions from '../../redux/notes/actions';
import NoteList from "./NoteList";

const {listNotes, changeNote, addNote, editNote, deleteNote} = noteActions;

class NotePage extends React.Component {

    constructor(props) {
        super(props);
        this.updateNote = this.updateNote.bind(this);
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes() {
        const {listNotes} = this.props;
        listNotes();
    }

    updateNote(event) {
        const {editNote, selectedId} = this.props;
        editNote(selectedId, event.target.value);
    }

    render() {
        const {
            notes,
            selectedId,
            changeNote,
            deleteNote,
            addNote,
        } = this.props;
        let selectedNote = null;
        if (selectedId !== undefined) {
            selectedNote = notes.filter(note => note.id === selectedId)[0];
        }
        return (
            <div className="noteContainer">
                <div style={{width: '340px', padding: '.5rem 1rem'}} className="isoNoteListSidebar">
                    <NoteList
                        notes={notes}
                        selectedId={selectedId}
                        changeNote={changeNote}
                        deleteNote={deleteNote}
                    />
                </div>

                <section className="isoNotepadWrapper ant-layout">
                    <header className="isoHeader ant-layout-header">
                        <button onClick={addNote}
                                className="isoAddNoteBtn">
                            <span>Add New Note</span></button>
                    </header>
                    <div className="isoNoteEditingArea ant-layout-content">
                        {(selectedNote !== null) ? (
                            <textarea value={selectedNote.note} onChange={this.updateNote}
                                      className="ant-input isoNoteTextbox"/>
                        ) : (
                            ''
                        )}
                    </div>
                </section>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const {notes, selectedId} = state.Notes;
    return {
        notes,
        selectedId,
    };
}

export default connect(
    mapStateToProps,
    {
        listNotes,
        addNote,
        editNote,
        deleteNote,
        changeNote,
    }
)(NotePage);
