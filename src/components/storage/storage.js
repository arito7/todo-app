const Storage = (type = 'localStorage') => {
    let _storage;
    // check if storage is available for use
    (()=>{
        try {
            _storage = window[type];
            let x = '__storage_test__';
            _storage.setItem(x, x);
            _storage.removeItem(x);
            console.log('storage test cleared')
        } catch(e) {
            _storage = null;
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (_storage && _storage.length !== 0);
        }
    })();

    function add(key, value){
        if(_storage){
            _storage.setItem(key, value);
        }
    }

    function remove(key, value){
        if(_storage){
            _storage.removeItem(key, value);
        }
    }

    function get(key){
        if(_storage){
            return _storage.getItem(key)
        }
    }

    function clear(){
        if(_storage){
            _storage.clear()
        }
    }

    return {add, remove, clear, get};
};

export {Storage};
