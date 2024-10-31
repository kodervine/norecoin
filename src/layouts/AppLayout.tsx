import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="flex-1">
      {/* <Navbar /> */}
      <main className="bg-gray-50 min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
