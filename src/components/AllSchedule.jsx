import React, { useEffect, useState } from "react";
import Schedule from "./Schedule";

const AllSchedule = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/schedule")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSchedules(data);
      });
  }, []);

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

  return (
    <div>
      <h1 className="text-center">All Schedule: {schedules.length}</h1>
      <div className="w-[400px] mx-auto mb-4">
        <input
          // onChange={(e) => setSearch(e.target.value)}
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
