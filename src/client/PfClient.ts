import {Auth} from "../resources";

export class PfClient {
  private readonly endpoint: string
  private readonly webSocket: string
  public auth: Auth

  constructor(endpoint: string, webSocket: string) {
    this.endpoint = endpoint
    this.webSocket = webSocket
    this.auth = new Auth(this.endpoint, this.webSocket)
  }
}
