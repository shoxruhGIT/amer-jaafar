import React from "react";
import Bg from "../assets/blog_bg.png";
import { Link, useNavigate } from "react-router-dom";
import Blog1 from "../assets/blog_1.png";
import { LuArrowLeft } from "react-icons/lu";
import { FaCalendar } from "react-icons/fa";

const BlogDetailsPage = () => {
  const navigate = useNavigate();

  const blog = {
    id: 1,
    img: Blog1,
    title: "MothBreath: Weaving Ethereal Dreams into a Captivating Debut",
    description: `MothBreath’s self-titled debut album is a sonic tapestry, intricately woven from the finest threads of sound. Drawing influences from atmospheric trailblazers like Cocteau Twinsand My Bloody Valentine, and the brooding intensity of Massive Attackand Portishead, the Somerset band brings a fresh perspective to whatever the “now” indie sound is. This is an outfit seemingly unperturbed by fleeting trends. Instead, their sound relies on a delicate balance of atmospheric beauty and understated power. What emerges is the duo’s unique ability to blend dreamlike textures with refined simplicity, creating a sound that feels instantly timeless. \n “Wolf Eyes” opens the album with commanding restraint. Built on melancholic guitar work by John Libert and a steady electronic drumbeat, it allows Kirsty Dougall’s haunting vocals to shine. Her delivery, a mesmerizing blend of fragility and strength, becomes the emotional core of the track and the album. As the song unfolds, layers of delicate sound are interwoven, culminating in a dramatic crescendo that feels almost cinematic. “Wildfire Haze” takes the listener on a hypnotic journey through a shimmering soundscape. A repetitious lyric is delivered almost like a mantra and an unconventional beat creates a fascinating contrast, It evokes the feel of a lost Eurythmics version of the iconic Twin Peaks opening credits. Here the band masterfully crafts entrancing atmospheres from a handful of understated elements, with guitar work that adds intricate details to the track’s layered textures. “Drift Away” exemplifies the art of subtlety, its weightless quality anchored by a rhythmic drum loop. Atmospheric layers unfold gradually, like a carefully designed pattern, culminating in a breathtaking climax that feels like a moment of pure sonic bliss. The interplay between rhythmic pulse and ambient textures highlights John Libert’s skill in melding these elements seamlessly. “All I Need” delivers an emotive punch with its introspective lyrics and lush instrumentation. The track’s poignant melody is driven by a minimalist arrangement that allows Kirsty Dougall’s vocals and John Libert’s guitar work to shine. The result is a deeply affecting piece that captures the essence of longing and introspection. “Waiting For Me” introduces an orchestral flair and a 3/4 time signature that distinguishes it from its predecessors. The track’s optimism and the build-up of vocal harmonies create a powerful, uplifting experience, demonstrating the band’s versatility in manipulating their sound for emotional effect.`,
    data: "06.06.2025",
  };

  return (
    <div className="w-full h-auto">
      <div
        className="h-[400px] bg-cover bg-center flex items-end justify-start"
        style={{
          backgroundImage: `linear-gradient(180deg, #070809 0%, rgba(7, 8, 9, 0.8) 50%, #070809 100%), url(${Bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-[1520px] mx-auto flex flex-col items-start">
          <Link
            to="/blog"
            className="text-[#E1A23C] text-xl font-normal flex items-center gap-2"
          >
            <span>
              <LuArrowLeft />
            </span>
            Go to blog
          </Link>
          <h1 className="text-[80px] font-semibold text-white text-left">
            {blog?.title}
          </h1>
        </div>
      </div>
      <div className="w-full max-w-[1520px] mx-auto space-y-3">
        <p className="text-[#E1A23C] text-sm md:text-base flex items-center gap-2">
          <FaCalendar />
          {blog?.data}
        </p>
        <img src={blog?.img} alt="blog rasmi" className="w-full object-cover" />
        <h3 className="text-xl text-neutral-500">{blog?.description}</h3>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
