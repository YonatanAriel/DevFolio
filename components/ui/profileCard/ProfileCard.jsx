import Image from "next/image";
import styles from "./style.module.css";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

export default function ProfileCard({
  img,
  name,
  about,
  links,
  id,
  totalLikes,
  portfolioLink,
  occupation,
}) {
  return (
    <div className="flex items-center justify-center ">
      <div className={`${styles.imgContainer} `}>
        <div
          style={{ zIndex: -1 }}
          className="absolute top-0 bottom-0 left-0 right-0 w-full border-r-4 "
        >
          <Image
            alt="background"
            src={"/fire-bg.jpg"}
            priority={true}
            quality={1}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 920px) 50vw, 50vw"
            className="object-cover object-center "
          />
        </div>

        <div
          className={` ${styles.loginContainer}  bg-white bg-opacity-30   backdrop-blur-lg w-full h-full relative`}
        >
          {img ? (
            <div
              className={styles.profileImg}
              style={{
                background: `url("${img}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ) : (
            <div
              className={`${styles.profileImg} text-primary-color flex items-center justify-center font-semibold text-5xl text-center  bg-white`}
            >
              D
            </div>
          )}
          <h1 className="text-xl font-bold">{name}</h1>
          <div className={`${styles.description} font-semibold`}>
            <span className="font-bold">{occupation}</span>
            <br />
            {about}
          </div>
          <div className={styles.social}>
            <div className="flex w-full font-semibold justify-evenly">
              {links?.map((l, i) => (
                <Link
                  key={`${i}${l.href}`}
                  className="transition-all duration-200 ease-in hover:scale-[102%] "
                  href={l.href}
                >
                  {l.text}
                </Link>
              ))}
            </div>
          </div>
          <Link href={`/projects/user/${id}`} className={styles.projectsLink}>
            <button className={` font-semibold`}>Projects</button>
          </Link>
          <footer className={`${styles.foot} bg-black py-8 text-[#FF4E00]`}>
            <div className={styles.likes}>
              <div className="mr-1 text-[#FF4E00] ">
                <AiFillHeart size={23} />
              </div>
              <p className="font-semibold">{totalLikes}</p>
            </div>
            {portfolioLink && (
              <Link className="font-semibold " href={portfolioLink}>
                Portfolio
              </Link>
            )}
          </footer>
        </div>
      </div>
    </div>
  );
}
