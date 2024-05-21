import { NatNodeDataResponse, NatNodeListResponse, NodeDataResponse, NodeListResponse, NodeSessionResponse, QueryParams } from "../types";
import { AxiosInstance } from "axios";
export declare class Node {
    private axiosInstance;
    constructor(axiosInstance: AxiosInstance);
    /**
     * Get a list of node
     */
    getNodes(): Promise<NodeListResponse>;
    /**
     * Get a list of node with query params
     * @param query
     */
    getNodes(query: QueryParams): Promise<NodeListResponse>;
    /**
     * Get a specified node
     * @param id
     */
    getNode(id: number): Promise<NodeDataResponse>;
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
