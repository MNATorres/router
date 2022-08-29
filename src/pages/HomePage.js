import React from "react";
import {Link} from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Soy la pàgina inicial</h1>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default HomePage;
