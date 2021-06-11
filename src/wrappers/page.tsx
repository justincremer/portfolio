import { ScrollTop } from "../components";

interface Props {
  children: JSX.Element;
}

export const PageWrapper: React.FC<Props> = ({
  children,
}: Props): JSX.Element => (
  <div>
	<ScrollTop />
	<div className=" sm:p-7 md:p-16">{children}</div>
  </div>
);
