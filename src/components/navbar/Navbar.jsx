
function Navbar() {
  return (
    <>
        <nav className="navbar">
            <i className='bx bx-menu' onClick={() => {
                document.querySelector('#sidebar').classList.toggle('hide')
            }}></i>
            <form action="#" method="get">
                <div className="form-input">
                    <input type="search" name="search" id="search" placeholder='Search...' />
                    <button type="submit" className='search-button'><i className='bx bx-search' ></i></button>
                </div>
            </form>
            <ul className="nav-icons">
                <li>
                    <a href="#">
                        <i className='bx bx-chat' ></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-bell' ></i> 
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-user' ></i>
                    </a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar