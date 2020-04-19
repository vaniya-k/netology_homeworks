import React from 'react';
import Filter from './Filter.jsx';
import Gallery from './Gallery.jsx';
import projects from './projects.js';

const FILTER_TYPES = [`All`, `Websites`, `Flayers`, `Business Cards`];

class Portfolio extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: 0
    }
  }

  handleFilterSelect = (activeFilterValue) => {
    this.setState({
      activeFilter: activeFilterValue
    })
  }

  getFilteredItemsUrls = () => {

    let filteredProjects;

    if (this.state.activeFilter === 0) {
      filteredProjects = projects
    } else {
      filteredProjects = projects.filter((project) => project.category === FILTER_TYPES[this.state.activeFilter])
    };

    const urls = filteredProjects.map((project) => project.img);

    return urls
  }

  render() {
    return <React.Fragment>
      <Filter filters={FILTER_TYPES} activeFilter={this.state.activeFilter} onFilterButtonClick={this.handleFilterSelect}/>
      <Gallery urls={this.getFilteredItemsUrls()}/>
    </React.Fragment>
  }
};

export default Portfolio;
