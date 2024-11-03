import { MdSend } from "react-icons/md";

export default function Comment() {
  return (
    <>
      <div className="relative text-black">
        <input
          className="w-full pt-2 pb-2 pl-3 pr-20 font-medium rounded-lg h-11 bg-slate-100 dark:bg-slate-600 placeholder:text-slate-600 dark:placeholder:text-slate-300"
          type="text"
          placeholder="What do you think?"
        />
        <div className="absolute flex items-center -mt-3 text-black cursor-pointer right-3 top-2/4">
          <MdSend size={25} />
        </div>
      </div>

      {/* Comments content */}
      {/* <div className="pt-6">
        <div className="flex pb-4 media">
          <a className="mr-4" href="#">
            <img
              className="w-12 h-12 rounded-full max-w-none"
              src="https://randomuser.me/api/portraits/men/82.jpg"
              alt="User"
            />
          </a>

          <div className="media-body">
            <div>
              <a className="inline-block mr-2 text-base font-bold" href="#">
                Leslie Alexander
              </a>
              <span className="text-slate-500 dark:text-slate-300">
                25 minutes ago
              </span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>

            <div className="flex items-center mt-2">
              <a className="inline-flex items-center py-2 mr-3" href="#">
                <span className="text-base font-bold">12</span>* svg *
              </a>

              <button className="px-4 py-2 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>   */}
      {/* End comments row */}
    </>
  );
}
