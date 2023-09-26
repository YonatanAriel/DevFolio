import { MdSend } from "react-icons/md";

export default function Comment() {
  return (
    <>
      <div className="relative text-black">
        <input
          className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
          type="text"
          placeholder="What do you think?"
        />

        <div className="flex absolute right-3 top-2/4 -mt-3 items-center cursor-pointer text-black">
          <MdSend size={25} />
        </div>
      </div>

      {/* Comments content */}
      {/* <div className="pt-6">
        <div className="media flex pb-4">
          <a className="mr-4" href="#">
            <img
              className="rounded-full max-w-none w-12 h-12"
              src="https://randomuser.me/api/portraits/men/82.jpg"
              alt="User"
            />
          </a>

          <div className="media-body">
            <div>
              <a className="inline-block text-base font-bold mr-2" href="#">
                Leslie Alexander
              </a>
              <span className="text-slate-500 dark:text-slate-300">
                25 minutes ago
              </span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>

            <div className="mt-2 flex items-center">
              <a className="inline-flex items-center py-2 mr-3" href="#">
                <span className="text-base font-bold">12</span>
                * svg *
              </a>

              <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* End comments row */}
    </>
  );
}
