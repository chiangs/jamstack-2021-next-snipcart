import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import Container from '@components/Container';

import styles from './Header.module.scss';
import { useSnipcart } from 'use-snipcart/useSnipcart';

const Header = () => {
    const { cart = {} } = useSnipcart();
    console.log('🚀 ~ file: Header.js ~ line 11 ~ Header ~ const', cart);

    const cartData = !!cart?.subtotal && (
        <button className='snipcart-checkout'>
            <FaShoppingCart />
            <span>$ {cart.subtotal}</span>
        </button>
    );

    return (
        <header className={styles.header}>
            <Container className={styles.headerContainer}>
                <p className={styles.headerTitle}>
                    <Link href='/'>
                        <a>Mechanical Bros. Trading Cards</a>
                    </Link>
                </p>
                <p className={styles.headerCart}>{cartData}</p>
            </Container>
        </header>
    );
};

export default Header;
