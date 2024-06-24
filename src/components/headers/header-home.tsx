import * as React from "react"

export function HeaderHome() {
    return (
        <>
            <div className="h-200">
                <video
                    className="h-full w-full object-cover focus:outline-none focus:ring-0"
                    controls playsInline>
                    <source
                        src="https://dhyqqgboo8c5wh9u.public.blob.vercel-storage.com/webapp/video/creator-v5-c-OH86PuwU4uyMYo94Ot9FIVLdSpPLnZ.mp4"
                        type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    )
}
