


import Button from "../../components/reusableComponent/Button";
import { Link } from "react-router-dom";
import Title from "../../components/reusableComponent/Title";
import { useGetUsersQuery } from "../../App/User/UserApi";
import { useEffect, useState } from "react";
import AdminTable from "../../components/dashboardComponent/adminComponents/AdminTable";


const Admin = () => {
  const [displayData,setDisplayData]=useState([])
  const {data:users,isLoading}=useGetUsersQuery();

useEffect(()=>{
  setDisplayData({
    data: users?.data,
    links: users?.meta?.links,
    isLoading,
    lastPage: users?.meta?.last_page,
  })
},[users,setDisplayData,isLoading])



  return <>
      <section className="flex flex-col gap-10">
      <Title title="Admin Management" />
      <div className="flex">
        <Link to="/dashboard/admin/create">
          <Button btn="ADD ADMIN" />
        </Link>
        {/* <SearchBarWrapper /> */}
      </div>

      <AdminTable users={displayData} />
     
    </section>
    </>;
};

export default Admin;
