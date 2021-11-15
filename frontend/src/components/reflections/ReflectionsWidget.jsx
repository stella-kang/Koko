import React from 'react'
import { connect } from 'react-redux'
import { fetchReflections } from '../../actions/reflections_actions';

export const ReflectionsWidget = (props) => {
  return (
    <div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  reflections: state.entities.reflections
})

const mapDispatchToProps = {
  fetchReflections
}

export default connect(mapStateToProps, mapDispatchToProps)(ReflectionsWidget)
