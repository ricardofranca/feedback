import React from 'react';
import Toolbar from 'components/Toolbar';

export default ({ children }) => {
  return (
    <div className="mdc-main mdc-theme--dark">
      <Toolbar />
      <main className="mdc-layout__content">
        <div className="mdc-toolbar-fixed-adjust">
          {children}
        </div>
      </main>
    </div>
  );
}
