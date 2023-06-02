const Button = ({ border, title, styles }) => {
  return (
    <div
      className={`${
        border
          ? "border-[2px]  border-snap-gray border-solid hover:border-snap-black transition-all"
          : ""
      } text-snap-gray rounded-xl flex items-center justify-center cursor-pointer ${styles}`}
    >
      <div className="py-3 px-6  hover:text-snap-black transition-all w-full text-center">
        {title}
      </div>
    </div>
  );
};

export default Button;
