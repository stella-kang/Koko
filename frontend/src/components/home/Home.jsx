import React from 'react';
import { connect } from 'react-redux';

export const Home = (props) => {
  return (
    <div>
      <h1>This is home</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
