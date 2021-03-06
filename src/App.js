import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content'
import Footer from './Components/Footer'


function App() {
  return (
    <div className="overflow-hidden md:mt-8 font-poppins">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
