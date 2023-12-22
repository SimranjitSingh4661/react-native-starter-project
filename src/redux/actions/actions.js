import {DEACTIVATE_PLAN, SET_PLATFORM, SUBSCRIVE_PLAN} from '../constants';

export function setPlatforms(data) {
  return {
    type: SET_PLATFORM,
    payload: data,
  };
}

export function subscrivePlan(data) {
  console.log('subscrivePlan', data.id)
  return {
    type: SUBSCRIVE_PLAN,
    payload: data,
  };
}

export function deactivatePlan(id) {
  return {
    type: DEACTIVATE_PLAN,
    payload: id,
  };
}
