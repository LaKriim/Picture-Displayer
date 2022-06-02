import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
class App extends React.Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    //console.log(term);
    //show request results
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    //response.data.results is the path of pics in the console
    //console.log(response.data.results);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
