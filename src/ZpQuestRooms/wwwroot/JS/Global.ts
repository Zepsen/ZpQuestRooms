
window.onload = () => {
    var path = window.location.pathname.split("/")[1];
    var ctrl: IPage;
    switch (path) {
        case "Home":
            this.ctrl = new HomePage;
            break;
        case "User":
            this.ctrl = new UserPage;
            break;
        default:
            window.location.href = "/Home/Index";
    }

    this.ctrl.Initialize();
}
