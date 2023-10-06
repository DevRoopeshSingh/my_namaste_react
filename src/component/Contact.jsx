import React from "react";

const Contact = () => {
  return (
    <div className="contact font-bold text-3xl p-4 m-4">
      <h1>Contact Us page</h1>
      <form>
      <input type="text" className="1px solid border-spacing-2 border solid black p-2" placeholder="Name"/>
      <input type="text" className="1px solid border-spacing-2 border solid black p-2" placeholder="Message"/>
        <div>
        <button className="p-2  rounded-lg bg-slate-400">Submit</button>
        </div>
      </form>
     
    </div>
  );
};

export default Contact;
