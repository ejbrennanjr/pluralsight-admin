import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

// Using ES6 shorthand property names.  Could have read {courses:courses}
const rootReducer = combineReducers({
    courses, 
    authors,
    ajaxCallsInProgress
});

export default rootReducer;
