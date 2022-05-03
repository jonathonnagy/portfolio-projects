

const Navbar = () => {
    return (
        <div id="navbar">
            <button className="navOption" onClick={() => {document.querySelector("#intro").scrollIntoView({ behavior: 'smooth'},2000);}}>Introduction</button> 
            <button className="navOption" onClick={() => {document.querySelector("#menu").scrollIntoView({ behavior: 'smooth'},2000);}}>Menu</button> 
            <button className="navOption" onClick={() => {document.querySelector("#booking").scrollIntoView({ behavior: 'smooth'},2000);}}>Booking</button> 
        </div>

    )
}

export default Navbar;