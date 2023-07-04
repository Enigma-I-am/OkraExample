import { Okra } from "okra-react-native-official";

let okraOptions = {
  okraOptions: {
    callback_url: "core-flow",
    clientName: "client",
    color: "#953ab7",
    connectMessage: "Which account do you want to connect with?",
    currency: "NGN",
    env: "production-sandbox", // for sandbox use production-sandbox
    filters: {
      banks: ["access-bank", "guaranty-trust-bank"],
      industry_type: "all",
    },
    isCorporate: false,
    key: "",
    token: "",
    limit: 24,
    logo: "https://cdn.okra.ng/images/icon.svg",
    products: ["auth", "balance", "identity", "transactions"],
    widget_failed: "",
    widget_success: "Your account was successfully linked to Okra, Inc",
  },
  onError: (error) => {
    console.log(error);
  },
  onSuccess: (data) => {
    console.log(data);
  },
  onClose: () => {
    console.log("on close");
  },
  onBeforeClose: () => {
    console.log("on before close");
  },
};

export function OkraOptionsScreen() {
  return Okra.buildWithOptions(okraOptions);
}
