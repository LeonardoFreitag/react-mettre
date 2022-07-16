import getRealm from './realm';

async function setObsRealm(obs) {
  const realm = await getRealm();

  const allObs = realm.objects('Obs');
  realm.write(() => {
    realm.delete(allObs);
  });

  try {
    obs.forEach(o => {
      let item = {
        codigo: o.codigo,
        obs: o.obs,
        grupo: o.grupo,
      };
      realm.write(() => {
        realm.create('Obs', item, 'modified');
      });
    });
  } catch (erro) {
    alert(erro);
  }
  const obsInsert = realm.objects('Obs');
  return obsInsert;
}

export {setObsRealm};
