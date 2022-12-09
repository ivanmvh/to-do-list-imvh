const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  const dataAsStr = localStorage.getItem(key);
  if (dataAsStr) {
    const dataAsObj = JSON.parse(dataAsStr);
    return dataAsObj;
  }
  return [];
};

export { setLocalStorage, getLocalStorage };