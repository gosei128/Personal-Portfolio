const Contact = () => {
  return (
    <div className="w-full h-fit  flex justify-center mt-10 p-5">
      <div className="container bg-pink-50 dark:bg-dark-mode border border-gray-200 dark:border-gray-800 rounded-2xl w-5xl max-w-full overflow-hidden p-8 relative ">
        <div className="absolute top-[0%] left-[50%] w-[400px] h-[400px] bg-pink-300 dark:bg-red-400 dark:opacity-20 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-[50%] right-[20%] w-[450px] h-[450px] bg-purple-300 dark:bg-purple-900 dark:opacity-20  rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-[15%] right-[60%] w-[350px] h-[350px] bg-blue-300 dark:bg-blue-800 dark:opacity-20 rounded-full blur-3xl opacity-60"></div>
        <div className="tablet:text-center text-3xl dark:text-purple-400 relative z-10 font-bold">
          <h1>Let's bring your ideas to life.</h1>
          <h1>Let's turn your vision into reality</h1>
        </div>

        <form className="w-full gap-2 flex flex-col bg-white dark:bg-dark-mode rounded-xl border-gray-400 dark:border-gray-800 shadow-lg relative border mt-5 p-4">
          <label>Name</label>
          <input
            type="text"
            className="border rounded-md p-2 border-gray-400 dark:border-gray-800 placeholder-zinc-400 dark:placeholder-zinc-400"
            placeholder="Your Name"
          />
          <label> Email</label>
          <input
            type="text"
            className="border rounded-md p-2 border-gray-400 dark:border-gray-800 placeholder-zinc-400 dark:placeholder-zinc-400"
            placeholder="contact@example.com"
          />
          <label>Message</label>
          <textarea
            name=""
            id=""
            cols="20"
            rows="6"
            className="border rounded-md p-2 border-gray-400 dark:border-gray-800 placeholder-zinc-400 dark:placeholder-zinc-400"
            placeholder="Your message here..."
          ></textarea>
          <button className="border w-19 p-2 rounded-md border-gray-400 dark:border-gray-800">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
