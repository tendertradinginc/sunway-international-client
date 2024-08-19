import AdminLayout from "./layout/adminLayout";

export const metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default function adminDashboardLayout({ children }) {
  return (
    <div>
      <AdminLayout>{children}</AdminLayout>
    </div>
  );
}
