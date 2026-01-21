import {Route, Routes} from "react-router";
import {publicRoutes} from "../utils/routes"

const AppRouter = () => {
    return (
        <Routes>
            <Route path="*" element={
                <div className="container">
                    <Routes>
                        {publicRoutes.map(({path, Component}) =>
                            <Route key={path} path={path} element={<Component/>} exact/>
                        )}
                    </Routes>
                </div>
            }/>
        </Routes>
    );
};

export default AppRouter;