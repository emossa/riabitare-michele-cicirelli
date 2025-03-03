import { useEffect } from "react"
import { injectContentsquareScript } from "@contentsquare/tag-sdk"

export const Hotjar = () => {
    useEffect(() => {
        injectContentsquareScript({
            siteId: "5324218",
            async: true, // Optional: Set to false to wait for script execution until after document parsing.
            defer: false // Optional: Set to true to defer script execution after document parsing.
        });
    }, [])
    return (<></>)
}