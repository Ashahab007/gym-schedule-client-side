import React, { useState } from "react";
import { FaFile, FaTrash } from "react-icons/fa";
import { MdDone, MdOutlineDoneAll } from "react-icons/md";
import { Link, useLoaderData } from "react-router";

const Schedule = ({ schedule, index, handleDelete }) => {
  console.log(schedule);

  const { _id, title, hour, day, date } = schedule;
  // 2.0 my requirement is make completed button with double tick function upon click

  // const [isCompleted, setIsCompleted] = useState(schedule);

  // 2.6 create the handleCompleted function and send the data to db using patch method
  const handleComplete = (id) => {
    fetch(`http://localhost:3000/schedule/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount) {
          /*  const remainingComplete = schedule.filter((sche) => sche.id !== _id);
          setIsCompleted(remainingComplete); */
        }
      });
  };

  return (
    <>
      <tr>
        <td>{index + 1} </td>
        <td>{title}</td>
        <td>{day}</td>
        <td>{date}</td>
        <td>{hour}</td>
        <td>
          <div className="flex gap-4">
            <button
              onClick={() => handleDelete(_id)}
              className="bg-pink-500 px-4 py-2 rounded text-white"
            >
              <FaTrash className=""></FaTrash>
            </button>
            <button className="bg-pink-500 px-4 py-2 rounded text-white">
              {/* 1.4 dynamically set the id */}
              <Link to={`/updateschedule/${_id}`}>
                <FaFile />
              </Link>
            </button>
            <button
              // 2.4 get the id upon click
              onClick={() => handleComplete(_id)}
              className="bg-pink-500 px-4 py-2 rounded text-white"
            >
              {/* 2.5 show the tick conditionally upon click */}
              {schedule?.isCompleted ? <MdOutlineDoneAll /> : <MdDone />}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Schedule;
