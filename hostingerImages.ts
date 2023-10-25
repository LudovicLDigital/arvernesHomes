import {string} from "prop-types";

// generate a function that returns the root path of the image src passed to the function
export default function hostingerImages(src: string) {
    return `https://srv1044-files.hstgr.io/a90d8df4ce17a8c2/files/public_html/${src}`;
}
