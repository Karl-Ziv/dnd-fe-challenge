import React from "react";

function SpellContent({ title, children }) {
  return (
    <div>
      <p>
        <span className="spellItemTitle">{title + " "}</span>
        {children}
      </p>
    </div>
  );
}

export default SpellContent;
