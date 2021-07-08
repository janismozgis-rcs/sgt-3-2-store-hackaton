import {NavLink} from 'react-router-dom';

function Home() {
    const categories = [
        {
            title: 'Category 1',
            image: 'https://picsum.photos/200/200',
            text: 'Some info about the category',
            id: 'first-category',
        },
        {
            title: 'Category 2',
            image: 'https://picsum.photos/200/200',
            text: 'Some info about the category',
            id: 'second-category',
        },
        {
            title: 'Category 3',
            image: 'https://picsum.photos/200/200',
            text: 'Some info about the category',
            id: 'tird-category',
        },
    ];

    const categoryElements = categories.map((category, index) => {
        return (
            <div className="col" key={index}>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={category.image} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <NavLink to={'/categories/' + category.id}>
                                        {category.title}
                                    </NavLink>
                                </h5>
                                <p className="card-text">{category.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://picsum.photos/800/300" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://picsum.photos/800/300" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://picsum.photos/800/300" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col mt-3">
                    <h4>Categories</h4>
                </div>
            </div>
            <div className="row">
                {categoryElements}
            </div>
        </div>
    )
}

export default Home;