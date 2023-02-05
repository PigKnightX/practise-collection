class Commitment {
    constructor(func) {
        func(this.resolve, this.reject);
    }
    resolve() {}
    reject() {}
}

export default Commitment;