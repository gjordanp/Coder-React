import styles from './button.module.css'

const Button = ({text, handleClick}) => {
    return <button className={styles.btn} onClick={handleClick}>{text}</button>
}

export default Button;