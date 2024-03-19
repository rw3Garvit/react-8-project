import React, { useEffect, useState } from "react";
import Form from "../body/Form";
import Table from "../body/Table";
import { get_data } from "../../api/api";
import { base_url, get_users } from "../../constant";

const Users = () => {
  const [data, setdata] = useState([]);

  let get_user = async () => {
    let res = await get_data(base_url, get_users);
    console.log(res);
    setdata(res.data);
  };

  useEffect(() => {
    get_user();
  }, []);

  return (
    <div className="row">
      <div className="col-md-8">
        <Table data={data} />
      </div>
      <div className="col-md-4">
        <Form />
      </div>
    </div>
  );
};

export default Users;
