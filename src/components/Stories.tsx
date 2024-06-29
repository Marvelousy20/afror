import Image from "next/image";

const stories = [
  {
    name: "Pretty",
    img: "/pretty.svg",
  },
  {
    name: "Tasty",
    img: "/tasty.svg",
  },
  {
    name: "Saida",
    img: "/saida.svg",
  },
  {
    name: "Goddess",
    img: "/pretty.svg",
  },

  {
    name: "Goddess",
    img: "/pretty.svg",
  },
];

const Stories = () => {
  return (
    <div className="flex justify-between px-5 pt-2">
      {stories.map((story, id) => (
        <div key={id} className="flex flex-col items-center">
          <Image src={story.img} alt="story" width={57} height={57} />
          <p className="italic text-[0.65rem]">{story.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
