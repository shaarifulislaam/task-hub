"use client";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "../modal/modal";
import {  useState } from "react";
import { useRouter } from "next/navigation";


const AddTask =  () => {
     const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [taskValue,setTaskValue] = useState("");
 
 
  const handleSUbmit = async (e)=>{
     e.preventDefault();//for handle form reload

   const response = await fetch("http://localhost:5000/tasks", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({task:taskValue}),
   });
   const newData = await response.json();
//    console.log(newData);
   
    setTaskValue(""); //clear the input
    setModalOpen(false);
    router.refresh();
  }


  return (
    <div className="p-3" >
      <button
        onClick={() => setModalOpen(true)}
        className="btn btn-primary w-full text-[18px]"
      >
        Add New Task
        <AiOutlinePlus className="ml-1 text-[#ffffff]" size={20} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSUbmit}>
          <h3 className="font-[500] text-[20px]">Add new task</h3>
          <div className="modal-action">
            <input
              type="text"
              required
              value={taskValue}
              onChange={(e) => setTaskValue(e.target.value)}
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button className="btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTask;