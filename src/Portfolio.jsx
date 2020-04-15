import React from 'react';
import Toolbar from './Toolbar.jsx';
import Gallery from './Gallery.jsx';
import projects from './projects.js';

const FILTER_TYPES = [`All`, `Websites`, `Flayers`, `Business Cards`]

class Portfolio extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilter: 0
    };

    this.handleFilterSelect = this.handleFilterSelect.bind(this);
  }

  handleFilterSelect = (activeFilterValue) => {
    this.setState({
      activeFilter: activeFilterValue
    })
  }

  getFilteredItemsUrls = (filterTypeId) => {

    let filteredProjects;

    switch(filterTypeId) {
      case 1:
        filteredProjects = projects.filter((project) => project.category === FILTER_TYPES[1]);
        break;

      case 2:
        filteredProjects = projects.filter((project) => project.category === FILTER_TYPES[2]);
        break;

      case 3:
        filteredProjects = projects.filter((project) => project.category === FILTER_TYPES[3]);
        break;
      
      default:
        filteredProjects = projects;
        break;
    };

    const urls = filteredProjects.map((project) => project.img)

    return urls;
  }

  render() {
    return <React.Fragment>
      <Toolbar filters={FILTER_TYPES} activeFilter={this.state.activeFilter} onFilterButtonClick={this.handleFilterSelect}/>
      <Gallery urls={this.getFilteredItemsUrls(this.state.activeFilter)}/>
    </React.Fragment>
  }
}

export default Portfolio;
