import * as apiCalls from "../../api/apiCalls";

const notesAction = {

    LIST_NOTE: 'LIST_NOTE',
    ADD_NOTE: 'ADD_NOTE',
    CHANGE_NOTE: 'CHANGE_NOTE',
    EDIT_NOTE: 'EDIT_NOTE',
    DELETE_NOTE: 'DELETE_NOTE',

    listNotes: () => {
        return (dispatch, getState) => {
            try {
                let data = localStorage.getItem('note-auth');
                if (data) {
                    const user = JSON.parse(data);
                    apiCalls.listNotes(user.id).then((response) => {
                        const notes = response.data;
                        dispatch({
                            type: notesAction.LIST_NOTE,
                            selectedId: notes.length > 0 ? response.data[0].id : undefined,
                            notes
                        });
                    });
                }
            } catch (e) {
                throw (e);
            }
        };
    },
    addNote: () => {
        return (dispatch, getState) => {
            try {
                let data = localStorage.getItem('note-auth');
                const user = JSON.parse(data);
                const newNote = {
                    userId: user.id,
                    title: 'New Note',
                    note: 'New Note'
                };
                apiCalls.addNote(newNote).then((response) => {
                    const notes = [response.data, ...getState().Notes.notes];
                    dispatch({
                        type: notesAction.ADD_NOTE,
                        selectedId: newNote.id,
                        notes
                    });
                });
            } catch (e) {
                throw (e);
            }
        };
    },
    deleteNote: id => {
        return (dispatch, getState) => {
            try {
                apiCalls.deleteNote(id).then((response) => {
                    const oldNotes = getState().Notes.notes;
                    const notes = [];
                    oldNotes.forEach(note => {
                        if (note.id !== id) {
                            notes.push(note);
                        }
                    });
                    let selectedId = getState().Notes.selectedId;
                    if (selectedId === id) {
                        if (notes.length === 0) {
                            selectedId = undefined;
                        } else {
                            selectedId = notes[0].id;
                        }
                    }
                    dispatch({
                        type: notesAction.DELETE_NOTE,
                        notes,
                        selectedId
                    });
                });
            } catch (e) {
                throw (e);
            }
        };

    },
    changeNote: id => {
        return (dispatch, getState) => {
            dispatch({
                type: notesAction.CHANGE_NOTE,
                selectedId: id
            });
        };
    },
    editNote: (id, newNote) => {
        return (dispatch, getState) => {
            const oldNotes = getState().Notes.notes;
            const notes = [];
            oldNotes.forEach(note => {
                if (note.id !== id) {
                    notes.push(note);
                } else {
                    note.note = newNote;
                    notes.push(note);
                }
                dispatch({
                    type: notesAction.EDIT_NOTE,
                    notes
                });
            });
            try {
                apiCalls.editNote(id, newNote).then((response) => {

                });
            } catch (e) {
                dispatch({
                    type: notesAction.EDIT_NOTE,
                    oldNotes
                });
            }
        };
    },

};
export default notesAction;
