const App = {};

function extend(destination, source) {
    const toString = Object.prototype.toString,
        objTest = toString.call({});
    for (const property in source) {
        if (source[property] &&
            objTest === toString.call(source[property]) &&
            objTest === toString.call(destination[property])
        ) {
            destination[property] = destination[property] || {};
            extend(destination[property], source[property]);
        } else {
            destination[property] = source[property];
        }
    }
    return destination;
}

function getModule ( ns, ns_string ) {
    let parts = ns_string.split('.'),
        module = ns;

    if (parts[0] === "App") {
        parts = parts.slice(1);
    }
    const pl = parts.length;
    for (let i = 0; i < pl; i++) {
        if (typeof module[parts[i]] === 'undefined') {
            module = undefined;
            break
        }
        module = module[parts[i]];
    }
    return module;
}

function setModule ( ns, ns_string, defaultValue = {} ) {
    let parts = ns_string.split('.'),
        parent = ns;

    if (parts[0] === "App") {
        parts = parts.slice(1);
    }

    const pl = parts.length;
    for (let i = 0; i < pl; i++) {
        //create a property if it doesn't exist
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = (i === pl - 1 ? defaultValue : {});
        }
        parent = parent[parts[i]];
    }
    return parent;
}

setModule(App, 'App.modules.moduleA', 'New value');
const moduleA = getModule(App, 'App.modules.moduleA');
console.log(moduleA); // New value

extend(
    App,
    {
        modules: {
            moduleA: {
                utils: {}
            }
        }
    }
);
const module_A = getModule(App, 'App.modules.moduleA');
console.log(module_A); // { utils: {} }