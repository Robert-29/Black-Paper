import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const text = "Black Paper";

const animacionLetras = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const BlackPaperAnimation = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Calcula el tiempo total de la animación antes de mostrar el contenido
    const animationDuration = text.length * 0.1 + 0.5;
    setTimeout(() => setShowAnimation(false), animationDuration * 1000);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50 text-gray-900">
      {showAnimation ? (
        <motion.div className="flex">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={animacionLetras}
              initial="hidden"
              animate="visible"
              className="text-6xl font-bold text-[#8B5CF6]"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
      ) : (
        <div className="text-center p-10">
          <h1 className="text-4xl font-bold">Bienvenido a Black Paper</h1>
          <p className="mt-4 text-lg text-black">
            Este es el contenido principal de la página.
          </p>
        </div>
      )}
    </div>
  );
};

export default BlackPaperAnimation;
