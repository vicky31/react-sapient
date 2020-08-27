import React, { Component } from 'react';
import './App.css';
import { fetchData } from './actions/simpleAction';
import { connect } from 'react-redux';
import Filters from './components/Filters/Filters';
import FlightCard from './components/FlightCard/FlightCard';

const SpaceXHeader = 'Space X Launch Programs';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      year: null,
      launch: null,
      landing: null
    }
  }

  componentDidMount() {
    this.props.simpleAction();
  }

  selectedFilter = (type, value) => {
    this.setState({ [type]: value })
    let body = this.state;
    body[type] = value;
    this.props.simpleAction(body);
  }

  render() {
    const { year, landing, launch } = this.state;
    console.log(this.props.simpleReducer.json)
    const { simpleReducer: { json = [] } = {} } = this.props;
    return (
      <div className='fluid'>
        <div className="SpaceXWrapper">
          <div className="heading">{SpaceXHeader}</div>
          <div className="page-wrapper">
            <div className="filters-wrapper">
              <Filters
                selectedYear={year}
                selectedFilter={this.selectedFilter}
                launch={launch}
                landing={landing}
              />
            </div>
            <div className='result-wrapper'>
              <div className='data-grid'>
                {
                  json.map((flight) =>
                    <FlightCard
                      flighDetails={flight}
                    />
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

// const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(fetchData())
// })
const mapDispatchToProps = { simpleAction: fetchData }

export default connect(mapStateToProps, mapDispatchToProps)(App);

