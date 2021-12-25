import React from 'react'

export default function About() {
    return (
        <div>
            <div className="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content bg-dark text-light">
      <div className="modal-header ">
        <h5 className="modal-title " id="aboutModalLabel">About</h5>
        <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body bg-dark text-light ">
       <p> Created By Sarbartha Chakraborty (chakrabortysarbartha@gmail.com)<br/>
        Backend : JSON Server <br/>
        FrontEnd : React JS <br/>
        </p>
      </div>
      <div className="modal-footer">
       Copyright &copy; January'22
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
