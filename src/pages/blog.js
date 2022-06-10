import React from "react";
import HeaderThree from "../components/Layout/Header/HeaderStyleThree";
import FooterThree from "../components/Layout/Footer/FooterStyleThree";
import BlogMain from "../components/Blog/BlogMain";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

class Blog extends React.Component {
  static getInitialProps({ store }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <BlogMain />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Blog;
