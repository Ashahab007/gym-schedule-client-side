import React, { useState } from "react";
import "react-clock/dist/Clock.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router";

const formatTime12Hour = (date) => {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${hours}:${minutes}:${seconds} ${ampm}`;
};

const UpdateSchedule = () => {
  //   1.5 get the data
  const data = useLoaderData();
  console.log(data);

  // 1.6 as all the input and DatePicker field will be updated so we use useState for every field data changed
  const [title, setTitle] = useState(data?.title);
  console.log(title);

  const [date, setDate] = useState(data?.date);
  console.log(date);

  const [day, setDay] = useState(data?.day);
  console.log(day);

  const [hour, setHour] = useState(data?.hour);
  console.log(hour);

  const handleUpdateSchedule = () => {};

  return (
    <div>
      <div className="bg-[#F4F3F0] lg:p-24">
        <h2 className="text-3xl text-center font-bold">Update Gym Schedule</h2>
        <form onSubmit={handleUpdateSchedule}>
          <div className="flex gap-6 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Title</span>
              </label>
              <input
                type="text"
                name="Title"
                className="input input-bordered"
                // 1.7.1 use value
                value={title}
                // 1.7.2 use onChange
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-control lg:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Date</span>
              </label>
              <DatePicker
                className="input input-bordered w-full"
                // 1.7.3 as it's a DatePicker so we cannot use e.target instead we directly apply state here and change the date format to our desired format.
                value={date}
                // 1.7.4
                onChange={(date) => setDate(date.toLocaleDateString("en-CA"))}
              />
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Day</span>
              </label>

              <select
                className="input input-bordered "
                name="day"
                id="day"
                // 1.7.5
                value={day}
                // 1.7.6 as day is not a third party package
                onChange={(e) => setDay(e.target.value)}
              >
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
              </select>
            </div>
            <div className="form-control lg:w-1/2 mt-6 md:mt-0">
              <label className="label font-bold">
                <span className="label-text">Time</span>
              </label>

              <DatePicker
                className="input input-bordered w-full"
                readOnly
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                // 1.7.7
                value={hour}
                // 1.7.8 it's a third party package
                onChange={(date) => setHour(date)}
              />
            </div>
          </div>

          {/* End of Labels */}
          <input
            type="submit"
            value="Update Schedule"
            className="btn w-full bg-pink-500 text-white mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateSchedule;
