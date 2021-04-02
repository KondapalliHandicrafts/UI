const getReducerData = widgetName => {
  return `import { PURGE } from 'redux-persist';
import { createReducer } from '__GLOBAL__/redux';
import { UNMOUNT, ${widgetName.toUpperCase()}_LOADER } from '__GLOBAL__/constants';

const defaultState = {
  data: [],
  dataLoaded: false
};

const ${widgetName}Reducer = {
  [PURGE]: () => {
    return defaultState;
  },
  [${widgetName.toUpperCase()}_LOADER]: (state, action) => ({
    ...state,
    dataLoaded: action.value
  }),
  [UNMOUNT]: state => ({
    ...state,
    dataLoaded: false,
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
  ...state.${camelCaseName}Reducer
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
  4. export const ${widgetName.toUpperCase()}_LOADER = '${widgetName.toUpperCase()}_LOADER';
  5. export const ${camelCaseName}Loader = createAction(${widgetName.toUpperCase()}_LOADER, 'value');
  `;
};

const getAppComponentData = widgetName => {
  return `import React from 'react';
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
  const { dataLoaded } = props;
  const classes = styles(props);
  return (
    <React.Fragment>
      <Loading open={dataLoaded} />
      <Grid container className={classes.container}>
        ${widgetName} widget is created and ready to use.
      </Grid>
    </React.Fragment>
  );
};

${widgetName}.propTypes = {
  dataLoaded: PropTypes.bool.isRequired
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
