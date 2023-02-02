import './CSS/header.css'
function Header() {
    return (
        <div className="main-ctn">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">HeroVired DevOps</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/user">Users</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/scoreboard">Scoreboard</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/challanges">Challenges</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  href="/register">Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link"  href="/">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Header;