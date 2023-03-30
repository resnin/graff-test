import loader from '../../assets/gifs/loader.gif'
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={loader} alt={'Загрузка...'}/>
        </div>
    );
};

export default Loader;