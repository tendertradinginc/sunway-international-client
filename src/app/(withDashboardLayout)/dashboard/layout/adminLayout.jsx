import SideNavbar from "../../components/sidebar/SideNavbar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex">
      <SideNavbar></SideNavbar>
      {children}
    </div>
  );
}
