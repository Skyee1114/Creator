"use client"
import { useEffect } from "react";

export default function HotjarSnippet({
  children,
}: {
  children: React.ReactNode
}) {
    useEffect(() => {
      const script = document.createElement('script');
      script.innerHTML = `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:4970167,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;

      document.getElementsByTagName('head')[0].appendChild(script);
    }, []);
  return (
    <>{children}</>
  );
};