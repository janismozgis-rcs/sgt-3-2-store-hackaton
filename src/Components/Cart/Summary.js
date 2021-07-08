function Summary({billingAddress, shippingAddress, products}) {
    let totalPrice = 0;

    let productRows = products.map((product, index) => {
        totalPrice += product.price * product.quantity;

        return (
            <tr key={index}>
                <td>
                    <img src={product.image} className="img-fluid" style={{maxHeight: '75px'}} />
                </td>
                <td>{product.title}</td>
                <td>
                    {product.quantity}
                </td>
                <td>{product.price.toFixed(2)} Eur</td>
                <td>{(product.price * product.quantity).toFixed(2)} Eur</td>
            </tr>
        )
    })

    if (productRows.length == 0) {
        productRows = <tr><td colSpan="5" className="text-center"><h4>The cart is empty</h4></td></tr>
    }
    return (
        <div className="row mt-3">
            <div className="col-12 col-md-4">
            <h5>Shipping address</h5>
                <p>{shippingAddress}</p>
                <h5>Billing address</h5>
                <p>{billingAddress}</p>
            </div>       
            <div className="col-12 col-md-8">
            <table style={{width: '100%'}}>
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>QTY</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {productRows}
            </tbody>
            <tbody>
                <tr>
                    <td colSpan="3"></td>
                    <td colSpan="2">
                        <h4>Total: {totalPrice.toFixed(2)} EUR</h4>
                    </td>
                </tr>
            </tbody>
        </table>
            </div>       
        </div>
    )
}

export default Summary;