const PubSub = () => {
    const _events = {};

    const on = (eventName, fn) => {
        _events[eventName] = _events[eventName]||[];
        _events[eventName].push(fn);
    }

    const off = (eventName, fn) => {
        if (_events[eventName]){
            for (var i = 0; i < _events[eventName].length; i++){
                if(_events[eventName][i] === fn) {
                    _events[eventName].splice(i,1);
                    break;
                }
            }
        }
    };
    const emit = (eventName, data) => {
        if(_events[eventName]){
            _events[eventName].forEach( fn => {
                fn(data);
            });
        }
    }

    return {on, off, emit}
}

export {PubSub}