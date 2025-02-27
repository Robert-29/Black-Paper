import { motion } from "framer-motion";

// Definición del texto
const text = "Black Paper";

// Variantes de la animación para cada letra
const letterVariants = {
  hidden: { opacity: 0, y: 20 }, // Estado inicial: invisible y desplazado hacia abajo
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Cada letra aparece con retraso progresivo
      duration: 0.5,
    },
  }),
};

setTimeout(() => letterVariants(), 3000);

const BlackPaperAnimation = () => {
  return (
    <motion.div className="flex justify-center items-center h-screen bg-gray-100">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          custom={index} // Define el índice de la letra
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl font-bold text-black"
        >
          {char === " " ? "\u00A0" : char} {/* Reemplaza espacios en blanco */}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default BlackPaperAnimation;
