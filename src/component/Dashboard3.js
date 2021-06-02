import React from 'react';
import Header from './Header';
import Menu from './Menu';

function Dashboard() {
    return (
    <div className="wrapper">
        <Header />
        <div id="content">
            <div className="row">
                <h4 style={{textAlign:'left'}}>Agari-Input Master Maintenance</h4>
            </div>
            <Menu />
        </div>
    </div>
    
);
}

export default Dashboard;
