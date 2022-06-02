import React from "react";
class SearchBar extends React.Component {
  state = { term: "write here !" };
  //arrow func to avoid the console state error
  //we did this for onChange directly in the jsx
  onFormSubmit = (event) => {
    //this line prevents the refresh of page when
    //we press enter because we only need to search and not submit
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label className="field"> Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(event) => this.setState({ term: event.target.value })}
            />{" "}
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
