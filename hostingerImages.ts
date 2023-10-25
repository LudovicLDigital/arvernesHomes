import {string} from "prop-types";

// generate a function that returns the root path of the image src passed to the function
export default function hostingerImages(src: string) {
    return `${src}`;
}
