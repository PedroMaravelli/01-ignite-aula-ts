import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'
import { cs } from 'date-fns/locale'

interface Author{
    name: string;
    role: string;
    avatarUrl: string;
}
interface Content{
    type: "paragraph" | "link";
    content: string;
}

export interface PostType{
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps{
    post: PostType
}


export function Post({post}: PostProps){

    const [comments, setComments] = useState([
        'forte abaraço bigode',
    ])

    const [newComment, setNewComment] = useState('')



    const formatedPublishedDate = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'" ,{
        locale: ptBR,
    })

    const publishedDateRelativeNow =  formatDistanceToNow(post.publishedAt, {
        locale:ptBR,
        addSuffix:true,
    })

    function handleCommentsPost(event: FormEvent){
        event.preventDefault()

        setComments([...comments, newComment])

        setNewComment('')
    }
    function handleNewCommentPost(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewComment(event.target.value)
    }

    function deleteComment (commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter((comment =>{
            return comment !== commentToDelete
        }))

        setComments(commentsWithoutDeletedOne)

    }

    function verifyCommentIsValid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('Esse campo é obrigatório')

    }
    const isNewCommentEmpty = newComment.length === 0


    return(
        <div className={styles.post}>
            <header  >
                <div className={styles.author}>
                    <Avatar hasBorder={false} src={post.author.avatarUrl}></Avatar>
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <p>{post.author.role}</p>
                    </div>
                </div>
                <time title={formatedPublishedDate} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map((line =>{
                    if(line.type === 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    }else if (line.type === 'link'){
                        return <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                }))
                
                }
            </div>

            <form onSubmit={handleCommentsPost} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                name='comment'
                value={newComment}
                onChange={handleNewCommentPost}
                placeholder='Escreva um comentário...'
                required
                onInvalid={verifyCommentIsValid}
                ></textarea>
                
                <footer>
                    <button 
                        type='submit'
                        disabled={isNewCommentEmpty}
                    >   Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map(comment =>{
                        return <Comment key={comment} content={comment} onDeleteComment={deleteComment}></Comment> 
                    })
                }
            </div>

        </div>
    )
}