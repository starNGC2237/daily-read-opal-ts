import request from "@/utils/requset";


export function getSentence() {
    return request.get("/sentence");
}
