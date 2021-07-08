import { useParams } from 'react-router-dom';
import categories from '../Data/Categories';
import Breadcrumbs from '../Components/Breadcrumbs';
import { useState } from 'react';
import { SRLWrapper } from "simple-react-lightbox";

function Product() {
    const { categoryId, productId } = useParams();
    const filteredCategories = categories.filter((category) => { return categoryId == category.id });
    const category = filteredCategories[0];
    const filteredProducts = category.products.filter((product) => { return productId == product.id });
    const product = filteredProducts[0];
    const [mainImage, setMainImage] = useState(product.image);

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/categories', title: 'Categories' },
        { link: `/categories/${category.id}`, title: category.title },
        { title: product.title },
    ]

    const imageThumbnails = product.images.map((image, index) => {
        return (
            <div className="col-4 mt-3" key={index}>
                <a href={image}>
                    <img className="img-fluid" src={image} onMouseEnter={() => setMainImage(image)} />
                </a>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h1>{product.title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="row">
                        <div className="col">
                            <img src={mainImage} className="img-fluid" />
                        </div>
                    </div>
                    <SRLWrapper>
                        <div className="row">
                            {imageThumbnails}
                        </div>
                    </SRLWrapper>

                    <div className="row mt-5">
                        <div className="col-6">
                            <h3 class="text-danger">{product.price.toFixed(2)} EUR</h3>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-success" onClick={() => alert('Added to the cart')}>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Product;