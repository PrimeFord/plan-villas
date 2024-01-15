const SellProperties = () => {
  return (
    <div className="grid grid-cols-2 divide-x-[1px] divide-[#7A7A7A]">
      <div className="px-[3rem] py-[4rem] flex flex-col gap-8">
        <h2 className="text-[3rem] font-[600] ">SELL PROPERTY</h2>
        <p className="leading-[1.8rem] w-[75%] ">
          Do you want to sell your property or you have a property you want to
          list with us? We can help you sell your property quickly. Contact us
          and we&apos;ll get back to you ASAP!
        </p>
        <div className=" flex flex-col gap-[1.8rem]">
          <p className="flex items-center gap-4">
            <span className="w-[1.8rem] h-[1.8rem] bg-[#444444] flex justify-center items-center">
              <img
                className="w-[1rem]"
                src={"../Images/Socials/phone.svg"}
                alt="phone"
              />
            </span>
            <span>+234-803 3780 696</span>
          </p>
          <p className="flex items-center gap-4">
            <span className="w-[1.8rem] h-[1.8rem] bg-[#444444] flex justify-center items-center">
              <img
                className="w-[1rem]"
                src={"../Images/Socials/mail.svg"}
                alt="mail"
              />
            </span>
            <span>Plainsandvalleys@gmail.com</span>
          </p>
          <p className="flex gap-4">
            <span className="w-[1.8rem] h-[1.8rem] bg-[#444444] flex justify-center items-center">
              <img
                className="w-[1rem]"
                src={"../Images/Socials/map.svg"}
                alt="location"
              />
            </span>
            <span className="w-[18rem]">
              No. 7, Kabba Street, Off Sabo Oke Rd, Ilorin, Kwara State,
              <br />
              Nigeria.
            </span>
          </p>
        </div>
        <div className=" flex gap-[1.8rem]">
          <a href="#">
            <img
              className="w-[1.5rem]"
              src={"../Images/Socials/twitter.svg"}
              alt="x"
            />
          </a>{" "}
          <a href="#">
            <img
              className="w-[1.5rem]"
              src={"../Images/Socials/instagram.svg"}
              alt="instagram"
            />
          </a>{" "}
          <a href="#">
            <img
              className="w-[1.5rem]"
              src={"../Images/Socials/facebook.svg"}
              alt="facebook"
            />
          </a>{" "}
          <a href="#">
            <img
              className="w-[1.5rem]"
              src={"../Images/Socials/whatsapp.svg"}
              alt="whatsapp"
            />
          </a>
        </div>
      </div>
      <div className="p-[5rem]">
        <h2 className="text-[2rem] mb-[2rem] font-[600]">
          Tell us about your property
        </h2>
        <form action="" onSubmit={""} className="flex flex-col gap-4">
          <section className="flex flex-col gap-2">
            <label htmlFor="full_name" className="text-[1rem] font-[600]">
              FULL NAME
            </label>
            <input
              type="text"
              // value={""}
              required
              name="full_name"
              placeholder="Enter your full name"
              className="w-[100%] border-[#7A7A7A] border-[1px] p-2 outline-none focus:outline-none border-solid rounded-[3px]"
            />
          </section>
          <section className="flex flex-col gap-2">
            <label htmlFor="email_address" className="text-[1rem] font-[600]">
              EMAIL ADDRESS
            </label>
            <input
              type="text"
              // value={""}
              required
              name="email_address"
              placeholder="Enter your email address"
              className="w-[100%] border-[#7A7A7A] border-[1px] p-2 outline-none focus:outline-none border-solid rounded-[3px]"
            />
          </section>
          <section className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[1rem] font-[600]">
              MESSAGE
            </label>
            <textarea
              type="text"
              // value={""}
              required
              name="message"
              placeholder="Tell us about the property you want to sell"
              className="w-[100%] h-[8rem] border-[#7A7A7A] border-[1px] p-2 outline-none focus:outline-none border-solid rounded-[3px]"
            ></textarea>
          </section>
          <button
            onClick={""}
            className="text-[#E3A335] font-[500] hover:bg-[#00000010] border-[#E3A335] w-fit px-8 py-2 border-[1px] rounded-[3px]"
          >
            SUBMIT
          </button>
        </form>
      </div>
      {/* <Outlet /> */}
    </div>
  );
};

export default SellProperties;
