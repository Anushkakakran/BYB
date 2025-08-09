import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function Calender({ shift, range, onDateChange, onShiftChange, onContinue }) {
  const isFormValid = range.from && range.to && shift;

  return (
    <div>
      <div className="max-w-3xl mx-auto mb-10 p-6 bg-white rounded-2xl shadow-md">
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
              caption: { fontSize: "0.85rem" },
              head_cell: { padding: "0.25rem" },
              day: { padding: "0.25rem", width: "1.8rem", height: "1.8rem" },
              day_selected: { width: "1.8rem", height: "1.8rem" },
            }}
          />
        </div>

        {/* Shift Selection */}
        <div className="flex justify-center gap-4 mb-6">
          {["Day", "Night"].map((option) => (
            <button
              key={option}
              onClick={() => onShiftChange(option)}
              className={`px-4 py-2 rounded-md border transition-transform duration-300 ${
                shift === option
                  ? "bg-blue-600 text-white scale-105 shadow-lg"
                  : "bg-gray-100 hover:bg-black hover:text-white hover:scale-105"
              }`}
            >
              {option} Shift
            </button>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-4 text-center text-gray-700">
          {range.from && (
            <p>
              Selected: {format(range.from, "PPP")} →{" "}
              {range.to ? format(range.to, "PPP") : "..."} | Shift:{" "}
              {shift || "Not selected"}
            </p>
          )}
        </div>

        {/* Continue Button */}
        <div className="mt-6 flex justify-center">
          <button
            disabled={!isFormValid}
            onClick={onContinue}
            className={`px-6 py-2 rounded-xl transition-transform duration-300 ${
              isFormValid
                ? "bg-black text-white hover:bg-gray-900 hover:scale-105 cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calender;
