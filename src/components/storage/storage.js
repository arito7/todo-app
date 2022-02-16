const Storage = (type = 'localStorage') => {
  let mStorage;
  // check if storage is available for use
  (() => {
    try {
      mStorage = window[type];
      let x = '__storage_test__';
      mStorage.setItem(x, x);
      mStorage.removeItem(x);
    } catch (e) {
      mStorage = null;
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === 'QuotaExceededError' ||
          // Firefox
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        // acknowledge QuotaExceededError only if there's something already stored
        mStorage &&
        mStorage.length !== 0
      );
    }
  })();

  function add(key, value) {
    if (mStorage) {
      mStorage.setItem(key, value);
    }
  }

  function remove(key, value) {
    if (mStorage) {
      mStorage.removeItem(key, value);
    }
  }

  function get(key) {
    if (mStorage) {
      return mStorage.getItem(key);
    }
    return null;
  }

  function clear() {
    if (mStorage) {
      mStorage.clear();
    }
  }

  return { add, remove, clear, get };
};

export default Storage;
