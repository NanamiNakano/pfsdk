import type { AxiosInstance } from "axios";
import type { ForwardNodeDataResponse, ForwardNodeListResponse, NatNodeDataResponse, NatNodeListResponse, NodeSessionResponse, QueryParams } from "../types";
export declare class Node {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Get a list of node
     */
    getForwardNodes(): Promise<ForwardNodeListResponse>;
    /**
     * Get a list of node with query params
     * @param query
     */
    getForwardNodes(query: QueryParams): Promise<ForwardNodeListResponse>;
    /**
     * Get a specified node
     * @param id
     */
    getForwardNode(id: number): Promise<ForwardNodeDataResponse>;
    /**
     * Get a list of node sessions
     */
    getNodeSessions(): Promise<NodeSessionResponse>;
    /**
     * Get a list of nat nodes
     */
    getNatNodes(): Promise<NatNodeListResponse>;
    /**
     * Get a list of nat nodes with query params
     * @param query
     */
    getNatNodes(query: QueryParams): Promise<NatNodeListResponse>;
    /**
     * Get a specified nat node
     * @param id
     */
    getNatNode(id: number): Promise<NatNodeDataResponse>;
}
