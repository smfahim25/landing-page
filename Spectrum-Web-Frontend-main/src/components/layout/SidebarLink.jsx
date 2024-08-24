import Link from "next/link";

const SidebarLink = ({ title, href, icon, onClick }) => {
  return (
    <Link
      href={href ? href : "#"}
      className="text-[10px] text-white flex flex-col items-center justify-center px-5"
      onClick={onClick}
    >
      {icon}
      {title}
    </Link>
  );
};

export default SidebarLink;
