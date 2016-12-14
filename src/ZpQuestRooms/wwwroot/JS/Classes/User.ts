class User {
    _Id: Number;
    _FullName: String;

    constructor(id: Number, fullName: String) {
        this._Id = id;
        this._FullName = fullName;
    }

    ShowUser() {
        return this._Id.toString() + " " + this._FullName;
    }
}