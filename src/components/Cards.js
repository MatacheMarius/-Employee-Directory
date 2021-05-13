import React from "react";
import About from "./About";
import './Cards.css';


function Cards(props) {
  const Srt = props.results;
  const prop1 = function (obj) {
    return obj.name.first;
  };
  const T = function (prop, arr) {
    arr.sort(function (e, event) {
      const pop1 = prop(e);
      const pop2 = prop(event);
      if (pop1 < pop2) {
        return -1;
      } else if (pop1 > pop2) {
        return 1;
      } else {
        return 0;
      }
    });
  };
  const F = function (prop, arr) {
    arr.sort(function (e, event) {
      const pop1 = prop(e);
      const pop2 = prop(event);
      if (pop2 < pop1) {
        return -1;
      } else if (pop2 > pop1) {
        return 1;
      } else {
        return 0;
      }
    });
  };
  if (props.sort === true) {
    T(prop1, Srt);
  } else {
    F(prop1, Srt);
  }
  //This returns a Cards component
  return (
    <div className="Cards">
      <thead>
        <tr>
         <th scope="col">Name</th>
          <th scope="col1">Picture</th>
          <th scope="col2">Email</th>
          <th scope="col3">Phone</th>
          <th scope="col3">Location</th>

        </tr>
      </thead>
      <About results={Srt} key={Srt.email} />
    </div>
  );
}

export default Cards;
