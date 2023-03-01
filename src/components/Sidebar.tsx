import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <div className={styles.sidebar}>
            <img 
            className={styles.cover}
            src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'>

            </img>
            <Avatar hasBorder={false} src='https://github.com/diego3g.png'></Avatar>
            <strong>Pedro Maravelli</strong>
            <span>Web Developer</span>
            <footer>
                <a href="#">
                    <PencilLine size={20}></PencilLine>
                    Editar seu perfil
                </a>
            </footer>
        </div>
    )
}