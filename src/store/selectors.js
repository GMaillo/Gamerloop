export const getRegistUser = state => state.regUser;
export const getAllAds = state => state.ads;
export const getAllTags = state => state.tags;
export const getAd = state => state.ad;
export const getSession = state => state.session;

export const getAllAdsUser = state => username => {
      return  state.ads.filter(ad => {
            if(ad.autor.username === username) {
                return ad;
            }
        });
};

export const userLogged = state => {
    const session = getSession(state);
    return Boolean(session.success && session.session);
};

export const getFavorites = state => state.favs;