export default function Header() {
    return(
        <div>
            <nav className="header">
            <div className="row">
                <div className="col-lg-3">
                    <ul className="nav-ul pt-7 pl-10">
                        <li>
                            <a href="phillip-dev.com">
                                <img src="/images/logo.png" alt="logo" className="header-logo"/>
                            </a>
                        </li>
                        <li className="pl-10">
                           <a href="phillip-dev.com" className="loation">
                               <h5>UAFC WESTSIDE</h5>
                           </a>
                        </li>
                    </ul>
                </div>
                <div className="nav-btn col-lg-6">
                    <ul className="nav-ul pt-7 pl-10">
                        <li className="nav-li pt-10 ">
                        <i class="fas fa-house-user header-icon"></i>
                        {/* <i class="ti-home header-icon"></i> */}
                        </li>
                        <li className="nav-li pt-10">
                        <i class="fab fa-youtube-square header-icon"></i>
                        {/* <i class="ti-youtube header-icon"></i> */}
                        </li>
                        <li className="nav-li pt-10">
                        <i class="fas fa-comment header-icon"></i>
                        </li>
                        <li className="nav-li pt-10">
                        <i class="fas fa-hand-holding-usd header-icon"></i>
                        {/* <i class="ti-money header-icon"></i> */}
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3">

                </div>
            </div>
            </nav>
        </div>
    )
}