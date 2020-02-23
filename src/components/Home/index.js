import { connect } from 'react-redux';
import Home from './Home';
import {getAllAds, getAllTags} from "../../store/selectors";
import {fetchAds, fetchTags, fetchFilterAds, revertAds} from "../../store/actions";

function mapStateToProps(state) {
    return {
        ads: getAllAds(state),
        tags: getAllTags(state),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getAllAds: () => dispatch (fetchAds()),
        getAllTags: () => dispatch (fetchTags()),
        getFilterAds: (filters) => dispatch(fetchFilterAds(filters)),
        revertAds: (ads) => dispatch(revertAds(ads)),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);