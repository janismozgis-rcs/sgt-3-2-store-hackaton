import Breadcrumbs from '../Components/Breadcrumbs';
import { NavLink } from 'react-router-dom';
import categories from '../Data/Categories';

function Categories() {
    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'Categories' },
    ]

    const categoryElements = categories.map((category, index) => {
        return (
            <div className="row mb-5 pb-3 border-bottom" key={index}>
                <div className="col-12 col-md-3">
                    <NavLink to={'/categories/' + category.id}>
                        <img className="img-fluid" src={category.image} />
                    </NavLink>

                </div>
                <div className="col-12 col-md-9">
                    <h3>
                        <NavLink to={'/categories/' + category.id}>{category.title}</NavLink>
                    </h3>
                    <p className="text-muted">
                        {category.text}
                    </p>
                </div>
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
                    <h1>Categories</h1>
                </div>
            </div>
            {categoryElements}
        </div>
    )
}

export default Categories;