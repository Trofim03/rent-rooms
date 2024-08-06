import * as reactRedux from 'react-redux';
import { RootState } from '../store';

/**
 * возвращает типизированный store
 */
export const useTypedSelector: reactRedux.TypedUseSelectorHook<RootState> = reactRedux.useSelector;