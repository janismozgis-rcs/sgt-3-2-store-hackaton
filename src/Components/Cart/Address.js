function Address({billingAddress, setBillingAddress, shippingAddress, setShippingAddress}) {

    return (
        <div className="row mt-3">
            <div className="col">
                <h5>Billing address</h5>
                <textarea className="form-control" style={{width: '100%', height: '200px'}} value={billingAddress} onChange={(event) => setBillingAddress(event.target.value)} />
            </div>       
            <div className="col">
                <h5>Shipping address</h5>
                <textarea className="form-control" style={{width: '100%', height: '200px'}} value={shippingAddress} onChange={(event) => setShippingAddress(event.target.value)} />
            </div>       
        </div>
    )
}

export default Address;