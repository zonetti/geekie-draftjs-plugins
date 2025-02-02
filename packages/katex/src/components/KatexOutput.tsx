import React, { useState } from "react";
import katex from "katex";

type Props = {
  value: string;
  onClick: () => void;
};

const KatexOutput = (props: Props): JSX.Element => {
  const { value, onClick } = props;
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  let timer: NodeJS.Timeout | null = null;

  const update = (): void => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      if (!container) return;
      katex.render(value, container, { displayMode: true });
    }, 0);
  };

  update();

  return <div ref={(c) => setContainer(c)} onClick={onClick} />;
};

export default KatexOutput;
