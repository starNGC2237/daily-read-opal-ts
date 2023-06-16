import request from "@/utils/requset";


export function gets() {
    return request.get("/60s");
}
