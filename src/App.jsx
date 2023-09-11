import "./App.css";
import user from "./assets/photo_2023-08-10_11-58-59.jpg";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import {
  GithubOutlined,
  InstagramOutlined,
  PhoneOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
function App() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };
  return (
    <div className="header">
      <div className="flex items-center justify-center">
        <img
          src={user}
          alt=""
          className="rounded-full"
          width={200}
          height={200}
        />
      </div>
      <div className="text-white items-center justify-center flex pt-[20px]">
        <div>
          <h1 className="text-[#fff] text-[30px]">Akbar Israilov</h1>
          <div className="text-[18px] ml-[12%] text-[#6f61c2]">
            Web Developer
          </div>
          <Typewriter
            options={{
              strings: [
                "✋I'm Akbar Israilov.",
                // "I'm an enthusiast Full-Stack 🌐developer",
                "I'm a 🌐webdeveloper",
                // "I'm a 4th yr CSE 👨‍🎓 in VIT Vellore",
                // "You can 📲 me through discord or ✉️",
              ],
              delay: 150,
              pauseFor: 1500,
              autoStart: true,
              loop: true,
              stringSplitter: stringSplitter,
            }}
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-6 text-[25px] pt-4 text-[#3547ad]">
        <a
          href="https://github.com/akbar1155"
          className="   hover:text-[#6d6bec]"
        >
          <GithubOutlined />
        </a>
        <a
          href="https://www.instagram.com/akbar_israilovv/?hl=en"
          className="   hover:text-[#6d6bec]"
        >
          <InstagramOutlined />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100086628349691"
          className="   hover:text-[#6d6bec]"
        >
          {" "}
          <FacebookOutlined />
        </a>
        <a
          href="https://www.linkedin.com/in/akbar-isroilov-407295256/"
          className="   hover:text-[#6d6bec]"
        >
          <LinkedinOutlined />
        </a>
        <a
          href="https://twitter.com/Akbar9040471781"
          className="   hover:text-[#6d6bec]"
        >
          <TwitterOutlined />
        </a>
        <a href="tel:+998932931155"  className="   hover:text-[#6d6bec]">
          <PhoneOutlined />
        </a>
        {/* <span><GithubOutlined/></span>
        <span><GithubOutlined/></span> */}
      </div>
    </div>
  );
}

export default App;
