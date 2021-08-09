import React, { Fragment, useState } from 'react';
import { creatCategory } from '../api/category';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';

const Home = () => {
    const [category, setCategory] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    // event handlers
    const handleMessages = evt => {
        setErrorMsg('');
        setSuccessMsg('');
    }

    const handleCategoryChange = (e) => {
        setErrorMsg('');
        setSuccessMsg('');
        setCategory(e.target.value);
    };

    const handleAddCategory = (e) => {
        e.preventDefault();

        if(isEmpty(category)){
            setErrorMsg('Please enter a category');
        }else{
            const data = { category };
            setLoading(true);
            creatCategory(data)
                .then((response) => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                    setCategory('');
                })
                .catch((err) => {
                    setLoading(false);
                    setErrorMsg(err.response.data.errorMessage);
                })
        }
    }

    // views
    const showHeader = () => {
        return (
            <div className="bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2><i className="fas fa-home"> Dashboard</i></h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const showActionBtns = () => {
        return (
            <div className="bg-light my-2">
                <div className="container">
                    <div className="row pb-3">
                        <div className="col-md-4 mb-1">
                            <button className="btn btn-outline-info btn-block"
                                data-toggle="modal" data-target="#addCategoryModal">
                                <i className="fas fa-plus"> Add category</i>
                            </button>
                        </div>
                        <div className="col-md-4 mb-1">
                            <button className="btn btn-outline-warning btn-block">
                                <i className="fas fa-plus"> Add products</i>
                            </button>
                        </div>
                        <div className="col-md-4 mb-1">
                            <button className="btn btn-outline-info btn-block">
                                <i className="fas fa-eye"> View products</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    const showCategoryModal = () => {
        return (
            <div className="modal fade" id="addCategoryModal" onClick={handleMessages} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={handleAddCategory}>
                            <div className="modal-header bg-info text-white">
                                <h5 className="modal-title" id="addCategoryModalLabel">Add Category</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><i className="fas fa-times"></i></button>
                            </div>
                            <div className="modal-body">
                                {errorMsg && showErrorMsg(errorMsg)}
                                {successMsg && showSuccessMsg(successMsg)}
                                {
                                    loading ? (
                                        showLoading() // if loading show loading icon
                                    ):(  // else show category input
                                        <Fragment>
                                            <div className="form-group">
                                                <label className="text-secondary">Category</label>
                                                <input type="text"
                                                    className="form-control"
                                                    name="category"
                                                    value={category}
                                                    onChange={handleCategoryChange}
                                                />
                                            </div>
                                        </Fragment>
                                    )
                                }
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    };

    // renderer
    return (
        <section>
            {showHeader()}
            {showActionBtns()}
            {showCategoryModal()}
        </section>
    );
}

export default Home;