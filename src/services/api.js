import axios from 'axios';

function setUtl(ip) {
  const api = axios.create({
    // `//viacep.com.br/ws/${cep}/json`
    baseURL: `http://${ip}:3000/`,
  });
  return api;
}

export {setUtl};
