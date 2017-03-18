import React from 'react';
import Toolbar from 'components/Toolbar';

export default ({ children }) => {
  return (
    <div className="mdc-main">
      <Toolbar />
      <main>
        <div className="mdc-toolbar-fixed-adjust">
          {children}
        </div>
      </main>
    </div>
  );
}
