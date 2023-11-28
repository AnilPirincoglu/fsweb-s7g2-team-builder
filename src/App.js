import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import CreateMember from './components/CreateMember';
import TeamMembers from './components/TeamMembers';
import Home from "./components/Home"
import fakeData from "./fakeData"
import './App.css';
import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from 'reactstrap';
function App() {

  const [members, setMembers] = useState(fakeData);

  return (
    <div className="App">
      <Navbar expand fixed='top' color="secondary" dark  >
        <NavbarBrand href="/" >My Team</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/list">Team Members</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/create">Add Member</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <div className='main-div'>
        <Switch >
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/list" >
            <TeamMembers members={members} />
          </Route>
          <Route path="/create" >
            <CreateMember setMembers={setMembers} members={members} />
          </Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;


