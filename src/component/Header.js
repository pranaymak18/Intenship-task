import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import '../css/Header.css';
export default function AdminHeader(props) {
    const [View, setView] = useState(false);
    function showList(){
        setView(true);
    }
    return (
        <Fragment>
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li><Link to="/"> Agri-Purchase<br />Management</Link></li><hr style={{width:"90%"}}/>
                    <li><Link to="/dashboard3"> Agari-Input Master<br />Maintenance</Link></li><hr style={{width:"90%"}}/>
                    <li><Link to="/"> Supplier Master<br /> Maintenance </Link></li><hr style={{width:"90%"}}/>
                    <li><Link to="/"> Aari-Input<br/> Purchase<br /> Requests </Link></li>
                </ul>
            </nav>
        </Fragment>
    );
}