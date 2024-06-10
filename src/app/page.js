
import WorkSpaceTable from "@/components/workSpaceTable/workSpaceTable";
import WorkSpaceTitle from "@/components/workSpaceTitle/workSpaceTitle";

const HomePage = async () => {

  const res = await fetch("http://localhost:5000/workplaces", {
    cache: "no-store",
  });
  const workplaces = await res.json();
  //  console.log(workplaces);

  return (
    <main className="max-w-[70%] w-100 mx-auto ">
      <div className="w-100 max-w-[80%] mx-auto py-3">
        <h1 className="text-center text-4xl py-4 font-[700]">
          Welcome to Codixel TaskHub
        </h1>
        <WorkSpaceTitle />
        <WorkSpaceTable workplaces={workplaces} />
      </div>
     
    </main>
  );
};

export default HomePage;