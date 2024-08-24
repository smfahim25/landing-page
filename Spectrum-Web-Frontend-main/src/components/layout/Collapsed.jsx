import Link from "next/link";

const Collapsed = ({ title, href, icon, onClick }) => {
  return (
    <Link
      href={href ? href : "#"}
      className="text-[10px] text-white flex flex-col items-end justify-center"
      onClick={onClick}
    >
      {icon}
      {title}
    </Link>
  );
};

export default Collapsed;
