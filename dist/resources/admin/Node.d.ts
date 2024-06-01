import type { AxiosInstance } from "axios";
import type { BasicResponse, NodeDataListResponse, NodeDataResponse, PendingNodeData, QueryParams } from "../../types";
export declare class AdminNode {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    getNodes(query?: QueryParams): Promise<NodeDataListResponse>;
    getNode(id: number): Promise<NodeDataResponse>;
    add(node: PendingNodeData): Promise<BasicResponse>;
    modify(id: number, node: PendingNodeData): Promise<BasicResponse>;
    delete(id: number): Promise<BasicResponse>;
}
