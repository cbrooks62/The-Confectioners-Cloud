import { useEffect } from "react";

export const Welcome = () => {

    useEffect(() => {
        document.body.style.backgroundImage = `url(src/assets/SplashPage.png)`;
        document.body.style.backgroundSize = "100vw 100vh";
      }, []);
};
