import { Okra } from "okra-react-native-official";

let okraUrl = {
  shortUrl: "",
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

export function OkraShortUrlScreen() {
  return Okra.buildWithShortUrl(okraUrl);
}
