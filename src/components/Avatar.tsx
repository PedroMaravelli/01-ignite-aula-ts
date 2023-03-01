import styles from './Avatar.module.css'
import { ImgHTMLAttributes} from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?:boolean;
    
}

export function Avatar({hasBorder = true, ...props}: AvatarProps){
    return(
        <div>
            <img className={hasBorder ? styles.avatar : styles.avatarBorder  }
            {...props}
            />
        </div>
    )
}