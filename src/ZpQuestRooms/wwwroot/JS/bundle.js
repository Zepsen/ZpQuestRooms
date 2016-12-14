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


var HomePage = (function () {
    function HomePage() {
    }
    HomePage.prototype.Initialize = function () {
        var user = new User(1, "Home");
        alert(user.ShowUser());
    };
    return HomePage;
}());

var UserPage = (function () {
    function UserPage() {
    }
    UserPage.prototype.Initialize = function () {
        var user = new User(2, "User");
        alert(user.ShowUser());
    };
    return UserPage;
}());

var _this = this;
window.onload = function () {
    var path = window.location.pathname.split("/")[1];
    var ctrl;
    switch (path) {
        case "Home":
            _this.ctrl = new HomePage;
            break;
        case "User":
            _this.ctrl = new UserPage;
            break;
        default:
            window.location.href = "/Home/Index";
    }
    _this.ctrl.Initialize();
};