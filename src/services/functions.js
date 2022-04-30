function favoriteButton(item, get, data, state) {
  let getStorage = JSON.parse(localStorage.getItem(item));

  if (!getStorage) {
    localStorage.setItem(item, JSON.stringify([]));
    getStorage = JSON.parse(localStorage.getItem(item));
  }

  if (!state) {
    localStorage.setItem(item, JSON.stringify([...getStorage, get]));
    // `${setState}`(true);
  }
  if (state) {
    const filter = getStorage.filter((obj) => obj.id !== data);
    localStorage.setItem(item, JSON.stringify([...filter]));
    // `${setState}`(false);
  }
}

export default favoriteButton;
