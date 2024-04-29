import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="px-20 p-5 flex justify-center">
    <div className="px-20">
    <img
          className="rounded-full"
          src={data.avatar_url}
          alt="Git picture"
          width={250}
        />
    </div>
      <div className="flex flex-col rounded-xl border-2 border-gray-700 text-xl items-center justify-center p-5 px-10">
        <p>🙋🏻 Github Name : {data.name}</p>
        <p className="mt-2">📍 Location : {data.location}</p>
        <p className="text-sm mt-10"> ℹ️ GitHub Bio : {data.bio}</p>
        
       
        {/* Github URL : {data.html_url} */}
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/kunal-tajne");
  return response.json();
};
