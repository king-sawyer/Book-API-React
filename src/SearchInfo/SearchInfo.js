import React from "react";
import "./SearchInfo.css";
// import Populate from "./Populate/Populate.js";

class SearchInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      printType: "all",
      bookType: "",
      q: "",
    };
  }
  printTypeChange(printType) {
    this.setState({
      printType,
    });
  }
  bookTypeChange(bookType) {
    this.setState({
      bookType,
    });
  }
  newKeyword(searchKeyword) {
    this.setState({
      searchKeyword,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submit Clicked");
    const params = Object.keys(state)
      .map((item) => item + "=" + state[item])
      .join("&");

    const url = `https://www.googleapis.com/books/v1/volumes?`;

    fetch(url)
      .then((data) => data.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div className="searchInfoDiv">
        <form className="firstForm">
          <label className="formItem" htmlFor="searchID">
            Search:
          </label>
          <input
            type="text"
            placeholder="Book Name"
            name="search"
            id="searchID"
            className="formItem"
            value={this.state.searchKeyword}
            onChange={(e) => this.newKeyword(e.target.value)}
          />
          <input
            type="submit"
            value="Submit"
            className="formItem"
            onClick={this.handleSubmit}
          />
        </form>
        {/*----Second Form----*/}
        <form className="secondForm">
          <label className="formItem" htmlFor="printType">
            Print Type:
          </label>
          <select
            id="printType"
            className="formItem"
            value={this.state.printType}
            onChange={(e) => this.printTypeChange(e.target.value)}
          >
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="magazines">Magazines</option>
          </select>
          <label htmlFor="bookType" className="formItem">
            Book Type:
          </label>
          <select
            id="bookType"
            className="formItem"
            value={this.state.bookType}
            onChange={(e) => this.bookTypeChange(e.target.value)}
          >
            <option value="">No filter</option>
            <option value="ebooks">E-books</option>
            <option value="free-ebooks">Free E-books</option>
            <option value="full">Full books</option>
            <option value="paid-ebooks">Paid E-books</option>
            <option value="partial">Partially availalbe</option>
          </select>
        </form>
      </div>
    );
  }
}

export default SearchInfo;
