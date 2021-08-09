import React from 'react';

export const showLoading = () => {
    return (
        <div className="col-md-12 col-12 text-center">
            <div className="spinner-border text-center" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}