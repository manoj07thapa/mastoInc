import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";
import { ReactElement, Fragment } from 'react';


const GlobalLayout = ({ children }: { children: ReactElement }) => {
    return (
        <Fragment>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </Fragment>

    );
}
export default GlobalLayout;