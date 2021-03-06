/* Types */
export const AGEOFF_COLLECTION = "AGEOFF_COLLECTION";
export const SET_ENTITY_AGEOFF = "SET_AGEOFF";
export const SET_OBSERVATION_AGEOFF = "SET_AGEOFF";
export const CREATE_COLLECTION = "CREATE_COLLECTION";
export const DELETE_COLLECTION = "DELETE_COLLECTION";
export const DELETE_FROM_COLLECTION = "DELETE_FROM_COLLECTION";
export const UPDATE_COLLECTION = "UPDATE_COLLECTION";

/* Actions */
export const createCollection = (id, name, queries) => ({
  type: CREATE_COLLECTION,
  id,
  name,
  queries
});
export const deleteCollection = id => ({
  type: DELETE_COLLECTION,
  id
});
export const updateCollection = (id, data) => ({
  type: UPDATE_COLLECTION,
  id,
  data
});
export const deleteFromCollection = (id, ids) => ({
  type: DELETE_FROM_COLLECTION,
  id,
  ids
});
export const setEntityAgeoff = (id, ageoff) => ({
  type: SET_ENTITY_AGEOFF,
  id,
  ageoff
});
export const setObservationAgeoff = (id, ageoff) => ({
  type: SET_OBSERVATION_AGEOFF,
  id,
  ageoff
});
export const ageoffCollection = id => ({
  type: AGEOFF_COLLECTION,
  id
});
