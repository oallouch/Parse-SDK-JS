import RNLocalDatastoreController from './LocalDatastoreController.react-native';
import DefaultLocalDatastoreController from './LocalDatastoreController.default';

let LocalDatastoreController: any = DefaultLocalDatastoreController;

if (process.env.PARSE_BUILD === 'react-native') {
  LocalDatastoreController = RNLocalDatastoreController;
}
module.exports = LocalDatastoreController;
export default LocalDatastoreController;