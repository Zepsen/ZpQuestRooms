var UserPage = (function () {
    function UserPage() {
    }
    UserPage.prototype.Initialize = function () {
        var user = new User(2, "User");
        alert(user.ShowUser());
    };
    return UserPage;
}());
