import React from 'react';
import { Component } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import FetchFailure from "./FetchResponses/FetchFailure"
import FetchSuccess from "./FetchResponses/FetchSuccess"
//import ClubCard from './components/resultComponent/clubCardComponent/clubCard'
import '../layout.scss';


/** A component that is responsible for sending GET search request to return list of clubs that match
 * by exact name in search field
 */
class Search extends Component {

  constructor(props) {
    super()
    this.state = {
      searchElementName: "",
      redirect: false,
    }
    this.changeSearchElementName = this.changeSearchElementName.bind(this)
    this.callsAppCallBack = this.callsAppCallBack.bind(this)
    this.showFailureorSuccess = this.showFailureorSuccess.bind(this)
  }

  componentWillMount() {
    this.state.searchElementName = ""
  }

  showFailureorSuccess() {
    if (this.state.fetchedData.length > 0) {
      this.state.redirect = true
      //Debugging if this logic is run
      console.log("Response is a success: ", this.state.redirect)


      /**
       * if(this.state.redirect) {
      //Redirect to another page here if there is data 
        return <FetchSuccess />
      }
    }
    else {
      //Redirect to some error page saying that no results were found
      return <FetchFailure />
    }
       */

    }
  }

  callsAppCallBack() {
    //console.log("Search child component is updating the search key")
    this.props.parentUpdateCB(this.state.searchElementName)
  }

  changeSearchElementName(event) {
    //console.log("Going here")
    this.setState({ [event.target.name]: event.target.value })
    //console.log(this.state.searchElementName)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.fetchedData != nextState.fetchedData
  }
  render() {
    /**
     * const resultsArray = this.state.fetchedData.map(item =>(
        <ClubCard name = {item.name} info = {item.intro}/>
    ))
     */

    return (
      <div className="searchSpace">

        <div className="searchLabel">
          Search
        </div>

        <div className="searchPoint">
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
          </svg>
        </div>



        <div className="searchbar">
          <MDBCol>
            <MDBFormInline className="md-form myform">
              <input className="form-control form-control-lg ml-5 w-75" onChange={this.changeSearchElementName} name="searchElementName" type="text" placeholder="Search for Club Names" aria-label="Search" />
              <div className="sicon">
                <button onClick={this.callsAppCallBack} type="button" className="btn-light btn-xs"><MDBIcon icon="search" /></button>
              </div>
            </MDBFormInline>
          </MDBCol>
        </div>


        {/** <FetchSuccess searchResponses = {this.state.fetchedData}/> */}

      </div >


    );
  }
}


export default Search;
