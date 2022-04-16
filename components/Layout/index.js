import Header from "../sections/Header";
import styles from "./styles";
const Layout = ({children}) => {
    return (
        <main>
            <Header/>
            {children}
            <style jsx>{styles}</style>
        </main>
    );
}

export default Layout;