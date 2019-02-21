import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './index.css';
import {
  searchImages
} from '../../modules/search'

const Home = props => (
  <div>
    <form onSubmit={e => {
      e.preventDefault();
      props.searchImages(e)}
    }>
      <input type="search" />
      <input type="submit" value="Search"/>
    </form>

    <p>{props.searching ? 'Searching...' : ''}</p>
    <div className="gridContainer">
      {props.value.length === 0 ? <p className="notFoundExplainer">No images found</p> : ''}
      {props.value.map((url, index) => <img key={index} src={url} className="gridImage" alt=""/>)}
    </div>

  </div>
)

const mapStateToProps = ({ search }) => ({
  value: search.value,
  searching: search.searching,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchImages,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
