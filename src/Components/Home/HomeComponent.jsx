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
      "0%": { backgroundColor: "#4d82b0" },
      "50%": { backgroundColor: "#03346e" },
      "100%": { backgroundColor: "#4d82b0" },
    },
    floatingIcon: {
      position: "absolute",
      width: "50px",
      opacity: 0.7,
      animation: "floatIcons 20s linear infinite",
    },
    "@keyframes floatIcons": {
      "0%": { transform: "translateX(100vw)" },
      "100%": { transform: "translateX(-100vw)" },
    },
  };

  return (
    <>
      <section className="relative">
        <div className="icons absolute top-0 left-0 z-[99]" style={styles.body}>
          {/* Floating Icons */}
          <img
            src="./img/vscode-logo.png"
            alt="VSCode"
            style={{ ...styles.floatingIcon, top: "5%", animationDelay: "0s" }}
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
            alt="GitHub"
            style={{ ...styles.floatingIcon, top: "15%", animationDelay: "2s" }}
          />
          <img
            src="./img/react-logo.svg"
            alt="React"
            style={{
              ...styles.floatingIcon,
              top: "30%",
              animationDelay: "4s",
            }}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="JavaScript"
            style={{
              ...styles.floatingIcon,
              top: "50%",
              animationDelay: "6s",
            }}
          />
        </div>
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
