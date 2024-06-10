"use client";
import { useState } from "react";
import Modal from "../modal/modal";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { showCurrentDate } from "@/utils/getCurrentDate";

const WorkSpaceTitle = () => {
  const router = useRouter();
  const [workSpaceModal, setWorkSpaceModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  // console.log(selectedEmail);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  //  console.log(query);
  const users = [
    { id: "1", email: "sharifulmamun7@gmail.com" },
    { id: "11", email: "foysal@gmail.com" },
    { id: "13", email: "sad@gmail.com" },
    { id: "134", email: "zahid@gmail.com" },
    { id: "191", email: "boney@gmail.com" },
    { id: "1101", email: "rafy@gmail.com" },
    { id: "1031", email: "moon@gmail.com" },
  ];

  //check exist user in search
  let existingUser = users.filter((user) =>
    user.email.toLowerCase().includes(userEmail)
  );

  //handle email add
  const handleEmailAdd = (item) => {
    // console.log(item);
    setUserEmail("");

    const matchData = selectedEmail?.find((uEmail) => uEmail == item);
    // console.log("click", matchData);
    if (!matchData) {
      const result = [...selectedEmail, item];
      setSelectedEmail(result);
    } else {
      existingUser = [];
    }
  };

  // console.log(selectedEmail);

  //data submit
  const onSubmit = async (data) => {
    const title = data.title;
    const email = selectedEmail;
    const date = showCurrentDate();
    // console.log(date);
    
    
    // console.log("submitting", "title:", data.title, "members:", selectedEmail)
    const response = await fetch("http://localhost:5000/workplaces", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, email ,date}),
    });
    const newData = await response.json();
     console.log(newData);

    router.refresh();
    reset();
    setWorkSpaceModal(false);
    setSelectedEmail([])
    
  };

  const filterUser = selectedEmail.find((usr) => usr);
  // console.log(filterUser);

  const handleEmailRemove = (email) => {
    // console.log(email);
    const removeFilter = selectedEmail.filter((fl) => fl !== email);
    // console.log(removeFilter);
    setSelectedEmail(removeFilter);
  };

  return (
    <div className="flex justify-between items-center  bg-[#faf7f7] p-3">
      <div>
        <h3 className="text-[20px] font-[600]">Your Workspace</h3>
      </div>
      <div>
        <button onClick={() => setWorkSpaceModal(true)} className="btn">
          Create Workspace
        </button>
        <Modal modalOpen={workSpaceModal} setModalOpen={setWorkSpaceModal}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-[500] text-[20px]">Create Workspace</h3>
            <div className="">
              <label className="mb-2" htmlFor="text">
                Title
              </label>
              <input
                type="text"
                id="text"
                placeholder="Title"
                className="input input-bordered w-full mb-2"
                {...register("title", { required: true })}
              />
              <label className="py-3" htmlFor="text">
                Add Members
              </label>
              <input
                type="text"
                id="member"
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              {userEmail && (
                <div>
                  <ul className="list">
                    {existingUser.length > 0 ? (
                      existingUser.map((item) => (
                        <li
                          className="cursor-pointer"
                          onClick={() => handleEmailAdd(item.email)}
                          key={item.id}
                        >
                          {item.email}
                        </li>
                      ))
                    ) : (
                      <li className="text-red-500">No such data!!</li>
                    )}
                  </ul>
                </div>
              )}
              {selectedEmail.length > 0 &&
                selectedEmail.map((email, index) => (
                  <li className="text-green-500 list-none" key={index}>
                    {email}
                    <span
                      className="text-red-500 cursor-pointer"
                      onClick={() => handleEmailRemove(email)}
                    >
                      X
                    </span>
                  </li>
                ))}
              <button className="btn btn-primary my-2 " type="submit">
                Submit
              </button>
            </div>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default WorkSpaceTitle;
