import PropTypes from 'prop-types'
export const BntEnableMouseTracker = ({ enable, updateEnable }) => {
  return (
    <button onClick={updateEnable}>
      {enable ? 'Deactivate' : 'Activate'} Enable mouse tracker
    </button>
  )
}

BntEnableMouseTracker.propTypes = {
  enable: PropTypes.bool.isRequired,
  updateEnable: PropTypes.func.isRequired
}
