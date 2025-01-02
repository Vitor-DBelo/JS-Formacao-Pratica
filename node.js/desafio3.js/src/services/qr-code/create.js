import prompt from "prompt";
import promptQRCode from "../../prompts-schema/prompt_qrcode.js";
import handle from "../qr-code/handle.js";


async function createQRCode() {
    prompt.start();
    prompt.get(promptQRCode, handle);
}

export default createQRCode;
