import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    return <div>SongList</div>;
  }
}

const mapStateToProps = (state) => {
  // take state object from Redux store then make that data show up as props inside our component
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList); // second set of parenthesis invokes the function returned by the first function
// connect(invoke function that returns a function)(invoke second function)
