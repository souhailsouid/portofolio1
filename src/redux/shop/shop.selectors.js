import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectCollections = createSelector([ selectShop ], (shop) => shop.collections)
export const selectCollectionsForPreview = createSelector(
	[ selectCollections ],
	(collections) => (collections ? Object.keys(collections).map((key) => collections[key]) : [])
)
export const selectCollection = (collectionUrlParam) =>
	createSelector([ selectCollections ], (collections) => (collections ? collections[collectionUrlParam] : null))

export const selectIsCollectionFetching = createSelector([ selectShop ], (shop) => shop.isFetching)
export const selectIsCollectionsLoaded = createSelector([ selectShop ], (shop) => shop.collections)
console.log('miaou', selectIsCollectionsLoaded)
//* Using an array of state example: []*

// const COLLECTION_ID_MAP = {
// 	hats: 1,
// 	sneakers: 2,
// 	jackets: 3,
// 	womens: 4,
// 	mens: 5
// }
// export const selectCollection = (collectionUrlParam) =>
// createSelector([ selectCollections ], (collections) =>
// 	collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
// )
