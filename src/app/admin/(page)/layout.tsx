import Sidebar from "@/components/sidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-full bg-[#2a3f54] px-2.5 py-3 text-white w-[180px] md:w-[200px] lg:w-[230px] xl:[250px] ">
          <Sidebar />
        </div>
        <div className="max-h-[100vh] w-full overflow-scroll p-6">
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
