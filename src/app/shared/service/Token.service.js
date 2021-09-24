import config from "@/config";

class TokenService {
    getToken() {
        return localStorage.getItem("token");
    }

    saveToken(token) {
        localStorage.setItem("token", token);
    }

    fetchToken(profile) {

        const requestJsonToken = JSON.stringify({
                claims: {"location": 'FR'},
                scopes: [profile]
            }
        );

        const request = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestJsonToken)
        };

        return fetch('/token', request);
    }
}

export default new TokenService();