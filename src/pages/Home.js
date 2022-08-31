import React from "react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import background from "../assets/dndBackground.png";
import logo from "../assets/dnd_logo.png";
import Button from "@mui/material/Button";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="homeContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <img src={background} alt="dnd" className="background" />
      <img src={logo} alt="logo" className="logo" />
      <Button
        variant="outlined"
        className="homeButton"
        color="error"
        size="large"
        onClick={() => {
          navigate("/spells");
        }}
      >
        View Spells
      </Button>
    </motion.div>
  );
}

export default Home;
