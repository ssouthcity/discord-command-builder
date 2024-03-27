type StackSize = "small" | "medium" | "large";

interface Props extends React.PropsWithChildren {
  size?: StackSize
}

export function Stack(props: Props) {
  const {
    size = "medium",
    children,
  } = props;

  const gaps: { [k in StackSize]: string } = {
    "large": "gap-8",
    "medium": "gap-4",
    "small": "gap-2",
  };

  return (
    <div className={`flex flex-col ${gaps[size]}`} >
      {children}
    </div >
  )
}

