class SimpleEarphones{
    constructor(){}

    play() {
        console.log("Playing music")
    }

}

class EarPhoneAdapter extends SimpleEarphones{
    constructor(typeC_Phone){
        super();
        this.device = typeC_Phone;
    }
    attach() {
        this.device.attach();
        this.play();
    }
}

class TypeC_Phone {
    constructor(){}
    attach() {
        console.log("Earphones attached to Type C phone")
    }
}

const typeC_Phone = new TypeC_Phone();
const adapter = new EarPhoneAdapter(typeC_Phone)
adapter.attach();
