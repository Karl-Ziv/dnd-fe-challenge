import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function SpellListItem({ name, onClick, isFave, goTo }) {
  return (
    <div className="spellListItem">
      <p className="spellName" onClick={goTo}>
        {name}
      </p>
      {isFave === false ? (
        <FavoriteBorderOutlinedIcon className="faveIcon" onClick={onClick} />
      ) : (
        <FavoriteIcon className="faveIcon" onClick={onClick} />
      )}
    </div>
  );
}

export default SpellListItem;
