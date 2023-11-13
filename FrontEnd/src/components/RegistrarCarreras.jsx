import React from 'react'

export default function RegistrarCarreras() {
  return (

 <div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="card-header bg-info text-center">
                <h4>Registrar Carrera</h4>
              </div>
              <div className="card-body">
                <form onSubmit={"guardar"}>
                  <div className="row">

                    <div className="form-group">
                      <label>Nombre</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="form-group">
                      <label>Nombre</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="form-group">
                      <label>Nombre</label>
                      <input type="text" className="form-control required" />
                    </div>

                    <div className="form-group">
                      <label>Nombre</label>
                      <input type="text" className="form-control required" />
                    </div>
                    

                  </div>
                  <br></br>
                  <button type="submit" class="btn btn-outline-info">
                    <span class="fa fa-save"></span> Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> 
  )
}
