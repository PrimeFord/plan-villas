import { useNavigate } from "react-router-dom";
// import SellProperties from "./SellProperties";

const Properties = () => {
  const navigate = useNavigate();
  return (
    <section className="grid md:grid-cols-3 divide-x-[1px] divide-[#7A7A7A]">
      <article className=" text-center flex flex-col items-center justify-center pt-[90px]">
        <img
          src={"../Images/manwithkey.png"}
          alt="man with key"
          className=" mb-[72px]"
        />
        <h2 className="text-[#201E1C] text-[50px] tracking-[0.04em] font-medium">
          BUY
        </h2>
        <h3 className="mb-[40px] text-[#201E1C] text-[18px] tracking-[0.04em] font-medium">
          PROPERTIES
        </h3>
      </article>
      <article className="bg-[#E3A335] text-[#FFFBF5] text-center flex flex-col items-center justify-center pt-[90px]">
        <img
          src={"../Images/womanwithkey.png"}
          alt="woman with key"
          className=" mb-[72px]"
        />
        <h2 className=" text-[50px] tracking-[0.04em] font-medium">RENT</h2>
        <h3 className="mb-[40px]">PROPERTIES</h3>
      </article>
      <article
        className="text-center flex flex-col items-center cursor-pointer justify-center pt-[90px] hover:bg-[#00000010]"
        onClick={() => navigate("/property/sell-properties")}
      >
        <img
          src={"../Images/manwithcard.png"}
          alt="man with card"
          className=" mb-[72px]"
        />
        <h2 className=" text-[#201E1C] text-[50px] tracking-[0.04em] font-medium">
          SELL
        </h2>
        <h3 className="mb-[40px] text-[#201E1C] text-[18px] tracking-[0.04em] font-medium">
          PROPERTIES
        </h3>
      </article>
      {/* <Routes>
        <Route path="sell-properties" element={<SellProperties />} />
      </Routes> */}
      {/* <Outlet /> */}
    </section>
  );
};

export default Properties;
