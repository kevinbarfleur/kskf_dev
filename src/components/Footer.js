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
          <div>Karukera Shaolin Kung Fu</div>
          <div>
            Copyright <b>2018</b>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer
