import Unsplash,{ toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: "ea68ab6727b8cfbef7a47781e90d38425d22707d5bfb8d440e440e16890da12f",
  secret: "8f0cfa55745b586056e5d66c546fadd616b9de1c0f21c203085fed3dea4693bc"
});

export const SEARCH_IMAGE = 'SEARCH_IMAGE'
export const SEARCHING_IMAGE = 'SEARCHING_IMAGE'

const initialState = {
  value: [],
  searching: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case SEARCHING_IMAGE:
      return {
        ...state,
        searching: true
      }

    case SEARCH_IMAGE:
      return {
        ...state,
        value: action.payload,
        searching: false
      }

    default:
      return state
  }
}

export const searchImage = (e) => {
  return dispatch => {
    dispatch({
      type: SEARCHING_IMAGE
    })

    return unsplash.search.photos(e.target.querySelector('input').value, 1)
      .then(toJson)
      .then(json => {
        const results = json.results.map(x => x.urls.raw)

        dispatch({
          type: SEARCH_IMAGE,
          payload: results
        })
      })
  }
}