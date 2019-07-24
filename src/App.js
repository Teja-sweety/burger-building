import React from 'react';
import Layout from './components/layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/Burgerbuilder';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
