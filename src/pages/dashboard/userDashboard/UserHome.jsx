import useAuth from "../../../hooks/useAuth";


const UserHome = () => {

    const {user} =useAuth()
    return (
        <div>
           <h2 className="text-4xl uppercase">
            <span>Hi, welcome </span>
            {
                user?.displayName ? user.displayName :'Back'
            }
           </h2>
             
        </div>
    );
};

export default UserHome;