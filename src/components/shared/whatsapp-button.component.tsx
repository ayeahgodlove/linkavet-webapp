import { FloatButton } from "antd";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <FloatButton
      href="https://wa.me/237675280634?text=Hello!%20I%20need%20more%20information."
      target="_blank"
      className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded"
      icon={<FaWhatsapp color="#81ce89" size={25} />}
      //   description={"Let's Chat on WhatsApp"}
    />
  );
};

export default WhatsAppButton;
