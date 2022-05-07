import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./utils/reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { TopPage } from "./pages/TopPage";
import { ThemeProvider } from "@mui/material";
import { customTheme } from "./utils/theme";
import { navigationPaths } from "./utils/constant";
import { NotFound } from "./pages/NotFound";
import { ShutterAnimation } from "./components/atom/ShutterAnimation";
if (typeof Buffer === "undefined") global.Buffer = require("buffer").Buffer;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


function App(): JSX.Element {
  const [runed, setRuned] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setRuned(true);
    }, 2000);
  }, []);

  return <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline>
        {!runed
          ? <ShutterAnimation open={!runed} />
          : <BrowserRouter>
            <Routes>
              <Route path={navigationPaths.topPage} element={<TopPage />} />
              <Route path={navigationPaths.notFound} element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        }
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>;
}

root.render(<App />);
reportWebVitals();
