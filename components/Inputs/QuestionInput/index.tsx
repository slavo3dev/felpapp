import { Formik } from "formik";
import { useState } from "react";
import { sendContactData } from "@lib/utils";
import { useEffect } from 'react'
// import Images from 'next/image'
import { ContactNotify } from "@components"

interface NotificationData {
   status: string,
   title: string,
   message: string
}

let notificationData: NotificationData;

export const QuestionInput = () =>
{
    const [reqStatus, setReqStatus] = useState(""); // "Pending", "Success", "error"
    const [ reqErrorMessage, setReqErrorMessage ] = useState( "" );
   
    useEffect(() => {
		if (reqStatus === "success" || reqStatus === "error") {
			const timer = setTimeout(() => {
				setReqStatus("");
				setReqErrorMessage("");
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [reqStatus, reqErrorMessage]);


    async function sendMessageHandle(values: any) {

		setReqStatus("pending");

		try {
			await sendContactData(values);
			setReqStatus("success");
		} catch (error: any) {
			setReqStatus("error");
			setReqErrorMessage(error.message);
			console.error("Something Went Wrong: ", error.message);
		}
    }
    
    if (reqStatus === "pending") {
		notificationData = {
			status: "pending",
			title: "Sending message...",
			message:
        "We are submiting your request , please be patient for couple of seconds...",
		};
	}

	if (reqStatus === "success") {
		notificationData = {
			status: "success",
			title: "SUCCESS",
			message:
        "Message sent Successfully, we will get back to you ASAP!!",
		};
	}

	if (reqStatus === "error") {
		notificationData = {
			status: "error",
			title: "Something Went Wrong",
			message: `Please re-fresh your page and try againg. Thank You\n${reqErrorMessage}`,
		};
	}
    
    return (
        <>
                <div className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
                        <div className="flex flex-col">
                            <div>
                                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
                                <div className="text-gray-700 mt-8">Hate forms? Send us an <span className="underline">email</span> instead.
                            </div>
                            </div>
                            <div className="mt-8 text-center">
                             {/* <Images src="/images/ama_main.svg" alt="felp image question" layout="fill" /> */}
                            </div>
                        </div>
                        <form className="">
                            <div>
                                <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
                                <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="" />
                            </div>
                            <div>
                                <span className="uppercase text-sm text-gray-600 font-bold">Category</span>
                                <select className="w-full bg-gray-300 text-gray-900 mt-2 p-3 focus:outline-none focus:shadow-outline block appearance-none  border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:shadow-outline" placeholder="" >
                                    <option>Education</option>
                                    <option>Career Change</option>
                                    <option>Events</option>
                                    <option>Advice</option>
                                </select>
                            </div>
                            <div className="mt-8">
                                <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                                <input type="email" className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" />
                            </div>
                            <div className="mt-8">
                                <span className="uppercase text-sm text-gray-600 font-bold">Question</span>
                                <textarea
                                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                            </div>
                            <div className="mt-8">
                                <button type="submit" className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:translate-x-3">
                                Send Message
                                </button>
                            </div>
                    </form>
                </div> 
            {notificationData && (<ContactNotify notification={notificationData} />)}
       </>
    )
};
