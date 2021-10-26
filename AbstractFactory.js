const AbstractUIElementsFactory = (() => {
    const elementTypes = {};

    return {
        getInstance (type, options) {
            const ElementInstance = elementTypes[type];

            return ElementInstance ? new ElementInstance(options) : null;
        },
        registerElement (type, Element) {
            const _proto = Element.prototype;
            elementTypes[type] = Element;

            return this;
        }
    }
})();

function Button ({
    size,
    bg,
    radius,
}) {
    this.size = size;
    this.bg = bg;
    this.radius = radius;
}

function Dialog ({
    width,
    height,
    target,
    scrollable,
}) {
    this.width = width;
    this.height = height;
    this.target = target;
    this.scrollable = scrollable;
}

AbstractUIElementsFactory.registerElement('button', Button);
AbstractUIElementsFactory.registerElement('dialog', Dialog);

const UI_Button = AbstractUIElementsFactory.getInstance('button', {
    size: 'md',
    bg: 'red',
    radius: 4,
});

const UI_Dialog = AbstractUIElementsFactory.getInstance('dialog', {
    width: 300,
    height: 250,
    target: 'body',
    scrollable: true,
});