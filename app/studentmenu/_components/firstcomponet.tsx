import { auth, signOut } from "@/auth";

const StudentMenu = async () => {

    const session = await auth();


    return ( 
        <div>
            <div>
            Welcome Great VMS Student
            </div>
            <div>
            {JSON.stringify(session)}
           <form action={async () => { 
            "use server";

            await signOut();
           }}>
            <button type="submit">
               Sign Out
            </button>
           </form>
            </div>
            
        </div>
     );
}
 
export default StudentMenu;