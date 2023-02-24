import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"C:/Users/houid/McnWork/Nuxt2Test/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
