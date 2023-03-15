import logo from './assets/logo.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favorite } from './components/favorite/favorite';
import {FavoriteContextProvider} from './cotext/Favcontext';
import { SearchContextProvider } from './cotext/SearchContext';
function App() {
    return (
        <div className={styles.App}>
            <SearchContextProvider>
            <Menu />
            <FavoriteContextProvider>
            <Container />
            <Favorite />
            </FavoriteContextProvider>
            </SearchContextProvider>
        </div>
    );
}

export default App;
