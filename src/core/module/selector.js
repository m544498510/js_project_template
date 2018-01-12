
export function getModuleState(state){
  return state.module
}

export function getText(state) {
  return getModuleState(state).text;
}
