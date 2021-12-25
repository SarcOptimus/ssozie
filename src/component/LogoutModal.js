import React from 'react'

export default function LogoutModal(props) {
    return (
        <div>
            <div className="modal fade" id="logoutModal" tabindex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-dark text-light">
      <div className="modal-header ">
        <h5 className="modal-title " id="logoutModalLabel">Caution</h5>
        <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body bg-dark text-light ">
       <p> Are you sure you want to Logout ?<br/>
        </p>
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-danger" onClick={props.logoutAction} >Logout</button>
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
