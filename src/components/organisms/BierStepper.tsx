import * as React from "react";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import MaischePfanneBox from "../molecules/MaischePfanneBox";
import { BeerType } from "../../models/BeerType";
import { Box, Card } from "@mui/material";
import SecondStepBox from "../molecules/SecondStepBox";
import SecondStepControllBox from "../molecules/SecondStepControllBox";
import HopfenAuswahlBox from "../molecules/HopfenAuswahlBox";
import { HopfenType } from "../../models/HopfenType";
import WürzepfanneBox from "../molecules/WürzespfanneBox";
import WhirlpoolBox from "../molecules/WhirlpoolBox";
import GaerkellerBox from "../molecules/GaerkellerBox";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#fcca27",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#fcca27",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#fcca27",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#fcca27",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}
const steps = [
  "Maischepfanne",
  "Läuterbottich",
  "Würze Kontrollieren",
  "Hopfen-Sorte auswählen",
  "Würzepfanne",
    "Whirlpool",
    "Gärkeller vorbereitung",
  "Step8",
];

type BeerStepperProps = {
  selectedBeerType: BeerType;
  setHopfen: Function;
  selectedHopfenType: HopfenType | string;
};

export default function BierStepper({
  selectedBeerType,
  setHopfen,
                                      selectedHopfenType,
}: BeerStepperProps) {
  const [activeStep, setActiveStep]:any = React.useState(0);
  const [selectedHopfen, setSelectedHopfen] = React.useState<
    HopfenType | string
  >(HopfenType.CASCADE);
  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };
  const lastStep = () => {
    if (activeStep !== 0) {
      setActiveStep(activeStep - 1);
    }
  };

  React.useEffect(() => {
    if (activeStep > 3) {
      setHopfen(selectedHopfen);
    }
  }, [activeStep]);

  return (
    <React.Fragment>
      <Stack sx={{ width: "100%", height: "7vh" }}>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<QontoConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>
                <Typography
                  variant="body2"
                  sx={{ color: "#fff", fontSize: "14px" }}
                >
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
      <React.Fragment>
        <Box
          sx={{
            height: "48vh",
            mt: "2vh",
            width: "50vw",
            float: "center",
            ml: "25vw",
            mr: "25vw",
          }}
        >
          <Card sx={{ bgcolor: "#292929", pt: 2, pb: 3 }}>
            {renderSteps(
              activeStep,
              nextStep,
              lastStep,
              selectedBeerType,
              setSelectedHopfen,
              selectedHopfenType
            )}
          </Card>
        </Box>
      </React.Fragment>
    </React.Fragment>
  );
}

function renderSteps(
  step: number,
  setNextStep: Function,
  setLastStep: Function,
  selectedBeerType: BeerType,
  setSelectedHopfen: Function,
  hopfen: HopfenType | string
) {
  switch (step) {
    case 0:
      return (
        <MaischePfanneBox malz={selectedBeerType} setNextStep={setNextStep} />
      );
    case 1:
      return <SecondStepBox setNextStep={setNextStep} />;
    case 2:
      return (
        <SecondStepControllBox
          setNextStep={setNextStep}
          setLastStep={setLastStep}
        />
      );
    case 3:
      return (
        <HopfenAuswahlBox
          setNextStep={setNextStep}
          saveSelectedHopfen={setSelectedHopfen}
        />
      );
    case 4:
      return <WürzepfanneBox setNextStep={setNextStep} hopfen={hopfen} />;
    case 5:
      return <WhirlpoolBox setNextStep={setNextStep}/>;
    case 6:
      return <GaerkellerBox setNextStep={setNextStep}/>;
    default:
      return <div>Not Found</div>;
  }
}
