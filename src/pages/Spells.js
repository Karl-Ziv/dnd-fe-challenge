import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { TailSpin } from "react-loader-spinner";

import { Button } from "@mui/material";

import SpellListItem from "../components/SpellListItem";
import AppColors from "../configs/AppColors";

function Spells() {
  const [spells, setSpells] = useState([]);
  const [displayedNumber, setDisplayedNumber] = useState(24);
  const [favouriteSpells, setFavouriteSpells] = useState([]);
  const [updateDom, setUpdateDom] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/spells")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not OK");
        }
        return res.json();
      })
      .then((data) => {
        setSpells(data.results);
      });

    const favourtiesData = window.localStorage.getItem("FAVOURITE_SPELLS");
    if (favourtiesData !== null && favourtiesData.length !== 0) {
      setFavouriteSpells(JSON.parse(favourtiesData));
      console.log(JSON.parse(favourtiesData));
    }
  }, []);

  useEffect(() => {}, [updateDom]);

  const addToFaves = (spell) => {
    let tempList = favouriteSpells;
    tempList.push(spell);
    console.log(tempList);
    window.localStorage.setItem("FAVOURITE_SPELLS", JSON.stringify(tempList));
    setUpdateDom(!updateDom);
  };

  const removeFromFaves = (spell) => {
    let favesTemp = favouriteSpells.filter((e) => e.name !== spell.name);
    setFavouriteSpells(favesTemp);
    window.localStorage.setItem("FAVOURITE_SPELLS", JSON.stringify(favesTemp));
    setUpdateDom(!updateDom);
  };

  const toMoreInfo = (spell) => {
    navigate("/spells/moreinfo", { state: { spell: spell } });
  };

  const handleFaveClick = (spell) => {
    let isFave = getIsFave(spell);
    if (isFave) {
      removeFromFaves(spell);
    } else {
      addToFaves(spell);
    }
  };

  const getIsFave = (spell) => {
    let favesTemp = favouriteSpells.filter((e) => e.name === spell.name);
    if (favesTemp.length > 0) {
      return true;
    }
    return false;
  };

  const updateDisplayNumber = () => {
    if (displayedNumber < spells.length) {
      setDisplayedNumber(displayedNumber + 50);
    } else {
      setDisplayedNumber(24);
    }
  };

  return (
    <motion.div
      className="spellsContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>{"Dungeons & Dragons - Spells"}</h1>
      <div className="spellItemsContainer">
        {spells.length > 0 ? (
          spells.slice(0, displayedNumber).map((spell, key) => (
            <div key={key} className="spellItem">
              <SpellListItem
                name={spell.name}
                isFave={getIsFave(spell)}
                onClick={() => {
                  handleFaveClick(spell);
                }}
                goTo={() => toMoreInfo(spell)}
              />
            </div>
          ))
        ) : (
          <TailSpin
            height="80"
            width="80"
            color={AppColors.secondaryColor}
            radius="1"
            wrapperStyle={{ margin: "auto" }}
            visible={true}
          />
        )}
      </div>
      <Button
        variant="outlined"
        className="loadMoreButton"
        color="error"
        size="large"
        onClick={updateDisplayNumber}
      >
        {displayedNumber < spells.length ? "More" : "Less"}
      </Button>
      <h1>Favourite Spells</h1>
      <div className="spellItemsContainer">
        {favouriteSpells.length > 0 ? (
          favouriteSpells.map((spell, key) => (
            <div key={key} className="spellItem">
              <SpellListItem
                name={spell.name}
                onClick={() => {
                  handleFaveClick(spell);
                }}
                goTo={() => toMoreInfo(spell)}
              />
            </div>
          ))
        ) : (
          <p className="noFaveText">No favourite spells 🙁</p>
        )}
      </div>
    </motion.div>
  );
}

export default Spells;
