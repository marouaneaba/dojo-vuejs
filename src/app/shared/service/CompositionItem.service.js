import config from "@/config";
import TokenService from "@/app/shared/service/Token.service"
class CompositionItemService {

    fetchCompositionItems() {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${TokenService.getToken()}`
        };
        return fetch(config.endpoints.v1.compositionItems, { headers });
    }

    fetchCompositionItemsOver(compositionItem) {
        return compositionItem.filter(compositionItem => compositionItem.quantity > 0);
    }

    deleteCompositionItem(id) {
        const headers = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TokenService.getToken()}`
            }
        };

        return fetch(`${config.endpoints.v1.compositionItems}/${id}`, headers);
    }

    updateCompositionItem(id, compositionItem) {
        const request = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(compositionItem)
        };

        return fetch(`${config.endpoints.v1.compositionItems}/${id}`, request);
    }

    createCompositionItem(compositionItem) {
        const request = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${TokenService.getToken()}`
            },
            body: JSON.stringify(compositionItem)
        };

        return fetch(config.endpoints.v1.compositionItems, request);
    }
}

export default new CompositionItemService();