import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import useAdmin from './../../hook/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile bg-cyan-200 rounded-xl my-3 container mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-slate-600 text-base-content py-5">

                    <li><Link to={'/dashboard'} className="text-secondary font-semibold">Profile</Link></li>
                    {
                        user && !admin.admin && <li><Link to={'/dashboard/myOrders'} className="text-secondary font-semibold">My Orders</Link></li>
                    }
                    {admin.admin && <li><Link to={'/dashboard/allusers'} className="text-secondary font-semibold">Make Admin</Link></li>}
                    {admin.admin && <li><Link to={'/dashboard/addbook'} className="text-secondary font-semibold">Add Book</Link></li>}
                </ul>

            </div>
        </div>


    )
}

export default Dashboard;