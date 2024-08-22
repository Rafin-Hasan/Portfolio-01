import React from "react";
import "./HomeComponent.css";

const HomeComponent = () => {
  const styles = {
    body: {
      height: "100vh",
      margin: 0,
      background: "lightgreen",
      backgroundSize: "400% 400%",
      animation: "gradientBackground 15s ease infinite",
    },

    "@keyframes gradientBackground": {
      "0%": { backgroundColor: "#25272a" },
      "50%": { backgroundColor: "#c30ed0d6" },
      "100%": { backgroundColor: "#25272a" },
    },
  };

  return (
    <>
      <section className="relative">
        <div className="container flex gap-36">
          <div className="w-[700px] ">
            <img src="./img/Myself.gif" alt="My image" />
          </div>
          <div className="pt-40">
            <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&left=true&left=true&width=500&height=70&duration=6000&lines=Hi+There!+👋" />
            <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&left=true&left=true&width=500&height=70&duration=6000&lines=I'm+Rafin+Hasan!;" />
            <h3 className="font-sans font-semibold w-96 text-white text-xl">
              A talented web developer with a keen eye for detail and a
              commitment to excellence. Specializing in crafting responsive and
              user-friendly websites, they bring creative solutions to life,
              ensuring every project stands out.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeComponent;
