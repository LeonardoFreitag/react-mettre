export default class ObsSchema {
  static schema = {
    name: 'Obs',
    primaryKey: 'codigo',
    properties: {
      codigo: {type: 'string', indexed: true},
      obs: 'string',
      grupo: 'string',
    },
  };
}
