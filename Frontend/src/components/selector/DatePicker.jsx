import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../../Utils/Datepickerutils/Calendar";
import cn from "../../Utils/Datepickerutils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const DatePicker = () => {
	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	return (
		<div className="flex sm:divide-x justify-center items-center sm:flex-row flex-col bg-white p-6 rounded-2xl drop-shadow-2xl z-10">
			<div>
				<div className="flex justify-between items-center pb-6">
					<h1 className="select-none font-poppins font-semibold text-color-blue">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex justify-between items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<h1
							className=" cursor-pointer hover:scale-105 transition-all font-poppins font-semibold text-color-blue "
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all "
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 font-poppins font-bold text-color-blue">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center py-2 grid place-content-center select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="text-center grid place-content-center text-sm border-t font-poppins text-color-blue"
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-gray-400",
											today
												? "bg-color-lightblue text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-color-blue text-white"
												: "",
											"h-8 w-8 rounded-full grid place-content-center hover:bg-color-blue hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
	);
}

export default DatePicker