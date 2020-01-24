import React, {Component} from "react";
import NoteListItem from "./NoteListItem";

export default class extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            search: ""
        };
    }

    onChange(event) {
        this.setState({search: event.target.value});
    }

    render() {
        const {search} = this.state;
        const notes = filterNotes(this.props.notes, search);
        const {selectedId, deleteNote, changeNote} = this.props;
        return (
            <div>
                <input
                    placeholder="Search Notes"
                    className="isoSearchNotes"
                    value={search}
                    onChange={this.onChange}
                />
                <div className="isoNoteList">
                    {notes && notes.length > 0 ? (
                        notes.map(note => {
                                return <NoteListItem key={note.id} note={note} selectedId={selectedId}
                                                     deleteNote={deleteNote} changeNote={changeNote}/>
                            }
                        )
                    ) : (
                        <span className="isoNoResultMsg">No note found</span>
                    )}
                </div>
            </div>
        );
    }

}

function filterNotes(notes, search) {
    search = search.toUpperCase();
    if (search) {
        return notes.filter(note => note.note.toUpperCase().includes(search));
    }
    return notes;
}


