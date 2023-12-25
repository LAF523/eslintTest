import { Outlet } from 'react-router-dom';

const Page1 = () => {
  return (
    <div>
      <h1>
        Page 1
        <Outlet />
      </h1>
    </div>
  );
};
export default Page1;
