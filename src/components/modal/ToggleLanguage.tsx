import Button from "@mui/material/Button/Button";
import CardContent from "@mui/material/CardContent/CardContent";
import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import { useRecoilState } from "recoil";
import { languageAtom } from "../../store/language";
import { Languages, languages } from "../../utils/constant";
import { Select } from "../atom/Select";

type Props = {
  onClose: () => void;
};

export function ToggleLanguage(props: Props): JSX.Element {
  const [lang, setLang] = useRecoilState<Languages>(languageAtom);

  return <>
    <CardContent style={{ marginTop: "1.5em" }}>
      <Container maxWidth={"lg"}>
        <Typography variant="h5" fontWeight="bold">言語切り替え</Typography>
      </Container>
    </CardContent>
    <CardContent>
      <Container maxWidth={"lg"}>
        <Grid container direction="column" spacing={5}>
          <Grid item >
            <Typography variant="subtitle1" color="textSecondary">
              選択した言語に変更します。現時点では日本語にのみ対応しています。
            </Typography>
          </Grid>
          <Grid item >
            <Select
              fullWidth
              label="言語"
              options={languages.map(e => ({ label: e, value: e }))}
              state={lang}
              setState={setLang}
            />
          </Grid>
          <Grid item>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                color="primary"
                variant="contained"
                style={{ paddingLeft: "3em", paddingRight: "3em" }}
                onClick={props.onClose}
              >
                閉じる
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </CardContent>
  </>;
}