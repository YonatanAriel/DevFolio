import Image from "next/image";
import styles from "./style.module.css";
import { AiFillHeart } from "react-icons/ai";
import profiles from "../../../data/fakeUsers.json";
import Link from "next/link";

export default function ProfileCard() {
  return (
    <>
      {profiles.map((p) => (
        <div className="flex items-center justify-center py-10 ">
          <div className={`${styles.imgContainer} `}>
            <div
              style={{ zIndex: -1 }}
              className="w-full absolute top-0 left-0 bottom-0 right-0 border-r-4  "
            >
              <Image
                src={"/fire-1680605.jpg"}
                fill
                className="object-cover object-center "
              />
            </div>

            <div
              className={` ${styles.loginContainer}  bg-white bg-opacity-30   backdrop-blur-lg w-full h-full relative`}
            >
              <div
                className={styles.profileImg}
                style={{
                  background: `url("${p.img}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h1 className="font-bold text-xl">{p.name}</h1>
              <div className={`${styles.description} font-semibold`}>
                {p.about}
              </div>
              <div className={styles.social}>
                <div className="flex justify-evenly w-full font-semibold">
                  {p.links.map((l) => (
                    <a href={l.href}>{l.name}</a>
                  ))}
                </div>
              </div>
              <Link href={`/projects/${p.id}`} className={styles.projectsLink}>
                <button className={` font-semibold`}>Projects</button>
              </Link>
              <footer className={`${styles.foot} bg-black py-8 text-[#FF4E00]`}>
                <div className={styles.likes}>
                  <div className="mr-1 text-[#FF4E00] ">
                    <AiFillHeart size={23} />
                  </div>
                  <p className="font-semibold">{p.totalLikes}</p>
                </div>
                {p.portfolioLink && (
                  <Link className="font-semibold " href={p.portfolioLink}>
                    Portfolio
                  </Link>
                )}
              </footer>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
