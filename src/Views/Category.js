import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink, useParams } from 'react-router-dom';
import categories from '../Data/Categories';

function Category() {
    const { categoryId } = useParams();
    const filteredCategories = categories.filter((category) => {return categoryId == category.id});
    const category = filteredCategories[0];

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { link: '/categories', title: 'Categories' },
        { title: category.title },
    ];

    const productCards = category.products.map((product, index) => {
        return (
            <div className="col-3" key={index}>
                <div className="card text-center mb-5">
                    <NavLink to={`/products/${category.id}/${product.id}`}>
                        <img src={product.image} className="card-img-top" alt="..." />
                    </NavLink>
                    <div className="card-body">
                        <h5 className="card-title">
                            <NavLink to={`/products/${category.id}/${product.id}`}>
                                {product.title}
                            </NavLink>
                        </h5>
                        <span className="badge bg-success">{product.price.toFixed(2)} EUR</span>
                    </div>
                </div>
            </div>
        );
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
                    <h1>{category.title}</h1>
                </div>
            </div>
            <div className="row mb-5 pb-3">
                <div className="col-12 col-md-3">
                    <NavLink to={'/categories/' + category.id}>
                        <img className="img-fluid" src={category.image} />
                    </NavLink>

                </div>
                <div className="col-12 col-md-9">
                    <p className="text-muted">
                        {category.text}
                    </p>
                </div>
            </div>
            <div className="row">
                {productCards}
            </div>

        </div>
    )
}

export default Category;