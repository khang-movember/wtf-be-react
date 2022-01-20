interface ChildProps {
  text: string;
  subText?: string;
  someNumber: number;
  bool: boolean;
}

export const Child = ({text}:ChildProps) => {
  return (
    <div>
      {text}
    </div>
  )
}