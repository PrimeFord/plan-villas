import PropTypes from "prop-types";

export default function ServicesComponent(props) {
  console.log(props);
  return (
    <article className=" pt-[40px]  border-r md:border-r-0 border-[#7A7A7A]">
      <img
        src={"../Images/consultancy.png"}
        alt="consult"
        className="mx-auto"
      />
      <h3 className="text-center py-[22px] font-medium">{props.title}</h3>
    </article>
  );
}

ServicesComponent.propTypes = {
  title: PropTypes.string.isRequired,
};
