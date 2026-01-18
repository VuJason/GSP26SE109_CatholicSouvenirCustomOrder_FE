const API_URL = 'http://localhost:3000';

export const authService = {
    async login(email, password) {
        try {
            // Fetch all users from json-server
            const response = await fetch(`${API_URL}/users`);

            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }

            const users = await response.json();

            // Find user with matching credentials
            const user = users.find(
                u => u.email === email && u.password === password
            );

            if (!user) {
                throw new Error('Invalid email or password');
            }

            // Don't return password to client
            const { password: _, ...userWithoutPassword } = user;

            return {
                success: true,
                user: userWithoutPassword
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    },

    async getUserByEmail(email) {
        try {
            const response = await fetch(`${API_URL}/users?email=${email}`);

            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }

            const users = await response.json();
            return users[0] || null;
        } catch (error) {
            console.error('Error fetching user:', error);
            return null;
        }
    }
};

export default authService;
