import style from './header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header () {
    return (
        <header className={style.header}>            
            <img src={igniteLogo} alt="Logotipo do ignite." />
        </header>  
    );
}