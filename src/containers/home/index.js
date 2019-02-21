import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  searchImage
} from '../../modules/search'

const Home = props => (
  <div>
    <form onSubmit={e => {
      e.preventDefault();
      props.searchImage(e)}
    }>
      <input type="search" />
      <input type="submit" value="Submit"/>
    </form>

    <p>{props.searching ? 'Searching...' : ''}</p>
    <img src={props.value} />

  </div>
)

const mapStateToProps = ({ counter }) => ({
  value: counter.value,
  searching: counter.searching,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchImage,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
