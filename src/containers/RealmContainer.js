import { connect } from 'react-redux'
import Realm from '../components/Realm';

const mapStateToProps = state => ({
    grid: state.realm
});

const RealmContainer = connect(mapStateToProps)(Realm);

export default RealmContainer;