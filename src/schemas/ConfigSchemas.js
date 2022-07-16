export default class ConfigSchema {
  static schema = {
    name: 'Config',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      ip: 'string',
      destino: 'bool',
    },
  };
}
