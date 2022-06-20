import { Fragment } from "react"
import Header from "./components/Header"
import AddClientModal from "./components/AddClientModal"

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <AddClientModal />
      </div>
    </Fragment>
  );
}

export default App;
