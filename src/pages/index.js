import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import HomeMain from "../components/Home/HomeMain";
import Header2 from "../components/Layout/Header/HeaderStyleThree";

class Index extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <HomeMain />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
