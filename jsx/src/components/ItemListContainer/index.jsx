import styles from "./ItemListContainer.module.scss";

const ItemListContainer = ({ greeting }) => {
    return (
    <div className={styles.greeting}>
        <p>{greeting}</p>
    </div>
    );
};

export default ItemListContainer;

