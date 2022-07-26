import styles from '../styles/Button.module.scss'

interface ButtonProps {
    type?: "submit" | "reset"
    text?: string
    children?: any
    onClick?: () => void
}

function Button(props: ButtonProps) {
    return (
        <>
            <button type={props.type ?? "button"} className={`${styles.button}`} onClick={props.onClick}>
                {props.children}
            </button>
        </>
    )
}

export default Button