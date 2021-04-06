import * as R from 'ramda';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getAllActiveJobs } from '../src/redux/jobs/jobs.duck';
import * as selectors from '../src/redux/jobs/jobs.selector'

const App = ({ actions, isLoading }) => {
  useEffect(() => {
    actions.getAllActiveJobs();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div>
          Loaded!
        </div>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      getAllActiveJobs,
    },
    dispatch
  ),
});

const mapStateToDispatch = R.applySpec({
  isLoading: selectors.isLoadingSelector,
});

export default connect(mapStateToDispatch, mapDispatchToProps)(App);
