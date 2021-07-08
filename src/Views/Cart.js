import Breadcrumbs from '../Components/Breadcrumbs';
import Products from '../Components/Cart/Products';
import Address from '../Components/Cart/Address';
import Summary from '../Components/Cart/Summary';

import {useState} from 'react';

function Cart() {
    const [activeTab, setActiveTab] = useState('products');
    const [products, setProducts] = useState([
        {image: 'https://picsum.photos/500/500', price: 20, title: 'Product 1', quantity: 3},
        {image: 'https://picsum.photos/500/500', price: 19.99, title: 'Product 2', quantity: 5},
        {image: 'https://picsum.photos/500/500', price: 42.01, title: 'Product 3', quantity: 2},
    ]);
    const [billingAddress, setBillingAddress] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');

    const changeProductQty = (change, index) => {
        const newProducts = [...products];
        newProducts[index].quantity += change;
        if (newProducts[index].quantity <= 0) {
            newProducts[index].quantity = 1;
        }

        setProducts(newProducts);
    }

    const removeProduct = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setProducts(newProducts);
    }

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Cart' },
    ]

    let tabContent = '';
    if (activeTab == 'products') {
        tabContent = <Products products={products} changeProductQty={changeProductQty} removeProduct={removeProduct} />
    } else if (activeTab == 'address') {
        tabContent = <Address billingAddress={billingAddress} setBillingAddress={setBillingAddress} shippingAddress={shippingAddress} setShippingAddress={setShippingAddress} />
    } else if (activeTab == 'summary') {
        tabContent = <Summary billingAddress={billingAddress} shippingAddress={shippingAddress} products={products} />
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h1>Cart</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab == 'products' ? ' active' : '')} onClick={() => setActiveTab('products')}>Products</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab == 'address' ? ' active' : '')} onClick={() => setActiveTab('address')}>Address</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab == 'summary' ? ' active' : '')} onClick={() => setActiveTab('summary')}>Summary</button>
                        </li>
                    </ul>
                    {tabContent}
                </div>
            </div>
        </div>
    )
}

export default Cart;