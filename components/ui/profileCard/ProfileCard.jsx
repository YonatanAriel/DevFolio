import Image from "next/image";
import styles from "./style.module.css";
import { AiFillHeart } from "react-icons/ai";

export default function ProfileCard() {
  return (
    <>
      <div className="flex items-center justify-center py-10 ">
        <div className={`${styles.imgContainer} `}>
          <div
            style={{ zIndex: -1 }}
            className="w-full absolute top-0 left-0 bottom-0 right-0 border-r-4  "
          >
            <Image
              src={"/fire-1680605.jpg"}
              alt="ojni"
              fill
              className="object-cover object-center "
            />
          </div>

          <div
            className={` ${styles.loginContainer}  bg-white bg-opacity-30   backdrop-blur-lg w-full h-full relative`}
          >
            <div className={styles.profileImg}></div>
            <h1 className="font-bold text-xl">David</h1>
            <div className={styles.description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos expedita iste modi quis reprehenderit suscipit esse
              numquam totam optio, necessitatibus?
            </div>
            <div className={styles.social}>
              <a>GitHub</a>
              <a>Twitter</a>
              <a>LinkedIn</a>
            </div>
            <button>Projects</button>
            <footer className={`${styles.foot} bg-black py-8 text-[#FF4E00]`}>
              <div className={styles.likes}>
                <div className=" text-[#FF4E00] ">
                  <AiFillHeart size={23} />
                </div>
                <p>347</p>
              </div>
              <div className="flex gap-2">
                <p>Protfolio</p>
              </div>
            </footer>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center py-10">
        <div className={`${styles.imgContainer} `}>
          <div
            style={{ zIndex: -1 }}
            className="w-full absolute top-0 left-0 bottom-0 right-0 border-r-4  "
          >
            <Image
              src={"/fire-1680605.jpg"}
              alt="ojni"
              fill
              className="object-cover object-center "
            />
          </div>

          <div
            className={` ${styles.loginContainer}  bg-white bg-opacity-30   backdrop-blur-lg w-full h-full relative`}
          >
            <div className={styles.profileImg}></div>
            <h1>David</h1>
            <div className={styles.description}>
              public/GettyImages-1092658864_hero-1024x575.webp
              public/GettyImages-1092658864_hero-1024x575.webpjk niouknuik
              jniukjn jnk
            </div>
            <div className={styles.social}>
              <a>GitHub</a>
              <a>Twitter</a>
              <a>LinkedIn</a>
            </div>
            <button>Projects</button>
            <footer className={`${styles.foot} bg-black py-8 text-[#FF4E00]`}>
              <div className={styles.likes}>
                <div className=" text-[#FF4E00] cursor-pointer">
                  <AiFillHeart size={23} />
                </div>
                <p>150</p>
              </div>
              <div className="flex gap-2">
                <p>Protfolio</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
