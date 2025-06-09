export const createUser = async (user: CreateUserParams) => {
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