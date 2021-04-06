import { createSelector } from 'reselect';
import * as R from 'ramda';

export const moduleSelector = R.prop('jobs');

export const isLoadingSelector = createSelector(moduleSelector, R.prop('isLoading'));
