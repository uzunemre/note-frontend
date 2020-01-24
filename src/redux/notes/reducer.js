import actions from './actions';

const notes = [];

const initState = {
    notes,
    selectedId: notes.length > 0 ? notes[0].id : undefined,
};

export default function noteReducer(state = initState, action) {
    switch (action.type) {
        case actions.LIST_NOTE:
            return {
                notes: action.notes,
                selectedId: action.selectedId
            };
        case actions.CHANGE_NOTE:
            return {
                ...state,
                selectedId: action.selectedId,
            };
        case actions.ADD_NOTE:
            return {
                notes: action.notes,
                selectedId: action.selectedId
            };
        case actions.EDIT_NOTE:
            return {
                ...state,
                notes: action.notes
            };
        case actions.DELETE_NOTE:
            return {
                notes: action.notes,
                selectedId: action.selectedId
            };
        default:
            return state;
    }
}
