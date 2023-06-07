import { MdPendingActions } from "react-icons/md";
import { BsBookmarkCheck } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { HiTemplate, HiOutlineTemplate } from "react-icons/hi";
import { FiUsers, FiUserCheck } from "react-icons/fi";

const sidebarItem = [
  {
    id: 1,
    item: "Dashboard",
    link: "/dashboard",
    Icon: AiOutlineHome,
  },
  {
    id: 2,
    item: "My Products",
    link: "/dashboard/my-products",
    Icon: HiOutlineTemplate,
  },
  {
    id: 3,
    item: "My Bookings",
    link: "/dashboard/my-bookings",
    Icon: BsBookmarkCheck,
  },
  {
    id: 4,
    item: "Pending Products",
    link: "/dashboard/pending-products",
    Icon: MdPendingActions,
  },
  {
    id: 5,
    item: "Categories",
    link: "/dashboard/categories",
    Icon: BiCategoryAlt,
  },
  {
    id: 6,
    item: "User List",
    link: "/dashboard/users",
    Icon: FiUsers,
  },
];

export default sidebarItem;
