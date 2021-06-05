const getReducerData = widgetName => {
  return `import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { ${widgetName.toUpperCase()}_UNMOUNT } from '__GLOBAL__/constants';

const defaultState = {
  data: []
};

const ${widgetName}Reducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [${widgetName.toUpperCase()}_UNMOUNT]: (state, action) => ({
    ...state,
    data: []
  })
};

export default createReducer(defaultState, ${widgetName}Reducer);
`;
};

const getAppIndexData = (widgetName, camelCaseName) => {
  return `import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ${camelCaseName}Action from '__SRC__/actions';
import ${widgetName} from './component';

const mapStatetoProps = state => ({
  ...state.${camelCaseName}Reducer,
  dataLoaded: state.routingReducer.dataLoaded
});

const mapDispatchtoProps = dispatch =>
  bindActionCreators(${camelCaseName}Action, dispatch);

export default connect(mapStatetoProps, mapDispatchtoProps)(${widgetName});
`;
};

const getReadMeData = (widgetName, camelCaseName) => {
  return `1. Add routing path in /src/Global/constants.js.
  2. Add ${widgetName}Reducer in /src/rootReducer.js.
  3. Create Routing component reference in /src/Routing/App/Component.jsx. Choose publicRoute if pages dont require login otherwise choose privateRoute.
  4. export const ${widgetName.toUpperCase()}_UNMOUNT = '${widgetName.toUpperCase()}_UNMOUNT';
  5. export const ${camelCaseName}Unmount = createAction(${widgetName.toUpperCase()}_UNMOUNT);
  `;
};

const getAppComponentData = widgetName => {
  return `import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Loading from '__SHARED__/Loading';

const styles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
}));

const ${widgetName} = props => {
  const { dataLoaded, commonLoader, ${widgetName}Unmount() } = props;
  const classes = styles(props);
  
  useEffect(() => {
    commonLoader(true);
    return () => ${widgetName}Unmount();
  }, [commonLoader, ${widgetName}Unmount]);

  return (
    <React.Fragment>
      <Loading open={!dataLoaded} />
      <Grid container className={classes.container}>
        ${widgetName} widget is created and ready to use.
      </Grid>
    </React.Fragment>
  );
};

${widgetName}.propTypes = {
  commonLoader: PropTypes.func.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  ${widgetName}Unmount: PropTypes.func.isRequired,
};
${widgetName}.defaultProps = {};

export default ${widgetName};
`;
};

module.exports = {
  getReducerData,
  getAppIndexData,
  getReadMeData,
  getAppComponentData
};
