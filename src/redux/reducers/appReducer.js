import {DEACTIVATE_PLAN, SET_PLATFORM, SUBSCRIVE_PLAN} from '../constants';

const initialState = {
  platform: [],
  subscription: [],
};

const AppReducer = (state = initialState, action) => {
  console.log('Action-type0', action.type, action.payload);
  switch (action.type) {
    case SET_PLATFORM:
      return {
        subscription: [...state.subscription],
        platform: [...action.payload],
      };
    case SUBSCRIVE_PLAN:
      return {
        subscription: [...state.subscription, action.payload],
        platform: [...state.platform],
      };
      // return {
      //   subscription: [],
      //   platform: [...state.platform],
      // };
    // case DEACTIVATE_PLAN:
    //   return {};
    default:
      return state;
  }
};
export default AppReducer;
