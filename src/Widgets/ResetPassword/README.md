1. Add routing path in /src/Global/constants.js.
  2. Add ResetPasswordReducer in /src/rootReducer.js.
  3. Create Routing component reference in /src/Routing/App/Component.jsx. Choose publicRoute if pages dont require login otherwise choose privateRoute.
  4. In /src/Routing/component/App/Header.jsx add below format based on you values. Don't forget to increase the nodeId.
    "<RouteLink
      className={classes.navLink}
      to={paths.toPath}
      onClick={e=>toggleDrawer(e, false)}
      >
      <TreeItem
        isSelected={pathName===paths.toPath.subString(1)}
        nodeId="4"
        label={navLabels[paths.toPath.subString(1)]}
        />
        </RouteLink>
    "
  