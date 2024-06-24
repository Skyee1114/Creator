import * as React from "react"

export function HeaderDashboard() {
    return (
        <>
            <div className="h-96">
                <video
                    className="h-full w-full rounded-tl-lg rounded-bl-lg object-cover focus:outline-none focus:ring-0"
                    autoPlay muted loop playsInline disablePictureInPicture>
                    <source
                        src="https://dhyqqgboo8c5wh9u.public.blob.vercel-storage.com/webapp/video/creator-v5-c-OH86PuwU4uyMYo94Ot9FIVLdSpPLnZ.mp4"
                        type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </>
    )
}
