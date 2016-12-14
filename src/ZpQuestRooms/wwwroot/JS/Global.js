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
