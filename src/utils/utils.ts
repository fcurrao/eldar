
export const generateToken = (username: string, role: string): string => {
    const header = {
        alg: "none",  
        typ: "JWT"
    };

    const payload = {
        username,
        role,
        exp: Math.floor(Date.now() / 1000) + 60 * 60
    };

    const encodedHeader = btoa(JSON.stringify(header));
    const encodedPayload = btoa(JSON.stringify(payload));

    return `${encodedHeader}.${encodedPayload}.`;
};
