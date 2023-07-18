//import './App.css';

import Footer from "./component/cardlink/Footer";
import Header from "./component/cardlink/Header";
import Middlepart from "./component/cardlink/Middlepart";
import CardLink from "./component/cardlink/Cards";
import './index.css';

const linkDetails = [
  {
    title: 'Fancy Product',
    description: '$40.00 - $80.00',
   
  },
  {
    title: 'Sales Item',
    description: '$20.00 $18.00',
  },
  {
    title: 'Special Item',
    description: '$50.00 $25.00',
  },
  {
    title: 'Popular Item',
    description: '$40.00',
  },
  {
    title: 'Sale Item',
    description: '$50.00 $25.00',
  },
  {
    title: 'Special Item',
    description: '$120.00 - $280.00',
  },
  {
    title: 'Popular Item',
    description: '$40.00',
  },
  {
    title: 'Sale Item',
    description: '$60.00',
  }
  
];

function App() {

  return (
    <div class="App">
      <Header/>
      <Middlepart/>
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {linkDetails.map(({ title, description}) => {
                return <CardLink
                  title={title}
                  description={description}
                />
              })}
            </div>
          </div>
        </section>
        
      
      
      <Footer/>
      </div>
  );
}

export default App;
