import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[1260px] max-[991px]:w-[90%] mx-auto">
      {children}
    </div>
  );
};

export default Container;
