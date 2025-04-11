import openSocket from "socket.io-client";
import { isObject } from "lodash";
import SocketWorker from "./SocketWorker"

export function socketConnection(params) {
  let userId = "";
  let companyId = "";
  //console.log("params", params);

  if (!params?.user?.id || !params?.user?.companyId) {
    console.warn("❌ No se conecta: falta userId o companyId en params");
    return null;
  }
  
  if (isObject(params)){
    companyId = params?.user?.companyId
    userId = params?.user?.id
  }
 
  return SocketWorker(companyId,userId)
}