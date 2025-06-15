import React, { useEffect, useState } from "react";
import Schedule from "./Schedule";

const AllSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  // 3.2 define state
  const [search, setSearch] = useState("");

  useEffect(() => {
    // get api
    // this was my get api fetch but commented due to we use this get api with search. Which will dynamically set using query string on 3.4

    // fetch("http://localhost:3000/schedule")
    // 3.4 call the api for dynamically for get and search
    fetch(`http://localhost:3000/schedule?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSchedules(data);
      });
  }, [search]); // 3.5 here search is apply for dependency due to in every type in search, the useEffect will be called.

  const handleDelete = (_id) => {
    console.log(_id);

    fetch(`http://localhost:3000/schedule/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          const remainingSchedules = schedules.filter(
            (schedule) => schedule._id !== _id
          );
          setSchedules(remainingSchedules);
        }
      });
  };
  console.log(search);

  return (
    <div>
      <h1 className="text-center">All Schedule: {schedules.length}</h1>
      <div className="w-[400px] mx-auto mb-4">
        <input
          // 3.3 get the data from the input field
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="search"
          className="input input-bordered w-full"
          required
        />
      </div>
      <div className="w-1/2 mx-auto bg-slate-50">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>serial</th>
                <th>Title</th>
                <th>Day</th>
                <th>Date</th>
                <th>Time</th>
                <th>Auction</th>
              </tr>
            </thead>
            <tbody>
              {schedules.map((schedule, index) => (
                <Schedule
                  key={schedule._id}
                  schedule={schedule}
                  index={index}
                  handleDelete={handleDelete}
                ></Schedule>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllSchedule;
