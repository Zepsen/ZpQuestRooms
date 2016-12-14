var User = (function () {
    function User(id, fullName) {
        this._Id = id;
        this._FullName = fullName;
    }
    User.prototype.ShowUser = function () {
        return this._Id.toString() + " " + this._FullName;
    };
    return User;
}());
