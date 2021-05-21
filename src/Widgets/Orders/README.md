1. Add routing path in /src/Global/constants.js.
  2. Add OrdersReducer in /src/rootReducer.js.
  3. Create Routing component reference in /src/Routing/App/Component.jsx. Choose publicRoute if pages dont require login otherwise choose privateRoute.
  4. export const ORDERS_LOADER = 'ORDERS_LOADER';
  5. export const ordersLoader = createAction(ORDERS_LOADER, 'value');
  