export type keyboardActionsMap<Actions> = {
  [keyCode: number]: Function;
} & Actions;
