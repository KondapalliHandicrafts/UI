1. Add routing path in /src/Global/constants.js.
  2. Add WishlistReducer in /src/rootReducer.js.
  3. Create Routing component reference in /src/Routing/App/Component.jsx. Choose publicRoute if pages dont require login otherwise choose privateRoute.
  4. export const WISHLIST_LOADER = 'WISHLIST_LOADER';
  5. export const wishlistLoader = createAction(WISHLIST_LOADER, 'value');
  