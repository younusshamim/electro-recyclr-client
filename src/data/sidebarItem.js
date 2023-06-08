import { MdPendingActions } from "react-icons/md";
import { BsBookmarkCheck } from "react-icons/bs";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { HiTemplate, HiOutlineTemplate } from "react-icons/hi";
import { FiUsers, FiUserCheck } from "react-icons/fi";

const sidebarItem = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    Icon: AiOutlineHome,
    subItems: [],
  },
  {
    id: 2,
    name: "Product",
    link: "",
    Icon: HiOutlineTemplate,
    subItems: [
      { id: 1, name: "My Products", link: "/dashboard/my-products" },
      { id: 2, name: "Add Product", link: "/dashboard/add-product" },
    ],
  },
  {
    id: 3,
    name: "Booking",
    link: "",
    Icon: BsBookmarkCheck,
    subItems: [
      { id: 1, name: "My Bookings", link: "/dashboard/my-bookings" },
      { id: 2, name: "Purchase", link: "/dashboard/purchase" },
    ],
  },
  {
    id: 4,
    name: "Pending Products",
    link: "/dashboard/pending-products",
    Icon: MdPendingActions,
    subItems: [],
  },
  {
    id: 5,
    name: "Categories",
    link: "/dashboard/categories",
    Icon: BiCategoryAlt,
    subItems: [],
  },
  {
    id: 6,
    name: "User List",
    link: "/dashboard/users",
    Icon: FiUsers,
    subItems: [],
  },
];

export default sidebarItem;
