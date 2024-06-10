"use client";
import Image from "next/image";
import ProfileImg from "@/assets/images.jpeg";
const WorkSpaceTable = ({ workplaces }) => {
  // console.log(workplaces)
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr >
            <th>Title</th>
            <th className="text-center">Created Time</th>
            <th className="text-center">Member</th>
          </tr>
        </thead>
        <tbody>
          {workplaces.map((workplace) => (
            <tr key={workplace.id}>
              <td>{workplace.title}</td>
              <td className="text-center">{workplace.date}</td>
              <td className="text-center">
                <div className="flex justify-center items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src={ProfileImg} alt="profile" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">
                      {workplace?.email?.map((ur) => (
                        <li key={ur}>{ur}</li>
                      ))}
                    </div>
                  
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkSpaceTable;