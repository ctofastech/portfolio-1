// there are 3 ways to write a component in reactjs
// method 1: default functional component
// method 2: arrow functional component
// method 3: default return functional component

// method 3:
function Footer() {
    return(
        <div className={"bg-dark p-4 text-white"}>
            <p className="text-center">
                copyright @{new Date().getFullYear()} by <a className={"text-white"} target={"_blank"} href="https://www.iba-suk.edu.pk" rel="noreferrer">Sukkur IBA University</a>
            </p>
        </div>
    )
}

export default Footer;
