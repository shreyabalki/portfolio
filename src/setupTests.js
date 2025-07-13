import "jest-canvas-mock";
import {configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {TextEncoder, TextDecoder} from "util";

// Setup Enzyme with React 16
configure({adapter: new Adapter()});

// Patch for missing TextEncoder/TextDecoder in Jest environment
if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = TextDecoder;
}
