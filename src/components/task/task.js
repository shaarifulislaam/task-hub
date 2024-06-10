"use client";
import { FaRegEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import Modal from "../modal/modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Task = ({ task }) => {
    const router = useRouter();
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [taskEdit,setTaskEdit] = useState(task?.task)
//   console.log(task);
  
//edit
  const handleEditSubmit = async (e) => {
       e.preventDefault(); //for handle form reload

       const response = await fetch(`http://localhost:5000/tasks/${task?.id}`, {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ task: taskEdit }),
       });
       const updated = await response.json();
       //    console.log(newData);

       setTaskEdit(""); //clear the input
       setOpenEditModal(false);
       router.refresh();//refresh after submit
  };

  //delete
  const handleDelete = async (id)=>{
     await fetch(`http://localhost:5000/tasks/${id}`, {
       method: "DELETE" });
    setOpenDeleteModal(false);
    router.refresh();
  }
//Complete 
const handleComplete = () =>{
    // console.log('Some text here');
    
}
 

  return (
    <tr key={task.id}>
      <td className="w-full">{task?.task}</td>
      <td className="flex gap-6 ">
        <FaRegEdit
          onClick={() => {
            setOpenEditModal(true);
          }}
          cursor="pointer"
          className="text-blue-500"
          size={25}
        />
        <Modal modalOpen={openEditModal} setModalOpen={setOpenEditModal}>
          <form onSubmit={handleEditSubmit}>
            <h3 className="font-[500] text-[20px]">Edit task</h3>
            <div className="modal-action">
              <input
                type="text"
                required
                value={taskEdit}
                onChange={(e) => setTaskEdit(e.target.value)}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FaTrash
          onClick={() => setOpenDeleteModal(true)}
          cursor="pointer"
          className="text-red-500"
          size={25}
        />

        <Modal modalOpen={openDeleteModal} setModalOpen={setOpenDeleteModal}>
          <h3 className="font-[500] text-[20px]">
            Are you sure? you want to delete this?
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDelete(task?.id)} className="btn">
              Yes
            </button>
          </div>
        </Modal>
        <IoMdDoneAll onClick={handleComplete} cursor="pointer" size={25} />
      </td>
    </tr>
  );
};

export default Task;
