import React from 'react';
// import { auth, currentUser } from "@clerk/nextjs";

export  async function TimeOfDayGreeting()  {
    const date = new Date();
    const utcHours = date.getUTCHours();

    let greeting;

    if (utcHours < 4) {
        greeting = 'You\'re up late!';
    } else if (utcHours < 6) {
        greeting = 'Early Bird!';
    } else if (utcHours < 12) {
        greeting = 'Good morning';
    } else if (utcHours < 14) {
        greeting = 'Time for lunch!';
    } else if (utcHours < 17) {
        greeting = 'Good afternoon';
    } else if (utcHours < 20) {
        greeting = 'Good evening';
    } else if (utcHours < 23) {
        greeting = 'Time to relax!';
    } else {
        greeting = 'You should be sleeping!';
    }

    // const { userId } = auth();
    // if (userId) {
    //     // Query DB for user specific information or display assets only to logged in users
    // }
    // // Get the Backend API User object when you need access to the user's information
    // const user = await currentUser()
    // Use `user` to render user details or create UI elements

    return (
        <div>
            {/*{user?.firstName ? `${greeting}, ${user?.firstName}` : greeting}*/}
            {greeting}
        </div>
    )
}