const path = require('path');
const fs = require('fs');
const prompt = require('prompt');
const {
  getActionsData,
  getReducerData,
  getAppIndexData,
  getReadMeData,
  getAppComponentData,
  getConstantsData
} = require('./Global/createWidgetFuctions');

const createWidget = widgetName => {
  const widgetNameArray = widgetName.split(' ');
  let camelCaseWidgetName;
  widgetNameArray.forEach((word, index) => {
    if (index === 0)
      camelCaseWidgetName = word.replace(word[0], word[0].toLowerCase());
    else camelCaseWidgetName += word.replace(word[0], word[0].toUpperCase());
  });
  const widgetPath = path.resolve(__dirname, './widget/', widgetName);
  const helpersPath = path.resolve(`${widgetPath}/_helpers`);
  const actionsPath = path.resolve(`${widgetPath}/actions`);
  const reducerPath = path.resolve(`${widgetPath}/reducer`);
  const appPath = path.resolve(`${widgetPath}/components/App`);

  fs.mkdir(widgetPath, () => {
    fs.writeFileSync(`${widgetPath}/README.md`, getReadMeData(widgetName));
  });
  fs.mkdir(helpersPath, { recursive: true }, () => {
    fs.writeFileSync(
      `${helpersPath}/constants.js`,
      getConstantsData(widgetName)
    );
  });
  fs.mkdir(actionsPath, { recursive: true }, () => {
    fs.writeFileSync(
      `${actionsPath}/${camelCaseWidgetName}Actions.js`,
      getActionsData(widgetName, camelCaseWidgetName)
    );
  });
  fs.mkdir(reducerPath, { recursive: true }, () => {
    fs.writeFileSync(
      `${reducerPath}/${camelCaseWidgetName}Reducer.js`,
      getReducerData(camelCaseWidgetName)
    );
  });
  fs.mkdir(appPath, { recursive: true }, () => {
    fs.writeFileSync(
      `${appPath}/index.js`,
      getAppIndexData(widgetName, camelCaseWidgetName)
    );
    fs.writeFileSync(
      `${appPath}/component.jsx`,
      getAppComponentData(widgetName)
    );
  });
};

const schema = {
  properties: {
    widgetName: {
      description: 'Widget Name in camelCase',
      pattern: /^[a-zA-Z]+$/,
      message: 'Name can consists of Alphabets',
      required: true
    }
  }
};

prompt.start();
prompt.get(schema, (err, result) => {
  // eslint-disable-next-line no-console
  if (err) console.log(err);
  else createWidget(result.widgetName);
});
