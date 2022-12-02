import React from 'react';

const AddContact = () =>{
 
    return(
        <div className="container mx-auto">
                <h2 className="text-center text-xl py-4 font-medium">Add Contact</h2>
                <form 
                className="text-justify px-4 py-3"
                >
                    <div className="pt-1">
                        <label className="px-1">Name</label>
                         <input 
                        className="border-2 rounded"  
                        type="text" 
                        placeholder="Name" 
                        />
                    </div>
                    <div className="py-4">
                        <label className="px-1">Email</label>
                        <input 
                        className="border-2 rounded"
                        type="text" 
                        placeholder="Email" 
                        />
                    </div>
                    <button
                    className="bg-blue-700 py-1 px-4 rounded hover:bg-blue-500"
                    >
                    Add</button>
                </form>
        </div>

    );
}

export default AddContact;