import { useState, useEffect, useReducer, useContext } from "react";
import toastError from "../../errors/toastError";

import api from "../../services/api";
//import { socketConnection } from "../../services/socket";
import { AuthContext } from "../../context/Auth/AuthContext";

const reducer = (state, action) => {
  if (action.type === "LOAD_WHATSAPPS") {
    const whatsApps = action.payload;

    return [...whatsApps];
  }

  if (action.type === "UPDATE_WHATSAPPS") {
    const whatsApp = action.payload;
    const whatsAppIndex = state.findIndex((s) => s.id === whatsApp.id);

    if (whatsAppIndex !== -1) {
      state[whatsAppIndex] = whatsApp;
      return [...state];
    } else {
      return [whatsApp, ...state];
    }
  }

  if (action.type === "UPDATE_SESSION") {
    const whatsApp = action.payload;
    const whatsAppIndex = state.findIndex((s) => s.id === whatsApp.id);

    if (whatsAppIndex !== -1) {
      state[whatsAppIndex].status = whatsApp.status;
      state[whatsAppIndex].updatedAt = whatsApp.updatedAt;
      state[whatsAppIndex].qrcode = whatsApp.qrcode;
      state[whatsAppIndex].retries = whatsApp.retries;
      state[whatsAppIndex].number = whatsApp.number;
      state[whatsAppIndex].perfilName = whatsApp.perfilName;
      return [...state];
    } else {
      return [...state];
    }
  }

  if (action.type === "DELETE_WHATSAPPS") {
    const whatsAppId = action.payload;

    const whatsAppIndex = state.findIndex((s) => s.id === whatsAppId);
    if (whatsAppIndex !== -1) {
      state.splice(whatsAppIndex, 1);
    }
    return [...state];
  }

  if (action.type === "RESET") {
    return [];
  }
};

const useWhatsApps = () => {
  const [whatsApps, dispatch] = useReducer(reducer, []);
  const [loading, setLoading] = useState(true);
  const { user, socket } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    const fetchSession = async () => {
      try {
        const { data } = await api.get("/whatsapp/?session=0");
        dispatch({ type: "LOAD_WHATSAPPS", payload: data });
        setLoading(false);
      } catch (err) {
        setLoading(false);
        toastError(err);
      }
    };
    fetchSession();
  }, []);

  /*useEffect(() => {
    const companyId = localStorage.getItem("companyId");
    const userId = localStorage.getItem("userId");
    const socket = socketConnection({ companyId, userId });

    socket.on(`company-${companyId}-whatsapp`, (data) => {
      if (data.action === "update") {
        dispatch({ type: "UPDATE_WHATSAPPS", payload: data.whatsapp });
      }
    });

    socket.on(`company-${companyId}-whatsapp`, (data) => {
      if (data.action === "delete") {
        dispatch({ type: "DELETE_WHATSAPPS", payload: data.whatsappId });
      }
    });

    socket.on(`company-${companyId}-whatsappSession`, (data) => {
      if (data.action === "update") {
        dispatch({ type: "UPDATE_SESSION", payload: data.session });
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);*/

  useEffect(() => {
    if (user.companyId) {

      const companyId = user.companyId;

      const onCompanyWhatsapp = (data) => {
        if (data.action === "update") {
          dispatch({ type: "UPDATE_WHATSAPPS", payload: data.whatsapp });
        }
        if (data.action === "delete") {
          dispatch({ type: "DELETE_WHATSAPPS", payload: data.whatsappId });
        }
      }

      const onCompanyWhatsappSession = (data) => {
        if (data.action === "update") {
          dispatch({ type: "UPDATE_SESSION", payload: data.session });
        }
      }

      socket.on(`company-${companyId}-whatsapp`, onCompanyWhatsapp);
      socket.on(`company-${companyId}-whatsappSession`, onCompanyWhatsappSession);

      return () => {
        socket.off(`company-${companyId}-whatsapp`, onCompanyWhatsapp);
        socket.off(`company-${companyId}-whatsappSession`, onCompanyWhatsappSession);
      };
    }
  }, [socket])


  return { whatsApps, loading };
};

export default useWhatsApps;
