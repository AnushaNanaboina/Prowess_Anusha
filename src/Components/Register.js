import './CSS/register.css'
function Register() {
    return (
        <div className="register-ctn">
        <div className="form-ctn">
        <form>
            <div class="mb-3">
                <label for="exampleInputUserName1" class="form-label">User Name</label>
                <input type="email" class="form-control" id="exampleInputUserName1" aria-describedby="userNameHelp" />
                <div id="userNameHelp" class="form-text">Your username on the site</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">Never shown to the public</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" aria-describedby="passwordHelp" />
                <div id="passwordHelp" class="form-text">Password used to log into your account</div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
        </div>
    )
}
export default Register