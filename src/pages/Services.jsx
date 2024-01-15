import ServicesComponent from "../components/Services-component";

const Services = () => {
  return (
    <section className="">
      <div className="grid md:grid-cols-3 divide-x-[1px] divide-y-[1px] divide-[#7A7A7A]">
        <article className="text-[#201E1C]">
          <h2 className="font-medium text-[35px] text-center md:text-left  md:pl-[40px] lg:pl-[64px] tracking-[0.04em] py-[80px]">
            OUR <br /> SERVICES
          </h2>
        </article>
        <article className="pt-[40px]">
          <img src={"../Images/sales.png"} alt="sales" className="mx-auto" />
          <h3 className="text-center py-[22px] font-medium">
            Sales and Procurement of Landed Properties.
          </h3>
        </article>
        <article className="pt-[40px]">
          <img src={"../Images/rentals.png"} alt="rent" className="mx-auto" />
          <h3 className="text-center py-[22px] font-medium">
            Rentals, Leasing and Caretaking Services
          </h3>
        </article>

        <article className="pt-[40px]">
          <img
            src={"../Images/management.png"}
            alt="manage"
            className="mx-auto"
          />
          <h3 className="text-center py-[22px] font-medium">
            Management of Properties.
          </h3>
        </article>
        <article className="pt-[40px]">
          <img
            src={"../Images/marketing.png"}
            alt="market"
            className="mx-auto"
          />
          <h3 className="text-center py-[22px] font-medium">
            Marketing of Properties.
          </h3>
        </article>
        {/* <article className=' pt-[40px]  border-r md:border-r-0 border-[#7A7A7A]'>
          <img src={consult} alt='consult' className='mx-auto' />
          <h3 className='text-center py-[22px] font-medium'>
            Consultancy and Appraiser Services
          </h3>
        </article> */}

        <ServicesComponent
          title="Consultancy  Appraiser Services"
          image={"../Images/consultancy.png"}
        />
      </div>
      {/* <div className="border-[0.5px] border-[#7A7A7A]"></div> */}
    </section>
  );
};

export default Services;
