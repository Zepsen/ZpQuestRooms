var HomePage = (function () {
    function HomePage() {
    }
    HomePage.prototype.Initialize = function () {
        var user = new User(1, "Home");
        alert(user.ShowUser());
    };
    return HomePage;
}());
