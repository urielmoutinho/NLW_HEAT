
import { useContext } from 'react'
import {VscGithubInverted} from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'


import styles from './styles.module.scss'


export function LoginBox (){
    const {singInUrl} = useContext(AuthContext);


    return(
        <div className={styles.loginBoxWrapper}>
            <strong>Entre compartilhe sua mensagem</strong>

            <a href={singInUrl} className = {styles.singInWithGithub}>
                <VscGithubInverted size="24"/>
                Entrar com o Github! 
            </a>
        </div>
    )
}