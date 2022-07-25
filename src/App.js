import Home from "./page/home";
import AppContext from "./provider/appContext";


function App() {
  return(
    <AppContext.Provider>
      <Home />;
    </AppContext.Provider>
  ); 
}

export default App;
