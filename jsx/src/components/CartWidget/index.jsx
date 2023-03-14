import styles from "./cartwidget.module.scss";

const CartWidget = () => {
return (
    <div className={styles.icono}>
        <img src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" width="100" height="70" alt="carrito" className="icono"/>
        <div className={styles.carrito}>4</div>
    </div>
);
};

export default CartWidget;
