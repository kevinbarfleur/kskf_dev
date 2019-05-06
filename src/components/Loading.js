import React, { Fragment } from 'react'

import '../styles/loading.css'

const Loading = height => (
  <Fragment>
    <div className="loadingScreen" styles={{ height: height }}>
      Chargement
    </div>
  </Fragment>
)

export default Loading
