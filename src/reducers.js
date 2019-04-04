import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
     } from './constants.js'

const initialStateSearch = {
    searchField: ''
} //start point - initial state

export const searchRobots = (state=initialStateSearch, action={}) => { //reducer
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateRobots = {
        robots: [],
        isPending: false
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
        return Object.assign({}, state, { isPending: true})
    case REQUEST_ROBOTS_SUCCESS:
        return Object.assign({}, state, { robots: action.payload, isPending: false })
    case REQUEST_ROBOTS_FAILED:
        return Object.assign({}, state, { error: action.payload, isPending: false})
    default:
        return state;
    }
}

//3 PRINCIPLES 
//1. Single Source of Truth
//2. State is read only
//3. Changes using pure functions (get input and return an output - no side effects, no modifications.)