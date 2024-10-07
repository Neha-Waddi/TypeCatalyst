"use client";
import { useSession } from "next-auth/react";

const HomePage = () => {
    const { data: session, status } = useSession();
    console.log("Session:", session); // Log session for debugging

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "unauthenticated") {
        return <p>Please log in to see this page.</p>;
    }

    return (
        <div>
            <h1>Hi, {session.user.name || "Guest"}!</h1> {/* Use username from the session */}
        </div>
    );
};

export default HomePage;
