declare module "RemoteApp/ConvertToOrder" {
  import { FC } from "react";

  interface RedirectMessage {
    channel: "redirect";
    data: {
      orderid: string;
      orderReferenceNumber: string;
      redirectUrl: string;
    };
  }

  interface Props {
    iframeURL: string;
    onSaveCallback: (response: RedirectMessage) => void;
  }

  const ConvertToOrder: FC<Props>;
  export default ConvertToOrder;
}
