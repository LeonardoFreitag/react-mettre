import Realm from 'realm';

import ConfigSchema from '../schemas/ConfigSchemas';
import ProdutosSchema from '../schemas/ProdutosSchema';
import ObsSchema from '../schemas/ObsSchema';

export default function getRealm() {
  return Realm.open({
    schema: [ConfigSchema, ProdutosSchema, ObsSchema],
    schemaVersion: 4,
  });
}
