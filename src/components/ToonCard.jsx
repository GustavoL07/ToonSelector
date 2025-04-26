import "./ToonCard.css";
import { motion } from "framer-motion";

export default function ToonCard({ name, image }) {
  return (
    <div className="conatainer">
      <div className="glow-div">
        <div className="toon-card">
          <motion.img
            src={image}
            alt={name}
            className="toon-image"
            key={image}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          <motion.p
            className="toon-name"
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.5, ease: "easeIn" }}
          >
            {name}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
