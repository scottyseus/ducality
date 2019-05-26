import { connect } from 'react-redux'
import Realm from '../components/Realm';

const mapStateToProps = state => ({
    grid: state.match.game.realm
});

const RealmContainer = connect(mapStateToProps)(Realm);

export default RealmContainer;