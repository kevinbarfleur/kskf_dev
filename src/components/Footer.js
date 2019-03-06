import React, { Component } from 'react'

// Styles
import '../styles/footer.css'

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div>
            <p>
              <b>少林功夫</b>
            </p>
          </div>
          <div>
            <p>Karukera Shaolin Kung Fu</p>
          </div>
          <div>
            <p>
              Copyright <b>2019</b>
            </p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer
