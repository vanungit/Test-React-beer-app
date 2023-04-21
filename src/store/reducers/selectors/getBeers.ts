import { RootState } from '../../store';

export const getBeersSelector = (state: RootState) => state.beersReducer;
