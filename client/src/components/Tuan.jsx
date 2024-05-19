import React from "react";
import avatar from "../assets/avatar.jpg";
const Tuan = () => {
  return (
    <section
      className="w-100 px-4 py-5"
      style={{
        backgroundColor: "#9de2ff",
        borderRadius: ".5rem .5rem 0 0",
        height: "100vh",
      }}
    >
      <div className="row d-flex justify-content-center">
        <div className="col col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{ borderRadius: "15px" }}>
            <div className="card-body p-4">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src={avatar}
                    alt=""
                    className="img-fluid"
                    style={{ width: "180px", borderRadius: "10px" }}
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-1">NGO HUU TUAN</h5>
                  <p className="mb-2 pb-1">Professor</p>
                  <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                    <div>
                      <p className="small text-muted mb-1">SĐT/Zalo</p>
                      <p className="mb-0">0834 072 431</p>
                    </div>
                  </div>
                  <div className="d-flex pt-1">
                    <a href="https://www.facebook.com/professor.tuan">
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-outline-primary me-1 flex-grow-1"
                      >
                        Facebook
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tuan;
