function Factory () {
    this.activeElementType = null;
}

Factory.prototype.createUIElement = (type, options) => {
    const UI_Elements = {
        button: Button,
        dialog: Dialog,
    };

    this.activeElementType = type;
    const builderInstance = new UI_Elements[this.activeElementType](options);
    builderInstance.onMount = () => {
        console.log(this.activeElementType + ' is mounted!');
    }

    return builderInstance
};

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

const UIFactory = new Factory();

const UI_Button = UIFactory.createUIElement('button', {
    size: 'md',
    bg: 'red',
    radius: 4,
});

const UI_Dialog = UIFactory.createUIElement('dialog', {
    width: 300,
    height: 250,
    target: 'body',
    scrollable: true,
});

[UI_Dialog, UI_Button].forEach(element => element.onMount());

