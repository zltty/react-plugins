export interface Loading {
  global: boolean;
  effects: { [type: string]: boolean | undefined };
}
/**
 * 一个redux中间件
 * loading结构 {
 *   global: boolean;
 *   'xxx.effects/aaa':[type: string]: boolean | undefined
 * }
 *
 */
const NAMESPACE = 'loading';
const initState = {
  global: false,
};
interface IOptions {
  name?: string;
  [x: string]: any;
}
interface IAction {
  payload?: {
    [x: string]: any;
  };
  [x: string]: any;
}

export default function createLoading(options: IOptions = {}) {
  const _namespace = options.name || NAMESPACE;
  // 创建reducer
  return {
    namespace: _namespace,
    reducer: (state = initState, { type, actionType }: IAction) => {
      switch (type) {
        case `${_namespace}/@@show`: {
          return {
            ...state,
            global: true,
            [actionType]: true,
          };
        }
        case `${_namespace}/@@hide`: {
          return {
            ...state,
            global: false,
            [actionType]: false,
          };
        }
        default:
          return initState;
      }
    },
    middleware: () => (next: any) => (action: any) => next(action),
  };
}
