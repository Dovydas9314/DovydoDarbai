class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0
    }

    prideti1Akmeni() {
        this.akmenuKiekis ++
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis
    }
    ispiltiVisusAkmenis() {
        this.akmenuKiekis = 0
    }

    perpiltiVisusAkmenis() {
        const kibireBuvo = this.akmenuKiekis;
        this.ispiltiVisusAkmenis();
        return kibireBuvo;
    }

    kiekPririnktaAkmenu() {
        console.log(`Sitame kibire yra pririnkta ${this.akmenuKiekis} akmenys`)
    }
}

const k1 = new Kibiras1()
const k2 = new Kibiras1()

k1.prideti1Akmeni()
k2.prideti1Akmeni()
k1.pridetiDaugAkmenu(5)
k1.prideti1Akmeni()
k2.pridetiDaugAkmenu(11)


k2.pridetiDaugAkmenu(k1.perpiltiVisusAkmenis())

k1.kiekPririnktaAkmenu()
k2.kiekPririnktaAkmenu()