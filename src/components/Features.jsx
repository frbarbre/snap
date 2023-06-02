const Features = ({ id, image, title }) => {
  return (
    <div key={id} className="flex gap-3 items-center cursor-pointer">
      <div className="flex items-center justify-center w-[20px]">
        <img src={image} alt={id} />
      </div>
      <li className="text-snap-gray hover:text-snap-black transition-all">
        {title}
      </li>
    </div>
  );
};

export default Features;
