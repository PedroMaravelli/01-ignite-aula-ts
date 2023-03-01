import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'


interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}


export function Comment ({content, onDeleteComment}: CommentProps){
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment (){
        onDeleteComment(content)
    }

    function handleLikePost(){
        setLikeCount((state) =>{
            return state + 1
        })

    }



    return(
        <div className={styles.comment}>
            <Avatar src='https://github.com/PedroMaravelli.png' alt=''></Avatar>
            

            <div className={styles.commentBox}>
                <div className={styles.contentComment}>
                    <header>
                        <div className={styles.authorName}>
                            <strong>Pedro Maravelli</strong>
                            <time title='11 de Fevereiro ás 16:19h' dateTime='2023-02-21 16:19:30'>Cerca de 1h atrás</time>
                        </div>
                        <button  
                            title='Deletar comentário'
                            onClick={handleDeleteComment}
                        >
                            <Trash size={20}></Trash>
                        </button>

                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikePost}>
                        <ThumbsUp className={styles.thumbsUp} size={20}></ThumbsUp>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}