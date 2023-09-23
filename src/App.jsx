import "./App.scss";
import user from "./assets/photo_2023-08-10_11-58-59.jpg";
import avtoelon from "../src/assets/autoelon.png";
import amsc from "./assets/amsc.png";
import akbar1155 from "./assets/akbar1155.png";
import uzshop from "./assets/uzshop.png";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import {
  GithubOutlined,
  InstagramOutlined,
  PhoneOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { BsTelegram } from "react-icons/bs";
import { ImArrowRight2 } from "react-icons/im";
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
          href="https://t.me/Akbar_Israilov"
          className="hover:text-[#6d6bec] pt-4"
        >
          <BsTelegram />
        </a>
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
          className="hover:text-[#6d6bec]"
        >
          <LinkedinOutlined />
        </a>
        <a
          href="https://twitter.com/Akbar9040471781"
          className="   hover:text-[#6d6bec]"
        >
          <TwitterOutlined />
        </a>
        <a href="tel:+998932931155" className="   hover:text-[#6d6bec]">
          <PhoneOutlined />
        </a>
        {/* <span><GithubOutlined/></span>
        <span><GithubOutlined/></span> */}
      </div>

      <div className="grid grid-cols-4 gap-4 text-white mt-8 ml-[10%]">
        <div className="col-span-2 ...  pl-28 text-[20px]">
          <h2 className="items-center">Frontend</h2>
        </div>
        <div className="col-span-2 ... pl-28 text-[20px] ">
          <h2>Additional</h2>
        </div>
        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>Html , Css</p>
            <span className="text-[#706b6b]">Advance</span>
          </div>
        </div>
        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>React</p>
            <span className="text-[#706b6b]">Advance</span>
          </div>
        </div>

        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>Optimisation</p>
            <span className="text-[#706b6b]">Intermediate</span>
          </div>
        </div>
        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>Tailwindcss</p>
            <span className="text-[#706b6b]">Advance</span>
          </div>
        </div>

        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>Nextjs </p>
            <span className="text-[#706b6b]">Intermediate</span>
          </div>
        </div>
        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>Vuejs</p>
            <span className="text-[#706b6b]">Intermediate</span>
          </div>
        </div>
        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>Git</p>
            <span className="text-[#706b6b]">Advance</span>
          </div>
        </div>
        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>MaterialUI</p>
            <span className="text-[#706b6b]">Advance</span>
          </div>
        </div>

        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>Javascript</p>
            <span className="text-[#706b6b]">Advance</span>
          </div>
        </div>
        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>Scss</p>
            <span className="text-[#706b6b]">Advance</span>
          </div>
        </div>
        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>AntDesign</p>
            <span className="text-[#706b6b]">Advance</span>
          </div>
        </div>
        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>Bootstrap</p>
            <span className="text-[#706b6b]">Advance</span>
          </div>
        </div>

        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>Typescript</p>
            <span className="text-[#706b6b]">Intermediate</span>
          </div>
        </div>
        <div className="... flex text-white gap-4 items-center">
          <CheckCircleOutlined className="text-[#4f8ec2] text-[22px]" />
          <div className="text-[14px]">
            <p>Rest Api</p>
            <span className="text-[#706b6b]">Advance</span>
          </div>
        </div>
      </div>

      <span className="flex justify-center text-white text-[18px] p-8">
        My projects
      </span>
      <div className="grid grid-cols-2 gap-4 ml-[2%] text-white">
        <div className="url-img1 w-[100%]">
          <div className="url-img1__list w-[25%] items-end">
            <a
              href="https://amsc.netlify.app/Dashboard"
              target="_blank"
              className="bg-[#3731ed] flex w-[45%] h-[43px] items-center justify-center rounded-xl gap-2 mt-[33%] ml-[47%]"
            >
              <button className="text-white text-[18px]">
                Visiting the site
              </button>
              <ImArrowRight2 className=" text-[25px]" />
            </a>
          </div>
          <img src={amsc} alt="" />
        </div>{" "}
        <div className="url-img2 w-[100%]">
          <div className="url-img2__list w-[25%] items-end">
            <a
              href="https://akbar1155.netlify.app/home"
              target="_blank"
              className="bg-[#3731ed] flex w-[45%] h-[43px] items-center justify-center rounded-xl gap-2 mt-[33%] ml-[47%]"
            >
              <button className="text-white text-[18px]">
                Visiting the site
              </button>
              <ImArrowRight2 className=" text-[25px]" />
            </a>
          </div>
          <img src={akbar1155} alt="" />
        </div>{" "}


        <div className="url-img3 w-[100%]">
          <div className="url-img3__list w-[25%] items-end">
            <a
              href="https://uzshop2023.netlify.app/"
              target="_blank"
              className="bg-[#3731ed] flex w-[45%] h-[43px] items-center justify-center rounded-xl gap-2 mt-[33%] ml-[47%]"
            >
              <button className="text-white text-[18px]">
                Visiting the site
              </button>
              <ImArrowRight2 className=" text-[25px]" />
            </a>
          </div>
          <img src={uzshop} alt="" />
        </div>{" "}

        
        <div className="url-img4 w-[100%]">
          <div className="url-img4__list w-[25%] items-end">
            <a
              href="https://avtoelon2023.netlify.app/"
              target="_blank"
              className="bg-[#3731ed] flex w-[45%] h-[43px] items-center justify-center rounded-xl gap-2 mt-[33%] ml-[47%]"
            >
              <button className="text-white text-[18px]">
                Visiting the site
              </button>
              <ImArrowRight2 className=" text-[25px]" />
            </a>
          </div>
          <img src={avtoelon} alt="" />
        </div>
      </div>
      <span className="flex justify-center text-white mt-16">
        Akbar Israilov 2023
      </span>
    </div>
  );
}

export default App;
