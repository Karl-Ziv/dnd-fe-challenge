import React from "react";

import SpellContent from "./SpellContent";

function MoreInfoCard({
  name,
  description,
  higherLevel,
  range,
  components,
  material,
  areaOfEffect,
  ritual,
  duration,
  concentration,
  castingTime,
  level,
  attackType,
  damage,
  dc,
  school,
  classes,
  subclasses,
}) {
  return (
    <div className="spellCard">
      {!!name && <h1>{name}</h1>}

      {!!description && (
        <SpellContent title={"Description"}>
          {description.map((e, key) => (
            <li key={key}>{e}</li>
          ))}
        </SpellContent>
      )}

      {!!higherLevel && higherLevel.length > 0 && (
        <SpellContent title={"Higher Level"}>
          {higherLevel.map((e, key) => (
            <li key={key}>{e}</li>
          ))}
        </SpellContent>
      )}

      {!!range && <SpellContent title={"Range:"}> {range}</SpellContent>}

      {!!components && (
        <SpellContent title={"Components:"}>
          {components.map((e, index) => (index ? ", " : "") + e)}
        </SpellContent>
      )}

      {!!material && (
        <SpellContent title={"Material:"}>{material}</SpellContent>
      )}

      {!!areaOfEffect && (
        <SpellContent title={"Area of Effect: "}>
          <>
            size=
            {areaOfEffect.size}, type={areaOfEffect.type}
          </>
        </SpellContent>
      )}

      {!!ritual !== undefined && (
        <SpellContent title={"Ritual:"}>
          {ritual ? "True" : "False"}
        </SpellContent>
      )}

      {!!duration && (
        <SpellContent title={"Duration:"}>{duration}</SpellContent>
      )}

      {!!concentration !== undefined && (
        <SpellContent title={"Concentration:"}>
          {concentration ? "True" : "False"}
        </SpellContent>
      )}

      {!!castingTime && (
        <SpellContent title={"Casting Time:"}>{castingTime}</SpellContent>
      )}

      {!!level && <SpellContent title={"Level:"}>{level}</SpellContent>}

      {!!attackType && (
        <SpellContent title={"Attack Type:"}>{attackType}</SpellContent>
      )}

      {!!damage && (
        <SpellContent title={"Damage:"}>
          <>
            Damage type = {damage.damage_type.name}.{" "}
            {damage.damage_at_character_level !== undefined &&
              displayAllDamage(
                damage.damage_at_character_level,
                "Damage at character level"
              )}
            {damage.damage_at_slot_level !== undefined &&
              displayAllDamage(
                damage.damage_at_slot_level,
                "Damage at slot level"
              )}
          </>
        </SpellContent>
      )}

      {!!dc && (
        <SpellContent title={"dc:"}>
          dc success = {dc.dc_success !== undefined && dc.dc_success}. dc type ={" "}
          {dc.dc_type !== undefined && dc.dc_type.name}.
        </SpellContent>
      )}

      {!!school && <SpellContent title={"School:"}>{school.name}</SpellContent>}

      {!!classes && (
        <SpellContent title={"Classes:"}>
          {classes.map((e, index) => (index ? ", " : "") + e.name)}
        </SpellContent>
      )}

      {!!subclasses && subclasses.length > 0 && (
        <SpellContent title={"Subclasses:"}>
          {subclasses.map((e, index) => (index ? ", " : "") + e.name)}
        </SpellContent>
      )}
    </div>
  );
}

const displayAllDamage = (obj, title) => {
  let resultStr = "";
  for (var key in obj) {
    resultStr += title + " " + key + " = " + obj[key] + ". ";
  }
  return resultStr;
};

export default MoreInfoCard;
