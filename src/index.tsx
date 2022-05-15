import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from "./utils/reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { TopPage } from "./pages/TopPage";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./utils/theme";
import { navigationPaths } from "./utils/constant";
import { NotFound } from "./pages/NotFound";
import { ShutterAnimation } from "./components/atom/ShutterAnimation";
import { RecievePage } from "./pages/RecievePage";
import { SendPage } from "./pages/SendPage";
import { TransactionsPage } from "./pages/TransactionsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { RecoilRoot, useRecoilValue } from "recoil";
import { displayColorModeAtom } from "./store/mode";
if (typeof Buffer === "undefined") global.Buffer = require("buffer").Buffer;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

function Navigation(): JSX.Element {
  const mode = useRecoilValue(displayColorModeAtom);

  return <ThemeProvider theme={customTheme({ mode })}>
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path={navigationPaths.topPage} element={<TopPage />} />
          {/* <Route path={navigationPaths.notFound} element={<NotFound />} /> */}
          <Route path={navigationPaths.sendPage} element={<SendPage />} />
          <Route path={navigationPaths.recievePage} element={<RecievePage />} />
          <Route path={navigationPaths.transactionsPage} element={<TransactionsPage />} />
          <Route path={navigationPaths.settingsPage} element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  </ThemeProvider>;
}


function App(): JSX.Element {
  const [runed, setRuned] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setRuned(true);
    }, 3000);
  }, []);

  return <React.StrictMode>
    <RecoilRoot>
      {!runed
        ? <ShutterAnimation open={!runed} />
        : <Navigation />}
    </RecoilRoot>
  </React.StrictMode>;
}

root.render(<App />);
reportWebVitals();
