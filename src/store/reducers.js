import * as types from './types';
import { combineReducers } from 'redux';

const defaultState = {
    regUser: true,
    ads: [],
    ad: {},
    tags: [],
    favs: [],
    session: { success: false },
    response: {},
    ui: {
        loading: false,
        error: null,
    }
};

export const regUser = (state = defaultState.regUser, action) => {
    switch (action.type) {
        case types.REGISTER_USER_SUCCESFULL:
            return action.regUser;
        case types.REGISTER_USER_FAILURE:
            return action.error;
        default:
            return state;
    }
};

export const session = (state = defaultState.session, action) => {
    switch (action.type) {
        case types.SESSION_USER_SUCCESFULL:
            return action.session;
        case types.SESSION_USER_FAILURE:
            return action.error;
        case types.LOGOUT:
            return defaultState.session;
        case types.DELETE_PROFILE:
            return defaultState.session;
        case types.DELETE_PROFILE_FAIL:
            return action.error;
        case types.UPDATE_PROFILE_SUCCESS:
            return action.response;
        case types.UPDATE_PROFILE_FAIL:
            return defaultState;
        default:
            return state;
    }
};

export const ads = (state = defaultState.ads, action) => {
    switch (action.type) {
        case types.GET_ADS_SUCCESFULL:
            return action.ads;
        case types.GET_ADS_FAILURE:
            return action.error;
        case types.REVERT_ADS:
            return action.ads;
        
        default:
            return state;
    }
};

export const ad = (state = defaultState.ad, action) => {
    switch (action.type) {
        case types.GET_AD_SUCCESFULL:
            return action.ad;
        case types.GET_AD_FAILURE:
            return action.error;
        case types.NEW_AD_SUCCESFULL:
            return defaultState.ad;
        case types.NEW_AD_FAILURE:
            return action.error;
        case types.DELETE_AD_SUCCESFULL:
            return defaultState.ad;
        case types.DELETE_AD_FAILURE:
            return defaultState;
        default:
            return state;
    }
};

export const favs = (state = defaultState.favs, action) => {
    switch (action.type) {
        case types.GET_FAVORITES_SUCCESFULL:
            return action.favs;
        case types.GET_FAVORITES_FAILURE:
            return action.error;
        case types.ADD_FAVORITE_SUCCESFULL:
            return action.favs;
        case types.ADD_FAVORITE_FAILURE:
            return action.error;
        case types.DELETE_FAVORITE_SUCCESFULL:
            return action.favs;
        case types.DELETE_FAVORITE_FAILURE:
            return action.error;
        default:
            return state;
    }
};

export const tags = (state = defaultState.tags, action) => {
    switch (action.type) {
        case types.GET_TAGS_SUCCESFULL:
            return action.tags;
        case types.GET_TAGS_FAILURE:
            return action.error;
        default:
            return state;
    }
};

const reducer = combineReducers({
   regUser,
    ads,
    tags,
    session,
    ad,
    favs,
});

export default reducer;