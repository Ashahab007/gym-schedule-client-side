import React from "react";
import { FaFile, FaTrash } from "react-icons/fa";
import { MdDone, MdOutlineDoneAll } from "react-icons/md";
import { Link, useLoaderData } from "react-router";

const Schedule = ({ schedule, index, handleDelete }) => {
  //   console.log(schedule);

  const { _id, title, hour, day, date } = schedule;
  const isCompleted = true;

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
            <button className="bg-pink-500 px-4 py-2 rounded text-white">
              {isCompleted ? <MdOutlineDoneAll /> : <MdDone />}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Schedule;
