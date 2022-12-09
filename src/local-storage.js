const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  let dataAsStr = localStorage.getItem(key);
  if (dataAsStr) {
    let dataAsObj = JSON.parse(dataAsStr);
    return dataAsObj;
  }
  return [];
};

export { setLocalStorage, getLocalStorage };