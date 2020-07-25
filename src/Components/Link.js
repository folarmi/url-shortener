import React from 'react';

function Link({links}) {
    return (
      <div>
       {links.map(link => (
         <ul>
          <li>
            {link.link}, {link.shortenedLink}
          </li>
         </ul>
       ))}
      </div>
    );
  }


export default Link