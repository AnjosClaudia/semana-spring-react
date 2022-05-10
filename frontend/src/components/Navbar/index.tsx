import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/AnjosClaudia">
                        <div className='dsmovie-contact-container'>
                            <p className='dsmovie-contact-link'>/DSMovie</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;