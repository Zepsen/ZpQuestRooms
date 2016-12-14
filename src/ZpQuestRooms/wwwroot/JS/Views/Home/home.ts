
class HomePage implements IPage {

    Initialize() {
        var user = new User(1, "Home");
        alert(user.ShowUser());
    }
}