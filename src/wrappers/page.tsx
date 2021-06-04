import { ScrollTop } from "../components";

interface Props {
  children: JSX.Element;
}

export const PageWrapper: React.FC<Props> = ({
  children,
}: Props): JSX.Element => (
  <div>
	<ScrollTop />
	<div className=" m-16">{children}</div>
  </div>
);
