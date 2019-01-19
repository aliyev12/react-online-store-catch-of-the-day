import React from 'react';

// Stateless functional component
const Header = ({tagLine}) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{tagLine}</span>
    </h3>
  </header>
);

// class Header extends React.Component {
//   render () {
//     return (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagLine}</span>
//         </h3>
//       </header>
//     );
//   }
// }

export default Header;
