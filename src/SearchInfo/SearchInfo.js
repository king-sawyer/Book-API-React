import React from "react";
import "./SearchInfo.css";
import Populate from "../Populate/Populate.js";

class SearchInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      q: "",
      bookType: "",
      printType: "all",
      info: {},
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
  newKeyword(q) {
    this.setState({
      q,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submit Clicked");
    const params = Object.keys(this.state)
      .map((item) => item + "=" + this.state[item])
      .join("&");
    console.log(params);

    const url = `https://www.googleapis.com/books/v1/volumes?` + params;

    fetch(url)
      .then((data) => data.json())
      .then((data) => this.handleInformation(data));
  }

  handleInformation(data) {
    console.log(data);
    this.setState({
      info: data.items,
    });
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
            onClick={this.handleSubmit.bind(this)}
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
        <Populate info={this.state.info} />
      </div>
    );
  }
}

export default SearchInfo;
