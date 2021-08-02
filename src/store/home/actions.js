import { api } from "boot/axios";

export function getStatic() {
  return new Promise((resolve, reject) => {
    api
      .get("v1/home/static")
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getHome() {
  return new Promise((resolve, reject) => {
    api
      .get("v1/home/home")
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getAbout({ commit }, id) {
  return new Promise((resolve, reject) => {
    api
      .get(`v1/home/about?id=` + id)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getPageList({ commit }, item) {
  return new Promise((resolve, reject) => {
    api
      .get("v1/home/page", { params: item })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getMenuList({ commit }, id) {
  return new Promise((resolve, reject) => {
    api
      .get(`v1/home/menu?id=` + id)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getItem({ commit }, id) {
  return new Promise((resolve, reject) => {
    api
      .get(`v1/home/view?id=` + id)
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export function getArticlesList({ commit }, item) {
  return new Promise((resolve, reject) => {
    api
      .get("v1/home/articles", { params: item })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
}
