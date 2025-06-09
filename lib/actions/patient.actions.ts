export const createUser = async (user: CreateUserParams) => {
    //REVIEW - This function is used to create a new user in the system.
    const response = await fetch("/api/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    
    if (!response.ok) {
        throw new Error("Failed to create user");
    }
    
    return response.json();

}