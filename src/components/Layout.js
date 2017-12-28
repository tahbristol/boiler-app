import React from "react";
import Footer from "./Footer";
import Header from "./Header";

 class Layout extends React.Component {
   constructor(){
     super();
     this.state = {
       title: "Welcome"
     }
   }

   changeTitle = (title) => {
     this.setState({title});
   }
  render() {
    return (
      <div>

        <Header changeTitle={this.changeTitle} title={this.state.title}/>

        <Footer />
      </div>
    );
  }
}

export default Layout;
