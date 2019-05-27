import { connect } from 'react-redux';
import { setZones } from '../store/realm.actions';
import MapImporter from '../util/mapImporter';

import GameConfigurer from '../components/GameConfigurer';

const mapImporter = new MapImporter();

const mapDispatchToProps = dispatch => ({
  setMap: map => dispatch(setZones(mapImporter.importMap(map)))
})

export default connect(
  null,  
  mapDispatchToProps
)(GameConfigurer)