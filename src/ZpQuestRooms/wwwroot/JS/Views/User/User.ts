
class UserPage implements IPage {

    Initialize() {
        var user = new User(2, "User");
        alert(user.ShowUser());
    }
}