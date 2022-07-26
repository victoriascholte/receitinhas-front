import styles from "../styles/Wrapper.module.scss"

interface WrapperProps {
    children: any
}

function Wrapper(props: WrapperProps) {
    return (
        <div className={styles.wrapper}>{props.children}</div>
    )
}

export default Wrapper


