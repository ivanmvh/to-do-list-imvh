const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  let data_as_str = localStorage.getItem(key);
  if (data_as_str) {
    let data_as_obj = JSON.parse(data_as_str);
    return data_as_obj;
  }
  return [];
};

export { setLocalStorage, getLocalStorage };