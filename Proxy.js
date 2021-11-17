function Observer(object, change) {
    // we use unique field to determine if object is proxy
    // we can't test this otherwise because typeof and
    // instanceof is used on original object
    if (object && object.__proxy__) {
        return object;
    }
    const proxy = new Proxy(object, {
        get: function(object, name) {
            if (name === '__proxy__') {
                return true;
            }
            return object[name];
        },
        set: function(object, name, value) {
            const old = object[name];
            if (value && typeof value == 'object') {
                // new object need to be proxified as well
                value = Observer(value, change);
            }
            object[name] = value;
            change(object, name, old, value);
        }
    });
    for (let prop in object) {
        if (object.hasOwnProperty(prop) && object[prop] &&
            typeof object[prop] == 'object') {
            // proxify all child objects
            object[prop] = Observer(object[prop], change);
        }
    }
    return proxy;
}

let observeObject = { name: 'ASahak' }
observeObject = Observer(observeObject, function(object, property, oldValue, newValue) {
    console.log('property ' + property + ' changed from ' + oldValue + ' to ' + newValue);
});
setTimeout(() => {
    observeObject.name = 'Developer';
}, 2000);
