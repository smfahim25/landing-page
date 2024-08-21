import Link from "next/link";

const SidebarLink = ({ title, href, icon, onClick }) => {
  return (
    <Link
      href={href ? href : "#"}
      className="text-[10px] text-[#464646] flex flex-col items-center justify-center"
      onClick={onClick}
    >
      {icon}
      {title}
    </Link>
  );
};

export default SidebarLink;
