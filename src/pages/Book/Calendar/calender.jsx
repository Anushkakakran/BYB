import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Button from "../../../Components/Button.jsx"; // adjust path if needed

function Calender({ shift, range, onDateChange, onShiftChange, onContinue }) {
  const isFormValid = range.from && range.to && shift;

  return (
    <div className="max-w-3xl mx-auto mb-10">
      {/* Main Card */}
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Select Booking Dates & Shift
        </h2>

        {/* Date Range Picker */}
        <div className="flex justify-center mb-6">
          <DayPicker
            mode="range"
            selected={range}
            onSelect={onDateChange}
            fromDate={new Date()}
            className="text-sm"
            styles={{
              caption: { fontSize: "0.9rem", fontWeight: "600" },
              head_cell: { padding: "0.3rem" },
              day: {
                padding: "0.35rem",
                width: "2rem",
                height: "2rem",
                borderRadius: "6px",
              },
              day_selected: {
                backgroundColor: "#000",
                color: "#fff",
                borderRadius: "6px",
              },
            }}
          />
        </div>

        {/* Shift Selection */}
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          {["Day", "Night"].map((option) => (
            <Button
              key={option}
              className="w-40 px-6 py-3 text-base rounded-md"
              text={`${option} Shift`}
              onclick={() => onShiftChange(option)}
              disabled={false}
            />
          ))}
        </div>

        {/* Summary */}
        <div className="mt-4 text-center text-gray-700 text-sm md:text-base">
          {range.from && (
            <p>
              Selected: {format(range.from, "PPP")} →{" "}
              {range.to ? format(range.to, "PPP") : "..."} | Shift:{" "}
              <span className="font-semibold">
                {shift || "Not selected"}
              </span>
            </p>
          )}
        </div>

        {/* Continue Button */}
        <div className="mt-6 flex justify-center">
          <Button
            text="Continue"
            className="px-6 w-56 py-3 text-base rounded-md"
            onclick={onContinue}
            disabled={!isFormValid}
          />
        </div>
      </div>
    </div>
  );
}

export default Calender;
