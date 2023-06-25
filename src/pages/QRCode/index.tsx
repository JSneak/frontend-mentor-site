import Head from "next/head";
import * as React from "react";
import qr_image from "../../images/image-qr-code.png";
import Card from "~/components/frontendMentor/Card";

const QRCode = () => {
  return (
    <div className="h-screen bg-blue-200">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
        <title>Frontend Mentor | QR code component</title>
      </Head>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <Card
          title={"Improve your front-end skills by building projects"}
          description={
            "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
          }
          image={qr_image}
          image_alt={"QR Code"}
        />
      </div>
    </div>
  );
};

export default QRCode;
