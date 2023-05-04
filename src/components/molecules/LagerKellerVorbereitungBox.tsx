import React from "react";

/**
 * @Step 11
 *
 * @Tasks:
 * 1.) Resultate anschauen
 * 2.) entweder blocken oder weiter
 */

type LagerKellerVorbereitungBoxProps = {
  setNextStep: Function;
};

export default function LagerKellerVorbereitungBox({
  setNextStep,
}: LagerKellerVorbereitungBoxProps) {
  const [isAnalaysed, setAnalaysed] = React.useState(false);
}
