import AccountDetails from "./components/AccountDetails";
import Wallet from "./components/Wallet";
import UserOrders from "./components/UserOrders";
import { ReactNode } from "react";
import { Icon } from "@iconify/react";
import { TbTruckDelivery } from "react-icons/tb";

export interface UserSideLink {
  name: string;
  component: ReactNode;
  icon: ReactNode;
}

export const userSideBarlinks: UserSideLink[] = [
  {
    name: "Account Overview",
    component: <AccountDetails />,
    icon: <Icon icon="iconamoon:profile-light" />,
  },
  {
    name: "Orders",
    component: <UserOrders />,
    icon: <TbTruckDelivery size={34} />,
  },
  {
    component: <Wallet />,
    name: "Wallet",
    icon: <Icon icon="bxs:wallet" />,
  },
];
