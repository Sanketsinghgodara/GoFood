import React from 'react'
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-success ">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use to="#bootstrap"></use>
            </svg>
          </Link>
          <span className="text-white">© 2024 GoFood, Inc</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer
