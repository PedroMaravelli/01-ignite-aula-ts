import style from './header.module.css'
import igniteSimbol from '../assets/igniteSimbol.svg'

export function Header(){
    return(
        <header className={style.header}>
            <img src={igniteSimbol} alt='logo ignite'></img>
        </header>
    )
}