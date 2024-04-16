import React from "react";

const Warning = () => {
  return (
    <div className="flex flex-col justify-center items-center border-opacity-20 border rounded-lg border-secondary w-[488px] py-12 px-8">
        <img src="/public/images/Vector.png" alt="Warning Vector" className="object-cover mb-7" />
        <p className="text-secondary font-bold">Are you sure you want to create an account?</p>
        <div className="flex flex-row w-full justify-center mt-4">
            <button className="bg-secondary py-3 mx-3 w-full rounded-lg text-primary font-bold">Yes</button>
            <button className="border-secondary border-opacity-20 rounded-lg border py-3 w-full text-secondary font-bold">No</button>
        </div>
    </div>
  );
};

export default Warning;
