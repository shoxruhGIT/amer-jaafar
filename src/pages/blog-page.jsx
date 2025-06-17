import React from "react";
import Bg from "../assets/blog_bg.png";

import Blog1 from "../assets/blog_1.png";
import Blog2 from "../assets/blog_2.png";
import Blog3 from "../assets/blog_3.png";
import Blog4 from "../assets/blog_4.png";
import { FaCalendar } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoReload } from "react-icons/io5";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      img: Blog1,
      title: "MothBreath: Weaving Ethereal Dreams into a Captivating Debut",
      description: `MothBreath’s self-titled debut album is a sonic tapestry, intricately woven from the finest threads of sound. Drawing influences from atmospheric trailblazers like Cocteau Twinsand My Bloody Valentine, and the brooding intensity of Massive Attackand Portishead, the Somerset band brings a fresh perspective to whatever the “now” indie sound is. This is an outfit seemingly unperturbed by fleeting trends. Instead, their sound relies on a delicate balance of atmospheric beauty and understated power. What emerges is the duo’s unique ability to blend dreamlike textures with refined simplicity, creating a sound that feels instantly timeless. “Wolf Eyes” opens the album with commanding restraint. Built on melancholic guitar work by John Libert and a steady electronic drumbeat, it allows Kirsty Dougall’s haunting vocals to shine. Her delivery, a mesmerizing blend of fragility and strength, becomes the emotional core of the track and the album. As the song unfolds, layers of delicate sound are interwoven, culminating in a dramatic crescendo that feels almost cinematic. “Wildfire Haze” takes the listener on a hypnotic journey through a shimmering soundscape. A repetitious lyric is delivered almost like a mantra and an unconventional beat creates a fascinating contrast, It evokes the feel of a lost Eurythmics version of the iconic Twin Peaks opening credits. Here the band masterfully crafts entrancing atmospheres from a handful of understated elements, with guitar work that adds intricate details to the track’s layered textures. “Drift Away” exemplifies the art of subtlety, its weightless quality anchored by a rhythmic drum loop. Atmospheric layers unfold gradually, like a carefully designed pattern, culminating in a breathtaking climax that feels like a moment of pure sonic bliss. The interplay between rhythmic pulse and ambient textures highlights John Libert’s skill in melding these elements seamlessly. “All I Need” delivers an emotive punch with its introspective lyrics and lush instrumentation. The track’s poignant melody is driven by a minimalist arrangement that allows Kirsty Dougall’s vocals and John Libert’s guitar work to shine. The result is a deeply affecting piece that captures the essence of longing and introspection. “Waiting For Me” introduces an orchestral flair and a 3/4 time signature that distinguishes it from its predecessors. The track’s optimism and the build-up of vocal harmonies create a powerful, uplifting experience, demonstrating the band’s versatility in manipulating their sound for emotional effect.`,
      data: "06.06.2025",
    },
    {
      id: 2,
      img: Blog2,
      title: "WHY?’s ‘The Well I Fell Into’: Beautiful Melancholia",
      description:
        "As the summer sun crests the horizon, casting long shadows over a season of musical releas...",
      data: "04.06.2025",
    },
    {
      id: 3,
      img: Blog3,
      title: "Relentless Resilience: Icarus Phoenix Soars Through Heartb...",
      description:
        "“I Should Have Known the Things You Never Said“, the new album by Icarus Phoenix, is th...",
      data: "02.06.2025",
    },
    {
      id: 4,
      img: Blog4,
      title: "Dana and The Wolf stand out with “Got Me Poly”",
      description:
        "Dana and The Wolf‘s recent single “Got Me Poly” is quite obviously an ode to polyamorou...",
      data: "02.06.2025",
    },
    {
      id: 5,
      img: Blog2,
      title: "Relentless Resilience: Icarus Phoenix Soars Through Heartb...",
      description:
        "“I Should Have Known the Things You Never Said“, the new album by Icarus Phoenix, is th...",
      data: "02.06.2025",
    },
    {
      id: 6,
      img: Blog1,
      title: "Dana and The Wolf stand out with “Got Me Poly”",
      description:
        "Dana and The Wolf‘s recent single “Got Me Poly” is quite obviously an ode to polyamorou...",
      data: "02.06.2025",
    },
    {
      id: 7,
      img: Blog3,
      title: "MothBreath: Weaving Ethereal Dreams into a Captivating Debut",
      description:
        "MothBreath’s self-titled debut album is a sonic tapestry, intricately woven from the finest...",
      data: "02.06.2025",
    },
    {
      id: 8,
      img: Blog4,
      title: "WHY?’s ‘The Well I Fell Into’: Beautiful Melancholia",
      description:
        "As the summer sun crests the horizon, casting long shadows over a season of musical releas...",
      data: "02.06.2025",
    },
  ];

  return (
    <div className="w-full h-auto">
      <div
        className="h-[400px] bg-cover bg-center flex items-end justify-center"
        style={{
          backgroundImage: `linear-gradient(180deg, #070809 0%, rgba(7, 8, 9, 0.8) 50%, #070809 100%), url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-[80px] font-semibold text-white text-center">
          Blog
        </h1>
      </div>
      <div className="max-w-[1420px] mx-auto grid gap-6 p-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {blogs?.map((blog) => (
          <div key={blog?.id} className="flex flex-col text-white gap-2">
            <Link to={`/blog/${blog?.id}`}>
              <img
                src={blog?.img}
                alt={blog?.title?.slice(0, 20)}
                className="w-full aspect-[4/3] rounded-[12px] object-cover"
              />
            </Link>
            <h1 className="text-lg md:text-xl font-semibold">{blog?.title}</h1>
            <h3 className="text-sm md:text-base font-normal text-neutral-400">
              {blog?.description.slice(0, 80)}...
            </h3>
            <p className="text-[#E1A23C] text-sm md:text-base flex items-center gap-2">
              <FaCalendar />
              {blog?.data}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center text-white mt-6 gap-4">
        <GoArrowLeft className="text-lg" />
        <button className="w-[44px] h-[44px] rounded-[8px] bg-[#E1A23C] text-black">
          1
        </button>
        <button className="w-[44px] h-[44px] rounded-[8px] bg-[#2B2F32] text-white">
          2
        </button>
        <button className="w-[44px] h-[44px] rounded-[8px] bg-[#2B2F32] text-white">
          3
        </button>
        <button className="w-[44px] h-[44px] rounded-[8px] bg-[#2B2F32] text-white">
          4
        </button>
        <button className="w-[44px] h-[44px] rounded-[8px] bg-[#2B2F32] text-white">
          5
        </button>

        <GoArrowRight className="text-lg" />
      </div>
      <div className="flex items-center justify-center mt-6 ">
        <button className="bg-[#2B2F32] w-[150px] h-[44px] flex items-center justify-center rounded-[8px] text-white gap-2">
          <IoReload className="text-[#E1A23C]" /> <span>Load more</span>
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
