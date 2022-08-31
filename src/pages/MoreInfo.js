import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { TailSpin } from "react-loader-spinner";

import MoreInfoCard from "../components/MoreInfoCard";
import AppColors from "../configs/AppColors";

function MoreInfo() {
  const location = useLocation();
  const [spellData, setSpellData] = useState(null);
  const spell = location.state ? location.state.spell.index : "";

  useEffect(() => {
    if (spell != null) {
      getSpellData(spell);
    }
  }, [spell]);

  const getSpellData = async (spellIndex) =>
    await fetch(`https://www.dnd5eapi.co/api/spells/${spellIndex}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not OK");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSpellData(data);
      });

  return (
    <motion.div
      className="moreInfoContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {spellData ? (
        <MoreInfoCard
          name={spellData.name}
          description={spellData.desc}
          higherLevel={spellData.higher_level}
          range={spellData.range}
          components={spellData.components}
          material={spellData.material}
          areaOfEffect={spellData.area_of_effect}
          ritual={spellData.ritual}
          duration={spellData.duration}
          concentration={spellData.concentration}
          castingTime={spellData.castingTime}
          level={spellData.level}
          attackType={spellData.attackType}
          damage={spellData.damage}
          dc={spellData.dc}
          school={spellData.school}
          classes={spellData.classes}
          subclasses={spellData.subclasses}
        />
      ) : (
        <div className="loading">
          <TailSpin
            height="80"
            width="80"
            color={AppColors.secondaryColor}
            radius="1"
            wrapperStyle={{ margin: "auto" }}
            visible={true}
          />
        </div>
      )}
    </motion.div>
  );
}

export default MoreInfo;
