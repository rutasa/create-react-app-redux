import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './index.css';
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
      <input type="submit" value="Search"/>
    </form>

    <p>{props.searching ? 'Searching...' : ''}</p>
    <div className="gridContainer">
      {props.value.map((url, index) => <img key={index} src={url} className="gridImage" alt=""/>)}
    </div>

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
