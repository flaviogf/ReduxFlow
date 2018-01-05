declare type State = any;

declare type GetState = () => State;

declare type Action = {
  type: string,
  payload: any
};

declare type PromiseAction = Promise<Action>;

declare type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

declare type Dispatch = (
  action: Action | ThunkAction | PromiseAction | Array<Action>
) => any;
