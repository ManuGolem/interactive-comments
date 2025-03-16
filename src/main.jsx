import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <>
        <App />
        <footer>
            Challenge by{" "}
            <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                className="text-[#09f]"
            >
                Frontend Mentor
            </a>
            . Coded by
            <a
                href="https://manugolem.github.io/Portfolio/"
                target="_blank"
                className="text-[#09f]"
            >
                {" "}
                Manuel Carreras
            </a>
            .
        </footer>
    </>,
);
