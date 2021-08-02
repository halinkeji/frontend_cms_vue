import { api } from "boot/axios";

export function getConfig({ commit }) {
  return new Promise((resolve, reject) => {
    api
      .get(`v1/system/config`)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
