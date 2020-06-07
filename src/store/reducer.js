import * as actionTypes from './action';
import initialData from '../initialData';

const initData = initialData();

const initialState = {
    
        toDo: initData(0),
        inProgress: initData(1),
        inReview: initData(2),
        done: initData(3),
        groupList: ['toDo', 'inProgress', 'inReview', 'done']
    
};

const deepCopyFunction = (inObject) => {
    let outObject, value, key
  
    if (typeof inObject !== "object" || inObject === null) {
      return inObject // Return the value if inObject is not an object
    }
  
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}
  
    for (key in inObject) {
      value = inObject[key];
  
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = deepCopyFunction(value)
    }
  
    return outObject
  }

const reducer = (state = initialState, action) =>{
    // console.log(action.payload);
        switch(action.type){
            case actionTypes.GRP_TASK_REORDER:
                return {
                    ...state,
                    [action.reOrderedData.groupId] : {...state[action.reOrderedData.groupId]}
                };

            case actionTypes.CHANGE_TASK_STATUS:

                const clonedState2 = deepCopyFunction(state);
                clonedState2[action.updatedData.groupId] = action.updatedData;
               
                return clonedState2;

            case actionTypes.ADD_NEW_TASK:
                const clonedState3 = deepCopyFunction(state);
                clonedState3.toDo.tasks = clonedState3.toDo.tasks.concat([action.newTask]);
                    return clonedState3;
            default:

                return state;
        }
        
    
}

export default reducer;