import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface AvatarOnlyProps {
  avatarUrl: string;
}

const AvatarOnly: React.FC<AvatarOnlyProps> = ({ avatarUrl }) => {
  const avatarVariants = {
    enter: { scale: 1, opacity: 1, rotate: 0 },
  };

  const spring = {
    type: "spring",
    stiffness: 50,
    damping: 10,
    mass: 0.8,
  };

  return (
    <div className="relative w-24 h-24 md:w-28 md:h-28">
      {/* Avatar */}
      <motion.div
        animate="enter"
        className="absolute inset-0 rounded-full flex items-center justify-center"
        initial="enter"
        transition={spring}
        variants={avatarVariants}
      >
        <Image
          alt="Avatar"
          className="w-24 h-24 md:w-28 md:h-28 object-cover mb-4 border-2 border-transparent dark:border-knight rounded-full"
          height={128}
          src={avatarUrl}
          width={128}
        />
      </motion.div>
    </div>
  );
};

export default AvatarOnly;
