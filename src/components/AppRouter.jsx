import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {router} from "../router/router";

const AppRouter = () => {
    return (
        <div className="container">
            <Routes>
                {router.map(route =>
                    <Route path={route.path} element={route.element} key={route.path}/>
                )}
                <Route path="*" element={<Navigate to='/' replace/>}/>
            </Routes>
        </div>
    );
};

export default AppRouter;