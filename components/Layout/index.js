import Header from "../sections/Header";

const Layout = ({children}) => {
    return (
        <main>
            <Header/>
            {children}
        </main>
    );
}

export default Layout;