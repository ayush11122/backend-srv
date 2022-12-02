import React from 'react';
import user from '../Images/user.png';

const ContactCard = (props) =>{
    return(
           <div className="container m-5 ">
               <div className="grid grid-cols-2 ">
                <div className="flex">
                    <div><img src={user} className="w-10 h-10 mr-2"></img></div>
                    <div>
                        <div className="font-semibold "> {props.item.name} </div>
                        <div className=""> {props.item.email} </div>
                    </div>
                </div>
                <div className="text-right text-2xl pr-3 pt-1"><i class="zmdi zmdi-delete "></i></div>
               </div>
               <hr class="my-6 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>            
            </div>
    )
}

export default ContactCard;