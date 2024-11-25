import {Component} from 'react';
import {Outlet} from "react-router-dom";

class DashboardLayout extends Component {
    render() {
        return (
            <div className={'dashboardLayout'}>
                <div className="menu">MENU</div>
                <div className="content">
                    <Outlet/>
                </div>
            </div>
        );
    }
}

export default DashboardLayout;